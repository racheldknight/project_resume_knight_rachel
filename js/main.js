

jQuery(function($) {
    $(document).ready( function() {
        $('.navbar-wrapper').stickUp({
            parts: {
                0: 'education',
                1: 'work',
                2: 'skills',
                3: 'interests',
            },
            itemClass: 'menuItem',
            itemHover: 'active',
            topMargin: 'auto'
        });



    });

});