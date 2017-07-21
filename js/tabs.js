(function ($) {

    function initTabs($container) {
        // $container = $('.tabs');

        var tabs = $('.tabs-body div', $container);
        tabs.hide();

        $('.tabs-header a', $container).click(function (e) {
            e.preventDefault();
            tabs.hide();
            $('.active', $container).removeClass('active');

            var $link = $(this);

            $link.addClass('active');

            var href = $link.attr('href');

            $(href, $container).show();
        });

        var initialTarget = $('.tabs-header a.active', $container).attr('href');
        $(initialTarget, $container).show();
    }

    // ich muss es auf ein Objekt binden was überall existiert
    window.initTabs = initTabs;

    $.fn.initTabs = function(params){
        console.log(params);

        $container = $(this);

        var tabs = $('.tabs-body div', $container);
        tabs.hide();

        $('.tabs-header a', $container).click(function (e) {
            e.preventDefault();
            tabs.hide();
            $('.active', $container).removeClass('active');

            var $link = $(this);

            $link.addClass('active');

            var href = $link.attr('href');

            $(href, $container).show();
        });

        var initialTarget = $('.tabs-header a.active', $container).attr('href');
        $(initialTarget, $container).show();

        return this;
    };
})(jQuery);
