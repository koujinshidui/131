/**
 * Created by Administrator on 2017/4/21.
 */

$(document).keydown(function(e){
    var nowBox1 = zmEditor.component.nowBox1(zmEditor.component.nowEdit());
    if(e.ctrlKey == true){//ctrl
        if(e.keyCode == 67){//c：复制
            zmEditor.component.options.copy();
        }
        if(e.keyCode == 88){//x：剪切
            $('.zm-component-settingPanel').remove();
            zmEditor.component.options.cut();
        }
        if(e.keyCode==86){//v：粘贴
            $('.zm-component-settingPanel').remove();
            zmEditor.component.options.paste();
        }
        if(e.keyCode==89){//y:下一步
            $('.zm-component-settingPanel').remove();
            zmEditor.component.options.nextStep();
        }
        if(e.keyCode==90){//z：上一步
            $('.zm-component-settingPanel').remove();
            zmEditor.component.options.prevStep();
        }
    }

    if(e.keyCode==27){//ESC
        $('.zm-dialog-box').remove();
    }
    if(e.keyCode == 46){ //del
        zmEditor.component.options.delete(nowBox1)
    }
    if(e.keyCode == 13){ //enter
        $('.zm-dialog-btnOK').click();
    }
    if(e.keyCode == 37){ //left
        nowBox1.css('left',parseInt(nowBox1.css('left'))-1)
        nowBox1.find(".zm-component-location-x").html(parseInt(nowBox1.css('left')))
    }
    if(e.keyCode == 38){ //up
        nowBox1.css('top',parseInt(nowBox1.css('top'))-1)
        nowBox1.find(".zm-component-location-y").html(parseInt(nowBox1.css('top')))
    }
    if(e.keyCode == 39){ //right
        nowBox1.css('left',parseInt(nowBox1.css('left'))+1)
        nowBox1.find(".zm-component-location-x").html(parseInt(nowBox1.css('left')))
    }
    if(e.keyCode == 40){ //down
        nowBox1.css('top',parseInt(nowBox1.css('top'))+1)
        nowBox1.find(".zm-component-location-y").html(parseInt(nowBox1.css('top')))
    }
    if (e.keyCode == 16) {//shift
        zmEditor.flag.isShiftKeyDown = true;
    }
}).keyup(function (e) {
    if(e.keyCode == 16){
        zmEditor.flag.isShiftKeyDown = false;
    }
});