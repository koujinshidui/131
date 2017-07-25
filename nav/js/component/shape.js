/**
 * Created by oldZhang on 2017/4/15.
 */
zmEditor.component.shape = {
    setting: function (box) {
        var nowEdit = zmEditor.component.nowEdit();
        var shapeBox = nowEdit.find('svg'),d = shapeBox.eq(0).find('path').attr('d');
        var first = d.indexOf('L')>-1?'左':'上';
        var second = d.indexOf('L')>-1?'右':'下';
        var tabs = $('<div></div>');
        var config1 = [
            {
                type: "slider", element: shapeBox.find('path'), flag: {
                title: "线条颜色", style: "noTab_color", isColor: true, param: "stroke"
            }
            },
            {type: 'shape_borderSet', element: shapeBox.find('path'), flag: {title: '线条类型'}},
            {
                type: "slider", element: shapeBox.find('path'), flag: {
                title: "线条粗细<br/>(像素)",
                style: "noTab_noColor",
                isColor: false,
                param: "stroke-width",
                size: [2, 15]
            }
            }
        ];
        var config2 = [
            {
                type: "slider", element: shapeBox.eq(0).find('path'), flag: {
                title: first+"边线颜色", style: "noTab_color", isColor: true, param: "stroke"
            }
            },
            {type: 'shape_borderSet', element: shapeBox.eq(0).find('path'), flag: {title: first+'边线类型'}},
            {
                type: "slider", element: shapeBox.eq(0).find('path'), flag: {
                title: first+"边线粗细<br/>(像素)",
                style: "noTab_noColor",
                isColor: false,
                param: "stroke-width",
                size: [2, 15]
            }
            },
            {
                type: "slider", element: shapeBox.eq(1).find('path'), flag: {
                title: second+"边线颜色", style: "noTab_color", isColor: true, param: "stroke"
            }
            },
            {type: 'shape_borderSet', element: shapeBox.eq(1).find('path'), flag: {title: second+'边线类型'}},
            {
                type: "slider", element: shapeBox.eq(1).find('path'), flag: {
                title: second+"边线粗细<br/>(像素)",
                style: "noTab_noColor",
                isColor: false,
                param: "stroke-width",
                size: [2, 15]
            }
            },
            {
                type: "slider", element: shapeBox.eq(0), flag: {
                title: "边线距离<br/>(像素)",
                style: "noTab_noColor",
                isColor: false,
                param: "shapeMarginBorR",
                size: [1, 15]
            }
            }
        ];
        var config3 = [
            {
                type: "slider", element: nowEdit.find('svg'), flag: {
                title: "背景颜色", style: "noTab_color", isColor: true, param: "fill"
            }
            },
            {
                type: "slider", element: nowEdit.find('svg'), flag: {
                title: "边框颜色", style: "noTab_color", isColor: true, param: "stroke"
            }
            },
            {
                type: "slider", element: nowEdit.find('svg'), flag: {
                title: "边框宽度<br/>(像素)",
                style: "noTab_noColor",
                isColor: false,
                param: "stroke-width",
                size: [0, 15]
            }
            }
        ];
        var config4 = [{type: 'href', element: nowEdit.find('svg'), flag: ''}];
        var items, tabsList;
        switch (nowEdit.find('.zm-component-shape-box').attr('data-type')) {
            case 'sgLine':
                items = zmEditor.component.setItems.config(config1);
                items.forEach(function (e) {
                    tabs.append(e)
                });
                tabsList = [{title: "常规", content: tabs}];
                break;
            case 'dbLine':
                items = zmEditor.component.setItems.config(config2);
                items.forEach(function (e) {
                    tabs.append(e)
                });
                tabsList = [{title: "常规", content: tabs}];
                break;
            default:
                items = zmEditor.component.setItems.config(config3);
                items.forEach(function (e) {
                    tabs.append(e)
                });
                var tabs2 = $('<div></div>');
                var items2 = zmEditor.component.setItems.config(config4);
                items2.forEach(function (e) {
                    tabs2.append(e)
                });
                tabsList = [{title: "常规", content: tabs}, {title: "链接", content: tabs2}];
                break
        }
        return zmEditor.component.setItems.tabs(tabsList);
    },
    svgScale: function (width,height,origL,origT,downX,downY,moveX,moveY,index) {
        var iSelected = zmEditor.component.nowEdit();
        var scale = parseFloat(iSelected.find('svg').attr('oriScale'));
        if(zmEditor.flag.isShiftKeyDown){
            zmEditor.component.shape.publicFun.sameScaleResize(width,height,origL,origT,downX,downY,moveX,moveY,index,scale);
        }
    },
    shapeOriScale: function (main) {
        var svgEle = main.find('svg');
        var mWidth = parseInt(svgEle.css('width')),
            mHeight = parseInt(svgEle.css('height')),
            picScale = (mHeight / mWidth);
        svgEle.attr({'oriScale': picScale,'data-view':svgEle[0].getAttribute('viewBox')});
    },
    lineSpanStyle: function (ele, h, w) {
        var parent = ele.find('.zm-component-shape-box');
        var path = parent.find('path');
        for (var i = 0;i<path.length ;i++) {
            var pathD = path.eq(i).attr('d');
            if (pathD != undefined) {
                var mX = pathD.split(' ')[0], mY = pathD.split(' ')[1],
                    lX = pathD.split(' ')[2], lY = pathD.split(' ')[3];

                if (h) {
                    if (pathD.indexOf('L') > 0) {
                        parent.css('height', h - 24);
                        parent.find('svg').height(h - 24);
                        path.eq(i).attr('d', mX + ' ' + mY + ' ' + lX + ' ' + parseInt(h - 24))
                    }
                }
                if (w) {
                    if (pathD.indexOf('L') < 0) {
                        parent.css('width', w - 20);
                        parent.find('svg').width(w - 20);
                        path.eq(i).attr('d', mX + ' ' + mY + ' ' + parseInt(w - 20) + ' ' + lY)
                    }
                }
            }
        }
    },
    shapeBorderSet: function (ele, flag) {
        var iSelected = ele;
        var e = $('<div><span class="zm-edit-text-title" style="line-height: 61px;float:left;">'
            + flag.title + '</span>'
            + '<div tabindex="1" class="zm-edit-line-borderStyleBox">'
            + '<div class="zm-edit-line-showBs"></div>'
            + '<span class="zm-edit-line-icon fa fa-sort-desc"></span>'
            + '<ul class="zm-edit-line-bsList" style="display: none">'
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="0,0" d="M0 2 166 2"/></g></svg></li>'//1
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="20,10" d="M0 2 166 2"/></g></svg></li>'//2
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="10,5" d="M0 2 166 2"/></g></svg></li>'//3
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="4,2" d="M0 2 166 2"/></g></svg></li>'//4
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="10,5,5,5" d="M0 2 166 2"/></g></svg></li>'//5
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="10,5,3,5,3,5" d="M0 2 166 2"/></g></svg></li>'
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="20,5,5,5" d="M0 2 166 2"/></g></svg></li>'//7
            + '<li class="lineStyleBox"><svg><g><path stroke-dasharray="2,2" d="M0 2 166 2"/></g></svg></li>'//8
            + '</ul></div></div>');
        e.find('.zm-edit-line-borderStyleBox').on('focus', function () {
            $(this).find('.zm-edit-line-bsList').slideDown(250)
        }).on('blur', function () {
            $(this).find('.zm-edit-line-bsList').slideUp(250)
        });
        var lineShowBs = e.find('.zm-edit-line-showBs'), eleLineStyle = iSelected.attr('stroke-dasharray');
        lineShowBs.html('<svg><g><path stroke-dasharray="' + eleLineStyle + '" d="M0 2 142 2"/></g></svg>');

        e.find('.zm-edit-line-bsList li').zmActionOn('click', function () {
            var _this = $(this), dash = _this.find('path').attr('stroke-dasharray');
            iSelected.attr('stroke-dasharray', dash);
            lineShowBs.html('<svg><g><path stroke-dasharray="' + dash + '" d="M0 2 142 2"/></g></svg>');
            _this.closest('.zm-edit-line-bsList').hide();
            e.find('.zm-edit-line-borderStyleBox').blur();
        });
        return e
    },
    changeStrokeW: function (ele, num) {
        var pathD = ele.attr('d'), parent = ele.closest('svg');
        var mX = pathD.split(' ')[0], mY = pathD.split(' ')[1];
        if (ele.attr('d').indexOf('L') > 0) {
            parent.css('width', num + 2);
            ele.css('stroke-width', num)
                .attr('d', 'M' + num / 2 + ' ' + mY + ' L' + num / 2 + ' ' + parseInt(parent.css('height')))
        }
        else {
            parent.css('height', num + 2);
            ele.css('stroke-width', num)
                .attr('d', mX + ' ' + num / 2 + ' ' + parseInt(parent.css('width')) + ' ' + num / 2)
        }
    },
    setShapeStyle:function (ele,obj) {

        var iSelected = ele,_this = obj;
        var nowEditShape = iSelected.find('.zm-component-shape-box');

        var thisShape = _this.find('.zm-component-shape-main'),_thisBox =thisShape.find('.zm-component-shape-box');

        var nowEditSvg = iSelected.find('svg'),_thisSvg = thisShape.find('svg');

        if(iSelected.is('.blockShape') && thisShape.is('.blockShape')){
            nowEditSvg.html(_thisSvg.prop('innerHTML')).attr('data-view',_thisSvg[0].getAttribute('viewBox'));
            nowEditSvg[0].setAttribute('viewBox',_thisSvg[0].getAttribute('viewBox'));
        }
        if(nowEditShape.length>0 && _thisBox.length>0){
            var origD = iSelected.find('.zm-component-shape-line:eq(0) path').attr('d');
            var origDArr = origD.split(' ');
            var thisD = thisShape.find('.zm-component-shape-line:eq(0) path').attr('d');
            var thisDArr = thisD.split(' ');
            iSelected.html(thisShape.html());
            var rootBox = iSelected.closest('.zm-component-box1');
            var reSizeSpan = rootBox.find('.zm-component-resize span');
            var newPath;
            reSizeSpan.hide();
            if(thisD.indexOf('L')>0){
                if(origD.indexOf('L')>0){
                    iSelected.height(origD.split(' ')[3]).width(thisShape.width());
                    newPath = origD;
                }else {
                    iSelected.height(origD.split(' ')[2]).width(thisShape.width());
                    newPath = thisDArr[0]+' '+thisDArr[1]+' '+ thisDArr[2]+' '+origDArr[2];
                }
                reSizeSpan.eq(1).show();
                reSizeSpan.eq(5).show()
            }
            else {
                if(origD.indexOf('L')>0){
                    iSelected.width(origD.split(' ')[3]).height(thisShape.height());
                    newPath = thisDArr[0]+' '+thisDArr[1]+' '+ origDArr[3]+' '+thisDArr[3];
                }else {
                    iSelected.width(origD.split(' ')[2]).height(thisShape.height());
                    newPath = origD;
                }
                reSizeSpan.eq(3).show();
                reSizeSpan.eq(7).show()
            }
            iSelected.find('.zm-component-shape-line path').attr('d',newPath);
        }
    },
    publicFun:{
        sameScaleResize:function (width,height,origL,origT,downX,downY,moveX,moveY,index,scale) {
            var iSelected = zmEditor.component.nowEdit();
            var temp = iSelected.siblings('.zm-component-main-temp');
            var matrix;
            if(iSelected.css('transform') == 'none'){
                matrix =  ["1", " 0", " 0", " 1", " 0", " 0"];
            }else {
                matrix = iSelected.css('transform').split('(')[1].split(')')[0].split(',');
            }
            var deg = Math.atan2(matrix[1],matrix[0]) * (180 / Math.PI),
                cos = Math.abs(Math.cos(deg*Math.PI/180)),
                sin = Math.abs(Math.sin(deg*Math.PI/180));
            var diffX = moveX - downX,diffY = moveY - downY;
            var w,h,l,t;
            if(deg==0){
                switch (index){
                    case 0:
                        if( - diffX >= - diffY){
                            w = width - diffX;
                            h = w*scale;
                        }else {
                            w = width - diffY;
                            h = w*scale;
                        }
                        l = origL - w + width;
                        t = origT - h + height;
                        break;
                    case 1:
                        h = height - moveY + downY;
                        w = h / scale;
                        l = origL;
                        t = origT + moveY - downY;
                        break;
                    case 2:
                        if(diffX >= - diffY){
                            w = width + diffX;
                            h = w*scale;
                        }else {
                            w = width - diffY;
                            h = w*scale;
                        }
                        l = origL;
                        t = origT - h + height;
                        break;
                    case 3:
                        w = width + moveX - downX;
                        h = w * scale;
                        l = origL;
                        t = origT;
                        break;
                    case 4:
                        if(diffX >= diffY){
                            w = width + diffX;
                            h = w*scale;
                        }else {
                            w = width + diffY;
                            h = w*scale;
                        }
                        l = origL;
                        t = origT;
                        break;
                    case 5:
                        h = height + moveY - downY;
                        w = h / scale;
                        l = origL;
                        t = origT;
                        break;
                    case 6:
                        if( - diffX >= diffY){
                            w = width - diffX;
                            h = w*scale;
                        }else {
                            w = width + diffY;
                            h = w*scale;
                        }
                        l = origL - w + width;
                        t = origT;
                        break;
                    case 7:
                        w = width - moveX + downX;
                        h = w * scale;
                        l = origL + moveX - downX;
                        t = origT;
                        break;
                    default:
                        break
                }
                iSelected.width(w).height(h).offset({left:l,top:t});
                temp.width(w).height(h).offset({left:l,top:t});
            }
            else {
                switch (index){
                    case 0:
                        if(deg>0&&deg<=90){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT - sin*(w - width) - cos*(downY - moveY);
                        }
                        if(deg>90&&deg<=180){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL;
                            t = origT - sin*(moveX - downX);
                        }
                        if(deg>-180&&deg<=-90){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - sin*(moveY - downY);
                            t = origT;
                        }
                        if(deg>-90&&deg<=0){
                            w = width - moveX + downX ;
                            h = w * scale;
                            l = origL - cos*(downX - moveX) - sin*(h-height);
                            t = origT - cos*(h-height);
                        }
                        break;
                    case 1:
                        if(deg>0&&deg<=45){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL ;
                            t = origT - cos*(downY - moveY);
                        }
                        if(deg>45&&deg<=90){
                            h = height + moveX - downX;
                            w = h / scale;
                            l = origL ;
                            t = origT - cos*(moveX - downX);
                        }
                        if(deg>90&&deg<=135){
                            h = height + moveX - downX;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        if(deg>135&&deg<=180){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        if(deg>-180&&deg<=-135){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - sin*(moveY - downY);
                            t = origT;
                        }
                        if(deg>-135&&deg<=-90){
                            h = height - moveX + downX;
                            w = h / scale;
                            l = origL - sin*(downX - moveX);
                            t = origT;
                        }
                        if(deg>-90&&deg<=-45){
                            h = height - moveX + downX ;
                            w = h / scale;
                            l = origL - sin*(downX - moveX) - cos*(w - width);
                            t = origT - cos*(downX - moveX);
                        }
                        if(deg>-45&&deg<=0){
                            h = height - moveY + downY ;
                            w = h / scale;
                            l = origL - sin*(downY - moveY);
                            t = origT - cos*(downY - moveY) - sin*(w - width);
                        }
                        break;
                    case 2:
                        if(deg>0&&deg<=90){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL;
                            t = origT - cos*(h - height);
                        }
                        if(deg>90&&deg<=180){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        if(deg>-180&&deg<=-90){
                            w = width - moveX + downX ;
                            h = w * scale;
                            l = origL - cos*(w - width) - sin*(h-height);
                            t = origT - sin*(downX - moveX);
                        }
                        if(deg>-90&&deg<=0){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL - sin*(downY - moveY);
                            t = origT - sin*(w - width) - cos*(downY - moveY);
                        }
                        break;
                    case 3:
                        if(deg>0&&deg<=45){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL - sin*(h - height);
                            t = origT;
                        }
                        if(deg>45&&deg<=90){
                            w = width + moveY - downY;
                            h = w * scale;
                            l = origL - sin*(h - height);
                            t = origT;
                        }
                        if(deg>90&&deg<=135){
                            w = width + moveY - downY;
                            h = w * scale;
                            l = origL - cos*(moveY - downY);
                            t = origT;
                        }
                        if(deg>135&&deg<=180){
                            w = width + downX - moveX;
                            h = w * scale;
                            l = origL - cos*(downX - moveX);
                            t = origT;
                        }
                        if(deg>-180&&deg<=-135){
                            w = width + downX - moveX ;
                            h = w * scale;
                            l = origL - cos*(downX - moveX) - sin*(h - height);
                            t = origT - sin*(downX - moveX);
                        }
                        if(deg>-135&&deg<=-90){
                            w = width - moveY + downY ;
                            h = w * scale;
                            l = origL - cos*(downY - moveY);
                            t = origT - sin*(downY - moveY) - cos*(h - height);
                        }
                        if(deg>-90&&deg<=-45){
                            w = width - moveY + downY ;
                            h = w * scale;
                            l = origL ;
                            t = origT - sin*(downY - moveY);
                        }
                        if(deg>-45&&deg<=0){
                            w = width + moveX - downX ;
                            h = w * scale;
                            l = origL ;
                            t = origT - sin*(moveX - downX);
                        }
                        break;
                    case 4:
                        if(deg>0&&deg<=90){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - sin*(moveY - downY);
                            t = origT;
                        }
                        if(deg>90&&deg<=180){
                            w = width - moveX + downX ;
                            h = w * scale;
                            l = origL - cos*(downX - moveX) - sin*(h-height);
                            t = origT - cos*(h - height);
                        }
                        if(deg>-180&&deg<=-90){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT - sin*(w - width)-cos*(downY - moveY);
                        }
                        if(deg>-90&&deg<=0){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL;
                            t = origT - sin*(moveX - downX);
                        }
                        break;
                    case 5:
                        if(deg>0&&deg<=45){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - sin*(moveY - downY);
                            t = origT;
                        }
                        if(deg>45&&deg<=90){
                            h = height - moveX + downX;
                            w = h / scale;
                            l = origL - sin*(downX - moveX);
                            t = origT;
                        }
                        if(deg>90&&deg<=135){
                            h = height - moveX + downX;
                            w = h / scale;
                            l = origL - sin*(downX - moveX) - cos *(w - width);
                            t = origT - cos*(downX - moveX);
                        }
                        if(deg>135&&deg<=180){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL - sin*(downY - moveY);
                            t = origT - cos*(downY - moveY) - sin*(w - width);
                        }
                        if(deg>-180&&deg<=-135){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL;
                            t = origT-cos*(downY - moveY);
                        }
                        if(deg>-135&&deg<=-90){
                            h = height + moveX - downX;
                            w = h / scale;
                            l = origL;
                            t = origT-cos*(moveX - downX);
                        }
                        if(deg>-90&&deg<=-45){
                            h = height + moveX - downX;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        if(deg>-45&&deg<=0){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        break;
                    case 6:
                        if(deg>0&&deg<=90){
                            w = width - moveX + downX ;
                            h = w * scale;
                            l = origL - cos*(w - width) - sin*(h-height);
                            t = origT - sin*(downX - moveX);
                        }
                        if(deg>90&&deg<=180){
                            h = height - moveY + downY;
                            w = h / scale;
                            l = origL - sin*(downY - moveY);
                            t = origT - sin*(w - width)-cos*(downY - moveY);
                        }
                        if(deg>-180&&deg<=-90){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL;
                            t = origT - cos*(h - height);
                        }
                        if(deg>-90&&deg<=0){
                            h = height + moveY - downY;
                            w = h / scale;
                            l = origL - cos*(w - width);
                            t = origT;
                        }
                        break;
                    case 7:
                        if(deg>0&&deg<=45){
                            w = width - moveX + downX ;
                            h = w * scale;
                            l = origL - cos*(downX - moveX) - sin*(h - height);
                            t = origT - sin*(downX - moveX);
                        }
                        if(deg>45&&deg<=90){
                            w = width - moveY + downY ;
                            h = w * scale;
                            l = origL - cos*(w - width);
                            t = origT - sin*(downY - moveY) - cos*(h - height);
                        }
                        if(deg>90&&deg<=135){
                            w = width - moveY + downY ;
                            h = w * scale;
                            l = origL;
                            t = origT - sin*(downY - moveY);
                        }
                        if(deg>135&&deg<=180){
                            w = width + moveX - downX ;
                            h = w * scale;
                            l = origL;
                            t = origT - sin*(moveX - downX);
                        }
                        if(deg>-180&&deg<=-135){
                            w = width + moveX - downX;
                            h = w * scale;
                            l = origL - sin*(h - height);
                            t = origT;
                        }
                        if(deg>-135&&deg<=-90){
                            w = width + moveY - downY;
                            h = w * scale;
                            l = origL - sin*(h - height);
                            t = origT;
                        }
                        if(deg>-90&&deg<=-45){
                            w = width + moveY - downY;
                            h = w * scale;
                            l = origL - cos*(moveY - downY);
                            t = origT;
                        }
                        if(deg>-45&&deg<=0){
                            w = width - moveX + downX;
                            h = w * scale;
                            l = origL - cos*(downX - moveX);
                            t = origT;
                        }
                        break;
                }
                iSelected.width(w).height(h).offset({left:l,top:t});
                temp.width(Math.abs(cos*parseInt(iSelected.outerWidth())) + Math.abs(sin*parseInt(iSelected.outerHeight())))
                    .height(Math.abs(sin*parseInt(iSelected.outerWidth())) + Math.abs(cos*parseInt(iSelected.outerHeight())))
                    .offset({'left':iSelected.offset().left,'top':iSelected.offset().top});
            }
        }
    }
};