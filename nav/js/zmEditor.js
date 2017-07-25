/**
 * Created by Administrator on 2017/1/6.
 */
var zmEditor={
    //全局数组
    arr:{
        actionList:[],//修改动作
        changedComponentsList:[],//修改的控件列表
        componentsList:[],//组件列表
        templateList:[],//模板列表
        pageList:[],
        componentTypes:{}//组件type名称
    },
    //全局字符串
    str:{
        component:{
            /*组件容器html（在拖动元素添加至页面的时候用到）*/
            box1:'<div class="zm-component-box1 zm-component-editor zm-component-movable">'
            +'<div class="zm-component-box2">'
                +'<div class="zm-component-main-temp">'
                    +'<div class="zm-component-edit">'
                        +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
                        +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
                        +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
                    +'</div>'
                    +'<div class="zm-component-location">'
                        +'<span>x:</span><span class="zm-component-location-x"></span> '
                        +'<span> , y:</span><span class="zm-component-location-y"></span>'
                        +'<span> , w:</span><span class="zm-component-location-w"></span>'
                        +'<span> , h:</span><span class="zm-component-location-h"></span>'
                    +'</div>'
                    +'<div class="zm-component-resize">'
                        +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
                    +'</div>'
                +'</div>'
                +'<div class="zm-component-main zm-component-main-text">'
                    +'</div>'
            +'</div></div>',
            rotate:'<div class="zm-component-rotate"><span class="fa  fa-rotate-left"></span></div>',
            resize: '<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>',
            rotateVal:'<span> , r:</span><span class="zm-component-location-r"></span>',
            //组件操作标签（在界面初始化的时候用到，给每个组件append）
            box2:'<div class="zm-component-edit">'
                    +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
                    +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
                    +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
                +'</div>'
            +'<div class="zm-component-location">'
            +'<span>x:</span><span class="zm-component-location-x"></span> '
            +'<span> , y:</span><span class="zm-component-location-y"></span>'
            +'<span> , w:</span><span class="zm-component-location-w"></span>'
            +'<span> , h:</span><span class="zm-component-location-h"></span>'
            +'</div>'
            +'<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>',
            edit: '<div class="zm-component-main-temp">'
            +'<div class="zm-component-edit">'
            +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
            +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
            +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
            +'</div>'
            +'<div class="zm-component-location">'
            +'<span>x:</span><span class="zm-component-location-x"></span> '
            +'<span> , y:</span><span class="zm-component-location-y"></span>'
            +'<span> , w:</span><span class="zm-component-location-w"></span>'
            +'<span> , h:</span><span class="zm-component-location-h"></span>'
            +'</div>'
            +'<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>'
            +'</div>'
        },
        row:{
            line:'<div class="zm-row-line"></div>',
            resize:'<div class="zm-row-resize"><span class="fa fa-arrows-v"></span></div>',
            type:'',
            html:'<div class="zm-row" style="width:1200px;" data-zm-pageid="">'
            +'<div class="zm-row-type"><span>header(public)</span></div>'
            +'<div class="zm-row-resize"><span class="fa fa-arrows-v"></span></div>'
            +'</div>'
        }
    },
    //全局扩展属性方法
    globalMethod:{//ye写  2016/3/27
    　  lowerStr:function (str){ //作用,把驼峰命名方式的css属性名改为以短横杠命名方式的属性名.
      var a=/[A-Z]/g,b;
       if(a.test(str)){
        b=lowerStrSon(str);
        if(a.test(b)){
            lowerStr(b);
        }else{
            return b;
        }
      }else{
           return str;
       }
       function lowerStrSon(str){
        return str.replace(/[A-Z]/g,function(martch,offset,str){
            return "-"+martch.toLowerCase();
        });
       }
       },
        getCurrentStyle:function (obj,attr){//ye  2017/2/23
            if(obj&&obj.currentStyle){
                return obj.currentStyle;
            }else {
                return getComputedStyle(obj,null);
            }
        },
        getCurrentStyleValue:function (obj,attr){//ye  2017/2/23
            if(obj&&obj.currentStyle){
                return obj.currentStyle[attr];
            }else {
                return getComputedStyle(obj,null)[attr];
            }
        },
        array:function(n){//ye  2017/5/4
          return Array.prototype.slice.call(this,n||0);
        },
        parseInt:function(str){
            return Number(str.replace(/[a-zA-Z]+/gi,""));
        },
        initialize_color_html_callback : function (string,string1){//ye 2017/2/23.
            var b="",e;
            e=$('<div class="zm-edit-text-color">'
                +'<div><span class="zm-edit-text-title" style="width:70px;vertical-align: middle;text-align: center;"></span>'//<br>这层div原先是label标签，给替换了。出错容易点
                +'<div class="zm-edit-slider" id="zm-edit-text-opacity" style="display: inline-block;padding: 0px;">'
                +'<span class="zm-edit-slider-parent" style="width : 100px;" ><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover" style="width: 59px;"></span> </span>'
                + '<input type="text" class="zm-edit-slider-val" maxlength="3" value="100" style="background-color: #ececec">'
                +'<i style="margin-left: 8px;">%</i>'
                + '</div>'
                +'<div class="zm-colorPicker" data-zm-color-type="'+string1+'" style="top: 15px;right: 0px">'
                +'<span class="zm-colorPicker-switch" ></span></div></div>'
                +'</div>');
            string.length==8?e.find(".zm-edit-text-title").css("width",69+"px"):e.find(".zm-edit-text-title").css("width",70+"px");
            if(string.length>6){
                for(var m=0;m<string.length;m++){
                    if(m==4) {
                        b=b+"<br/>"+string[m]
                    }else{
                        b=b+string[m]
                    }
                }
                string=b;
            }
            e.find(".zm-edit-text-title").html(string)
            e.find("input").hover(function(){
            $(this).css("background-color","#dbefed");
            },function(){
            $(this).css("background-color","#ececec");
            });
            return  e;
        },
        initialize_radius_html_callback:function (){//ye 2016/2/23
           return $('<div style="margin-top: 22px;">'
               +'<span class="zm-edit-text-title">四周弧度(°)</span>'
               +'<div class="zm-edit-border-radius-box" style=" margin: 35px 0 45px 0;">'
               +'<input class="zm-edit-radius-val" data-zm-radius="tl" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="tr" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="br" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="bl" maxlength="2">'
               +'<div class="zm-edit-border-radius "style="position: relative">'
               +'<div></div>'
               +'<div></div>'
               +'<div></div>'
               +'<div></div>'
               +'</div>'
               +'</div>'
               +'</div>');
                } ,
        initialize_slider_html_callback:function (string) {//ye 2016/2/23
            var b = "", e;
            if (string.length > 6) {
                for (var m = 0; m < string.length; m++) {
                    if (m == 4) {
                        b = b + "<br>" + string[m]
                    } else {
                        b = b + string[m]
                    }
                }
                string = b;
            }
            // if(string=="间隔线宽度"){debugger}
            e = $('<div class="zm-edit-slider ss" id="zm-edit-text-opacity" style="margin-right: 5px;">'
                + '<span class="zm-edit-text-title" style="width:70px;vertical-align: middle;text-align: center"><i style="font-size: 12px"> (像素) </i><br>' + string + '</span>'//<br>
                + '<span class="zm-edit-slider-parent" style="width:150px;" ><span class="zm-edit-slider-child" style="width:14px;"></span><span class="zm-edit-slider-child-hover" style="width: 59px;"></span></span>'
                + '<input type="text" class="zm-edit-slider-val" maxlength="2" style="background-color: #ececec;">'
                + '</div>');
            e.find("input").hover(function () {
                $(this).css("background-color", "#dbefed");
            }, function () {
                $(this).css("background-color", "#ececec");
            });
            return e
        },
        main_child_childall_border_style_callback :function (){//ye 2016/2/23
        return $('<div style="position:relative;">'
            +'<span class="zm-edit-text-title" style="margin-top: 20px;">线条类型</span>'
            +'<div class="zm-edit-border-style" style="width:216px;min-height: 30px;;border:1px solid #b9b9b9;margin-top: 15px;left: 75px;position:absolute;top: 0px;border-radius: 5px;z-index: 1;background-color: #fff;">'
            +'<i style="border: 7px solid #666666;border-left: 4px solid transparent;border-right: 4px solid transparent;border-bottom: 5px solid transparent;position: absolute;top:11px;right: 15px;z-index:2;"></i>'
            +'<span style="border:1px solid  #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//实线
            +'<span style="border:3px double #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//双线
            +'<span style="border:1px dotted #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//点状
            +'<span style="border:1px dashed #000; width: 168px;height: 0px;display:block;margin-top:13px;"></span>'//虚线
            +'</div>'
            +'<div class="zm-edit-border-styleclone" style="width:216px;min-height: 80px;;border:1px solid #b9b9b9;margin-top: 15px;left: 75px;position:absolute;top: 0px;border-radius: 5px;z-index: 1;background-color: #fff;box-shadow:1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0;display: none">'
            +'<i style="border: 7px solid #666666;border-left: 4px solid transparent;border-right: 4px solid transparent;border-bottom: 5px solid transparent;position: absolute;top:11px;right: 15px;z-index:2;"></i>'
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px solid  #000; width: 168px;height: 0px;display:block;"></i></span>'//实线
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:3px double  #000; width: 168px;height: 0px;display:block;"></i></span>'//双线
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px dotted  #000; width: 168px;height: 0px;display:block;"></i></span>'//点状
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px dashed  #000; width: 168px;height: 0px;display:block;"></i></span>'//虚线
            +'</div>'
            +'</div>');
            },
    },
    //编辑器标志
    flag:{
        isComponentController:false,
        isShiftKeyDown:false
    },
    //初始化编辑器
    init:function(){
        //zmEditor.template.getInfoById(103);//根据id获取模板数据
        //zmEditor.getNavigationPageById();//根据id获取页面数据
        zmEditor.component.init();//初始化右侧组件列表
        zmEditor.template.getAllList();//获取模板列表
        zmEditor.setRuler(1200);//设置网站头部刻度尺
    },
    //组件相关方法
    component:{
        //初始化组件列表
        init:function(){
            $('.zm-components-ul li').each(function(){
                var _thisType = $(this)
                zmEditor.arr.componentTypes[_thisType.attr("data-zm-component-type")]=_thisType.text()
            })
             zmEditor.arr.componentsList = {"news":[{"fComponentType":"35","fComponentTypeName":"新闻列表","list":[{"fId":"165","fName":"新闻列表样式","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main\">\r\n    <div class=\"zm-component-news-content\"  data-newsType=\"wordList\" data-newsNum = \"4\">\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">习近平同特朗普举行中美元首第二场正式会晤</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">俄罗斯战舰正驶向美海军发射导弹的区域</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">不赚钱的特斯拉市值超越了百年福特</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">霹雳行动！直击武警官兵山林地捕歼战斗</a></div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"213","fName":"新闻简讯样式","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"titleNews\" data-newsNum = \"2\">\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-title\"><a href=\"#\" style=\"border-bottom:1px solid\">成都将打造全球首个大熊猫互动体验式博物馆</a></div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n                这几句css就可以，不要加上去的容器一定要写了宽度的\r\n                注意：这里实现的是“超出长度”，而不...<a href=\"#\">简讯</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-title\"><a href=\"#\"  style=\"border-bottom:1px solid\">特别的情人节礼物《塔基熊猫3：猎龙》测试资格发放</a></div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n                这几句css就可以，不要加上去的容器一定要写了宽度的\r\n                注意：这里实现的是“超出长度”，而不...<a href=\"#\">简讯</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"227","fName":"图片新闻简讯","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"picLNews\">\r\n        <div class=\"zm-component-news-box\" style=\"display: flex\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 110px;height: 85px;padding-right:10px\">\r\n                <img src=\"imgs/carousel04.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\" style=\"flex: 1;overflow: hidden\">\r\n            <div class=\"zm-component-news-title\">\r\n                <a href=\"#\" style=\"border: none\">震惊13亿中国人！潜水员在阳澄湖下做出这种事</a>\r\n            </div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n                这几句css就可以，不要加上去的容器一定要写了宽度的\r\n                注意...\r\n            </div>\r\n            <div class=\"zm-component-news-interact\">\r\n                <span class=\"zm-component-news-praise\">点赞(<i>1</i>)</span>\r\n                <span class=\"zm-component-news-transmit\">转发(<i>3</i>)</span>\r\n                <span class=\"zm-component-news-collect\">收藏</span>\r\n                <span class=\"zm-component-news-comment\">评论(<i>2</i>)</span>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\" style=\"display: flex\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 110px;height: 85px;padding-right:10px\">\r\n                <img src=\"imgs/carousel05.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\" style=\"flex: 1;overflow: hidden\">\r\n                <div class=\"zm-component-news-title\">\r\n                    <a href=\"#\" style=\"border: none\">上海市金山区某知名企业员工宿舍楼下孔雀为何频频夜啼</a>\r\n                </div>\r\n                <div class=\"zm-component-news-source\">\r\n                    <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n                </div>\r\n                <div class=\"zm-component-news-words\">\r\n                    据一位不愿透露姓名的老张先生说，他们宿舍楼下孔雀....\r\n                </div>\r\n                <div class=\"zm-component-news-interact\">\r\n                    <span class=\"zm-component-news-praise\">点赞(<i>9</i>)</span>\r\n                    <span class=\"zm-component-news-transmit\">转发(<i>5</i>)</span>\r\n                    <span class=\"zm-component-news-collect\">收藏</span>\r\n                    <span class=\"zm-component-news-comment\">评论(<i>2</i>)</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"228","fName":"图片新闻详情","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"picTNews\">\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 100%;height: 130px;padding-bottom:10px\">\r\n                <img src=\"imgs/carousel03.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\">\r\n                <div class=\"zm-component-news-title\">\r\n                    <a href=\"#\" style=\"border: none;color:#333\">晚霞景色</a>\r\n                </div>\r\n                <div class=\"zm-component-news-source\">\r\n                    <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n                </div>\r\n                <div class=\"zm-component-news-words\">\r\n                   晚霞映照下的自然，别有一番情致。晚霞下的万物都被镀上了一层金色与红色夹杂的色彩，海绵变成了一半\r\n                    是水一半是火焰的奇妙风景。山峰也在青绿中透出灿烂的红妆，城市华灯初上，被晚霞多去了其繁华的背景。\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"}]}],"container":[{"fComponentType":"52","fComponentTypeName":"实心容器","list":[{"fId":"361","fName":"实心容器0","fPreviewImg":"","fContext":"<div style='width:50px;height:50px;background-color:#4AB1A7;'></div>"},{"fId":"362","fName":"实心容器1","fPreviewImg":"","fContext":"<div style='width:50px;height:50px;background-color:#4AB1A7;border-radius:3px;'></div>"},{"fId":"363","fName":"实心容器2","fPreviewImg":"","fContext":"<div style='width:50px;height:50px;background-color:#4AB1A7;border-radius:5px;'></div>"},{"fId":"364","fName":"实心容器3","fPreviewImg":"","fContext":"<div style='width:50px;height:50px;background-color:#4AB1A7;border-radius:50%;'></div>"},{"fId":"367","fName":"实心容器6","fPreviewImg":"","fContext":"<div style=\"width:50px;height:100px;background-color:#337AB7;border-radius；5px;\"></div>"},{"fId":"365","fName":"实心容器4","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#337AB7;border-radius:0px 0px 0px 3px\"></div>"},{"fId":"366","fName":"实心容器5","fPreviewImg":"","fContext":"<div style=\"width:100px;height:50px;background-color:#337AB7;\"></div>"},{"fId":"368","fName":"实心容器7","fPreviewImg":"","fContext":"<div style=\"width:100px;height:50px;background-color:#7446e4;border-radius: 5px;\"></div>"},{"fId":"369","fName":"实心容器8","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#7446e4;border-radius:0px 5px 0px 0px;\"></div>"},{"fId":"370","fName":"实心容器9","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#f57b41;border-radius: 10px 5px  10px 5px ;\"></div>"},{"fId":"371","fName":"实心容器10","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#f57b41;border-radius: 10px 0px  0px 0px ;\"></div>"},{"fId":"372","fName":"实心容器11","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#f57b41;border-radius:  0px 10px  0px 10px ;\"></div>"},{"fId":"373","fName":"实心容器12","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;background-color:#f57b41;\"></div>"}]},{"fComponentType":"53","fComponentTypeName":"空心容器","list":[{"fId":"375","fName":"空心容器1","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 4px solid #f9ba2c;border-radius: 10px 10px  10px 10px ;\"></div>"},{"fId":"376","fName":"空心容器0","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 4px solid #f9ba2c;border-radius: 10px 10px  0px 0px ;\"></div>"},{"fId":"377","fName":"空心容器2","fPreviewImg":"","fContext":"<div style=\"width:100px;height:50px;border: 4px solid #f9ba2c;\"></div>"},{"fId":"378","fName":"空心容器4","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 2px dashed #ec3d86;border-radius: 5px 5px 5px 5px ;\"></div>"},{"fId":"380","fName":"空心容器6","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 2px dashed #ec3d86;border-radius: 50%;\"></div>"},{"fId":"382","fName":"空心容器8","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 1px dashed #bbbd33;\"></div>"},{"fId":"383","fName":"空心容器7","fPreviewImg":"","fContext":"<div style=\"width:100px;height:50px;border: 1px dashed #bbbd33;border-radius: 1px 1px 1px 1px;\"></div>"},{"fId":"384","fName":"空心容器9","fPreviewImg":"","fContext":"<div style=\"width:50px;height:50px;border: 1px dashed #bbbd33;border-radius: 0px 15px 0px 15px;\"></div>"}]}],"img":[{"fComponentType":"7","fComponentTypeName":"普通图片","list":[{"fId":"80","fName":"图片08","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\" style=\"width:300px;height:80px\">\r\n<div class=\"zm-component-img-content\"  data-radius=\"no\">\r\n    <img src=\"imgs/test01.png\" />\r\n</div>\r\n</div>"},{"fId":"168","fName":"正六边形","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\"  style=\"width:110px;height:110px\">\r\n    <div  class=\"zm-component-img-content\" style=\"width:100%;height:100%; position: relative;overflow: hidden;background-image: url(imgs/carousel007.png);background-size: 100% 100%;\" data-radius=\"no\" data-type=\"hexagon\">\r\n        <div style=\"height: 100%;width: 7%;background: #fff;position: absolute\"></div>\r\n        <div style=\"height:100%;width:7%;background: #fff;position: absolute;right:0;\"></div>\r\n        <div style=\"width: 34.5%;height: 60%;background-color: #fff;position: absolute;transform: rotate(60deg);top: -30%;\"></div>\r\n        <div style=\"width: 34.5%;height: 60%;background-color: #fff;position: absolute;transform: rotate(120deg);top: -30%;right: 0;\"></div>\r\n        <div style=\"width: 34.5%;height: 60%;background-color: #fff;position: absolute;transform: rotate(-60deg);bottom: -30%;\"></div>\r\n        <div style=\"width: 34.5%;height: 60%;background-color: #fff;position: absolute;transform: rotate(-120deg);bottom: -30%;right: 0;\"></div>\r\n<div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(30deg);top: 13%;left: 47%;\"></div>\r\n        <div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(90deg);top: 50%;left: 68.1%;\"></div>\r\n        <div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(150deg);top: 86.5%;left: 46%;\"></div>\r\n        <div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(210deg);top: 86.8%;left: 4%;\"></div>\r\n        <div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(270deg);top: 50%;left: -17.8%;\"></div>\r\n        <div class=\"zm-component-img-hexagonLine\" style=\"transform: rotate(330deg);top: 12.5%;left: 4%;\"></div>\r\n       \r\n<img src=\"imgs/carousel007.png\"  style=\"display:none\"/>\r\n    </div></div>"},{"fId":"169","fName":"长方形附带边框","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\" data-type=\"\" style=\"width: 168px;height: 110px;\"><div class=\"zm-component-img-content zm-component-img-border10\"><img src='imgs/carousel-ad003.jpg'/></div></div>"},{"fId":"167","fName":"正菱形","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\" style=\"width:140px;height:140px;\">\r\n          <div class=\"zm-component-img-content  zm-component-img-rhombus\"  data-type=\"rhombus\" data-radius=\"no\">\r\n          <img src=\"imgs/carousel005.png\"/>\r\n          </div>\r\n      </div>"},{"fId":"170","fName":"圆形图片附带边框","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\" style=\"width: 138px;height: 140px;\">\r\n    <div class=\"zm-component-img-content  zm-component-img-circleBd5\" data-type=\"\">\r\n        <img src=\"imgs/carousel-product008.jpg\">\r\n    </div>\r\n</div>"},{"fId":"171","fName":"普通圆形","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\"  style=\"width: 98px;height: 100px;\">\r\n    <div class=\"zm-component-img-content  zm-component-img-bdRadius50\"  data-type=\"\" data-radius=\"no\">\r\n        <img  src=\"imgs/carousel004.png\">\r\n    </div>\r\n</div>"},{"fId":"172","fName":"椭圆图片","fPreviewImg":"","fContext":"<div class=\"zm-component-img-main\"  style=\"width: 173px;height: 100px;\">\r\n    <div class=\"zm-component-img-content  zm-component-img-bdRadius50\"  data-type=\"\" data-radius=\"no\">\r\n        <img src=\"imgs/carousel04.png\">\r\n    </div>\r\n</div>"}]},{"fComponentType":"8","fComponentTypeName":"特殊图片","list":[{"fId":"114","fName":"图片01","fPreviewImg":"http://image.zuma.com/upload/835054718006961567.jpg","fContext":"<div class=\"zm-component-img-main\">\r\n    <div class=\"zm-component-spImg-content\">\r\n            <img src=\"imgs/carousel009.png\" />\r\n    </div>\r\n</div>"}]}],"product":[{"fComponentType":"19","fComponentTypeName":"单一产品","list":[{"fId":"254","fName":"单一商品_横向_01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-product-row zm-product-goods clearFloat\">\r\n    <div class=\"zm-edit-components-product-title clearFloat\">\r\n        <div class=\"zm-edit-components-product-title-box clearFloat\">\r\n            <div class=\"zm-edit-components-product-NE\">三星27英寸1800R震撼曲率爱眼低蓝光曲面显示器</div>\r\n            <div class=\"zm-edit-components-product-RP\">零售价 ¥888.00</div>\r\n            <div class=\"zm-edit-components-product-MP\">市场指导价 ¥998.00</div>\r\n            <div class=\"zm-edit-components-product-BT\"><span>加入购物车</span></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-product-image clearFloat\">\r\n        <div class=\"zm-edit-components-product-wrap\">\r\n            <img src=\"imgs/product.png\" class=\"suspension-magnify\">\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"255","fName":"单一商品_纵向_01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-product-col zm-product-goods clearFloat\">\r\n    <div class=\"zm-edit-components-product-title clearFloat\">\r\n        <div class=\"zm-edit-components-product-title-box clearFloat\">\r\n            <div class=\"zm-edit-components-product-NE\">三星27英寸1800R震撼曲率爱眼低蓝光曲面显示器</div>\r\n            <div class=\"zm-edit-components-product-RP\">零售价 ¥888.00</div>\r\n            <div class=\"zm-edit-components-product-MP\">市场指导价 ¥998.00</div>\r\n            <div class=\"zm-edit-components-product-BT\"><span>加入购物车</span></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-product-image clearFloat\">\r\n        <div class=\"zm-edit-components-product-wrap\">\r\n            <img src=\"imgs/product.png\" class=\"product-magnify\">\r\n        </div>\r\n    </div>\r\n</div>"}]},{"fComponentType":"20","fComponentTypeName":"产品列表","list":[{"fId":"357","fName":"产品列表","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-list list_product clearFloat\" style=\"width:300px;height:175px;background-color:#efefef\"><img src=\"./imgs/index/productlist.png\" style=\"width:100%;heigh:100%\"></div>"}]},{"fComponentType":"21","fComponentTypeName":"产品类别","list":[]}],"nav":[{"fComponentType":"33","fComponentTypeName":"横向导航","list":[{"fId":"129","fName":"普通横向导航栏_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_one zm_nav_general_cross_one_one zm_nav_general_cross_one_one_n\">\r\n    <ul class=\"zm-nav-001 clearFloat\">\r\n        <li>首页</li><span></span>\r\n        <li>企业动态</li><span></span>\r\n        <li>关于我们</li><span></span>\r\n        <li>所有产品</li><span></span>\r\n        <li>友情链接</li>\r\n    </ul>\r\n</div>"},{"fId":"120","fName":"普通横向导航栏_two","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_one zm_nav_general_cross_one_two zm_nav_general_cross_one_two_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"117","fName":"普通横向导航栏_three","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_one zm_nav_general_cross_one_three zm_nav_general_cross_one_three_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"116","fName":"普通横向导航栏_four","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_one zm_nav_general_cross_one_four zm_nav_general_cross_one_four_n \"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"119","fName":"普横向导five","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_one  zm_nav_general_cross_one_five  zm_nav_general_cross_one_five_n\"><ul class=\"zm-nav-001  clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"118","fName":"横向导航栏_cross_two_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_two zm_nav_general_cross_two_one zm_nav_general_cross_two_one_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"125","fName":"横向导航栏_cross_two_two","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_two zm_nav_general_cross_two_two zm_nav_general_cross_two_two_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"121","fName":"横向导航栏cross_three_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_three zm_nav_general_cross_three_one zm_nav_general_cross_three_one_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"122","fName":"横向导航栏cross_three_two","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_three zm_nav_general_cross_three_two zm_nav_general_cross_three_two_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"123","fName":"横向导航栏cross_three_te","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_three zm_nav_general_cross_three_three zm_nav_general_cross_three_three_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"124","fName":"横向导航栏cross_three_fr","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_cross_three zm_nav_general_cross_three_four zm_nav_general_cross_three_four_n\"><ul class=\"zm-nav-001 clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"}]},{"fComponentType":"34","fComponentTypeName":"纵向导航","list":[{"fId":"162","fName":"普通纵导vertical_one_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_vertical_one zm_nav_general_vertical_one_one zm_nav_general_vertical_one_one_n\"><ul class=\"clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"163","fName":"普通纵导vertical_two_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_vertical_two zm_nav_general_vertical_two_one zm_nav_general_vertical_two_one_n\"><ul class=\"clearFloat\"><li>首页</li><span></span><li>企业动态</li><span></span><li>关于我们</li><span></span><li>所有产品</li><span></span><li>友情链接</li></ul></div>"},{"fId":"164","fName":"普纵导vertical_thr_one","fPreviewImg":"","fContext":"<div class=\"zm-nav zm_nav_general_vertical_three zm_nav_general_vertical_three_one zm_nav_general_vertical_three_one_n\">\r\n    <ul class=\"\"> \r\n        <li >首页</li ><span></span>\r\n        <li >企业动态</li ><span></span>\r\n        <li >关于我们</li ><span></span>\r\n        <li >所有产品</li ><span></span>\r\n        <li >友情链接</li >\r\n    </ul >\r\n</div>"}]}],"shape":[{"fComponentType":"3","fComponentTypeName":"直线","list":[{"fId":"144","fName":"双垂直实线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"dbLine\">\r\n                <svg class=\"zm-component-shape-line vertLine\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"0,0\" d=\"M2 0 L2 200\" />\r\n                    </g>\r\n                </svg>\r\n<svg class=\"zm-component-shape-line vertLine\">\r\n                    <g>\r\n       \r\n                        <path stroke-dasharray=\"0,0\" d=\"M2 0 L2 200\" stroke=\"#aeaeae\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"145","fName":"单垂直虚线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"sgLine\">\r\n                <svg class=\"zm-component-shape-line vertLine\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"10,5\" d=\"M2 0 L2 200\" stroke=\"#aeaeae\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"146","fName":"单垂直实线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"sgLine\">\r\n                <svg class=\"zm-component-shape-line vertLine\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"0,0\" d=\"M2 0 L2 200\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"173","fName":"双水平实线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"dbLine\" style=\"width:200px\">\r\n                <svg class=\"zm-component-shape-line\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"0,0\" d=\"M0 2 200 2\" />\r\n                \r\n                    </g>\r\n                </svg>\r\n<svg class=\"zm-component-shape-line\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"0,0\" d=\"M0 2 200 2\" stroke=\"#aeaeae\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"174","fName":"单水平虚线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"sgLine\">\r\n                <svg class=\"zm-component-shape-line\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"2,2\" d=\"M0 2 200 2\" stroke=\"#aeaeae\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"175","fName":"单水平实线","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main\">\r\n            <div class=\"zm-component-shape-box\" data-type=\"sgLine\">\r\n                <svg class=\"zm-component-shape-line\">\r\n                    <g>\r\n                        <path stroke-dasharray=\"0,0\" d=\"M0 2 200 2\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n        </div>"}]},{"fComponentType":"4","fComponentTypeName":"实体块","list":[{"fId":"143","fName":"图形-六边形","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height:82px;width:74px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\" viewBox=\"0 0 74 82\">\r\n<g>\r\n                    <path d=\"M36.982,81.008l-35-20V21l35-20,35,20V61Z\"></path>\r\n</g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"185","fName":"图形-正方形","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:28px;height:28px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 28 28\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                   <g> <path d=\"M7,0H23a5,5,0,0,1,5,5V23a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V9.5V5A5,5,0,0,1,5,0Z\"></path></g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"186","fName":"图形-三角形","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height:28;width:32px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\" viewBox=\"0 0 32 28\">\r\n                    <g><path d=\"M16,0L29.987,28H2.013Z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"187","fName":"图形-五角星","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height: 28px;width: 28px;\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 28 28\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g><path d=\"M14,1l4.614,8.485L28,11.313l-6.532,7.072L22.651,28,14,23.885,5.348,28l1.186-9.614L0,11.313,9.386,9.485,14,1\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"188","fName":"图形-蕾丝边","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\"  style=\"height: 28px;width: 28px;\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 28 28\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g><path d=\"M26.826,10.1a4.289,4.289,0,0,0-3.2-3.01,4.322,4.322,0,0,0-1.584-4.114,4.255,4.255,0,0,0-4.652-.406,4.267,4.267,0,0,0-7.678-.307,4.253,4.253,0,0,0-4.365.384A4.32,4.32,0,0,0,3.6,6.691a4.319,4.319,0,0,0-2.383,7.191A4.319,4.319,0,0,0,3.46,21.119,4.321,4.321,0,0,0,5.123,25.2a4.253,4.253,0,0,0,4.357.47,4.266,4.266,0,0,0,7.527.148,4.253,4.253,0,0,0,4.372-.3A4.32,4.32,0,0,0,23.2,21.508a4.285,4.285,0,0,0,3.374-2.815,4.33,4.33,0,0,0-.852-4.328,4.328,4.328,0,0,0,1.1-4.27\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"189","fName":"图形-对话框A","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height: 35px;width: 39px;\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 39 35\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g><path d=\"M0,1H39V29H6.954C6.876,29,0,34,0,34V1Z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"190","fName":"图形-对话框B","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height: 28px;width: 48px;\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 48 28\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n<g><path d=\"M12,0H43a5,5,0,0,1,5,5V23a5,5,0,0,1-5,5H12a5,5,0,0,1-5-5V16.957c0-.034-7-2.994-7-3.015,0-.048,7-3.97,7-3.952V5A5,5,0,0,1,12,0Z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"191","fName":"图形-对话框C","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"height: 28px;width: 50px;\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon\" viewBox=\"0 0 50 28\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g><path d=\"M0,0H43V9.943c0-.035,7,4.046,7,4.064,0,0.067-7,4.927-7,4.949V28H0V0Z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"}]},{"fComponentType":"15","fComponentTypeName":"图标","list":[{"fId":"192","fName":"图形-图标1","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                <g><path d=\"M16.25 5c0.69 0 1.25-0.56 1.25-1.25v-2.5c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v2.5c0 0.69 0.56 1.25 1.25 1.25zM25.972 8.294l1.768-1.768c0.488-0.488 0.488-1.279 0-1.768s-1.279-0.488-1.768 0l-1.768 1.768c-0.488 0.488-0.488 1.279 0 1.768s1.279 0.488 1.768 0zM1.25 17.5h2.5c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25h-2.5c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25zM27.5 16.25c0 0.69 0.56 1.25 1.25 1.25h2.5c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25h-2.5c-0.69 0-1.25 0.56-1.25 1.25zM6.527 8.294c0.488 0.488 1.279 0.488 1.768 0s0.488-1.279 0-1.768l-1.768-1.768c-0.488-0.488-1.279-0.488-1.768 0s-0.488 1.279 0 1.768l1.768 1.768zM31.25 20c-0.415 0-0.825 0.029-1.234 0.088-1.31-1.787-3.057-3.151-5.036-4.023-0.101-4.736-3.97-8.564-8.73-8.564-4.824 0-8.75 3.926-8.75 8.75 0 1.362 0.339 2.637 0.898 3.784-4.658 0.19-8.398 4.014-8.398 8.716 0 4.824 3.926 8.75 8.75 8.75 1.069 0 2.116-0.195 3.102-0.573 2.262 1.973 5.14 3.073 8.148 3.073 3.011 0 5.885-1.1 8.148-3.073 0.986 0.378 2.033 0.573 3.102 0.573 4.824 0 8.75-3.926 8.75-8.75s-3.926-8.75-8.75-8.75zM20 15c-3.589 0-6.914 1.548-9.248 4.16-0.464-0.872-0.752-1.852-0.752-2.91 0-3.452 2.798-6.25 6.25-6.25 3.11 0 5.669 2.279 6.149 5.254-0.783-0.156-1.582-0.254-2.399-0.254z\"></path></g>\r\n\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"193","fName":"图形-图标2","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                  <g><path d=\"M20 0c-11.047 0-20 8.953-20 20 0 11.045 8.953 20 20 20 11.045 0 20-8.955 20-20 0-11.047-8.955-20-20-20zM20 35c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM12.5 27.5l10-5 5-10-10 5-5 10z\"></path>\r\n                </svg></g>\r\n            </div>\r\n        </div>"},{"fId":"194","fName":"图形-图标3","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M11.875 23.75c0 4.487 3.638 8.125 8.125 8.125s8.125-3.638 8.125-8.125-3.638-8.125-8.125-8.125-8.125 3.638-8.125 8.125zM37.5 10h-8.75c-0.625-2.5-1.25-5-3.75-5h-10c-2.5 0-3.125 2.5-3.75 5h-8.75c-1.375 0-2.5 1.125-2.5 2.5v22.5c0 1.375 1.125 2.5 2.5 2.5h35c1.375 0 2.5-1.125 2.5-2.5v-22.5c0-1.375-1.125-2.5-2.5-2.5zM20 34.844c-6.127 0-11.094-4.967-11.094-11.094s4.967-11.094 11.094-11.094c6.127 0 11.094 4.967 11.094 11.094s-4.967 11.094-11.094 11.094zM37.5 17.5h-5v-2.5h5v2.5z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"195","fName":"图形-图标4","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M37.5 0h2.5v28.75c0 3.452-3.918 6.25-8.75 6.25s-8.75-2.798-8.75-6.25c0-3.452 3.918-6.25 8.75-6.25 2.449 0 4.662 0.719 6.25 1.877v-14.377l-20 4.444v19.306c0 3.452-3.918 6.25-8.75 6.25s-8.75-2.798-8.75-6.25c0-3.452 3.917-6.25 8.75-6.25 2.449 0 4.662 0.719 6.25 1.877v-24.377l22.5-5z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"196","fName":"图形-图标5","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M25.732 29.268l-8.232-8.232v-11.036h5v8.964l6.768 6.768zM20 0c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zM20 35c-8.284 0-15-6.716-15-15s6.716-15 15-15c8.284 0 15 6.716 15 15s-6.716 15-15 15z\"></path>\r\n                </svg></g>\r\n            </div>\r\n        </div>"},{"fId":"197","fName":"图形-图标6","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M2.5 0h15v2.5h-15zM22.5 0h15v2.5h-15zM37.188 12.5h-2.188v-10h-10v10h-10v-10h-10v10h-2.188c-1.547 0-2.813 1.266-2.813 2.813v21.875c0 1.547 1.266 2.813 2.813 2.813h11.875c1.547 0 2.813-1.266 2.813-2.813v-14.688h5v14.688c0 1.547 1.266 2.813 2.813 2.813h11.875c1.547 0 2.813-1.266 2.813-2.813v-21.875c0-1.547-1.266-2.813-2.813-2.813zM13.594 37.5h-9.688c-0.773 0-1.406-0.563-1.406-1.25s0.633-1.25 1.406-1.25h9.688c0.773 0 1.406 0.563 1.406 1.25s-0.633 1.25-1.406 1.25zM21.25 20h-2.5c-0.688 0-1.25-0.563-1.25-1.25s0.563-1.25 1.25-1.25h2.5c0.688 0 1.25 0.563 1.25 1.25s-0.563 1.25-1.25 1.25zM36.094 37.5h-9.688c-0.773 0-1.406-0.563-1.406-1.25s0.633-1.25 1.406-1.25h9.688c0.773 0 1.406 0.563 1.406 1.25s-0.633 1.25-1.406 1.25z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"198","fName":"图形-图标7","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M40 22.5v-2.5h-7.55c-0.229-2.839-1.242-5.431-2.8-7.51h6.326l2.737-10.947-2.425-0.606-2.263 9.053h-6.823c-0.035-0.027-0.070-0.054-0.105-0.080 0.262-0.762 0.405-1.579 0.405-2.429 0-4.131-3.358-7.48-7.5-7.48s-7.5 3.349-7.5 7.48c0 0.85 0.143 1.668 0.405 2.429-0.035 0.027-0.070 0.053-0.105 0.080h-6.823l-2.263-9.053-2.425 0.606 2.737 10.947h6.326c-1.558 2.079-2.571 4.67-2.8 7.51h-7.55v2.5h7.554c0.149 1.784 0.606 3.469 1.314 4.99h-4.843l-2.737 10.947 2.425 0.606 2.263-9.053h4.389c2.293 3.048 5.758 4.99 9.635 4.99s7.342-1.942 9.635-4.99h4.389l2.263 9.053 2.425-0.606-2.737-10.947h-4.843c0.708-1.521 1.165-3.206 1.314-4.99h7.554z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"199","fName":"图形-图标8","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M30 24.999l-7.141-7.141 17.141-12.857-5-5-21.427 8.572-6.746-6.746c-1.945-1.944-4.66-2.41-6.035-1.035s-0.909 4.091 1.036 6.035l6.746 6.745-8.573 21.429 5 5 12.859-17.143 7.142 7.142v9.999h5l2.5-7.5 7.5-2.5v-5l-9.999 0z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"200","fName":"图形-图标9","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M40 22.5l-5-10h-7.5v-5c0-1.375-1.125-2.5-2.5-2.5h-22.5c-1.375 0-2.5 1.125-2.5 2.5v20l2.5 2.5h3.171c-0.426 0.736-0.671 1.589-0.671 2.5 0 2.761 2.239 5 5 5s5-2.239 5-5c0-0.911-0.245-1.764-0.671-2.5h13.841c-0.426 0.736-0.671 1.589-0.671 2.5 0 2.761 2.239 5 5 5s5-2.239 5-5c0-0.911-0.245-1.764-0.671-2.5h3.171v-7.5zM27.5 22.5v-7.5h5.182l3.75 7.5h-8.932z\"></path>\r\n                    </svg></g>\r\n            </div>\r\n        </div>"},{"fId":"201","fName":"图形-图标10","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon littleShapeIcon\"  viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\"><g>\r\n                    <path d=\"M27.5 40h12.5l-10-40h-7.5l1.25 10h-7.5l1.25-10h-7.5l-10 40h12.5l1.25-10h12.5l1.25 10zM14.375 25l1.25-10h8.75l1.25 10h-11.25z\"></path></g>\r\n                </svg>\r\n            </div>\r\n        </div>"}]},{"fComponentType":"28","fComponentTypeName":"特殊形状","list":[{"fId":"202","fName":"图形-特殊1","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g><path d=\"M15 0l-15 20h15l-10 20 35-25h-20l15-15z\"></path></g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"203","fName":"图形-特殊2","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M0 0h5v40h-5v-40z\"></path>\r\n                    <path d=\"M32.5 25.117c3.227 0 6.038-0.781 7.5-1.934v-20c-1.462 1.153-4.273 1.934-7.5 1.934s-6.038-0.781-7.5-1.934v20c1.462 1.153 4.273 1.934 7.5 1.934z\"></path>\r\n                    <path d=\"M23.75 1.271c-1.832-0.779-4.512-1.271-7.5-1.271-3.765 0-7.044 0.781-8.75 1.934v20c1.706-1.153 4.985-1.934 8.75-1.934 2.988 0 5.668 0.492 7.5 1.271v-20z\"></path>\r\n                 </g></svg>\r\n            </div>\r\n        </div>"},{"fId":"204","fName":"图形-特殊3","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M30.918 21.254c-0.051-5.066 4.131-7.495 4.318-7.616-2.35-3.438-6.010-3.909-7.314-3.964-3.115-0.315-6.078 1.834-7.659 1.834-1.577 0-4.016-1.787-6.6-1.74-3.395 0.050-6.526 1.974-8.274 5.015-3.527 6.121-0.903 15.189 2.535 20.153 1.68 2.43 3.683 5.159 6.314 5.062 2.533-0.101 3.491-1.639 6.553-1.639s3.923 1.639 6.604 1.589c2.726-0.051 4.452-2.476 6.121-4.914 1.929-2.819 2.724-5.548 2.77-5.689-0.060-0.028-5.315-2.040-5.367-8.091zM25.881 6.388c1.396-1.694 2.338-4.043 2.081-6.388-2.011 0.082-4.448 1.339-5.891 3.029-1.295 1.499-2.428 3.892-2.124 6.189 2.245 0.175 4.536-1.141 5.934-2.831z\"></path></g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"207","fName":"图形-特殊6","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                <path d=\"M31.936 13.6c-7.561-5.619-10.167-10.118-11.936-13.6v0c-0 0-0-0-0-0v0c-1.769 3.482-4.375 7.98-11.936 13.6-12.892 9.581-0.757 22.956 9.912 15.595-0.695 4.568-3.068 7.897-5.477 9.331v1.474h15.001v-1.474c-2.409-1.434-4.782-4.764-5.477-9.331 10.669 7.361 22.805-6.013 9.913-15.595z\"></path>\r\n</g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"205","fName":"图形-特殊4","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M35 15c-1.375 0-2.5 1.125-2.5 2.5v10c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5v-10c0-1.375-1.125-2.5-2.5-2.5zM5 15c-1.375 0-2.5 1.125-2.5 2.5v10c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5v-10c0-1.375-1.125-2.5-2.5-2.5zM8.75 28.75c0 2.071 1.679 3.75 3.75 3.75v0 5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5v-5h5v5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5v-5c2.071 0 3.75-1.679 3.75-3.75v-13.75h-22.5v13.75z\"></path>\r\n                    <path d=\"M31.18 12.5c-0.38-3.433-2.305-6.398-5.063-8.189l1.251-2.502c0.309-0.617 0.058-1.368-0.559-1.677s-1.368-0.058-1.677 0.559l-1.256 2.511-0.326-0.13c-1.116-0.371-2.309-0.573-3.55-0.573s-2.434 0.201-3.55 0.573l-0.326 0.13-1.256-2.511c-0.309-0.617-1.060-0.868-1.677-0.559s-0.868 1.060-0.559 1.677l1.251 2.502c-2.758 1.791-4.684 4.756-5.063 8.189v1.25h22.431v-1.25h-0.070zM16.25 10c-0.69 0-1.25-0.56-1.25-1.25s0.558-1.248 1.247-1.25c0.001 0 0.002 0 0.004 0s0.001-0 0.002-0c0.689 0.002 1.247 0.561 1.247 1.25 0 0.69-0.56 1.25-1.25 1.25zM23.75 10c-0.69 0-1.25-0.56-1.25-1.25 0-0.689 0.558-1.248 1.247-1.25 0.001 0 0.001 0 0.002 0s0.002-0 0.004-0c0.689 0.001 1.247 0.56 1.247 1.25s-0.56 1.25-1.25 1.25z\"></path></g>\r\n                </svg>\r\n            </div>\r\n        </div>"},{"fId":"206","fName":"图形-特殊5","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M36.25 16.25c-1.11 0-2.108 0.483-2.794 1.25h-7.42l5.247-5.247c1.028 0.057 2.075-0.307 2.86-1.092 1.464-1.464 1.464-3.839 0-5.303s-3.839-1.464-5.303 0c-0.785 0.785-1.149 1.832-1.092 2.86l-5.247 5.247v-7.42c0.767-0.687 1.25-1.684 1.25-2.794 0-2.071-1.679-3.75-3.75-3.75s-3.75 1.679-3.75 3.75c0 1.11 0.483 2.108 1.25 2.794v7.42l-5.247-5.247c0.057-1.028-0.307-2.075-1.092-2.86-1.464-1.464-3.839-1.464-5.303 0s-1.464 3.839 0 5.303c0.785 0.785 1.832 1.149 2.86 1.092l5.247 5.247h-7.42c-0.687-0.767-1.684-1.25-2.794-1.25-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75c1.11 0 2.108-0.483 2.794-1.25h7.42l-5.247 5.247c-1.028-0.057-2.075 0.307-2.86 1.092-1.464 1.465-1.464 3.839 0 5.303s3.839 1.464 5.303 0c0.785-0.785 1.149-1.832 1.092-2.86l5.247-5.247v7.42c-0.767 0.687-1.25 1.684-1.25 2.794 0 2.071 1.679 3.75 3.75 3.75s3.75-1.679 3.75-3.75c0-1.11-0.483-2.108-1.25-2.794v-7.42l5.247 5.247c-0.057 1.028 0.307 2.075 1.092 2.86 1.465 1.464 3.839 1.464 5.303 0s1.464-3.839 0-5.303c-0.785-0.785-1.832-1.149-2.86-1.092l-5.247-5.247h7.42c0.687 0.767 1.684 1.25 2.794 1.25 2.071 0 3.75-1.679 3.75-3.75s-1.679-3.75-3.75-3.75z\"></path>\r\n                </g></svg>\r\n            </div>\r\n        </div>"},{"fId":"208","fName":"图形-特殊7","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M0 20c0 11.050 8.95 20 20 20s20-8.95 20-20-8.95-20-20-20-20 8.95-20 20zM4.167 20c0-1.283 0.15-2.533 0.442-3.725l3.725 3.725-0.833 5 3.333 3.333v4.575c-4.033-2.867-6.667-7.582-6.667-12.908zM16.358 4.592c1.167-0.283 2.383-0.425 3.642-0.425 1.392 0 2.742 0.183 4.025 0.517l-0.692 1.15 0.833 0.833h2.5l0.692-0.692c0.583 0.308 1.133 0.642 1.667 1.017l-1.525 0.508-1.667 1.667 1.667 0.833v0.833h-1.667v1.667c0 0 1.15 0.833 2.5 0.833 1.325 0 0.733-1.825 1.667-2.5 0.942-0.675 2.083-0.525 2.083-0.525l0.542 0.142c1.017 1.342 1.824 2.842 2.375 4.467v0.083c0 0-1.175-0.833-3.333-0.833s-4.167 0.833-4.167 0.833-2.35 0.683-2.5 2.5c-0.259 3.125 0.833 4.167 0.833 4.167l4.167 2.5v8.108c-2.725 2.225-6.208 3.558-10 3.558-1.792 0-3.508-0.292-5.117-0.842l4.283-9.992-0.833-4.167c0 0-3.308-4.167-5-4.167s-2.5 2.5-2.5 2.5l-1.667-3.333 5-3.333 2.5-6.667-0.308-1.242z\"></path>\r\n</g>\r\n                    </svg>\r\n            </div>\r\n        </div>"},{"fId":"209","fName":"图形-特殊8","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M20.833 31.25c0-0.733-0.125-1.433-0.359-2.083h4.876c-0.225 0.65-0.35 1.35-0.35 2.083 0 3.451 2.799 6.25 6.25 6.25s6.25-2.799 6.25-6.25c0-3.45-2.8-6.25-6.25-6.25h-13.75c-0.917 0-1.667-0.75-1.667-1.667s0.75-1.667 1.667-1.667h14.333c1.508 0 2.807-0.884 3.399-2.167 0.226-0.483 4.542-10.325 4.542-10.325 0.117-0.268 0.225-0.533 0.225-0.842 0-0.917-0.75-1.667-1.667-1.667l-26.017-0-0.7-2.158c-0.324-1.158-1.232-2.008-2.449-2.008h-7.083c-1.15 0-2.083 0.933-2.083 2.083s0.933 2.083 2.083 2.083h4.375c0.742 0 1.367 0.483 1.583 1.142l3.517 17.974c-1.924 1.059-3.225 3.118-3.225 5.468 0 3.451 2.799 6.25 6.25 6.25s6.25-2.799 6.25-6.25zM16.667 31.25c0 1.15-0.933 2.083-2.083 2.083s-2.083-0.933-2.083-2.083 0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083zM33.333 31.25c0 1.15-0.933 2.083-2.083 2.083s-2.083-0.933-2.083-2.083 0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083z\"></path>\r\n                    </g></svg>\r\n            </div>\r\n        </div>"},{"fId":"210","fName":"图形-特殊9","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M9.167 0.833c-0.675-0.417-1.617-0.833-2.5-0.833-3.683 0-6.667 3.008-6.667 6.725 0 5.375 5.725 7.292 9.167 9.942v1.25c0 5.042 3.575 9.242 8.333 10.208v6.042c0 0.917-0.75 1.667-1.667 1.667h-4.583c-1.15 0-2.083 0.933-2.083 2.083s0.933 2.083 2.083 2.083h16.667c1.15 0 2.083-0.933 2.083-2.083s-0.933-2.083-2.083-2.083h-4.583c-0.917 0-1.667-0.75-1.667-1.667v-6.042c4.758-0.967 8.333-5.167 8.333-10.208l-0-1.25c3.442-2.65 9.167-4.567 9.167-9.942 0-3.717-2.983-6.725-6.667-6.725-0.884 0-1.824 0.417-2.5 0.833h-20.833zM16.667 6.667v10c0 0.917-0.75 1.667-1.667 1.667s-1.667-0.75-1.667-1.667v-10c0-0.917 0.75-1.667 1.667-1.667s1.667 0.75 1.667 1.667zM4.167 6.725c0-1.392 1.117-2.525 2.5-2.525s2.5 1.133 2.5 2.525v5.125c-2.4-1.517-5-2.526-5-5.125zM35 6.725c0 2.599-2.6 3.608-5 5.125v-5.125c0-1.392 1.117-2.525 2.5-2.525s2.5 1.133 2.5 2.525z\"></path>\r\n                   </g> </svg>\r\n            </div>\r\n        </div>"},{"fId":"211","fName":"图形-特殊10","fPreviewImg":"","fContext":"<div class=\"zm-component-shape-main blockShape\" style=\"width:40px;height:40px\">\r\n            <div class=\"zm-component-shape-block\">\r\n                <svg class=\"zm-component-shape-SVGicon specielShapeIcon\" viewBox=\"0 0 40 40\"  preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:100%\">\r\n                    <g>\r\n                    <path d=\"M0 35c7.075 3.208 15.474 5 23.75 5 2.683 0 5.325-0.125 7.9-0.55 1.008-0.167 2.316-0.542 2.883-0.975 0.793-0.609 1.301-1.567 1.301-2.642 0-0.991-0.433-1.892-1.125-2.5h0.292c1.842 0 3.333-1.492 3.333-3.333s-1.492-3.333-3.333-3.333h1.667c1.842 0 3.333-1.492 3.333-3.333s-1.492-3.333-3.333-3.333c1.842 0 3.333-1.492 3.333-3.333s-1.492-3.333-3.333-3.333l-14.949 0c-1.151 0-2.083-0.933-2.083-2.083l1.049-6.926c0.099-0.315 0.15-0.649 0.15-0.991 0-1.842-1.492-3.333-3.333-3.333-1.542 0-2.842 1.050-3.217 2.467l-0.142 0.475c-2.142 6.817-6.992 13.043-14.142 17.058v15z\"></path>\r\n                    </g></svg>\r\n            </div>\r\n        </div>"}]}],"banner":[{"fComponentType":"31","fComponentTypeName":"普通横条","list":[{"fId":"345","fName":"普通横条","fPreviewImg":"","fContext":"<div style=\"height:100px;width:300px;background-color:red;\"></div>"}]}],"video":[{"fComponentType":"38","fComponentTypeName":"视频样式","list":[{"fId":"176","fName":"视频1","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"1\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRb\">\r\n\t\t\t\t\t\t02:28\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/0515000058F4F053ADB91206D400962B\">\t\t\r\n\t\t\t\t </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"zm-videoInfo-list\">\r\n\t\t\t\t\t<li class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介欢迎阅读。</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t<span>464次播放</span>\r\n\t\t\t\t\t\t<span>0次评论</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"388","fName":"视频2","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"2\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRt\">\r\n\t\t\t\t\t\t02:28\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"https://r1.ykimg.com/0541040858ECE81C6F0E650386F84287\">\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"zm-videoInfo-list\">\r\n\t\t\t\t\t<li class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介欢迎阅读。</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t<span>464次播放</span>\r\n\t\t\t\t\t\t<span>0次评论</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\t\r\n\t\t\t\t</div>"},{"fId":"178","fName":"视频3","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"3\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeLt1\">\r\n\t\t\t\t\t\t00:58\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class=\"zm-videoTextWrap\" data-type=\"1\">\r\n\t\t\t\t\t\t<div class=\"zm-video-title zm-videoInfo-text\">这是新闻的标题</div>\r\n\t\t\t\t\t\t<ul class=\"zm-videoInfo-list1\">\t\t\t\t\t\r\n\t\t\t\t\t        <li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介，欢迎阅读。</li>\r\n\t\t\t\t\t        <li class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t        <span>464次播放</span>\r\n\t\t\t\t\t\t        <span>0次评论</span>\r\n\t\t\t\t\t        </li>\r\n\t\t\t\t        </ul>\t\t\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/05150000590DF466AD9E0705060C5CC4\">\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"179","fName":"视频4","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"4\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\t\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRb\">\r\n\t\t\t\t\t\t00:58\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class=\"zm-videoTextWrap\" data-type=\"1\">\r\n\t\t\t\t\t\t<ul class=\"zm-videoInfo-list2\">\t\t\r\n\t\t\t\t\t\t\t<li class=\"zm-video-title zm-videoInfo-text\">这是新闻的标题<li>\r\n\t\t\t\t\t        <li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介，欢迎阅读。</li>\t\t\t\t\t      \r\n\t\t\t\t       </ul>\t\r\n\t\t\t\t       <div class=\"zm-videoInfo-comment1 zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t        <span>464次播放</span>\r\n\t\t\t\t\t\t        <span>0次评论</span>\r\n\t\t\t\t\t        </div>\t\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\t\t\t\t\t\t\t\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/0515000057A07A7567BC3D05050A8239\">\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"180","fName":"视频5","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"5\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRb\">\r\n\t\t\t\t\t\t02:28\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn zm-videobtn-text\">\r\n                                              <svg></svg>\r\n                                               </span>\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4\">\t\t\r\n\t\t\t\t </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"zm-videoInfo-list\">\r\n\t\t\t\t\t<li class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介欢迎阅读。</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t<span>464次播放</span>\r\n\t\t\t\t\t\t<span>0次评论</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"181","fName":"视频6","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"6\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRb\">\r\n\t\t\t\t\t\t02:28\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace2 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/0515000058EF4551ADBA1F209F014291\">\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"zm-videoInfo-list\">\r\n\t\t\t\t\t<li class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介，欢迎阅读。</li>\r\n\t\t\t\t\t<li class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t<span>464次播放</span>\r\n\t\t\t\t\t\t<span>0次评论</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"182","fName":"视频7","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"7\">\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\t\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRt\">\r\n\t\t\t\t\t\t00:58\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class=\"zm-videoTextWrap\" data-type=\"1\">\r\n\t\t\t\t\t\t<div class=\"zm-videoInfo-list3\">\t\r\n\t\t\t\t\t\t\t<div class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</div>\r\n\t\t\t\t\t        <div class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介，欢迎阅读。</div>\r\n\t\t\t\t\t        <div class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t        <span>464次播放</span>\r\n\t\t\t\t\t\t        <span>0次评论</span>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t        </div>\t\t\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace1 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\t\t\t\t\t\t\t\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/0515000058DA3764ADBAC3814E03DC40\">\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"},{"fId":"183","fName":"视频8","fPreviewImg":"","fContext":"<div class=\"zm-videoBox-wrap\">\r\n\t\t<ul class=\"zm-videoBox\" data-type=\"8\">\t\t\t\t\t\t\t\t\r\n\t\t\t<li class=\"zm-videoPack\">\r\n\t\t\t\t<div class=\"zm-videop-thumb\">\r\n\t\t\t\t\t<div class=\"zm-videop-thumb-wrap\">\r\n\t\t\t\t\t<div class=\"zm-videop-time zm-videop-timeRb\">\r\n\t\t\t\t\t\t00:58\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class=\"zm-videoTextWrap\" data-type=\"1\">\r\n\t\t\t\t\t\t<div class=\"zm-videoInfo-list4\">\t\r\n\t\t\t\t\t\t\t<div class=\"zm-videoInfo-title zm-video-title zm-videoInfo-text\">这是新闻的标题</div>\r\n\t\t\t\t\t        <div class=\"zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text\">这是一个新闻的简介，欢迎阅读。</div>\r\n\t\t\t\t\t        <div class=\"zm-videoInfo-comment zm-video-comment zm-videoInfo-text\">\r\n\t\t\t\t\t\t        <span>464次播放</span>\r\n\t\t\t\t\t\t        <span>0次评论</span>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t        </div>\t\t\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a class=\"zm-videoBlackcover\" title=\"\" >\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span class=\"zm-videobtn-setplace2 zm-video-btn video-playBtn-style1\">\r\n                                                     <svg class=\"video-playBtn-style1\" style=\"width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;\" viewBox=\"0 0 1024 1024\"  xmlns=\"http://www.w3.org/2000/svg\"><path   d=\"M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z\"></path><path d=\"M365 315 L715 520 L365 725  Z\" fill=\"#ffffff\" p-id=\"3114\"></path></svg>\r\n                                               </span>\t\t\t\t\t\t\t\r\n\t\t\t\t\t</a>\t\t\t\t\r\n\t\t\t\t\t<img class=\"zm-videoQuic\" src=\"//r1.ykimg.com/05150000574BF54667BC3C24CF04FD2B\">\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t</li>\t\t\r\n\t\t</ul>\r\n\t\t</div>"}]}],"carousel":[{"fComponentType":"12","fComponentTypeName":"普通轮播","list":[{"fId":"87","fName":"测试轮播方式","fPreviewImg":"","fContext":"<div class=\"zm-component-carousel-main\">\r\n    <div class=\"zm-component-carousel-box\"  slide-type=\"tile\" data-pageNum=\"6\">\r\n              <img src=\"imgs/carousel004.png\">\r\n      </div>\r\n    </div>"},{"fId":"81","fName":"轮播模式01","fPreviewImg":"","fContext":"<div class=\"zm-component-carousel-main\">\r\n            <div class=\"zm-component-carousel-box\" data-imgs=\"productimgList\" slide-type=\"blindLeft\" data-pageNum=\"4\"><img src=\"imgs/carousel-product005.jpg\">             \r\n            </div>\r\n       </div>"}]},{"fComponentType":"36","fComponentTypeName":"全屏轮播","list":[{"fId":"166","fName":"满屏轮播附带样式","fPreviewImg":"","fContext":"<div class=\"zm-component-carousel-main\">\r\n        <div  class=\"zm-component-carousel-box\" slide-type=\"scrollHorz\"  data-imgs=\"adimgList\"><img src='imgs/carousel-ad002.jpg' /></div>\r\n        <div class=\"zm-component-carousel-pageCutBtn\"><div class=\"fa fa-angle-left\"></div><div class=\"fa fa-angle-right\"></div></div>\r\n        <div class=\"zm-component-carousel-point\"><span></span><span style=\"background-color: #fff;\"></span><span></span></div>\r\n    </div>"}]}],"blog":[{"fComponentType":"41","fComponentTypeName":"博客列表","list":[{"fId":"263","fName":"博客标题列表","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main zm-component-blog-main\">\r\n    <div class=\"zm-component-news-content\"  data-newsType=\"wordList\" data-newsNum = \"4\">\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">习近平同特朗普举行中美元首第二场正式会晤</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">俄罗斯战舰正驶向美海军发射导弹的区域</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">不赚钱的特斯拉市值超越了百年福特</a></div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\">\r\n            <div class=\"zm-component-news-title titleList\"><i class=\"list_style\"></i><a href=\"#\">霹雳行动！直击武警官兵山林地捕歼战斗</a></div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"265","fName":"博客简讯样式","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main zm-component-blog-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"titleNews\" data-newsNum = \"2\">\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-title\"><a href=\"#\" style=\"border-bottom:1px solid\">英国首相宣布解散议会 批评欧盟企图影响6月大选</a></div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n               新华社伦敦5月3日电（记者桂涛）英国首相特雷莎·梅3日批评欧盟部分官员故意破坏英国“脱欧”谈判，企图影响将于6月8日举行的英国大选。          特雷莎·梅是在当日首相府外的讲话中对欧盟提出批评的。她说，在过去几天，虽然一些欧洲国家领导人采取了合理的立场，但布鲁塞尔还是有人不希望“脱欧”谈判成功，不希望英国继续繁荣。她称这些人企图以此影响即将开始的英国大选。  </div>\r\n        </div>\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-title\"><a href=\"#\"  style=\"border-bottom:1px solid\">李克强同丹麦首相拉斯穆森举行会谈</a></div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n               新华社北京5月3日电（记者王慧慧）国务院总理李克强3日下午在人民大会堂同来华进行正式访问的丹麦首相拉斯穆森举行会谈。\r\n\r\n　　李克强表示，丹麦是最早同新中国建交的西方国家之一，长期奉行一个中国政策，两国关系基础坚实，发展势头良好，民间友好不断加深。中方愿以两国建立全面战略伙伴关系10周年为契机，巩固互信，深化合作，拓展交流，推动中丹关系与合作取得更大发展。\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"266","fName":"博客图片简讯","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main zm-component-blog-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"picLNews\">\r\n        <div class=\"zm-component-news-box\" style=\"display: flex\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 110px;height: 85px;padding-right:10px\">\r\n                <img src=\"imgs/carousel04.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\" style=\"flex: 1;overflow: hidden\">\r\n            <div class=\"zm-component-news-title\">\r\n                <a href=\"#\" style=\"border: none\">震惊13亿中国人！潜水员在阳澄湖下做出这种事</a>\r\n            </div>\r\n            <div class=\"zm-component-news-source\">\r\n                <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n            </div>\r\n            <div class=\"zm-component-news-words\">\r\n                这几句css就可以，不要加上去的容器一定要写了宽度的\r\n                注意...\r\n            </div>\r\n            <div class=\"zm-component-news-interact\">\r\n                <span class=\"zm-component-news-praise\">点赞(<i>1</i>)</span>\r\n                <span class=\"zm-component-news-transmit\">转发(<i>3</i>)</span>\r\n                <span class=\"zm-component-news-collect\">收藏</span>\r\n                <span class=\"zm-component-news-comment\">评论(<i>2</i>)</span>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"zm-component-news-box\" style=\"display: flex\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 110px;height: 85px;padding-right:10px\">\r\n                <img src=\"imgs/carousel05.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\" style=\"flex: 1;overflow: hidden\">\r\n                <div class=\"zm-component-news-title\">\r\n                    <a href=\"#\" style=\"border: none\">上海市金山区某知名企业员工宿舍楼下孔雀为何频频夜啼</a>\r\n                </div>\r\n                <div class=\"zm-component-news-source\">\r\n                    <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n                </div>\r\n                <div class=\"zm-component-news-words\">\r\n                    据一位不愿透露姓名的老张先生说，他们宿舍楼下孔雀....\r\n                </div>\r\n                <div class=\"zm-component-news-interact\">\r\n                    <span class=\"zm-component-news-praise\">点赞(<i>9</i>)</span>\r\n                    <span class=\"zm-component-news-transmit\">转发(<i>5</i>)</span>\r\n                    <span class=\"zm-component-news-collect\">收藏</span>\r\n                    <span class=\"zm-component-news-comment\">评论(<i>2</i>)</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},{"fId":"267","fName":"博客图片详情","fPreviewImg":"","fContext":"<div class=\"zm-component-news-main zm-component-blog-main\">\r\n    <div class=\"zm-component-news-content\" data-newsType=\"picTNews\">\r\n        <div class=\"zm-component-news-box flexColumn\">\r\n            <div class=\"zm-component-news-newsPic\" style=\"width: 100%;height: 130px;padding-bottom:10px\">\r\n                <img src=\"imgs/carousel03.png\">\r\n            </div>\r\n            <div class=\"zm-component-news-wrap\">\r\n                <div class=\"zm-component-news-title\">\r\n                    <a href=\"#\" style=\"border: none;color:#333\">晚霞景色</a>\r\n                </div>\r\n                <div class=\"zm-component-news-source\">\r\n                    <span class=\"zm-component-news-getDate\">2017-4-22</span>\r\n                </div>\r\n                <div class=\"zm-component-news-words\">\r\n                   晚霞映照下的自然，别有一番情致。晚霞下的万物都被镀上了一层金色与红色夹杂的色彩，海绵变成了一半\r\n                    是水一半是火焰的奇妙风景。山峰也在青绿中透出灿烂的红妆，城市华灯初上，被晚霞多去了其繁华的背景。\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"}]}],"tab":[{"fComponentType":"9","fComponentTypeName":"普通选项卡","list":[{"fId":"27","fName":"选项卡","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-tabs clearFloat\">\r\n    <div class=\"zm-edit-components-tabs-tit clearFloat\">\r\n        <div class=\"zm-edit-components-tabs-tit-channel\" style=\"display:none\"><span>频道名称</span></div>\r\n        <ul class=\"zm-edit-components-tabs-tit-lab clearFloat\">\r\n            <li><span>标题01</span></li>\r\n            <li><span>标题02</span></li>\r\n            <li><span>标题03</span></li>\r\n            <li><span>标题04</span></li>\r\n            <li><span>标题05</span></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"zm-edit-components-tabs-cont clearFloat\">\r\n        <div>内容01</div>\r\n        <div>内容02</div>\r\n        <div>内容03</div>\r\n        <div>内容04</div>\r\n        <div>内容05</div>\r\n    </div>\r\n</div>"},{"fId":"257","fName":"横向选项卡_01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-tabs_01 clearFloat\">\r\n    <div class=\"zm-edit-components-tabs-tit clearFloat\">\r\n        <div class=\"zm-edit-components-tabs-tit-channel\" style=\"display:none\"><span>频道名称</span></div>\r\n        <ul class=\"zm-edit-components-tabs-tit-lab clearFloat\">\r\n            <li><span>标题01</span></li>\r\n            <li><span>标题02</span></li>\r\n            <li><span>标题03</span></li>\r\n            <li><span>标题04</span></li>\r\n            <li><span>标题05</span></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"zm-edit-components-tabs-cont clearFloat\">\r\n        <div>内容01</div>\r\n        <div>内容02</div>\r\n        <div>内容03</div>\r\n        <div>内容04</div>\r\n        <div>内容05</div>\r\n    </div>\r\n</div>"}]}],"function":[{"fComponentType":"40","fComponentTypeName":"搜索框","list":[{"fId":"309","fName":"搜索框样式1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle1\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n               <div class=\"fa fa-search\"></div>\r\n            </a>\r\n        </div>\r\n    </div>"},{"fId":"258","fName":"搜索框样式2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle2\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n                <div class=\"fa fa-search\"></div>\r\n            </a>\r\n        </div>\r\n    </div>"},{"fId":"310","fName":"搜索框样式3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle3\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n                <div class=\"fa fa-search\"></div>\r\n            </a>\r\n        </div>\r\n    </div>"},{"fId":"311","fName":"搜索框样式4","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle1\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n                <div class=\"searchBtnFont\">搜索</div>\r\n            </a>\r\n        </div>\r\n    </div>"},{"fId":"312","fName":"搜索框样式5","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle2\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n                <div class=\"searchBtnFont\">搜索</div>\r\n            </a>\r\n        </div>\r\n    </div>"},{"fId":"313","fName":"搜索框样式6","fPreviewImg":"","fContext":"<div class=\"zm-component-function-search-main\">\r\n        <div class=\"zm-component-function-content clearFloat searchBarStyle3\" data-functionType=\"search\">\r\n            <div class=\"zm-component-function-searchBar\">\r\n                <input type=\"text\" placeholder=\"族蚂搜索\" />\r\n            </div>\r\n            <a class=\"zm-component-function-searchBtn\">\r\n                <div class=\"searchBtnFont\">搜索</div>\r\n            </a>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"43","fComponentTypeName":"购物车","list":[{"fId":"315","fName":"购物车样式1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 45px;width:80px\">\r\n        <div class=\"zm-component-function-content clearFloat greatCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartTop redBgWhiteCol\">11</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path  style=\"transform: scale(1.15) translate(-8%,3%);\" d=\"M253.36601 185.087439 131.137201 185.087439c-14.211676 0-25.732058-11.523451-25.732058-25.733081 0-14.2127 11.519358-25.733081 25.732058-25.733081l122.228809 0c14.2127 0 25.733081 11.519358 25.733081 25.733081C279.099091 173.563988 267.57871 185.087439 253.36601 185.087439L253.36601 185.087439zM806.610366 725.464743 388.460848 725.464743c-14.210653 0-25.732058-11.522428-25.732058-25.731034 0-14.213723 11.521404-25.733081 25.732058-25.733081L806.611389 674.000628c14.211676 0 25.733081 11.520381 25.733081 25.733081C832.34447 713.943338 820.822043 725.464743 806.610366 725.464743L806.610366 725.464743zM903.108141 288.017716 291.96512 288.017716c-14.213723 0-25.734104-11.523451-25.734104-25.733081 0-14.213723 11.519358-25.733081 25.734104-25.733081l611.141998 0c14.213723 0 25.733081 11.518335 25.733081 25.733081C928.840198 276.495288 917.32084 288.017716 903.108141 288.017716L903.108141 288.017716zM862.900394 442.409039 332.171843 442.409039c-14.214746 0-25.733081-11.520381-25.733081-25.733081 0-14.20963 11.518335-25.732058 25.733081-25.732058l530.72855 0c14.213723 0 25.733081 11.522428 25.733081 25.732058C888.633475 430.888657 877.113093 442.409039 862.900394 442.409039L862.900394 442.409039zM825.910944 596.802408 372.377544 596.802408c-14.211676 0-25.732058-11.518335-25.732058-25.732058 0-14.211676 11.521404-25.732058 25.732058-25.732058L825.910944 545.338293c14.214746 0 25.732058 11.521404 25.732058 25.732058C851.644025 585.284073 840.125691 596.802408 825.910944 596.802408L825.910944 596.802408zM591.102081 593.58718c-14.210653 0-25.732058-11.521404-25.732058-25.734104L565.370023 291.232944c0-14.2127 11.521404-25.734104 25.732058-25.734104 14.21577 0 25.733081 11.521404 25.733081 25.734104l0 276.621155C616.836185 582.066799 605.318874 593.58718 591.102081 593.58718L591.102081 593.58718zM768.211824 272.762267 735.286947 547.419697c-1.695618 14.108323-14.503319 24.175609-28.615735 22.485107-14.108323-1.691525-24.178679-14.502295-22.488177-28.608571l32.927947-274.659477c1.692548-14.109346 14.506389-24.175609 28.614711-22.484084C759.83811 245.844198 769.906419 258.651898 768.211824 272.762267L768.211824 272.762267zM927.37687 269.225721l-74.14979 299.165614c-3.399423 13.799284-17.3389 22.234397-31.140231 18.833951-13.798261-3.396353-22.233374-17.334807-18.835997-31.135114L877.403712 256.924557c3.396353-13.798261 17.336854-22.23235 31.135114-18.837021C922.339134 241.484913 930.7722 255.422344 927.37687 269.225721L927.37687 269.225721zM476.377176 573.857836c-14.097066 1.808182-26.988678-8.15575-28.794813-22.251793l-33.127492-258.424724c-1.809205-14.096043 8.154727-26.989701 22.252817-28.79379 14.096043-1.808182 26.986631 8.154727 28.792767 22.251793l33.125445 258.424724C500.437152 559.159066 490.472196 572.051701 476.377176 573.857836L476.377176 573.857836zM393.244804 719.426213c-13.827937 3.431146-27.826765-4.967128-31.268144-18.764366l-132.190695-529.828041c-3.440355-13.796214 4.977361-27.760251 18.807345-31.193443 13.826913-3.433192 27.824719 4.968152 31.268144 18.763342l132.187625 529.829064C415.493527 702.028984 407.073764 715.995067 393.244804 719.426213L393.244804 719.426213zM433.491437 854.125031c-28.42233 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.042809-51.466162 51.464115-51.466162 28.424376 0 51.464115 23.042809 51.464115 51.466162C484.956575 831.085292 461.915813 854.125031 433.491437 854.125031L433.491437 854.125031zM748.714771 854.125031c-28.423353 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.040762-51.466162 51.464115-51.466162 28.420283 0 51.463092 23.042809 51.463092 51.466162C800.177863 831.085292 777.135054 854.125031 748.714771 854.125031L748.714771 854.125031z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"316","fName":"购物车样式2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 45px;width:80px\">\r\n        <div class=\"zm-component-function-content clearFloat greatCart\" data-functionType=\"shopping\">      \r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartTopRight redBgWhiteCol\">22</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path style=\"transform: scale(1.15) translate(-8%,3%);\" d=\"M253.36601 185.087439 131.137201 185.087439c-14.211676 0-25.732058-11.523451-25.732058-25.733081 0-14.2127 11.519358-25.733081 25.732058-25.733081l122.228809 0c14.2127 0 25.733081 11.519358 25.733081 25.733081C279.099091 173.563988 267.57871 185.087439 253.36601 185.087439L253.36601 185.087439zM806.610366 725.464743 388.460848 725.464743c-14.210653 0-25.732058-11.522428-25.732058-25.731034 0-14.213723 11.521404-25.733081 25.732058-25.733081L806.611389 674.000628c14.211676 0 25.733081 11.520381 25.733081 25.733081C832.34447 713.943338 820.822043 725.464743 806.610366 725.464743L806.610366 725.464743zM903.108141 288.017716 291.96512 288.017716c-14.213723 0-25.734104-11.523451-25.734104-25.733081 0-14.213723 11.519358-25.733081 25.734104-25.733081l611.141998 0c14.213723 0 25.733081 11.518335 25.733081 25.733081C928.840198 276.495288 917.32084 288.017716 903.108141 288.017716L903.108141 288.017716zM862.900394 442.409039 332.171843 442.409039c-14.214746 0-25.733081-11.520381-25.733081-25.733081 0-14.20963 11.518335-25.732058 25.733081-25.732058l530.72855 0c14.213723 0 25.733081 11.522428 25.733081 25.732058C888.633475 430.888657 877.113093 442.409039 862.900394 442.409039L862.900394 442.409039zM825.910944 596.802408 372.377544 596.802408c-14.211676 0-25.732058-11.518335-25.732058-25.732058 0-14.211676 11.521404-25.732058 25.732058-25.732058L825.910944 545.338293c14.214746 0 25.732058 11.521404 25.732058 25.732058C851.644025 585.284073 840.125691 596.802408 825.910944 596.802408L825.910944 596.802408zM591.102081 593.58718c-14.210653 0-25.732058-11.521404-25.732058-25.734104L565.370023 291.232944c0-14.2127 11.521404-25.734104 25.732058-25.734104 14.21577 0 25.733081 11.521404 25.733081 25.734104l0 276.621155C616.836185 582.066799 605.318874 593.58718 591.102081 593.58718L591.102081 593.58718zM768.211824 272.762267 735.286947 547.419697c-1.695618 14.108323-14.503319 24.175609-28.615735 22.485107-14.108323-1.691525-24.178679-14.502295-22.488177-28.608571l32.927947-274.659477c1.692548-14.109346 14.506389-24.175609 28.614711-22.484084C759.83811 245.844198 769.906419 258.651898 768.211824 272.762267L768.211824 272.762267zM927.37687 269.225721l-74.14979 299.165614c-3.399423 13.799284-17.3389 22.234397-31.140231 18.833951-13.798261-3.396353-22.233374-17.334807-18.835997-31.135114L877.403712 256.924557c3.396353-13.798261 17.336854-22.23235 31.135114-18.837021C922.339134 241.484913 930.7722 255.422344 927.37687 269.225721L927.37687 269.225721zM476.377176 573.857836c-14.097066 1.808182-26.988678-8.15575-28.794813-22.251793l-33.127492-258.424724c-1.809205-14.096043 8.154727-26.989701 22.252817-28.79379 14.096043-1.808182 26.986631 8.154727 28.792767 22.251793l33.125445 258.424724C500.437152 559.159066 490.472196 572.051701 476.377176 573.857836L476.377176 573.857836zM393.244804 719.426213c-13.827937 3.431146-27.826765-4.967128-31.268144-18.764366l-132.190695-529.828041c-3.440355-13.796214 4.977361-27.760251 18.807345-31.193443 13.826913-3.433192 27.824719 4.968152 31.268144 18.763342l132.187625 529.829064C415.493527 702.028984 407.073764 715.995067 393.244804 719.426213L393.244804 719.426213zM433.491437 854.125031c-28.42233 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.042809-51.466162 51.464115-51.466162 28.424376 0 51.464115 23.042809 51.464115 51.466162C484.956575 831.085292 461.915813 854.125031 433.491437 854.125031L433.491437 854.125031zM748.714771 854.125031c-28.423353 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.040762-51.466162 51.464115-51.466162 28.420283 0 51.463092 23.042809 51.463092 51.466162C800.177863 831.085292 777.135054 854.125031 748.714771 854.125031L748.714771 854.125031z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"317","fName":"购物车样式3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 45px;width:80px\">\r\n        <div class=\"zm-component-function-content clearFloat greatCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n <div class=\"zm-component-function-shopping-num cartTop noBgBlueCol\">33</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path style=\"transform: scale(1.15) translate(-8%,3%);\" d=\"M253.36601 185.087439 131.137201 185.087439c-14.211676 0-25.732058-11.523451-25.732058-25.733081 0-14.2127 11.519358-25.733081 25.732058-25.733081l122.228809 0c14.2127 0 25.733081 11.519358 25.733081 25.733081C279.099091 173.563988 267.57871 185.087439 253.36601 185.087439L253.36601 185.087439zM806.610366 725.464743 388.460848 725.464743c-14.210653 0-25.732058-11.522428-25.732058-25.731034 0-14.213723 11.521404-25.733081 25.732058-25.733081L806.611389 674.000628c14.211676 0 25.733081 11.520381 25.733081 25.733081C832.34447 713.943338 820.822043 725.464743 806.610366 725.464743L806.610366 725.464743zM903.108141 288.017716 291.96512 288.017716c-14.213723 0-25.734104-11.523451-25.734104-25.733081 0-14.213723 11.519358-25.733081 25.734104-25.733081l611.141998 0c14.213723 0 25.733081 11.518335 25.733081 25.733081C928.840198 276.495288 917.32084 288.017716 903.108141 288.017716L903.108141 288.017716zM862.900394 442.409039 332.171843 442.409039c-14.214746 0-25.733081-11.520381-25.733081-25.733081 0-14.20963 11.518335-25.732058 25.733081-25.732058l530.72855 0c14.213723 0 25.733081 11.522428 25.733081 25.732058C888.633475 430.888657 877.113093 442.409039 862.900394 442.409039L862.900394 442.409039zM825.910944 596.802408 372.377544 596.802408c-14.211676 0-25.732058-11.518335-25.732058-25.732058 0-14.211676 11.521404-25.732058 25.732058-25.732058L825.910944 545.338293c14.214746 0 25.732058 11.521404 25.732058 25.732058C851.644025 585.284073 840.125691 596.802408 825.910944 596.802408L825.910944 596.802408zM591.102081 593.58718c-14.210653 0-25.732058-11.521404-25.732058-25.734104L565.370023 291.232944c0-14.2127 11.521404-25.734104 25.732058-25.734104 14.21577 0 25.733081 11.521404 25.733081 25.734104l0 276.621155C616.836185 582.066799 605.318874 593.58718 591.102081 593.58718L591.102081 593.58718zM768.211824 272.762267 735.286947 547.419697c-1.695618 14.108323-14.503319 24.175609-28.615735 22.485107-14.108323-1.691525-24.178679-14.502295-22.488177-28.608571l32.927947-274.659477c1.692548-14.109346 14.506389-24.175609 28.614711-22.484084C759.83811 245.844198 769.906419 258.651898 768.211824 272.762267L768.211824 272.762267zM927.37687 269.225721l-74.14979 299.165614c-3.399423 13.799284-17.3389 22.234397-31.140231 18.833951-13.798261-3.396353-22.233374-17.334807-18.835997-31.135114L877.403712 256.924557c3.396353-13.798261 17.336854-22.23235 31.135114-18.837021C922.339134 241.484913 930.7722 255.422344 927.37687 269.225721L927.37687 269.225721zM476.377176 573.857836c-14.097066 1.808182-26.988678-8.15575-28.794813-22.251793l-33.127492-258.424724c-1.809205-14.096043 8.154727-26.989701 22.252817-28.79379 14.096043-1.808182 26.986631 8.154727 28.792767 22.251793l33.125445 258.424724C500.437152 559.159066 490.472196 572.051701 476.377176 573.857836L476.377176 573.857836zM393.244804 719.426213c-13.827937 3.431146-27.826765-4.967128-31.268144-18.764366l-132.190695-529.828041c-3.440355-13.796214 4.977361-27.760251 18.807345-31.193443 13.826913-3.433192 27.824719 4.968152 31.268144 18.763342l132.187625 529.829064C415.493527 702.028984 407.073764 715.995067 393.244804 719.426213L393.244804 719.426213zM433.491437 854.125031c-28.42233 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.042809-51.466162 51.464115-51.466162 28.424376 0 51.464115 23.042809 51.464115 51.466162C484.956575 831.085292 461.915813 854.125031 433.491437 854.125031L433.491437 854.125031zM748.714771 854.125031c-28.423353 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.040762-51.466162 51.464115-51.466162 28.420283 0 51.463092 23.042809 51.463092 51.466162C800.177863 831.085292 777.135054 854.125031 748.714771 854.125031L748.714771 854.125031z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"318","fName":"购物车样式4","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 40px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat middleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartTop noBgBlueCol\">44</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"319","fName":"购物车样式5","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 40px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat middleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n <div class=\"zm-component-function-shopping-num cartTopRight noBgBlueCol\">55</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"320","fName":"购物车样式6","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 40px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat middleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartRight noBgBlueCol\">66</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"321","fName":"购物车样式7","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 35px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat littleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartTop redBgWhiteCol\">77</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"322","fName":"购物车样式8","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 35px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat  littleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartTopRight redBgWhiteCol\">88</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"},{"fId":"323","fName":"购物车样式9","fPreviewImg":"","fContext":"<div class=\"zm-component-function-shopping-main\" style=\"height: 35px;width: 80px\">\r\n        <div class=\"zm-component-function-content clearFloat littleCart\" data-functionType=\"shopping\">\r\n            <div class=\"zm-component-function-shopping-cartBtn\">\r\n<div class=\"zm-component-function-shopping-num cartRight redBgWhiteCol\">99</div>\r\n                <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z\"></path>\r\n                </svg>\r\n            </div>\r\n            <div class=\"zm-component-function-shopping-cartWord\">购物车</div>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"46","fComponentTypeName":"登录注册","list":[{"fId":"326","fName":"登录text","fPreviewImg":"","fContext":"<div class=\"zm-component-function-text-main\"><div class=\"zm-component-function-content\" data-loadUrl=\"login\" data-functionType=\"text\" style=\"color:#4ab1a7\">登录</div></div>"},{"fId":"327","fName":"注册text","fPreviewImg":"","fContext":"<div class=\"zm-component-function-text-main\"><div class=\"zm-component-function-content\" data-loadUrl=\"register\" data-functionType=\"btn\" style=\"border:1px solid #4ab1a7;color:#4ab1a7;border-radius:10px;font-size:14px;\">免费注册</div></div>"},{"fId":"328","fName":"登录button","fPreviewImg":"","fContext":"<div class=\"zm-component-function-text-main\"><div class=\"zm-component-function-content\" data-loadUrl=\"login\" data-functionType=\"btn\" style=\"background-color:#4ab1a7;color:#fff;border-radius:3px;\">login</div></div>"},{"fId":"344","fName":"图片登录","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\" style=\"width: 300px\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"img\">\r\n            <div class=\"zm-component-img-content\">\r\n                <img src=\"imgs/registration.gif\" title=\"\" alt=\"\" width=\"100%\" height=\"100%\" style=\"max-width: 100%\">\r\n            </div>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"47","fComponentTypeName":"文件下载","list":[{"fId":"329","fName":"word文件1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n        <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-word.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-word.png</div>\r\n        </div>\r\n    </div>"},{"fId":"330","fName":"exsl文件1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-exsl.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-exsl.png</div>\r\n        </div>\r\n    </div>"},{"fId":"331","fName":"ppt文件1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-ppt.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-ppt.png</div>\r\n        </div>\r\n    </div>"},{"fId":"332","fName":"pdf文件1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-pdf.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-pdf.png</div>\r\n        </div>\r\n    </div>"},{"fId":"333","fName":"att文件1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-att.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-att.png</div>\r\n        </div>\r\n    </div>"},{"fId":"334","fName":"word文件2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-word1.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-word1.png</div>\r\n        </div>\r\n    </div>"},{"fId":"336","fName":"exsl文件2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-exsl1.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-exsl1.png</div>\r\n        </div>\r\n    </div>"},{"fId":"338","fName":"ppt文件2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-ppt1.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-ppt1.png</div>\r\n        </div>\r\n    </div>"},{"fId":"340","fName":"pdf文件2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-pdf1.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-pdf1.png</div>\r\n        </div>\r\n    </div>"},{"fId":"342","fName":"att文件2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-att1.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-att1.png</div>\r\n        </div>\r\n    </div>"},{"fId":"335","fName":"word文件3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-word2.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-word2.png</div>\r\n        </div>\r\n    </div>"},{"fId":"337","fName":"exsl文件3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-exsl2.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-exsl2.png</div>\r\n        </div>\r\n    </div>"},{"fId":"339","fName":"ppt文件3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-ppt2.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-ppt2.png</div>\r\n        </div>\r\n    </div>"},{"fId":"341","fName":"pdf文件3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-pdf2.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-pdf2.png</div>\r\n        </div>\r\n    </div>"},{"fId":"343","fName":"att文件3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-file-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"file\">\r\n            <div class=\"zm-component-file-imgBox\"><img src=\"imgs/file-att2.png \" alt=\"\" title=\"\"></div>\r\n            <div class=\"zm-component-file-fileName\">imgs/file-att2.png</div>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"48","fComponentTypeName":"分享推广","list":[{"fId":"348","fName":"分享样式1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content\" data-functiontype=\"share\">\r\n            <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M768 665.6c42.324992 0 78.507008 14.676992 108.544 44.032 30.036992 29.355008 45.056 65.876992 45.056 109.568 0 42.324992-15.019008 78.507008-45.056 108.544-30.036992 30.036992-66.219008 45.056-108.544 45.056-42.324992 0-78.507008-15.019008-108.544-45.056-30.036992-30.036992-45.056-66.219008-45.056-108.544 0-4.096 0.340992-8.875008 1.024-14.336 0.683008-5.460992 1.024-9.556992 1.024-12.288 0 0-266.24-159.744-266.24-159.744-28.672 21.844992-60.075008 32.768-94.208 32.768-42.324992 0-78.507008-15.019008-108.544-45.056-30.036992-30.036992-45.056-66.219008-45.056-108.544 0-42.324992 15.019008-78.507008 45.056-108.544 30.036992-30.036992 66.219008-45.056 108.544-45.056 36.864 0 68.267008 10.24 94.208 30.72 0 0 266.24-159.744 266.24-159.744 0-2.731008-0.340992-6.827008-1.024-12.288-0.683008-5.460992-1.024-9.556992-1.024-12.288 0-42.324992 15.019008-78.507008 45.056-108.544 30.036992-30.036992 66.219008-45.056 108.544-45.056 42.324992 0 78.507008 14.676992 108.544 44.032 30.036992 29.355008 45.056 65.876992 45.056 109.568 0 42.324992-15.019008 78.507008-45.056 108.544-30.036992 30.036992-66.219008 45.056-108.544 45.056-35.499008 0-66.219008-10.923008-92.16-32.768 0 0-268.288 159.744-268.288 159.744 1.364992 5.460992 2.048 14.336 2.048 26.624 0 10.923008-0.683008 19.115008-2.048 24.576 0 0 268.288 159.744 268.288 159.744 24.576-20.48 55.296-30.72 92.16-30.72 0 0 0 0 0 0\"></path></svg>\r\n        </div>\r\n    </div>"},{"fId":"349","fName":"分享样式2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content\" data-functiontype=\"share\">\r\n            <svg viewBox=\"0 0 1204 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M903.529412 899.282824H120.470588V326.023529h180.404706s44.212706-62.855529 133.933177-121.856H60.235294c-33.249882 0-60.235294 27.105882-60.235294 60.928v695.115295c0 33.490824 26.985412 60.928 60.235294 60.928h903.529412c33.249882 0 60.235294-27.105882 60.235294-60.928V612.472471l-120.470588 100.171294v186.639059z m-100.382118-490.947765v203.836235L1204.705882 307.501176 803.147294 0v190.433882C317.500235 190.433882 301.176471 714.571294 301.176471 714.571294c137.426824-228.080941 238.441412-306.236235 501.970823-306.236235z\"></path></svg>\r\n        </div>\r\n    </div>"},{"fId":"350","fName":"分享样式3","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content\" data-functiontype=\"share\">\r\n            <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M148.8 897.6c75.2 0 136-59.2 136-136 0-75.2-59.2-136-136-136s-136 59.2-136 136C12.8 836.8 72 897.6 148.8 897.6L148.8 897.6zM512 281.6c75.2 0 136-59.2 136-136 0-75.2-59.2-136-136-136-75.2 0-136 59.2-136 136C376 222.4 436.8 281.6 512 281.6L512 281.6zM875.2 897.6c75.2 0 136-59.2 136-136 0-75.2-59.2-136-136-136-75.2 0-136 59.2-136 136C739.2 836.8 795.2 897.6 875.2 897.6L875.2 897.6zM683.2 155.2c155.2 67.2 267.2 219.2 267.2 400 0 16 0 35.2-3.2 51.2-16-8-32-11.2-51.2-16 0-11.2 0-24 0-35.2 0-155.2-91.2-288-227.2-352C680 190.4 683.2 174.4 683.2 155.2L683.2 155.2zM244.8 900.8c72 56 168 88 267.2 88 99.2 0 192-32 267.2-88-16-8-27.2-19.2-40-35.2-64 43.2-144 72-227.2 72-83.2 0-163.2-27.2-227.2-72C272 881.6 260.8 892.8 244.8 900.8L244.8 900.8zM76.8 606.4c-3.2-16-3.2-32-3.2-48 0-179.2 112-336 267.2-400 0 19.2 3.2 35.2 11.2 51.2-131.2 59.2-227.2 195.2-227.2 352 0 11.2 0 24 0 35.2C108.8 593.6 92.8 598.4 76.8 606.4L76.8 606.4 76.8 606.4z\"></path></svg>\r\n        </div>\r\n    </div>"},{"fId":"351","fName":"分享样式4","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleShare\" data-functiontype=\"share\">\r\n           <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 1024C229.233778 1024 0 794.766222 0 512 0 229.233778 229.233778 0 512 0 794.766222 0 1024 229.233778 1024 512 1024 794.766222 794.766222 1024 512 1024ZM657.768296 246.518519C607.450074 246.518519 566.509037 287.459556 566.509037 337.777778 566.509037 342.234074 566.935704 346.567111 567.570963 350.862222L375.694222 424.656593C359.025778 406.964148 335.492741 395.851852 309.342815 395.851852 259.015111 395.851852 218.074074 436.792889 218.074074 487.10163 218.074074 537.419852 259.015111 578.360889 309.342815 578.360889 328.941037 578.360889 347.088593 572.084148 361.974519 561.512296L491.984593 648.163556C486.618074 659.768889 483.555556 672.616296 483.555556 686.212741 483.555556 736.521481 524.47763 777.481481 574.814815 777.481481 625.114074 777.481481 666.074074 736.521481 666.074074 686.212741 666.074074 635.894519 625.114074 594.953481 574.814815 594.953481 550.011259 594.953481 527.540148 604.918519 511.080296 621.027556L385.479111 537.287111C394.998519 522.865778 400.583111 505.637926 400.583111 487.10163 400.583111 475.117037 398.203259 463.691852 393.984 453.18637L578.209185 382.340741C593.844148 410.159407 623.634963 429.037037 657.768296 429.037037 708.096 429.037037 749.037037 388.086519 749.037037 337.777778 749.037037 287.459556 708.096 246.518519 657.768296 246.518519Z\"></path></svg>\r\n               </div>\r\n    </div>"},{"fId":"352","fName":"分享样式5","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleShare\" data-functiontype=\"share\">\r\n        <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m221.184 819.2h-471.04c-51.2 0-59.392-59.392-59.392-59.392v-450.56c0-47.104 59.392-59.392 59.392-59.392h253.952v59.392s-169.984-6.144-215.04 0c-45.056 6.144-38.912 38.912-38.912 38.912v372.736c0 45.056 38.912 38.912 38.912 38.912 231.424 0 395.264-2.048 411.648 0 2.048 0 12.288 2.048 16.384-4.096 4.096-4.096 4.096-10.24 4.096-16.384v-155.648h59.392s-6.144 118.784 0 176.128-59.392 59.392-59.392 59.392z m94.208-444.416l-8.192 8.192-139.264 141.312c-8.192 8.192-20.48 8.192-26.624 0l-14.336-14.336c-8.192-8.192-8.192-20.48 0-26.624l106.496-106.496c-151.552-26.624-301.056 67.584-339.968 215.04-4.096 12.288-6.144 26.624-8.192 38.912l-59.392-14.336c2.048-14.336 4.096-24.576 8.192-38.912 45.056-169.984 206.848-278.528 374.784-262.144l-81.92-81.92c-8.192-8.192-8.192-20.48 0-28.672l14.336-14.336c8.192-8.192 20.48-8.192 26.624 0l139.264 141.312 8.192 8.192 8.192 8.192c4.096 4.096 6.144 8.192 6.144 14.336-2.048 2.048-12.288 12.288-14.336 12.288z\"></path></svg>\r\n               </div>\r\n    </div>"},{"fId":"353","fName":"分享样式6","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleShare\" data-functiontype=\"share\">\r\n     <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\r\n                <path d=\"M14.915,0c-8.283,0-15,6.716-15,15c0,8.284,6.717,15,15,15c8.285,0,15.002-6.717,15.002-15C29.917,6.715,23.2,0,14.915,0z M21.233,6.79c1.328,0,2.406,1.082,2.406,2.417c0,1.334-1.078,2.416-2.406,2.416s-2.406-1.082-2.406-2.416C18.827,7.872,19.905,6.79,21.233,6.79z M15.126,5.675c1.457,0,2.828,0.347,4.055,0.948c-0.514,0.35-0.92,0.839-1.174,1.414c-0.838-0.32-1.744-0.503-2.693-0.503c-2.603,0-4.899,1.317-6.265,3.323c-0.508-0.403-1.137-0.659-1.82-0.709C8.851,7.47,11.777,5.675,15.126,5.675z M4.764,13.666c0-1.334,1.077-2.416,2.405-2.416c1.329,0,2.406,1.082,2.406,2.416s-1.077,2.416-2.406,2.416C5.841,16.082,4.764,15,4.764,13.666z M15.126,24.258c-4.523,0-8.283-3.262-9.087-7.572c0.301,0.09,0.617,0.139,0.946,0.139c0.311,0,0.61-0.045,0.897-0.125c0.676,3.295,3.473,5.809,6.894,6.049c0.056,0.551,0.249,1.063,0.538,1.5C15.251,24.25,15.19,24.258,15.126,24.258z M18.272,25.002c-1.328,0-2.404-1.082-2.404-2.416s1.076-2.416,2.404-2.416c1.33,0,2.406,1.082,2.406,2.416S19.603,25.002,18.272,25.002z M21.364,21.814c-0.09-0.51-0.293-0.98-0.588-1.383c1.313-1.371,2.123-3.229,2.123-5.279c0-0.954-0.182-1.863-0.5-2.704c0.508-0.227,0.947-0.578,1.283-1.015c0.447,1.09,0.697,2.281,0.697,3.533C24.38,17.682,23.214,20.115,21.364,21.814z\"></path>\r\n            </svg>\r\n        </div>\r\n    </div>"},{"fId":"354","fName":"分享样式7","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleHalfShare\" data-functiontype=\"share\">\r\n            <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 127.616C0 57.152 57.28 0 127.616 0h768.768C966.848 0 1024 57.28 1024 127.616v768.768A127.68 127.68 0 0 1 896.384 1024H127.616A127.68 127.68 0 0 1 0 896.384V127.616z m683.52 264.256c64.32 0 116.48-50.176 116.48-112.064 0-0.448-0.192-0.832-0.192-1.28l0.128-1.216c0-61.888-52.096-112-116.352-112s-116.352 50.112-116.352 112l0.064 1.408v1.088c0 8.768 1.408 17.216 3.52 25.344L358.08 440.32a118.272 118.272 0 0 0-81.664-32.32c-64.32 0-116.416 50.112-116.416 112l0.128 1.28-0.128 1.216c0 61.888 52.096 112.064 116.416 112.064a117.76 117.76 0 0 0 86.08-37.312L567.488 742.4a11.072 11.072 0 0 0-0.192 1.792l0.128 1.28-0.128 1.28c0 61.824 52.096 112 116.352 112s116.352-50.176 116.352-112l-0.128-1.28 0.128-1.28c0-61.888-52.096-112.064-116.352-112.064-41.6 0-77.888 21.248-98.432 52.864L389.632 546.624c1.792-7.744 3.072-15.68 3.072-24.064l-0.064-1.024 0.064-1.408c0-10.112-1.92-19.84-4.672-29.12l211.264-134.336c21.184 21.568 51.008 35.2 84.288 35.2z\"></path></svg>\r\n                </div>\r\n    </div>"},{"fId":"355","fName":"分享样式8","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleHalfShare\" data-functiontype=\"share\">\r\n          <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M907.4 0.3l-790.9 0c-63.9 0-116.2 52.3-116.2 116.2l0 790.9c0 63.9 52.3 116.2 116.2 116.2l790.9 0c63.9 0 116.2-52.3 116.2-116.2l0-790.9C1023.7 52.6 971.4 0.3 907.4 0.3zM114.4 277l59.8-0.4-59.6 0 0-81 340.7 0 0 81-259.6 0 0 486.7-81.3-0.1L114.4 277zM844.3 844.2l-81.1-0.1 0 0.1-648.7 0L114.5 763.3l648.7 0 0-146.2 81.1 0L844.3 844.2zM666.3 616.8l0-144c0 0-230.7-38-387.9 142.5 0 0 22.8-293 387.9-290.5l0-145L909.6 398.3 666.3 616.8z\"></path></svg>\r\n             </div>\r\n    </div>"},{"fId":"356","fName":"分享样式9","fPreviewImg":"","fContext":"<div class=\"zm-component-function-share-main\">\r\n        <div class=\"zm-component-function-content circleHalfShare\" data-functiontype=\"share\">\r\n            <svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M27,0H3C1.343,0,0,1.343,0,3v24c0,1.656,1.343,3,3,3h24c1.657,0,3-1.344,3-3V3C30,1.343,28.657,0,27,0z\r\n\t M22.095,5.782c1.432,0,2.594,1.167,2.594,2.605c0,1.438-1.162,2.605-2.594,2.605c-1.434,0-2.596-1.167-2.596-2.605\r\n\tC19.499,6.948,20.661,5.782,22.095,5.782z M15.688,4.579c1.569,0,3.05,0.374,4.37,1.022c-0.551,0.377-0.99,0.905-1.266,1.524\r\n\tc-0.902-0.345-1.879-0.542-2.905-0.542c-2.807,0-5.281,1.421-6.756,3.584C8.584,9.732,7.908,9.456,7.17,9.402\r\n\tC8.921,6.514,12.075,4.579,15.688,4.579z M4.332,13.196c0-1.439,1.161-2.605,2.594-2.605c1.434,0,2.595,1.167,2.595,2.605\r\n\ts-1.161,2.605-2.595,2.605C5.493,15.801,4.332,14.635,4.332,13.196z M15.688,24.619c-4.879,0-8.934-3.52-9.801-8.166\r\n\tc0.323,0.096,0.665,0.149,1.021,0.149c0.335,0,0.658-0.05,0.967-0.136c0.729,3.554,3.745,6.264,7.435,6.523\r\n\tc0.061,0.594,0.268,1.145,0.58,1.618C15.821,24.609,15.756,24.619,15.688,24.619z M18.901,25.42c-1.434,0-2.595-1.166-2.595-2.605\r\n\tc0-1.438,1.161-2.604,2.595-2.604c1.432,0,2.594,1.167,2.594,2.604C21.495,24.254,20.333,25.42,18.901,25.42z M22.416,21.984\r\n\tc-0.098-0.552-0.318-1.059-0.635-1.494c1.416-1.477,2.289-3.48,2.289-5.691c0-1.028-0.195-2.009-0.539-2.916\r\n\tc0.549-0.245,1.021-0.623,1.385-1.094c0.482,1.175,0.752,2.459,0.752,3.81C25.668,17.527,24.41,20.152,22.416,21.984z\">\r\n                </path></svg>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"49","fComponentTypeName":"填空问卷","list":[{"fId":"359","fName":"填空问卷1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-enter-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"enter\">\r\n            <form action=\"\" class=\"zm-component-enter-form infoInside\">\r\n                <div class=\"zm-component-enter-formTitle\">请留下您的联系方式：</div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>姓名</span>\r\n                    <div class=\"zm-component-enter-inputBox\" tabindex=\"1\">\r\n                        <i>姓名</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>生日</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>生日</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>账号</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>账号</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>邮箱</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>邮箱</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>性别</span>\r\n                    <div class=\"zm-component-enter-selectBox\" tabindex=\"2\">\r\n                        <i>性别</i>\r\n                        <div class=\"fa fa-sort-desc\" style=\"position: absolute;top: 28%;right: 12px;\"></div>\r\n                        <ul class=\"zm-component-enter-select\">\r\n                            <li value=\"1\">男</li>\r\n                            <li value=\"2\">女</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>留言</span>\r\n                    <div class=\"zm-component-enter-inputBox textAreaBox\">\r\n                        <i>留言</i>\r\n                        <textarea class=\"zm-component-enter-input\" rows=\"\" cols=\"\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <button type=\"button\" class=\"zm-component-enter-submit\">提交</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"},{"fId":"360","fName":"填空问卷2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-enter-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"enter\">\r\n            <form action=\"\" class=\"zm-component-enter-form infoOutside\">\r\n                <div class=\"zm-component-enter-formTitle\">请留下您的联系方式：</div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>姓名</span>\r\n                    <div class=\"zm-component-enter-inputBox\" tabindex=\"1\">\r\n                        <i>姓名</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>生日</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>生日</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>账号</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>账号</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>邮箱</span>\r\n                    <div class=\"zm-component-enter-inputBox\">\r\n                        <i>邮箱</i>\r\n                        <input type=\"text\" class=\"zm-component-enter-input\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>性别</span>\r\n                    <div class=\"zm-component-enter-selectBox\" tabindex=\"2\">\r\n                        <i>性别</i>\r\n                        <div class=\"fa fa-sort-desc\" style=\"position: absolute;top: 28%;right: 12px;\"></div>\r\n                        <ul class=\"zm-component-enter-select\">\r\n                            <li value=\"1\">男</li>\r\n                            <li value=\"2\">女</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <span>留言</span>\r\n                    <div class=\"zm-component-enter-inputBox textAreaBox\">\r\n                        <i>留言</i>\r\n                        <textarea class=\"zm-component-enter-input\" rows=\"\" cols=\"\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-enter-options\">\r\n                    <button type=\"button\" class=\"zm-component-enter-submit\">提交</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"}]},{"fComponentType":"50","fComponentTypeName":"选择问卷","list":[{"fId":"386","fName":"选择问卷样式1","fPreviewImg":"","fContext":"<div class=\"zm-component-function-option-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"option\">\r\n            <form action=\"\" class=\"zm-component-option-form optionWidth1\">\r\n                <div class=\"zm-component-option-formTitle\">调研问卷</div>\r\n                <div class=\"zm-component-option-options clearFloat\">\r\n                    <div class=\"zm-component-option-optionTitle\"><span>1、</span><i>您最喜欢哪个明星？</i></div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"张曼玉\" name=\"actor\"><span>A.</span><i>章子怡</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"林青霞\" name=\"actor\"><span>B.</span><i>林青霞</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"蒋雯丽\" name=\"actor\"><span>C.</span><i>蒋雯丽</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"高圆圆\" name=\"actor\"><span>D.</span><i>高圆圆</i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-option-options clearFloat\">\r\n                    <div class=\"zm-component-option-optionTitle\"><span>2、</span><i>导游人员应有的服务技能包含？</i></div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"服务性\" name=\"skill\"><span>A.</span><i>服务性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"文化性\" name=\"skill\"><span>B.</span><i>文化性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"社会性\" name=\"skill\"><span>C.</span><i>社会性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"规范性\" name=\"skill\"><span>D.</span><i>规范性</i>\r\n                    </div>\r\n                </div>\r\n<div class=\"zm-component-option-submitBox\">\r\n                    <button class=\"zm-component-option-submitBtn\">提交</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"},{"fId":"387","fName":"填空问卷样式2","fPreviewImg":"","fContext":"<div class=\"zm-component-function-option-main\">\r\n        <div class=\"zm-component-function-content\" data-functionType=\"option\">\r\n            <form action=\"\" class=\"zm-component-option-form optionWidth2\">\r\n                <div class=\"zm-component-option-formTitle\">调研问卷</div>\r\n                <div class=\"zm-component-option-options clearFloat\">\r\n                    <div class=\"zm-component-option-optionTitle\"><span>1、</span><i>您最喜欢哪个明星？</i></div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"张曼玉\" name=\"actor\"><span>A.</span><i>章子怡</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"林青霞\" name=\"actor\"><span>B.</span><i>林青霞</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"蒋雯丽\" name=\"actor\"><span>C.</span><i>蒋雯丽</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"radio\" value=\"高圆圆\" name=\"actor\"><span>D.</span><i>高圆圆</i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"zm-component-option-options clearFloat\">\r\n                    <div class=\"zm-component-option-optionTitle\"><span>2、</span><i>导游人员应有的服务技能包含？</i></div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"服务性\" name=\"skill\"><span>A.</span><i>服务性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"文化性\" name=\"skill\"><span>B.</span><i>文化性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"社会性\" name=\"skill\"><span>C.</span><i>社会性</i>\r\n                    </div>\r\n                    <div class=\"zm-component-option-optionBox\">\r\n                        <input type=\"checkbox\" value=\"规范性\" name=\"skill\"><span>D.</span><i>规范性</i>\r\n                    </div>\r\n                </div>\r\n<div class=\"zm-component-option-submitBox\">\r\n                    <button class=\"zm-component-option-submitBtn\">提交</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"}]}],"text":[{"fComponentType":"2","fComponentTypeName":"标题文字","list":[{"fId":"215","fName":"小标题文字","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 20px;  font-family: 微软雅黑;\" >小标题文字</div>"},{"fId":"216","fName":"中标题文字","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 30px;  font-family: 微软雅黑;\" >中标题文字</div>"},{"fId":"217","fName":"大标题文字","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 40px;  font-family: 微软雅黑;\" >大标题文字</div>"},{"fId":"12","fName":"超大标题文字","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 48px;  font-family: 微软雅黑;\">超大标题文字</div>"}]},{"fComponentType":"23","fComponentTypeName":"内容或段落","list":[{"fId":"225","fName":"段落样式","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 14px;  font-family: 微软雅黑;\" >本段落可编辑，文本框大小可调节，文字大小可调，文字可编排，背景色可编辑...（请勿使用带有暴力、淫秽以及其他违法的文字描述）</div>"},{"fId":"226","fName":"段落样式2","fPreviewImg":"","fContext":"<div class=\"zm-component-main zm-component-main-text\" style=\"width: 300px; font-size: 14px;background:#666;  font-family: 微软雅黑;border:2px solid #333;color: #fff;\" >本段落可编辑，文本框大小可调节，文字大小可调，文字可编排，背景色可编辑...（请勿使用带有暴力、淫秽以及其他违法的文字描述）</div>"}]},{"fComponentType":"51","fComponentTypeName":"标题内容","list":[{"fId":"358","fName":"标题+内容","fPreviewImg":"","fContext":"<div  class=\"zm-edit-component-text-titleCont\" style=\"width:300px;height:auto;background-color:transparent;font-family:'微软雅黑';font-size:14px\">\r\n    <h3 style=\"width:100%;height:auto;font-size:1.5em;font-weight:bold;text-align:center\">文本标题</h3>\r\n    <p style=\"display: block;width:100%;height:auto;line-height:1.6;\">本段落可编辑，文本框大小可调节，文字大小可调，文字可编排，背景色可编辑...（请勿使用带有暴力、淫秽以及其他违法的文字描述）</p>\r\n</div>"}]}],"audio":[{"fComponentType":"37","fComponentTypeName":"快捷播放","list":[{"fId":"269","fName":"miniplayer-01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-01 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"294","fName":"miniplayer-02","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-02 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"295","fName":"miniplayer-03","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-03 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"296","fName":"miniplayer-04","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-04 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"297","fName":"miniplayer-05","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-05 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"298","fName":"miniplayer-06","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-06 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"299","fName":"miniplayer-07","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-07 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">孙露</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">漂洋过海来看你</span>\r\n    </div>\r\n</div>"},{"fId":"300","fName":"miniplayer-08","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-08 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"301","fName":"miniplayer-09","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-09 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"302","fName":"miniplayer-10","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-10 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"303","fName":"miniplayer-11","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-11 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"304","fName":"miniplayer-12","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-12 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"305","fName":"miniplayer-13","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-13 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"306","fName":"miniplayer-14","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-14 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"},{"fId":"307","fName":"miniplayer-15","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-mini mini-style-15 mini_player clearFloat\">\r\n    <div class=\"zm-edit-components-audio-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-title\">\r\n        <span class=\"composer\">银临</span>\r\n        <i>&nbsp;-&nbsp;</i>\r\n        <span class=\"songName\">牵丝戏</span>\r\n    </div>\r\n</div>"}]},{"fComponentType":"42","fComponentTypeName":"播放面板","list":[{"fId":"308","fName":"播放面板","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-intact play_panel clearFloat\">\r\n    <div class=\"zm-edit-components-audio-intact-player\">\r\n        <div class=\"zm-edit-components-audio-box\">\r\n            <div class=\"zm-edit-components-audio-wrap\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                    <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-intact-title\">\r\n        <div class=\"composer intact-title-singer\">汪峰</div>\r\n        <div class=\"songName intact-title-name\">怒放的生命</div>\r\n    </div>\r\n    <div class=\"zm-edit-components-audio-intact-other\">\r\n        <div class=\"zm-edit-components-audio-intact-icon\">\r\n            <span class=\"fa fa-heart-o\"></span>\r\n            <span class=\"fa fa-share-alt\"></span>\r\n        </div>\r\n        <div class=\"zm-edit-components-audio-intact-totalTime\">\r\n            <span>02:35</span>\r\n        </div>\r\n    </div>\r\n</div>"}]},{"fComponentType":"44","fComponentTypeName":"专辑播放器","list":[{"fId":"314","fName":"专辑播放","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-album panel_list clearFloat\">\r\n    <div class=\"zm-audio-player-panel\">\r\n        <div class=\"zm-audio-player-albumInfo\">\r\n            <div class=\"player-album-cover\">\r\n                <div class=\"album-cover-image\">\r\n                    <img src=\"imgs/album01.png\">\r\n                </div>\r\n                <div class=\"zm-edit-components-audio-wrap\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">\r\n                        <polygon points=\"40,25,70,50,40,75\"></polygon>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <div class=\"player-album-message\">\r\n                <p class=\"album-message-name\"><span>专辑名&nbsp;:&nbsp;</span><a>周杰伦的床边故事</a></p>\r\n                <p class=\"album-message-type\"><span>专辑类型&nbsp;:&nbsp;</span><a>现场</a></p>\r\n                <p class=\"album-message-language\"><span>语言&nbsp;:&nbsp;</span><a>普通话</a></p>\r\n                <p class=\"album-message-loader\"><span>专辑下载次数&nbsp;:&nbsp;</span><a>42555535</a></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"zm-audio-player-otherInfo\">\r\n            <div class=\"player-otherInfo-button\">\r\n                <div class=\"otherInfo-button-top\">\r\n                    <span class=\"otherInfo-loadAlbum\">免费下载专辑</span>\r\n                </div>\r\n                <div class=\"otherInfo-button-bottom\">\r\n                    <span class=\"otherInfo-loadChoice\">下载所选音频</span>\r\n                    <span class=\"otherInfo-invert\">反选</span>\r\n                    <span class=\"otherInfo-selectAll\">全选</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"player-otherInfo-message\">\r\n                <div class=\"otherInfo-message-wrap\">\r\n                   <span class=\"otherInfo-discuss\">\r\n                        <i>123456789</i>\r\n                        <a>评论</a>\r\n                    </span>\r\n                        <span class=\"otherInfo-collect\">\r\n                        <i>123456789</i>\r\n                        <a>收藏</a>\r\n                    </span>\r\n                        <span class=\"otherInfo-play\" style=\"border-left: none\">\r\n                        <i>123456789</i>\r\n                        <a>播放</a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-audio-player-list\">\r\n        <ul class=\"clearFloat\">\r\n            <li class=\"clearFloat\"->\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>01</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>床边故事</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>02</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>说走就走</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>03</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>一点点</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>04</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>前世情人</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>05</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>英雄</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>06</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>不该(width MEI)</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>07</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>土耳其冰淇淋</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>08</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>告白气球</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>09</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>Now You See Me</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>10</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>爱情废柴</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"},{"fId":"346","fName":"专辑播放器_mini","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-audio-player-album-mini panel_list_mini clearFloat\">\r\n    <div class=\"zm-audio-player-panel\">\r\n        <div class=\"zm-audio-player-albumImg\">\r\n            <div class=\"player-album-cover\">\r\n                <div class=\"album-cover-image\">\r\n                    <img src=\"imgs/album01.png\" width=\"100%\" height=\"100%\">\r\n                </div>\r\n                <div class=\"album-cover-play\">\r\n                    <i></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"player-album-button\">\r\n                <div class=\"album-button-choose\">\r\n                    <span class=\"checkAll\">全选</span>\r\n                    <span class=\"unCheck\">反选</span>\r\n                </div>\r\n                <div class=\"album-button-load\">\r\n                    <span class=\"loadAll\">免费下载专辑</span>\r\n                    <span class=\"loadChoose\">下载所选音频</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"zm-audio-player-albumInfo\">\r\n            <div class=\"player-album-Info\">\r\n                <div class=\"album-info-name\">\r\n                    <i>专辑名&nbsp;:&nbsp;</i>\r\n                    <span>以父之名</span>\r\n                </div>\r\n                <div class=\"album-info-loadNumber\">\r\n                    <i>专辑下载次数&nbsp;:&nbsp;</i>\r\n                    <span>5858次</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"player-album-collect\">\r\n                <a>评论</a>\r\n                <a>收藏</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zm-audio-player-list\">\r\n        <ul class=\"clearFloat\">\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>01</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>床边故事</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>02</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>说走就走</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>03</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>一点点</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>04</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>前世情人</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>05</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>英雄</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>06</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>不该(width MEI)</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>07</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>土耳其冰淇淋</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>08</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>告白气球</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>09</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>Now You See Me</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"clearFloat\">\r\n                <div class=\"clearFloat\">\r\n                    <div class=\"list-choice\">\r\n                        <i class=\"fa fa-check\"></i>\r\n                    </div>\r\n                    <div class=\"list-number\">\r\n                        <i>10</i>\r\n                    </div>\r\n                    <div class=\"list-name\">\r\n                        <span><a>爱情废柴</a></span>\r\n                    </div>\r\n                    <div class=\"list-albumName\">\r\n                        <span><a>周杰伦的床边故事</a></span></div>\r\n                    <div class=\"list-singer\">\r\n                        <span><a>周杰伦</a></span>\r\n                    </div>\r\n                    <div class=\"list-time\">\r\n                        <span>03:46</span>\r\n                    </div>\r\n                    <div class=\"list-icon\">\r\n                        <div>\r\n                            <i class=\"fa fa-play\"></i>\r\n                        </div>\r\n                        <div>\r\n                            <i class=\"fa fa-share-alt\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-load\">\r\n                        <span><a>下载2.00元</a></span>\r\n                    </div>\r\n                    <div class=\"list-playNumber\">\r\n                        <span>10.2万次播放</span>\r\n                    </div>\r\n                    <div class=\"list-loadNumber\">\r\n                        <span>1286次下载</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"}]},{"fComponentType":"45","fComponentTypeName":"专辑列表","list":[{"fId":"347","fName":"专辑列表","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-list list_album clearFloat\" style=\"width: 300px;height:200px;background-color: #efefef\"><img src=\"./imgs/index/album01.png\" style=\"width:100%\"></div>"}]}],"btn":[{"fComponentType":"5","fComponentTypeName":"普通按钮","list":[{"fId":"231","fName":"普通按钮03","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:3px;\">Button</div>"},{"fId":"232","fName":"普通按钮04","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:6px;\">Button</div>"},{"fId":"233","fName":"普通按钮05","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:10px;\">Button</div>"},{"fId":"234","fName":"普通按钮06","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:999px;\">Button</div>"},{"fId":"235","fName":"普通按钮07","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#337ab7;color:#fff;width: 82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"236","fName":"普通按钮08","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#5cb85c ;color:#fff;width:82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"237","fName":"普通按钮09","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#5bc0de ;color:#fff;width: 82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"239","fName":"普通按钮11","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#d9534f ;color:#fff;width: 82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"240","fName":"普通按钮12","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#f5f5f5;color:#333;width: 82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"229","fName":"普通按钮01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#fff;border:1px solid #4ab1a7;color:#333;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;\">Button</div>"},{"fId":"238","fName":"普通按钮10","fPreviewImg":"","fContext":"<div style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#f0ad4e ;color:#fff;width: 82px;height: 36px;line-height: 36px;text-align: center;font-size:18px;border-radius:4px;\">Button</div>"},{"fId":"241","fName":"普通按钮13","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;color:#fff;width: 58px;height: 58px;line-height: 58px;text-align: center;font-size:16px;border-radius:50%;\">按钮</div>"},{"fId":"242","fName":"普通按钮14","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#f0ad4e;color:#fff;width: 58px;height: 58px;line-height: 58px;text-align: center;font-size:16px;border-radius:50%;box-shadow:0 3px 3px #ccc;\">按钮</div>"},{"fId":"243","fName":"普通按钮15","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#f0ad4e;color:#fff;width: 58px;height: 58px;line-height: 58px;text-align: center;font-size:16px;border-radius:50%;box-shadow:3px 0 3px #ccc;\">按钮</div>"},{"fId":"244","fName":"普通按钮16","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#f0ad4e;color:#fff;width: 58px;height: 58px;line-height: 58px;text-align: center;font-size:16px;border-radius:50%;box-shadow:0 0 3px #ccc;\">按钮</div>"},{"fId":"245","fName":"普通按钮17","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#fff;color:#4ab1a7;width: 82px;height: 32px;line-height: 30px;border:1px solid #4ab1a7;text-align: center;font-size:16px;border-radius:4px;\">按钮</div>"},{"fId":"246","fName":"普通按钮18","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#fff;color:#4ab1a7;width: 82px;height: 32px;line-height: 30px;border:1px solid #4ab1a7;text-align: center;font-size:16px;border-radius:10px;\">按钮</div>"},{"fId":"247","fName":"普通按钮19","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#fff;color:#4ab1a7;width: 82px;height: 32px;line-height: 30px;border:1px solid #4ab1a7;text-align: center;font-size:16px;border-radius:999px;\">按钮</div>"},{"fId":"230","fName":"普通按钮02","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#4ab1a7;border:1px solid #4ab1a7;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;\">Button</div>"}]},{"fComponentType":"6","fComponentTypeName":"特殊按钮","list":[{"fId":"248","fName":"特殊按钮01","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#00bfff;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:20px 0 0 0;\">Button</div>"},{"fId":"249","fName":"特殊按钮02","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#00bfff;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:0 20px 0 0;\">Button</div>"},{"fId":"250","fName":"特殊按钮03","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#00bfff;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:0 0 0 20px;\">Button</div>"},{"fId":"251","fName":"特殊按钮04","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#00bfff;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:24px;border-radius:0 0 20px 0;\">Button</div>"},{"fId":"252","fName":"特殊按钮05","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#d9534f;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:20px;border-radius:20px 0 20px 0;\">Button</div>"},{"fId":"253","fName":"特殊按钮06","fPreviewImg":"","fContext":"<div class=\"zm-edit-components-button\" style=\"font-family:'Microsoft Yahei';box-sizing: border-box;outline: 0;cursor:pointer;border: none;background-color:#d9534f;color:#fff;width: 136px;height: 36px;line-height: 36px;text-align: center;font-size:20px;border-radius:0 20px 0 20px;\">Button</div>"}]}],"map":[{"fComponentType":"10","fComponentTypeName":"百度地图","list":[{"fId":"30","fName":"百度地图","fPreviewImg":"http://image.zuma.com/upload/816089147173603334.png","fContext":"<div class=\"zm-component-map-main\"><div class=\"zm-component-map-content\">\r\n<img src=\"imgs/bMap-small.png\" title=\"百度地图组件\" data-map=\"\"/>\r\n</div></div>"}]}]}
            $(".zm-components-ul li").on("click",function(){
                zmEditor.component.showDetail(this);
            });

            // $.getJSON("components.json",function(data){
            //     zmEditor.arr.componentsList=data;
            //     // console.log(JSON.stringify(zmEditor.arr.widgetList))
            //     /*点击组件类型，显示组件详情*/
            //     $(".zm-components-ul li").on("click",function(){
            //         zmEditor.component.showDetail(this);
            //     });
            // })
            // $.zmAjax({
            //     type: "get",
            //     url: zmEditor.url.getComponentsList,
            //     dataType: "json",
            //     success: function(e){
            //         zmEditor.arr.componentsList=e.data;
            //         console.log(zmEditor.arr.componentsList);
            //         /*点击组件类型，显示组件详情*/
            //         $(".zm-components-ul li").on("click",function(){
            //             zmEditor.component.showDetail(this);
            //         });
            //     },
            //     error:function(){
            //         $(".zm-components-type>ul").html('<li style="width:100%"> 数据库连接出错咯~</li>');
            //     }
            // });
        },
        //显示组件列表
        showDetail:function(e){
            var _this = $(e);
            var detailBox = $('.zm-components-detail');
            var detailContent=$(".zm-components-detail-content");
            var detailTitle=$(".zm-components-detail-title");
            var curLi = 'zm-components-type-curLi';
            var attrTypeStr='data-zm-component-type';
            if(detailBox.data('isSort')){zmManage.componentListIsSort();return;}
            var index = _this.index();
            var detail = detailContent.children("div.zm-components-detail-term").eq(index);
            detail.attr('data-zm-isShow',true).siblings().attr('data-zm-isShow',false);
            //判断是否点击过了
            if(!_this.data("hasLoading")||_this.data("hasLoading")==undefined){
                var type = _this.attr(attrTypeStr);
                detail.attr(attrTypeStr,type);
                var list =zmEditor.arr.componentsList[type];
                var allHtml ="";
                //var anchorHtml ='';
                if(list!=undefined){
                    var len=list.length;
                    for(var i=0;i<len;i++){
                        var list2 = list[i];
                        var len2 =list2.list.length;
                        var ulHtml ="";
                        for(var j= 0;j<len2;j++){
                            var list3 = list2.list[j];
                            ulHtml+='<li data-zm-fId="'+list3.fId+'" data-zm-fName="'+list3.fName+'">'+list3.fContext+'</li>';
                        }
                        // allHtml+='<fieldset id="'+type+'anchor'+i+'" class="zm-component-fieldset " data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                        allHtml+='<fieldset class="zm-component-fieldset " data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                        //anchorHtml+='<span data-zm-anchor="'+type+'anchor'+i+'"></span>'
                    }
                    //detail.after('<div class="zm-components-detail-term-anchorBox"><div class="zm-components-detail-term-anchor">'+anchorHtml+'</div></div>');
                }
                else{
                    allHtml='<div style="height: 100px;line-height: 100px;margin: 0 auto;font-size: 20px;text-align: center;">亲~该分类暂时没有组件！</div>'
                }
                _this.data("hasLoading",true);
                if(detail.hasClass('mCustomScrollbar')){
                    detail.find('.mCSB_container').html(allHtml).mCustomScrollbar({theme:"minimal"});
                }
                else{
                    detail.html(allHtml).mCustomScrollbar({theme:"minimal"});
                }
            }
            _this.addClass(curLi).siblings().removeClass(curLi);
            detail.show().siblings('.zm-components-detail-term').hide();
            // var thisAnchorEle = detail.next();
            // thisAnchorEle.show().siblings('.zm-components-detail-term-anchorBox').hide();
            // thisAnchorEle.find('span:eq(0)').addClass('zm-components-detail-term-anchorCur').siblings().removeClass('zm-components-detail-term-anchorCur');
            detailBox.show();
            detailTitle.text(_this.text())//标题
        },
        //拖拽组件加载之前
        willMount:function(_this,type,main,component,box,boxId){
            switch (type){
                case "text":
                    //main.css({"width":"400px"});
                    main.css({"minWidth":"80px", "minHeight":"30px"});
                    break;
                case "btn":
                    main.css({"textAlign":"center"});
                    break;
                case "nav":
                    component.children("ul").html("");
                    break;
                case "container":
                case "banner":
                case "tab":
                case "carousel":
                    box.addClass('zm-container');
                    break;
                case "shape":
                    break;
                case "product":
                    break;
                case "function":
                    break;
                case "audio":
                    break;
                case "video":
                   // main.css({"width":"500px","height":"auto"});
                    //main.css({"width":"600px","height":"400px"});
                    break;
                default:

                    break;
            }
        },
        //拖拽组件已经加载
        didMount:function(_this,type,main,component,box,boxId){
            switch (type){
                case "text":
                    //是否只允许改变组件宽度
                    zmEditor.component.onlyResizeWidth(box);
                    break;
                case "container":
                    main.css({'width':parseInt(main.css('width'))*3,'height':parseInt(main.css('height'))*3})
                    break;
                case "nav":
                    zmEditor.globalMethod.nav.main_style(box,type);//ye添加。
                    break;
                case "banner":
                    box.find(".zm-component-main").css("width","1200px");
                    break;
                case "carousel":
                    var slideStyle = _this.find(".zm-component-carousel-box").attr("slide-type");
                    //获取图片轮播方式by oldZhang 2017-3-11 16:55:01
                    var thisImgSrc = _this.find(".zm-component-carousel-box img").attr("src");
                    //获取当前图片的路径
                    zmEditor.component.carousel.getImgsInfo(main,slideStyle,thisImgSrc);
                    break;
                case "product":
                    if(main.hasClass("zm-product-goods")){
                        main.css({"width":"600px","height":"300px"});
                    }
                    if(main.hasClass("list_product")){
                        main.empty();
                        setLocal(main,{key: "hotProduct",value: goodsList()});

                        var html = listComponent({col: 5,row: 2,key: "hotProduct",type: "product"});
                        for(var i in html){
                            main.append(html[i]);
                        }
                        main.css({"width":"950px","height":"580px"});
                    }
                    break;
                case "audio":
                    if(main.hasClass("play_panel")){
                        zmEditor.component.onlyResizeWidth(box);
                    }
                    if(main.hasClass("list_album")){
                        main.empty();
                        setLocal(main,{key: "hotAlbum",value: albumList()});
                        var html = listComponent({col: 5,row: 2,key: "hotAlbum",type: "album"});
                        for(var i in html){
                            main.append(html[i]);
                        }
                        main.css({"width": "950px","height": "580px"});
                    }
                    break;
                case "video":
                    // main.css({"width":"500px","height":"auto"});
                    //main.css({"width":"600px","height":"400px"});
                    //var nowIconBtn= main.find(".zm-videoBlackcover svg")? main.find(".zm-videoBlackcover svg"):main.find(".zm-video-btn")
                    //main.find(".zm-videoBlackcover .zm-video-btn").addClass("zm-video-btn1")
                   // main.find(".zm-videoBlackcover .zm-videobtn-text").length>0? main.find(".zm-videoBlackcover .zm-videobtn-text").addClass("zm-video-btn2"):main.find(".zm-videoBlackcover .zm-video-btn").addClass("zm-video-btn1");
                    $.post(zmEditor.url.hotProduct,function(result){
                        // setLocal({key: "hotProduct",value: result.data});
                        var obj=result.data;
                        console.log(123214)
                         zmEditor.component.video.getVideoList(main,obj);
                    });
                    break;
                case "map":
                    main.find('.zm-component-map-content').empty();
                    zmEditor.component.map.bMapInit(boxId);
                    break;
                case "img":
                    zmEditor.component.isRotate(box);
                    zmEditor.component.img.picResize(main);
                    break;
                case "shape":
                    zmEditor.component.isRotate(box);
                    var isLine = main.find('.zm-component-shape-line');
                    var rootBox = isLine.closest('.zm-component-box1');
                    var pathD = isLine.find('path').attr('d');
                    if(isLine.length>0){
                        main.css({'padding':'12px 10px'})
                    }
                    isLine.length>0?pathD.indexOf('L')>0?zmEditor.component.onlyResizeHeight(rootBox):
                        zmEditor.component.onlyResizeWidth(rootBox):zmEditor.component.shape.shapeOriScale(main);
                    break;
                case "news":
                    main.css('width','300px').find('.zm-component-news-content').css('width','100%');
                    zmEditor.component.news.newsAllData();
                    zmEditor.component.news.setNewsStyle(main);
                    zmEditor.component.news.newsHoverPubic(main);
                    break;
                case "blog":
                    main.css('width','300px').find('.zm-component-news-content').css('width','100%');
                    zmEditor.component.blog.newsAllData();
                    zmEditor.component.blog.setNewsStyle(main);
                    zmEditor.component.news.newsHoverPubic(main);
                    break;
                case "function":
                    var functionType =  main.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case "search":
                            zmEditor.component.function.searchMethod.searchBarGetReady(main);
                            break;
                        case "shopping":
                            zmEditor.component.function.shoppingMethod.shoppingCartGetReady(main);
                            break;
                        case "file":
                            zmEditor.component.function.fileMethod.fileGetReady(main);
                            break;
                        case "share":
                            zmEditor.component.function.shareMethod.shareGetReady(main);
                            break;
                        case "enter":
                            zmEditor.component.function.enterMethod.enterGetReady(main);
                            break;
                        case "option":
                            zmEditor.component.function.optionMethod.optionGetReady(main);
                            break;
                        default:
                            zmEditor.component.function.registrationMethod.sundryGetReady(main,functionType);
                            break
                    }
                    break;
                default:
                    break;
            }
        },
        //当前编辑的组件
        nowEdit:function(){
            return $(".zm-component-nowEdit").find(".zm-component-main").eq(0);
        },
        //当前组件的box1
        nowBox1:function(e){
            if(e){
                return e.closest('.zm-component-box1');
            }
            else{
                return $('.zm-component-nowEdit');
            }
        },
        //页面组件list
        box1List:function(){
            return $('.zm-component-box1');
        },
        //是否可旋转
        isRotate:function(box){
            box.find('.zm-component-resize').remove();
            box.find('.zm-component-box2 .zm-component-main').append(zmEditor.str.component.resize)
            box.children('.zm-component-box2').find('.zm-component-main').append(zmEditor.str.component.rotate);
            box.children('.zm-component-box2').find('.zm-component-location').append(zmEditor.str.component.rotateVal);
            var r = box.find('.zm-component-box2').find('.zm-component-main').attr('data-zm-rotate');
            if(r){
                box.find(".zm-component-location-r").eq(0).html(parseInt(r)+'°');
            }
            else{
                box.find(".zm-component-location-r").eq(0).html(0+'°');
            }
        },
        //只允许组件改变宽度
        onlyResizeWidth:function(e){
            e.find(".zm-component-resize>span").each(function(){
                if($(this).index()!=3&&$(this).index()!=7){
                    $(this).hide();
                }
            })
        },
        //只允许组件改变宽度
        onlyResizeHeight:function(e){
            e.find(".zm-component-resize>span").each(function(){
                if($(this).index()!=1&&$(this).index()!=5){
                    $(this).hide();
                }
            })
        },
        //获取并设置组件坐标区域x,y,w
        setLocation:function(e,x,y,w,h){
            if(x){
                e.find(".zm-component-location-x").eq(0).html(parseInt(x));
            }
            if(y){
                e.find(".zm-component-location-y").eq(0).html(parseInt(y));
            }
            if(w){
                e.find(".zm-component-location-w").eq(0).html(parseInt(w));
            }
            if(h){
                e.find(".zm-component-location-h").eq(0).html(parseInt(h));
            }
        },
        //显示组件操作区域
        showOption:function(box1,downX,downY){
            var box2=box1.children('.zm-component-box2');
            var boxLeft = box1.offset().left;
            var boxTop = box1.offset().top;
            var editOption = box2.find('.zm-component-edit:eq(0)');
            if(boxTop<120||boxLeft<150) editOption.css({left:downX-boxLeft,top:downY-boxTop-60});
            else editOption.removeAttr('style');
            $(".zm-component-nowEdit").find('.zm-component-resize,.zm-component-edit,.zm-component-location,.zm-component-rotate,.zm-component-carousel-picTip').hide();
            $(".zm-component-nowEdit").removeClass("zm-component-nowEdit");
            box1.addClass("zm-component-nowEdit");
            box2.children('.zm-component-carousel-picTip').show();
            box2.children('.zm-component-main-temp').find('.zm-component-location,.zm-component-edit,.zm-component-resize,.zm-component-rotate').show();
            box2.children('.zm-component-main').children('.zm-component-resize,.zm-component-rotate').show();
            box2.children('.zm-component-main-temp').find('.zm-component-edit').addClass('zmAnimate zmBounceIn');
        },
        //设置而非拖动
        isSetting:function(e){
            if($(e.target).closest('.zm-component-main-temp').length>0){return true;}
            else{return false;}
        },
        //拖拽辅助线
        dragHelpLine:function(box,boxWidth,boxLeft,boxTop,rowWidth,rowLeft,rowTop,pyl){
            var xLineVal,yLineVal,boxLeftVal,boxTopVal,xLineShow,yLineShow;
            if(boxLeft>-pyl&&boxLeft<pyl){
                yLineVal=rowLeft;
                boxLeftVal=0;
                yLineShow='block';
            }
            else if(boxLeft>rowWidth-boxWidth-pyl&&boxLeft<rowWidth-boxWidth+pyl){
                yLineVal=rowWidth+rowLeft;
                boxLeftVal=rowWidth-boxWidth;
                yLineShow='block';
            }
            else if(boxLeft>rowWidth/2-boxWidth/2-pyl&&boxLeft<rowWidth/2-boxWidth/2+pyl){
                yLineVal=rowLeft+rowWidth/2;
                boxLeftVal=rowWidth/2-boxWidth/2;
                yLineShow='block';
            }
            else{
                var findBoxY=false;
                zmEditor.component.box1List().not(box).each(function(){
                    var thisBoxLeft=$(this).offset().left;
                    if(thisBoxLeft-pyl<boxLeft+rowLeft&&thisBoxLeft+pyl>boxLeft+rowLeft){
                        findBoxY=true;
                        yLineVal=thisBoxLeft;
                        boxLeftVal=thisBoxLeft-rowLeft;
                        yLineShow='block';
                        return;
                    }
                })
                if(!findBoxY){
                    yLineVal=0;
                    boxLeftVal=boxLeft;
                    yLineShow='none';
                }
            }
            //begin:组件之间辅助线
            var findBoxX=false;
            zmEditor.component.box1List().not(box).each(function(){
                var thisBoxTop=$(this).offset().top;
                if(thisBoxTop-pyl<boxTop+rowTop&&thisBoxTop+pyl>boxTop+rowTop){
                    findBoxX=true;
                    xLineVal=thisBoxTop;
                    boxTopVal=thisBoxTop-rowTop;
                    xLineShow='block';
                    return;
                }
            })
            if(!findBoxX){
                xLineVal=0;
                boxTopVal=boxTop;
                xLineShow='none';
            }
            //end
            $('#zm-xHelpLine').css({display:xLineShow,top:xLineVal});
            $('#zm-yHelpLine').css({display:yLineShow,left:yLineVal})
            return {left:boxLeftVal,top:boxTopVal};
        },
        //将组件放入容器中
        pushComponentToContainer:function(container,_this){
            var containerId = container.attr("id");
            var cOffset = container.offset();
            var cLeft = cOffset.left;
            //var cRight = cOffset.left+container.outerWidth();
            var cTop = cOffset.top;
            //var cBottom = cOffset.top+container.outerHeight();
            var tOffset = _this.offset();
            var tLeft = tOffset.left;
            var tTop = tOffset.top;
            var box;
            var containerMaxIndex = parseInt(container.attr('data-zm-maxIndex'))||0;
            // var containerMinIndex = parseInt(container.attr('data-zm-minIndex'))||0;
            container.attr({'data-zm-maxIndex':containerMaxIndex+1});
            //从组件列表拖入页面
            if(_this[0].tagName.match(/li/i)){
                var type = _this.closest(".zm-components-detail-term").attr("data-zm-component-type")||"";
                var type2 = _this.closest(".zm-component-fieldset ").attr("data-zm-fId")||"";
                var name = _this.attr('data-zm-fName');
                var component = _this.children();
                box = $(zmEditor.str.component.box1);
                var boxId = zmEditor.createId(box);
                var fId = _this.attr("data-zm-fId");
                var main = box.find(".zm-component-main");
                if(type=='text'||type=='btn'){
                    main.append(component.prop('outerHTML'))
                }
                else{
                    var style = component.attr("style");
                    var iClass = component.attr("class");
                    main.attr("style",style).addClass(iClass).css({'overflow':'visible'}).append(component.html());
                }
                //组件装载before
                zmEditor.component.willMount(_this,type,main,component,box,boxId);
                //组件装载ing
                box.attr({"data-zm-component-type":type,"data-zm-component-type2":type2,"data-zm-fId":fId,"data-zm-fName":name,
                    "data-zm-containerId":containerId, "data-zm-index":containerMaxIndex+1})
                    .css({"position": "absolute", "left": tLeft - cLeft, "top": tTop - cTop,"z-index":containerMaxIndex+1})
                    .appendTo(container);
                //组件装载after
                zmEditor.component.didMount(_this,type,main,component,box,boxId);
                zmEditor.component.showOption(box,tLeft,tTop);
                var r = box.children('.zm-component-box2').find('.zm-component-main').css('transform')
                //设置组件坐标区显示
                zmEditor.component.setLocation(box,tLeft-cLeft-1,tTop-cTop,box.outerWidth(),box.outerHeight(),r);
                zmEditor.action.save('add');
            }
            //页面中已有组件拖动
            else{
                box=_this;
                var lastContainerId = box.attr('data-zm-containerId');
                if(containerId!=lastContainerId){
                    box.css({"position": "absolute", "left": tLeft - cLeft-1, "top": tTop - cTop,"z-index":containerMaxIndex+1});
                    box.attr({'data-zm-containerId':containerId,"data-zm-index":containerMaxIndex+1});
                    container.append(box);
                }
                var r = box.children('.zm-component-box2').find('.zm-component-main').css('transform');
                //设置组件坐标区显示
                zmEditor.component.setLocation(box,tLeft-cLeft-1,tTop-cTop,box.outerWidth(),box.outerHeight(),r);
                zmEditor.action.save();
                //_this.attr("data-zm-pageId",obj.attr("data-zm-pageId"))
            }

            //保存操作动作
            //组件发布保存为草稿按钮专用遮罩层
            //$('.zm-publish-save-mask').show();
        },
        //在同一层级中遍历所有满足条件的容器并返回层级最高的容器
        findContainerInSameLevel:function(e,_this, upX, upY){
            var containerList =[],outPut={};
            outPut.lastContainer = e.lastContainer;
            if(e.nowContainer.children('.zm-container').not(_this).length>0){
                e.nowContainer.children('.zm-container').not(_this).each(function(){
                    var obj = $(this);
                    var offset = obj.offset();
                    var oLeft = offset.left;
                    var oRight = offset.left+obj.outerWidth();
                    var oTop = offset.top;
                    var oBottom = offset.top+obj.outerHeight();
                    if(upX>oLeft&&upX<oRight&&upY>oTop&&upY<oBottom){
                        containerList.push({container:obj,iIndex:obj.css('zIndex')});
                        // console.log(oLeft,upX,oRight,oTop,upY,oBottom)
                    }
                })
            }
            //在满足坐标的容器中筛选最佳容器
            if(containerList.length>0){
                var i=0,len = containerList.length,maxIndex =containerList[0];
                for(;i<len;i++){
                    if(containerList[i].iIndex>maxIndex.iIndex){
                        maxIndex=containerList[i];
                    }
                }
                outPut.nowContainer = maxIndex.container;
            }
            return outPut;
        },
        //按层级递归遍历对应层级中的容器
        autoFindContainer:function(containers,_this, upX, upY){
            //满足条件则回调本身
            if(containers.nowContainer){
                zmEditor.component.autoFindContainer(
                    zmEditor.component.findContainerInSameLevel(
                        {nowContainer:containers.nowContainer,lastContainer:containers.nowContainer},_this, upX, upY
                    ),_this, upX, upY
                );
            }
            //不满足条件则说明已经找到最适合容器，那么就将组件放入该容器中
            else{
                var obj = containers.lastContainer;
                var containerId = obj.attr("id");
                var containerType = obj.attr('data-zm-component-type');
                switch(containerType){
                    //tab组件特殊处理
                    case "tab":
                        obj=obj.find('.zm-edit-components-tabs-cont:eq(0)');
                        obj.children('div').each(function(){
                            var tabItem = $(this);
                            if(tabItem.css('display')=='block'){
                                obj = tabItem;
                                obj.attr('id',containerId+'-'+obj.index());
                                zmEditor.component.autoFindContainer(
                                    zmEditor.component.findContainerInSameLevel(
                                        {nowContainer: obj, lastContainer: obj}, _this, upX, upY
                                    ), _this, upX, upY
                                );
                                return false;
                            }
                        })
                        break;
                    //轮播组件特殊处理
                    case "carousel":
                        var index = obj.children('.zm-component-box2').children('.zm-component-carousel-picTip').children('.zm-component-carousel-pageTip').children('span:eq(0)').text();
                        obj=obj.find('.zm-component-carousel-box:eq(0)').children('figure').eq(index-1);
                        obj.attr('id',containerId+'-'+obj.index());
                        zmEditor.component.autoFindContainer(
                            zmEditor.component.findContainerInSameLevel(
                                {nowContainer: obj, lastContainer: obj}, _this, upX, upY
                            ), _this, upX, upY
                        );
                        break;
                    default:
                        zmEditor.component.pushComponentToContainer(obj,_this,upX,upY);
                        break;

                }
            }
        },
        //beforeStyle
        beforeStyle:function(type,list,box){
            var iSelected=zmEditor.component.nowEdit();
            switch (type){
                case "btn":
                    break;
                case "shape":
                    list = iSelected.hasClass('blockShape')?[list[1],list[2],list[3]]:[list[0]];
                    break;
                case "function":
                    var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case 'search':
                            list = [list[0]];
                            break;
                        case 'shopping':
                            list = [list[1]];
                            break;
                        case 'file':
                            list = [list[3]];
                            break;
                        case 'enter':
                            list = [list[5]];
                            break;
                        case 'option':
                            list = [list[6]];
                            break;
                        default:
                            list = [list[2]];
                            break;
                    }
                    break;
                case "nav":
                    box.addClass('data-nav-Independent-nav');
                    if(/vertical/.test(iSelected[0].classList[4])){
                        list=[list[1]]
                    }else{
                        list=[list[0]]
                    }
                    break;
                case "banner":
                    break;
                default:
                    break;
            };
            return list;
        },
        //点击改变样式
        changeStyle:function(type,_this){
            var iSelected = zmEditor.component.nowEdit();
            var com_box=zmEditor.component.nowBox1();
            var curFlag = '<span class="zm-component-settingPanel-curLiFlag fa fa-check"></span>';
            var id = _this.attr('data-zm-fid');
            com_box.attr('data-zm-fid',id);
            $('.zm-component-settingPanel-curLiFlag').remove();
            _this.append(curFlag);
            switch(type){
                case "nav":
                    // debugger;
                    if($(this).closest("ul").parent()[0].tagName.toLowerCase()=="div"){
                        var a,b,nav_name;
                        a=$(this).closest(".zm-nav")[0].classList[2];//获取样式标志
                        // b=$(this).closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-main");
                        b=zmEditor.component.nowEdit();
                        console.log(b);
                        nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(b);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "sStyle", "initStyle","li",nav_name,["width","height","lineHeight"]);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "hHover", "initHover","li",nav_name,["width","height","lineHeight"]);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, a, "clickhover", "initclickhover","li",nav_name);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, a, "sStyle", "initStyle","span",nav_name,["width","height"]);
                        zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",nav_name,a); //下拉列表的颜色
                        // console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name])
                        // console.log(b);
                        var c,d,e,f;
                        c=b[0].classList[3],d=b[0].classList[4]; //移除类名
                        b.removeClass(c).removeClass(d);
                        e=$(this).closest(".zm-nav")[0].classList[1];
                        b.addClass(e).addClass(a);
                        // console.log(nav_name);
                        f=nav_name.replace(/-([A-z]+|_)*(\d+)/i,function(match,p1,p2,offset,string){
                            // console.log(match)
                            // console.log(p1)
                            // console.log(p2)
                            //本身以及子节点替换类名nav类型   //three:替换dom元素属性
                            // 替换mainCLss
                            b.removeAttr("data-"+p1);
                            b.attr("data-"+a,a+p2+"");
                            // 替换mainCLss
                            // 替换styleCLss
                            $(".style_nav_data-"+p1+p2).removeClass("style_nav_data-"+p1+p2).addClass("style_nav_data-"+a+p2);
                            // 替换styleCLss
                            // b 值未找到。
                            //  b.find("li").each(function(index,ele){
                            //  var li ,refreshLi;
                            //  li=$(this)[0].classList[0];
                            //  $(this).removeClass(li);
                            //  refreshLi=li.replace(/-([A-z]+|_)*/i,function(ma,p,t){
                            //    console.log(ma)
                            //    console.log(p)
                            //    console.log(t)
                            //      return "-"+a;
                            //  })
                            // $(this).addClass(refreshLi);
                            //  })
                            //本身以及子节点替换类名nav类型
                            return "-"+a+p2+"";
                        });
                        console.log(zmEditor.globalMethod.nav.data.arrLike)
                        zmEditor.globalMethod.nav.data.arrLike[nav_name]   // one: 让对象下属性名变更;
                        zmEditor.globalMethod.nav.data.arrLike[f]=zmEditor.globalMethod.nav.data.arrLike[nav_name];
                        if(f==nav_name)return;else delete zmEditor.globalMethod.nav.data.arrLike[nav_name];//two:删除原有属性

                        //three:替换dom元素属性
                        console.log(zmEditor.globalMethod.nav.data.arrLike)
                        console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                        console.log(b);
                        // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                        zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                    }
                    break;
                case "product":
                    var nowEle = _this.children();
                    if(nowEle.is(".zm-product-goods")){
                        if(nowEle.is(".zm-edit-components-product-row")){
                            iSelected.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                        }
                        if(nowEle.is(".zm-edit-components-product-col")){
                            iSelected.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                        }
                    }
                    if(nowEle.is(".zm-product-goodsList")){
                        console.log(nowEle);
                    }

                    break;
                case "tab":

                    break;
                case "carousel":
                    var carouselBox = '.zm-component-carousel-box';
                    var slideStyle = _this.find(carouselBox).attr("slide-type");
                    zmEditor.component.carousel.carouselGoing(iSelected,slideStyle);
                    var slideArgs = iSelected.find(carouselBox).attr('data-slide-args');
                    iSelected.find(carouselBox).attr({'data-slide-args':
                    slideArgs.split('effect=')[0] + 'effect=' + slideStyle + '&hoverStop' +
                    slideArgs.split('&hoverStop')[1],'slide-type':slideStyle});
                    if(iSelected.find(carouselBox).hasClass('maxWidth1200')){
                        iSelected.width('1200px')
                    }
                    if(_this.find('.zm-component-carousel-pageCutBtn').length>0){
                        iSelected.find('.zm-component-carousel-controlBtn').show()
                    }
                    if(_this.find('.zm-component-carousel-point').length>0){
                        iSelected.find('.zm-component-carousel-pointGroup').show()
                    }
                    break;
                case "img":
                    zmEditor.component.img.setImgStyle(iSelected,_this);
                    break;
                case "shape":
                    zmEditor.component.shape.setShapeStyle(iSelected,_this);
                    break;
                case "video":
                    zmEditor.component.video.setVideoStyle(iSelected,_this);
                    console.log(222222222)
                    break;
                case "news":
                case "blog":
                    zmEditor.component.news.setNewsBlogStyle(iSelected,_this);
                    break;
                case "function":
                    var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case 'search':
                            zmEditor.component.function.searchMethod.setSearchBarStyle(_this);
                            break;
                        case 'shopping':
                            zmEditor.component.function.shoppingMethod.setShoppingCartStyle(_this);
                            break;
                        case 'file':
                            zmEditor.component.function.fileMethod.setFileStyle(_this);
                            break;
                        case 'enter':
                            zmEditor.component.function.enterMethod.setEnterStyle(_this);
                            break;
                        case 'option':
                            zmEditor.component.function.optionMethod.setOptionStyle(_this);
                            break;
                        default:
                            break
                    }
                    break;
                default:
                    var this_style=_this.find("div").attr("style");
                    com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'})
                    com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style);
                    break;
            }
        },
        //样式选择窗
        style:function(e){
            var box = zmEditor.dialog.box();
            var content = box.find(".zm-dialog-content");
            var tabs;
            var com_box=zmEditor.component.nowBox1();
            var type = com_box.attr("data-zm-component-type")||"";
            var dialogTitle=zmEditor.arr.componentTypes[type]||'样式';
            var lastBox = $(".zm-dialog-box").not('.zm-dialog-box-pageSet');
            var lastLeft=lastBox.css("left");
            var lastTop=lastBox.css("top");
            box.css({'left':lastLeft,'top':lastTop}).addClass('zm-component-settingPanel');
            lastBox.remove();//ay：移除其他设置窗
            tabs=$('<div class="zm-edit-text"></div>');
            var list =zmEditor.arr.componentsList[type];
            var fielHtml="";
            var iSelected=zmEditor.component.nowEdit();
            list = zmEditor.component.beforeStyle(type,list,box);
            /*
            此方法提取至zmEditor.component.beforeStyle中
            */
            // switch (type){
            //     case "btn":
            //         break;
            //     case "shape":
            //         list = iSelected.hasClass('blockShape')?[list[1],list[2],list[3]]:[list[0]];
            //         break;
            //     case "function":
            //         var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
            //         switch (functionType){
            //             case 'search':
            //                 list = [list[0]];
            //                 break;
            //             case 'shopping':
            //                 list = [list[1]];
            //                 break;
            //             case 'file':
            //                 list = [list[3]];
            //                 break;
            //             case 'enter':
            //                 list = [list[5]];
            //                 break;
            //             case 'option':
            //                 list = [list[6]];
            //                 break;
            //             default:
            //                 list = [list[2]];
            //                 break;
            //         }
            //         break;
            //     case "nav":
            //         box.addClass('data-nav-Independent-nav');
            //         if(/vertical/.test(com_main[0].classList[4])){
            //             list=[list[1]]
            //         }else{
            //             list=[list[0]]
            //         }
            //         break;
            //     case "banner":
            //         break;
            //     default:
            //         break;
            // }
            var fId = com_box.attr('data-zm-fid');
            var curFlag = '<span class="zm-component-settingPanel-curLiFlag fa fa-check"></span>';
            if(list!=undefined){
                var len=list.length;
                for(var i=0;i<len;i++){
                    var list2 = list[i];
                    var len2 =list2.list.length;
                    var ulHtml ="";
                    for(var j= 0;j<len2;j++){
                        var list3 = list2.list[j];
                        if(list3.fId==fId){
                            ulHtml+='<li data-zm-fId="'+list3.fId+'">'+curFlag+list3.fContext+'</li>';
                        }
                        else{
                            ulHtml+='<li data-zm-fId="'+list3.fId+'">'+list3.fContext+'</li>';
                        }

                    }
                    fielHtml+='<fieldset class="zm-component-fieldset" data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                };
            }
            else{
                fielHtml='<div style="height:100px;margin:0 auto;">亲~该分类暂时没有组件！</div>'
            }
            tabs.html(fielHtml);
            //ay:点击风格样式切换组件风格
            tabs.find("fieldset li").on("click",function(){
                var _this = $(this);
                var iSelected = zmEditor.component.nowEdit();
                var this_style=$(this).find("div").attr("style");
                var id = _this.attr('data-zm-fid');
                zmEditor.component.nowBox1().attr('data-zm-fid',id);
                tabs.find('.zm-component-settingPanel-curLiFlag').remove();
                _this.append(curFlag);
                switch(type){
                    case "aaa":
                        break;
                    case "nav":
                        // debugger;
                        if($(this).closest("ul").parent()[0].tagName.toLowerCase()=="div"){
                            var a,b,nav_name;
                        a=$(this).closest(".zm-nav")[0].classList[2];//获取样式标志
                        // b=$(this).closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-main");
                        b=zmEditor.component.nowEdit();
                  // console.log(b);
                            nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(b);
                            zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "sStyle", "initStyle","li",nav_name,["width","height","lineHeight"]);
                            zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "hHover", "initHover","li",nav_name,["width","height","lineHeight"]);
                            zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, a, "clickhover", "initclickhover","li",nav_name);
                            zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, a, "sStyle", "initStyle","span",nav_name,["width","height"]);
                            zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",nav_name,a); //下拉列表的颜色
                            // console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name])
                            // console.log(b);
                              var c,d,e,f;
                              c=b[0].classList[3],d=b[0].classList[4]; //移除类名
                              b.removeClass(c).removeClass(d);
                              e=$(this).closest(".zm-nav")[0].classList[1];
                              b.addClass(e).addClass(a);
                            // console.log(nav_name);
                              f=nav_name.replace(/-([A-z]+|_)*(\d+)/i,function(match,p1,p2,offset,string){
                                  // console.log(match)
                                  // console.log(p1)
                                  // console.log(p2)
                                 //本身以及子节点替换类名nav类型   //three:替换dom元素属性
                                  // 替换mainCLss
                                  b.removeAttr("data-"+p1);
                                  b.attr("data-"+a,a+p2+"");
                                  // 替换mainCLss
                                  // 替换styleCLss
                                  $(".style_nav_data-"+p1+p2).removeClass("style_nav_data-"+p1+p2).addClass("style_nav_data-"+a+p2);
                                  // 替换styleCLss
                                  // b 值未找到。
                                 //  b.find("li").each(function(index,ele){
                                 //  var li ,refreshLi;
                                 //  li=$(this)[0].classList[0];
                                 //  $(this).removeClass(li);
                                 //  refreshLi=li.replace(/-([A-z]+|_)*/i,function(ma,p,t){
                                 //    console.log(ma)
                                 //    console.log(p)
                                 //    console.log(t)
                                 //      return "-"+a;
                                 //  })
                                 // $(this).addClass(refreshLi);
                                 //  })
                                  //本身以及子节点替换类名nav类型
                                  return "-"+a+p2+"";
                              });
                            console.log(zmEditor.globalMethod.nav.data.arrLike)
                            zmEditor.globalMethod.nav.data.arrLike[nav_name]   // one: 让对象下属性名变更;
                            zmEditor.globalMethod.nav.data.arrLike[f]=zmEditor.globalMethod.nav.data.arrLike[nav_name];
                              if(f==nav_name)return;else delete zmEditor.globalMethod.nav.data.arrLike[nav_name];//two:删除原有属性

                                //three:替换dom元素属性
                            console.log(zmEditor.globalMethod.nav.data.arrLike)
                            console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                            console.log(b);
                            // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                            zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                        }
                        break;
                    case "product":
                        var nowEle = _this.children();
                        if(nowEle.is(".zm-product-goods")){
                            if(nowEle.is(".zm-edit-components-product-row")){
                                iSelected.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                            }
                            if(nowEle.is(".zm-edit-components-product-col")){
                                iSelected.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                            }
                        }
                        if(nowEle.is(".zm-product-goodsList")){
                            console.log(nowEle);
                        }

                        break;
                    case "tab":

                        break;
                    case "carousel":
                        var carouselBox = '.zm-component-carousel-box';
                        var slideStyle = _this.find(carouselBox).attr("slide-type");
                        zmEditor.component.carousel.carouselGoing(iSelected,slideStyle);
                        var slideArgs = iSelected.find(carouselBox).attr('data-slide-args');
                        iSelected.find(carouselBox).attr({'data-slide-args':
                        slideArgs.split('effect=')[0] + 'effect=' + slideStyle + '&hoverStop' +
                        slideArgs.split('&hoverStop')[1],'slide-type':slideStyle});
                        if(iSelected.find(carouselBox).hasClass('maxWidth1200')){
                            iSelected.width('1200px')
                        }
                        if(_this.find('.zm-component-carousel-pageCutBtn').length>0){
                            iSelected.find('.zm-component-carousel-controlBtn').show()
                        }
                        if(_this.find('.zm-component-carousel-point').length>0){
                            iSelected.find('.zm-component-carousel-pointGroup').show()
                        }
                        break;
                    case "img":
                        zmEditor.component.img.setImgStyle(iSelected,_this);
                        break;
                    case "shape":
                        zmEditor.component.shape.setShapeStyle(iSelected,_this);
                        break;
                    case "video":
                        zmEditor.component.video.setVideoStyle(iSelected,_this);
                        console.log(222222222)
                        break;
                    case "news":
                    case "blog":
                        zmEditor.component.news.setNewsBlogStyle(iSelected,_this);
                        break;
                    case "function":
                        var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                        switch (functionType){
                            case 'search':
                                zmEditor.component.function.searchMethod.setSearchBarStyle(_this);
                                break;
                            case 'shopping':
                                zmEditor.component.function.shoppingMethod.setShoppingCartStyle(_this);
                                break;
                            case 'file':
                                zmEditor.component.function.fileMethod.setFileStyle(_this);
                                break;
                            case 'enter':
                                zmEditor.component.function.enterMethod.setEnterStyle(_this);
                                break;
                            case 'option':
                                zmEditor.component.function.optionMethod.setOptionStyle(_this);
                                break;
                            default:
                                break
                        }
                        break;
                    default:
                        com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'})
                        com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style);
                        break;
                }

                zmEditor.component.changeStyle(type,$(this));
                /*
                 此方法提取至zmEditor.component.changeStyle中
                 */
                // var _this = $(this);
                // var iSelected = zmEditor.component.nowEdit();
                // var this_style=$(this).find("div").attr("style");
                // var id = _this.attr('data-zm-fid');
                // zmEditor.component.nowBox1().attr('data-zm-fid',id);
                // tabs.find('.zm-component-settingPanel-curLiFlag').remove();
                // _this.append(curFlag);
                // switch(type){
                //     case "nav":
                //         // debugger;
                //         if($(this).closest("ul").parent()[0].tagName.toLowerCase()=="div"){
                //             var a,b,nav_name;
                //         a=$(this).closest(".zm-nav")[0].classList[2];//获取样式标志
                //         // b=$(this).closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-main");
                //         b=zmEditor.component.nowEdit();
                //   console.log(b);
                //             nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(b);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "sStyle", "initStyle","li",nav_name,["width","height","lineHeight"]);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "hHover", "initHover","li",nav_name,["width","height","lineHeight"]);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, a, "clickhover", "initclickhover","li",nav_name);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, a, "sStyle", "initStyle","span",nav_name,["width","height"]);
                //             zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",nav_name,a); //下拉列表的颜色
                //             // console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name])
                //             // console.log(b);
                //               var c,d,e,f;
                //               c=b[0].classList[3],d=b[0].classList[4]; //移除类名
                //               b.removeClass(c).removeClass(d);
                //               e=$(this).closest(".zm-nav")[0].classList[1];
                //               b.addClass(e).addClass(a);
                //             // console.log(nav_name);
                //               f=nav_name.replace(/-([A-z]+|_)*(\d+)/i,function(match,p1,p2,offset,string){
                //                   // console.log(match)
                //                   // console.log(p1)
                //                   // console.log(p2)
                //                  //本身以及子节点替换类名nav类型   //three:替换dom元素属性
                //                   // 替换mainCLss
                //                   b.removeAttr("data-"+p1);
                //                   b.attr("data-"+a,a+p2+"");
                //                   // 替换mainCLss
                //                   // 替换styleCLss
                //                   $(".style_nav_data-"+p1+p2).removeClass("style_nav_data-"+p1+p2).addClass("style_nav_data-"+a+p2);
                //                   // 替换styleCLss
                //                   // b 值未找到。
                //                  //  b.find("li").each(function(index,ele){
                //                  //  var li ,refreshLi;
                //                  //  li=$(this)[0].classList[0];
                //                  //  $(this).removeClass(li);
                //                  //  refreshLi=li.replace(/-([A-z]+|_)*/i,function(ma,p,t){
                //                  //    console.log(ma)
                //                  //    console.log(p)
                //                  //    console.log(t)
                //                  //      return "-"+a;
                //                  //  })
                //                  // $(this).addClass(refreshLi);
                //                  //  })
                //                   //本身以及子节点替换类名nav类型
                //                   return "-"+a+p2+"";
                //               });
                //             console.log(zmEditor.globalMethod.nav.data.arrLike)
                //             zmEditor.globalMethod.nav.data.arrLike[nav_name]   // one: 让对象下属性名变更;
                //             zmEditor.globalMethod.nav.data.arrLike[f]=zmEditor.globalMethod.nav.data.arrLike[nav_name];
                //               if(f==nav_name)return;else delete zmEditor.globalMethod.nav.data.arrLike[nav_name];//two:删除原有属性
                //
                //                 //three:替换dom元素属性
                //             console.log(zmEditor.globalMethod.nav.data.arrLike)
                //             console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                //             console.log(b);
                //             // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                //             zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                //         }
                //         break;
                //     case "product":
                //         var nowEle = _this.children();
                //         if(nowEle.is(".zm-product-goods")){
                //             if(nowEle.is(".zm-edit-components-product-row")){
                //                 iSelected.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                //             }
                //             if(nowEle.is(".zm-edit-components-product-col")){
                //                 iSelected.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                //             }
                //         }
                //         if(nowEle.is(".zm-product-goodsList")){
                //             console.log(nowEle);
                //         }
                //
                //         break;
                //     case "tab":
                //
                //         break;
                //     case "carousel":
                //         var carouselBox = '.zm-component-carousel-box';
                //         var slideStyle = _this.find(carouselBox).attr("slide-type");
                //         zmEditor.component.carousel.carouselGoing(iSelected,slideStyle);
                //         var slideArgs = iSelected.find(carouselBox).attr('data-slide-args');
                //         iSelected.find(carouselBox).attr({'data-slide-args':
                //         slideArgs.split('effect=')[0] + 'effect=' + slideStyle + '&hoverStop' +
                //         slideArgs.split('&hoverStop')[1],'slide-type':slideStyle});
                //         if(iSelected.find(carouselBox).hasClass('maxWidth1200')){
                //             iSelected.width('1200px')
                //         }
                //         if(_this.find('.zm-component-carousel-pageCutBtn').length>0){
                //             iSelected.find('.zm-component-carousel-controlBtn').show()
                //         }
                //         if(_this.find('.zm-component-carousel-point').length>0){
                //             iSelected.find('.zm-component-carousel-pointGroup').show()
                //         }
                //         break;
                //     case "img":
                //         zmEditor.component.img.setImgStyle(iSelected,_this);
                //         break;
                //     case "shape":
                //         zmEditor.component.shape.setShapeStyle(iSelected,_this);
                //         break;
                //     case "video":
                //         zmEditor.component.video.setVideoStyle(iSelected,_this);
                //         console.log(222222222)
                //         break;
                //     case "news":
                //     case "blog":
                //         zmEditor.component.news.setNewsBlogStyle(iSelected,_this);
                //         break;
                //     case "function":
                //         var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                //         switch (functionType){
                //             case 'search':
                //                 zmEditor.component.function.searchMethod.setSearchBarStyle(_this);
                //                 break;
                //             case 'shopping':
                //                 zmEditor.component.function.shoppingMethod.setShoppingCartStyle(_this);
                //                 break;
                //             case 'file':
                //                 zmEditor.component.function.fileMethod.setFileStyle(_this);
                //                 break;
                //             case 'enter':
                //                 zmEditor.component.function.enterMethod.setEnterStyle(_this);
                //                 break;
                //             case 'option':
                //                 zmEditor.component.function.optionMethod.setOptionStyle(_this);
                //                 break;
                //             default:
                //                 break
                //         }
                //         break;
                //     default:
                //         com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'})
                //         com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style);
                //         break;
                // }
            });
            content.append('<button class="zm-edit-go2"  onclick="zmEditor.component.setting(this)">设置<span class="fa fa-angle-double-right"></span></button>')
            content.append(tabs);
            $('body').append(box);
            box.find(".zm-dialog-title").text(dialogTitle+'样式');
            zmEditor.dialog.setBtnInfo(box,zmEditor.component.dialogBtnInfo[type].style);//设置弹窗中关闭跟问号按钮内容
            box.find('.zm-dialog-close').on('click',function(){
                $(this).zmDialog('remove')
            })
            box.zmDialog();
        },
        //组件设置窗
        setting:function(e){
            var box = zmEditor.dialog.box();
            var content = box.find(".zm-dialog-content");
            var tabs;
            var com_box=zmEditor.component.nowBox1();
            var main = com_box.find('.zm-component-main');
            var type = com_box.attr("data-zm-component-type")||"";
            var lastBox = $(".zm-dialog-box").not('.zm-dialog-box-pageSet');
            var lastLeft=lastBox.css("left");
            var lastTop=lastBox.css("top");
            box.css({'left':lastLeft,'top':lastTop}).addClass('zm-component-settingPanel');
            lastBox.remove();//ay：移除其他设置窗
            tabs=zmEditor.component[type].setting(box);
            var dialogTitle=zmEditor.arr.componentTypes[type]||'弹窗';
            content.append('<button class="zm-edit-go"  onclick="zmEditor.component.style(this)"><span class="fa fa-angle-double-left"></span>样式</button>');
            if(main.hasClass('zm-component-function-share-main')){//分享推广组件去掉设置样式功能2017年6月8日
                content.find('.zm-edit-go').removeAttr('onclick')
                    .css({'color':'transparent','background':'transparent','cursor':'default'})
            }
            content.append(tabs);//设置窗口主体内容
            $('body').append(box);//给组件加载设置窗口
            box.find(".zm-dialog-title").text(dialogTitle+'设置');//设置弹窗title
            zmEditor.dialog.setBtnInfo(box,zmEditor.component.dialogBtnInfo[type].setting);//设置弹窗中关闭跟问号按钮内容
            box.find('.zm-dialog-close').on('click',function(){
                //this.zmDialog('remove')
                $(this).zmDialog('remove')

            });
            // if(windowH-250>635){
            //     box.find('.zm-dialog-content').css({height:'635px'})
            // }else{
            //     box.find('.zm-dialog-content').css({height:windowH-250})
            // }
            box.zmDialog();
        }
    },
    //模板相关方法
    template:{
        //模板选择
        choice:function(){
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            allTemplates.animate({"top":0},300);
            $(".zm-template-list").show();
        },
        //获取所有模板
        getAllList:function(){
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            $('.zm-template-o-close').click(function(){
                allTemplates.animate({"top":"-100%"},300);
            })
            //返回模板列表页
            allTemplates.on("click",".zm-template-o-back",function(){
                $(".zm-template-list").fadeIn();
                $(".zm-template-view").fadeOut();
            });
            $.ajax({
                type: "get",
                url: zmEditor.url.getTemplatesList,
                dataType: "json",
                success: function(e){
                    var list1 = e.data;
                    var type1Html = "";
                    var tList=[];
                    list1.forEach(function(type1){
                        var list2 = type1.list;
                        var type2Html = "";
                        list2.forEach(function(type2){
                            type2Html+='<a class="zm-template-type-t" data-zm-fId="'+type2.fTypeId2+'">'+type2.fTypeName2+'</a>';
                            tList.push({"id":type2.fTypeId2,"list":type2.list});
                        })
                        type2Html='<div>'+type2Html+'</div>';
                        type1Html+='<div><p>'+type1.fTypeName1+'</p>'+type2Html+'</div>';
                    });
                    zmEditor.arr.templateList=tList;
                    allTemplates.find(".zm-template-all-menu").html(type1Html);
                    //点击模板小类显示模板列表
                    allTemplates.find(".zm-template-type-t").on("click",function(){
                        zmEditor.template.getListByType2($(this).attr("data-zm-fId"),tList);
                        $(this).closest('.zm-template-all-menu').stop().fadeOut(300);
                    });
                    allTemplates.find(".zm-template-all-menu-li").hover(function(){
                        $(this).find('.zm-template-all-menu').stop().fadeIn(300);
                    },function(){
                        $(this).find('.zm-template-all-menu').stop().fadeOut(300);
                    });
                    //模板查看
                    allTemplates.on("click",".zm-template-o-view",function(){
                        allTemplates.find('.zm-template-o-use2').attr('data-zm-fId',$(this).attr("data-zm-fId"));
                        zmEditor.template.view($(this).attr("data-zm-fId"));
                    });
                    //模板使用
                    allTemplates.on("click",".zm-template-o-use",function(){
                        zmEditor.template.use($(this).attr("data-zm-fId"));
                    });
                    //模板使用2
                    allTemplates.on("click",".zm-template-o-use2",function(){
                        zmEditor.template.use($(this).attr("data-zm-fId"));
                    });
                }
            });
        },
        //点击模板小类获取模板列表
        getListByType2:function(id,data){
            var windowH = $(window).height();
            var len = data.length;
            for(var i=0;i<len;i++){
                if(id==data[i].id){
                    var list = data[i].list;
                    var html ="";
                    list.forEach(function(e){
                        html+='<div class="zm-template-item"><img src="'+e.fImage+'"/>'+e.fName
                            +'<div class="zm-template-item-hover">'
                            +'<div><a class="zm-template-o-view" data-zm-fId="'+e.fId+'"><span class="fa fa-search"></span> 查看</a>'
                            +'<a  class="zm-template-o-use" data-zm-fId="'+e.fId+'"><span class="fa fa-check"></span> 使用</a></div>'
                            +'</div></div>'
                    });
                    break;
                }
            }
            $(".zm-template-all-body-right").html(html);
            $(".zm-template-all-body-right").css({"height":windowH-120})
        },
        //通过id获取模板信息
        getInfoById:function(id,cb){
            $.ajax({
                type: "get",
                url: zmEditor.url.getTemplateById,
                data : {"fTempletId":id},
                dataType: "json",
                success: function(e){
                    var list = e.data;
                    console.log(JSON.stringify(list))
                    //console.log(e.data)
                    if(cb){
                        cb(list);
                    }
                },
                error:function(){
                    console.error("error:getTemplateInfoById !!!")
                }
            });
        },
        //初始化html
        initHtml:function(list){
            var template = $(".zm-template");
            var pages = list.pages;
            var tempPage = "";
            var hHtml="",fHtml="",bHtml="";
            template.find(".zm-row").remove();
            var defaultPage = true;
            pages.forEach(function(page) {
                if(page.fHtml==undefined||page.fHtml==""){
                    tempPage = $(zmEditor.str.row.html);
                }
                else{
                    tempPage = $(page.fHtml);
                }
                tempPage.attr("data-zm-pageId", page.fId);
                if (page.fPageType == 1) {
                    template.find(".zm-head .zm-row-line").before(tempPage);
                }
                else if (page.fPageType == 3) {
                    template.find(".zm-foot .zm-row-line").before(tempPage);
                }
                else {
                    template.find(".zm-body .zm-row-line").before(tempPage);
                    if (defaultPage) {
                        defaultPage = false;
                    }
                    else {
                        tempPage.hide();
                    }
                }
            })
        },
        //查看模板
        view:function(id){
            $(".zm-template-list").hide();
            $(".zm-template-view").stop().fadeIn();
            //获取模板信息
            zmEditor.template.getInfoById(id,callback);
            function callback(list) {
                $(".zm-template-all-header-title").html("<span >---正在预览的模板编号为：" + id + "</span>")
                var windowH = $(window).height();
                var headerH = $('.zm-template-all-header').height();
                var pages = list.pages;
                var hHtml = "", fHtml = "", bHtml = "";
                console.log(pages)
                pages.forEach(function (page) {
                    if (page.fHtml) {
                        if (page.fPageType == 1) {
                            hHtml = page.fHtml;
                        }
                        else if (page.fPageType == 3) {
                            fHtml = page.fHtml;
                        }
                        else {
                            bHtml += page.fHtml;
                        }
                    }
                });
                $(".zm-template-view-body").css('height', windowH - headerH).html(hHtml + bHtml + fHtml);
            }
        },
        //使用模板
        use:function(id){
            $(".zm-template-view").hide();
            $(".zm-template-list").stop().fadeIn();
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            template.attr("data-zm-templateId",id)
            allTemplates.animate({"top":"-100%"},300);
            //zmEditor.controller.template.choseDialog("hide")
            //获取模板信息
            zmEditor.template.getInfoById(id,callBack);
            function callBack(list){
                //初始化模板代码
                zmEditor.template.initHtml(list);
                template.find(".zm-row").css({"border-left":"1px dotted deepskyblue","border-right":"1px dotted deepskyblue"});
                template.find(".zm-row").append(zmEditor.str.row.resize)
                template.find(".zm-row-full").append(zmEditor.str.row.line);
                //template.find(".zm-row-line,.zm-row-resize,.zm-row-type").remove();
                template.find(".zm-component-box1").each(function(){
                    var _this = $(this);
                    var main = _this.find(".zm-component-main");
                    _this.addClass("zm-component-editor zm-component-movable");
                    _this.children().append(zmEditor.str.component.edit);
                    _this.children().append(zmEditor.str.component.resize);
                    //main.attr("contenteditable",true)
                    //thisBox.prop("outerHTML",thisElement.prop("outerHTML"))
                })
            }
        },
        //模板预览
        preview:function(){
            var allHtml = $(".zm-all").prop("outerHTML")
            console.log(zmEditor.arr.changedComponentsList);
            localStorage.setItem("zmPreviewHtml", allHtml);
            localStorage.setItem("zmPreviewStyle", $(document).find('head').html());
            localStorage.setItem("zmPreviewScript", $('#zmPreviewScript').html());
            // localStorage.setItem("previewObject", {html:allHtml,styleList:$(document).find('head').html(),scriptList:$('body').nextAll()});
            window.open('website-preview.html','_blank')
        }
    },
    /*头部刻度尺设置*/
    setRuler:function(width){
        var w=$(document).width();
        var h = $(window).height();
        var headerH = $(".zm-header").height();
        $(".zm-all").css("height",h-headerH);
        $(".zm-row").css({"width":width});
        var rowLeft =100;
        if($(".zm-row:eq(0)").length>0){
            rowLeft=$(".zm-row:eq(0)").offset().left
        }
        var startI = -(w-width)/2;
        $(".zm-editor-ruler-x-switch-box").css({"left":rowLeft+width});
        $(".zm-editor-ruler-x-width").html(width+"px");
        var rulerHtml="";
        var rulerStart=startI%5;
        var i=parseInt(startI/5);
        var len = (w-rowLeft)/5;
        for(;i<=len;i++){
            if(i<0){
                if(i%10==0){
                    rulerHtml+="<span class='zm-editor-ruler-x-span2'><span>"+i*5+"</span></span>"
                }else{
                    rulerHtml+="<span class='zm-editor-ruler-x-span'></span>"
                }
            }else{
                if(i==0){
                    rulerHtml+="<span class='zm-editor-ruler-x-firstSpan2'><span>0</span></span>"
                }
                else if(i==width/5){
                    if(i%10==0){
                        rulerHtml+="<span class='zm-editor-ruler-x-endSpan2'><span>"+i*5+"</span></span>"
                    }else{
                        rulerHtml+="<span class='zm-editor-ruler-x-endSpan2'></span>"
                    }
                }
                else{
                    if(i%10==0){
                        rulerHtml+="<span class='zm-editor-ruler-x-span2'><span>"+i*5+"</span></span>"
                    }else{
                        rulerHtml+="<span class='zm-editor-ruler-x-span'></span>"
                    }
                }
            }
        }
        $(".zm-editor-ruler-x").html(rulerHtml);
        $(".zm-editor-ruler-x").css("left",Math.abs(rulerStart)-8);
        //$(".zm-editor-ruler-x").css({"width":width+1,"marginLeft":(w-width)/2})

    },
    /*
    生成唯一id，前四位十六进制随机数，后四位十进制随机数，中间是毫秒时间戳
    理论上不会重复，真重复了，那你就可以去买彩票了
    */
    createId:function(e){
        var _this = $(e);
        var id = (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
        _this.attr("id",id+"-b");
        _this.find(".zm-component-main").attr("id",id+"-m");
        return id+'-b';
        // var pId = _this.parent().attr("data-zm-id");
        // _this.attr("data-zm-pid", pId);
    },
    getNavigationPageList:function(){
        $.ajax({
            type: "get",
            url: zmEditor.url.getNavigationPageList,
            dataType: "json",
            success: function(e){
                var list = e.data;
                zmEditor.arr.pageList=list;
                var html = "";
                list.forEach(function(e){
                    html+='<li data-zm-pageId="'+e.fId+'">'
                        +'<span>'+e.fName+'</span>'
                        +'<div>'
                        +'<ul>'
                        +'<li><span>标题</span><input value="'+e.fName+'"></li>'
                        +'<li><span>页面地址</span><input value="'+e.fName+'"></li>'
                        +'<li><span>设为主页</span><input value="'+e.fName+'"></li>'
                        +'<li><span>选择模板</span><input value="'+e.fName+'"></li>'
                        +'<li><span>SEO标题</span><input value="'+e.fName+'"></li>'
                        +'<li><span>SEO关键字</span><input value="'+e.fName+'"></li>'
                        +'<li class="zm-page-set-pageDescribe"><span>页面描述</span><textarea ></textarea></li>'
                        +'</ul>'
                        +'<div class="zm-page-set-savePage"><button>保 存</button></div>'
                        +'</div>'
                        +'</li>'
                })
                var ul = $(".zm-header .zm-page-set ul");
                var addPage = '<li class="zm-page-set-addPage"><button>+添加页面</button></li>'
                ul.html(html+addPage)
                var defaultPageId = ul.children("li").eq(0).attr("data-zm-pageId");//默认pageid为首页
                $(".zm-all").attr("data-zm-pageId",defaultPageId)
            }
        });
    },
    getNavigationPageById:function(id){
        $(".zm-all").find(".zm-component-box2").each(function(){
            var _this = $(this);
            _this.append(zmEditor.str.component.box2);
            _this.parent().addClass("zm-component-editor zm-component-movable")
        })
        zmEditor.setRuler(1200);//动态生成刻度尺默认1200px
    },
    //发布
    publish:function(){
        var all = $($(".zm-all").prop("outerHTML"));
        var pageId = all.attr("data-zm-pageId")!=""?all.attr("data-zm-pageId"):"";
        var width = parseInt($(".zm-editor-ruler-x-width").html())
        var list = zmEditor.arr.changedComponentsList;
        var componentsList =[];
        var cssList =[];
        var jsList =[];
        var rowList =[];
        list.forEach(function(e){
            var _this = all.find("[data-zm-id='"+e+"']");
            var rowId = _this.attr("data-zm-rowid");
            _this.removeClass("zm-component-editor zm-component-movable");
            _this.find(".zm-component-resize,.zm-component-edit").remove();
            var main = _this.find(".zm-component-main");
            main.attr("contenteditable",false);
            var html = _this.prop("outerHTML");
            componentsList.push({"id":e,"pId":"","rowId":rowId,"type":"text","params":"","html":html});
        })
        $("link[isuse='true']").each(function(){
            var _this = $(this);
            var src = _this.attr("href");
            var rel = _this.attr("rel");
            var srcId = _this.attr("srcid");
            var isUse = _this.attr("isuse");
            cssList.push({"src":src,"srcId":srcId,"isUse":isUse})
        })
        $("script[isuse='true']").each(function(){
            var _this = $(this);
            var src = _this.attr("src");
            var srcId = _this.attr("srcid");
            var isUse = _this.attr("isuse");
            jsList.push({"src":src,"srcId":srcId,"isUse":isUse})
        });
        all.find(".zm-row").each(function(){
            var _this = $(this);
            var id = _this.attr("data-zm-id");
            var clas= _this.attr("class");
            var style = _this.attr("style");
            rowList.push({"id":id,"clas":clas,"style":style})
        });
        var json={"componentsList":componentsList,"cssList":cssList,"jsList":jsList,"webWidth":width,"rowList":rowList,"pageId":pageId};
        $.ajax({
            type: "post",
            url: zmEditor.url.publish,
            data:{"json": JSON.stringify(json)},
            dataType: "json",
            success: function(e){
                $.ajax({
                    type: "get",
                    url: zmEditor.url.getNavigationPageById,
                    dataType: "json",
                    success: function(e){
                        var data= e.data.fJsonText;
                        localStorage.setItem("publishHtml", data);
                        window.open('test.html','_blank');
                    },
                    error:function(){
                        console.error("2出错了！！")
                    }
                });
            },
            error:function(){
                console.error("1出错了！！")
            }
        });
    },
};
