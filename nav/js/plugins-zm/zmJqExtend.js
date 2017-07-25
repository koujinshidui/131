/**
 * Created by Administrator on 2017/1/6.
 */
//获取地址栏参数
(function($){
    $.fn.zmBind=function(event,selector,fn){
        if(arguments.length==2&&typeof selector==='function'){
            fn=selector;
            selector=undefined;
        }
        return this.on(event,selector,function(){
            fn.apply(this);
        });
    };
    $.fn.zmActionOn = function(event,selector,fn){
        if(arguments.length==2&&typeof selector==='function'){
            fn=selector;
            selector=undefined;
        }
        return this.on(event,selector,function(){
            zmEditor.action.getInitState();
            fn.apply(this);
            zmEditor.action.save();
        });
    };
    $.zmGetUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    };
    $.zmAjax = function(obj){
        if(!obj.error){
            obj.error=function(){alert('数据库连接出错啦啦啦啦~~~~')}
        }
        return $.ajax(obj)
    }
    $.fn.zmGetColor = function() {
        $('#picker01').colpick({flat:true});
    };
    /*颜色控件*/
    $.fn.zmColorPicker = function(e){
        var _this = $(this);
        var div=$('<div id="content" class="zm-colorPicker-more">'
            +'<div id="pickers0">'
            +'<div id="picker01"></div>'
            +'<div id="addcolor1"><span >经典颜色：</span><ul id="zm-frequentlyColorSpan">'
            +'<li style="background-color: #ffffff;"></li><li style="background-color: #ffffcc;"></li><li style="background-color: #ffccff;"></li><li style="background-color: #ccccff;"></li><li style="background-color: #ff9966;"></li><li style="background-color: #cc6633;"></li><li style="background-color: #996633;"></li>'
            +'<li style="background-color: #ccffff;"></li><li style="background-color: #eeeeee;"></li><li style="background-color: #ffff99;"></li><li style="background-color: #ff99cc;"></li><li style="background-color: #cc99ff;"></li><li style="background-color: #ff9933;"></li><li style="background-color: #993333;"></li>'
            +'<li style="background-color: #66cccc;"></li><li style="background-color: #99cccc;"></li><li style="background-color: #dddddd;"></li><li style="background-color: #ffff33;"></li><li style="background-color: #cc6699;"></li><li style="background-color: #9933cc;"></li><li style="background-color: #ff6600;"></li>'
            +'<li style="background-color: #ccffcc;"></li><li style="background-color: #6699cc;"></li><li style="background-color: #66cccc;"></li><li style="background-color: #cccccc;"></li><li style="background-color: #cccc33;"></li><li style="background-color: #cc3399;"></li><li style="background-color: #660099;"></li>'
            +'<li style="background-color: #3399ff;"></li><li style="background-color: #99cc99;"></li><li style="background-color: #6666cc;"></li><li style="background-color: #669999;"></li><li style="background-color: #999999;"></li><li style="background-color: #cc9900;"></li><li style="background-color: #cc0099;"></li>'
            +'<li style="background-color: #009966;"></li><li style="background-color: #006699;"></li><li style="background-color: #006633;"></li><li style="background-color: #3333cc;"></li><li style="background-color: #336666;"></li><li style="background-color: #666666;"></li><li style="background-color: #996600;"></li>'
            +'<li style="background-color: #999966;"></li><li style="background-color: #003333;"></li><li style="background-color: #003366;"></li><li style="background-color: #006600;"></li><li style="background-color: #000099;"></li><li style="background-color: #333366;"></li><li style="background-color: #333333;"></li>'
            +'<li style="background-color: #333300;"></li><li style="background-color: #666633;"></li><li style="background-color: #003333;"></li><li style="background-color: #000066;"></li><li style="background-color: #003300;"></li><li style="background-color: #000033;"></li><li style="background-color: #000000;"></li>'
            +'</ul></div>'
            +'<div id="zm-addColorBtn">添加</div>'
            +'<span id="zm-eyedropper" class="fa fa-eyedropper"></span>'
            +'<span id="zm-renoveColorPicker" class="fa fa-remove"></span>'
            +'<div id="addcolor"><span>我喜欢的颜色：</span><ul id="zm-newColorSpan"><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><ul></div>'
            +'</div>'
            +'</div>');
        _this.append(div);
        //console.log("成功添加");
    };
})(jQuery);

