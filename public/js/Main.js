require = ('bootstrap');
require = ('../css/main.css');
require = ('../Server.js');


$(document)
    .ready(function() {
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;
        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;
    })
;


$('.fullscreen.modal')
    .modal('show')
;


$('select.dropdown')
    .dropdown()
;