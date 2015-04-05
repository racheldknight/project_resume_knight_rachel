arrayOfData = new Array(
    [90,'HTML','#F1F2E4'],
    [90,'CSS','#F1F2E4'],
    [70,'SEO','#F1F2E4'],
    [60,'jQuery/JS','#F1F2E4'],
    [80,'Branding','#F1F2E4'],
    [90, 'Design', '#F1F2E4']
);

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

        $('#graph').jqBarGraph({ 
            data: arrayOfData,
            showValues: false,
        });

    });

});