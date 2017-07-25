/**
 * Created by Administrator on 2017/4/11.
 */
//拖动排序
$(document).on('mousedown','.zm-drag-box>li',function(e) {
    e.preventDefault(e);
    var _this = $(this),box=_this.parent('ul');
    var downX = e.pageX,
        downY = e.pageY,
        downLeft = _this.offset().left,
        downTop = _this.offset().top,
        width = _this.outerWidth(),
        height = _this.outerHeight(),
        // temp = $('<li style="border:none;height:' + height + 'px;width:' + width + 'px;line-height: ' + height + 'px;"></li>');
        temp = $('<li style="box-sizing:border-box;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
            'height:' + height + 'px;width:' + width + 'px;line-height: ' + height + 'px;">' +
            '移动到这里</li>');
    _this.after(temp)
    _this.css({position: 'fixed', left: downLeft+5, top: downTop+5})
    $(document).mousemove(function (e) {
        e.preventDefault(e);
        var moveX = e.pageX;
        var moveY = e.pageY;
        box.children("li").not(_this).not(temp).each(function(){
            var o = $(this);
            var l = o.offset().left;
            var r = o.offset().left+o.outerWidth();
            var t = o.offset().top;
            var b = o.offset().top+o.outerHeight();
            if(moveX>l&&moveX<r&&moveY>t&&moveY<b){
                if(moveY>(b-t)/2+t){
                    temp.insertAfter(o)
                }else{
                    temp.insertBefore(o)
                }
            }
        })
        _this.css({"left": moveX - downX + downLeft + 5, "top": moveY - downY + downTop + 5,"z-index":999});
    });
    $(document).off('mouseup').mouseup(function () {
        $(document).off("mousemove").off('mouseup');
        //var p = temp.offset();
        // _this.animate({"left":p.left, "top":p.top}, 300, function() {
        //     if(!box.data('data-zm-sortDone')){
        //         _this.css({"position":"static","left":0,"top":0});
        //         temp.replaceWith(_this);
        //         box.data('data-zm-sortDone',true)
        //         console.log('3:'+box.data('data-zm-sortDone'))
        //     }
        // });
        _this.attr('style','')
        temp.replaceWith(_this);
    })

})