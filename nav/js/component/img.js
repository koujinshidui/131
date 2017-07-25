/**
 * Created by zhanghuaizhong on 2017/4/5.
 */
zmEditor.component.img = {
    setting: function () {
        var nowEdit = zmEditor.component.nowEdit(), imgHexagon = nowEdit.find('.zm-component-img-hexagonLine'), imgContent;
        if (imgHexagon.length > 0) {
            imgContent = imgHexagon;
        } else {
            imgContent = nowEdit.find('.zm-component-img-content')
        }

        var tabs1 = $('<div></div>');
        var config1 = [
            {type: 'img_showImg', element: nowEdit, flag: ''},
            {type: 'img_picScale', element: nowEdit, flag: ''},
            {type: 'href', element: nowEdit, flag: ''}
        ];
        var items1 = zmEditor.component.setItems.config(config1);
        items1.forEach(function (e) {
            tabs1.append(e);
        });

        var tabs2 = $('<div></div>');
        var config2 = [
            {
                type: 'slider',
                element: imgContent,
                flag: {title: '边框颜色', style: 'noTab_color', isColor: true, param: 'borderColor', size: [0, 100]}
            },
            {type: 'img_borderSet', element: imgContent, flag: ''},
            {
                type: 'slider',
                element: imgContent,
                flag: {
                    title: '边框宽度<br/>(像素)',
                    style: 'noTab_noColor',
                    isColor: false,
                    param: 'borderSetting',
                    size: [0, 15]
                }
            },
            {type:'radius',element:imgContent,flag:''}
        ];
        var items2 = zmEditor.component.setItems.config(config2);
        items2.forEach(function (e) {
            tabs2.append(e);
        });
        tabs2.find('.zm-edit-img-borderStyleBox').css('width', '200px');
        tabs2.find('.borderSettingSlider').css('margin-right', '25px');

        var tabs3 = $('<div></div>');
        var config3 = [{type: 'boxShadow', element: imgContent, flag: ''}];
        var items3 = zmEditor.component.setItems.config(config3);
        items3.forEach(function (e) {
            tabs3.append(e);
        });

        if (nowEdit.find('.zm-component-img-content').attr('data-type') == 'hexagon'
        //&& nowEdit.find('.zm-component-img-content').attr('data-radius')=='no'//圆形和椭圆要不要圆角？
        ) {
            tabs2.append($('<div style="position: absolute;width: 100%;height: 200px;'
                + 'background-color: rgba(255,255,255,.9);top: 210px;z-index: 1;"></div>'));
        }

        var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}];
        return zmEditor.component.setItems.tabs(tabsList);
    },
    picResize: function (main) {
        var mWidth = parseFloat(main.css('width').split('px')[0]), minW = 20,
            mHeight = parseFloat(main.css('height').split('px')[0]), picScale = mHeight / mWidth;
        var content = main.find('.zm-component-img-content');
        var type = content.attr('data-type')=='hexagon'?'true':'false';
        main.css({'minWidth': minW + 'px', 'minHeight': minW * picScale + 'px'});
        content.attr({'data-picScale': picScale.toFixed(4),'isOriScale':type});
    },
    imgShowImg: function (ele) {
        var iSelected = ele, imgContet = iSelected.find('.zm-component-img-content'),
            imgUrl = imgContet.find('img').attr("src"),
            imgTitle = imgContet.find('img').attr("title") || imgUrl,
            hexagon = iSelected.find('.zm-component-img-content').attr('data-type') || '',
            e = $('<div class="zm-dialog-img-showImg">'
                + '<img title="' + imgTitle + '" src="' + imgUrl + '" />'
                + '<div class="zm-edit-img-imgCommitBtn"><span>替换图片</span></div>'
                + '<div class="zm-edit-img-imgName"><span>图片命名</span><input type="text" placeholder="' + imgTitle + '"></div>'
                + '</div>');

        e.find('.zm-edit-img-imgCommitBtn').click(function () {
            var _this = $(this);
            zmChoiceRadio.choicePicture({multiple :'false',callBack: function (e) {
                    //zmEditor.dialog.open({
                    //                title: '温馨提示',
                    //                content: '<div style="margin: 10px"><h3>当前页面中图片将替换为此图片</h3></div>',
                    //                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span>' +
                    //                '<span class="zm-dialog-btnOK beSure">确 定</span></div>'),
                    //                width: 330,
                    //                height: 200,
                    //                movable: true,
                    //                target: $('body')
                    //            }, function () {
                    //        $('.zm-dialog-btnOK.beSure').click(function () {
                    _this.prev().attr({'src': e[0].fCoverUrl,'title':e[0].fName});
                    _this.next().find('input').attr('placeholder',e[0].fName);
                    imgContet.find('img').attr({'src': e[0].fCoverUrl,'title':e[0].fName});
                    if (hexagon && hexagon == 'hexagon')imgContet.css('background-image', 'url(' + e[0].fCoverUrl + ')');
                    //})
                    //})
            }})
        });
        e.find('.zm-edit-img-imgName input').on('blur', function () {
            var _this = $(this);
            _this.parent().prev().prev().attr('title', _this.val() || _this.attr('placeholder'));
            imgContet.find('img').attr("title", _this.val() || _this.attr('placeholder'));
        });
        return e
    },
    setImgStyle: function (ele,clickEle) {
        var _this = clickEle;
        var iSelected = ele;
        var listImgMain = _this.find('.zm-component-img-main');
        var imgType = listImgMain.find('.zm-component-img-content').attr('data-type');
        var nowEditImgType = iSelected.find('.zm-component-img-content').attr('data-type');
        var origSrc = iSelected.find('img').attr('src');
        if (imgType == 'hexagon') {
            iSelected.html(listImgMain.html()).find('img').attr('src', origSrc);
            iSelected.css({'width': '240px', 'height': '240px'})
                .find('.zm-component-img-content').css('background-image', 'url(' + origSrc + ')')
        } else {
            if (nowEditImgType == 'hexagon') {
                iSelected.html(listImgMain.html()).find('img').attr('src', origSrc);
            }
            var imgCont = iSelected.find('.zm-component-img-content');
            var imgW = parseInt(iSelected.width());
            var imgScale = (parseInt(listImgMain.width()) / parseInt(listImgMain.height())).toFixed(2);
            var secClass = listImgMain.find('.zm-component-img-content')[0].classList[1];
            imgCont.attr('class', 'zm-component-img-content').addClass(secClass).attr('data-picScale', imgScale);
            iSelected.css({
                // 'minHeight': imgW / imgScale + 'px',
                'height': imgW / imgScale + 'px'});
            imgCont.attr('data-radius') == 'no' ?
                imgCont.addClass('zm-component-img-noBd') :
                imgCont.removeClass('zm-component-img-noBd');
            if (imgType == 'rhombus') {
                iSelected.css({'width': '240px', 'height': '240px'})
            }
        }
    },
    imgPicScale: function (ele) {
        var iSelected = ele;
        var e = $('<div class="zm-edit-components-product-ratio" style="padding: 10px 7px">'
            + '<span class="zm-edit-text-title">图片显示<br/>比例 </span>'
            + '<span class="zm-edit-components-product-scale">'
            + '<span><label class="zm-edit-function-choicePoint"></label><span>原始比例</span></span>'
            + '<span><label class="zm-edit-function-choicePoint"></label><span>自适应</span></span>'
            + '</span>'
            + '</div>'
        );
        var label = e.find("label");
        label.removeClass('choose');
        if (iSelected.find('.zm-component-img-content').attr('isOriScale') == 'true') {
            label.eq(0).addClass('choose');
        } else {
            label.eq(1).addClass('choose');
        }
        label.zmActionOn("click", function () {
            var _this = $(this);
            var _index = label.index(_this);
            switch (_index) {
                case 0:
                    iSelected.find('.zm-component-img-content').attr('isOriScale', 'true');
                    break;
                case 1:
                    iSelected.find('.zm-component-img-content').attr('isOriScale', 'false');
                    break;
                default:
                    break;
            }
            label.removeClass("choose");
            _this.addClass("choose");
        });

        return e;
    },
    imgBorderSet: function (ele) {
        var iSelected = ele;
        var e = $('<div><span class="zm-edit-text-title" style="line-height: 61px;float:left;">边框线条</span>'
            + '<div tabindex="1" class="zm-edit-img-borderStyleBox">'
            + '<div class="zm-edit-img-showBs"></div>'
            + '<span class="zm-edit-img-icon fa fa-sort-desc"></span>'
            + '<ul class="zm-edit-img-bsList" style="display: none">'
            + '<li data-bs="solid"><div style="border-style:solid"></div></li>'
            + '<li data-bs="dotted"><div style="border-style:dotted"></div></li>'
            + '<li data-bs="dashed"><div style="border-style:dashed"></div></li>'
            + '<li data-bs="double" style="border-bottom: none">'
            + '<div style="border-style:double;border-bottom-width: 3px"></div></li>'
            + '</ul></div></div>');
        e.find('.zm-edit-img-borderStyleBox').on('focus', function () {
            $(this).find('.zm-edit-img-bsList').show()
        }).on('blur', function () {
            $(this).find('.zm-edit-img-bsList').hide()
        });
        var eleBorderStyle = iSelected.css('border-style') != 'none' ? iSelected.css('border-style') : 'solid';

        e.find('.zm-edit-img-showBs').css('border-style', eleBorderStyle);

        e.find('.zm-edit-img-bsList li').zmActionOn('click', function () {
            var _this = $(this);
            e.find('.zm-edit-img-showBs').css('border-style', _this.attr('data-bs'));
            iSelected.css('border-style', _this.attr('data-bs'));
            if (_this.attr('data-bs') == 'double') {
                e.find('.zm-edit-img-showBs').css({'border-width': '3px', 'margin': '12px 5px'})
            } else {
                e.find('.zm-edit-img-showBs').css({'border-width': '1px', 'margin': '14px 5px'})
            }
            _this.parent().hide();
            e.find('.zm-edit-img-borderStyleBox').blur();
        });
        if (e.find('.zm-edit-img-showBs').css('border-style') == 'double') {
            e.find('.zm-edit-img-showBs').css({'border-width': '3px', 'margin': '12px 5px'})
        } else {
            e.find('.zm-edit-img-showBs').css({'border-width': '1px', 'margin': '14px 5px'})
        }
        return e
    }
};