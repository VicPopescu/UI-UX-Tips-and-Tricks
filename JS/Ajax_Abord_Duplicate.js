/**
 *  @description If 2 requests are made on same API, abord previous request
 */

//store current ajax requests
$.xhrPool = [];


/**
 * @public
 * @description Abord all current requests
 */
$.xhrPool.abortAll = function () {
    $(this).each(function (i, jqXHR) {          //  cycle through list of recorded connection
        jqXHR.abort();                          //  aborts connection
        $.xhrPool.splice(i, 1);                 //  removes from list by index
    });
};


/**
 * @public
 * @description Abord any previous duplicate request
 */
$.xhrPool.abordPrevious = function (currentjqXHR) {

    $(this).each(function (i, jqXHR) {          //  cycle through list of recorded connection
        if (currentjqXHR.API === jqXHR.API) {   //  check if duplicate request exists
            jqXHR.abort();                      //  aborts connection
            $.xhrPool.splice(i, 1);             //  removes from list by index
        }
    });
};


/**
 * @public
 * @description Clear completed requests
 */
$.xhrPool.clearCompleted = function (jqXHR) {
    var i = $.xhrPool.indexOf(jqXHR);
    if (i > -1) $.xhrPool.splice(i, 1);
};


/**
 * @description AJAX global setup
 */
$.ajaxSetup({
    beforeSend: function (jqXHR, that) {

        //set custom url property
        var url = this.url.match(/^([^?]+)/)[0];
        jqXHR.API = url;

        
        $.xhrPool.abordPrevious(jqXHR);         //  abord previous duplicate call, if any
        $.xhrPool.push(jqXHR);                  //  add current requst to the poll
    },
    complete: function (jqXHR) {
        $.xhrPool.clearCompleted(jqXHR);        //clear completed request from poll
    }
});