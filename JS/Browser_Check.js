/**
 *  @description Browser check. Each variable will be initialised "true" or "false" depending on the browser found
 *  @see bellow example
 */
var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

if (is_chrome && is_safari) {
    is_safari = false;
}
if (is_chrome && is_opera) {
    is_chrome = false;
}

//usage
if(is_explorer){
    //do things for explorer
}