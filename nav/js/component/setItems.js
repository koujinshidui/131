/**
 * Created by Administrator on 2017/2/23.
 */
//组件设置项
zmEditor.component.setItems={
    config:function(e){
        var len = e.length,items=[];
        for(var i = 0;i<len;i++){
            var _type=e[i].type,_element=e[i].element;
            _element=(_element==undefined||_element=='')?zmEditor.component.nowEdit():_element;
            if(typeof zmEditor.component.setItems[_type]=='function'){
                // console.info(this instanceof jQuery); //false
                // console.info($(this) instanceof jQuery); //true
                items.push(zmEditor.component.setItems[_type](_element,e[i].flag).addClass("zm-edit-item"));
                // if(zmEditor.component.setItems[_type](_element,e[i].flag) instanceof jQuery){
                //     items.push(zmEditor.component.setItems[_type](_element,e[i].flag).addClass("zm-edit-item"));
                // }
                // else{
                //     console.error('Zuma Error : 配置方法【'+_type+'】，无返回值！！！');
                //     return;
                // }
            }
            else {
                console.error('Zuma Error : 配置参数【' + _type + '】，在setItems.js中找不到对应方法！！！');
                return;
            }
        }
        return items;
    },
    tabs: function (list) {
        var tabs = $('<div class="zm-tab"><ul class="zm-tab-title"></ul><div class="zm-tab-content"></div></div>');
        var title = tabs.find(".zm-tab-title");
        var content = tabs.find(".zm-tab-content");
        var len = list.length;
        var width = 100 / len + "%";
        var curLiClass = "zm-tab-title-cur";
        var curDivClass = "zm-tab-content-cur";
        for (var i = 0; i < len; i++) {
            var curLi = "";
            if (i == 0) {
                curLi = curLiClass;
                list[i].content.addClass("zm-tab-content-cur")
            }
            title.append('<li class="' + curLi + '" style="width:' + width + '">' + list[i].title + '</li>');
            list[i].content.addClass('zm-tab-content-sub')
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-title li", function () {
            // var thisLi = $(this);
            // thisLi.addClass(curLiClass).siblings().removeClass(curLiClass)
            // var content = thisLi.closest(".zm-tab").find(".zm-tab-content");
            // var thisTab = content.children("div").eq(thisLi.index())
            //thisTab.addClass(curDivClass).siblings().removeClass(curDivClass);
            var thisLi = $(this);
            // var box = thisLi.closest('.zm-tab-content');
            // box.css({'overflow':'hidden'})
            var thisIndex = thisLi.index();
            var oldLiIndex = thisLi.closest('ul').find('li.'+curLiClass).index();
            if(thisIndex==oldLiIndex){return;}
            thisLi.addClass(curLiClass).siblings().removeClass(curLiClass);
            var content = thisLi.closest(".zm-tab").find(".zm-tab-content");
            var thisTab = content.children("div").eq(thisIndex);
            if(thisIndex>oldLiIndex){
                thisTab.css({'left':'350px','display':'block'})
                    .stop().animate({'left':0},300).siblings().hide()
            }
            if(thisIndex<oldLiIndex){
                thisTab.css({'left':'-350px','display':'block'})
                    .stop().animate({'left':0},300).siblings().hide()
            }
        });
        tabs.find('.zm-tab-content .zm-tab-content-sub').css({height: '557px'})
        return tabs;
    },
    tabs_other:function(list){
        var tabs = $('<div class="zm-tab-other"><ul class="zm-tab-other-title"></ul><div class="zm-tab-other-content"></div></div>');
        var title = tabs.find(".zm-tab-other-title");
        var content = tabs.find(".zm-tab-other-content");
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var curLi = "";
            // if (i == 0) {
            //     curLi = "zm-tab-other-title-cur";
            //     list[i].content.addClass("zm-tab-other-content-cur")
            // }
            if (list[i].isShow) {
                curLi = "zm-tab-other-title-cur";
                list[i].content.addClass("zm-tab-other-content-cur");
            }
            var iLi = $('<li class="' + curLi + '" >' + list[i].title + '</li>');
            if (list[i].isShow) {
                iLi.find('label').addClass('choice')//桂学峰特用
            }
            iLi.data('data-zm-fn',list[i].callBack)
            title.append(iLi);
            list[i].content.addClass('zm-tab-other-content-sub');
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-other-title li", function () {
            var thisLi = $(this);
            eval('('+thisLi.data('data-zm-fn')+')()');
            thisLi.addClass("zm-tab-other-title-cur").siblings().removeClass("zm-tab-other-title-cur");
            thisLi.closest('ul').find('label').removeClass('choice')//桂学峰特用
            thisLi.find('label').addClass('choice');//桂学峰特用
            var content = thisLi.closest(".zm-tab-other").find(".zm-tab-other-content");
            var thisTab = content.find("div.zm-tab-other-content-sub").eq(thisLi.index())
            // thisTab.addClass("zm-tab-other-content-cur").siblings().removeClass("zm-tab-other-content-cur")
            // thisTab.stop().fadeIn().siblings().stop().fadeOut();
            thisTab.show().siblings().hide();
        });
        tabs.find('.zm-edit-item').css({paddingLeft:0,paddingRight:0,margin:'0 20px'});
        tabs.find('.zm-tab-child-content .zm-tab-child-content-sub').css({height:'494px'});
        //tabs.find('.zm-tab-other-content>div').css({height:'550px'}).mCustomScrollbar({theme:"minimal"});//加滚动条
        return tabs;
    },
    tabs_child: function (list) {
        var tabs = $('<div class="zm-tab-child"><ul class="zm-tab-child-title"></ul><div class="zm-tab-child-content"></div></div>');
        var title = tabs.find(".zm-tab-child-title");
        var content = tabs.find(".zm-tab-child-content");
        var len = list.length;
        for (var i = 0; i < len; i++){
            var curLi = "";
            if (i == 0) {
                curLi = "zm-tab-child-title-cur";
                list[i].content.addClass("zm-tab-child-content-cur")
            }
            title.append('<li class="' + curLi + '">' + list[i].title + '</li>');
            list[i].content.addClass('zm-tab-child-content-sub');
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-child-title li", function () {
           // console.log('child')
            var thisLi = $(this);
            thisLi.addClass("zm-tab-child-title-cur").siblings().removeClass("zm-tab-child-title-cur")
            var content = thisLi.closest(".zm-tab-child").find(".zm-tab-child-content");
            var thisTab = content.find("div.zm-tab-child-content-sub").eq(thisLi.index())
            // thisTab.addClass("zm-tab-child-content-cur").siblings().removeClass("zm-tab-child-content-cur")
            // thisTab.stop().fadeIn().siblings().stop().fadeOut();
            thisTab.show().siblings().hide();
        });
        tabs.find('.zm-edit-item').css({paddingLeft:0,paddingRight:0,margin:'0 20px'});
        tabs.find('.zm-tab-child-content .zm-tab-child-content-sub').css({height:'557px'});
        //tabs.find('.zm-tab-child-content>div').css({height:'550px'}).mCustomScrollbar({theme:"minimal"});//加滚动条
        return tabs;
    },
    slider: function (ele, obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100, tar = obj.goal;
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor(ele,{param: type,goal: tar});
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max,EM: tar});
        return e;
    },
    strings: {
        strSize: function () {
            return $('<div >'
                + '<span class="zm-edit-text-title"></span>'
                + '<span class="zm-edit-slider-parent"><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover"></span></span>'
                + '<input type="text" class="zm-edit-slider-val">'
                + '</div>');
        },
        strColor: function (ele,obj) {
            var e = $('<div>'
                + '<span class="zm-edit-text-title"></span>'
                + '<span class="zm-edit-slider-parent"><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover"></span></span>'
                + '<input type="text" class="zm-edit-slider-val">'
                + '<i>%</i>'
                + '<div class="zm-color-wrap"></div>'
                + '</div>');
            var wrap = e.find(".zm-color-wrap");
            var color = zmEditor.component.setItems.strings.color(ele,obj);
            wrap.append(color);
            return e;
        },
        //obj={style: "normal" || "" || "mini" ,goal: 如果有未来元素 传未来元素的class名 如 ".test001",如果没有.不传此参数}
        family: function (ele,obj) {
            var e = $('<div class="zm-edit-components-select">'
                +'<div class="zm-edit-components-select-show"><span class="zm-edit-components-select-val"></span><i class="zm-edit-components-select-icon fa fa-angle-down"></i></div>'
                +'<ul class="zm-edit-components-select-hide mCustomScrollbar" data-mcs-theme="minimal">'
                +'<li style="font-family: \\9ED1\\4F53">黑体</li>'
                +'<li style="font-family: \\5B8B\\4F53">宋体</li>'
                +'<li style="font-family: \\4EFF\\5B8B">仿宋</li>'
                +'<li style="font-family: \\6977\\4F53">楷体</li>'
                +'<li style="font-family: \\96B6\\4E66">隶书</li>'
                +'<li style="font-family: \\5E7C\\5706">幼圆</li>'
                +'<li style="font-family: \\65B0\\5B8B\\4F53">新宋体</li>'
                +'<li style="font-family: \\5FAE\\8F6F\\96C5\\9ED1">微软雅黑</li>'
                +'<li style="font-family: \\534E\\6587\\7EC6\\9ED1">华文细黑</li>'
                +'<li style="font-family: \\534E\\6587\\9ED1\\4F53">华文黑体</li>'
                +'<li style="font-family: \\534E\\6587\\6977\\4F53">华文楷体</li>'
                +'<li style="font-family: \\534E\\6587\\5B8B\\4F53">华文宋体</li>'
                +'<li style="font-family: \\534E\\6587\\4EFF\\5B8B">华文仿宋</li>'
                +'<li style="font-family: \\534E\\6587\\5F69\\4E91">华文彩云</li>'
                +'<li style="font-family: \\65B9\\6B63\\8212\\4F53">方正舒体</li>'
                +'<li style="font-family: Arial">Arial</li>'
                +'<li style="font-family: Helvetica">Helvetica</li>'
                +'<li style="font-family: Times New Roman">Times New Roman</li>'
                +'<li style="font-family: Kokila">Kokila</li>'
                +'<li style="font-family: Garamond">Garamond</li>'
                +'<li style="font-family: Bodoni MT">Bodoni MT</li>'
                +'<li style="font-family: Calibri">Calibri</li>'
                +'</ul></div>');
            switch (obj.style) {
                case "normal":
                    e.css("width", "210px");
                    break;
                case "mini":
                    e.css("width", "100px");
                    break;
                case "tab_mini":
                    e.css("width","100px");
                    break;
                default:
                    e.css("width", "190px");
                    break;
            }
            var b;
            if(obj.goal){
                b = ele.find(obj.goal).css("font-family");
            }else{
                b = ele.css("font-family");
            }
            debugger;
            var c = b.replace(/"([^"]*)"/g,"$1");
            e.find(".zm-edit-components-select-val").text(c);
            var show = e.find(".zm-edit-components-select-show");
            var ul = e.find(".zm-edit-components-select-hide");
            var icon = e.find(".zm-edit-components-select-icon");
            var li = e.find("li");
            var val = e.find(".zm-edit-components-select-val");
            show.on("click",function(){
                ul.stop().slideToggle("500");
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            li.zmActionOn("click",function(){
                var _this = $(this);
                var _val = _this.css("font-family");
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                goal.css("fontFamily", _val);
                val.text(_this.text());
                ul.hide();
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            return e;
        },
        //obj={style: ,goal: }参考family
        size: function (ele,obj) {
            var e = $('<div class="zm-edit-components-select">'
                +'<div class="zm-edit-components-select-show"><span class="zm-edit-components-select-val"></span><i class="zm-edit-components-select-icon fa fa-angle-down"></i></div>'
                +'<ul class="zm-edit-components-select-hide mCustomScrollbar" data-mcs-theme="minimal">'
                +'<li>12</li>'
                +'<li>14</li>'
                +'<li>16</li>'
                +'<li>18</li>'
                +'<li>20</li>'
                +'<li>28</li>'
                +'<li>36</li>'
                +'<li>48</li>'
                +'<li>72</li>'
                +'</ul></div>');
            switch (obj.style) {
                case "normal":
                    e.css("width", "100px");
                    break;
                case "mini":
                    e.css("width", "65px");
                    break;
                case "tab_mini":
                    e.css("width","65px");
                    break;
                default:
                    e.css("width", "100px");
                    break;
            }
            var show = e.find(".zm-edit-components-select-show");
            var ul = e.find(".zm-edit-components-select-hide");
            var li = e.find("li");
            var val = e.find(".zm-edit-components-select-val");
            var icon = e.find(".zm-edit-components-select-icon");
            if(obj.goal){
                val.text(parseInt(ele.find(obj.goal).css("fontSize")));
            }else{
                val.text(parseInt(ele.css("fontSize")));
            }
            show.zmActionOn("click",function(){
                ul.stop().slideToggle("500");
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            li.zmActionOn("click",function(){
                var _this = $(this);
                var _val = _this.text() + "px";
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                goal.css("fontSize",_val);
                val.text(_this.text());
                ul.hide();
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }

            });
            return e;
        },
        //obj={goal: ,param: ,}//功能
        color:function(ele,obj){
            var e = $('<div class="zm-colorPicker"><span class="zm-colorPicker-switch"></span></div>');
            var option = e.find(".zm-colorPicker-switch"); // 表示点击显示颜色框按钮
            var type = obj.param;   // 表示要传入颜色组件的参数
            var goal = zmEditor.component.setItems.strings.future(ele,obj); // 表示处理以后的dom元素
            var present;
            /****************************** 初始化颜色框 ****************************/
            switch(type){
                case "borderColor":
                    var nc;
                    if(navigator.userAgent.indexOf("Firefox") != -1){
                        nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: "borderTopColor"});
                    }else{
                        nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});
                    }
                    zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nc});
                    break;
                case "color":
                case "backgroundColor":
                case "borderTopColor":
                case "borderBottomColor":
                case "shadowC":
                case "fill":
                case "stroke":
                    var nowColor = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});    // 获取值
                    zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nowColor});  // 设置值
                    break;
                case "hoverColor":
                case "hoverBackgroundColor":
                case "hoverBorderColor":
                case "hoverBorderTopColor":
                case "hoverBorderBottomColor":
                case "hoverFill":
                    var hover_color = goal.attr("data-type-"+type);  // 获取hover值
                    var arr = type.slice(5).split("");
                    arr.splice(0,1,arr[0].toLowerCase());
                    var str = arr.join("");
                    if(hover_color){  // hover存在值 设置值
                        option.css("backgroundColor",hover_color);
                    }else{
                        if(goal.css(str) == undefined){
                            option.css("backgroundColor","rgba(0,0,0,1)");   // 如果hover不存在值，且goal 没有该样式值，则设置option 颜色值为rgba(0,0,0,1)
                        }else{
                            option.css("backgroundColor",goal.css(str));   // 否则goal有该样式值，设置为样式值。
                        }
                    }
                    break;
                default:
                    console.log("未定义的属性0_1");
                    break;
            }
            /****************************** 引入颜色插件 ****************************/
            e.each(function(){
                $(this).zmColorPicker();
            });
            /****************************** 定义常用颜色 ****************************/
            var colorArr = localStorage.Hcolorarr ? localStorage.Hcolorarr.split(",") : ["#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8"];
            /****************************** 弹出颜色选择框 ************************/
            option.on("click",function(e){
                var clientX = e.clientX;
                var clientY = e.clientY;
                var moreBox = $(".zm-colorPicker-more");
                moreBox.hide();//隐藏颜色选择器
                $("#picker01").colpick({flat:true});
                var _this = $(this).closest(".zm-colorPicker");
                var thisMoreBox =_this.find(".zm-colorPicker-more");
                /*ay:颜色组件显示位置控制*/
                //此处直接获取颜色选择器宽高会有未知bug发生，故定死宽高
                // var moreBoxW = parseInt(moreBox.css('width'));
                // var moreBoxH = parseInt(moreBox.css('height'));
                var moreBoxW = 387;
                var moreBoxH = 349;
                var windowW = $(window).width();
                var windowH = $(window).height();
                var iLeft=clientX,iTop=clientY;
                if(windowW-clientX<moreBoxW){
                    iLeft=clientX-moreBoxW;
                }
                if(windowH-clientY<moreBoxH){
                    iTop=clientY-moreBoxH
                }
                thisMoreBox.show().css({"left": iLeft, "top": iTop});   // 设置节点位置
                _this.find("#picker01").append($(".colpick_full"));   // 添加节点 .colpick_full
                var happR = _this.find("#zm-newColorSpan li");   //获取喜欢的颜色节点
                var zmColorSpan = happR.splice(0,10);    // 获取喜欢的颜色节点span
                for (var i=0;i<colorArr.length;i++) {
                    zmColorSpan[i].style.backgroundColor=colorArr[i];
                }
                present = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"});  // 获取并保存option 的颜色值
            });
            /****************************** 确定按钮设置颜色 ************************/
            e.find("#picker01").zmActionOn("click",".colpick_submit",function(){
                var goal = zmEditor.component.setItems.strings.future(ele,obj);   // 获取需要设置的目标元素
                var colorBox = e.find(".colpick_new_color");   // 获取点击过后新的颜色值
                var valOpa = present.opacity;                   // 获取目标元素透明度
                var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;   //获取点击颜色插件的之后的颜色
                var _value = {color: valCol,opacity: valOpa};      // 颜色值为获取点击过后新的颜色值 ，透明的为原先dom元素的透明度
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_2");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                $(".zm-colorPicker-more").hide();

            });
            /****************************** 经典颜色按钮设置颜色 *********************/
            e.find("#zm-frequentlyColorSpan li").zmActionOn("click",function(){
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"}).color;
                var _value = {color: valCol,opacity: valOpa};
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_3");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                $(".zm-colorPicker-more").hide();
            });
            /****************************** 喜爱的颜色设置颜色 ***********************/
            e.find("#zm-newColorSpan li").zmActionOn("click",function(){
                var _this = $(this);
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal: _this,type: "backgroundColor"}).color;
                var _value = {color: valCol,opacity: valOpa};
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_4");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                $(".zm-colorPicker-more").hide();
            });
            /****************************** 添加喜爱的颜色 ***************************/
            e.find("#pickers0").zmActionOn("click","#zm-addColorBtn",function(){
                var color = "#"+$(".zm-colorPicker-value").val();  // 获取当前选中状态的颜色
                if($.inArray(color,colorArr) == -1){    //从之前储存的localStorage.Hcolorarr中判断是否有选中状态的颜色，如果没有,删除最后一个。并把当前颜色添加进去。
                    colorArr.unshift(color);
                    colorArr.pop();
                }
                var lis = e.find("#zm-newColorSpan > li");  // 从新渲染更新喜欢的颜色显示区
                for(var i in colorArr){
                    lis[i].style.backgroundColor = colorArr[i];
                }
                localStorage.Hcolorarr = colorArr;   // 并且更新localStorage
            });
            /****************************** 点击 X 关闭******************************/
			e.find("#pickers0").on("click","#zm-renoveColorPicker",function() {
                var target = $(e.target);
                if (target.closest(".zm-colorPicker-more").length == 0 && target.closest(".zm-colorPicker-switch").length == 0) {
                    $(".zm-colorPicker-more").hide();
                }
            });

			return e;
        },
        //obj={goal: }
        bold:function(ele,obj){
            var e = $('<div class="zm-edit-components-bold" title="加粗"><i class="fa fa-bold"></i></div>');
            e.zmActionOn("click",function(){
                var _this = $(this);
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                if(goal.css("font-weight") == "bold"){
                    goal.css("font-weight","normal");
                    _this.css("backgroundColor","rgba(0,0,0,0)");
                }else{
                    goal.css("font-weight","bold");
                    _this.css("backgroundColor","#dbefed");
                }
            });
            return e;
        },
        //倾斜
        italic:function(ele,obj){
            var e = $('<div class="zm-edit-components-italic" title="倾斜"><i class="fa fa-italic"></i></div>');
            e.zmActionOn("click",function(){
                var _this = $(this);
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                if(goal.css("fontStyle") == "italic"){
                    goal.css("fontStyle","normal");
                    _this.css("backgroundColor","rgba(0,0,0,0)");
                }else{
                    goal.css("fontStyle","italic");
                    _this.css("backgroundColor","#dbefed");
                }
            });
            return e;
        },
        //字体样式条
        fontStyle:function(ele,obj){
            var e =  $('<div class="zm-edit-components-fontStyle">'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'</div>');
            var family = e.children("div").eq(0),
                size = e.children("div").eq(1),
                color = e.children("div").eq(2),
                bold = e.children("div").eq(3),
                italic = e.children("div").eq(4);
            var _family = zmEditor.component.setItems.strings.family(ele,obj),
                _size = zmEditor.component.setItems.strings.size(ele,obj),
                _color = zmEditor.component.setItems.strings.color(ele,obj),
                _bold = zmEditor.component.setItems.strings.bold(ele,obj),
                _italic = zmEditor.component.setItems.strings.italic(ele,obj);
            family.append(_family);
            size.append(_size);
            color.append(_color);
            bold.append(_bold);
            italic.append(_italic);
            if(obj.style == "tab_mini"){
                size.css("margin-right","8px");
                color.css("margin-right","0");
                bold.css("margin-right","0");
            }
            return e;
        },
        //判断是获取未来元素还是当前元素
        future:function(ele,obj){
            var goal;
            if(obj.goal){
                goal = ele.find(obj.goal);
            }else{
                goal = ele;
            }
            return goal;
        },
        //单一album||product 元素 jq元素
        unityAlbum:function(){
            return $('<div class="zm-edit-components-list-unit border_on_off clearFloat">'
                +'<div class="zm-edit-components-list-unit-image clearFloat">'
                +'<div class="zm-edit-components-list-unit-image-box">'
                +'<div class="zm-edit-components-list-unit-image-wrap border_on_off">'
                +'<div class="zm-edit-components-list-unit-image-layer">'
                +'<img class="suspension-magnify" width="105%" height="105%">'
                +'</div></div></div></div>'
                +'<div class="zm-edit-components-list-album-message unit-message clearFloat">'
                +'<div class="zm-edit-components-list-unit-message-01"><div><span>创&nbsp;&nbsp;作&nbsp;人&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-02"><div><span>专辑名称&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-03"><div><span>下载专辑&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-04"><div><span>发布时间&nbsp;:&nbsp;</span><a></a></div></div>'
                +'</div>'
                +'</div>');
        },
        unityProduct:function(){
            return $('<div class="zm-edit-components-list-unit border_on_off clearFloat">'
                +'<div class="zm-edit-components-list-unit-image clearFloat">'
                +'<div class="zm-edit-components-list-unit-image-box">'
                +'<div class="zm-edit-components-list-unit-image-wrap border_on_off">'
                +'<div class="zm-edit-components-list-unit-image-layer">'
                +'<img class="suspension-magnify" width="105%" height="105%">'
                +'</div></div></div></div>'
                +'<div class="zm-edit-components-list-product-message unit-message clearFloat">'
                +'<div class="zm-edit-components-list-unit-message-01"><div><span></span></div></div>'
                +'<div class="zm-edit-components-list-unit-message-02"><div><span></span><del></del></div></div>'
                +'</div></div>')
        },
    },

    //获取颜色 e = { goal: 对象,type: 属性} 返回valCol = { color: [125,125,125],opacity: 0.6}
    getOpaCol:function(e){
        var goal = e.goal;  //当前作用元素
        var type = e.type;   //当前作用类型
        var rgba;
        if(type == 'shadowC'){
            str = goal.css('box-shadow');
            var arr = str.split(" ");
            var Arr = [];
            for(i in arr){
                if(arr[i].indexOf("px") == -1){
                    Arr.push(arr[i]);
                }
            }
            rgba = Arr.join("");
        }else{
            rgba = goal.css(type);
        }
        var stringArr = rgba.split(",");
        var tone = [];
        var _opacity = 1; //设置默认值透明度
        for(i in stringArr){
            if(i == 3){
                _opacity = Math.ceil(Number(stringArr[i].match(/\.\d+/))*10)/10;  //获取透明度
            }else{
                tone.push(Number(stringArr[i].match(/\d+/)));   //获得颜色值填入数组
            }
        }
        return {color: tone, opacity: _opacity};    //返回颜色值 和透明度值
    },
    //设置颜色 e = { goal: 对象,type: 属性,value: valCol}
    setOpaCol: function (e) {
        var _goal = e.goal;
        var _type = e.type;
        var _value = e.value;
        if (_type == 'shadowC') {   // 对阴影的单独处理
            var _arr = e.shadowXYBS;
            var _newStr = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")" + " " + _arr[0] + " " + _arr[1] + " " + _arr[2];
            _goal.css("boxShadow", _newStr);
        } else {
            var _colorValue = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")";  //设置option点击按钮颜色值
            if(_goal.closest('.zm-component-shape-box').length>0){
                _goal.closest('.zm-component-shape-box').attr('data-lineColor',_colorValue)
            }
            if(_goal.is('.zm-component-carousel-pageNumStyle')){
                _goal.html('.itsTurn{background-color:'+_colorValue+'!important}')
            }
            _goal.css(_type, _colorValue);
        }
    },
    //选择弹窗设置 obj = {title: "设置项标题",type: "设置项属性(打开什么弹窗的参数)",tog: "none","MultiSelect":"",}
    popup:function(ele,obj){
        var e = $('<div class="zm-edit-component-open-popup">'
                +'<div><span class="zm-edit-text-title"></span><div class="zm-edit-popup-onOff"><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div><div class="zm-edit-popup-setting"><span>设置</span></div></div>'
                +'<div><ul class="zm-edit-popup-list"></ul></div>'
                +'</div>'
        );
        var li = $('<li><i class="fa fa-unlink fa-flip-horizontal"></i><span>当前未设置任何链接!</span></li>');
        /***** 获取参数 *****/
        var title = obj.title,
            type = obj.type,
            tog = obj.tog,
            multi = obj.multiSelect;
        var onOff = e.find(".zm-edit-popup-onOff");
        var label = onOff.children();
        var setting = e.find(".zm-edit-popup-setting");
        var btn = setting.children();
        var list = e.find(".zm-edit-popup-list");
        /***** 初始化 *****/
        e.find(".zm-edit-text-title").text(title);
        if(ele.attr("data-type-link") == "true"){
            label.addClass("zm-switch-box-on");
            label.children().children().removeClass("fa-minus").addClass("fa-check");
            btn.addClass("choiceColor");
            list.append("有链接");
            switch(type){
                case "product":
                    btn.attr("onclick","zmChoiceRadio.choiceGoods({multiple :"+multi+",callBack:pop_return})");
                    break;
                case "album":
                    btn.attr("onclick","zmChoiceRadio.choiceAlbum({multiple :"+multi+",callBack:pop_return})");
                    break;
                case "link":
                    btn.attr("onclick","zmEditor.dialog.setHref(this)");
                    break;
            }
        }else{
            list.append(li);
        }
        if(tog == "none"){
            onOff.hide();
            btn.addClass("choiceColor");
            switch(type){
                case "audio":
                    btn.attr("onclick","zmChoiceRadio.choiceRadio({multiple:"+multi+",callBack:"+return_audio+"})");
                    break;
                case "product":
                    btn.attr("onclick","zmChoiceRadio.choiceGoods({multiple:"+multi+",callBack:"+return_product+"})");
                    break;
                case "album":
                    btn.attr("onclick","zmChoiceRadio.choiceAlbum({multiple:"+multi+",callBack:"+return_album+"})");
                    break;
                case "link":
                    btn.attr("onclick","zmEditor.dialog.setHref(this)");
                    break;
            }
        }
        /****** 事件 *****/
        label.on("click",function(){
            var _this = $(this);
            if(_this.hasClass("zm-switch-box-on")){
                btn.removeClass("choiceColor");
                ele.attr("data-type-link","false");
                btn.attr("onclick","");
            }else{
                btn.addClass("choiceColor");
                ele.attr("data-type-link","true");
                switch(type){
                    case "product":
                        btn.attr("onclick","zmChoiceRadio.choiceGoods({multiple :"+multi+",callBack:pop_return})");
                        break;
                    case "audio":
                        btn.attr("onclick","");
                        break;
                    case "album":
                        btn.attr("onclick","zmChoiceRadio.choiceAlbum({multiple :"+multi+",callBack:pop_return})");
                        break;
                    case "image":
                        btn.attr("onclick","");
                        break;
                    case "video":
                        btn.attr("onclick","");
                        break;
                    case "blog":
                        btn.attr("onclick","");
                        break;
                    case "news":
                        btn.attr("onclick","");
                        break;
                }
            }
        });


        function return_audio(data){
            var iSelected = zmEditor.component.nowEdit();
            var obj = {value: data,key: iSelected.attr("id")};
            setLocal(iSelected,obj);
            setLink(data);


            pop_return_audio(data);
        }
        function return_product(data){
            console.log(data,"123");

        }
        function return_album(data){
            console.log(data,"123");

        }

        return e;
    },
    Family: function (ele, obj) {
        var e = $('<div class="zm-edit-components-Family">'
            + '<span class="zm-edit-text-title"></span>'
            + '<div class="zm-edit-components-Family-wrap"></div></div>'
        );
        e.find(".zm-edit-text-title").text(obj.title);
        var wrap = e.find(".zm-edit-components-Family-wrap");
        var family = zmEditor.component.setItems.strings.family(ele,obj);
        wrap.append(family);

        return e;
    },  //字体组件  liu  ok
    textContent:function(ele,obj) {
        var e =  $('<div >'
            +'<span class="zm-edit-text-title">'+obj.title+'</span>'
            +'<input type="text" value="'+ele.text()+'" class="zm-edit-text-content">'
            +'</div>');
        // e.find('.zm-edit-text-content').on('change',function(){
        //     ele.html($(this).val());
        // });
        e.find('.zm-edit-text-content').zmActionOn('change',function(){
            ele.html($(this).val());
        });
        return e;
    },
    boxShadow: function (ele,obj) {
        var e = $('<div class="zm-edit-components-shadow">'
            +'<div class="zm-edit-components-shadow-O"><span class="zm-edit-text-title">阴影</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
            +'<div class="zm-edit-components-shadow-X"></div>'
            +'<div class="zm-edit-components-shadow-Y"></div>'
            +'<div class="zm-edit-components-shadow-B"></div>'
            +'<div class="zm-edit-components-shadow-C"></div>'
            +'<div class="zm-edit-components-shadow-W"></div>'
            +'</div>'
        );
        var X,Y,B,C;
        if(obj.style == "tab"){
            X = zmEditor.component.setItems.slider(ele,{title: "X轴偏移",style: "tab_noColor",isColor: false,param: "shadowX",size: [-20,20],goal: obj.goal}),
            Y = zmEditor.component.setItems.slider(ele,{title: "Y轴偏移",style: "tab_noColor",isColor: false,param: "shadowY",size: [-20,20],goal: obj.goal}),
            B = zmEditor.component.setItems.slider(ele,{title: "阴影模糊",style: "tab_noColor",isColor: false,param: "shadowB",size: [0,20],goal: obj.goal}),
            C = zmEditor.component.setItems.slider(ele,{title: "阴影颜色",style: "tab_color",isColor: true,param: "shadowC",goal: obj.goal});
        }else{
            X = zmEditor.component.setItems.slider(ele,{title: "X轴偏移",style: "noTab_noColor",isColor: false,param: "shadowX",size: [-20,20],goal: obj.goal}),
            Y = zmEditor.component.setItems.slider(ele,{title: "Y轴偏移",style: "noTab_noColor",isColor: false,param: "shadowY",size: [-20,20],goal: obj.goal}),
            B = zmEditor.component.setItems.slider(ele,{title: "模糊",style: "noTab_noColor",isColor: false,param: "shadowB",size: [0,20],goal: obj.goal}),
            C = zmEditor.component.setItems.slider(ele,{title: "阴影颜色",style: "noTab_color",isColor: true,param: "shadowC",goal: obj.goal});
        }
        e.find(".zm-edit-components-shadow-X").append(X);
        e.find(".zm-edit-components-shadow-Y").append(Y);
        e.find(".zm-edit-components-shadow-B").append(B);
        e.find(".zm-edit-components-shadow-C").append(C);
        var _shadow = e.find(".zm-edit-components-shadow-W");
        var _btn = e.find(".zm-switch-box");
        var goal = zmEditor.component.setItems.strings.future(ele,obj);
        var initJudge = goal.attr("data-judge-shadow");
        if (initJudge == "true") {
            _shadow.hide();
            _btn.addClass("zm-switch-box-on");
            _btn.children().children().removeClass("fa-minus").addClass("fa-check");
        }else{
            _shadow.show();
            _btn.removeClass("zm-switch-box-on");
        }
        _btn.on("click", function () {
            var goal = zmEditor.component.setItems.strings.future(ele,obj);

            var judge = goal.attr("data-judge-shadow");
            if(judge == "true"){
                _shadow.stop().fadeIn("500");
                goal.attr({"data-type-shadow":goal.css("boxShadow"),"data-judge-shadow":"false"});
                goal.css("boxShadow", "none");
            }else{
                _shadow.stop().fadeOut("500");
                goal.css("boxShadow", goal.attr("data-type-shadow"));
                goal.attr("data-judge-shadow","true");
            }
        });
        return e;
    },
    color_on: function (iSelected, str) {
        var colorArr = localStorage.Hcolorarr ? zmColorChang(localStorage.Hcolorarr) : ["#f50c27", "#edf50c", "#0c4ef5", "#0cf53f", "#bf0cf5", "#f50c27", "#f50c27", "#f50c27", "#0cf53f", "#0cf53f"];
        var s,e,strings;
        if (iSelected) {
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        switch (str) {
            case "mian_border_color"://ye添加
                strings="边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_border_color");
                console.log("我进了mian_border_color");
                break;
            case "mian_children_childrenLi_bg"://ye添加
                strings="背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_bg");
                console.log("我进了mian_children_childrenLi_bg");
                break;
            case "mian_children_childrenLi_color"://ye添加  nav下的所有li组件的字体色；
                strings="字体颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_color");
                console.log("我进了mian_children_childrenLi_color");
                break;
            case "mian_children_childrenIndependentLi_hover_color"://ye添加 .
                strings="字体悬停背景色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_hover_color");
                console.log("我进了mian_children_childrenIndependentLi_hover_color");
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加
                strings="光标悬浮背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_bg");
                console.log("我进了mian_children_childrenLi_hover_bg");
                break;
            case "mian_children_childrenLi__hover_color"://ye添加 所有li的光标悬停背景色
                strings="光标悬浮文字颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi__hover_color");
                console.log("我进了mian_children_childrenLi__hover_color");
                break;
            case "mian_children_childrenIndependentLi_bg"://ye添加单个li背景色组件
                strings="背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_bg");
                console.log("我进了mian_children_childrenIndependentLi_bg");
                console.log("我进了mian_children_childrenIndependentLi_bg");
                break;
            case "mian_children_childrenIndependentLi_hover_bg"://ye添加单个li光标背景色组件
                strings="光标悬浮背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_hover_bg");
                console.log("我进了mian_children_childrenIndependentLi_hover_bg");
                break;
            case "mian_children_childrenLi_btc"://ye添加单个上边框背景色
                strings="上边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_btc");
                console.log("我进了mian_children_childrenLi_btc");
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加单个li上边框hover色
                strings="光标停留上边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_btc");
                console.log("我进了mian_children_childrenLi_hover_btc");
                break;
            case "mian_children_childrenLi_bbc"://ye添加单个li下边框背景色    one_li_border_bottom_color
                strings="下边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_bbc");
                console.log("我进了mian_children_childrenLi_bbc");
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加单个li下边框hover色
                strings="光标停留下边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_bbc");
                console.log("mian_children_childrenLi_hover_bbc");
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框色颜色
                strings="边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_border_color");
                console.log("我进了mian_children_childrenLi_border_color");
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                strings="光标停留边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_border_color");
                console.log("我进了mian_children_childrenLi_hover_border_color");
                break;
            case "mian_children_childrenSpan_bg"://ye添加 设置每个span的颜色
                strings="间隔线颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenSpan_bg");
                console.log("我进了mian_children_childrenSpan_bg");
                break;
            case "dropdown_bg"://ye添加 设置下拉菜单的的背景颜色
                strings="下拉菜单背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "dropdown_bg");
                console.log("我进了mian_children_childrenSpan_bg");
                break;
            default:
                break;
        };
        e.find(".zm-colorPicker").each(function () {
            $(this).zmColorPicker();
        });
        e.on("click", ".zm-colorPicker-switch", function (e) {
            var clientX = e.clientX;
            var clientY = e.clientY;
            //var color = $(this).zmGetColor();
            $('#picker01').colpick({flat: true});
            $(".zm-colorPicker-more").hide();
            var _this = $(this).closest(".zm-colorPicker");
            if(e.clientX>=1490){
                clientX= clientX-387;
                _this.find(".zm-colorPicker-more").stop().show().css({"left": clientX, "top": clientY,"width":"387px"});
            }else{
                _this.find(".zm-colorPicker-more").stop().show().css({"left": clientX,"top": clientY,"width":"387px"});
            }
            _this.find("#picker01").append($(".colpick_full"));
            var happR = _this.find("#zm-newColorSpan li");
            var zmColorSpan = happR.splice(0, 10)
            //console.log(h);
            //var zmColorSpan=document.querySelectorAll("#zm-newColorSpan .zm-ColorSpan001");
            console.log(zmColorSpan)
            for (var i = 0; i < colorArr.length; i++) {
                zmColorSpan[i].style.backgroundColor = colorArr[i];
            }
        });
        e.find("#zm-frequentlyColorSpan li").on("click", function () {
            var str = [];
            var dox = $(this).closest(".zm-colorPicker");
            var box = $(this)
            var freq = box.splice(0, 1)
            console.log(freq)
            var rgb = $(this).css("background-color").split('(');
            for (var k = 0; k < 3; k++) {
                str[k] = parseInt(rgb[1].split(',')[k]).toString(16);
            }
            str = str[0] + str[1] + str[2];

            color = str;
            console.log(color);
//           console.log("12345")

            dox.find(".zm-colorPicker-value").val(color);
            //box.find(".zm-colorPicker-value").css("background-color",color)
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        });
        e.find("#pickers0").on("click", "#zm-addColorBtn", function () {
            var box = $(this).closest(".zm-colorPicker");
            color = box.find(".colpick_new_color").css("background-color");
            var s = "#" + $(".zm-colorPicker-value").val();
            //zmEditor.component.setItems.colorChange($(this),iSelected);
            var d = [];
            d.push(s);
            console.log(d)
            colorArr = d.concat(colorArr);
            d.shift();
            if (colorArr.length > 10) {
                colorArr.pop()
            }
            console.log(colorArr)
            localStorage.Hcolorarr = colorArr;
            var newcolorArr = localStorage.Hcolorarr
            console.log(newcolorArr)
            var b = newcolorArr.split(",");
            console.log(b)
            console.log(b.length)
            var happR = box.find("#zm-newColorSpan li");
            var zmColorSpan = happR.splice(0, 10);
            //var zmColorSpan=document.querySelectorAll("#zm-newColorSpan li");
            console.log(zmColorSpan)
            for (var i = 0; i < b.length; i++) {
                zmColorSpan[i].style.backgroundColor = b[i];
            }
        })
        e.find("#zm-newColorSpan li").on("click", function () {
            var box = $(this).closest(".zm-colorPicker");
            var color = colorArr[$(this).index()];
            color = color.substr(1);
            console.log(color)
            console.log(color)
            box.find(".zm-colorPicker-value").val(color);
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        });
        e.find("#picker01").on("click", ".colpick_submit", function () {
            console.log("1111")
            var box = $(this).closest(".zm-colorPicker");
            color = box.find(".colpick_new_color").css("background-color");
            var s = "#" + $(".zm-colorPicker-value").val();
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        })
        function zmColorChang(colorString) {
            var q = colorString.split(",")
            return q;
        }
        e.find("#pickers0").on("click", "#zm-renoveColorPicker", function () {
            console.log("1234")
            var target = $(e.target);
            if (target.closest(".zm-colorPicker-more").length == 0 && target.closest(".zm-colorPicker-switch").length == 0) {
                $(".zm-colorPicker-more").hide();
            }
        })
        var color = iSelected.css("color");
        var bgColor = iSelected.css("backgroundColor");
        var borderColor = iSelected.css("borderColor");
        e.find(".zm-colorPicker[data-zm-color-type='color'] .zm-colorPicker-switch").css("backgroundColor", color);
        e.find(".zm-colorPicker[data-zm-color-type='bg'] .zm-colorPicker-switch").css("backgroundColor", bgColor);
        e.find(".zm-colorPicker[data-zm-color-type='borderColor'] .zm-colorPicker-switch").css("backgroundColor", borderColor);
        // e.zmSlider({type: "opacity_style", minSize: 0, maxSize: 100, class: str});
        e.zmSlider({goal: iSelected, type: "opacity_style", title: strings, style:"noTab_color", minSize: 0, maxSize: 100,class:str});
        return e;
    },
    colorChange_on: function (e, obj) {
        var _this = $(e);
        var thisColorP = _this.closest(".zm-colorPicker");
        var type = thisColorP.attr("data-zm-color-type");
        // var color = thisColorP.find(".zm-colorPicker-value").val();
        var color = "#" + thisColorP.find(".zm-colorPicker-value").val();
        thisColorP.find(".zm-colorPicker-switch").css("backgroundColor", color);
        var iSelected;
        if (obj) {
            iSelected = obj;
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        var a = iSelected[0].classList[4], b = "data-" + iSelected.attr("data-" + a), c = iSelected.children("ul").children("li");// data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4])
        // console.log(iSelected, "4");//默认第一次拒绝事件ye添加
        // console.log(a);
        // console.log(type);
        switch (type) {
            //改动过后
            case "mian_border_color"://ye添加 3月15日改动  mian_border_color
                // iSelected.css({"border":""+zmEditor.globalMethod.nav.OneType.mian.borderWidth+zmEditor.globalMethod.nav.OneType.mian.borderStyle+zmEditor.globalMethod.nav.global_prototype("mian","borderColor",color),"box-sizing":"content-box"});
                // iSelected.css({"border-color":""+zmEditor.globalMethod.nav.global_prototype("mian","borderColor",color)});
                if (iSelected.attr("data-" + a)) {
                    // arrLikestyle(b,"mian","sStyle","borderColor",color);arrLikestyle(b,"mian","sStyle","boxSizing","content-box");
                    arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderLeftColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderRightColor", color);
                    arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                    arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                    arrLikestyle(b, "li", "hHover", "borderLeftColor", color);
                    arrLikestyle(b, "li", "hHover", "borderRightColor", color);
                    arrLikestyle(b, "span", "sStyle", "borderColor", color);
                    // iSelected.css({"borderWidth":zmEditor.globalMethod.nav.data.arrLike[b]["mian"]["sStyle"]["borderWidth"],"borderStyle":zmEditor.globalMethod.nav.data.arrLike[b]["mian"]["sStyle"]["borderStyle"],"borderColor":color,"box-sizing":"content-box"});
                    iSelected.children().children("li").css({
                        "borderTopColor": color,
                        "borderBottomColor": color,
                        "borderLeftColor": color,
                        "borderRightColor": color
                    });
                    iSelected.children().children("span").css("borderColor", color);
                } else {
                    iSelected.css({"borderColor": "" + color});
                }
                break;
            case "mian_children_childrenLi_color"://ye添加 改动的字体色 3月15日改动
                arrLikestyle(b, "li", "sStyle", "color", color);
                c.css("color", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                console.log("我的字体颜色改变了")
                // console.log(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)]);
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            case "mian_children_childrenLi__hover_color"://ye添加 改动的字体hover色   3月15日改动
                arrLikestyle(b, "li", "hHover", "color", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // console.log("我字体颜色改变了")
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            case "mian_children_childrenLi_bg"://ye添加 3月13日改动   mian_children_childrenLi_bg

                arrLikestyle(b, "li", "sStyle", "backgroundColor", color);
               // debugger;
                console.log("我点击了mian_children_childrenLi_bg");
                console.log(zmEditor.globalMethod.nav.data.arrLike[b].li);
                c.css("backgroundColor", color);
                c.each(function (index, element) { // 刷新hover色
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b)

                    zmEditor.globalMethod.nav.initNavList.endClick($(this), b, undefined, index, a);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                // zmEditor.globalMethod.nav.refreshNav(iSelected);refreshNav
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加  3月13日改动 mian_children_childrenLi_hover_bg  刷新hover色
                arrLikestyle(b, "li", "hHover", "backgroundColor", color);
                c.each(function () {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });

                zmEditor.globalMethod.nav.refreshStyleTable(iSelected,zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected));
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            //单独背景设置
            case "mian_children_childrenIndependentLi_bg"://ye  3.15改动过的独立的背景色
                // $(iSelected.children("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("background-color",color_color("backgroundColor",color));
                arrLikestyle(b, "li", "sStyle", "backgroundColor", color);
                $(c[zmEditor.globalMethod.nav.data.arrLike[b].li["nav_li_Independent_position"]]).css("backgroundColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", color, zmEditor.globalMethod.nav.data.arrLike[b].li.hHover["backgroundColor"],
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.backgroundColor, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.backgroundColor, index, b);

                });
                console.log(zmEditor.globalMethod.nav.data.arrLike[b]);
                break;
            case "mian_children_childrenIndependentLi_hover_bg"://ye添加 3.15  mian_children_childrenIndependentLi_hover_bg
                //ye 改动过的独立的hover背景色
                arrLikestyle(b, "li", "hHover", "backgroundColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["backgroundColor"], color,
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.backgroundColor, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.backgroundColor, index, b);
                });
                console.log(zmEditor.globalMethod.nav.data.arrLike[b]);

                break;
            case "mian_children_childrenIndependentLi_hover_color"://ye添加 改动的字体色 //独立字体颜色组件待定设置   mian_children_childrenIndependentLi_hover_color
                // iSelected.children("ul").children("li").css("color",color_color("color",color));
                arrLikestyle(b, "li", "hHover", "color", color);
                // $(iSelected.children("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.OneType.li.hover_color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "color", zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["color"], color,
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, index, b);
                });
                break;
            //span样式设置
            case "mian_children_childrenSpan_bg"://ye添加每个span背景颜色   mian_children_childrenSpan_bg
                // iSelected.children().children().css("border-top-color",color_color("border_top_color",color));
                arrLikestyle(b, "span", "sStyle", "backgroundColor", color);
                iSelected.children().children("span").css("background-color", color);
                break;
            //li单边框样式设置
            case "mian_children_childrenLi_btc"://ye添加上边框颜色
                arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                c.each(function (index, ele) {
                    $(this).css("borderTopColor", color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加上边框停留颜色  mian_children_childrenLi_hover_btc
                console.log(color);
                arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_bbc"://ye添加下边框颜色  3.16     mian_children_childrenLi_bbc
                arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                c.each(function (index, ele) {
                    $(this).css("borderBottomColor", color);

                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加下边框颜色    3.16   mian_children_childrenLi_hover_bbc
                arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框颜色  3.16  对应横向three组件
                // arrLikestyle(b,"li","sStyle","borderColor",color);
                arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                arrLikestyle(b, "li", "sStyle", "borderLeftColor", color);
                arrLikestyle(b, "li", "sStyle", "borderRightColor", color);
                c.each(function () {
                    $(this).css({
                        "borderTopColor": color,
                        "borderBottomColor": color,
                        "borderLeftColor": color,
                        "borderRightColor": color,
                        "borderStyle": zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["borderStyle"]
                    });//,"borderWidth":zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["borderWidth"]
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加每个li边框颜色  mian_children_childrenLi_hover_border_color

                arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                arrLikestyle(b, "li", "hHover", "borderLeftColor", color);
                arrLikestyle(b, "li", "hHover", "borderRightColor", color);
                c.each(function () {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "dropdown_bg"://ye添加每个li边框颜色  mian_children_childrenLi_hover_border_color
                var nav_name = zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);
                if (zmEditor.globalMethod.nav.global_verOrcross(iSelected)) {
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-liThree", "background-color:" + color + ";");
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-liTwo", "background-color:" + color + ";");
                }else{
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-ulThree", "background-color:" + color + ";");
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-ulTwo", "background-color:" + color + ";");
                }
                // debugger;
                zmEditor.globalMethod.nav.data.arrLike[b]["dropdownBg"] = color;
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            //改动过后
            default:
                break;
        }
        function arrLikestyle(b, str, str1, str2, str3) {
            zmEditor.globalMethod.nav.data.arrLike[b][str][str1][str2] = str3;
        }
    },
    fontStyle: function (ele,obj) {
        var e = $('<div><div class="zm-edit-text-fontStyle clearFloat">'
            + '<span data-zm-title="加粗" class="zm-tooltip">B</span>'
            + '<span data-zm-title="倾斜" class="zm-tooltip">I</span>'
            + '<span data-zm-title="下划线" class="zm-tooltip">U</span>'
            + '<span data-zm-title="删除线" class="zm-tooltip">S</span>'
            + '</div></div>');
        var p = e.find(".zm-edit-text-fontStyle span");
        var text = ele||zmEditor.component.nowEdit();
        var curClass = 'zm-edit-text-fontStyle-curSpan';
        if(text.css('font-weight')=='bold'){
            p.eq(0).addClass(curClass)
        }
        if(text.css('font-style')=='italic'){
            p.eq(1).addClass(curClass)
        }
        if((text.css('text-decoration')).split(" ")[0] == 'underline'){
            p.eq(2).addClass(curClass)
        }
        if((text.css('text-decoration')).split(" ")[0] == 'line-through'){
            p.eq(3).addClass(curClass)
        };
        e.find("span").on("click",function(){
            var _this = $(this);
            var index = _this.index();
            var goal;
            if(obj){
                goal = zmEditor.component.setItems.strings.future(text,obj);
            }else{
                goal = text;
            }
            switch(index){
                case 0:
                    if (goal.css("fontWeight") == "bold") {
                        goal.css("fontWeight", "normal")
                    }
                    else {
                        goal.css("fontWeight", "bold")
                    }
                    break;
                case 1:
                    if (goal.css("fontStyle") == "italic") {
                        goal.css("fontStyle", "normal")
                    }
                    else {
                        goal.css("fontStyle", "italic")
                    }
                    break;
                case 2:
                    if ((goal.css("text-decoration")).split(" ")[0] == "underline") {
                        goal.css("text-decoration", "none");
                    }
                    else {
                        goal.css("text-decoration", "underline");
                        p.eq(3).removeClass(curClass);
                    }
                    break;
                case 3:
                    if ((goal.css("text-decoration")).split(" ")[0] == "line-through") {
                        goal.css("text-decoration", "none")
                    }
                    else {
                        goal.css("textDecoration", "line-through");
                        p.eq(2).removeClass(curClass);
                    }
                    break;
            }
            _this.toggleClass(curClass);
        })
        return e;
    },
    paragraphStyle: function (ele) {
        var e = $('<div><div class="zm-edit-text-paragraphStyle clearFloat">'
            + '<span data-zm-title="左对齐"  class="fa fa-align-left zm-tooltip"></span>'
            + '<span data-zm-title="居中" class="fa fa-align-center zm-tooltip"></span>'
            + '<span data-zm-title="右对齐" class="fa fa-align-right zm-tooltip"></span>'
            + '</div></div>');
        var p = e.find(".zm-edit-text-paragraphStyle span");
        var text = ele||zmEditor.component.nowEdit();
        var curClass = 'zm-edit-text-paragraphStyle-curSpan';
        if(text.css('textAlign')=='center'){
            p.eq(1).addClass(curClass)
        }
        else if(text.css('textAlign')=='right'){
            p.eq(2).addClass(curClass)
        }
        else{
            p.eq(0).addClass(curClass)
        }
        e.find("span").on("click",function(){//暂时添加
            var _this = $(this);
            var index = _this.index();
            if(index==1){
                text.css("textAlign",'center');
            }
            else if(index==2){
                text.css("textAlign",'right');
            }
            else{
                text.css("textAlign",'left');
            }
            _this.addClass(curClass).siblings().removeClass(curClass)
        })
        //暂时添加
        return e;
    },
    lineSpace: function (ele, obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    fontSpace: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    tbPadding: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">上下边距</span>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "tbPadding", minSize: 0, maxSize: 50, goal: obj});
        return e;
    },
    lrPadding: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">左右边距</span>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "lrPadding", minSize: 0, maxSize: 50, goal: obj});
        return e;
    },
    width: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {

            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    height: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    scale: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    lineClamp: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    //圆角组件 单一可公用
    radiu_ordinary:function(ele,str){//ye 可公用 只作用单一元素。支持动态创建的元素
        var e =$('<div style="margin-top: 22px;">'
            +'<span class="zm-edit-text-title">圆角 <i style="font-size: 12px">(像素</i>)</span>'//圆角(像素)
            +'<div class="zm-edit-border-radius-box"style=" margin: 35px 0 45px 0;">'
            +'<input class="zm-edit-radius-val" data-zm-radius="tl" maxlength="2">'
            +'<input class="zm-edit-radius-val" data-zm-radius="tr" maxlength="2">'
            +'<input class="zm-edit-radius-val" data-zm-radius="br" maxlength="2">'
            +'<input class="zm-edit-radius-val" data-zm-radius="bl" maxlength="2">'
            +'<div class="zm-edit-border-radius" style="position: relative">'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<label class="zm-switch-box" style="position: absolute;top:35px;left: 45px;"><span class="zm-switch" style="border: 1px solid #ccc;"><span class="fa fa-window-minimize"></span></span><span style="position: absolute;top: 1px;left: 21px;z-index:1;font-size: 12px;color: #fff;" class="radius_font">独立</span></label>'
            +'</div>'
            +'</div>'
            +'</div>'),a=false,isSelect;
        ele=ele?ele:zmEditor.component.nowEdit();
        isSelect=ele;
        var radiusTL = ele.css("border-top-left-radius");
        var radiusTR = ele.css("border-top-right-radius");
        var radiusBR = ele.css("border-bottom-right-radius");
        var radiusBL = ele.css("border-bottom-left-radius");
        e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
        e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
        e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
        e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        e.find("label").on("click",function(){
            if(str.goal)ele = isSelect.find(str.goal);
            var b=e.find("input[data-zm-radius='tl']").val();
            !a?(e.find(".radius_font").css("left","5px"),e.find(".radius_font").text("同步"),a=true,ele.css({"border-top-left-radius":b+"px","border-top-right-radius":b+"px","border-bottom-right-radius":b+"px","border-bottom-left-radius":b+"px"}),
            e.find("input[data-zm-radius='tl']").val(parseInt(b)),
            e.find("input[data-zm-radius='tr']").val(parseInt(b)),
            e.find("input[data-zm-radius='br']").val(parseInt(b)),
            e.find("input[data-zm-radius='bl']").val(parseInt(b)),
            e.find(".fa").removeClass("fa-window-minimize").addClass("fa-check"),
            e.find(".zm-switch").css("border-color","#4ab1a7")
            ):(  e.find(".radius_font").css("left","21px"), e.find(".radius_font").text("独立"),a=false,
            e.find(".fa").removeClass("fa-check").addClass("fa-window-minimize"),
            e.find(".zm-switch").css("border-color","#ccc")
            );
        });
        e.on("change",".zm-edit-radius-val",function(){
            if(str.goal)ele = isSelect.find(str.goal);
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            var val = parseInt(_this.val());
            if(!isNaN(val)){
                if(val<= 0){val=0};
                if(!a){
                    switch (flag){
                        case "tl":
                            ele.css("border-top-left-radius",val);
                            break;
                        case "tr":
                            ele.css("border-top-right-radius",val);
                            break;
                        case "br":
                            ele.css("border-bottom-right-radius",val);
                            break;
                        case "bl":
                            ele.css("border-bottom-left-radius",val);
                            break;
                        default:
                            break;
                    }
                }else{
                    ele.css({"border-top-left-radius":val,"border-top-right-radius":val,"border-bottom-right-radius":val,"border-bottom-left-radius":val});
                    e.find("input").val(val);
                }
                _this.val(val);
            }
            else{
                _this.val("");
            }
        });
        e.find(".zm-edit-border-radius-box input").hover(function(){
            var _this = $(this);
            var index = _this.index();
            a?e.find(".zm-edit-border-radius div").css("border-width","3px"):e.find(".zm-edit-border-radius div").eq(index).css("border-width","3px");
        },function(){
            var _this = $(this);
            var index = _this.index();
           a?e.find(".zm-edit-border-radius div").css("border-width","1px"):e.find(".zm-edit-border-radius div").eq(index).css("border-width","1px");
        });
        return e;
    },
    //圆角组件 可公用
    //圆角组件 作用元素多层级结构可选择 可公用
    radius: function (ele,str,a,_this,e,val,flag) {
        //组件可公用.
        // 可公用。 //可作用于一个元素的圆角,2个元素的圆角。4个元素的圆角。和多个元素的圆角。  str参数若是对象，则str.fn属性可传入一个回调函数写圆角设置后想要执行的代码
        // 若是想作用于2个或是4个元素的圆角，传入ele 元素是一个数组。传入ele参数时按照圆角顺序传入元素并放到一个数组字面量中，传入的元素是你想做作用的圆角元素。
        // 2个作用元素时，可分为横向排列，纵向排列。第二个参数,必须传入一个对象。对象下的vc属性是"vertical"，表示纵向排列的元素，反之表示横向排列的元素。作用的元素的圆角是按照上右下左的顺序。 (传入2个元素时与4个元素类似。2个元素的每个元素对应2个圆角)
        //传入4个元素时,传入参数按照圆角顺序上右下左的顺序。分别作用于one元素->左上，two元素->右上，three元素->右下，four元素->左下的圆角.
        //传入一个或多个元素时可直接传入一个jquery对象即可。分别作用于每个元素的上下左右圆角。
        if(e){}else{
                e = $('<div style="margin-top: 22px;" class="zm-edit-components-radius">'
                + '<span class="zm-edit-text-title">圆角 <i style="font-size: 12px">(像素</i>)</span>'//圆角(像素)
                + '<div class="zm-edit-border-radius-box"style=" margin: 35px 0 45px 0;">'
                + '<input class="zm-edit-radius-val" data-zm-radius="tl" maxlength="2">'
                + '<input class="zm-edit-radius-val" data-zm-radius="tr" maxlength="2">'
                + '<input class="zm-edit-radius-val" data-zm-radius="br" maxlength="2">'
                + '<input class="zm-edit-radius-val" data-zm-radius="bl" maxlength="2">'
                + '<div class="zm-edit-border-radius" style="position: relative">'
                + '<div></div>'
                + '<div></div>'
                + '<div></div>'
                + '<div></div>'
                + '<label class="zm-switch-box" style="position: absolute;top:35px;left: 45px;background-color: #ccc"><span class="zm-switch" style="border: 1px solid #ccc;"><span class="fa fa-window-minimize"></span></span><span style="position: absolute;top: 1px;left: 21px;z-index:1;font-size: 12px;color: #fff;" class="radius_font">独立</span></label>'
                + '</div>'//fa-check
                + '</div>'
                + '</div>');
        }
        // console.log(str.fn);
        //  console.log(val);
        a=a?a:false;
        if (ele) {} else {ele = zmEditor.component.nowEdit()};
        var radiusTL, radiusTR, radiusBR, radiusBL,repaintRadius=false;
        function refreshEle(ele,str,a,_this,e,val,flag){
         if(ele instanceof Array){
             //判断ele的第一个子元素是否可获得
             // console.log($(ele[0]).closest(".zm-component-main"));
             if($(ele[0]).closest(".zm-component-main").length>0){
                 return;
             }else{
                 e.off();repaintRadius=true;
                 var isSelectOnce=zmEditor.component.nowEdit();
                 // console.log(isSelectOnce);
                 // debugger;
                 // console.log("我return了")
                 // console.log(zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]))
                 zmEditor.component.setItems.radius(zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]),str,a,_this,e,val,flag);
                 if(_this[0].nodeName.toLowerCase()=="label"){
                     _this.trigger("click");
                     _this.addClass("zm-switch-box-on");
                 }else{
                     _this.trigger("change");
                 }
             }
         }else{
         //判断ele是否可获得
         //     console.log($(ele).closest(".zm-component-main"));
             if($(ele).closest(".zm-component-main").length>0){// console.log(isSelectOnce)
                 return;
             }else{
                 // console.log("我解绑e了")
                 e.off();repaintRadius=true;
                 var isSelectOnce=zmEditor.component.nowEdit();
                 zmEditor.component.setItems.radius( zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]),str,a,_this,e,val,flag);
                // console.log(zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]))
                //  console.log(_this[0].nodeName.toLowerCase())
                 if(_this[0].nodeName.toLowerCase()=="label"){
                     _this.trigger("click");
                     _this.addClass("zm-switch-box-on");
                 }else{
                     _this.trigger("change");//change
                 }
             }
         }
        }
        // if(!(ele instanceof Array)){
        switch (ele.length) { // 获得边框
            case 1:
                getRadius($(ele), $(ele), $(ele), $(ele),a,val,flag);
                break;
            case 2:
                if (str.vc == "vertical") {
                    getRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]),a,val,flag);
                } else {
                    getRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]),a,val,flag);
                }
                break;
            case 4:
                getRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]),a,val,flag);
                break;
            default:
                getRadius($(ele[0]), $(ele[0]), $(ele[0]), $(ele[0]),a,val,flag);
                break;
        }
        function getRadius(one, two, three, four,a,val,flag) {
            if(val){
                if(a){
                    radiusTL =val;
                    radiusTR =val;
                    radiusBR =val;
                    radiusBL =val;
                }
                else if(flag){
                    switch (flag) {
                    case "tl":
                        radiusTL = val;
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "tr":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = val;
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "br":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = val;
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "bl":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = val;
                        break;
                        case "3":
                            radiusTL =val;
                            radiusTR =val;
                            radiusBR =val;
                            radiusBL =val;
                            break;
                    default:
                        break;
                    }
                }
            }
            else{
                radiusTL = one.css("border-top-left-radius");
                // console.log(one);
                radiusTR = two.css("border-top-right-radius");
                // console.log(two);
                radiusBR = three.css("border-bottom-right-radius");
                radiusBL = four.css("border-bottom-left-radius");
            }
        }
        setinput(radiusTL, radiusTR, radiusBR, radiusBL);
        function setinput(radiusTL, radiusTR, radiusBR, radiusBL) {
            e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
            e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
            e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
            e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        }
        sOri();
        function sOri() {
            e.on("click",".zm-switch-box", function (event) {
                // console.log(ele);
                // console.log(ele.onceEle());
                event.stopPropagation();
                $(this).toggleClass("zm-switch-box-on");
                var b;
                b = e.find("input[data-zm-radius='tl']").val();
                refreshEle(ele,str,a,$(this),e,b,"3");
                if(repaintRadius){return}
                if (!a) {
                    e.find(".radius_font").css("left", "5px");
                    e.find(".radius_font").text("同步");
                    e.find(".zm-switch-box").css("background-color","#4ab1a7");
                    a = true;
                    switch (ele.length) {
                        case 1:
                            setallRadius($(ele), $(ele), $(ele), $(ele), b, a)
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setallRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), b, a)
                            } else {
                                setallRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), b, a)
                            }
                            break;
                        case 4:
                            setallRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), b, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setallRadius($(element), $(element), $(element), $(element), b, a)
                            });
                            break;
                    };
                    setinput(parseInt(b), parseInt(b), parseInt(b), parseInt(b));
                    e.find(".fa").removeClass("fa-window-minimize").addClass("fa-check");
                    e.find(".zm-switch").css("border-color", "#4ab1a7");
                } else {
                    e.find(".radius_font").css("left", "21px"),
                        e.find(".radius_font").text("独立"), a = false,
                        e.find(".zm-switch-box").css("background-color","#ccc");
                        e.find(".fa").removeClass("fa-check").addClass("fa-window-minimize"),
                        e.find(".zm-switch").css("border-color", "#ccc");
                }
            });
        }
        e.on("change", ".zm-edit-radius-val", allOrin);//val// }else{
        function allOrin() {
            // console.log("我点击圆角了")
            // console.log(ele)
            // console.log("我是input重新生效了")
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            val = parseInt(_this.val());
            // console.log(val)
            refreshEle(ele,str,a,$(this),e,val,flag);
            // console.log(repaintRadius)
            // radius_num++;
            // console.log(radius_num);
            if(repaintRadius){return}
            if (val <= 0) {
                val = 0
            };
            if (!isNaN(val)) {
                if (!a) {
                    switch (ele.length) {
                        case 1:
                            setinRadius(flag, $(ele), $(ele), $(ele), $(ele), val, a);
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setinRadius(flag, $(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), val, a)
                            } else {
                                setinRadius(flag, $(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), val, a)
                            }
                            break;
                        case 4:
                            setinRadius(flag, $(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), val, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setinRadius(flag, $(element), $(element), $(element), $(element), val, a);
                            })
                            break;
                    }
                } else {
                    switch (ele.length) {
                        case 1:
                            setallRadius($(ele), $(ele), $(ele), $(ele), val, a)
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setallRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), val, a)
                            } else {
                                setallRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), val, a)
                            }
                            break;
                        case 4:
                            setallRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), val, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setallRadius($(element), $(element), $(element), $(element), val, a)
                            })
                            break;
                    }
                    e.find("input").val(val);
                }
                _this.val(val);
            }
            else {
                _this.val("");
            }
        }
        function setallRadius(ele1, ele2, ele3, ele4, val, a) {
            ele1.css("border-top-left-radius", val + "px");
            ele2.css("border-top-right-radius", val + "px");
            ele3.css("border-bottom-right-radius", val + "px");
            ele4.css("border-bottom-left-radius", val + "px");
            // console.log(val);
            if (str.fn) {
                str.fn(ele,str,a,flag,val);
            }
        }
        function setinRadius(flag, ele1, ele2, ele3, ele4, val, a) {
            switch (flag) {
                case "tl":
                    ele1.css("border-top-left-radius", val + "px");
                    break;
                case "tr":
                    ele2.css("border-top-right-radius", val + "px");
                    break;
                case "br":
                    ele3.css("border-bottom-right-radius", val + "px");
                    break;
                case "bl":
                    ele4.css("border-bottom-left-radius", val + "px");
                    break;
                default:
                    break;
            }
            if (str.fn) {
                str.fn(ele, str, a, flag, val);
            }
        }
        e.find(".zm-edit-border-radius-box input").hover(function () {
            var _this = $(this);
            var index = _this.index();
            a ? e.find(".zm-edit-border-radius div").css("border-width", "3px") : e.find(".zm-edit-border-radius div").eq(index).css("border-width", "3px");
        }, function () {
            var _this = $(this);
            var index = _this.index();
            a ? e.find(".zm-edit-border-radius div").css("border-width", "1px") : e.find(".zm-edit-border-radius div").eq(index).css("border-width", "1px");
        });
        return e;
    },
    //圆角组件 可公用
    padding: function () {
        var e = $('<div><label>'
            + '<span class="zm-edit-text-title">四周弧度(°)</span><input class="zm-edit-border-radius-input" readonly><span class="zm-edit-text-title">内边距(px)</span><input class="zm-edit-padding-input" readonly>'
            + '<div class="zm-edit-border-radius-box">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="tl" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="tr" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="br" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="bl" maxlength="2">'
            + '<div class="zm-edit-border-radius">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="t" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="r" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="b" maxlength="2">'
            + ' <input class="zm-edit-radius-padding-val" data-zm-radius="l" maxlength="2">'
            + ' </div>'
            + '</div>'
            + '</label></div>');
        var iSelected = zmEditor.component.nowEdit();
        var radiusTL = iSelected.css("border-top-left-radius");
        var radiusTR = iSelected.css("border-top-right-radius");
        var radiusBR = iSelected.css("border-bottom-left-radius");
        var radiusBL = iSelected.css("border-bottom-left-radius");
        e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
        e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
        e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
        e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        //内边距
        var radiusT = iSelected.css("padding-top");
        var radiusR = iSelected.css("padding-right");
        var radiusB = iSelected.css("padding-bottom");
        var radiusL = iSelected.css("padding-left");
        e.find("input[data-zm-radius='t']").val(parseInt(radiusT));
        e.find("input[data-zm-radius='r']").val(parseInt(radiusR));
        e.find("input[data-zm-radius='b']").val(parseInt(radiusB));
        e.find("input[data-zm-radius='l']").val(parseInt(radiusL));
        e.on("change", ".zm-edit-radius-padding-val", function () {
            var elem = zmEditor.component.nowEdit();
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            var val = parseInt(_this.val());
            if (!isNaN(val)) {
                switch (flag) {
                    case "tl":
                        elem.css("border-top-left-radius", val);
                        break;
                    case "tr":
                        elem.css("border-top-right-radius", val);
                        break;
                    case "br":
                        elem.css("border-bottom-right-radius", val);
                        break;
                    case "bl":
                        elem.css("border-bottom-left-radius", val);
                        break;
                    case "t":
                        elem.css("padding-top", val);
                        break;
                    case "r":
                        elem.css("padding-right", val);
                        break;
                    case "b":
                        elem.css("padding-bottom", val);
                        break;
                    case "l":
                        elem.css("padding-left", val);
                        break;
                    default:

                        break;
                }
                _this.val(val);
            }
            else {
                _this.val("");
            }
        })
        return e;
    },
    backgroundcolor: function (ele, str) {
        var e = zmEditor.globalMethod.initialize_color_html_callback("光标悬停背景色", "mian_children_childrenLi_hover_bg");
        ele = ele ? ele : zmEditor.component.nowEdit();
        e.zmSlider({type: "opacity_style", minSize: 0, maxSize: 100, class: str});
        return e;
    },
    href:function(ele){
        var e =$('<div class="zm-edit-components-text-href">'
            +'<span class="zm-edit-text-title">链接</span>'
            +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            +'<span class="zm-edit-text-hrefSet">设置链接</span>'
            +'</div>');
        var on_off = e.find("label");
        var set_href = e.find(".zm-edit-text-hrefSet");
        if(ele.attr("data-href")){
            on_off.addClass(".zm-switch-box-on");
            set_href.addClass("clickColor");
            console.log("我有链接");
        }
        on_off.on("click",function(){
            var _this = $(this);
            if(_this.hasClass("zm-switch-box-on")){
                console.log("关闭");
                _this.removeClass(".zm-switch-box-on");
                set_href.removeClass("clickColor").attr("onclick","");

            }else{
                console.log("打开");
                _this.addClass(".zm-switch-box-on");
                set_href.addClass("clickColor").attr("onclick","zmEditor.dialog.setHref(this)");
            }
        });
        return e;
    },

    typeClass: function () {//ye待删除
        var e = $("<div><span class='typeClasspageSet' style='width: 200px;height: 30px;    line-height: 30px;display: block;background-color:#00a4fd;text-align: center; color: #fff;margin: 0 auto;margin-top: 20px;border-radius: 8px;'>" +
            "点击页面设置</span><span class='typeClasspageSetadd' style='width: 200px;height: 30px;    line-height: 30px;display: block;background-color:#00a4fd;text-align: center; color: #fff;margin: 0 auto;margin-top: 20px;border-radius: 8px;'>" +
            "点击添加到导航设置</span></div>");

        e.on("click", ".typeClasspageSet", function () {
            zmEditor.pageSet('pageSet');
        })
        e.on("click", ".typeClasspageSetadd", function () {
            console.log(11);
        })
        // 该组件可自动刷新列表类名，功能比较好拓展.（待删除)..
        var e = $('<div class="zm-edit-class">' +//二级三级列表类名问题
            '<div class="zm-edit-classOne1 clearfix"><span class="classOne1span"></span><div class="zm-edit-classTwo1 clearfix"><span class="classTwo1span"></span><div class="zm-edit-classThree1"><span class="classThree1span"></span></div></div></div>' +
            '<div class="zm-edit-classOne2 clearfix"><span class="classOne2span"></span><div class="zm-edit-classTwo2 clearfix"><span class="classTwo2span"></span><div class="zm-edit-classThree2"><span class="classThree2span"></span></div></div></div>' +
            '<div class="zm-edit-classOne3 clearfix"><span class="classOne3span"></span><div class="zm-edit-classTwo3 clearfix"><span class="classTwo3span"></span><div class="zm-edit-classThree3"><span class="classThree3span"></span></div></div></div>' +
            '<div class="zm-edit-classOne4 clearfix"><span class="classOne4span"></span><div class="zm-edit-classTwo4 clearfix"><span class="classTwo4span"></span><div class="zm-edit-classThree4"><span class="classThree4span"></span></div></div></div>' +
            '<div class="zm-edit-classOne5 clearfix"><span class="classOne5span"></span><div class="zm-edit-classTwo5 clearfix"><span class="classTwo5span"></span><div class="zm-edit-classThree5"><span class="classThree5span"></span></div></div></div>' +
            '<div class="zm-classConfirm zm-classConfirm-ye">确认</div><div class="zm-classConfirm-confirm zm-classConfirm-ye">是否添加到导航栏？点击内容确认添加到导航栏。<br><span>确认</span><span>取消</span></div></div>'), is_selected;
        is_selected = zmEditor.component.nowEdit().find("ul").children("li");
        var l = is_selected.length, arre = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        e.children("div[class^='zm-edit']").each(function (index, element) {//初始化函数
            addbianji(this, index);
            addbianji_son(this);
        })
        e.find("span[class$='span']").on("click", function (event) {//点击切换按钮
            $(this).closest("div[class^='zm-edit']").children("div[class^='zm-edit']").toggle();
        })
        e.on("click", "input", function () {

        })
        e.on("click", ".zm-classConfirm", function (event) {//弹出确认框
            var x, y;
            x = event.pageX;
            y = event.pageY;
            $(".zm-classConfirm-confirm").css({
                "position": "fixed",
                "left": x + "px",
                "top": y + "px",
                "display": "block"
            });
        })

        e.on("click", ".zm-classConfirm-confirm span:eq(0)", function (event) {//弹出确认框确认按钮
            // $(".zm-classConfirm-confirm").css({"display":"none"});
            confirmreader();
        })
        e.on("click", ".zm-classConfirm-confirm span:eq(1)", function (event) {//弹出确认框取消按钮
            $(".zm-classConfirm-confirm").css({"display": "none"});
        })
        e.on("click", ".classAdd", function (event) {
            var type, tr = /^zm-edit-class(One)|(Two)|(Three)\d$/i, arr = [], arr1, _this = this, a;
            $(_this).parent("div[class^='zm-edit']").after($(this).parent("div[class^='zm-edit']").clone("true"));
            var i;
            i = $(this).closest("div[class^='zm-edit-class']").parent("div[class^='zm-edit-class']");
            i = i.children("div[class^='zm-edit-class']");
            classSort(i);
        })
        e.on("click", ".classDel", classDel);
        function classDel() {
            var i;
            i = $(this).closest("div[class^='zm-edit-class']").parent("div[class^='zm-edit-class']");
            i[0].removeChild($(this).closest("div[class^='zm-edit-class']")[0]);
            i = i.children("div[class^='zm-edit-class']");
            classSort(i);
        }

        function classSort(i) {
            var s, c = /(One|Two|Three|Four|Five|Six|Seven|Eight|Nine)[\d]/, d, a;
            i.each(function (index, element) {
                a = element.classList.item(0);
                $(this).removeClass("" + a).removeClass("clearfix");
                var g = a.replace(c, function (match) {
                    var p = match.replace(/[\d]/, '') + (index + 1);
                    return p;
                });
                $(element).addClass(g).addClass("clearfix");
            })
        }

        function addbianji(ele, index) {
            $(ele).append($("<input type='text' placeholder='请编辑输入内容'>").addClass("classOne1input").val($(is_selected[index]).text() + ""));
            $(ele).append($("<a href='javascript:;' class='classAdd'>添加同级</a> <a href='javascript:;'class='classDel'>删除</a> <a href='javascript:;' class='classLink'>链接</a>"));
        }

        function addbianji_son(ele) {
            $(ele).find("div[class^='zm-edit-class']").append($("<input type='text' placeholder='请编辑输入内容'>").addClass("classOne1input"));
            $(ele).find("div[class^='zm-edit-class']").append($("<a href='javascript:;' class='classAdd'>添加同级</a> <a href='javascript:;'class='classDel'>删除</a> <a href='javascript:;' class='classLink'>链接</a>"));
        }

        function confirmreader() {
            // if(arguments.length)
            var a = $(".zm-edit-class").children("div[class^='zm-edit-class']"), is_select, c, d, e;
            zmEditor.component.nowEdit().find("ul").children("li").remove();
            is_select = zmEditor.component.nowEdit().find("ul");
            a.each(function (index, element) {
                c = $("<li>" + $(element).children("input").val() + "</li>")//生成一级li列表
                c.css("position", "relative");
                c.addClass("zm-edit-classOneli");
                is_select.append(c);//一级列表放入一级ul中
                d = $(element).children("div[class^='zm-edit-classTwo']");//查找二级列表的数量。
                e = $('<ul class="zm-edit-classTwo-ul"></ul>');//生成二级列表的ul
                c.append(e);// 二级ul列表放入一级li列表中
                d.each(function (index, element) {
                    var q, w, t;
                    q = $("<li class='zm-edit-classTwo-ul-li'>" + $(element).children("input").val() + "</li>")//生成二级li列表
                    e.append(q);//二级li列表放入二级ul列表中;
                    t = $('<ul class="zzm-edit-classThree-ul"></ul>'); //生成3级列表的ul
                    q.append(t);//三级列表的ul放入二级列表的li
                    w = $(element).children("div[class^='zm-edit-classThree']");
                    w.each(function (index, element) {
                        var u;
                        u = $("<li class='zzm-edit-classThree-ul-li'>" + $(element).children("input").val() + "</li>");//生成三级列表的Li
                        t.append(u);
                    })
                })
            })
        }
        return e;
    },
    //全屏展示组件 可公用 className为一个对象 默认支持满屏状态下的 纵向满屏和横向满屏。 需传入className.crossORvertical=="cross"表示需要横向满屏或"vertical“ 表示需要纵向满屏。
    // 默认只支持iSelected-》zm-component-main一层元素响应，若要多级响应，看说明自行传入回调函数。
    // 横向回调函数为 满屏状态下为className.fullscreenTure 。 不满屏状态下为className.fullscreenFlase 纵向对应为 verticalfullscreenTrue 和verticalfullscreenFlase
    //bannerController函数中在wresize函数中满屏状态下浏览器变化时响应式浏览器大小。 默认只响应iSelected-》zm-component-main一层响应浏览器，若要子集或是后代元素响应浏览器变化可自行传入回调函数className.wresizeCallback->fn.自行设置你想要响应的代码元素。
    //自定义bannerController组件名，通过传入className.stringwORh 可自定义设置组件名
    bannerController: function (iSelected, className) {//ye
        var stringwORh;
        if (iSelected) {} else {iSelected = zmEditor.component.nowEdit();}//初始化iSelecte的宽高颜色。}
        stringwORh = /cross/.test(iSelected[0].classList[4]) ? "满屏宽度" : "满屏长度";
        if(className.stringwORh){stringwORh=className.stringwORh} // 兼容自定义输入满屏组件名
        var e = $('<div class="zm-edit-text-bannerController">' +
            '<div class="zm-edit-text-bannerController-Onediv"">' +
            '<span class="zm-edit-text-bannerController-all">' + stringwORh + '</span> ' +
            '<label class="zm-switch-box"><span class="zm-switch" style="border-color: #ccc"><span class="fa fa-minus"></span></span></label>' +  //fa-minus  fa-window-minimize
            '</div>' +
            '</div>'), l, k, c = true, a, b, d, f, g, y, p, m,r, iSel_ul_li_w,iSelectedOrChildrenOrFind=iSelected,positionXandY;
        if(typeof className=="object"){ //只支持一类元素或者一个选择器元素
            if(className.ChildrenName){
                for(var ChildrenNameA=0;a<className.ChildrenName.length;ChildrenNameA++){
                    iSelectedOrChildrenOrFind=iSelectedChildrenOrFind.children(className.ChildrenName[ChildrenNameA])
                }
            }
            if(className.goal){
                iSelectedOrChildrenOrFind=iSelectedChildrenOrFind.find(className.goal)
            }
        }
        if(iSelected.closest(".zm-component-box1").attr("data-zm-component-type")=="img"){  //兼容图片组件代码
            l = iSelected.children(".mCS_img_loaded").css("width");
            k = iSelected.children(".mCS_img_loaded").css("height");
            iSelected.children(".mCS_img_loaded").remove();
            iSelected.css({"width": l + "", "height": k + ""});
        }
        if(iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")=="true"||iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen")=="true"){
            e.find(".zm-switch-box").addClass("zm-switch-box-on");
            e.find(".zm-switch-box").find(".fa").removeClass("fa-minus").addClass("fa-check");
        }else{
            e.find(".zm-switch-box").removeClass("zm-switch-box-on");
            e.find(".zm-switch-box").find(".fa").removeClass("fa-check").addClass("fa-minus");
            if(iSelected.closest(".zm-component-box1").attr("data-zm-component-type")=="nav"){ // nav专有代码
                /cross/.test(iSelected[0].classList[4])?iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen","false"): iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen","false");
            }else{  //兼容nav以外代码需要给className传入一个为crossORvertical 属性值的字符串表示纵向全屏还是横向全屏。 className.crossORvertical=="cross",表示纵向，className.crossORvertical=="vertical",表示横向。
                className.crossORvertical=="cross"?iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen","false"):iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen","false");
            }
        }
        if (/cross/.test(iSelected[0].classList[4]) || (className.crossORvertical=="cross"&&(iSelected.closest(".zm-component-box1").attr("data-zm-component-type") == ("banner" || "btn" || "text" || "tab" || "carousel" || "news" || "shape" || "product" || "img" || "map" || "container" || "forum" || "page" || "function" || "blog" || "audio" || "video")))) {
            e.children(".zm-edit-text-bannerController-Onediv:eq(0)").children("label").on("click", function (event) {
                console.log(typeof (iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")));
                console.log((iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen"))=="false");
                // event.stopPropagation();
                if(iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")=="false"){
                    $(this).find(".zm-switch").css("border-color", "#4ab1a7");
                    // $(this).find(".fa").removeClass("fa-minus").addClass("fa-check")  //切换圆圈样式  由zmglobal.js doucment 绑定触发事件类名替换。
                    a = iSelected.css("width");//记录
                    // g = iSelected.closest(".zm-row-full");
                    g = iSelected.closest(".zm-all");
                    // b = iSelected.closest(".zm-row-full").css("width");
                    b = iSelected.closest(".zm-all").css("width");
                    f = iSelected.closest(".zm-row").offset().left;
                    // m_r = iSelected.children("ul").children("li").css("marginRight");
                    // iSel_ul_li_w = iSelected.children("ul").children("li").css("width");
                    iSel_ul_li_w = iSelectedOrChildrenOrFind.css("width");
                    // iSel_ul_li_mr = iSelected.children("ul").children("li").css("marginRight");
                    iSelected.attr("data-type-NoFullMian",a+"");
                    iSelected.attr("data-type-FullMian",b+"");
                    d = iSelected.closest(".zm-component-nowEdit").css("left");//获取当前正在编辑元素的顶级编辑元素位置；
                    y = iSelected.closest(".zm-component-nowEdit").css("top");//获取当前正在编辑元素的顶级编辑元素位置；
                    iSelected.attr("data-type-Position",d+"-"+y); //记录位置
                    iSelected.closest(".zm-component-nowEdit").css("width", b + ""); //设置级编辑元素宽度

                    iSelectedOrChildrenOrFind.css({"width": b +""});
                    iSelected.closest(".zm-component-nowEdit").attr({"data-fullScreen": "true"});
                    e.children(".zm-edit-text-bannerController-Onediv:eq(2)").children("input").attr("disabled", "disabled");
                    iSelected.closest(".zm-row").find(".zm-component-resize").find("span:eq(0),span:eq(2),span:eq(3),span:eq(4),span:eq(6),span:eq(7),span:eq(8)").hide();
                    iSelected.closest(".zm-component-nowEdit").css({"left": -f - 3.5 + "px"});//, "top": "0px"

                    if(className.fullscreenTure){className.fullscreenTure()}
                } else {
                    $(this).find(".zm-switch").css("border-color", "#ccc");
                    // $(this).find(".fa").removeClass("fa-check").addClass("fa-minus")  //切换圆圈样式
                    iSelected.closest(".zm-component-nowEdit").css("width", "");
                    iSelectedOrChildrenOrFind.css("width", iSelected.attr("data-type-NoFullMian"));
                    r = iSelected.closest(".zm-component-nowEdit").css("top");
                    positionXandY=iSelected.attr("data-type-Position");
                    p=positionXandY.indexOf("-");
                    iSelected.attr("data-type-Position",positionXandY.substring(0,p)+"-"+r);
                    iSelected.closest(".zm-component-nowEdit").attr({"data-fullScreen": "false"});
                    iSelected.closest(".zm-component-nowEdit").css({"left":  positionXandY.substring(0,p), "top":  r});
                    e.children(".zm-edit-text-bannerController-Onediv:eq(2)").children("input").removeAttr("disabled");
                    iSelected.closest(".zm-row").find(".zm-component-resize").find("span:eq(0),span:eq(2),span:eq(3),span:eq(4),span:eq(6),span:eq(7),span:eq(8)").show();
                    if(className.fullscreenFlase){className.fullscreenFlase()}
                }
                // c = !c;
            });
            function wresize(w,wresizeCallback) {
                $(window).on("resize" + className.className + "", function (w, f) {
                    var m;
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        f = iSelected.closest(".zm-row").offset().left;
                        m = iSelected.attr("data-type-Position").replace(/\w+-$/,"");
                        iSelected.closest(".zm-component-nowEdit").css({"left": -f - 3.5 + "px", "top": m});
                        // w = iSelected.closest(".zm-row-full").css("width");
                        w = iSelected.closest(".zm-all").css("width");
                    } else {
                        // w = iSelected.closest(".zm-row-full").find(".zm-component-main").css("width");
                        w = iSelected.closest(".zm-all").find(".zm-component-main").css("width");
                    }
                    iSelected.attr("data-type-FullMian",w+"");
                    iSelected.css("width", w + "");
                    iSelected.closest(".zm-component-nowEdit").css("width", w + "");
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-zm-component-type") == "nav") {
                        var a = iSelected.children("ul").children("li"), c = iSelected.children("ul").children("span"), m = c.css("width");
                        b = (parseInt(w) - c.length * parseInt(m)) / a.length;
                        a.each(function (index, element) {
                            $(this).css("width", b - 1 + "px");
                            $(this).css("box-sizing", "border-box");
                        });
                    } else {
                        iSelected.css("width", w + "");
                    }
                    if(wresizeCallback){wresizeCallback()};
                });
            }
            wresize(null,className.wresizeCallback);
        }
        if (/vertical/.test(iSelected[0].classList[4])|| (className.crossORvertical=="vertical"&&(iSelected.closest(".zm-component-box1").attr("data-zm-component-type") == ("banner" || "btn" || "text" || "tab" || "carousel" || "news" || "shape" || "product" || "img" || "map" || "container" || "forum" || "page" || "function" || "blog" || "audio" || "video")))) {
            e.children(".zm-edit-text-bannerController-Onediv:eq(0)").children("label").on("click", function () {
                if(iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen")=="false"){
                    var h,iSel_ul_li_br,hNo;
                    iSelected.closest(".zm-component-nowEdit").attr({"data-vertical-fullScreen": "true"});
                    h = $("html").height();
                    hNo=iSelected.css("height");
                    iSel_ul_li_br = iSelected.closest(".zm-component-box1").position().top+"px";
                    iSelected.attr("data-type-NoFullMian",hNo);
                    iSelected.attr("data-type-FullMian",h);
                    iSelected.attr("data-type-Position","null-"+iSel_ul_li_br); //记录位置
                    iSelected.closest(".zm-component-box1").css("top", "0px");
                    iSelected.css("height", h);
                    if(className.verticalfullscreenTrue){className.verticalfullscreenTrue()}
                } else {
                    iSelected.closest(".zm-component-nowEdit").attr({"data-vertical-fullScreen": "false"});
                    iSelected.css("height",iSelected.attr("data-type-NoFullMian"));
                    iSelected.closest(".zm-component-box1").css("top",iSelected.attr("data-type-Position").replace(/null-/,""));
                    if(className.verticalfullscreenFlase){className.verticalfullscreenFlase()}
                }
            });
        }
        return e;
    },
    //全屏展示组件
    nav_hover_or_click: function (obj, str) {//ye添加  有改版
           $('<div class="zm-edit-text-nav_hover_or_click-Onediv" style="position: relative;height: 70px;padding-top: 20px;">' +
            '<span class="zm-edit-text-nav_hover_or_click-all">悬停弹出设置</span> ' +
            '<label class="zm-switch-box" style="float: right;margin-right: 60px"><span class="zm-switch"><span class="fa fa-check "></span></span></label>' +
            '<label class="zm-edit-text-nav_hover_or_click_zhengai"></label>' +
            '</div>' +
            '<div class="zm-edit-text-nav_hover_or_click-Onediv" style="position: relative;height: 70px;padding-top: 20px;">' +
            '<span class="zm-edit-text-nav_hover_or_click-all">点击弹出设置</span> ' +
            '<label class="zm-switch-box" style="float: right;margin-right: 60px"><span class="zm-switch"><span class="fa fa-check "></span></span></label>' +
            '<label class="zm-edit-text-nav_hover_or_click_zhengai"></label>' +
            '</div>');
        var e=$('<div style="position: relative">' +
            '<span style="position: absolute; top: 10px; left: 10px;"> 菜单弹出 <br> 方式:</span>'
            +'<div style=" position: absolute; top: 20px;left: 90px;">'
            +'<b style="width: 18px;height: 18px; border-radius: 50%;border: 2px solid #7a7a7a;display: inline-block;position: relative;top: 3px;"><i style="width: 8px;height: 8px; border-radius: 50%;border: 1px solid #7a7a7a;position: absolute;top: 3px;left: 3px;"></i></b> ' +
            '<span>点击弹出</span>'
            + '</div>'
            + '<div style=" position: absolute; top: 20px;left: 190px;">'
            + '<b style="width: 18px;height: 18px; border-radius: 50%;border: 2px solid #7a7a7a;display: inline-block;position: relative;top: 3px;"><i style="width: 8px;height: 8px; border-radius: 50%;border: 1px solid #7a7a7a;position: absolute;top: 3px;left: 3px;"></i></b>' +  //background-color: #1ab5b3
            ' <span>悬停弹出</span>'
            + '</div>'
            + '</div>'
            ), a = false, b = false, iSelected,c,d;
        if (obj) {iSelected = $(obj);} else {iSelected = zmEditor.component.nowEdit();}
        if(str){ iSelected=iSelected.find(str.goal) }
        d=e.children("div>div:eq(0)").children("b");c=e.children("div>div:eq(1)").children("b");
        is_a = iSelected[0].classList[4], f = "data-" + iSelected.attr("data-" + is_a);
        iSelected.attr("data-zm-event-clickOrhoverView")=="hover"?(d.children("i").css("background-color","#fff"),c.children("i").css("background-color","#1ab5b3")):(d.children("i").css("background-color","#1ab5b3"),c.children("i").css("background-color","#fff"));// 根据hover参数状态显示悬停还是点击
        // /hover_or_click_show_string_hover/.test(zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"])?(d.children("i").css("background-color","#fff"),c.children("i").css("background-color","#1ab5b3")):(d.children("i").css("background-color","#1ab5b3"),c.children("i").css("background-color","#fff"));// 根据hover_or_click_show_string_hover参数状态显示悬停还是点击
        d.on("click",function () {
            b = !b;
            if(b){
                li_click(iSelected);
                a = false;
                $(this).children("i").css("background-color","#1ab5b3");
                c.children("i").css("background-color","#fff");
            }else{
                li_hover(iSelected);
                a = true;
                $(this).children("i").css("background-color","#fff");
                c.children("i").css("background-color","#1ab5b3");
            }
        })
        c.on("click",function () {
            console.log(111);
            a = !a;
            if(a){
                li_hover(iSelected);
                $(this).children("i").css("background-color","#1ab5b3");
                d.children("i").css("background-color","#fff");
                b = false;
            }else{
                li_click(iSelected);
                $(this).children("i").css("background-color","#fff");
                d.children("i").css("background-color","#1ab5b3");
                b = true;
            }
        })
        function li_hover(iSelected) {
            iSelected.attr("data-zm-event-clickOrhoverView","hover");
            // debugger;
            // zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"] = ".hover_or_click_show_string_hover";
            // zmEditor.globalMethod.nav.global_Threehover_or_click(iSelected, zmEditor.globalMethod.nav.hover_or_click_show(".hover_or_click_show_string_hover"));
            // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
            zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(iSelected.attr("data-zm-event-clickOrhoverView")));//从新渲染nav
        }
        function li_click(iSelected) {
            iSelected.attr("data-zm-event-clickOrhoverView","cilck");
            // zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"] = ".hover_or_click_show_string_cilck";
            // zmEditor.globalMethod.nav.global_Threehover_or_click(iSelected, zmEditor.globalMethod.nav.hover_or_click_show(".hover_or_click_show_string_cilck"));
            // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
            zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(iSelected.attr("data-zm-event-clickOrhoverView")));//从新渲染nav
        }
        return e;
    },
    borderWidth: function (obj, str) {
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        if(str.goal){
            obj=iSelected.find(str.goal);}
        var e = zmEditor.globalMethod.initialize_slider_html_callback("边框宽度");   //initialize_slider_html_callback

        var e = zmEditor.component.setItems.slider(obj,str);

        // e.zmSlider({type: "borderWidth", minSize: 0, maxSize: 100, goal: obj});
        return e;
    },
    //文字效果
    fontEffect: function () {
        var e = $('<div class="zm-edit-text-effectBox">'
            + '<span class="zm-edit-text-title">文字效果</span><br>'
            + '<div class="zm-edit-text-effect">'
            + '<span style="text-shadow:none" class="clickBackgroundColor">A</span>'
            + '<span style="text-shadow: 0 0 0.5em #000">A</span>'
            + '<span style="text-shadow:-0.15em -0.15em 0.1em #b8b8b8">B</span>'
            + '<span style="text-shadow:-0.15em 0.15em 0.1em #b8b8b8">C</span>'
            + '<span style="text-shadow: 0.15em -0.15em 0.1em #b8b8b8">D</span>'
            + '<span style="text-shadow: 0.15em 0.15em 0.1em #b8b8b8">E</span>'
            + '<span style="text-shadow:-0.15em -0.15em #bbb">F</span>'
            + '<span style="text-shadow:-0.15em 0.15em #bbb">G</span>'
            + '<span style="text-shadow:0.15em -0.15em #bbb">H</span>'
            + '<span style="text-shadow:0.15em 0.15em #bbb">I</span>'
            + '</div>'
            + '</div>');
        e.find(".zm-edit-text-effect span").on("click", function () {
            var _this = $(this);
            _this.addClass("clickBackgroundColor").siblings().removeClass("clickBackgroundColor");
            var effect = $(this).css("textShadow");
            var text = zmEditor.component.nowEdit();
            text.css("textShadow", effect);
        })
        return e;
    },
    background_opacity: function (iSelected, str) { //ye
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-opacity">'
            + '<span class="zm-edit-text-title">透明度</span><br>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');

        if (iSelected) {
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        if(str.goal){
            iSelected=iSelected.find(str.goal);
        }
        e.zmSlider({type: "background_opacity", minSize: 0, maxSize: 100});
        return e;
    },
    borderWidth_nav: function (obj) {
        var strings="边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback(strings);
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "borderWidth_nav", minSize: 0, maxSize: 5, goal: iSelected});
        e.zmSlider({goal: obj, type: "borderWidth_nav", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    borderSetting: function (obj, str) {
        var e = $('<div class="zm-edit-slider borderSettingSlider" style="margin-right: 5px;">'
            + '<span class="zm-edit-text-title" style="width:60px;vertical-align: middle;">'
            + '<i style="display:inline-block;font-size: 12px;width: 60px;text-align: center;">(像素)</i>'
            + '<br><i style="text-align: left">边框宽度</i></span>'
            + '<span class="zm-edit-slider-parent" style="width:130px;margin-left: 15px;" >'
            + '<span class="zm-edit-slider-child" style="width:14px;"></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">px'
            + '</div>');
        var iSelected = obj, maxNum = 10;
        switch (str) {
            case 'img':
                maxNum = 15;
                e.find('.zm-edit-slider-parent').css('width', '140px');
                break;
            default:
                break;
        }
        e.zmSlider({type: "borderSetting", minSize: 0, maxSize: maxNum, goal: iSelected});
        return e;
    },
    //边框样式组件 可公用
    borderStyle: function (obj, str) { // ye
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback(), a = 3;
        ele.find(".zm-edit-border-style").on("click", function (e) {
            console.log(e.target);
            ele.find(".zm-edit-border-styleclone").show();
        });
        ele.find("i").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseleave", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "none"});
        });
        ele.find(".zm-edit-border-styleclone").on("mouseleave", function () {
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style").css({"min-height": "30px", "box-shadow": "none"});
            ele.find(".zm-edit-border-style span").hide();
            $(ele.find(".zm-edit-border-style span")[a]).show();
        });
        ele.find(".zm-edit-border-styleclone span").hover(function () {
            $(this).css("background-color", "#eee");
        }, function () {
            $(this).css("background-color", "#fff");
        })
        ele.find(".zm-edit-border-styleclone span").on("click", function (e) {
            e.stopPropagation();
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style .zm-edit-border-style span").hide();
            a = $(this).index() - 1;
            var borderStyle = $(this).children("i").css("borderStyle");
            if(str.goal){
                obj=obj.find(str.goal);
            }
            obj.css("borderStyle", borderStyle);
        });
        return ele;
    },
    //边框样式组件
    //导航多层级组件
    mian_children_childrenLi_bw: function (obj) {//设置所有一级mian盒子下的子元素的子元素的边框宽度
        var strings="边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("边框宽度");
        var iSelected;
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_bw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_hover_bw: function (obj, str) {//设置所有一级mian盒子下的子元素的子元素的边框宽度
        var strings="光标停留边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留边框宽度");
        var iSelected;
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_bw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    main_children_childrenLi_border_style: function (obj, str) {
        //ye 设置main_child_childall_border_style下每个元素的边框线点样式.  main_children_childrenLi_border_style
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback();
        if (obj) {
            iSelected = obj;
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback(), a = 3;
        ele.find(".zm-edit-border-style").on("click", function (e) {
            console.log(e.target);
            ele.find(".zm-edit-border-styleclone").show();
        });
        ele.find("i").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseleave", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "none"});
        });
        ele.find(".zm-edit-border-styleclone").on("mouseleave", function () {

            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style").css({"min-height": "30px", "box-shadow": "none"});
            ele.find(".zm-edit-border-style span").hide();
            $(ele.find(".zm-edit-border-style span")[a]).show();
        });
        ele.find(".zm-edit-border-styleclone span").hover(function () {
            $(this).css("background-color", "#eee");
        }, function () {
            $(this).css("background-color", "#fff");
        })
        ele.find(".zm-edit-border-styleclone span").on("click", function (e) {
            e.stopPropagation();
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style .zm-edit-border-style span").hide();
            a = $(this).index() - 1;
            var borderStyle = $(this).children("i").css("borderStyle");

            iSelected.children().children("li").css("borderStyle", borderStyle);
            //数据
            var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
            iSelected.children().children("li").css("borderStyle", borderStyle);
            zmEditor.globalMethod.nav.data.arrLike[data_a].li.sStyle["borderStyle"] = borderStyle;
            console.log(zmEditor.globalMethod.nav.data.arrLike[data_a].li.sStyle["borderStyle"]);
        });
        return ele;
    },
    mian_children_childrenSpan_height: function (obj, str) {//ye添加针对一级列表之间的上间距通过span_height对应横线间隔粗细.
        var e = zmEditor.globalMethod.initialize_slider_html_callback("行间距");//对应纵向间隔
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({ goal: obj,type: "mian_children_childrenSpan_height",style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    mian_Children_ChildrenSpan_width: function (obj, str) {//ye添加针对一级列表之间的上间距通过span_width对应横线间隔粗细.
        var strings="间隔线宽度",e = zmEditor.globalMethod.initialize_slider_html_callback(strings);//对应横向间隔
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }

        e.zmSlider({goal: obj, type: "mian_Children_ChildrenSpan_width", title: strings, style:"noTab_color", minSize: 0, maxSize: 80});
        return e;
    },
    mian_children_childrenLi_btw: function (obj, str) {//ye添加
        var strings="上边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("上边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_btw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_btw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_hover_btw: function (obj, str) {//ye添加
        var strings="光标停留上边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留上边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_hover_btw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_btw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_bbw: function (obj, str) {//ye添加
        var strings="下边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("下边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_bbw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_bbw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});

        return e;
    },
    mian_children_childrenLi_hover_bbw: function (obj, str) {
        var strings="光标停留下边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留下边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_hover_bbw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_bbw", title: strings, style:"noTab_color", minSize: 0, maxSize: 5});
        return e;
    },


    navNode1Style: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">宽度</span><br>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "navNode1Style", minSize: 80, maxSize: 500, goal: obj});
        return e;
    },
    //导航多层级组件
    /* 选项卡方法 */
    channelTab:function (ele,obj) {
        return zmEditor.component.tab.method.channelTab(ele,obj);
    }, //频道开关 ok
    channelLink: function (ele) {
        return zmEditor.component.tab.method.channelLink(ele);
    }, //频道链接 ok 和弹窗联动模块未完
    tabTopBdCol: function (ele) {
        return zmEditor.component.tab.method.tabTopBdCol(ele);
    },//上门楣 ok
    tabBotBdCol: function (ele) {
        return zmEditor.component.tab.method.tabBotBdCol(ele);
    },//下门楣 ok 开关
    tabTitLink: function (ele) {
        return zmEditor.component.tab.method.tabTitLink(ele);
    },//网址选择 ok 开关
    tabTitAlign:function (ele) {
        return zmEditor.component.tab.method.tabTitAlign(ele);
    },//对齐方式 ok
    tabLabTopBdCol: function (ele) {
        return zmEditor.component.tab.method.tabLabTopBdCol(ele);
    },//上边线 ok 待改正
    tabLabBotBdCol: function (ele) {
        return zmEditor.component.tab.method.tabLabBotBdCol(ele);
    },//下边线 ok 待改正
    /* 结束 */

    /* 产品方法 */
    //单一
    productLayout:function (ele) {
        return zmEditor.component.product.method.productLayout(ele);
    },
    productCartoon: function (ele) {
        return zmEditor.component.product.method.productCartoon(ele);
    },//光标悬浮图像效果 ok
    productChoose: function (ele) {
        return zmEditor.component.product.method.productChoose(ele);
    },//商品选择
    productName: function (ele, obj) {
        return zmEditor.component.product.method.productName(ele,obj);
    },//商品名称
    productRetail: function (ele, obj) {
        return zmEditor.component.product.method.productRetail(ele,obj);
    },//零售价
    productGuide: function (ele, obj) {
        return zmEditor.component.product.method.productGuide(ele,obj)
    },//市场指导价
    productButton: function (ele, obj) {
        return zmEditor.component.product.method.productButton(ele,obj);
    },//按钮
    productText: function (ele) {
        return zmEditor.component.product.method.productText(ele);
    },//文字方向

    /******************** 列表共用方法 ***********************/
    //全屏
    fullScreen: function (ele) {
        var e = $('<div class="zm-components-list-fullScreen">'
            +'<span class="zm-edit-text-title">全屏显示</span>'
            +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            +'</div>'
        );
        var box = ele.closest(".zm-component-nowEdit");
        var type = box.attr("data-fullScreen");
        var btn = e.find(".zm-switch-box");
        if(type == "true"){
            btn.addClass("zm-switch-box-on");
            btn.children().children().removeClass("fa-minus").addClass("fa-check");
        }
        btn.on("click",function(){
            var _type = box.attr("data-fullScreen");
            var _width = parseInt($(window).width());
            var w,l;
            if(_type == "true"){
                w = parseInt(box.attr("data-old-width"));
                l = parseInt(box.attr("data-old-left"));
                ele.css("width",w+"px");
                box.attr("data-fullScreen",false).offset({"left": l});
            }else{
                w = ele.width();
                l = box.offset().left;
                ele.css("width",_width+"px");
                box.attr({"data-fullScreen": true,"data-old-width": w,"data-old-left": l}).offset({"left": 0});
            }
        });
        return e
    },
    //布局样式
    layout: function (ele) {
        var e = $('<div class="zm-components-list-layout">'
            +'<span class="zm-edit-text-title">布局样式</span><br>'
            +'<div class="zm-components-list-wrap">'
            +'<div><span><div class="fa fa-align-left" style="text-align: left"></div></span><label></label></div>'
            +'<div><span><div class="fa fa-align-center" style="text-align: center"></div></span><label></label></div>'
            +'<div><span><div class="fa fa-align-right" style="text-align: right"></div></span><label></label></div>'
            +'<div><span></span><label></label></div>'
            +'</div></div>'
        );
        var label = e.find("label");
        var list = e.find(".zm-components-list-wrap").children();
        var shadow = list.find("span");
        var message = ele.find(".unit-message");
        var wrap = message.children("div");
        if(message.css("display") == "none"){
            label.eq(3).addClass("choice");
            shadow.eq(3).addClass("shadow");
        }else{
            switch(wrap.css("text-align")){
                case "left":
                    label.eq(0).addClass("choice");
                    shadow.eq(0).addClass("shadow");
                    break;
                case "center":
                    label.eq(1).addClass("choice");
                    shadow.eq(1).addClass("shadow");
                    break;
                case "right":
                    label.eq(2).addClass("choice");
                    shadow.eq(2).addClass("shadow");
                    break;
            }
        }

        list.on("click",function(){
            var _index = list.index(this);
            var message = ele.find(".unit-message");
            var wrap = message.children("div");
            label.removeClass("choice");
            shadow.removeClass("shadow");
            message.css("display","block");
            label.eq(_index).addClass("choice");
            shadow.eq(_index).addClass("shadow");
            switch(_index){
                case 0:
                    wrap.css({"justify-content":"flex-start","text-align":"left"});
                    break;
                case 1:
                    wrap.css({"justify-content":"center","text-align":"center"});
                    break;
                case 2:
                    wrap.css({"justify-content":"flex-end","text-align":"right"});
                    break;
                case 3:
                    message.css("display","none");
                    break;
            }
        });
        return e;
    },
    //边框样式
    sideLine: function (ele) {
        var e = $('<div class="zm-components-list-sideLine">'
            +'<span class="zm-edit-text-title">边框样式</span>'
            +'<div class="zm-components-list-wrap">'
            +'<div><span><div></div></span><label></label></div>'
            +'<div><span><a style="display: inline-block;width: 65px;height: 50px;border: 1px solid #000"></a><div></div></span><label style="margin-top: 9px"></label></div>'
            +'<div><span style="border: 1px solid #000"><div></div></span><label></label></div>'
            +'<div><span style="border: 1px solid #000"><div style="border-top: 1px solid #000"></div></span><label></label></div>'
            +'</div></div>'
        );
        var label = e.find("label");
        var list = e.find(".zm-components-list-wrap").children();
        var shadow = list.find("span");
        var b_01 = ele.find(".zm-edit-components-list-unit");
        var b_02 = ele.find(".zm-edit-components-list-unit-image-wrap");
        var x = b_01.hasClass("set_border") ? 1 : 2;
        var y = b_02.hasClass("set_border") ? 1 : 2;
        if(x == 2 && y == 2){
            label.eq(0).addClass("choice");
            shadow.eq(0).addClass("shadow");
        }
        if(x == 2 && y == 1){
            label.eq(1).addClass("choice");
            shadow.eq(1).addClass("shadow");
        }
        if(x == 1 && y == 2){
            label.eq(2).addClass("choice");
            shadow.eq(2).addClass("shadow");
        }
        if(x == 1 && y == 1){
            label.eq(3).addClass("choice");
            shadow.eq(3).addClass("shadow");
        }
        list.on("click",function(){
            var _index = list.index(this);
            var border01 = ele.find(".zm-edit-components-list-unit");
            var border02 = ele.find(".zm-edit-components-list-unit-image-wrap");
            border01.removeClass("set_border");
            border02.removeClass("set_border");
            switch (_index){
                case 0:
                    break;
                case 1:
                    border02.addClass("set_border");
                    break;
                case 2:
                    border01.addClass("set_border");
                    break;
                case 3:
                    border01.addClass("set_border");
                    border02.addClass("set_border");
                    break;
            }
            label.removeClass("choice");
            label.eq(_index).addClass("choice");
            shadow.removeClass("shadow");
            shadow.eq(_index).addClass("shadow");
        });
        return e;
    },
    //图像比例
    aspectRatio: function (ele,obj) {
        var e = $('<div class="zm-components-aspectRatio">'
            +'<span class="zm-edit-text-title">图片显示比例</span>'
            +'<span class="zm-components-aspectRatio-wrap">'
            +'<div><label></label><span>原始比例</span></div>'
            +'<div><label></label><span>自适应</span></div>'
            +'</span></div>'
        );
        var label = e.find("label");
        var el = ele.find("img").parent();
        if(el.attr("data-type-ratio") == "original"){
            label.eq(0).addClass("choice");
        }else{
            label.eq(1).addClass("choice");
        }
        label.on("click",function(){
            var _this = $(this);
            var _index = label.index(this);
            var wrap = ele.find(obj.goal);
            var layer = wrap.children();
            label.removeClass("choice");
            _this.addClass("choice");
            switch(_index){
                case 0:
                    $('<img>').attr("src",wrap.find("img").attr("src")).load(function(){
                        var realWidth = this.width;
                        var realHeight = this.height;
                        var w = wrap.width();
                        var h = wrap.height();
                        var imgW,imgH;
                        var realRatio = realWidth/realHeight;
                        var actualRatio = w/h;
                        var s,f;
                        if(actualRatio > realRatio){
                            imgH = "100%";
                            f = h*realRatio;
                            imgW = (f/w)*100+"%";
                        }else{
                            imgW = "100%";
                            s = w/realRatio;
                            imgH = (s/h)*100+"%";
                        }
                        layer.css({"width":imgW,"height":imgH});
                        layer.attr("data-type-ratio","original");
                    });
                    break;
                case 1:
                    layer.css({"width":"100%","height":"100%"});
                    layer.attr("data-type-ratio","adaptive");
                    break;
            }
        });
        return e;
    },
    //悬浮效果
    suspensionEffect: function (ele) {
        var e = $('<div class="zm-components-suspensionEffect">'
            +'<span class="zm-edit-text-title">光标悬浮图像效果</span>'
            +'<div class="zm-components-suspensionEffect-wrap">'
            +'<span><label></label><span>放大</span></span>'
            +'<span><label></label><span>左移</span></span>'
            +'<span><label></label><span>上移</span></span>'
            +'<span><label></label><span>虚化</span></span>'
            +'</div></div>'
        );
        var label = e.find("label");
        var el = ele.find("img");
        if(el.hasClass("suspension-magnify")){
            label.eq(0).addClass("choice");
        }
        if(el.hasClass("suspension-shiftLeft")){
            label.eq(1).addClass("choice");
        }
        if(el.hasClass("suspension-shiftTop")){
            label.eq(2).addClass("choice");
        }
        if(el.hasClass("suspension-emptiness")){
            label.eq(3).addClass("choice");
        }

        label.on("click",function(){
            var _this = $(this);
            var _index = label.index(_this);
            var img = ele.find("img");
            img.removeClass();
            switch(_index){
                case 0 :
                    img.addClass("suspension-magnify");
                    break;
                case 1 :
                    img.addClass("suspension-shiftLeft");
                    break;
                case 2 :
                    img.addClass("suspension-shiftTop");
                    break;
                case 3 :
                    img.addClass("suspension-emptiness");
                    break;
                default:
                    console.log("这是个意外");
                    break;
            }
            label.removeClass("choice");
            _this.addClass("choice");
        });
        return e;
    },
    //加载更多按钮
    loadMore:function(ele){
        var e = $('<div class="zm-components-loadMore">'
            +'<div><label><i class="fa fa-check"></i></label><span>按钮</span><input type="text"/></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div class="zm-components-loadMore-shadow"></div>'
            +'</div>'
        );
        var label = e.find("label");
        var icon = label.children("i");
        var input = e.find("input");
        var shadow = e.find(".zm-components-loadMore-shadow");
        var button = ele.children();
        var font = zmEditor.component.setItems.strings.fontStyle(button,{style: "mini",param: "color"});
        var bc = zmEditor.component.setItems.slider(button,{title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"});
        var hbc = zmEditor.component.setItems.slider(button,{title: "悬停颜色",style: "noTab_color",isColor: true,param: "hoverBackgroundColor"});
        e.children("div:nth-child(2)").append(font);
        e.children("div:nth-child(3)").append(bc);
        e.children("div:nth-child(4)").append(hbc);
        if(ele.css("display") == "block"){
            icon.addClass("fa-check");
            shadow.css("display","none");
        }else{
            icon.removeClass("fa-check");
            shadow.css("display","block");
        }
        label.on("click",function(){
            if(icon.is(".fa-check")){
                ele.css("display","none");
                shadow.css("display","block");
                icon.removeClass("fa-check");
            }else{
                ele.css("display","block");
                shadow.css("display","none");
                icon.addClass("fa-check");
            }
        });
        input.on("blur",function(){
            var _this = $(this);
            var _val= _this.val();
            if(_val != ""){
                button.text(_val);
            }
        });
        return e;
    },
    //行,列,间距控制
    RankControl:function(ele,obj){
        var e = $('<div class="zm-component-rankControl">'
            +'<div class="rankControl-row"><span>行&nbsp;&nbsp;&nbsp;数&nbsp;:&nbsp;</span><div class="row"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-col"><span>列&nbsp;&nbsp;&nbsp;数&nbsp;:&nbsp;</span><div class="col"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-rowBetween"><span>行间距&nbsp;:&nbsp;</span><div class="rowBetween"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-colBetween"><span>列间距&nbsp;:&nbsp;</span><div class="colBetween"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'</div>');
        var iSelected = zmEditor.component.nowEdit();
        var _rows = ele.find("li").length;
        var _cols = ele.find("li:first-child").children().length;
        var _margin_row = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-bottom"));
        var _margin_col = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-right"));
        var _row_input = e.find(".rankControl-row").find("input");
        var _row_add = e.find(".rankControl-row").find(".add");
        var _row_cut = e.find(".rankControl-row").find(".cut");
        var _col_input = e.find(".rankControl-col").find("input");
        var _col_add = e.find(".rankControl-col").find(".add");
        var _col_cut = e.find(".rankControl-col").find(".cut");
        var _row_between_input = e.find(".rankControl-rowBetween").find("input");
        var _row_between_add = e.find(".rankControl-rowBetween").find(".add");
        var _row_between_cut = e.find(".rankControl-rowBetween").find(".cut");
        var _col_between_input = e.find(".rankControl-colBetween").find("input");
        var _col_between_add = e.find(".rankControl-colBetween").find(".add");
        var _col_between_cut = e.find(".rankControl-colBetween").find(".cut");
        _row_input.val(_rows);
        _col_input.val(_cols);
        _row_between_input.val(_margin_row);
        _col_between_input.val(_margin_col);
        //初始化结束
        var goods = ele.find(".zm-edit-components-list-unit").eq(0);
        //行
        _row_input.on("change",function(){
            var _this = $(this);
            var oldRow = ele.find("li").length;
            var oldCol = ele.find("li").eq(0).children().length;
            var newRow = _this.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(newRow > 12){
                newRow = 12;
            }else if(newRow < 1){
                newRow = 1;
            }
            _this.val(newRow);
            var num = newRow - oldRow;
            if(num > 0){
                for(var i=0;i<num;i++){
                    var li = $('<li class="clearFloat"></li>');
                    for(var j=0;j<oldCol;j++){
                        li.append(goods.clone());
                    }
                    ele.append(li);
                }
            }else if(num < 0){
                for(var i=0;i<Math.abs(num);i++){
                    ele.find("li:last-child").remove();
                }
            }
            iSelected.css("height",h*newRow+57+"px");
            loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
        });
        _row_add.on("click",function() {
            var li = ele.find("li:first-child");
            var input = $(this).closest("div").find("input");
            var _val = input.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(_val < 12){
                input.val(parseInt(input.val())+1);
                ele.append(li.clone());
                iSelected.css("height",h*parseInt(input.val())+57+"px");
                loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
            }
        });
        _row_cut.on("click",function() {
            var input = $(this).closest("div").find("input");
            var _val = input.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(_val > 1){
                input.val(parseInt(input.val())-1);
                ele.find("li:last-child").remove();
                iSelected.css("height",h*parseInt(input.val())+57+"px");
                loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
            }
        });
        //列
        _col_input.on("change",function() {
            var _this = $(this);
            var oldCol = ele.find("li").eq(0).children().length;
            var nowCol = _this.val();
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            if (nowCol > 6) {
                nowCol = 6;
            } else if (nowCol < 1) {
                nowCol = 1;
            }
            _this.val(nowCol);
            var num = nowCol - oldCol;
            var li = ele.find("li");
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    li.append(goods.clone());
                }
            } else {
                for (var i = 0; i < Math.abs(num); i++) {
                    li.find(".zm-edit-components-list-unit:last-child").remove();
                }
            }
            iSelected.css("width",w*nowCol+"px");
            loopAssignment({
                type: obj.type,
                arr: ele.find(".zm-edit-components-list-unit"),
                key: ele.attr("data-type-list")
            });
        });
        _col_add.on("click",function() {
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            var li = ele.find("li");
            if(_val < 6){
                var nowVal = ++_val;
                _input.val(nowVal);
                li.append(goods.clone());
                iSelected.css("width",w*nowVal+"px");
                loopAssignment({
                    type: obj.type,
                    arr: ele.find(".zm-edit-components-list-unit"),
                    key: iSelected.attr("data-type-list")
                });
            }
        });
        _col_cut.on("click",function() {
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            var li = ele.find("li");
            if(_val > 1){
                var nowVal = --_val;
                _input.val(nowVal);
                li.find(".zm-edit-components-list-unit:last-child").remove();
                iSelected.css("width",w*nowVal+"px");
                loopAssignment({
                    type: obj.type,
                    arr: ele.find(".zm-edit-components-list-unit"),
                    key: iSelected.attr("data-type-list")
                });
            }
        });
        //行距
        _row_between_input.on("change",function(){
            var _this = $(this);
            var newVal = _this.val();
            if(newVal > 30){
                newVal = 30;
            }else if(newVal < 0){
                newVal = 0;
            }
            _this.val(newVal);
            ele.find(".zm-edit-components-list-unit").css("margin-bottom",newVal+"px");
        });
        _row_between_add.on("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val < 30){
                var nowVal = ++_val;
                _input.val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-bottom",nowVal+"px");
            }
        });
        _row_between_cut.on("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val > 0){
                var nowVal = --_val;
                _input.val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-bottom",nowVal+"px");
            }
        });
        //列距
        _col_between_input.on("change",function(){
            var _this = $(this);
            var newVal = _this.val();
            if(newVal > 30){
                newVal = 30;
            }else if(newVal < 0){
                newVal = 0;
            }
            _this.val(newVal);
            ele.find(".zm-edit-components-list-unit").css("margin-right",newVal+"px");
        });
        _col_between_add.on("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val < 30){
                var nowVal = ++_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-right",nowVal+"px");
            }
        });
        _col_between_cut.on("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val > 0){
                var nowVal = --_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-right",nowVal+"px");
            }
        });
        return e;
    },
    /***********************************************************/
    PLImgScale: function (ele) {
        return zmEditor.component.product.method.PLImgScale(ele);
    },//图片框比例
    PLRanks: function (ele) {
        return zmEditor.component.product.method.PLRanks(ele);
    },//行列控制
    PLButton:function (ele) {
        return zmEditor.component.product.method.PLButton(ele);
    },//加载更过按钮
    PLExhibit:function (ele) {
        return zmEditor.component.product.method.PLExhibit(ele);
    },//展示内容选择
    PLPList:function (ele) {
        return zmEditor.component.product.method.PLPList(ele);
    },//产品展示
    PLSort:function (ele) {
        return zmEditor.component.product.method.PLSort(ele);
    },//产品排序
    PLPName:function (ele,obj) {
        return zmEditor.component.product.method.PLPName(ele,obj);
    },
    PLPRetail:function (ele,obj) {
        return zmEditor.component.product.method.PLPRetail(ele,obj);
    },
    PLPGuide:function (ele,obj) {
        return zmEditor.component.product.method.PLPGuide(ele,obj);
    },
    /* 结束 */
    //video module functions area  start  -- by gui
    video_cutStyle: function (ele) {
        return zmEditor.component.video.videoCutStyle(ele)
    },
    video_HLnumber: function (ele) {
        return zmEditor.component.video.videoHLnumber(ele)
    },
    video_addVideo: function (ele) {
        return zmEditor.component.video.videoAddVideo(ele)
    },
    video_Contenttitle: function (ele,obj) {
        return zmEditor.component.video.videoContenttitle(ele,obj)
    },
    video_Contentintroduct: function (ele,obj) {
        return zmEditor.component.video.videoContentintroduct(ele,obj)
    },
    video_content: function (ele,obj) {
        return zmEditor.component.video.videoContent(ele,obj)
    },
    video_displayStyle: function (ele) {
        return zmEditor.component.video.displayStyle(ele)
    },
    video_titledisplayStyle: function (ele) {
        return zmEditor.component.video.titledisplayStyle(ele)
    },
    video_introducdisplayStyle: function (ele) {
        return zmEditor.component.video.introducdisplayStyle(ele)
    },
    video_commentdisplayStyle: function (ele) {
        return zmEditor.component.video.commentdisplayStyle(ele)
    },
    video_playBtncontent: function (ele) {
        return zmEditor.component.video.videoplayBtncontent(ele)
    },
    video_playBtnStyle: function (ele) {
        return zmEditor.component.video.videoplayBtnStyle(ele)
    },
    //video module functions area  end  -- by gui

    //carousel module functions area  start  -- by oldZhang
    carousel_fullScreen:function(ele){
     return zmEditor.component.carousel.carouselFullScreen(ele)
    },//设置是否全屏滚动 done 2017-3-23 09:42:03
    carousel_cutPage:function(ele){
    return zmEditor.component.carousel.carouselCutPage(ele)
    },//设置是否自动轮播，光标停顿，图片展现时长 done 2017-3-15 14:05:08
    carousel_cutStyle:function(ele){
     return zmEditor.component.carousel.carouselCutStyle(ele)
    },//设置展现方式 done 2017-3-15 19:08:14
    carousel_cutArrow:function(ele){
    return zmEditor.component.carousel.carouselCutArrow(ele)
    },//设置翻页箭头功能模块 done 2017-3-17 15:05:39
    carousel_isPageNum:function(ele){
    return zmEditor.component.carousel.carouselIsPageNum(ele)
    },//设置是否显示页码功能 done 2017-3-17 20:03:25
    carousel_pageNumStyle:function(ele){
    return zmEditor.component.carousel.carouselPageNumStyle(ele)
    },//点击设置页码类型, done 2017-3-20 16:05:23
    carousel_pageNumAlign:function(ele){
    return zmEditor.component.carousel.carouselPageNumAlign(ele)
    },//设置页码布局方式  done 2017-3-20 19:15:51
    carousel_imageManage:function(ele){
    return zmEditor.component.carousel.carouselImageManage(ele)
    },//图像-替换、上传、删除图片，图片命名
    carousel_pagePicManage:function(ele){
    return zmEditor.component.carousel.carouselPagePicManage(ele)
    },//轮播图片管理模块
    //carousel module functions area  end  -- by oldZhang
    //img module area start  -- by oldZhang
    img_showImg:function(ele){
      return zmEditor.component.img.imgShowImg(ele)
    },
    img_picScale: function (ele) {
        return zmEditor.component.img.imgPicScale(ele)
    },
    img_borderSet: function (ele) {
        return zmEditor.component.img.imgBorderSet(ele)
    },
    //img module functions area  end  -- by oldZhang
    shape_borderSet:function (ele,flag) {
        return zmEditor.component.shape.shapeBorderSet(ele,flag)
    },
    //shape module functions area end  -- by oldZhang
    //news  module area start -- by oldZhang
    news_newsSetting:function (ele,flag) {
        return zmEditor.component.news.newsHrefSetting(ele,flag)
    },
    news_newsDataSort:function (ele,flag) {
        return zmEditor.component.news.newsDataSort(ele,flag)
    },
    news_newsPicShow:function (ele) {
        return zmEditor.component.news.newsPicShow(ele)
    },
    news_newsPicPosition:function (ele) {
        return zmEditor.component.news.newsPicPosition(ele)
    },
    news_newsPicScale:function (ele,flag) {
        return zmEditor.component.news.newsPicScale(ele,flag)
    },
    news_newsPicHover:function (ele) {
        return zmEditor.component.news.newsPicHover(ele)
    },
    news_newsPicBord:function (ele,flag) {
        return zmEditor.component.news.newsPicBord(ele,flag)
    },
    news_newTitlePoint:function (ele,flag) {
        return zmEditor.component.news.newsTitlePoint(ele,flag)
    },
    news_wordsAlign:function (ele,flag) {
        return zmEditor.component.news.newsWordsAlign(ele,flag)
    },
    news_newsTitleFont:function (ele,flag) {
        return zmEditor.component.news.newsTitleFont(ele,flag)
    },
    news_isShowWords:function (ele,flag) {
        return zmEditor.component.news.newsIsShowWords(ele,flag)
    },
    news_newsWordsFont:function (ele,flag) {
        return zmEditor.component.news.newsWordsFont(ele,flag)
    },
    news_newsShowAnother:function (ele) {
        return zmEditor.component.news.newsShowAnother(ele)
    },
    //news module area end -- by oldZhang
    //function module area start -- by oldZhang
    search_defaultCont:function(ele,flag){
        return zmEditor.component.function.searchMethod.setDefaultContent(ele,flag)
    },
    search_defaultWordsSet:function(ele,flag){
        return zmEditor.component.function.searchMethod.placeholderWordsSet(ele,flag)
    },
    search_searchBtnStyle:function(ele,flag){
        return zmEditor.component.function.searchMethod.searchBtnStyle(ele,flag)
    },
    search_searchResultShow:function(ele){
        return zmEditor.component.function.searchMethod.searchResultShow(ele)
    },
    function_keyToSet:function(ele,flag){
        return zmEditor.component.function.searchMethod.keyToSet(ele,flag)
    },
    function_shoppingCartStyle:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartStyle(ele)
    },
    function_shoppingCartWord:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartWord(ele)
    },
    function_shoppingCartNum:function(ele){
       return zmEditor.component.function.shoppingMethod.shoppingCartNum(ele)
    },
    function_shoppingCartLayOut:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartLayOut(ele)
    },
    function_publicHref:function (ele) {
        return zmEditor.component.function.publicMethod.publicHref(ele)
    },
    file_changeFile:function (ele) {
        return zmEditor.component.function.fileMethod.changeFile(ele)
    },
    file_namedFile:function (ele) {
        return zmEditor.component.function.fileMethod.namedFile(ele)
    },
    share_shareName:function (ele) {
        return zmEditor.component.function.shareMethod.namedShare(ele)
    },
    share_shareBtnSet:function (ele) {
        return zmEditor.component.function.shareMethod.shareBtnSet(ele)
    },
    share_shareOption:function (ele) {
        return zmEditor.component.function.shareMethod.shareOption(ele)
    },
    enter_enterTemplet:function (ele) {
        return zmEditor.component.function.enterMethod.enterTemplet(ele)
    },
    enter_enterLayout:function (ele) {
        return zmEditor.component.function.enterMethod.enterLayout(ele)
    },
    enter_enterIsmember:function (ele) {
        return zmEditor.component.function.enterMethod.enterIsmember(ele)
    },
    enter_enterSubmitWord:function (ele) {
        return zmEditor.component.function.enterMethod.enterSubmitWord(ele)
    },
    option_optionTemplet:function (ele) {
        return zmEditor.component.function.optionMethod.optionTemplet(ele)
    },
    option_optionSubmitSuc:function (ele) {
        return zmEditor.component.function.optionMethod.optionSubmitSuc(ele)
    },
    //function module area end -- by oldZhang
    /******************* Audio start *********************/
    styleSelect:function(ele){
        return zmEditor.component.audio.method.styleSelect(ele);
    },
    choiceAudio:function(ele){
        return zmEditor.component.audio.method.choiceAudio(ele);
    },
    showName:function(ele){
        return zmEditor.component.audio.method.showName(ele);
    },
    importName:function(ele){
        return zmEditor.component.audio.method.importName(ele);
    },
    audioFont:function(ele,obj){
        return zmEditor.component.audio.method.audioFont(ele,obj);
    },
    playMode:function(){
        return zmEditor.component.audio.method.playMode();
    },
    selAlbum:function(ele){
        return zmEditor.component.audio.method.selAlbum(ele);
    },
    albumInfo:function(ele,obj){
        return zmEditor.component.audio.method.albumInfo(ele,obj);
    },
    commentInfo:function(ele,obj){
        return zmEditor.component.audio.method.commentInfo(ele,obj);
    },
    loadInfo:function(ele,obj){
        return zmEditor.component.audio.method.loadInfo(ele,obj);
    },
    showOnOff:function(ele){
        return zmEditor.component.audio.method.showOnOff(ele);
    },
    listFont:function(ele,obj){
        return zmEditor.component.audio.method.listFont(ele,obj);
    },
    albumLayout:function(ele){
        return zmEditor.component.audio.method.albumLayout(ele);
    },
    albumBorSty:function(ele){
        return zmEditor.component.audio.method.albumBorSty(ele);
    },
    albumChoice:function(ele){
        return zmEditor.component.audio.method.albumChoice(ele);
    },
    albumSort:function(ele){
        return zmEditor.component.audio.method.albumSort(ele);
    },
    albumSinger:function(ele,obj){
        return zmEditor.component.audio.method.albumSinger(ele,obj);
    },
    albumName:function(ele,obj){
        return zmEditor.component.audio.method.albumName(ele,obj);
    },
    albumLoad:function(ele,obj){
        return zmEditor.component.audio.method.albumLoad(ele,obj);
    },
    albumTime:function(ele,obj){
        return zmEditor.component.audio.method.albumTime(ele,obj);
    },
};
