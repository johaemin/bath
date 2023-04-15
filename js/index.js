$(function() {
    // pc
    let count = 1;
    $('#header_btn').click(function() {
        if(count === 1) {
            $('#header_burger > span').addClass('burger_close');
            $('#header_background').css({
                opacity : '1',
            });
            $('#store').delay(100).animate({
                top: '-100%',
            },400);
            $('.header_login ul').delay(100).animate({
                top: '0',
            },400);
            $('.menu p').delay(100).animate({
                top: '0',
            },400);
            $('.header_menu_con').animate({
                height : '220px',
            },200);
            $('.menu_text > li > a').delay(300).animate({
                top : '0',
            },200);
            // mobile
            // $('.m_header_menu_con').animate({
            //     height : '100vh',
            // },200);
            // $('.m_header_menu_con li div > p').delay(100).animate({
                
            //     top: '0'
            // },400);
            // $('.m_menu_text > li > a').delay(300).animate({
            //     top : '0',
            // },200);
            count--;
        }
        else if(count === 0) {
            $('#header_burger > span').removeClass('burger_close');
            $('#header_background').css({
                opacity : '0',
            });
            $('#store').animate({
                top: '50%',
            },400);
            $('.header_login ul').animate({
                top: '100%',
            },400);
            $('.menu p').animate({
                top: '100px',
            },400);
            $('.header_menu_con').animate({
                height : '0',
            },200);
            $('.menu_text > li > a').animate({
                top : '100%',
            },200);

            // mobile
            // $('.m_header_menu_con').animate({
            //     height : '0',
            // },200);
            // $('.m_header_menu_con li div > p').animate({
            //     top: '29px'
            // },400);
            // $('.m_menu_text > li > a').delay(300).animate({
            //     top : '100%',
            // },200);
            count++;
        }
    });
    // moblie
    let count1 = 1;
    $('#m_header_btn').click(function() {
        if(count1 === 1) {
            $('#m_header_burger > span').addClass('burger_close');
            $('#m_header_background').css({
                opacity : '1',
            });
            $('.m_header_menu_con').animate({
                height : '100vh',
            },200);
            $('.m_header_menu_con li div > p').animate({
                top: '0'
            },200);
            $('.m_menu_text > li > a').animate({
                top : '0',
            },200);
            count1--;
        }
        else if (count1 === 0) {
            $('#m_header_burger > span').removeClass('burger_close');
            $('#m_header_background').css({
                opacity : '0',
            });
            $('.m_header_menu_con').animate({
                height : '0',
            },200);
            $('.m_header_menu_con li div > p').animate({
                top: '29px'
            },200);
            $('.m_menu_text > li > a').animate({
                top : '100%',
            },200);
            count1++;
        }
    });
    $('#store').stop().mouseenter(function() {
        $('.store_box').css({
            display : 'block',
        })
        $('.store_box').stop().delay(200).animate({
            opacity : '1',
        },200);
        $('.store_box li a').animate({
            top : '0',
        },200);
    });
    $('#store').stop().mouseleave(function() {
        $('.store_box li a').animate({
            top : '21px',
        },200);
        $('.store_box').stop().animate({
            opacity : '0',
        },200);
        $('.store_box').delay(400).css({
            display : 'none',
        });
    });

    let secTwoTop = $('#sec2').offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > secTwoTop) {
            $('header').addClass('header_color');
        }
        else {
            $('header').removeClass('header_color');
        }
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $('.top_btn').addClass('z_index');
        }else {
            $('.top_btn').removeClass('z_index');
        }
    });
    $('.top_btn').click(function() {
        $('html, body').animate({
            scrollTop : 0,
        }, 400);
    });

}); //end