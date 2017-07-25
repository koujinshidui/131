/**
 * Created by liuhuan on 2017/3/21.
 */
zmEditor.component.product={
    setting:function (box){
        var nowEdit = zmEditor.component.nowEdit();
        var tabs01 = $('<div></div>');
        var tabs02 = $('<div></div>');
        var tabs03 = $('<div></div>');
        var tabs04 = $('<div></div>');
        var config01_1 = [
            {type: "fullScreen",element: nowEdit},
            {type: "layout",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "sideLine",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "aspectRatio",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {goal: ".zm-edit-components-list-unit-image-wrap"}},
            {type: "suspensionEffect",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "PLImgScale",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "slider",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "边框颜色",style: "noTab_color",isColor: true,param: "borderColor",goal: ".border_on_off"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "边框宽度",style: "noTab_noColor",isColor: false,param: "borderWidth",size: [0,5],goal: ".border_on_off"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-edit-components-list-unit"}},
            {type: "RankControl",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {type: "product"}},
            {type: "loadMore",element: nowEdit.find(".zm-edit-components-list-loadMore")}
        ];
        var config01_2 = [
            {type: "PLExhibit",element: nowEdit},
            {type: "PLPList",element: nowEdit},
            {type: "albumSort",element: nowEdit.find(".zm-edit-components-list-wrap")}
        ];
        var config01_3 = [
            {type:"PLPName",element:nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "商品名称",style: "mini",goal: ".zm-edit-components-list-unit-message-01",param: "color"}},
            {type:"PLPRetail",element:nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "零售价",style: "mini",goal: ".zm-edit-components-list-unit-message-02 span",param: "color"}},
            {type:"PLPGuide",element:nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "市场指导价",style: "mini",goal: ".zm-edit-components-list-unit-message-02 del",param: "color"}},
        ];
        var config01_4 = [
            {type: "boxShadow",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {style: "noTab",goal: ".zm-edit-components-list-unit"}}
        ];
        var config02_1 = [
            {type: "productLayout",element: nowEdit},
            {type: "slider",element: nowEdit,flag: {title: "边线颜色",style: "noTab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit,flag: {title: "边线宽度",style: "noTab_noColor",isColor: false,param: "borderWidth",size: [0,20]}},
            {type: "aspectRatio",element: nowEdit,flag: {goal: ".zm-edit-components-product-image"}},
            {type: "suspensionEffect",element: nowEdit}
        ];
        var config02_2 = [
            {type: "productChoose",element: nowEdit}
        ];
        var config02_3 = [
            {type:"slider",element:nowEdit.find(".zm-edit-components-product-title"),flag:{title: "背景颜色 :",style: "noTab_color",isColor: true,param: "backgroundColor"}},
            {type:"productName",element:nowEdit.find(".zm-edit-components-product-NE"),flag:{title: "商品名称",style: "mini",param: "color",shadow: "zm-edit-components-product-shadow01"}},
            {type:"productRetail",element:nowEdit.find(".zm-edit-components-product-RP"),flag:{title: "零售价",style: "mini",param: "color",shadow: "zm-edit-components-product-shadow01"}},
            {type:"productGuide",element:nowEdit.find(".zm-edit-components-product-MP"),flag:{title: "市场指导价",style: "mini",param: "color",shadow: "zm-edit-components-product-shadow01"}},
            {type:"productButton",element:nowEdit.find(".zm-edit-components-product-BT > span"),flag:{title: "按钮",style: "mini",param: "color",shadow: "zm-edit-components-product-shadow02"}},
            {type:"productText",element:nowEdit.find(".zm-edit-components-product-title")}
        ];
        var config02_4 = [
            {type: "boxShadow",element: nowEdit,flag: {style: "noTab"}},
            //{type: "popup",element: nowEdit,flag: {title: "商品选择",type: "product",multiSelect: "false",h: "auto",cb:openfive}},
        ];
        var items01,items02,items03,items04;
        if(nowEdit.is(".list_product")){
            items01 = zmEditor.component.setItems.config(config01_1);
            items02 = zmEditor.component.setItems.config(config01_2);
            items03 = zmEditor.component.setItems.config(config01_3);
            items04 = zmEditor.component.setItems.config(config01_4);
        }
        if(nowEdit.is(".zm-product-goods")){
            items01 = zmEditor.component.setItems.config(config02_1);
            items02 = zmEditor.component.setItems.config(config02_2);
            items03 = zmEditor.component.setItems.config(config02_3);
            items04 = zmEditor.component.setItems.config(config02_4);
        }
        items01.forEach(function(e){
            tabs01.append(e);
        });
        items02.forEach(function(e){
            tabs02.append(e);
        });
        items03.forEach(function(e){
            tabs03.append(e);
        });
        items04.forEach(function(e){
            tabs04.append(e);
        });
        var tabsList = [{title:"布局",content:tabs01},{title:"商品",content:tabs02},{title:"文字",content:tabs03},{title:"阴影",content:tabs04}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width":"350px","height":"685px"});
        return tabs;
    },
    method:{
        //单一
        productLayout:function(ele){
            var e = $('<div class="zm-edit-components-product-layout">'
                +'<span><div><span class="fa fa-navicon"></span></div><label></label></span>'
                +'<span><div><span class="fa fa-navicon"></span></div><label></label></span>'
                +'<span><div><span class="fa fa-navicon"></span></div><label></label></span>'
                +'<span><div><span class="fa fa-navicon"></span></div><label></label></span>'
                +'<span><div></div><label></label></span>'
                +'</div>'
            );
            var label = e.find("label");
            var list  = e.children();
            var type = ele.css("flex-direction");
            if(ele.find(".zm-edit-components-product-title").css("display") != 'none'){
                switch(type){
                    case "row":
                        label.eq(0).addClass("choice");
                        break;
                    case "row-reverse":
                        label.eq(1).addClass("choice");
                        break;
                    case "column":
                        label.eq(2).addClass("choice");
                        break;
                    case "column-reverse":
                        label.eq(3).addClass("choice");
                        break;
                    default:
                        label.eq(0).addClass("choice");
                        break;
                }
            }else{
                label.eq(4).addClass("choice");
            }
            list.on("click",function(){
                var _index = list.index(this);
                var tit = ele.find(".zm-edit-components-product-title");
                var img = ele.find(".zm-edit-components-product-image");
                tit.css("display","block");
                switch(_index){
                    case 0:
                        ele.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                        ele.css({"flex-direction":"row"});
                        tit.css({"width":"50%","height":"100%"});
                        img.css({"width":"50%","height":"100%"});
                        break;
                    case 1:
                        ele.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                        ele.css({"flex-direction":"row-reverse"});
                        tit.css({"width":"50%","height":"100%"});
                        img.css({"width":"50%","height":"100%"});
                        break;
                    case 2:
                        ele.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                        ele.css({"flex-direction":"column"});
                        tit.css({"width":"100%","height":"50%"});
                        img.css({"width":"100%","height":"50%"});
                        break;
                    case 3:
                        ele.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                        ele.css({"flex-direction":"column-reverse"});
                        tit.css({"width":"100%","height":"50%"});
                        img.css({"width":"100%","height":"50%"});
                        break;
                    case 4:
                        tit.css("display","none");
                        img.css({"width":"100%","height":"100%"});
                        break;
                }
                label.removeClass("choice");
                label.eq(_index).addClass("choice");
            });
            return e;
        },//产品布局
        productCartoon:function(ele){
            var e = $('<div class="zm-edit-components-product-effect">'
                +'<span class="zm-edit-components-product-title">光标悬浮图像效果 :</span>'
                +'<div class="zm-edit-components-product-result">'
                +'<span><label class="choice"></label><span>放大</span></span>'
                +'<span><label></label><span>左移</span></span>'
                +'<span><label></label><span>上移</span></span>'
                +'<span><label></label><span>虚化</span></span>'
                +'</div></div>'
            );
            var label = e.find("label");
            label.on("click",function(){
                var _this = $(this);
                var _index = label.index(_this);
                var img = ele.find("img");
                img.removeClass();
                switch(_index){
                    case 0 :
                        img.addClass("product-magnify");
                        console.log("放大");
                        break;
                    case 1 :
                        img.addClass("product-shiftLeft");
                        console.log("左移");
                        break;
                    case 2 :
                        img.addClass("product-shiftTop");
                        console.log("上移");
                        break;
                    case 3 :
                        img.addClass("product-emptiness");
                        console.log("虚化");
                        break;
                    default:
                        console.log("这是个意外");
                        break;
                }
                label.removeClass("choice");
                _this.addClass("choice");
            });


            return e;
        },//光标悬浮图像效果 ok
        productChoose:function(ele){
            var e = $('<div class="zm-edit-components-product-choose">'
                +'<div class="zm-edit-components-product-preview"><img class="zm-edit-components-product-image"><span class="zm-edit-components-product-remove"><i class="fa fa-trash-o"></i></span><span class="zm-edit-components-product-replace">替换图片</span></div>'
                +'<div class="zm-edit-components-product-chooseType"></div>'
                +'<div class="zm-edit-components-product-setting"><span class="zm-edit-components-product-title">选择商品 :</span><span class="zm-edit-components-product-popup">设置</span><span class="zm-edit-components-product-link"><i class="fa fa-flip-horizontal fa-unlink"></i><span>当前未设置任何链接!</span></span></div>'
                +'</div>');
            var remove = e.find(".zm-edit-components-product-remove");
            var pop = e.find(".zm-edit-components-product-popup");
            var replace = e.find(".zm-edit-components-product-replace");
            var img = e.find(".zm-edit-components-product-image");
            var productSrc = ele.find("img").attr("src");
            var wrap = e.find(".zm-edit-components-product-chooseType");
            var chooseType = zmEditor.component.product.method.PLExhibit(ele);
            wrap.append(chooseType);
            img.attr("src",productSrc);
            remove.on("click",function(){
                var _this = $(this);
                if(_this.is(".active")){
                    img.attr("src",productSrc);
                }
                console.log("不能删除图片");
            });
            pop.on("click",function(){
                var type = ele.attr("data-product-style");
                if(type == "serve"){
                    zmChoiceRadio.choiceService(this);
                }else{
                    zmChoiceRadio.choiceGoods(this);
                }
            });
            replace.on("click",function(){
                zmChoiceRadio.choicePicture({multiple :'',callBack:img_return});
            });
            function img_return(data){
                var url = data[0].fCoverUrl;
                img.attr("src",url);
                ele.find("img").attr("src",url);
            }

            return e;
        },//商品选择 有bug
        productStyle:function(ele,obj){
            var e = $('<div class="zm-edit-components-product-style">'
                +'<div class="zm-edit-components-product-style-title"><label><i class="fa fa-check"></i></label><span></span><input type="text"></div>'
                +'<div class="zm-edit-components-product-style-wrap"></div>'
                +'</div>'
            );
            e.find(".zm-edit-components-product-style-title").find("span").text(obj.title);
            var _wrap = e.find(".zm-edit-components-product-style-wrap");
            var _font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            _wrap.append(_font);
            var shadow = $('<div></div>').addClass(obj.shadow);
            e.append(shadow);
            var label = e.find("label");
            var icon = label.children();
            var type = ele.css("display")
            if(type == 'none'){
                icon.removeClass("fa-check");
                shadow.stop().show();
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.stop().show("500");
                    ele.hide();
                }else{
                    icon.addClass("fa-check");
                    shadow.stop().hide("500");
                    ele.show();
                }
            });
            var input = e.find(".zm-edit-components-product-style-title").find("input");
            input.on("change",function(){
                var _this = $(this);
                if(_this.val() != ""){
                    ele.text(_this.val());
                }
            });

            return e;
        },//公用样式
        productName:function(ele,obj){
            return zmEditor.component.product.method.productStyle(ele,obj);
        },//商品名称
        productRetail:function(ele,obj){
            return zmEditor.component.product.method.productStyle(ele,obj);
        },//零售价
        productGuide:function(ele,obj){
            return zmEditor.component.product.method.productStyle(ele,obj);
        },//市场指导价
        productButton:function(ele,obj){
            var e = zmEditor.component.product.method.productStyle(ele,obj);
            var slider = zmEditor.component.setItems.slider(ele,{title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"});
            slider.css("height","50px");
            e.append(slider);
            e.css("height","135px");
            return e;
        },//按钮
        productText:function(ele){
            var e = $('<div class="zm-edit-components-product-textDirection">'
                +'<div class="zm-edit-components-product-title">文字方向 :</div>'
                +'<div class="zm-edit-components-product-direction"><span class="fa fa-align-left zm-tooltip" data-zm-title="左对齐"></span><span class="fa fa-align-center zm-tooltip" data-zm-title="居中"></span><span class="fa fa-align-right zm-tooltip" data-zm-title="右对齐"></span></div>'
                +'</div>'
            );
            var _btn = e.find(".zm-edit-components-product-direction > span");
            var ne = ele.find(".zm-edit-components-product-NE");
            var rp = ele.find(".zm-edit-components-product-RP");
            var mp = ele.find(".zm-edit-components-product-MP");
            switch(ne.css("text-align")){
                case "left":
                    _btn.eq(0).css({"backgroundColor":"rgb(73,177,166)","color":"rgb(255,255,255)"});
                    break;
                case "center":
                    _btn.eq(1).css({"backgroundColor":"rgb(73,177,166)","color":"rgb(255,255,255)"});
                    break;
                case "right":
                    _btn.eq(2).css({"backgroundColor":"rgb(73,177,166)","color":"rgb(255,255,255)"});
                    break;
                default:
                    _btn.eq(1).css({"backgroundColor":"rgb(73,177,166)","color":"rgb(255,255,255)"});
                    break;
            }
            _btn.on("click",function(){
                var _this = $(this);
                var _index = _btn.index(_this);
                _this.css({"backgroundColor":"rgb(73,177,166)","color":"rgb(255,255,255)"}).siblings().css({"backgroundColor":"rgb(255,255,255)","color":"rgb(153,153,153)"});
                switch(_index){
                    case 0:
                        ne.css("text-align","left");
                        rp.css("text-align","left");
                        mp.css("text-align","left");
                        break;
                    case 1:
                        ne.css("text-align","center");
                        rp.css("text-align","center");
                        mp.css("text-align","center");
                        break;
                    case 2:
                        ne.css("text-align","right");
                        rp.css("text-align","right");
                        mp.css("text-align","right");
                        break;
                }
            });

            return e;
        },//文字方向
        //列表
        PLImgScale:function(ele){
            var e = $('<div class="zm-edit-components-productList-ImgScale">'
                +'<span class="zm-edit-text-title">图片框比例 :</span>'
                +'<span class="zm-edit-components-productList-scale">'
                +'<span>16 : 9</span>'
                +'<span>3 : 2</span>'
                +'<span>4 : 3</span>'
                +'<span>1 : 1</span>'
                +'<span>3 : 4</span>'
                +'<span>2 : 3</span>'
                +'<span>9 : 16</span>'
                +'</span></div>'
            );
            var btn = e.find(".zm-edit-components-productList-scale").children("span");
            btn.on("click",function(){
                var _this = $(this);
                var _index = btn.index(this);
                btn.removeClass("active");
                _this.addClass("active");
                var wrap = ele.find(".zm-edit-components-list-unit-image-box");
                switch(_index){
                    case 0:
                        wrap.css("padding-bottom","56.25%");
                        //16:9
                        break;
                    case 1:
                        wrap.css("padding-bottom","75%");
                        //3:2
                        break;
                    case 2:
                        wrap.css("padding-bottom","66.67%");
                        //4:3
                        break;
                    case 3:
                        wrap.css("padding-bottom","100%");
                        //1:1
                        break;
                    case 4:
                        wrap.css("padding-bottom","150%");
                        //3:4
                        break;
                    case 5:
                        wrap.css("padding-bottom","133.33%");
                        //2:3
                        break;
                    case 6:
                        wrap.css("padding-bottom","177.78%");
                        //9:16
                        break;
                }
            });
            return e;
        },//图片框比例 ok
        PLRanks:function(ele) {
            var e = $('<div class="zm-edit-components-productList-ranks">'
                + '<div class="zm-edit-components-productList-ranks-rows"><span>行数 :</span><div><input type="text" value=""/><i class="fa fa-sort-asc"></i><em class="fa fa-sort-desc"></em></div></div>'
                + '<div class="zm-edit-components-productList-ranks-cols"><span>列数 :</span><div><input type="text" value=""/><i class="fa fa-sort-asc"></i><em class="fa fa-sort-desc"></em></div></div>'
                + '<div class="zm-edit-components-productList-ranks-rowBetween"><span>行间距 :</span><div><input type="text" value=""/><i class="fa fa-sort-asc"></i><em class="fa fa-sort-desc"></em></div></div>'
                + '<div class="zm-edit-components-productList-ranks-colBetween"><span>列间距 :</span><div><input type="text" value=""/><i class="fa fa-sort-asc"></i><em class="fa fa-sort-desc"></em></div></div>'
                + '</div>'
            );
            //初始化input值
            var _rows = ele.find("li").length;
            var _cols = ele.find("li:first-child").children().length;
            var _margin_row = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-bottom"));
            var _margin_col = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-right"));
            var _row_input = e.find(".zm-edit-components-productList-ranks-rows").find("input");
            var _row_add = e.find(".zm-edit-components-productList-ranks-rows").find("i");
            var _row_cut = e.find(".zm-edit-components-productList-ranks-rows").find("em");
            var _col_input = e.find(".zm-edit-components-productList-ranks-cols").find("input");
            var _col_add = e.find(".zm-edit-components-productList-ranks-cols").find("i");
            var _col_cut = e.find(".zm-edit-components-productList-ranks-cols").find("em");
            var _row_between_input = e.find(".zm-edit-components-productList-ranks-rowBetween").find("input");
            var _row_between_add = e.find(".zm-edit-components-productList-ranks-rowBetween").find("i");
            var _row_between_cut = e.find(".zm-edit-components-productList-ranks-rowBetween").find("em");
            var _col_between_input = e.find(".zm-edit-components-productList-ranks-colBetween").find("input");
            var _col_between_add = e.find(".zm-edit-components-productList-ranks-colBetween").find("i");
            var _col_between_cut = e.find(".zm-edit-components-productList-ranks-colBetween").find("em");
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
                var newRow = _this.val();
                if(newRow > 12){
                    newRow = 12;
                }else if(newRow < 1){
                    newRow = 1;
                }
                var num = newRow - oldRow;
                var li = ele.find("li:first-child");
                var height = parseInt(li.css("height"));
                if(num > 0){
                    for(var i=0;i<num;i++){
                        ele.append(li.clone());
                    }
                }else if(num < 0){
                    for(var i=0;i<Math.abs(num);i++){
                        ele.find("li:last-child").remove();
                    }
                }
            });
            _row_add.on("click",function(){
                var li = ele.find("li:first-child");
                var input = $(this).closest("div").find("input");
                var _val = input.val();
                if(_val < 12){
                    input.val(parseInt(input.val())+1);
                    ele.append(li.clone());
                }
            });
            _row_cut.on("click",function(){
                var input = $(this).closest("div").find("input");
                var _val = input.val();
                if(_val > 1){
                    input.val(parseInt(input.val())-1);
                    ele.find("li:last-child").remove();
                }
            });
            //列
            _col_input.on("change",function(){
                var _this = $(this);
                var oldVal = ele.find("li").eq(0).children().length;
                var nowVal = _this.val();
                if(nowVal > 6){
                    nowVal = 6;
                }else if(nowVal < 1){
                    nowVal = 1;
                }
                _this.val(nowVal);
                var num = nowVal - oldVal;
                var li = ele.find("li");
                if(num > 0){
                    for(var i=0;i<num;i++){
                        li.append(goods.clone());
                    }
                }else{
                    for(var i=0;i<Math.abs(num);i++){
                        li.find(".zm-edit-components-list-unit:last-child").remove();
                    }
                }
            });
            _col_add.on("click",function(){
                var _this = $(this);
                var _input = _this.closest("div").find("input");
                var _val = parseInt(_input.val());
                var li = ele.find("li");
                if(_val < 6){
                    var nowVal = ++_val;
                    _input.val(nowVal);
                    li.append(goods.clone());
                }
            });
            _col_cut.on("click",function(){
                var _this = $(this);
                var _input = _this.closest("div").find("input");
                var _val = parseInt(_input.val());
                var li = ele.find("li");
                if(_val > 1){
                    var nowVal = --_val;
                    _input.val(nowVal);
                    li.find(".zm-edit-components-list-unit:last-child").remove();
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
        },//行,列,间距控制
        PLButton:function(ele){
            var e = $('<div class="zm-edit-components-productList-button">'
                +'<div><label><i class="fa fa-check"></i></label><span>按钮 :</span><input type="text"/></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div class="zm-edit-components-productList-button-shadow"></div>'
                +'</div>'
            );
            var font = zmEditor.component.setItems.strings.fontStyle(ele,{style: "mini",param: "color"});
            var bc = zmEditor.component.setItems.slider(ele,{title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"});
            var hbc = zmEditor.component.setItems.slider(ele,{title: "悬停颜色",style: "noTab_color",isColor: true,param: "hoverBackgroundColor"});
            e.children("div:nth-child(2)").append(font);
            e.children("div:nth-child(3)").append(bc);
            e.children("div:nth-child(4)").append(hbc);

            var label = e.children("div:nth-child(1)").find("label");
            var icon = label.children("i");
            var input = e.children("div:nth-child(1)").find("input");
            var shadow = e.find(".zm-edit-components-productList-button-shadow");
            var wrap = ele.parent();
            if(wrap.css("display") == "flex"){
                icon.addClass("fa-check");
                shadow.css("display","none");
            }else{
                icon.removeClass("fa-check");
                shadow.css("display","block");
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    wrap.css("display","none");
                    shadow.css("display","block");
                    icon.removeClass("fa-check");
                }else{
                    wrap.css("display","flex");
                    shadow.css("display","none");
                    icon.addClass("fa-check");
                }

            });
            input.on("blur",function(){
                var _this = $(this);
                var _val= _this.val();
                if(_val != ""){
                    ele.text(_val);
                }
            });

            return e;
        },//加载更多按钮
        PLExhibit:function(ele){
            var e = $('<div class="zm-edit-components-productList-PLExhibit">'
                +'<span class="zm-edit-text-title">展示内容</span>'
                +'<div class="zm-edit-components-productList-PLExhibit-choose"><span><div><p>产品</p><p>服务</p></div></span><span class="zm-edit-components-productList-PLExhibit-btn"><i class="fa fa-angle-down"></i></span></div>'
                +'</div>'
            );
            var btn = e.find(".zm-edit-components-productList-PLExhibit-btn");
            var lis = e.find(".zm-edit-components-productList-PLExhibit-choose").children("span").children("div");
            var icon = btn.children();
            var type = ele.attr("data-product-style");
            if(type == "serve"){
                lis.css("top","-28px");
            }
            btn.on("click",function(){
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                    lis.animate({"top":"-28px"});
                    ele.attr("data-product-style","serve");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                    lis.animate({"top":"0px"});
                    ele.attr("data-product-style","goods");
                }
            });

            return e;
        },//展示内容选择
        PLPList:function(ele){
            var e = $('<div class="zm-edit-components-productList-productPOP">'
                +'<div class="zm-edit-components-productList-productPOP-chose"><span><label></label><p>选择产品</p></span><span><label></label><p>选择类目</p></span></div>'
                +'<div class="zm-edit-components-productList-productPOP-setting"><span>选择</span><button>设置</button></div>'
                +'<div class="zm-edit-components-productList-productPOP-type"><span><i class="fa fa-flip-horizontal fa-unlink"></i></span><p>当前未设置任何链接!</p></div>'
                +'<div class="zm-edit-components-productList-productPOP-showList"><ul class="mCustomScrollbar" data-mcs-theme="minimal"></ul></div>'
                +'</div>'
            );
            var label = e.find(".zm-edit-components-productList-productPOP-chose").find("label");
            var btn = e.find(".zm-edit-components-productList-productPOP-setting > button");
            if(ele.attr("data-list-type") == "category"){
                label.eq(1).addClass("choice");
            }else{
                label.eq(0).addClass("choice");
            }
            label.on("click",function(){
                var _this = $(this);
                var index = label.index(this);
                label.removeClass("choice");
                _this.addClass("choice");
                switch(index){
                    case 0:
                        ele.attr("data-list-type","multiple");
                        break;
                    case 1:
                        ele.attr("data-list-type","category");
                        break;
                }
            });
            btn.on("click",function(){
                var type = ele.attr("data-list-type");
                var judge;
                if(type == "multiple"){
                    judge = "";
                }else{
                    judge = "false";
                }
                zmChoiceRadio.choiceGoods({multiple :judge,callBack:popup_return_product});

            });
            function popup_return_product(data){
                console.log(data);
            }

            return e;

        },//商品选择展示列表
        PLSort:function(ele){
            var e = $('<div class="zm-edit-components-productList-sort">'
                +'<div>产品排序 :</div>'
                +'<div><label class="choice"></label><span>随机排序</span></div>'
                +'<div><label></label><span>产品上传时间先后</span></div>'
                +'</div>'
            );
            var label = e.find("label");
            if(ele.attr("data-type-sort") == "order"){
                label.toggleClass("choice");
            }
            label.on("click",function(){
                var _this = $(this);
                label.removeClass("choice");
                _this.addClass("choice");
                var index = label.index(this);
                switch(index){
                    case 0:
                        ele.attr("data-type-sort","random");
                        break;
                    case 1:
                        ele.attr("data-type-sort","order");
                        break;
                }
            });
            return e;
        },//产品排序
        PLPStr:function(ele,obj){
            var e = $('<div class="zm-edit-components-productList-PLPStr">'
                +'<div class="zm-edit-components-productList-PLPStr-title"><label><i class="fa fa-check"></i></label><span></span></div>'
                +'<div class="zm-edit-components-productList-PLPStr-wrap"></div>'
                +'</div>'
            );
            e.find(".zm-edit-components-productList-PLPStr-title > span").text(obj.title);
            var _wrap = e.find(".zm-edit-components-productList-PLPStr-wrap");
            var _font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            _wrap.append(_font);
            var shadow = $('<div></div>').addClass("zm-edit-components-productList-shadow");
            e.append(shadow);
            var label = e.find("label");
            var icon = label.children();
            if(ele.find(obj.goal).css("display") == "none"){
                icon.removeClass("fa-check");
                shadow.css("display","block");
            }
            label.on("click",function(){
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.css("display","block");
                    goal.hide();
                }else{
                    icon.addClass("fa-check");
                    shadow.css("display","none");
                    goal.show();
                }
            });
            return e;
        },
        PLPName:function(ele,obj){
            return zmEditor.component.product.method.PLPStr(ele,obj);
        },
        PLPRetail:function(ele,obj){
            return zmEditor.component.product.method.PLPStr(ele,obj);
        },
        PLPGuide:function(ele,obj){
            return zmEditor.component.product.method.PLPStr(ele,obj);
        }
    }
};