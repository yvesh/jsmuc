
// Das hier ... ist eine GLOBALE
(function($) {

    $.fn.makeGreen = function() {
        this.css('color', 'green');

        return this;
    };

    $.fn.makeYellow = function(settings) {
        // Standardwerte
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, settings);

        var API = {


            init: function() {
                this.css('color', settings.color);
            }
        };



        API.init();

        return this;
    };


})(jQuery);

$('#test').makeGreen().makeYellow({'color': 'red'}).css('background', 'red');