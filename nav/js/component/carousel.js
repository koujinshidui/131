/**
 * Created by zhanghuaizhong on 2017/3/8.
 */
zmEditor.component.carousel = {
    setting: function (box) {
        var nowEdit = zmEditor.component.nowEdit();
        var carouselBox = nowEdit.find('.zm-component-carousel-box');
        var tabs1_c1 = $('<div></div>');
        var config1_c1 = [
            {type: 'carousel_fullScreen', element: nowEdit, flag: ''},
            {
                type: 'slider',
                element: carouselBox,
                flag: {
                    title: "边框宽度<br/>(像素)",
                    style: "tab_noColor",
                    isColor: false,
                    param: "borderSetting",
                    size: [0, 20]
                }
            },
            {
                type: 'slider',
                element: carouselBox,
                flag: {title: "边框颜色", style: "tab_color", isColor: true, param: "borderColor", size: [0, 100]}
            },
            {type: 'radius', element: carouselBox, flag: ''}
        ];
        var items1_c1 = zmEditor.component.setItems.config(config1_c1);
        items1_c1.forEach(function (e) {
            tabs1_c1.append(e);
        });
        tabs1_c1.find('.zm-edit-radius-val').eq(0).css({'top': '-15px','left':'25px'});
        tabs1_c1.find('.zm-edit-radius-val').eq(1).css({'top': '-15px','right':'25px'});
        tabs1_c1.find('.zm-edit-radius-val').eq(2).css({'bottom': '-35px','right':'25px'});
        tabs1_c1.find('.zm-edit-radius-val').eq(3).css({'bottom': '-35px','left':'25px'});

        var tabs1_c2 = $('<div></div>');
        var config1_c2 = [
            {
                type: 'slider',
                element: nowEdit,
                flag: {title: "翻页耗时", style: "tab_noColor", isColor: false, param: "picCutTime", size: [1, 3]}
            },
            {type: 'carousel_cutPage', element: nowEdit, flag: ''},
            {type: 'carousel_cutStyle', element: nowEdit, flag: ''},
            {type: 'carousel_cutArrow', element: nowEdit, flag: ''}
        ];
        var items1_c2 = zmEditor.component.setItems.config(config1_c2);
        items1_c2.forEach(function (e) {
            tabs1_c2.append(e);
        });
        var tabs1_c3 = $('<div></div>');
        var config1_c3 = [
            {type: 'carousel_isPageNum', element: nowEdit, flag: ''},
            {type: 'carousel_pageNumStyle', element: nowEdit, flag: ''},
            {type: 'carousel_pageNumAlign', element: nowEdit, flag: ''},
            {
                type: 'slider',
                element:  nowEdit.find(".zm-component-carousel-pagePoint"),
                flag: {title: "页码颜色", style: "tab_color", isColor: true, param: "backgroundColor"}
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pageNumStyle"),
                flag: {
                    title: "浮点颜色",
                    style: "tab_color",
                    isColor: true,
                    param: "backgroundColor"
                }
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pagePoint"),
                flag: {
                    title: "页码间距<br/>(像素)",
                    style: "tab_noColor",
                    isColor: false,
                    param: "pageNumMargin",
                    size: [0, 20]
                }
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pointGroup"),
                flag: {
                    title: "页码边距<br/>(像素)",
                    style: "tab_noColor",
                    isColor: false,
                    param: "pageGroupMargin",
                    size: [-20, 50]
                }
            }
        ];
        var items1_c3 = zmEditor.component.setItems.config(config1_c3);
        items1_c3.forEach(function (e) {
            tabs1_c3.append(e);
            e.find(".zm-edit-text-title").width("72px");
        });
        var tabs1List = [
            {title: "<span class='fa fa-puzzle-piece fa-lg'></span><br>通用", content: tabs1_c1},
            {title: "<span class='fa fa-map'></span><br>翻页", content: tabs1_c2},
            {title: "<span class='fa fa-file-powerpoint-o'></span><br>页码", content: tabs1_c3}
        ];
        var tabs1 = zmEditor.component.setItems.tabs_child(tabs1List);

        var tabs2 = $('<div></div>');
        var config2 = [
            {type: 'carousel_imageManage', element: nowEdit, flag: ''},
            {type: 'carousel_pagePicManage', element: nowEdit, flag: ''}
        ];
        var items2 = zmEditor.component.setItems.config(config2);
        items2.forEach(function (e) {
            tabs2.append(e);
        });
        var tabs3 = $('<div></div>');
        var config3 = [{type: 'boxShadow', element: carouselBox, flag: ''}];
        var items3 = zmEditor.component.setItems.config(config3);
        items3.forEach(function (e) {
            tabs3.append(e);
        });

        var tabsList = [{title: "常规", content: tabs1},
                        {title: "图像", content: tabs2},
                        {title: "阴影", content: tabs3}];
        return zmEditor.component.setItems.tabs(tabsList);
    },
    productImgList: [
        {name: '折叠按摩床鲁班-艾娃', href: '', url: 'imgs/carousel-product001.jpg'},
        {name: '豪华按摩床凯撒-德鲁克', href: '', url: 'imgs/carousel-product005.jpg'},
        {name: '按摩床克拉斯-福特', href: '', url: 'imgs/carousel-product006.jpg'},
        {name: '英芬尼双层置物车', href: '', url: 'imgs/carousel-product007.jpg'},
        {name: '升降按摩床卢克-德鲁克', href: '', url: 'imgs/carousel-product008.jpg'}
    ],
    adImgList: [
        {name: '海尔冰箱广告1', href: '', url: 'imgs/carousel-ad002.jpg'},
        {name: '机械时代', href: '', url: 'imgs/carousel-ad001.jpg'},
        {name: '京东超市宝贝趴', href: '', url: 'imgs/carousel-ad003.jpg'},
        {name: '医药广告', href: '', url: 'imgs/carousel-ad004.jpg'},
        {name: '海尔冰箱广告2', href: '', url: 'imgs/carousel-ad005.jpg'}
    ],
    imgList: [
        {name: 'lightRing', href: '', url: 'imgs/carousel001.png'},
        {name: 'spiderMan', href: '', url: 'imgs/carousel002.png'},
        {name: 'goddess', href: '', url: 'imgs/carousel004.png'},
        {name: 'jumpingCat', href: '', url: 'imgs/carousel005.png'},
        {name: 'dreamTown', href: '', url: 'imgs/carousel006.png'},
        {name: 'houseOnSea', href: '', url: 'imgs/carousel007.png'},
        {name: 'floatIsland', href: '', url: 'imgs/carousel008.png'},
        {name: 'flyingShip', href: '', url: 'imgs/carousel009.png'},
        {name: 'thePlanet', href: '', url: 'imgs/carousel010.png'}
    ], // carousel模块在组装之前获取图片,临时使用10张800*600本地图片
    getImgsInfo: function (main, slideStyle, thisImgSrc) {
        //第一个参数：.zm-component-carousel-main .zm-component-main
        //第二个参数：传入的默认轮播方式
        //第三个参数：组件列表里略缩图的路径
        //此处图片列表来源应该为：根据传入借口参数不同，得到不同图片；
        var carouselBox = main.find('.zm-component-carousel-box'), imgStr = "", pagePointStr = "",
            imgNum = isNaN(parseInt(carouselBox.attr('data-pageNum'))) ? 5 : parseInt(carouselBox.attr('data-pageNum')),
            imgList, theSlideImgList = carouselBox.attr('data-imgs');
        switch (theSlideImgList) {
            case 'productimgList':
                imgList = zmEditor.component.carousel.productImgList;
                break;
            case 'adimgList':
                imgList = zmEditor.component.carousel.adImgList;
                carouselBox.addClass('maxWidth1200').closest('.zm-component-box1').css('left', '0');
                break;
            default:
                imgList = zmEditor.component.carousel.imgList;
                break
        }
        for (var i = 0; i < imgNum; i++) {
            imgStr += '<figure  class="zm-component-carousel-slide"><img title="' + imgList[i].name + '" src=' + imgList[i].url + '></figure>';
            pagePointStr += "<div class='zm-component-carousel-pagePoint zm-component-carousel-pagePoints0' slideIndex=" + i + ">" + (i + 1) + "</div>"
        }

        var imgWidth = carouselBox.width();
        var imgHeight = carouselBox.height();
        main.css({'width': imgWidth, 'height': imgHeight})
            .attr({'data-origWidth':imgWidth,'data-origHeight':imgHeight});

        main.before("<div class='zm-component-carousel-picTip'>" +
            "<div class='zm-component-carousel-prevPic fa fa-play-circle zm-tooltip' data-zm-title='上一页'></div>" +
            "<div class='zm-component-carousel-pageTip'>第<span>1</span>页,共<i>" + imgNum + "</i>页</div>" +
            "<div class='zm-component-carousel-nextPic fa fa-play-circle zm-tooltip' data-zm-title='下一页'></div></div>");

        var pageCutBtn = $('<div class="zm-component-carousel-controlBtn left   fa fa-angle-left fa-4x"></div>' +
            '<div class="zm-component-carousel-controlBtn right  fa fa-angle-right fa-4x"></div>');
        var pagePoints = $('<div class="zm-component-carousel-pointGroup clearFloat" style="display: none">' + pagePointStr + '</div>');
        main.append(pageCutBtn, pagePoints)
            .prepend('<style style="background-color: rgba(255,255,255,1)" class="zm-component-carousel-pageNumStyle"></style>');
        main.find('.zm-component-carousel-pagePoint:eq(0)').addClass('itsTurn');
        if (main.find('.zm-component-carousel-point').length > 0) {
            main.find('.zm-component-carousel-point').remove();
            main.find('.zm-component-carousel-pointGroup').show()
        } else {
            main.find('.zm-component-carousel-pointGroup').hide()
        }
        if (main.find('.zm-component-carousel-pageCutBtn').length > 0) {
            main.find('.zm-component-carousel-pageCutBtn').remove();
            main.find('.zm-component-carousel-controlBtn').show().css('color', '#fff')
        } else {
            main.find('.zm-component-carousel-controlBtn').hide()
        }

        var theLeftPosition = imgWidth - pagePoints.width();
        theLeftPosition = theLeftPosition / imgWidth / 2;
        pagePoints.css({left: theLeftPosition * 100 + '%'}).attr("alignStyle", "center");

        var slideControlBtn = main.find(".zm-component-carousel-controlBtn");
        var pagePoint = main.find(".zm-component-carousel-pagePoint");
        slideControlBtn.css({top: imgHeight / 2 - slideControlBtn.height() / 2});
        //添加并隐藏暂时不需要的功能：页面切换按钮、页码提示原点

        carouselBox.attr('data-slide-args', 'speed=1000&autoScroll=true&timeout=1000&effect=' + slideStyle + '&hoverStop=off');
        //设置轮播图初始参数
        var slideArgs = carouselBox.attr('data-slide-args');
        pagePoint.on('click',function () {
            carouselBox.boxSlider('showSlide',$(this).attr('slideIndex'))
        });
        carouselBox.html(imgStr)
            .boxSlider({
                speed: parseInt(slideArgs.split('speed=')[1].split('&')[0]),
                autoScroll: slideArgs.split('autoScroll=')[1].split('&')[0],
                prev: main.find(".zm-component-carousel-controlBtn.left"),
                next: main.find(".zm-component-carousel-controlBtn.right"),
                timeout: parseInt(slideArgs.split('timeout=')[1].split('&')[0]),
                effect: slideArgs.split('effect=')[1].split('&')[0],
                // reverse:true,
                onbefore: zmEditor.component.carousel.getImgIndex
            }).attr('data-reverse','false');

        main.prev().find(".zm-component-carousel-prevPic").click(function () {
            main.find('.zm-component-carousel-controlBtn.left').triggerHandler('click');
        });
        main.prev().find(".zm-component-carousel-nextPic").click(function () {
            main.find('.zm-component-carousel-controlBtn.right').triggerHandler('click');
        });//添加左右按钮点击翻页事件

        if (thisImgSrc) {
            for (var x = 0; x < imgNum; x++) {
                if (imgList[x].url == thisImgSrc) {
                    carouselBox.boxSlider('showSlide', x);
                    pagePoint.eq(x).addClass("itsTurn");
                    main.prev().find(".zm-component-carousel-pageTip span").text(x + 1)
                }
            }
        }
    },//轮播模块准备事件
    //拖拽上传图片ele:string图片盒子ID、cb回调函数(data)
    // data:array[imgTitle:图片名称,imgUrl:图片名称路径,fileList:图片全部信息]
    dragLocalImgUpdate: function (ele, cb) {
        $(document).on({
            dragleave: function (e) {
                e.preventDefault();
            }, drop: function (e) {
                e.preventDefault();
            },
            dragenter: function (e) {
                e.preventDefault();
            }, dragover: function (e) {
                e.preventDefault();
            }
        });
        var box = document.getElementById(ele);
        box.addEventListener("drop", function (e) {
            e.preventDefault();
            var imgArr = [];
            var fileList = e.dataTransfer.files;
            if (fileList.length == 0) {
                return false;
            }
            for (var i = 0; i < fileList.length; i++) {
                if (fileList[i].type.indexOf('image') != -1 && Math.floor((fileList[i].size) / 1048576) < 5) {
                    imgArr.push({
                        imgUrl: window.URL.createObjectURL(fileList[i]),
                        imgTitle: fileList[i].name,
                        fileList: fileList[i]
                    })
                }
            }
            if (cb) {
                cb(imgArr);
            }
        }, false);
    },
    slidePicManage: function (ele) {
        var picListStr = "", storageImgUrlStr = "", thePicListBox = $(".zm-dialog-carousel-contLeftImgGroup"),
            picNum = 0;
        var carouselPicList = [], iSelected = ele, carouselSlideBox = iSelected.find(".zm-component-carousel-box");
        var imgInPage = carouselSlideBox.find('.zm-component-carousel-slide img');

        function spanListStr(tab, tit, src, place) {
            return '<li><figure class="zm-dialog-carousel-slidePic" tabindex="' + tab + '">'
                + '<span class="zm-dialog-carousel-checkbox fa fa-check transparent"></span>'
                + '<img style="width: 100%;height: 100%;cursor: move" title="' + tit + '" src="' + src + '" />'
                + '<input class="zm-dialog-carousel-namePic" type="text" readonly value="' + place + '">'
                + '<div class="zm-dialog-carousel-picSetting clearFloat">'
                + '<span class="fa fa-search zm-tooltip"  data-zm-title="放大"></span>'
                + '<span class="fa fa-pencil zm-tooltip" data-zm-title="<span>重命名</span>"></span>'
                + '<span class="fa fa-trash zm-tooltip"  data-zm-title="删除"></span>'
                + '<span class="fa fa-download zm-tooltip" data-zm-title="下载到本地"></span>'
                + '<span class="fa fa-eye zm-tooltip"  data-zm-title="展示"></span>'
                + '</div></figure></li>'
        }

        for (var i = 0; i < imgInPage.length; i++) {
            carouselPicList.push({imgUrl: imgInPage[i].src, imgTitle: imgInPage[i].title});//获取当前轮播图片
        }
        $.each(carouselPicList, function (index, val) {
            val.imgTitle = val.imgTitle == "" ? val.imgUrl : val.imgTitle;
            picListStr += spanListStr(index + 1, val.imgTitle, val.imgUrl, val.imgTitle);
            storageImgUrlStr += val.imgUrl;
        });
        thePicListBox.html('<ul class="zm-drag-box clearFloat">' + picListStr + '</ul>');

        thePicListBox.on('mousedown', 'li figure', function () {
            var _this = $(this), isShow = $('.zm-dialog-carousel-crimIsShow .zm-switch-box');
            picNum = _this.parent().index();
            thePicListBox.find('li figure').removeClass('theManagingPic');
            _this.addClass('theManagingPic');

            if (_this.find('img').attr('title')) {
                $('.zm-dialog-carousel-crimNameImg input').val(_this.find('img').attr('title'))
            } else {
                $('.zm-dialog-carousel-crimNameImg input').attr('placeholder', _this.find('img').attr('title'))
            }
            if (_this.find('.zm-dialog-carousel-picSetting .fa-eye').hasClass('fa-eye-slash')) {
                isShow.removeClass('zm-switch-box-on')
            } else {
                isShow.removeClass('zm-switch-box-on').addClass('zm-switch-box-on')
            }
        }).on('mouseenter', 'li', function () {
            var _this = $(this);
            _this.find('.zm-dialog-carousel-checkbox').fadeIn(150);
            _this.find('.zm-dialog-carousel-namePic').css('display', 'inline-block');
        }).on('mouseleave', 'li', function () {
            var _this = $(this);
            _this.find('.zm-dialog-carousel-namePic').hide();
            if (_this.find('.zm-dialog-carousel-checkbox').hasClass('transparent')) {
                _this.find('.zm-dialog-carousel-checkbox').fadeOut(150)
            }
        });
        thePicListBox.on('mousedown', 'figure .zm-dialog-carousel-namePic', function (e) {
            e.stopPropagation();
        }).on('focus', 'figure .zm-dialog-carousel-namePic', function () {
            $(this).css({'border': '1px solid #4ab1a7', 'box-shadow': '0 0 3px #4ab1a7'})
        });
        thePicListBox.on('mousedown', 'figure .zm-dialog-carousel-checkbox', function (e) {
            e.stopPropagation();
            $(this).toggleClass('transparent');
        });//点击选中

        thePicListBox.on('mousedown', 'li .zm-dialog-carousel-picSetting span', function (e) {
            e.stopPropagation();
            var _this = $(this);
            var theIndex = _this.index();
            switch (theIndex) {
                case 0://放大
                    var theImage = new Image();
                    theImage.src = _this.closest('figure').find('img').attr("src");
                    var imageWidth = theImage.width;
                    var imageHeight = theImage.height;
                    zmEditor.dialog.open({
                        title: '',
                        content: '<img src="' + theImage.src + '"/>',
                        width: imageWidth,
                        height: imageHeight + 50,
                        movable: true,
                        target: $('body')
                    });
                    break;
                case 1://重命名
                    _this.closest('figure').find('.zm-dialog-carousel-namePic').show()
                        .removeAttr('readonly').focus();
                    break;
                case 2://删除
                    _this.closest('li').remove();
                    $('.zm-tooltipBox').hide();
                    break;
                case 3://下载到本地
                    break;
                case 4://是否展示
                    _this.toggleClass('fa-eye-slash');
                    $('.zm-dialog-carousel-crimIsShow .zm-switch-box').toggleClass('zm-switch-box-on');
                    break;
                default:
                    break
            }
        });
        thePicListBox.on('change', 'li figure .zm-dialog-carousel-namePic', function () {
            $(".zm-dialog-carousel-crimNameImg input").val($(this).val())
        });
        var pages = thePicListBox.find("figure");
        $(".zm-dialog-carousel-btns .ImgUpdate").click(function () {//点击添加图片
            zmChoiceRadio.choicePicture({multiple :'true',callBack: function (e) {
                    var  addPicStr = '';
                    $.each(e, function (index, val) {
                        addPicStr += spanListStr(pages.length + index + 1, val.fName, val.fCoverUrl, val.fName);
                    });
                    thePicListBox.find('.zm-drag-box').append($(addPicStr));
                    if (thePicListBox.find("figure").length > 50) {
                        return false
                    }
            }})
        });//点击上传图片

        zmEditor.component.carousel.dragLocalImgUpdate('zm-dialog-carousel-contLeftImgGroup', function (data) {
            console.table(data);
            var imgStr = '';
            for (var i = 0; i < data.length; i++) {
                imgStr += spanListStr(thePicListBox.find('li').length + i + 1, data[i].imgTitle, data[i].imgUrl, data[i].imgTitle)
            }
            thePicListBox.find('.zm-drag-box').append($(imgStr));
            thePicListBox.removeClass('dragLocalImgTip')
        });//拖拽上传图片


        $('.zm-dialog-carousel-btns .imgDelete').click(function () {
            var theSlide = thePicListBox.find('figure');
            for (var i = 0; i < theSlide.length; i++) {
                if (theSlide.eq(i).find('.zm-dialog-carousel-checkbox').hasClass('transparent')) {
                } else {
                    theSlide.eq(i).parent().remove();
                    //暂时不从数据中删除
                }
            }
        });//批量删除图片

        $('.zm-dialog-carousel-crimIsShow .zm-switch-box').click(function () {
            thePicListBox.find("figure:eq(" + picNum + ") .fa-eye").toggleClass('fa-eye-slash')
        });//右侧点击切换是否展示

        $(".zm-dialog-carousel-crimNameImg input").on('blur', function () {
            var theManagingFig = thePicListBox.find('figure');
            for (var l = 0; l < theManagingFig.length; l++) {
                if (theManagingFig.eq(l).hasClass('theManagingPic')) {
                    theManagingFig.eq(l).find('.zm-dialog-carousel-namePic').val($(this).val())
                }
            }
        });//右侧点击图片命名

        $('.zm-dialog-carousel-crimSetHref .zm-switch-box').on("click", function () {
            var _this = $(this), thisHrefBtn = _this.next('.zm-edit-carousel-setHrefBtn');
            if (_this.hasClass("zm-switch-box-on")) {
                thisHrefBtn.attr("onclick", "").removeClass('setHrefBtn')
            } else {
                thisHrefBtn.attr("onclick", "zmEditor.dialog.setHref(this)").addClass('setHrefBtn');
            }
        });//设置链接

        $('.zm-dialog-carousel-manageSave').click(function () {
            zmEditor.dialog.open({
                title: '温馨提示',
                content: '<div style="margin: 10px"><h3>当前轮播图片将变为该图片列表内图片</h3></div>',
                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK beSure">确 定</span></div>'),
                width: 330,
                height: 200,
                movable: true,
                target: $('body')
            }, function () {
                $('.zm-dialog-btnOK.beSure').click(function () {
                    var figureStr = '', thePicSlide = thePicListBox.find('li figure')
                        , pageSlider = carouselSlideBox.find('figure')
                        , styles = pageSlider.eq(pageSlider.length - 1).attr('style');
                    for (var k = 0; k < thePicSlide.length; k++) {
                        var inputVal = thePicSlide.eq(k).find('.zm-dialog-carousel-namePic').val();
                        if (inputVal == '') {
                            inputVal = thePicSlide.eq(k).find('.zm-dialog-carousel-namePic').attr('placeholder')
                        }
                        if (!thePicSlide.eq(k).find('.fa-eye').hasClass('fa-eye-slash')) {
                            figureStr += '<figure class="zm-component-carousel-slide" style="' + styles + '">'
                                + '<img src="' + thePicSlide.eq(k).find("img").attr("src") + '" title="' + inputVal + '">'
                                + '</figure>'
                        }
                    }
                    carouselSlideBox.find('figure').remove().end().prepend(figureStr);
                    iSelected.prev().find('.zm-component-carousel-pageTip i').text(carouselSlideBox.find('figure').length);
                    var pageNumGroup = iSelected.find('.zm-component-carousel-pointGroup .zm-component-carousel-pagePoint');
                    if (pageNumGroup.length > carouselSlideBox.find('figure').length) {
                        pageNumGroup.eq(carouselSlideBox.find('figure').length - 1).nextAll().remove();
                    } else if (pageNumGroup.length < carouselSlideBox.find('figure').length) {
                        for (var q = 0; q < carouselSlideBox.find('figure').length - pageNumGroup.length; q++) {
                            pageNumGroup.eq(pageNumGroup.length - 1).clone().attr('slideIndex', pageNumGroup.length + q)
                                .text(pageNumGroup.length + q + 1).appendTo(pageNumGroup.parent())
                        }
                    }
                    $('.zm-dialog-box').remove();
                })
            });
        });//点击保存设置
    },//设置轮播图片
    getImgIndex: function ($c, $n, currIndex, nextIndex) {
        var _this = $(this),slideType = _this.attr('slide-type'),_thisParent = _this.parent();
        switch (slideType) {
            case 'scrollHorz':
                _this.find("figure").css('top','0');
                break;
            case 'scrollVert':
                _this.find("figure").css('left','0');
                break;
            default:
                break
        }
        _thisParent.prev().find(".zm-component-carousel-pageTip span").text(nextIndex+1);//轮播模块右上角位置
        _thisParent.find(".zm-component-carousel-pagePoint").removeClass('itsTurn').eq(nextIndex).addClass('itsTurn');
    },//每次轮播绑定事件
    /***********************************************/
    //以下为轮播组件功能设置项
    carouselFullScreen: function (ele) {
        var iSelected = ele, wrap = iSelected.closest(".zm-component-box1"),
            thisWidth = iSelected.attr('data-origWidth'), thisHeight = iSelected.attr('data-origHeight'),
            e = $('<div class="zm-edit-slider-fullscreen carousel-fullScreen" style="padding: 20px 0 0 0">'
                + '<span>满屏长度</span>'
                + '<label class="zm-switch-box" style="margin-left: 20px">'
                + '<span class="zm-switch"><span class="fa fa-minus"></span></span>'
                + '</label></div>'),
            global = iSelected.closest(".zm-all"),
            fullWidth = global.width(), fullHeight = (fullWidth * thisHeight / thisWidth).toFixed(2);
        if (wrap.attr("data-fullScreen") == 'true') {
            e.find(".zm-switch-box").addClass('zm-switch-box-on');
            e.find('.zm-switch span').removeClass('fa-minus').addClass('fa-check');
            iSelected.find('.zm-component-carousel-box').removeClass('maxWidth1200');
        }
        e.find(".zm-switch-box").zmActionOn("click", function () {
            iSelected.css({width: "100%", height: "100%"});
            var pageNumGroupWidth = iSelected.find('.zm-component-carousel-pointGroup').css('width').split('px')[0],
                carouselControlHeight = iSelected.find('.zm-component-carousel-controlBtn:eq(0)').css('height').split('px')[0];
            var isFullScreen = wrap.attr("data-fullScreen");
            if (isFullScreen == "true") {
                wrap.css({
                    width: thisWidth,
                    height: thisHeight,
                    left: fullWidth/2 - thisWidth/2
                }).attr('data-fullScreen','false');
                iSelected.find('.zm-component-carousel-pointGroup').css('left', thisWidth / 2 - pageNumGroupWidth / 2).end()
                    .find('.zm-component-carousel-controlBtn').css('top', thisHeight / 2 - carouselControlHeight / 2);
                if (iSelected.find('.zm-component-carousel-box').css('width').split('px')[0] > 1000) {
                    iSelected.find('.zm-component-carousel-box').addClass('maxWidth1200');
                }
            }
            else {
                iSelected.find('.zm-component-carousel-box').removeClass('maxWidth1200');
                wrap.css({
                    width: fullWidth,
                    height: fullHeight,
                    left: '-351px'
                }).attr('data-fullScreen','true');
                iSelected.find('.zm-component-carousel-pointGroup').css('left', fullWidth / 2 - pageNumGroupWidth / 2).end()
                    .find('.zm-component-carousel-controlBtn').css('top', fullHeight / 2 - carouselControlHeight / 2);
            }

        });
        return e;
    },
    carouselCutPage: function (ele) {
        var iSelected = ele,
            carouselBox = iSelected.find(".zm-component-carousel-box"),
            e = $('<div class="zm-edit-slider zm-component-carousel-cutPage" keyToAuto="true" '
                + 'style="position: relative;height: 130px;padding:10px 0">'
                + '<span>自动轮播</span>'
                + '<label class="zm-switch-box zm-component-carousel-isAuto zm-switch-box-on" style="margin-left: 15px">'
                + '<span class="zm-switch"><span class="fa fa-check"></span></span></label><br/><br/>'
                + '<div class="zm-component-carousel-autoCut" style="display: none"></div>' +
                '<span>光标停顿</span>'
                + '<label class="zm-switch-box zm-component-carousel-hoverCut"  style="margin-left: 15px">'
                + '<span class="zm-switch"><span class="fa fa-minus"></span></span></label><br/>'
                + '<div class="zm-component-carousel-onlyOneBtn" style="display: none;"></div>'
                + '<div class="zm-component-carousel-picStayTime"></div></div>'
            ), isAutoEle = e.find(".zm-component-carousel-autoCut")
            , theAutoKey = e.find(".zm-component-carousel-isAuto")
            , theOneBtn = e.find(".zm-component-carousel-onlyOneBtn")
            , theHoverCut = e.find(".zm-component-carousel-hoverCut");
        var slideArgs = carouselBox.attr('data-slide-args');
        var autoScrollArg = slideArgs.split('autoScroll=')[1].split('&')[0];
        var hoverStopArg = slideArgs.split('hoverStop=')[1];
        var slideControlBtn = iSelected.find('.zm-component-carousel-controlBtn');
        var pageBtn = iSelected.find('.zm-component-carousel-pagePoint');
        theAutoKey.on("click", function () {//1关闭自动，2打开
            if(autoScrollArg == 'true'){
                isAutoEle.show();
                autoScrollArg = 'false'
            }else {
                isAutoEle.hide();
                autoScrollArg = 'true'
            }
            carouselBox.boxSlider('playPause', isAutoEle).attr('data-slide-args',
                slideArgs.split('autoScroll=')[0]
                + 'autoScroll=' + autoScrollArg + '&timeout' + slideArgs.split('timeout')[1]);
            slideControlBtn.on('click',function () {
                carouselBox.boxSlider('playPause',autoScrollArg);
            });
            pageBtn.on('click',function (e) {
                carouselBox.boxSlider('playPause',autoScrollArg);
                e.preventDefault()
            });
        });//是否自动轮播
        if (autoScrollArg == 'false') {
            isAutoEle.show();
            theAutoKey.removeClass('zm-switch-box-on').find('.fa').removeClass('fa-check').addClass('fa-minus');
        } else {
            isAutoEle.hide();
            theAutoKey.addClass('zm-switch-box-on').find('.fa').removeClass('fa-minus').addClass('fa-check');
        }
        theHoverCut.on("click", function () {
            if(hoverStopArg == 'off'){
                theOneBtn.show();
                hoverStopArg = 'on'
            }else {
                theOneBtn.hide();
                hoverStopArg = 'off'
            }
            carouselBox.mouseover(function () {
                carouselBox.boxSlider('playPause', theOneBtn);
            }).mouseout(function () {
                carouselBox.boxSlider('playPause', theOneBtn);
            });
            carouselBox.attr('data-slide-args',slideArgs.split('hoverStop=')[0] + 'hoverStop=' + hoverStopArg)
        }); //是否光标停顿
        if (hoverStopArg == 'off') {
            theOneBtn.show();
            theHoverCut.removeClass('zm-switch-box-on').find('.fa').removeClass('fa-check').addClass('fa-minus');
        } else {
            theOneBtn.hide();
            theHoverCut.addClass('zm-switch-box-on').find('.fa').removeClass('fa-minus').addClass('fa-check');
        }
        e.find(".zm-component-carousel-picStayTime").append(
            zmEditor.component.setItems.slider(iSelected,
                {title: "展现时长", style: "tab_noColor", isColor: false, param: "picStayTime", size: [1, 10]}));
        return e;
    },
    carouselCutStyle: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="height: 140px;padding:10px 6px">'
                + '<span>展现方式</span>'
                + '<div class="zm-edit-carousel-cutStyle">'
                + '<div class="zm-edit-carousel-cutBtn left fa fa-angle-double-left fa-3x"></div>'
                + '<ul class="zm-edit-carousel-cutStyleList" style="margin-left: 30px">'
                + '<li slide-style="scrollVert" data-reverse="false"><img src="imgs/carousel-upDown.png"><span>由上至下</span></li>'
                + '<li slide-style="scrollVert" data-reverse="true"><img src="imgs/carousel-downUp.png"><span>由下至上</span></li>'
                + '<li slide-style="scrollHorz" data-reverse="false"><img src="imgs/carousel-rightLeft.png"><span>由右至左</span></li>'
                + '<li slide-style="scrollHorz" data-reverse="true"><img src="imgs/carousel-leftRight.png"><span>由左至右</span></li>'
                + '<li slide-style="fade" data-reverse="false"><img src="imgs/carousel-fade.png"><span>淡入淡出</span></li>'
                + '<li slide-style="tile" data-reverse="false"><img src="imgs/carousel-waveFade.png"><span>波纹淡入</span></li>'
                + '<li slide-style="tile3d" data-reverse="false"><img src="imgs/carousel-chippingsRotate.png"><span>碎屑翻转</span></li>'
                // + '<li slide-style="scrollVert3d" data-reverse="false"><img src="imgs/carousel-chippingsRotate.png"><span>3D垂直翻转</span></li>'
                // + '<li slide-style="scrollHorz3d" data-reverse="false"><img src="imgs/carousel-chippingsRotate.png"><span>3D水平翻转</span></li>'
                + '<li slide-style="blindLeft" data-reverse="false"><img src="imgs/carousel-windowShades.png"><span>百叶窗变换</span></li>'
                + '<li slide-style="blindDown" data-reverse="false"><img src="imgs/carousel-soundWave.png"><span>音浪滑过</span></li>'
                + '</ul>'
                + '<div class="zm-edit-carousel-cutBtn right fa fa-angle-double-right fa-3x"></div>'
                + '</div></div>'),
            ulMarginLeft = e.find(".zm-edit-carousel-cutStyleList").css('margin-left').split('px')[0];
        var carouselBox = iSelected.find(".zm-component-carousel-box");
        var slideEffectArg = carouselBox.attr('data-slide-args');
        var slideStyleLi = e.find(".zm-edit-carousel-cutStyleList>li");
        for (var i = 0; i < slideStyleLi.length; i++) {
            if (slideStyleLi.eq(i).attr('slide-style') == slideEffectArg.split('effect=')[1].split('&')[0]
                &&slideStyleLi.eq(i).attr('data-reverse') == carouselBox.attr('data-reverse')) {
                slideStyleLi.eq(i).addClass('styleCheck')
            }
        }
        e.find("div.zm-edit-carousel-cutBtn").click(function () {
            if ($(this).hasClass("left")) ulMarginLeft += 102;
            ulMarginLeft = ulMarginLeft > 30 ? 30 : ulMarginLeft;
            if ($(this).hasClass("right")) ulMarginLeft -= 102;
            ulMarginLeft = ulMarginLeft < -684 ? -684 : ulMarginLeft;
            e.find(".zm-edit-carousel-cutStyleList").animate({'margin-left': ulMarginLeft + "px"}, 150)
        });
        e.find(".zm-edit-carousel-cutStyleList>li").zmActionOn('click',function () {
            var _this = $(this);
            _this.removeClass('styleCheck').addClass('styleCheck').siblings().removeClass('styleCheck');

            $(".zm-component-carousel-isAuto").addClass('zm-switch-box-on')
                .find('.fa').removeClass('fa-minus').addClass('fa-check');
            $(".zm-component-carousel-autoCut").css('display', 'none');

            var slideStyle = _this.attr("slide-style"),reverse = _this.attr('data-reverse');
            iSelected.find(".zm-component-carousel-box").attr('slide-type', slideStyle);
            iSelected.prev().find('.zm-component-carousel-pageTip span').text('1');
            zmEditor.component.carousel.carouselGoing(iSelected, slideStyle,reverse);
            carouselBox.css({width: '100%', height: '100%'})
                .find('.zm-component-carousel-slide').css({width: '100%', height: '100%'}).end()
                .children('div').css({width: '100%', height: '100%'}).end()
                .attr('data-slide-args',
                slideEffectArg.split('effect=')[0]
                + 'effect=' + slideStyle + '&hoverStop' + slideEffectArg.split('hoverStop')[1])
                .attr('data-reverse',reverse);
        });
        return e;
    },
    carouselCutArrow: function (ele) {
        var iSelected = ele,
            controlBtnL = iSelected.find(".zm-component-carousel-controlBtn:eq(0)"),
            controlBtnR = iSelected.find(".zm-component-carousel-controlBtn:eq(1)"),
            cutControlBtn = iSelected.find(".zm-component-carousel-controlBtn"),
            e = $('<div class="zm-edit-slider" style="position: relative;padding:10px 6px;border-bottom:none">'
                + '<div class="zm-component-carousel-cutArrow">'
                + '<span>翻页箭头</span>'
                + '<label class="zm-switch-box zm-component-carousel-isShow" style="margin-left: 15px"><span class="zm-switch"><span class="fa fa-minus"></span></span></label><br/>'
                + '<div class="zm-component-carousel-iSarrow"></div>'
                + '<span style="display: block;margin-top: 15px">箭头样式</span>'
                + '<div class="zm-edit-carousel-cutStyle" style="height: 85px"> '
                + '<div class="zm-edit-carousel-cutBtn left fa fa-angle-double-left fa-3x"  style="padding: 21px  4px;"></div>'
                + '<ul class="zm-edit-carousel-arrowList" style="margin-left: 33px">'
                + '<li><div class="fa fa-arrow-left"></div><div class="fa fa-arrow-right"></div></li>'
                + '<li><div class="fa fa-arrow-circle-left"></div><div class="fa fa-arrow-circle-right"></div></li>'
                + '<li><div class="fa fa-angle-left"></div><div class="fa fa-angle-right"></div></li>'
                + '<li><div class="fa fa-angle-double-left"></div><div class="fa fa-angle-double-right"></div></li>'
                + '<li><div class="fa fa-chevron-left"></div><div class="fa fa-chevron-right"></div></li>'
                + '<li><div class="fa fa-chevron-circle-left"></div><div class="fa fa-chevron-circle-right"></div></li>'
                + '</ul>'
                + '<div class="zm-edit-carousel-cutBtn right fa fa-angle-double-right fa-3x" style="padding: 21px 4px;"></div></div>'
                + '<div class="zm-component-carousel-arrowSize" style="margin: 5px 0"></div>'
                + '<div class="zm-component-carousel-arrowColor"></div>'
                + '<div class="zm-component-carousel-arrowBgcolor"></div>'
                + '<div class="zm-component-carousel-arrowMargin" style="margin: 5px 0"></div></div></div>'),
            ulMarginLeft = e.find(".zm-edit-carousel-arrowList").css('margin-left').split('px')[0];
        var arrowLi = e.find('.zm-edit-carousel-arrowList li');
        var arrowClass = controlBtnL.attr('class').split('fa-')[1].split('-left')[0];
        for(var i=0;i<arrowLi.length;i++){
            if(arrowLi.eq(i).find('.fa').eq(0).attr('class').split('fa-')[1].split('-left')[0] == arrowClass){
                arrowLi.eq(i).addClass('arrowCheck')
            }
        }

        var carouselBox = iSelected.find('.zm-component-carousel-box'),
            showArrowKey = e.find(".zm-component-carousel-iSarrow");
        e.find(".zm-component-carousel-isShow").zmActionOn("click", function () {
            showArrowKey.toggle();
            iSelected.find(".zm-component-carousel-controlBtn").toggle();
            if (showArrowKey.css('display') == 'none') {
                carouselBox.attr('data-showArrow', 'true')
            } else {
                carouselBox.attr('data-showArrow', 'false')
            }
        });//是否显示翻页按钮
        if (carouselBox.attr('data-showArrow') == 'true' || iSelected.find(".zm-component-carousel-controlBtn").css('display') == 'block') {
            e.find(".zm-component-carousel-isShow").addClass('zm-switch-box-on').find('.fa').removeClass('fa-minus').addClass('fa-check');
            showArrowKey.css('display', 'none');
            iSelected.find(".zm-component-carousel-controlBtn").show();
        } else {
            e.find(".zm-component-carousel-isShow").removeClass('zm-switch-box-on').find('.fa').removeClass('fa-check').addClass('fa-minus');
            showArrowKey.css('display', 'block');
            iSelected.find(".zm-component-carousel-controlBtn").hide();
        }
        e.find("div.zm-edit-carousel-cutBtn").click(function () {
            if ($(this).hasClass("left")) ulMarginLeft += 99;
            ulMarginLeft = ulMarginLeft > 33 ? 33 : ulMarginLeft;
            if ($(this).hasClass("right")) ulMarginLeft -= 99;
            ulMarginLeft = ulMarginLeft < -363 ? -363 : ulMarginLeft;
            e.find(".zm-edit-carousel-arrowList").animate({'margin-left': ulMarginLeft + "px"}, 150)
        });//点击滑动箭头List
        e.find(".zm-edit-carousel-arrowList li").zmActionOn('click',function () {
            var _this = $(this);
            _this.removeClass('arrowCheck').addClass('arrowCheck').siblings().removeClass('arrowCheck');

            var newArrowStyle = _this.find("div:eq(0)").attr('class').toLocaleString().split('fa-')[1].split('-left')[0];
            var oldArrowStyleB = controlBtnL.attr('class').toLocaleString().split('-left')[0];
            var oldArrowStyleA = oldArrowStyleB.split('fa-')[0];
            controlBtnL.removeAttr('class').attr('class', oldArrowStyleA + ' fa-' + newArrowStyle + "-left fa-4x").removeClass('right');
            controlBtnR.removeAttr('class').attr('class', oldArrowStyleA + ' fa-' + newArrowStyle + "-right fa-4x").removeClass('left').addClass('right');
        });//点击切换箭头样式
        e.find(".zm-component-carousel-arrowColor").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "箭头颜色", style: "tab_color", isColor: true, param: "color", size: [0, 100]}));
        e.find(".zm-component-carousel-arrowBgcolor").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "背景颜色", style: "tab_color", isColor: true, param: "backgroundColor", size: [0, 100]}));
        e.find(".zm-component-carousel-arrowBgcolor .zm-color-wrap").css({'margin-top':'-30px'});
        e.find(".zm-component-carousel-arrowSize").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "箭头大小<br/>(像素)", style: "tab_noColor", isColor: false, param: "fontSize", size: [40, 160]})
        );
        e.find(".zm-component-carousel-arrowMargin").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "页边距<br/>(像素)", style: "tab_noColor", isColor: false, param: "marginLength", size: [0, 100]}));
        return e;
    },
    carouselIsPageNum: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider zm-component-carousel-cutPage" style="position: relative;padding-top:20px">'
                + '<span>显示页码</span>'
                + '<label class="zm-switch-box zm-component-carousel-isPageNum" style="margin-left: 15px"><span class="zm-switch"><span class="fa fa-check"></span></span></label>'
                + '<div class="zm-component-carousel-showPageNum"></div>'
                + '</div>');
        var showPageNum = e.find(".zm-component-carousel-showPageNum"),
            theKey = e.find(".zm-component-carousel-isPageNum");
        var pageNumGroup = iSelected.find(".zm-component-carousel-pointGroup");
        var carouselBox = iSelected.find('.zm-component-carousel-box');
        theKey.zmActionOn("click", function () {
            showPageNum.toggle();
            pageNumGroup.toggle();
            if (showPageNum.css("display") == "block") {
                carouselBox.attr('showPageNum', 'true');
            } else {
                carouselBox.attr('showPageNum', 'false')
            }
        });
        if (pageNumGroup.css("display") == "block") {
            theKey.addClass('zm-switch-box-on').find('.fa').removeClass('fa-minus').addClass('fa-check');
            showPageNum.hide()
        } else {
            theKey.removeClass('zm-switch-box-on').find('.fa').removeClass('fa-check').addClass('fa-minus');
            showPageNum.show()
        }
        return e
    },
    carouselPageNumStyle: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="height: 135px;padding: 5px">'
                + '<span style="display: block;margin-top: 15px">页码类型</span>'
                + '<div class="zm-edit-carousel-cutStyle" style="height: 70px"> '
                + '<div class="zm-edit-carousel-cutBtn left fa fa-angle-double-left fa-3x"  style="padding: 13px  4px;"></div>'
                + '<ul class="zm-edit-carousel-pageNumList clearFloat" style="margin-left: 30px">'
                + '<li class="pagePointStyle0" data-pageNum="0"><span></span><span></span><span></span></li>'
                + '<li class="pagePointStyle1" data-pageNum="1"><span></span><span></span><span></span></li>'
                + '<li class="pagePointStyle2" data-pageNum="2"><span></span><span></span><span></span></li>'
                + '<li class="pagePointStyle3" data-pageNum="3"><span>1</span><span>2</span><span>3</span></li>'
                + '</ul>'
                + '<div class="zm-edit-carousel-cutBtn right fa fa-angle-double-right fa-3x" style="padding: 13px 4px;"></div>'
                + '</div></div>'),
            ulMarginLeft = e.find(".zm-edit-carousel-pageNumList").css('margin-left').split('px')[0];
        var pointNum = iSelected.find('.zm-component-carousel-pagePoint').attr('class');
        var pointLi = e.find('.zm-edit-carousel-pageNumList li');
            if(pointNum.indexOf('0')>-1){pointLi.eq(0).addClass('pointCheck')}
            else if(pointNum.indexOf('1')>-1){pointLi.eq(1).addClass('pointCheck')}
            else if(pointNum.indexOf('2')>-1){pointLi.eq(2).addClass('pointCheck')}
            else if(pointNum.indexOf('3')>-1){pointLi.eq(3).addClass('pointCheck')}
        e.find("div.zm-edit-carousel-cutBtn").click(function () {
            if ($(this).hasClass("left")) ulMarginLeft += 102;
            ulMarginLeft = ulMarginLeft > 30 ? 30 : ulMarginLeft;
            if ($(this).hasClass("right")) ulMarginLeft -= 102;
            ulMarginLeft = ulMarginLeft < -174 ? -174 : ulMarginLeft;
            e.find(".zm-edit-carousel-pageNumList").animate({'margin-left': ulMarginLeft + "px"}, 150)
        });//点击滑动pageNumList
        e.find(".zm-edit-carousel-pageNumList li").zmActionOn("click", function () {
            var _this = $(this);
            _this.removeClass('pointCheck').addClass('pointCheck').siblings().removeClass('pointCheck');
            var pageNumStyleIndex = _this.attr('data-pageNum');
            var pointStyleEle = iSelected.find(".zm-component-carousel-pointGroup>div");
            pointStyleEle.each(function () {
                var _this = $(this);
                if (_this.hasClass('itsTurn')) {
                    _this.attr("class", "zm-component-carousel-pagePoint zm-component-carousel-pagePoints" + pageNumStyleIndex + " itsTurn")
                } else {
                    _this.attr("class", "zm-component-carousel-pagePoint zm-component-carousel-pagePoints" + pageNumStyleIndex)
                }
            })
        });//点击切换轮播页码样式
        return e
    },
    carouselPageNumAlign: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="padding: 10px 0">'
                + '<span>页码布局</span>'
                + '<div class="zm-edit-components-pageNumAlign clearFloat">'
                + '<span alignStyle="left" data-zm-title="居左" class="fa fa-align-left fa-2x zm-tooltip"></span>'
                + '<span alignStyle="center" data-zm-title="居中" class="fa fa-align-center fa-2x zm-tooltip"></span>'
                + '<span alignStyle="right" data-zm-title="居右" class="fa fa-align-right fa-2x zm-tooltip"></span>'
                + '</div></div>'
            );
        var pointStyleEle = iSelected.find(".zm-component-carousel-pointGroup");
        var pointAlign = pointStyleEle.attr('alignStyle');
        e.find('.fa').removeClass('alignCheck');
        switch (pointAlign){
            case 'left':
                e.find('.fa').eq(0).addClass('alignCheck');
                break;
            case 'right':
                e.find('.fa').eq(2).addClass('alignCheck');
                break;
            case 'center':
            default:
                e.find('.fa').eq(1).addClass('alignCheck');
                break;
        }
        e.find(".zm-edit-components-pageNumAlign span").zmActionOn('click',function () {
            var _this = $(this);
            _this.removeClass('alignCheck').addClass('alignCheck').siblings().removeClass('alignCheck');
            switch ($(this).attr("alignStyle")) {
                case "left":
                    pointStyleEle.css({left: '3%',right:'auto'}).attr("alignStyle", "left");
                    break;
                case "center":
                    pointStyleEle.css({left: iSelected.find(".zm-component-carousel-box").width() / 2 - pointStyleEle.width() / 2
                        ,right:'auto'})
                        .attr("alignStyle", "center");
                    break;
                case "right":
                    pointStyleEle.css({left: "auto", right: '3%'}).attr("alignStyle", "right");
                    break;
                default:
                    break
            }
        });
        return e
    },
    /**********************************************/
    carouselImageManage: function (ele) {
        var imgsDataArr = [];
        //sessionStorage.removeItem = "carouselImgList";//清空缓存
        var iSelected = ele, pageCarouselBox = iSelected.find(".zm-component-carousel-box"),
            pageNumGroup = iSelected.find('.zm-component-carousel-pointGroup'),
            pageGroupDiv = pageNumGroup.find('div'),
            imgInPage = pageCarouselBox.find(".zm-component-carousel-slide img"),
            imgListStr = "", pageIndex = 0, storageImgUrlStr = "",
            e = $('<div class="zm-edit-carousel-imgsControl" style="padding: 10px 0;border-bottom: none;margin: 0 10px">'
                + '<div class="zm-edit-carousel-imgManage">'
                + '<div class="zm-edit-carousel-cutPicBtn">'
                + '<div class="fa fa-angle-left" style="left: 3%;padding-left: 6px"></div>'
                + '<div class="fa fa-angle-right" style="right: 3%"></div></div>'
                + '<div class="zm-edit-carousel-box clearFloat"></div></div></div>');
        var pureStr = '<div class="zm-edit-carousel-showThisPic theKeyToShow" style="padding: 10px;"><span>是否展示</span>'
            + '<label class="zm-switch-box zm-switch-box-on" style="margin-left: 15px">'
            + '<span class="zm-switch"><span class="fa fa-check"></span></span></label></div>'
            + '<div class="zm-edit-carousel-setHref" style="padding: 10px;"><span>链接</span>'
            + '<label class="zm-switch-box" style="margin-left: 43px">'
            + '<span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            + '<button class="zm-edit-carousel-setHrefBtn">设置链接</button>'
            + '<div class="zm-edit-carousel-thePageName">页面：折叠按摩床</div></div>';
        for (var i = 0; i < imgInPage.length; i++) {
            imgsDataArr.push({imgUrl: imgInPage[i].src, imgTitle: imgInPage[i].title});//获取当前轮播图片
        }
        $.each(imgsDataArr, function (index, val) {
            imgListStr += '<figure class="zm-edit-carousel-slide">'
                + '<img title="' + val.imgTitle + '" src="' + val.imgUrl + '" />'
                + '<div class="fa fa-trash fa-2x zm-edit-carousel-removeImg"></div>'
                + '<div class="zm-edit-carousel-imgCommitBtn"><span>替换图片</span></div>'
                + '<div class="zm-edit-carousel-pages"><i>' + (index + 1) + '</i>/<span>' + (imgsDataArr.length + 1) + '</span></div>'
                + '<div class="zm-edit-carousel-imgName" style="padding: 10px;">'
                + '<span style="display: inline-block;line-height: 30px">图片命名</span>'
                + '<input class="zm-edit-carousel-picName"  type="text" placeholder="' + val.imgTitle + '"></div>'
                + pureStr + '</figure>';
            storageImgUrlStr += val.imgUrl;
        });
        var carouselBox = e.find(".zm-edit-carousel-box");
        carouselBox.html(imgListStr);
        //将轮播图片添加到预览列表里

        function addEmptyPage(num) {
            if (!num) num = carouselBox.find("figure").length;
            return $('<figure class="zm-edit-carousel-slide">'
                + '<img title="" src="" style="background-color:rgba(122,203,193,.2)" />'
                + '<div style="display: none" class="fa fa-trash fa-2x zm-edit-carousel-removeImg"></div>'
                + '<div class="zm-edit-carousel-imgCommitBtn"><span>上传图片</span></div>'
                + '<div class="zm-edit-carousel-pages"><i>' + (num + 1) + '</i>/<span>' + (num + 1) + '</span></div>'
                + '<div class="zm-edit-carousel-imgName" style="padding: 10px;">'
                + '<span style="display: inline-block;line-height: 30px">图片命名：</span>'
                + '<input class="zm-edit-carousel-picName"  type="text"></div>'
                + pureStr + '</figure>');
        }

        carouselBox.append(addEmptyPage());//给预览图片列表最后加入上传图片功能

        carouselBox.on("click", ".zm-edit-carousel-imgCommitBtn", function () {
            var _this = $(this), parentSlider = _this.closest('.zm-edit-carousel-slide');
            var pageNum = carouselBox.find("figure").length;
            var styles = pageCarouselBox.find("figure").eq(pageCarouselBox.find("figure").length - 1).attr("style"),
                pageNumStyle = pageGroupDiv.eq(pageGroupDiv.length - 1).attr('class');
            var slideInPageStr = '', slideHereStr = '', slideInPageNumStr = '';

            if (_this.find('span').text() == "上传图片") {
                zmChoiceRadio.choicePicture({multiple :'true',callBack: function (e) {
                        $.each(e, function (index, val) {
                            slideInPageStr += '<figure class="zm-component-carousel-slide" style="' + styles + '">'
                                + '<img title="'+ val.fName +'" src="' + val.fCoverUrl + '"></figure>';
                            slideHereStr += '<figure class="zm-edit-carousel-slide">'
                                + '<img title="'+ val.fName +'" src="' + val.fCoverUrl + '" />'
                                + '<div class="fa fa-trash fa-2x zm-edit-carousel-removeImg"></div>'
                                + '<div class="zm-edit-carousel-imgCommitBtn"><span>替换图片</span></div>'
                                + '<div class="zm-edit-carousel-pages"><i></i>/<span></span></div>'
                                + '<div class="zm-edit-carousel-imgName" style="padding: 10px;">'
                                + '<span style="display: inline-block;line-height: 30px">图片命名：</span>'
                                + '<input class="zm-edit-carousel-picName"  type="text"></div>'
                                + pureStr + '</figure>';
                            slideInPageNumStr += '<div class="' + pageNumStyle + '" '
                                + 'slideindex="' + (pageGroupDiv.length + index + 1) + '">' + (pageGroupDiv.length + index + 1) + '</div>'
                        });
                        parentSlider.hide().before($(slideHereStr));
                        carouselBox.find('figure').hide().end().find('figure').eq(pageNum - 1).show();
                        for (var i = 0; i < carouselBox.find('figure').length; i++) {
                            carouselBox.find('figure').eq(i).find('.zm-edit-carousel-pages i').text(i + 1);
                            carouselBox.find('figure').eq(i).find('.zm-edit-carousel-pages span').text(carouselBox.find('figure').length);
                        }
                        pageCarouselBox.append($(slideInPageStr));
                        iSelected.parent().find(".zm-component-carousel-pageTip i").text(pageCarouselBox.find('figure').length);
                        pageNumGroup.append($(slideInPageNumStr));

                        for (var picName = 0; picName < carouselBox.find('.zm-edit-carousel-picName').length; picName++) {
                            if (!carouselBox.find('.zm-edit-carousel-picName').eq(picName).attr('placeholder')) {
                                carouselBox.find('.zm-edit-carousel-picName').eq(picName).attr('placeholder',
                                    carouselBox.find('figure img').eq(picName).attr('src'))
                            }
                        }

                        if (pageCarouselBox.find('figure').length > 50) {
                            return false
                        }//图片数量不能超过50张
                    }})
            } else if (_this.find('span').text() == "替换图片") {
                zmChoiceRadio.choicePicture({multiple :'false',callBack: function (e) {
                    parentSlider.find('img').attr({'src':e[0].fCoverUrl,'title':e[0].fName}).end()
                        .find('input').val(e[0].fName);
                    pageCarouselBox.find('figure:eq(' + parentSlider.index() + ') img')
                        .attr({'src':e[0].fCoverUrl,'title':e[0].fName})
                }})
            }
        });//上传和替换当前轮播图片

        carouselBox.on("click", ".zm-edit-carousel-removeImg", function () {
            var _this = $(this), parentPage = _this.closest('.zm-edit-carousel-slide')
                , thisIndex = parseInt(parentPage.find(".zm-edit-carousel-pages i").text())
                , pageList = carouselBox.find('.zm-edit-carousel-slide');
            var theNextAllSlide = carouselBox.find('.zm-edit-carousel-slide').eq(thisIndex - 1).nextAll();
            zmEditor.dialog.open({
                title: '温馨提示',
                content: '<div style="margin: 10px"><h3>该图片将从当前轮播图片队列中删除</h3></div>',
                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK beSure">确 定</span></div>'),
                width: 330,
                height: 200,
                movable: true,
                target: $('body')
            }, function () {
                $('.zm-dialog-btnOK.beSure').on('click',function () {
                    for (var i = 0; i < theNextAllSlide.length; i++) {
                        $(theNextAllSlide[i]).find('.zm-edit-carousel-pages i').text(thisIndex + i)
                    }
                    carouselBox.find(parentPage).remove();
                    carouselBox.find('.zm-edit-carousel-slide').eq(thisIndex - 1).show();
                    carouselBox.find('.zm-edit-carousel-slide .zm-edit-carousel-pages span').text(pageList.length - 1);
                    pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1).remove();
                    pageCarouselBox.find('figure').eq(thisIndex - 1).remove();
                    iSelected.prev().find(".zm-component-carousel-pageTip i").text(pageCarouselBox.find('figure').length);

                    $(this).closest('.zm-dialog-box').remove()
                })

            });//删除当前图片，假删除
        });//点击删除按钮

        carouselBox.find('figure').eq(carouselBox.find('figure').length - 1)
                   .find('.zm-switch-box').eq(0).removeClass('zm-switch-box-on')
                   .find('.fa').removeClass('fa-check').addClass('fa-minus');

        carouselBox.on("blur", ".zm-edit-carousel-slide .zm-edit-carousel-picName", function () {
            var _this = $(this), parentSlider = _this.closest('.zm-edit-carousel-slide'), thisVal = _this.val();
            if (thisVal != "") {
                var storageImgDataArr = JSON.parse(sessionStorage['carouselImgList']);
                storageImgDataArr[parentSlider.index()].imgTitle = thisVal;
                sessionStorage['carouselImgList'] = JSON.stringify(storageImgDataArr);
            }
        });//当图片命名的时候替换缓存内容

        carouselBox.find(".zm-edit-carousel-slide").eq(pageIndex).show().siblings().hide();

        e.find(".zm-edit-carousel-cutPicBtn div").click(function () {
            var picLength = carouselBox.find(".zm-edit-carousel-slide").length - 1;
            var _this = $(this);
            if (_this.attr('class').indexOf('left') > 0) pageIndex--;
            pageIndex = pageIndex < 0 ? 0 : pageIndex;
            if (_this.attr('class').indexOf('right') > 0) pageIndex++;
            pageIndex = pageIndex > picLength ? picLength : pageIndex;
            carouselBox.find(".zm-edit-carousel-slide").eq(pageIndex).show().siblings().hide()
        });//切换当前浏览图片

        carouselBox.on('click', '.zm-edit-carousel-showThisPic .zm-switch-box', function () {
            var _this = $(this), thisImg = _this.closest('figure').find('img'),
                theIndex = _this.closest('figure').index()
                , pageSlideFigure = pageCarouselBox.find('figure')
                , thisImgUrl = thisImg.attr('src'),
                styles = pageSlideFigure.eq(pageSlideFigure.length - 1).attr('style');
            //if(thisImg.attr('isNew')=="new"){
            _this.parent().toggleClass("theKeyToShow");
            if (_this.parent().hasClass('theKeyToShow')) {
                pageCarouselBox.find('figure').eq(theIndex).before(
                    $('<figure class="zm-component-carousel-slide" style="' + styles + '">'
                        + '<img title="' + _this.closest('figure').find(".zm-edit-carousel-picName").val() + '" src="' + thisImgUrl + '">'
                        + '</figure>'));

                pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1)
                    .clone().appendTo(pageNumGroup).attr('slideindex', pageNumGroup.find('div').length - 1)
                    .text(pageCarouselBox.find('figure').length);
            } else {
                pageCarouselBox.find('figure').eq(theIndex).remove();
                pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1).remove();
            }
            iSelected.parent().find(".zm-component-carousel-pageTip i").text(pageCarouselBox.find('figure').length);
            //}
        });//是否在页面轮播图中显示当前图片

        carouselBox.on("click", '.zm-edit-carousel-setHref .zm-switch-box', function () {
            var _this = $(this), thisHrefBtn = _this.next('.zm-edit-carousel-setHrefBtn');
            if (_this.hasClass("zm-switch-box-on")) {
                thisHrefBtn.attr("onclick", "").removeClass('setHrefBtn')
            } else {
                thisHrefBtn.attr("onclick", "zmEditor.dialog.setHref(this)").addClass('setHrefBtn');
            }
        });//设置链接

        return e;
    },//管理轮播图片面板
    carouselPagePicManage: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-carousel-slideImgController"><button>管理滚屏图像</button></div>');
        e.find('button').on('click', function () {
            zmEditor.dialog.open('carouselImgManage.html', function () {
                zmEditor.component.carousel.slidePicManage(iSelected);
                $('.zm-dialog-content').mCustomScrollbar('destroy');
                $('.zm-dialog-carousel-contLeftImgGroup').mCustomScrollbar({theme: 'minimal'})
            });
            iSelected.closest('.zm-component-nowEdit').find('.zm-dialog-box').fadeOut(200).remove()
        });//点击弹出轮播图片管理模块
        return e
    },
    carouselGoing: function (ele, slideStyle,reverse) {
        var carouselBox = ele.find('.zm-component-carousel-box');
        var slideEffectArg = carouselBox.attr('data-slide-args');
        var slideType = slideStyle ? slideStyle : carouselBox.attr('slide-type');
        carouselBox.boxSlider('destroy')
            .boxSlider({
                speed: parseInt(slideEffectArg.split('speed=')[1].split('&')[0]),
                autoScroll: slideEffectArg.split('autoScroll=')[1].split('&')[0],
                prev: ele.find(".zm-component-carousel-controlBtn.left"),
                next: ele.find(".zm-component-carousel-controlBtn.right"),
                timeout: parseInt(slideEffectArg.split('timeout=')[1].split('&')[0]),
                effect: slideType,
                reverse:reverse=='true'?true:false,
                onbefore: zmEditor.component.carousel.getImgIndex
            });
    }
};