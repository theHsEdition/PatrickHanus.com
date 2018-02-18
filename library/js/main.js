// This was a simple version that doesn't stay consistant from page to page
// $(document).ready(function(){
//     $("#darkMode").click(function(){
//     	//event.preventDefault();
//         $("body").toggleClass("dark");
//     });
// });

(function (window, document, undefined) {

    'use strict';

    // Feature test
    if (!('localStorage' in window) || !('querySelector' in document)) return;

    // Get our newly insert toggle
    var nightMode = document.querySelector('#darkMode');
    if (!nightMode) return;

    // When clicked, toggle night mode on or off
    nightMode.addEventListener('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("dark");
        if ( document.documentElement.classList.contains('dark') ) {
            localStorage.setItem('darkMode', true);
            return;
        }

        localStorage.removeItem('darkMode');
    }, false);

})(window, document);