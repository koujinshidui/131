/**
 * Created by Administrator on 2016/11/25.
 */
/**
 * Created by Administrator on 2016/11/25.
 */
if(!zmEditor){
    var zmEditor={};
}
zmEditor.dialog={
    loading:function(url,cb){
        var box = zmEditor.dialog.box();
        box.find(".zm-dialog-content")
            .load(url, function () {
                box.css({width:'auto',height:'auto'}).appendTo('body');
                box.zmDialog('noMovable');
                if(cb)cb();
            })
    },
    box: function () {
        var e = $('<div class="zm-dialog-box zm-movableBox" data-animate="">'
            + '<div class="zm-dialog" >'
            + '<div class="zm-dialog-header zm-movable-header" >'
            + '<span class="zm-dialog-title">编辑</span>'
            + '<button class="zm-dialog-header-btn zm-tooltip zm-dialog-close" data-zm-title="关闭"><span class=" fa fa-remove"></span></button>'
            + '<button class="zm-dialog-header-btn zm-tooltip zm-dialog-help" data-zm-title="帮助中心"><span class=" fa fa-question"></span></button>'
            + '</div>'
            + '<div class="zm-dialog-content">'
            + '</div>'
            + '</div></div>');
        return e;
    },
    open:function(obj,cb){
        if(typeof obj=='string'){
            var temp = $('<div></div>')
                .load(obj,function(){
                    var dialog = temp.find(".zm-dialog-box");
                    dialog.append('<div class="zm-dialog-bg"></div>')
                    dialog.appendTo('body');
                    dialog.zmDialog();
                    if(cb){
                        cb();
                    }
                });
        }
        else{
            zmEditor.dialog.box().zmDialog(obj);
            if(cb){
                cb();
            }
        }
    },
    setBtnInfo:function(box,info){
        if(info.help){
            box.find('.zm-dialog-help').attr('data-zm-title',info.help);
        }
        if(info.close){
            box.find('.zm-dialog-close').attr('data-zm-title',info.close);
        }
    },
    setHref: function () {
        zmEditor.dialog.loading("html/href/sethref.html", function () {
            //这里写回调函数
            $(".zm-link-left").mCustomScrollbar({theme:"minimal"});
            $(".zm-link-xiala").mCustomScrollbar({theme:"minimal"});
            $(".zm-dialog-title:last").html("添加链接地址");
            $(".zm-checkbox-box > .zm-checkbox-icon").hide();
            //box.find(".zm-dialog-header").removeClass("zm-dialog-movable");
            $(document).on("click",".zm-checkbox-box",function(){
                var index = $(".zm-checkbox-box").index(this);
                $("div.zm-link-right > div").eq(index).show().siblings().hide();
            });
            var a=true;
            $(".zm-link-pages-select").on("click",function () {
                if(a){
                    $(".zm-link-xiala").css("display","block");
                }else{
                    $(".zm-link-xiala").css("display","none");
                }
                a=!a;
            });
            $(".zm-link-xiala li").on("click",function () {
                $(".zm-link-pages-select").html($(this).html())
            })
        })
    }
},
    (function($){
        $.fn.zmDialog=function(obj){
            //$("body").append("<div class='zm-dialog-bg'></div>")
            //$(".zm-dialog-box-edit").remove();
            if(obj=='remove'){
                this.closest(".zm-dialog-bg").fadeOut().remove();
                this.closest('.zm-dialog-box').remove();
            }
            else{
                var _this = this,width,height,headerH=0,footerH=0,animate='';
                if(obj){
                    _this.append("<div class='zm-dialog-bg'></div>");
                    if(obj.movable==false){
                        _this.find('.zm-dialog-header').removeClass('zm-movable-header')
                    }
                    if(obj.target){
                        obj.target.append(_this);
                    }
                    if(obj.title&&obj.title!=""){
                        _this.find(".zm-dialog-title").text(obj.title);
                    }
                    if(obj.content&&obj.content!=""){
                        _this.find(".zm-dialog-content").append(obj.content);
                    }
                    if(obj.width&&obj.width!=""){
                        width=obj.width;
                    }else{
                        width = _this.outerWidth();
                    }
                    if(obj.height&&obj.height!=""){
                        height=obj.height;
                    }else{
                        height = _this.outerHeight();
                    }
                    if(obj.footer&&obj.footer!=""){
                        _this.find('.zm-dialog').append(obj.footer);
                    }
                    if(obj.animate&&obj.animate!=""){
                        animate=obj.animate;
                    }
                }
                else{
                    animate=_this.attr("data-animate")||"";
                    width = _this.outerWidth();
                    height = _this.outerHeight();
                }
                footerH = _this.find(".zm-dialog-footer").outerHeight();
                headerH = _this.find(".zm-dialog-header").outerHeight();
                if(_this.find('.zm-tab-content-sub').length>0){
                    _this.find('.zm-tab-content-sub').mCustomScrollbar({theme:"minimal"});//加滚动条
                    if(_this.find('.zm-tab-child-content-sub').length>0){
                        _this.find('.zm-tab-child-content-sub').mCustomScrollbar({theme:"minimal"});//加滚动条
                        _this.find('.zm-tab-child-content-sub').closest('.zm-tab-content-sub').mCustomScrollbar('destroy');//加滚动条
                    }
                }
                else{
                    _this.find(".zm-dialog-content").css({height:height-headerH-footerH}).mCustomScrollbar({theme:"minimal"});//加滚动条
                }

                if(_this.find(".zm-edit-text-fontFamily ul").length>0){
                    _this.find(".zm-edit-text-fontFamily ul").mCustomScrollbar({theme:"minimal"});//滚动条
                }

                if(_this.find('.zm-edit-news-titleList').length>0){
                    _this.find('.zm-edit-news-titleList').mCustomScrollbar({'theme':'minimal'});
                }
                _this.find(".zm-edit-text-fontFamily ul").mCustomScrollbar({theme:"minimal"});//滚动条
                _this.css({width:width,height:height,marginLeft: -width / 2, marginTop: -height / 2});
                // _this.css({marginLeft: -width / 2, marginTop: -height / 2});

                switch (animate.substr(0, 17)) {
                    case "fade":
                        _this.fadeIn(300);
                        break;
                    case "slide":
                        _this.slideDown(300);
                        break;
                    case "zm-dialog-animate":
                        _this.addClass(animate);
                        _this.show();
                        break;
                    default:
                        _this.show();
                        break;
                }
                _this.css("display","block")
            }
        };
    })(jQuery)
//弹窗
// $(document).on("click",".zm-dialog-btnOK",function(){
//     this.closest('.zm-dialog-box').remove();
// });
$(document).on("click",".zm-dialog-close,.zm-dialog-btnCancel",function(){
    var _this =$(this);
    var thisDialog = _this.closest(".zm-dialog-box");
    thisDialog.attr("style","");
    var animate=thisDialog.attr("data-animate");
    switch (animate.substr(0, 17)) {
        case "fade":
            thisDialog.fadeOut(300);
            break;
        case "slide":
            thisDialog.slideUp(300);
            break;
        default:
            thisDialog.removeClass(animate);
            thisDialog.hide();
            break;
    }
    $(".zm-tooltipBox").remove();
    _this.closest(".zm-dialog-bg").fadeOut().remove();
    thisDialog.remove();
    //$(".zm-component-nowEdit").removeClass("zm-component-nowEdit");
});
$(document).on('mousedown',".zm-dialog-close,.zm-dialog-help",function(e){
    e.stopPropagation()
})
$(document).on("mousedown",".zm-movable-header",function(e){
    e.preventDefault()
    var _this = $(this);
    var thisDialog = _this.closest(".zm-movableBox");
    var width=0;
    var height=0;
    if(_this.hasClass('zm-components-detail-header')){width=0;height=0;}
    else{width=thisDialog.width() / 2;height=thisDialog.height() / 2}
    var rectLeft = this.getBoundingClientRect().left;
    var rectTop = this.getBoundingClientRect().top;
    var startX = e.clientX;
    var startY = e.clientY;
    console.log("inin")
    $(document).mousemove(function (e) {
        var top = e.clientY - startY + rectTop + height;
        if(top<=height){
            top=height;
        }
        thisDialog.css({
            "left": (e.clientX - startX + rectLeft + width),
            "top": top
        });
        //console.log(thisDialog.css('left'),thisDialog.css('top'))
    });
    _this.off('mouseup').mouseup(function () {
        $(document).off("mousemove");
        //console.log('mouseup')
    });
});
//上传图片预览
jQuery.fn.extend({
    uploadPreview: function (opts) {
        var _self = this,
            _this = $(this);
        opts = jQuery.extend({
            Img: "ImgPr",
            Width: 100,
            Height: 100,
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
            Callback: function () {}
        }, opts || {});
        _self.getObjectURL = function (file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file)
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file)
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file)
            }
            return url
        };
        _this.change(function () {
            if (this.value) {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$","i").test(this.value.toLowerCase())) {
                    alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                    this.value = "";
                    return false
                }
                // if ($.browser.safari) {
                //     try {
                //         $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
                //     } catch (e) {
                //         var src = "";
                //         var obj = $("#" + opts.Img);
                //         var div = obj.parent("div")[0];
                //         _self.select();
                //         if (top != self) {
                //             window.parent.document.body.focus()
                //         } else {
                //             _self.blur()
                //         }
                //         src = document.selection.createRange().text;
                //         document.selection.empty();
                //         obj.hide();
                //         obj.parent("div").css({
                //             'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLopianYiLianger(sizingMethod=scale)',
                //             'width': opts.Width + 'px',
                //             'height': opts.Height + 'px'
                //         });
                //         div.filters.item("DXImageTransform.Microsoft.AlphaImageLopianYiLianger").src = src
                //     }
                // } else {
                $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
                // }
                opts.Callback()
            }
        })
    }
});
// var zmFun={
//     inputOnblur:function (e) {
//         var _this=$(e);
//         _this.css("display","none");
//     }
// }

