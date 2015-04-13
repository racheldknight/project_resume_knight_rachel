jQuery(function($) {
    $(document).ready( function() {
        $('.navbar-wrapper').stickUp({
            parts: {
                0: 'education',
                1: 'work',
                2: 'skills',
                3: 'interests',
                4: 'contact'
            },
            itemClass: 'menuItem',
            itemHover: 'active',
            topMargin: 'auto'
        });

        $( '.jump-to-section' ).on( 'click', function() {
            var section = $(this).attr('data-section');

            $( section ).animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
        });
    });
});

var barChartData = {
    labels : ["HTML","CSS","jQuery","JS","Design","Branding","SEO"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [90,90,70,60,90,80,80],
        },
    ]
}

window.onload = function(){
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : true,
        scaleShowGridLines : false,
        scaleFontFamily: "'Gentium Book Basic', 'serif'",
        scaleFontColor: "#445859",
        scaleFontSize: 16,
        showTooltips: false
    });
}
