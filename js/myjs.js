(function ($) {
})(jQuery);
(function (win, $) {
    var init = function () {
        if(win.navigator.userAgent.indexOf('iphone')!=-1&&win.navigator.userAgent.indexOf('Android')!=-1){
            $('.banner').html('').hide();
        }else{
            
            $('.banner').unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 3000,              //  The delay between slide animations (in milliseconds)
            complete: function () {
            },  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: true              //  Support responsive design. May break non-responsive designs
        });
        }
        window.onload = function() {
            $(".FullScreen").fadeOut();    //图片加载完后隐藏加载页
        };
        $("#navbar-example").width($(window).width());
        $(win).resize(function () {
            $("#navbar-example").width($(window).width()); //process here
        });
        $('#navbar-example').scrollspy();
    };
    // 添加事件监听
    var handler = function () {
        //返回顶部按钮点击事件
        $(".back-top").on("click", function (e) {
            e.preventDefault();
            $(document.body).animate({ scrollTop: 0 }, 800);
        });
        //上下滚动事件监听
        $('#navbar-example').on('activate.bs.scrollspy', function () {
            var pre = $("#navbar-example li.active > a").text();
            if (pre != "About") $('.back-top').fadeIn();
            else $('.back-top').fadeOut();
            PageAniamtion(pre);//页面过场动画
        });
    };
    var PageAniamtion = function (liText) {
        switch (liText) {
            case 'About':
            {
                $('#page1 p').show();
                break;
            }
            case 'Skill':
            {
                $('#page2 h3').show();
                $('#page2 p').show();
                break;
            }
            case 'Experience':
            {
                $('#page3 h3').show();
                $('#page3 .exper-box').show();
                break;
            }
            case 'More':
            {
                $('#page4 .row').show();
                break;
            }
            case 'Contact':
            {
                $('#page5 h3').show();
                $('#page5 article').show();
                break;
            }
        }
    };
    $(function () {
        init();
        handler();
    });
})(this, jQuery);
