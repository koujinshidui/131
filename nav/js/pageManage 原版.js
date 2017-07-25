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
                // console.log(zmEditor.globalMethod.nav.data.pageSet.html);


                tabs=zmEditor.globalMethod.nav.data.pageSet.ObJect; //设置首页 jq对象
                // 3.23注释
                // var ueditertimeId=setInterval(function(){
                // if(tabs.closest(".zm-dialog").length>0){
                //     var iSelected = zmEditor.component.nowEdit();
                //     console.log( tabs.closest(".zm-dialog").children(".zm-dialog-header").children(".zm-dialog-close"));
                //         tabs.closest(".zm-dialog").children(".zm-dialog-header").children(".zm-dialog-close").on("click",function(){
                //         console.log(iSelected);
                //      function iSelectedhuoqu(){
                //          if(iSelected.closest(".zm-component-nowEdit").length>0){
                //              var timeIdhuoqu=setInterval(iSelectedhuoqu,300);
                //          }else{
                //              iSelected.closest(".zm-component-editor").addClass("zm-component-nowEdit");
                //              clearInterval(timeIdhuoqu);
                //          }
                //      }
                //    iSelectedhuoqu();
                //     })
                //  clearInterval(ueditertimeId);
                // }
                // },200);
                // 3.23注释
                //3.28 点击input出现
                //div 双击事件
                tabs.on("dblclick.dblclickDIV","div",function (event) {
                    // debugger;
                    if($(event.target).hasClass("fa-th")||$(event.target).hasClass("zm-page-setting-right-icon")){return;}//屏蔽触发源
                    // event.preventDefault();
                    event.stopPropagation();
                    $(this).closest("li").children("input").show().val($(this).children("a").text());
                    $(this).closest("li").children("input")[0].focus();
                    $(this).children("b").show();
                    $(this).children("i.zm-page-setting-right-icon").hide();
                })
                //input 失焦
                tabs.on("blur.input","input",function (event) {
                    // debugger;
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
                tabs.on("click.div","div",function (event) {
                    // debugger;

                    if($(event.target).hasClass("fa-th")||$(event.target).hasClass("zm-page-setting-right-icon")||$(event.target).hasClass("zm-page-setting-menu")){return;}//屏触发源
                    event.stopPropagation();
                    // event.preventDefault();
                    tabs.find("li").children("div").css("background-color","");
                    $(this).css("background-color","rgba(74,177,167,.7)");
                });
                // 点击i元素弹出组件弹窗
                tabs.on("click.zm-page-setting-right-icon",".zm-page-setting-right-icon",function(event){//小按钮设置和3级子页面按钮消失callback
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
                //nav_li 拖拽
                tabs.on("mousedown.zm-page-setting-limousedown",".zm-page-setting-li",function(e){
                    // debugger;
                    console.log(e.target)
                    console.log("我mousedown出发了")
                    if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
                    e.preventDefault();
                    e.stopPropagation();
                    var _this = $(this),box=_this.parent('ul'),temp,moveXX,gaoducha,//
                        downX = e.pageX,
                        downY = e.pageY,
                        downLeft = _this.offset().left,
                        downTop = _this.offset().top,
                        width = _this.outerWidth(),
                        height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
                        temp = $('<li style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
                        'height:35px;width:' + "270px" + ';line-height: ' + height + 'px;"></li>');

                    $(document).on("mousemove.zm-page-setting-li",function(e){
                        // e.preventDefault()
                        e.stopPropagation();

                        _this.children("div").css("background-color","#c2ece8");

                         moveX = e.pageX;
                         moveY = e.pageY;
                         console.log(moveY)
                        if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
                        if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
                            _this.after(temp);
                            move=false;
                            _this.css({position: 'fixed', left: downLeft, top: downTop,"transform":"rotate(-5deg)"});
                        }
                        if($(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display")==="block"){showOrhide=true;$(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display","none")};
                        box.children("li").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
                            var o = $(this);
                            var l = o.offset().left;
                            var r = o.offset().left+o.outerWidth();
                            var t = o.offset().top;
                            var b = o.offset().top+o.outerHeight();
                            if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
                                if(moveY>(b-t)/2+t){
                                    temp.insertAfter(o)
                                }else{
                                    temp.insertBefore(o)
                                }
                            }
                        })
                        //nav始终限制在页面设置框内.
                        // 左右范围
                        moveXX=moveX - downX;
                        if(moveXX<45&&moveXX>-50){
                            moveXX=moveX - downX
                        }else if(moveXX>45){
                            moveXX=45;
                        }else if(moveXX<-50){
                            moveXX=-50;
                        };
                        // 左右范围

                        // 上下范围

                        // console.log(moveY - downY + downTop);
                        // var maxwaixY=_this.closest(".zm-dialog").offset().top;
                        // console.log(maxwaixY);
                        // console.log(moveY);
                        // console.log("我们之间的间距是"+(moveY-maxwaixY));
                        // if(moveY-maxwaixY==60){gaoducha=moveY;console.log("我进来了")};
                        //
                        //     console.log("baoliuheight是---》"+gaoducha);
                        // if(moveY-maxwaixY<60){moveY=gaoducha;console.log("我不动了");console.log(moveY)};
                        // if(moveY-maxwaixY==760){gaoducha=moveY;console.log("我进来了")};
                        // if(moveY-maxwaixY>760){moveY=gaoducha;console.log("我进来了")};

                        // if(moveY-maxwaixY>61){console.log("我又动了");console.log(moveY)};

                        // 上下范围
                        //nav始终限制在页面设置框内.
                        _this.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999,"transform":"rotate(-5deg)"});//,"transform":"rotate(-5deg)"
                });
                   $(document).on("mouseup.zm-page-setting-li",function (e) {
                     if($(e.target).hasClass("zm-page-setting-right-icon")||$(e.target).closest(".zm-page-setting-right-icon").length>0) return; //事件源由$(zm-page-setting-right-icon)元素触发
                     // e.preventDefault();.zm-page-setting-li
                     // e.stopPropagation();
                    $(document).off('.zm-page-setting-li');
                        // tabs.off(".zm-page-setting-li");
                    _this.children("div").css("background-color","");
                    _this.attr('style','');
                        if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){ //||e.target.closest("#mCSB_2")!=$("#mCSB_2")[0]
                            temp.replaceWith(_this);
                            if(showOrhide){$(_this).children(".zm-dialog-content-pageSet-childulTwo").css("display","block")};
                            _this.css({"transform":""});
                            initialize_html_callbackNoman();
                        }
                    })
                   });

                // 点击其他处让setMenu弹出框消失api
                $(document).on("click.IndependentPageSet",function(e){ // 点击其他处让setMenu弹出框消失api
                    // debugger;
                    // e.preventDefault();
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
                return $('<li class="zm-page-setting-li" data-nav-display="block">' +
                    '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span><span class="zm-nav-yuliu_line"></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >'+string+'</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i><b>完成</b></div>' +
                    '<input type="text" class="zm-nav-oneLi-input">' +
                    '</li>');
            };
                //html 初始化元素
                function typeClass_li_basic(string){
                return $('<li data-nav-display="block">' +
                    '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span><span class="zm-nav-yuliu_line"></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >'+string+'</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i><b>完成</b></div>' +
                    '<input type="text" class="zm-nav-oneLi-input">' +
                    '</li>');
            };

            function maxTypeClass(li,select,callback,select1,select2){
                var a=  li.children( select+"").children("li").length;
                if(a>=10){alert("最大限度设置10个页面导航");return false;}
                li.children(select+"").append( callback("友情链接"));
            };
            // li间线条设置
            function typeClass_page_twoli_next_span_linetoline(isselect,select){

                var p=parseInt(isselect.closest("li").css("height"));

                var b=isselect.closest("li").next().children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line");

                if(isselect.closest("li").parent(".zm-dialog-content-pageSet-childulTwo").hasClass("zm-dialog-content-pageSet-childulTwo")){

                    if(isselect.closest("li").children(".zm-dialog-content-pageSet-childulThree").css("display")=="block"){
                        b.css("height",p+40+"px");
                    }else{
                        b.css("height","45px");
                    }

                }else{
                    b.css("height","45px");
                }

            }
            function typeClass_page_twoli_creat_next_span_linetoline(isselect,select){
                debugger;
                $(isselect.children(".zm-dialog-content-pageSet-childulTwo").children("li")).each(function(){
                    var a =$(this).children(".zm-dialog-content-pageSet-childulThree");
                    if(a.children("li").length>0&&a.css("display")=="block"){
                        var p=parseInt($(this).css("height"));
                        if($(this).next().length>0){
                            $(this).next().children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height",p+40+"");
                        }
                    }else{
                        $(this).next().children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height",45+"");
                    }
                })
            };
            function typeClass_page_span_linetoline_remove_three_line(isselect,select){
                isselect.closest(".zm-dialog-content-pageSet-childulThree").children("li:eq(0)").children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height","32px");
            }
            function typeClass_page_span_linetoline_remove_two_line(isselect,select){
                $(isselect.closest(".zm-dialog-content-pageSet-childulTwo").children("li")).each(function(index,ele){
                    var a =$(this).children(".zm-dialog-content-pageSet-childulThree");
                    if(index==0){
                        console.log(index);
                        $(this).children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height","30px");
                    }
                    if(a.children("li").length>0&&a.css("display")=="block"){
                        var p=parseInt($(this).css("height"));
                        if($(this).next().length>0){
                            $(this).next().children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height",p+40+"");
                        }
                    }else{
                        $(this).next().children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line").css("height",45+"");
                    }
                })
            }
            // li间线条设置
           //导航mian选择器
            function findSelect(){ //导航mian选择器   // 要更改  zm-component-nowEdit
                var a=$(".data-nav-Independent"),b,c;
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
                      // }
                      }
                    })
                }
                return c;
            }
          //首页弹出框没有main时设置函数 以及有mian时要从从新渲染nav
            function initialize_html_callbackNoman(){
                iSelected=findSelect(); //获取nav对应最外层元素
                f=zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);  //获取nav对应独立类名
                // console.log(f);
                if(!f){// if that is not mian,return; 不从新渲染nav
                    return false;
                }else{
                    zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(iSelected.attr("data-zm-event-clickOrhoverView")));//从新渲染nav
                    // initialize_html_callbackNoman(iSelected);
                    zmEditor.globalMethod.nav.data.pageSet.html=zmEditor.globalMethod.nav.data.savePageSet();
                }
            }
                //按钮层级切换事件
                tabs.on("click.fa-th",".fa-th",function(event){//按钮切换事件
                    // debugger;
                    event.stopPropagation();

                    $(this).closest("li").children("ul").toggle();
                    console.log(".fa-th->toggle");
                    typeClass_page_twoli_next_span_linetoline($(this));
                });
                //setMenu弹出框按钮点击事件
            function setMenuswitch(){//按钮点击弹出框事件
                setMenu.on("click","p",function(e){
                    // debugger;
                    iSelected=findSelect();
                    e.stopPropagation();
                    // e.preventDefault();
                    var li = $(this).closest("li");var tabsss;
                    setMenu.hide();
                    var flag = $(this).attr("data-zm-pageSetFlag");
                    switch (flag){
                        case "set":
                            console.log('我进pageSet了');
                            zmEditor.pageSet("pageSet-set");
                            break;
                        case "href":
                            zmEditor.pageSet("pageSet-href");
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
                                tabsss.append(typeClass_li_basic("友情链接"));
                                li.append(tabsss);
                            }
                            if(li.closest(".zm-dialog-content-pageSet-childulTwo").hasClass("zm-dialog-content-pageSet-childulTwo")){
                                typeClass_page_twoli_next_span_linetoline(li.children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line"));
                            };
                            if(li.closest("ul").hasClass("zm-page-setting-ul")){
                                typeClass_page_twoli_creat_next_span_linetoline(li);
                            }



                            initialize_html_callbackNoman()

                            break;
                        case "show":
                          li.children("div").children(".pageSeteyes").removeClass("fa-eye-slash").addClass("fa-eye");
                          li.attr("data-nav-display","block");// nav_li显示标记
                          // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));
                            initialize_html_callbackNoman();
                            break;
                        case "hide":
                          if(li.index()==0&&li.closest("ul").hasClass("zm-page-setting-ul")){//判断是不是首页所在页面
                              alert("首页不可隐藏");
                              return ;
                          };
                          li.attr("data-nav-display","none");// nav_li隐藏标记
                          li.children("div").children(".pageSeteyes").removeClass("fa-eye").addClass("fa-eye-slash");

                          // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string))
                            initialize_html_callbackNoman();
                            break;
                        case "remove":
                            // debugger;
                            if(li.hasClass("zm-page-homePage")&&li.closest("ul").hasClass("zm-page-setting-ul")){
                                alert("首页不可删除");
                                return ;
                            };
                            var li_next=li.next().length>0?li.next():li.prev();
                            if(li_next.length>0){}else{li_next=li.closest("ul").closest("li")};
                            // if(li_next.length>0)
                            console.log($(this).closest(".zm-page-setting-right-icon").closest("li"));
                            $(this).closest(".zm-page-setting-right-icon").closest("li").remove();
                            if(li_next.closest(".zm-dialog-content-pageSet-childulTwo").hasClass("zm-dialog-content-pageSet-childulTwo")){
                                typeClass_page_twoli_next_span_linetoline(li_next.children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line"));
                                typeClass_page_span_linetoline_remove_two_line(li_next);
                            };
                            if(li_next.closest(".zm-dialog-content-pageSet-childulThree").hasClass("zm-dialog-content-pageSet-childulThree")){
                                typeClass_page_twoli_next_span_linetoline(li_next.closest(".zm-dialog-content-pageSet-childulThree").closest("li").children(".zm-nav-oneLi-div").children(".zm-nav-yuliu_line"));
                                typeClass_page_span_linetoline_remove_three_line(li_next);
                            }

                            // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));
                            initialize_html_callbackNoman();
                            // zmEditor.globalMethod.nav.initialize_html_callback(li_next,iSelected,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                            // iSelected.closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-edit").children("button:eq(1)").trigger("click");//once加载组设置
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
                    // console.log("addOneType->a"+a);
                    initialize_html_callbackNoman();

                });
                //2月6日添加;
                box.css({"left":"300px","height":"80%"});
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
        box.css("top","476px");
        // savePageSet();
}
