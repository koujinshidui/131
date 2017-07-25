/**
 * Created by Administrator on 2017/4/11.
 */
//页面设置
//data-zm-pageSetFlag="href"//165
zmEditor.pageSet=function(flag){
    // debugger;
    if(flag=="pageSet-set"){
    }else if($(".zm-dialog-box-pageSet").length>0){
        return;
    };
    var dialogTitle = "编辑";
    var box = zmEditor.dialog.box();//box.css("width","430px");
    var content = box.find(".zm-dialog-content");
    var tabs,fatherLi=arguments[1],iSelected,f;
    switch (flag){
        case "pageSet":
            dialogTitle="页面设置";
            var setMenu=$('<div class="zm-page-setting-menu">'
                +'<p data-zm-pageSetFlag="set"><span class="fa fa-cog"></span><a>页面设置</a></p>'
                +'<p onclick="zmEditor.dialog.setHref(this)"><span class="fa fa-link"></span><a>设置链接</a></p>'
                // +'<p data-zm-pageSetFlag="href"><span class="fa fa-link"></span><a>设置链接</a></p>'
                +'<p data-zm-pageSetFlag="rename"><span class="fa fa-pencil"></span><a>页面重命名</a></p>'
                +'<p data-zm-pageSetFlag="copy"><span class="fa fa-clone"></span><a>复制页面</a></p>'
                +'<p data-zm-pageSetFlag="hide"><span class="fa fa-eye-slash""></span><a>在导航条隐藏</a></p>' //ele
                +'<p data-zm-pageSetFlag="show"><span class="fa fa-eye"></span><a>在导航条显示</a></p>'//ele-slash
                +'<p data-zm-pageSetFlag="child"><span class="fa fa-archive"></span><a>创建子页面</a></p>'
                +'<p data-zm-pageSetFlag="remove"><span class="fa fa-trash"></span><a>删除</a></p>'
                +'<div class="zm-page-setting-menu-point"></div></div>')

            zmEditor.globalMethod.nav.data.pageSet.ObJect = $('' +
                zmEditor.globalMethod.nav.data.pageSet.html
                +'<div class="zm-page-setting-add"><a>添加页面</a></div>'
            );
            tabs=zmEditor.globalMethod.nav.data.pageSet.ObJect; //设置首页 jq对象
            //3.28 点击input出现
            //div 双击事件
            tabs.on("dblclick.dblclickDIV","div.zm-nav-oneLi-div",function (event) {
                if($(event.target).hasClass("fa-th")||$(event.target).hasClass("zm-page-setting-right-icon")||$(event.target).closest("div").hasClass("zm-page-setting-menu")){return;}//屏蔽触发源
                // event.preventDefault();
                event.stopPropagation();
                $(this).closest("li").children("input").show().val($(this).children("a").text());
                $(this).closest("li").children("input").focus();
                $(this).children("b").show();
                $(this).children("i.zm-page-setting-right-icon").hide();
            })
            //input 失焦
            tabs.on("blur.input","input",function (event) {
                // event.preventDefault();
                event.stopPropagation();
                $(this).hide();
                $(this).siblings("div").children("b").hide();
                $(this).siblings("div").children("i.zm-page-setting-right-icon").show();
                $(this).closest("li").children("div").children("a").text($(this).val());
                // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                initialize_html_callbackNoman();
            });
            //键盘回车
            tabs.on("keydown.input","input",function (e) {
                // debugger;
                e.stopPropagation();
                console.log("我是回车我触发了");
                if(e.keyCode==13){
                    $(this).hide();
                    $(this).siblings("div").children("b").hide();
                    $(this).siblings("div").children("i.zm-page-setting-right-icon").show();
                    $(this).closest("li").children("div").children("a").text($(this).val());
                    // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                    initialize_html_callbackNoman();
                }
            });
            // b元素完成
            tabs.on("click.b","b",function(event){
                // debugger;
                // event.preventDefault();
                event.stopPropagation();
                $(this).hide();
                $(this).closest("div").closest("li").children("input").hide();
                $(this).closest("div").children("i.zm-page-setting-right-icon").show();
                $(this).closest("div").children("a").text($(this).val());
                // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                initialize_html_callbackNoman();
            })
            //div 点击变色
            tabs.on("click.div",".zm-nav-oneLi-div",function (event) {
                // debugger;

                if($(event.target).hasClass("fa-th")||$(event.target).hasClass("zm-page-setting-right-icon")||$(event.target).hasClass("zm-page-setting-menu")){return;}//屏蔽触发源
                // event.preventDefault();
                event.stopPropagation();
                tabs.find("li").children("div").css("background-color","");
                $(this).css("background-color","rgba(74,177,167,.7)");
            });
            // 点击i元素弹出组件弹窗
            tabs.on("click.zm-page-setting-right-icon",".zm-page-setting-right-icon",function(event){
                //小按钮设置和3级子页面按钮消失callback
                // debugger;
                // event.preventDefault();
                event.stopPropagation();
                var _this = $(this);
                var thisLi = _this.closest("li");
                // $(_this).closest(".zm-page-setting-right-icon").closest("ul").hasClass(".zm-dialog-content-pageSet-childulThree")? $(this).closest(".zm-page-setting-right-icon").closest("li").remove():undefined;
                //2月8日添加
                if( setMenu.children("p[data-zm-pageSetFlag='child']").length==0){
                    setMenu.children("p[data-zm-pageSetFlag='show']").after($('<p data-zm-pageSetFlag="child"><span class="fa fa-cog"></span><a>创建子页面</a></p>'));
                }
                if(thisLi.closest("ul").hasClass("zm-dialog-content-pageSet-childulThree")){
                    setMenu.children("p[data-zm-pageSetFlag='child']").remove();
                }
                var x = thisLi.outerWidth()-20+thisLi.offset().left;
                var y =1.3+thisLi.offset().top;
                setMenu.css({"left":x,"top":y});
                _this.append(setMenu);
                setMenu.show();
            });
            //nav_li 拖拽  初始版本
            // tabs.on("mousedown.zm-page-setting-li-div",".zm-page-setting-li-div",function(e){
            //     // debugger;
            //     console.log(e.target)
            //     console.log("我mousedown出发了")
            //     if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //     e.preventDefault();
            //     e.stopPropagation();
            //     var _this = $(this),box=_this.parent('ul'),temp,moveXX,gaoducha,//
            //         downX = e.pageX,
            //         downY = e.pageY,
            //         downLeft = _this.offset().left,
            //         downTop = _this.offset().top,
            //         width = _this.outerWidth(),
            //         height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
            //     temp = $('<li style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
            //         'height:35px;width:' + "270px" + ';line-height: ' + height + 'px;"></li>');
            //     $(document).on("mousemove.zm-page-setting-li-div",function(e){
            //         // e.preventDefault()
            //         e.stopPropagation();
            //         _this.children("div").css("background-color","#c2ece8");
            //         moveX = e.pageX;
            //         moveY = e.pageY;
            //         console.log(moveY)
            //         if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
            //             _this.after(temp);
            //             move=false;
            //             _this.css({position: 'fixed', left: downLeft, top: downTop,"transform":"rotate(-5deg)"});
            //         }
            //         if($(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display")==="block"){showOrhide=true;$(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display","none")};
            //         box.children("li").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
            //             var o = $(this);
            //             var l = o.offset().left;
            //             var r = o.offset().left+o.outerWidth();
            //             var t = o.offset().top;
            //             var b = o.offset().top+o.outerHeight();
            //             if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
            //                 if(moveY>(b-t)/2+t){
            //                     temp.insertAfter(o)
            //                 }else{
            //                     temp.insertBefore(o)
            //                 }
            //             }
            //         })
            //         //nav始终限制在页面设置框内.
            //         // 左右范围
            //         moveXX=moveX - downX;
            //         if(moveXX<45&&moveXX>-50){
            //             moveXX=moveX - downX
            //         }else if(moveXX>45){
            //             moveXX=45;
            //         }else if(moveXX<-50){
            //             moveXX=-50;
            //         };
            //         // 左右范围
            //         // 上下范围
            //         // var maxwaixY=_this.closest(".zm-dialog").offset().top;
            //         // if(moveY-maxwaixY==60){gaoducha=moveY;console.log("我进来了")};
            //         // if(moveY-maxwaixY<60){moveY=gaoducha;console.log("我不动了");console.log(moveY)};
            //         // if(moveY-maxwaixY==760){gaoducha=moveY;console.log("我进来了")};
            //         // if(moveY-maxwaixY>760){moveY=gaoducha;console.log("我进来了")};
            //         // if(moveY-maxwaixY>61){console.log("我又动了");console.log(moveY)};
            //         // 上下范围
            //         //nav始终限制在页面设置框内.
            //         _this.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});//,"transform":"rotate(-5deg)"
            //     });
            //     $(document).on("mouseup.zm-page-setting-li-div",function (e) {
            //         if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //         // e.preventDefault();.zm-page-setting-li
            //         e.stopPropagation();
            //         $(document).off('.zm-page-setting-li-div');
            //         // tabs.off(".zm-page-setting-li");
            //         _this.children("div").css("background-color","");
            //         _this.attr('style','');
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){ //||e.target.closest("#mCSB_2")!=$("#mCSB_2")[0]
            //             temp.replaceWith(_this);
            //             if(showOrhide){$(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display","block")};
            //             _this.css({"transform":""});
            //             initialize_html_callbackNoman();
            //         }
            //     })
            // });
            //nav_li 二级拖拽
            // $(tabs[0]).on("mousedown.zm-page-setting-li-Twodiv",".zm-page-setting-li-Twodiv",function(e){
            //     console.log("我触发zm-page-setting-li-Twodiv了");
            //     e.preventDefault();
            //     e.stopPropagation();
            //     // debugger;
            //     if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //     if($(this).closest(".zm-dialog-content-pageSet-childulTwo").children(".zm-page-setting-yuliu_line").length<=1){return};
            //     var _this = $(this),box=_this.parent('ul'),temp,moveXX,_thisLi,
            //         _thisLi=_this.children(".zm-page-setting-childLiTwo"),
            //         downX = e.pageX,
            //         downY = e.pageY,
            //         downLeft = _this.offset().left,
            //         downTop = _this.offset().top,
            //         width = _this.outerWidth(),
            //         height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
            //        _thisLi.addClass("zm-page-setting-navReplace");
            //
            //     temp = $('<li  class="zm-page-setting-Template-Relpace" style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;margin: 10px 30px;padding:0;' +
            //         ''+'height:35px;width:' + "255px" + ';line-height: ' + height + 'px;"></li>');
            //
            //     $(document).on("mousemove.zm-page-setting-li-Twodiv",function(e){
            //         var tempParent;
            //         // e.preventDefault()
            //         e.stopPropagation();
            //         $(".zm-dialog-content-pageSet-childulTwo").append(_thisLi);
            //         _thisLi.css({"border-radius":"7px"});    //  这个地方改变了颜色
            //         _thisLi.children("div").css({"background-color":"#c2ece8"});    //  这个地方改变了颜色
            //
            //         moveX = e.pageX;
            //         moveY = e.pageY;
            //         console.log(moveY)
            //         if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
            //         // debugger;
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
            //              move=false;
            //             _thisLi.css({position: 'fixed', left: downLeft, top: downTop});
            //         }
            //
            //         if(   (!(_this.children(".zm-page-setting-childLiTwo").length>0))   &&   (!(_this.children(".zm-page-setting-Template-Relpace").length>0))   ) {
            //             _this.css({"height":"35px","width":"290px","line-height":height+"px"});
            //             _this.append(temp);
            //             _this.attr("style","");
            //         }
            //
            //         if($(_this).children("li").children(".zm-dialog-content-pageSet-childulThree").css("display")==="block"){showOrhide=true;$(_this).children("li").children(".zm-dialog-content-pageSet-childulThree").css("display","none")};
            //         box.children("div").each(function(index,ele){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
            //             // debugger;
            //             var o = $(this);
            //             var l = o.offset().left;
            //             var r = o.offset().left+o.outerWidth();
            //             var t = o.offset().top;
            //             var b = o.offset().top+o.outerHeight();
            //             if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
            //                      tempParent=temp.parent("div");
            //                     if(tempParent[0]==o[0]){return false};
            //                     tempParent.append(o.children(".zm-page-setting-childLiTwo"));
            //                     o.append(temp);
            //                     return false;
            //             }
            //         })
            //         _thisLi.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});//,"transform":"rotate(-5deg)"
            //         //nav始终限制在页面设置框内.
            //         // 左右范围
            //         moveXX=moveX - downX;
            //         if(moveXX<45&&moveXX>-50){
            //             moveXX=moveX - downX
            //         }else if(moveXX>45){
            //             moveXX=45;
            //         }else if(moveXX<-50){
            //             moveXX=-50;
            //         };
            //         // 左右范围
            //
            //     });
            //     $(document).on("mouseup.zm-page-setting-li-Twodiv",function (e) {
            //         if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //         e.stopPropagation();
            //         $(document).off('.zm-page-setting-li-Twodiv');
            //          // debugger;
            //         // _this.children("div").css("background-color","");
            //         _thisLi[0].style.cssText="";
            //         _thisLi.children("div").css({"background-color":""});    //  这个地方改变了颜色
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){
            //             // temp.replaceWith(_this);
            //             temp.replaceWith(_thisLi);
            //
            //             // if(showOrhide){$(_this).children(".zm-dialog-content-pageSet-childulThree").css("display","block")};
            //             if(showOrhide){$(_this).children("li").children(".zm-dialog-content-pageSet-childulThree").css("display","block")};
            //
            //             // _this.children("li").css({"transform":""});
            //
            //             initialize_html_callbackNoman();
            //         }
            //     })
            // })
            // //nav_li 三级拖拽
            // $(tabs[0]).on("mousedown.zm-page-setting-childLiThree",".zm-page-setting-childLiThree",function(e){
            //     e.preventDefault();
            //     e.stopPropagation();
            //     if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //     var _this = $(this),box=_this.parent('ul'),temp,moveXX,gaoducha,
            //         downX = e.pageX,
            //         downY = e.pageY,
            //         downLeft = _this.offset().left,
            //         downTop = _this.offset().top,
            //         width = _this.outerWidth(),
            //         height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
            //     temp = $('<li style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
            //         'height:35px;width:' + "270px" + ';line-height: ' + height + 'px;"></li>');
            //     $(document).on("mousemove.zm-page-setting-childLiThree",function(e){
            //         // e.preventDefault()
            //         e.stopPropagation();
            //         _this.children("div").css("background-color","#c2ece8");
            //         moveX = e.pageX;
            //         moveY = e.pageY;
            //         console.log(moveY)
            //         if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
            //             _this.after(temp);
            //             move=false;
            //             _this.css({position: 'fixed', left: downLeft, top: downTop,"transform":"rotate(-5deg)"});
            //         }
            //         // if($(_this).children(".zm-dialog-content-pageSet-childulThree").css("display")==="block"){showOrhide=true;$(_this).children(".zm-dialog-content-pageSet-childulThree").css("display","none")};
            //         box.children("li").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
            //             var o = $(this);
            //             var l = o.offset().left;
            //             var r = o.offset().left+o.outerWidth();
            //             var t = o.offset().top;
            //             var b = o.offset().top+o.outerHeight();
            //             if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
            //                 if(moveY>(b-t)/2+t){
            //                     temp.insertAfter(o)
            //                 }else{
            //                     temp.insertBefore(o)
            //                 }
            //             }
            //         })
            //         //nav始终限制在页面设置框内.
            //         // 左右范围
            //         moveXX=moveX - downX;
            //         if(moveXX<45&&moveXX>-50){
            //             moveXX=moveX - downX
            //         }else if(moveXX>45){
            //             moveXX=45;
            //         }else if(moveXX<-50){
            //             moveXX=-50;
            //         };
            //         // 左右范围
            //         //nav始终限制在页面设置框内.
            //         _this.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});//,"transform":"rotate(-5deg)"
            //     });
            //     $(document).on("mouseup.zm-page-setting-childLiThree",function (e) {
            //         if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //
            //         e.stopPropagation();
            //         $(document).off('.zm-page-setting-childLiThree');
            //
            //         _this.children("div").css("background-color","");
            //
            //         _this.attr('style','');
            //
            //         if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){
            //             temp.replaceWith(_this);
            //             // if(showOrhide){$(_this).children(".zm-dialog-content-pageSet-childulThree").css("display","block")};
            //             _this.css({"transform":""});
            //             initialize_html_callbackNoman();
            //         }
            //     })
            //
            //
            // })
            // 点击其他处让setMenu弹出框消失api

            // 原来版本
            // function DraganddropElement(father,DraganddropelememntClass,GrandsonButton){
            //     $(tabs[0]).on("mousedown.zm-page-setting-li-Twodiv",".zm-page-setting-li-Twodiv",function(e){
            //     // father.on("mousedown."+DraganddropelememntClass+"","."+DraganddropelememntClass+"",function(e){
            //         e.preventDefault();
            //         e.stopPropagation();
            //         // if($(e.target).hasClass(GrandsonButton)||$(e.target).closest("."+GrandsonButton+"").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //         if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //         if($(this).closest(".zm-dialog-content-pageSet-childulTwo").children(".zm-page-setting-yuliu_line").length<=1){return};  // 如果最外层元素只有一个元素不让拖拽
            //         // if($(this).closest(".zm-dialog-content-pageSet-childulTwo").children(".zm-page-setting-yuliu_line").length<=1){return};
            //         var _this = $(this),box=_this.parent('ul'),temp,moveXX,_thisLi,    //"zm-dialog-content-pageSet-childulTwo"
            //             _thisLi=_this.children(".zm-page-setting-childLiTwo"), //获取div下的拖拽元素
            //             downX = e.clientX,
            //             downY = e.clientY,
            //             downLeft = _this.offset().left,
            //             downTop = _this.offset().top,
            //             width = _this.outerWidth(),everySonShowHide={},replaceShowOrHideSign,
            //             height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
            //         temp = $('<li  class="" style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;margin: 10px 30px;padding:0;' +
            //             ''+'height:35px;width:' + "255px" + ';line-height:35px;"></li>'); //替换莫版标签
            //         temp.addClass("zm-page-setting-Template-Relpace");
            //         $(document).on("mousemove.zm-page-setting-li-Twodiv",function(e){  // 移动事件
            //             var tempParent;
            //             e.stopPropagation();
            //             moveX = e.clientX,
            //             moveY = e.clientY;
            //             // console.log(moveY)
            //             if(Math.abs(moveY-downY)<4)return false;//如果移动小于3
            //             if(Math.abs(moveY-downY)>4||Math.abs(moveY-downY)==4&&move){//如果大于等于3
            //                 move=false;
            //                 _thisLi.css({position: 'fixed', left: downLeft, top: downTop}); // 给拖拽元素fixed位置脱离标准流
            //             }
            //
            //             _this.closest(".zm-dialog-content-pageSet-childulTwo").append(_thisLi); //移动拖拽元素到上级ul元素为了使li下的元素可互换位置。
            //
            //             _thisLi.css({"border-radius":"7px"});    //  这个地方改变了颜色
            //             _thisLi.children("div").css({"background-color":"#c2ece8"});    //  这个地方改变了颜色
            //             _thisLi.addClass("zm-page-setting-navReplace"); // 为拖拽元素添加一个表示类名
            //             if(   (!(_this.children(".zm-page-setting-childLiTwo").length>0))   &&   (!(_this.children(".zm-page-setting-Template-Relpace").length>0))   ) { // 如果当前有移动事件的元素里有拖拽元素或是 替换莫版标签则不放入莫版标签元素。
            //                 _this.css({"height":"35px","width":"290px","line-height":height+"px"});
            //                 _this.append(temp);
            //                 _this.attr("style","");
            //             }
            //             if(_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display")==="block"){showOrhide=true;_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display","none")}; //判断子集ul是否为显示，显示则使隐藏,并且标记状态。
            //             createThreeClassReservedlinechangeTwoClassReservedline(_this); // 更新下一个预留线
            //             // 全收缩版本
            //             if(!everySonShowHide.param){
            //             box.children("div").each(function(index,ele){
            //               var a,b;
            //               a=$(this).children(".zm-page-setting-childLiTwo");
            //               b=a.children(".zm-dialog-content-pageSet-childulThree");
            //               if(b.length>0){
            //                   replaceShowOrHideSign=b.css("display");
            //                   if(replaceShowOrHideSign=="block"){b.css("display","none");
            //                    createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
            //                       a.attr("data-type-sort",replaceShowOrHideSign);    //给位置移动元素设置初始显示隐藏状态值
            //                   }else{
            //                       a.attr("data-type-sort",replaceShowOrHideSign);
            //                   }
            //               }
            //             })
            //                 everySonShowHide.param="true";
            //             }
            //             // 全收缩版本
            //             box.children("div").each(function(index,ele){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
            //                 var o = $(this);
            //                 var l = o.offset().left;
            //                 var r = o.offset().left+o.outerWidth();
            //                 var t = o.offset().top;
            //                 var b = o.offset().top+o.outerHeight();
            //                 if(moveY>t&&moveY<b){ // 根据定位的初始拖拽元素的坐标和和列表下的每个同级元素坐标对比，并互换位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
            //                     tempParent=temp.parent("div");
            //                     if(tempParent[0]==o[0]){return false};
            //                     // replaceElementSonShowOrHide=o.children(".zm-page-setting-childLiTwo").children(".zm-dialog-content-pageSet-childulThree");
            //                     // replaceShowOrHide=replaceElementSonShowOrHide.css("display");
            //                     // if(replaceShowOrHide){replaceElementSonShowOrHide.css("display","none")};
            //                     // replaceShowOrHideSign=index;
            //                     // replaceShowOrHideSigntwo=true;
            //                     // createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
            //                     tempParent.append(o.children(".zm-page-setting-childLiTwo"));
            //                     o.append(temp);
            //                     return false;
            //                 }
            //                 // if(replaceShowOrHideSign){replaceElementSonShowOrHide.css("display","block")};
            //                 // createThreeClassReservedlinechangeTwoClassRes        ervedline($(this)); // 更新下一个预留线
            //             })
            //             _thisLi.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});// 给拖拽元素设置定位坐标
            //             //nav始终限制在页面设置框内.
            //             // 左右范围
            //             moveXX=moveX - downX; //判断坐标限制拖拽左右范围。
            //             if(moveXX<45&&moveXX>-50){
            //                 moveXX=moveX - downX
            //             }else if(moveXX>45){
            //                 moveXX=45;
            //             }else if(moveXX<-50){
            //                 moveXX=-50;
            //             };
            //             // 左右范围
            //         });
            //         $(document).on("mouseup.zm-page-setting-li-Twodiv",function (e) { // 鼠标弹起事件触发后 解绑事件 并插入拖拽元素后刷新对应元素\
            //             var a;
            //             if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
            //             e.stopPropagation();
            //             $(document).off('.zm-page-setting-li-Twodiv');
            //             _thisLi[0].style.cssText="";
            //             _thisLi.children("div").css({"background-color":""});    //  这个地方改变了颜色
            //             if(Math.abs(moveY-downY)>4||Math.abs(moveY-downY)==4){
            //                 a=temp.closest("div");
            //                 temp.replaceWith(_thisLi); // 插入拖拽元素替换莫版元素
            //                 _thisLi.removeClass("zm-page-setting-navReplace");
            //                 // 全收缩版本
            //                 // debugger;
            //                 box.children("div").each(function(index,ele){
            //                     var a=$(this).children(".zm-page-setting-childLiTwo"); // 遍历内部li的显示状态
            //                     a.children(".zm-dialog-content-pageSet-childulThree").css("display",a.attr("data-type-sort"));
            //                     createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
            //                     a.removeAttr("data-type-sort");
            //                 })
            //                 // 全收缩版本
            //                 if(showOrhide){_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display","block")
            //                     createThreeClassReservedlinechangeTwoClassReservedline(a); //更新下一个预留线
            //                 };  //根据子集ul显示表示还原显示状态
            //
            //                 initialize_html_callbackNoman(); // 刷新显示元素
            //             }
            //         })
            //     })
            // }
            // 原来版本
            // 一级拖拽
            DraganddropElement({delegateGrandFatherELement:$(tabs[0]),
                DraganddropelememntClass:"zm-page-setting-li-div",
                GrandsonButton:"zm-page-setting-right-icon",
                ReservedlineClass:"zm-page-setting-yuliu_line",
                DraganddropelememntClassUpUlClass:"zm-page-setting-ul",
                DraganddropelememntClassDownUlClass:"zm-dialog-content-pageSet-childulTwo",
                DraganddropelememntClassSonliClass:"zm-page-setting-li",
                input:"zm-nav-oneLi-input",
                // DraganddropelememntClassDownSonliClass:"",
                temp:$('<li  class="zm-page-setting-Template-Relpace" style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;margin: 10px 30px;padding:0;height:35px;width:' + "255px" + ';line-height:35px;;"></li>'), //替换莫版标签
                initialize_html_callbackNoman:initialize_html_callbackNoman,
            });
            // 二级拖拽
            DraganddropElement({delegateGrandFatherELement:$(tabs[0]),
                DraganddropelememntClass:"zm-page-setting-li-Twodiv",
                GrandsonButton:"zm-page-setting-right-icon",
                ReservedlineClass:"zm-page-setting-yuliu_line",
                DraganddropelememntClassUpUlClass:"zm-dialog-content-pageSet-childulTwo",
                DraganddropelememntClassDownUlClass:"zm-dialog-content-pageSet-childulThree",
                DraganddropelememntClassSonliClass:"zm-page-setting-childLiTwo",
                input:"zm-nav-oneLi-input",
                // DraganddropelememntClassDownSonliClass:"",
                temp:$('<li  class="zm-page-setting-Template-Relpace" style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;margin: 10px 30px;padding:0;height:35px;width:' + "255px" + ';line-height:35px;;"></li>'), //替换莫版标签
                initialize_html_callbackNoman:initialize_html_callbackNoman,
            });
            // 三级拖拽
            DraganddropElement({delegateGrandFatherELement:$(tabs[0]),
                DraganddropelememntClass:"zm-page-setting-li-Threediv",
                GrandsonButton:"zm-page-setting-right-icon",
                ReservedlineClass:"zm-page-setting-yuliu_line",
                DraganddropelememntClassUpUlClass:"zm-dialog-content-pageSet-childulThree",
                DraganddropelememntClassDownUlClass:"zm-dialog-content-pageSet-childulThree",
                DraganddropelememntClassSonliClass:"zm-page-setting-childLiThree",
                input:"zm-nav-oneLi-input",
                // DraganddropelememntClassDownSonliClass:"",
                temp:$('<li  class="zm-page-setting-Template-Relpace" style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;margin: 10px 30px;padding:0;height:35px;width:' + "255px" + ';line-height:35px;;"></li>'), //替换莫版标签
                initialize_html_callbackNoman:initialize_html_callbackNoman,
            });
            /*
             objClass.delegateGrandFatherELement, 代理绑定元素
             objClass.DraganddropelememntClass, 拖拽元素类名
             objClass.GrandsonButton,  点击按钮类名
             objClass.ReservedlineClass, 预留线类名
             objClass.DraganddropelememntClassUpUlClass, 上级ul类名
             objClass.DraganddropelememntClassDownUlClass,  下级ul类名
             objClass.DraganddropelememntClassSonliClass, 子集拖拽元素li;
             objClass.DraganddropelememntClassDownSonliClass  下级 元素li；
             objClass.temp 莫版元素
             * */

        function DraganddropElement(objClass){
            // $(tabs[0]).on("mousedown.zm-page-setting-li-Twodiv",".zm-page-setting-li-Twodiv",function(e){
            objClass.delegateGrandFatherELement.on("mousedown."+objClass.DraganddropelememntClass+"","."+objClass.DraganddropelememntClass+"",function(e){
                e.preventDefault();e.stopPropagation();
                // if($(e.target).hasClass(GrandsonButton)||$(e.target).closest("."+GrandsonButton+"").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
                if($(e.target).hasClass(objClass.GrandsonButton)||$(e.target).closest("."+objClass.GrandsonButton+"").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
                if($(e.target).hasClass(objClass.input)||$(e.target).closest("."+objClass.input+"").length>0) return; //事件源由input元素触发
                if($(this).closest("."+objClass.DraganddropelememntClassUpUlClass+"").children("."+objClass.ReservedlineClass+"").length<=1){return};  // 如果最外层元素只有一个元素不让拖拽
                // if($(this).closest(".zm-dialog-content-pageSet-childulTwo").children(".zm-page-setting-yuliu_line").length<=1){return};
                // var _this = $(this),box=_this.parent('ul'),temp,moveXX,_thisLi,
                var _this = $(this),box=_this.parent("."+objClass.DraganddropelememntClassUpUlClass),moveXX,_thisLi,menu,
                    // _thisLi=_this.children(".zm-page-setting-childLiTwo"), //获取div下的拖拽元素
                    _thisLi=_this.children("."+objClass.DraganddropelememntClassSonliClass+""), //获取div下的拖拽元素
                    downX = e.clientX,
                    downY = e.clientY,
                    downLeft = _this.offset().left,
                    downTop = _this.offset().top,
                    width = _this.outerWidth(),everySonShowHide={},replaceShowOrHideSign,
                    height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
                objClass.temp.addClass("zm-page-setting-Template-Relpace");

                $(document).on("mousemove."+objClass.DraganddropelememntClass+"",function(e){  // 移动事件
                    var tempParent;e.stopPropagation();
                    moveX = e.clientX,moveY = e.clientY;
                    if(Math.abs(moveY-downY)<4)return false;//如果移动小于3
                    if(Math.abs(moveY-downY)>4||Math.abs(moveY-downY)==4&&move){//如果大于等于3
                        move=false;
                        _thisLi.css({position: 'fixed', left: downLeft, top: downTop}); // 给拖拽元素fixed位置脱离标准流
                    }
                    if(_this.find(".zm-page-setting-menu").css("display")=="block"&&_this.find(".zm-page-setting-menu").length>0){_thisLi.find(".zm-page-setting-menu").hide();menu=true}; // 在拖拽过程中判断menu弹框是否为显示,如果为显示，就给他隐藏，并保留显示的状态值
                    // debugger;
                    // $(".zm-dialog-content-pageSet-childulTwo").append(_thisLi); //移动拖拽元素到上级ul元素为了使li下的元素可互换位置。
                    _this.closest("."+objClass.DraganddropelememntClassUpUlClass+"").append(_thisLi); //移动拖拽元素到上级ul元素为了使li下的元素可互换位置。\
                    // debugger;
                    _thisLi.css({"border-radius":"7px"});    //  这个地方改变了颜色
                    _thisLi.children("div").css({"background-color":"#c2ece8"});    //  这个地方改变了颜色
                    _thisLi.addClass("zm-page-setting-navReplace"); // 为拖拽元素添加一个表示类名
                    // if(   (!(_this.children(".zm-page-setting-childLiTwo").length>0))   &&   (!(_this.c
                    // hildren(".zm-page-setting-Template-Relpace").length>0))   ) { // 如果当前有移动事件的元素里有拖拽元素或是 替换莫版标签则不放入莫版标签元素。
                    if(   (!(_this.children("."+objClass.DraganddropelememntClassSonliClass+"").length>0))   &&   (!(_this.children(".zm-page-setting-Template-Relpace").length>0))   ) { // 如果当前有移动事件的元素里有拖拽元素或是 替换莫版标签则不放入莫版标签元素。
                        _this.css({"height":"35px","width":"290px","line-height":height+"px"});
                        _this.append(objClass.temp);
                        _this.attr("style","");
                    }
                    // if(_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display")==="block"){showOrhide=true;_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display","none")}; //判断子集ul是否为显示，显示则使隐藏,并且标记状态。
                    if(_thisLi.children("."+objClass.DraganddropelememntClassDownUlClass+"").css("display")==="block"){showOrhide=true;_thisLi.children("."+objClass.DraganddropelememntClassDownUlClass+"").css("display","none")}; //判断子集ul是否为显示，显示则使隐藏,并且标记状态。
                    createThreeClassReservedlinechangeTwoClassReservedline(_this); // 更新下一个预留线
                    // 全收缩版本
                    if(!everySonShowHide.param){
                        box.children("div").each(function(index,ele){
                            var a,b;
                            a=$(this).children("."+objClass.DraganddropelememntClassSonliClass+"");
                            // a=$(this).children(".zm-page-setting-childLiTwo");
                            // b=a.children(".zm-dialog-content-pageSet-childulThree");
                            b=a.children("."+objClass.DraganddropelememntClassDownUlClass+"");
                            if(b.length>0){
                                replaceShowOrHideSign=b.css("display");
                                if(replaceShowOrHideSign=="block"){b.css("display","none");
                                    createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
                                    a.attr("data-type-sort",replaceShowOrHideSign);    //给位置移动元素设置初始显示隐藏状态值
                                }else{
                                    a.attr("data-type-sort",replaceShowOrHideSign);
                                }
                            }
                        })
                        everySonShowHide.param="true";
                    }
                    // 全收缩版本
                    box.children("div").each(function(index,ele){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
                        var o = $(this);
                        var l = o.offset().left;
                        var r = o.offset().left+o.outerWidth();
                        var t = o.offset().top;
                        var b = o.offset().top+o.outerHeight();
                        if(moveY>t&&moveY<b){ // 根据定位的初始拖拽元素的坐标和和列表下的每个同级元素坐标对比，并互换位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
                            tempParent=objClass.temp.parent("div");   // 唯一没有动态指明变量名的地方
                            if(tempParent[0]==o[0]){return false};
                            // tempParent.append(o.children(".zm-page-setting-childLiTwo"));
                            tempParent.append(o.children("."+objClass.DraganddropelememntClassSonliClass+""));
                            o.append(objClass.temp);
                            return false;
                        }
                    })
                    _thisLi.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});// 给拖拽元素设置定位坐标
                    //nav始终限制在页面设置框内.
                    // 左右范围
                    // moveXX=moveX - downX; //判断坐标限制拖拽左右范围。
                    // if(moveXX<45&&moveXX>-50){
                    //     moveXX=moveX - downX
                    // }else if(moveXX>45){
                    //     moveXX=45;
                    // }else if(moveXX<-50){
                    //     moveXX=-50;
                    // };
                    // 左右范围
                });
                $(document).on("mouseup."+objClass.DraganddropelememntClass+"",function (e) { // 鼠标弹起事件触发后 解绑事件 并插入拖拽元素后刷新对应元素\
                    var a;
                    if($(e.target).hasClass(objClass.GrandsonButton)||$(e.target).closest("."+objClass.GrandsonButton+"").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
                    e.stopPropagation();
                    // $(document).off('.zm-page-setting-li-Twodiv');
                    $(document).off('.'+objClass.DraganddropelememntClass+'');
                    _thisLi[0].style.cssText="";
                    _thisLi.children("div").css({"background-color":""});    //  这个地方改变了颜色
                    if(Math.abs(moveY-downY)>4||Math.abs(moveY-downY)==4){
                        a=objClass.temp.closest("div");
                        objClass.temp.replaceWith(_thisLi); // 插入拖拽元素替换莫版元素
                        _thisLi.removeClass("zm-page-setting-navReplace");
                        // 全收缩版本
                        // box.children("div").each(function(index,ele){
                        //     var a=$(this).children(".zm-page-setting-childLiTwo"); // 遍历内部li的显示状态
                        //     a.children(".zm-dialog-content-pageSet-childulThree").css("display",a.attr("data-type-sort"));
                        //     createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
                        //     a.removeAttr("data-type-sort");
                        // })
                        box.children("div").each(function(index,ele){
                            var a=$(this).children("."+objClass.DraganddropelememntClassSonliClass+""); // 遍历内部li的显示状态
                            a.children("."+objClass.DraganddropelememntClassDownUlClass+"").css("display",a.attr("data-type-sort"));
                            createThreeClassReservedlinechangeTwoClassReservedline($(this)); // 更新下一个预留线
                            a.removeAttr("data-type-sort");
                        })
                        // 全收缩版本
                        // if(showOrhide){_thisLi.children(".zm-dialog-content-pageSet-childulThree").css("display","block")
                        if(showOrhide){_thisLi.children("."+objClass.DraganddropelememntClassDownUlClass+"").css("display","block")
                            createThreeClassReservedlinechangeTwoClassReservedline(a); //更新下一个预留线
                        };  //根据子集ul显示表示还原显示状态
                        objClass.initialize_html_callbackNoman(); // 刷新显示元素
                    }
                    //Securitpatrol 安全巡查
                    if(box.children(".zm-page-setting-navReplace").length>0){
                        var SecuritPatrol=box.children(".zm-page-setting-navReplace");
                        box.children("div").each(function(index,ele){
                        if(!($(this).children("li").length>0)){
                        $(this).append(SecuritPatrol);
                            SecuritPatrol.removeClass("zm-page-setting-navReplace");
                        }
                        if($(this).children(".zm-page-setting-Template-Relpace").length>0){
                            objClass.temp.replaceWith(SecuritPatrol);
                            SecuritPatrol.removeClass("zm-page-setting-navReplace");
                        }
                        })
                        objClass.initialize_html_callbackNoman(); // 刷新显示元素
                    }
                    // debugger;
                    if(menu==true){_thisLi.find(".zm-page-setting-menu").show();_thisLi.find(".zm-page-setting-menu").closest("i").trigger("click")};  //// 根据上面保存的显示状态值来判断menu弹出框是否要显示，并且更新menu的点击事件刷新弹框的位置。
                })
            })
        }

            $(document).on("click.IndependentPageSet",function(e){ // 点击其他处让setMenu弹出框消失api
                e.stopPropagation();
                if(e.target.closest(".zm-page-setting-right-icon")){
                    return;
                }
                if(e.target.closest(".zm-page-setting-menu")){
                    return;
                }
                setMenu.hide();
            });
            //html 初始化元素
        function typeClass_li_basicClass(string){
            return $(' <div class="zm-page-setting-li-div zm-page-setting-yuliu_line"> <div class="zm-nav-yuliu_line-div"><span class="zm-nav-yuliu_line"></span></div>' +
                '<li class="zm-page-setting-li" data-nav-display="block">' +
                '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >'+string+'</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i><b>完成</b></div>' +
                '<input type="text" class="zm-nav-oneLi-input">' +
                '</li></div>');
        };
            //html 初始化元素
        function typeClass_li_basic(string,stringClass){
            var a;stringClass==".zm-dialog-content-pageSet-childulTwo"?(stringClass="zm-page-setting-childLiTwo",a="zm-page-setting-li-Twodiv"):(stringClass="zm-page-setting-childLiThree",a="zm-page-setting-li-Threediv");
            return $(' <div class="'+a+' zm-page-setting-yuliu_line"><div class="zm-nav-yuliu_line-div"><span class="zm-nav-yuliu_line"></span></div>' +
                '<li data-nav-display="block" class="'+stringClass+'">' +
                '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span>' +
                '<i class="fa fa-th" ></i><a class="zm-page-setting-a" >'+string+'</a>' +
                '<span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i>' +
                '<b>完成</b>' +
                '</div>' +
                '<input type="text" class="zm-nav-oneLi-input">' +
                '</li>' +
                '</div>');
        };
        function maxTypeClass(li,select,callback,select1,select2){
            var a=  li.children( select+"").children("li").length;
            if(a>=10){alert("最大限度设置10个页面导航");return false;}
            li.children(select+"").append(callback("友情链接",select)); //,select
        };
            // li间线条设置
        function createThreeClassReservedlinechangeTwoClassReservedline(isselect,select){ //生成3级预留线改成二级预留线// 约定isselect为当前div元素
            var a,b;
            a=isselect.next("div");//获取下一个兄弟div
            if(a.length<=0){return} // 如果下面没有兄弟元素，则不更新div;
            if(isselect.children("li").children(".zm-dialog-content-pageSet-childulThree").css("display")=="block"){
                b=parseFloat(isselect.css("height"))+40-1+"px";
                a.children("div").children("span").css("height",b);
            }else{
                a.children("div").children("span").css("height","45px");
            }
        }
        function createTwoClassReservedline(isselect,select){// 直接生成2级预留线   isselect为二级ul
            var a,b,c;
            a=isselect.children("div:last");
            b=a.prev("div");
            if(b.length<=0)return;
            if(b.children("li").children(".zm-dialog-content-pageSet-childulThree").css("display")=="block"&&b.children("li").children(".zm-dialog-content-pageSet-childulThree").children("div").length>0){ // 判断上一个div 下的ul是否为block
                c=parseFloat(b.css("height"))+40-1;  // 获取上一个div的高度
                a.children("div").children("span").css("height",c+"px");
            }else{
                a.children("div").children("span").css("height","45px");
            }
        };
        function updataThreeClassReservedlineHeight(isselect,select){
            // isselect.closest(".zm-dialog-content-pageSet-childulThree").children("li:eq(0)").children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height","32px");
            isselect.closest(".zm-dialog-content-pageSet-childulThree").children(".zm-page-setting-yuliu_line:eq(0)").children(".zm-nav-yuliu_line-div").children(".zm-nav-yuliu_line").css("height","32px");// 把三级下第一个预留线span高变更新32px
        }
        function updataTWoClassReservedlineHeight(isselect,select){
            isselect.next("div").children("div").children("span").css("height","29px");
        }
            // li间线条设置
            //导航mian选择器
        function findSelect(){ //导航mian选择器   // 要更改  zm-component-nowEdit
            var a,b,c,d;
            d=zmEditor.component.nowEdit();
            if(d.closest(".zm-component-box1").attr("data-zm-component-type")=="nav"){ return d}
            a=$(".data-nav-Independent");
            b =a.children(".zm-dialog").children(".zm-dialog-header").children(".zm-dialog-title").text();
            if(b=="导航"){
                // c=a.closest(".zm-component-box1").children(".zm-component-box2").find(".zm-component-main");
                c=zmEditor.component.nowEdit(); if(!(c.closest(".zm-component-box1").attr("data-zm-component-type")=="nav")){return;}
            }else{
                $(".zm-component-box1").each(function(){
                    if($(this).attr("data-zm-component-type")=="nav"){
                        // if($(this).find(".zm-dialog").children(".zm-dialog-header").children(".zm-dialog-title").text()=="导航"){
                        if($(this).hasClass("zm-component-nowEdit")){
                            c= $(this).find(".zm-component-main");
                            return false;
                        }
                    }
                })
            }
            return c;
        }
            //首页弹出框没有main时设置函数 以及有mian时要从从新渲染nav
        function initialize_html_callbackNoman(){
            iSelected=findSelect(); //获取nav对应最外层元素
            // debugger;
            f=zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);  //获取nav对应独立类名
            // console.log(f);
            if(!f){// if that is not mian,return; 不从新渲染nav
                return false;
            }else{
                zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(iSelected.attr("data-zm-event-clickOrhoverView")));  // 从新渲染nav
                // initialize_html_callbackNoman(iSelected);
                zmEditor.globalMethod.nav.data.pageSet.html=zmEditor.globalMethod.nav.data.savePageSet();
            }
        }
            //按钮层级切换事件
            tabs.on("click.fa-th",".fa-th",function(event){//按钮切换事件
                event.stopPropagation();
                $(this).closest("li").children("ul").toggle();
                console.log(".fa-th->toggle");
                // createThreeClassReservedlinechangeTwoClassReservedline($(this).closest("li").closest("div").children("div"));
                createThreeClassReservedlinechangeTwoClassReservedline($(this).closest("li").closest("div"));
            });
            //setMenu弹出框按钮点击事件
            setMenu.on("cilck",function(){
                console.log("我点击 setMenul ")
            })



        function setMenuswitch(){//按钮点击弹出框事件
            setMenu.on("click","p",function(e){
           // $("#mCSB_2_container").on("click",".zm-page-setting-menu>p",function(e){
                console.log("我进setMenu来了");
                // debugger;
                e.stopPropagation();
                iSelected=findSelect();
                // e.preventDefault();
                var li = $(this).closest("li");var tabsss;
                setMenu.hide();
                var flag = $(this).attr("data-zm-pageSetFlag");
                console.log(flag,"-->我进来了");
                switch (flag){
                    case "set":
                        zmEditor.pageSet("pageSet-set");
                        break;
                    case "href":
                        zmEditor.pageSet("pageSet-href");
                        // zmEditor.dialog.setHref(this);
                        break;
                    case "child":
                        if(li.closest("ul").hasClass("zm-page-setting-ul")){
                            tabsss = $( '<ul class="zm-dialog-content-pageSet-childulTwo"> </ul>');
                        }
                        if(li.closest("ul").hasClass("zm-dialog-content-pageSet-childulTwo")){
                            tabsss = $( '<ul class="zm-dialog-content-pageSet-childulThree"> </ul>');
                        }
                        if( li.children(".zm-dialog-content-pageSet-childulTwo").length>0){//弹出框获取列表

                            maxTypeClass(li,".zm-dialog-content-pageSet-childulTwo",typeClass_li_basic);
                        }else if(li.children(".zm-dialog-content-pageSet-childulThree").length>0){
                            maxTypeClass(li,".zm-dialog-content-pageSet-childulThree",typeClass_li_basic);
                        }else{
                            tabsss.append(typeClass_li_basic("友情链接","."+tabsss[0].classList[0]));
                            li.append(tabsss);
                        }
                        // debugger;
                        if(li.closest("ul").hasClass("zm-page-setting-ul")){
                            createTwoClassReservedline(li.children(".zm-dialog-content-pageSet-childulTwo"));
                        }

                        if(li.closest("ul").hasClass("zm-dialog-content-pageSet-childulTwo")){
                            // createThreeClassReservedlinechangeTwoClassReservedline(li.children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line"));
                            createThreeClassReservedlinechangeTwoClassReservedline(li.closest("div"));
                        };
                        initialize_html_callbackNoman();
                        break;
                    case "show":
                        console.log("我进显示了")
                        li.children("div").children(".pageSeteyes").removeClass("fa-eye-slash").addClass("fa-eye");
                        li.attr("data-nav-display","block");// nav_li显示标记

                        initialize_html_callbackNoman();
                        break;
                    case "hide":
                        if(li.index()==0&&li.closest("ul").hasClass("zm-page-setting-ul")){//判断是不是首页所在页面
                            alert("首页不可隐藏");
                            return ;
                        };
                        li.attr("data-nav-display","none");// nav_li隐藏标记
                        li.children("div").children(".pageSeteyes").removeClass("fa-eye").addClass("fa-eye-slash");


                        initialize_html_callbackNoman();
                        break;
                    case "remove":
                        // debugger;
                        if(li.hasClass("zm-page-homePage")&&li.closest("ul").hasClass("zm-page-setting-ul")){
                            alert("首页不可删除");
                            return ;
                        };
                        var varDivPrevNextDiv;
                        if(li.closest("div").closest("ul").hasClass("zm-dialog-content-pageSet-childulThree")){ // 表示删除3级列表的栏目   .zm-dialog-content-pageSet-childulThree
                            varDivPrevNextDiv=li.closest(".zm-dialog-content-pageSet-childulThree").closest("li").closest("div");

                            li.closest("div").remove();

                            createThreeClassReservedlinechangeTwoClassReservedline(varDivPrevNextDiv);

                            updataThreeClassReservedlineHeight(varDivPrevNextDiv.children("li"));

                        }else{
                            if(li.closest("div").closest("ul").hasClass("zm-dialog-content-pageSet-childulTwo")){  // 表示删除2级列表的栏目  .zm-dialog-content-pageSet-childulTwo

                                varDivPrevNextDiv=li.closest("div").prev("div");

                                if(varDivPrevNextDiv.length<=0){
                                    if(li.closest("div").next("div").length>0){
                                        updataTWoClassReservedlineHeight(li.closest("div"))

                                        li.closest("div").remove();
                                        // return ;
                                    }else{
                                        li.closest("div").remove();
                                        // return ;
                                    }
                                }
                                if(li.closest("div").next("div").length<=0){
                                    li.closest("div").remove();
                                    // return ;
                                }
                                li.closest("div").remove();
                                createThreeClassReservedlinechangeTwoClassReservedline(varDivPrevNextDiv);
                            }else{
                                if(li.closest("div").closest("ul").hasClass("zm-page-setting-ul")) {  // 表示删除1级列表的栏目   .zm-page-setting-ul
                                    li.closest("div").remove();
                                }
                            }
                        }

                        initialize_html_callbackNoman();

                        break;
                    case"rename"://判断是不是首页所在页面
                        li.children("input").show().val(li.children("div").children("a").text());
                        li.closest("li").children("input")[0].focus();
                        li.children("div").children("b").show();
                        li.children("div").children("i.zm-page-setting-right-icon").hide();
                        console.log("我重命名了");
                        break;
                    case"copy"://页面复制
                        break;
                    default:
                        break;
                }
                setMenu.off("click","p");
                setMenuswitch();
            });
        }
            setMenuswitch();
            // 添加页面按钮事件
            $(tabs[1]).on("click",function(e){
                // debugger;
                // e.preventDefault();
                e.stopPropagation();
                iSelected=findSelect();
                var a=$(this).closest(".mCSB_container").find(".zm-page-setting-ul").children("li").length;
                if(a>=10){alert("最大限度设置10个页面导航");return false;}
                $(tabs[0]).append(typeClass_li_basicClass("友情链接"));
                console.log("addOneType->a"+a);
                // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//刷新列表
                initialize_html_callbackNoman();
                // zmEditor.globalMethod.nav.initialize_html_callback($(this),iSelected,zmEditor.globalMethod.nav.mouseenterOrleaveHover);//刷新列表
                // iSelected.closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-edit").children("button:eq(1)").trigger("click");//once加载组设置
            });
            //2月6日添加;
            box.css({"top":"500px","left":"330px","height":"840px"});
            box.children("div").css("height","100%");
            // debugger;
            var topSpan=$('<span class="fa fa-caret-up zm-page-setting-top-span"></span>');
            box.append(topSpan);
            box.find(".zm-dialog-header").removeClass("zm-dialog-movable");
            box.addClass("zm-dialog-box-pageSet");
            break;
        case "pageSet-set":
            dialogTitle="页面设置"
            box.addClass("zm-dialog-son");
            tabs = $('<div class="zm-dialog-content-a zm-dialog-content-nav-pageSet-a" style=" width:350px; height: 638px;">'
                +'<div><span class="zm-title">常规设置 </span></div>'
                +'<div><span class="zm-span-120">页面名称</span><input type="text" class="zm-input-250" placeholder="请输入页面名称..." style="width:200px;"></div>'
                +'<div><span class="zm-span-120">是否在导航中显示</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-check "></span></span></label></div>'
                +'<div><span class="zm-span-120">设为首页</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-check "></span></span></label></div>'
                +'<div><span class="zm-span-120">跳到页面顶部</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-check "></span></span></label></div>'
                +'<div><span class="zm-span-120">跳到页面底部</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-check "></span></span></label></div>'
                +'<div><span class="zm-span-120">登录限制</span>'
                +'<div><label class="zm-checkbox-box zm-margin-left-100"><span class="zm-checkbox"><span class="zm-checkbox-icon fa fa-check"></span></span><span class="zm-checkbox-name">无限制</span><span class="zm-checkbox-prompt">（*任何人均可访问）</span></label></div>'
                +'<div><label class="zm-checkbox-box zm-margin-left-100"><span class="zm-checkbox"><span class="zm-checkbox-icon fa fa-check"></span></span><span class="zm-checkbox-name">仅限会员</span><span class="zm-checkbox-prompt">（*只有会员可访问）</span></label></div>'
                +'<div><label class="zm-checkbox-box zm-margin-left-100"><span class="zm-checkbox"><span class="zm-checkbox-icon fa fa-check"></span></span><span class="zm-checkbox-name">密码限制</span><span class="zm-checkbox-prompt">（*访问时需输入指定密码）</span></label></div>'
                +'<span class="zm-span-120">输入密码</span><input type="text" class="zm-input-250" placeholder="请输入密码..."></div>'
                +'<div><span class="zm-title">SEO优化 >></span></div>'
                +'<div><span class="zm-span-120">标题</span><input type="text" class="zm-input-250" placeholder="页面的主题和标题"></div>'
                +'<div><span class="zm-span-120 zm-span-left">描述</span><textarea class="zm-page-setting-textarea zm-page-setting-pageSet-textarea" placeholder="描述你的产品、服务的名称、用途或特点"></textarea></div>'
                +'<div><span class="zm-span-120 zm-span-left">关键字</span><textarea class="zm-page-setting-textarea zm-page-setting-pageSet-textarea" placeholder="输入三个左右关键字，便于浏览器高效检索到您的网页，使用逗号分隔"></textarea></div>'
                +'<div class="zm-page-setting-btns zm-page-setting-pageSet-btns" style=""><a>保存</a><a>取消</a></div>'
                +'</div>');
            break;
        case "pageSet-child":
            console.log("pageSet-child");
            tabs = $( '<ul class="zm-dialog-content-pageSet-childulTwo"> </ul>');
            if( fatherLi.children(".zm-dialog-content-pageSet-childulTwo").length>0){//弹出框获取列表
                var a=  fatherLi.children(".zm-dialog-content-pageSet-childulTwo").children("li").length;
                if(a>=10){alert("最大限度设置10个页面导航");return false;}
                fatherLi.children(".zm-dialog-content-pageSet-childulTwo").append($('<li><i class="fa fa-th"></i><a class="zm-page-setting-a">友情链接</a><i class="fa fa-cog zm-page-setting-right-icon"></i></li>'));
            }else{
                tabs.children(".zm-dialog-content-pageSet-childulTwo").append($('<li><i class="fa fa-th"></i><a class="zm-page-setting-a">友情链接</a><i class="fa fa-cog zm-page-setting-right-icon"></i></li>'));
                fatherLi.append(tabs);
                console.log(tabs);
            }
            break;
        default:
            break;
    }
    content.append(tabs);
    $('body').append(box);
    box.find(".zm-dialog-title").text(dialogTitle);
    box.zmDialog();
}

// zmEditor.pageSet.pageShow=function(){
//     e.stopPropagation();
//     iSelected=findSelect();
//     // e.preventDefault();
//     var li = $(this).closest("li");var tabsss;
//     setMenu.hide();
//
//     li.children("div").children(".pageSeteyes").removeClass("fa-eye-slash").addClass("fa-eye");
//     li.attr("data-nav-display","block");// nav_li显示标记
//     initialize_html_callbackNoman();
// }
// zmEditor.pageSet.pageSet=function(){}
// zmEditor.pageSet.pageChild=function(){}
// zmEditor.pageSet.pageHide=function(){}
// zmEditor.pageSet.pageRemove=function(){}
// zmEditor.pageSet.pageRename=function(){}
// zmEditor.pageSet.pageCopy=function(){}
// zmEditor.pageSet.findSelect=function(){}
// zmEditor.pageSet.initialize_html_callbackNoman=function(){}

