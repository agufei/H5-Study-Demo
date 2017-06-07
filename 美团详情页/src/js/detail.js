    var oUl = document.getElementById('floatbar');
    var oContainer = document.getElementById('mg-floatbar');
    document.onscroll = function() {
        if (oContainer.getBoundingClientRect().top <= 0) {
            oUl.classList.add('fix-top');
        } else {
            oUl.classList.remove('fix-top');
        }
    };

    // 套餐选择
    $('.info-kind-btn').each(function() {
        $(this).click(function() {
            $(this).siblings('.btn-active').removeClass('btn-active');
            $(this).addClass('btn-active');
        });
    });

    // 数量增减
    var inc = false;
    var dec = false;
    setInterval(function() {
        if (inc) {
            var n = $('#qty').val();
            $('#qty').val(++n);
        }
        if (dec) {
            var n = $('#qty').val();
            if (n > 0) {
                $('#qty').val(--n);
            }
        }
    }, 200);
    $('#dec').mousedown(function() {
        // console.log(n);
        dec = true;
    }).mouseup(function() {
        dec = false;
    });
    $('#inc').mousedown(function() {
        inc = true;
    }).mouseup(function() {
        inc = false;
    });
    // $('#qty').change(function() {
    //     if ($(this).val() <= 0) {
    //         $('#dec').attr('disabled', 'true');
    //     } else {
    //         $('#dec').attr('disabled', 'false');
    //     }
    // });

    // 店铺地点信息切换
    $('#shop-location').find('li').each(function() {
        $(this).mouseover(function() {
            $('#shop-location').find('.show').removeClass('show');
            $(this).find('.desc').addClass('show');
        });
    });

    // 浮动条按钮控制
    var btnL = $('#fb-location');
    var btnN = $('#fb-notice');
    var btnD = $('#fb-detail');
    var btnS = $('#fb-shop');
    var btnC = $('#fb-comt');
    var cur = $(document).scrollTop();
    var des = cur;
    var speed = 50;
    setInterval(function() {
        if (des > cur) {
            if (des >= (cur + speed)) {
                cur += speed;
            } else {
                cur = des;
            }
            $(document).scrollTop(cur);
        }
        if (des < cur) {
            if (des <= (cur - speed)) {
                cur -= speed;
            } else {
                cur = des;
            }
            $(document).scrollTop(cur);
        }
    }, 30);

    btnL.click(function() {
        des = $('.mg-location').offset().top - 40;
    });
    btnN.click(function() {
        des = $('.mg-notice').offset().top - 40;
    });
    btnD.click(function() {
        des = $('.mg-detail').offset().top - 40;
    });
    btnS.click(function() {
        des = $('.mg-shop').offset().top - 40;
    });
    btnC.click(function() {
        des = $('.mg-comment').offset().top - 40;
    });
    $(document).scroll(function() {
        $('#floatbar').find('.cur').removeClass('cur');
        if ($(this).scrollTop() < ($('.mg-notice').offset().top - 50)) {
            btnL.addClass('cur');
        } else if ($(this).scrollTop() < ($('.mg-detail').offset().top - 40)) {
            btnN.addClass('cur');
        } else if ($(this).scrollTop() < ($('.mg-shop').offset().top - 40)) {
            btnD.addClass('cur');
        } else if ($(this).scrollTop() < ($('.mg-comment').offset().top - 40)) {
            btnS.addClass('cur');
        } else {
            btnC.addClass('cur');

        }
    });