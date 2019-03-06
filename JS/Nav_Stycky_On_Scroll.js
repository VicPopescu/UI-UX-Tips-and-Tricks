/**
 * Turn navigation bar into sticky after scrolling past certain section
 */
const FixedNav = () => {
    const nav = document.querySelector('#navId');
    const section = document.querySelector('#sectionId');
    const sticky = section.offsetTop;

    const setAsFixed = () => {
        if (window.pageYOffset >= sticky) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    };

    document.addEventListener('scroll', setAsFixed, false);
};

// CSS
.sticky {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
}

.sticky + .sectionClass {
    margin-top: /* navigation element height */
}
