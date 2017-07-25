/**
 * Created by Administrator on 2017/5/17.
 */
zmEditor.component.copyBox1=undefined;
// zmEditor.action.nowStep=0;
// zmEditor.action.maxStep=100;
zmEditor.action={
    nowStep:0,
    maxStep:50,//最大步骤
    list:[],//行为列表
    getInitState:function(){
        if(zmEditor.action.list.length!=0){
            var main=zmEditor.component.nowEdit();
            var _this = main.closest('.zm-component-box1');
            var id = _this.attr("id");
            var prevAction = zmEditor.action.list[zmEditor.action.nowStep-1];
            if(prevAction&&prevAction.id!=id){
                zmEditor.action.save()
            }
        }
    },
    //记录所有修改动作跟修改的组件id
    save:function(flag){
        if(zmEditor.action.nowStep<zmEditor.action.list.length){
            zmEditor.action.list.splice(zmEditor.action.nowStep)
        }
        if(zmEditor.action.list.length>zmEditor.action.maxStep){
            zmEditor.action.list.shift();
            zmEditor.action.nowStep=zmEditor.action.maxStep
        }

        var main=zmEditor.component.nowEdit();
        var _this = main.closest('.zm-component-box1');
        var temp = _this.clone();
        temp.find('.zm-dialog-box').remove();
        var id = _this.attr("id");
        var type = _this.attr('data-zm-component-type');
        zmEditor.action.list.push({id:id,pId:_this.attr('data-zm-containerId'),type:type,flag:flag,html:temp.prop('outerHTML')});
        zmEditor.action.nowStep++;
        console.log('操作步骤：'+zmEditor.action.nowStep);
    },
}
zmEditor.component.options={
    //删除组件
    delete:function() {
        if(zmEditor.component.nowBox1().length>0){
            zmEditor.action.save('delete');
            zmEditor.component.options.removeEle();
        }
        //带提示框的删除
        // var box1 = zmEditor.component.nowBox1();
        // var footer=$('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK">确 定</span></div>');
        // footer.find(".zm-dialog-btnOK").on('click',function(){
        //     zmEditor.getActionBeforeState();
        //     if(box1.find(".zm-component-carousel-box")){
        //         box1.find(".zm-component-carousel-box").boxSlider('destroy');
        //         //停止轮播运行
        //     }
        //     box1.remove();
        //     zmEditor.saveAction('delete')
        // })
        // zmEditor.dialog.open({
        //     title: '提示信息：',//弹窗标题，（支持文字，html标签，jq对象）
        //     content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="imgs/index/warming.png">' +
        //     '<div class="zm-dialog-msg" style="padding-top:15px">(`⌒`)亲~确定要删除该组件吗？</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
        //     footer: footer,
        //     width: 500,//弹窗宽度（只能是数字）
        //     height: 250,//弹窗高度（只能是数字）
        //     movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
        //     animate:'zm-dialog-animate-010',
        //     target:  box1//弹窗寄生的父级元素，
        // })
    },
    removeEle:function(){
        var box1 = zmEditor.component.nowBox1();
        if(box1.find(".zm-component-carousel-box").length!=0){
            box1.find(".zm-component-carousel-box").boxSlider('destroy');
            //停止轮播运行
        }
        var id = box1.attr('id');
        var len = zmEditor.action.nowStep-1;
        var lastId = '';
        for(var i =len;i>=0;i--){
            if(zmEditor.action.list[i].id!=id && $('#'+zmEditor.action.list[i].id).length>0){
                lastId=zmEditor.action.list[i].id;
                break;
            }
        }
        box1.remove();
        $('.zm-component-settingPanel').remove();
        $('.zm-tooltipBox').remove();
        if(lastId){
            zmEditor.component.showOption($('#'+lastId));
        }
        return lastId;
    },
    stepRemoveBefore:function(id,type){
        switch (type){
            case 'carousel':
                $('#'+id+' .zm-component-carousel-box').boxSlider('destroy');
                break;
            default:
                break;
        }
    },
    stepInitAfter:function(id,type){
        switch (type){
            case 'carousel':
                zmEditor.component.carousel.carouselGoing($('#'+id));
                break;
            default:
                break;
        }
    },
    //上一步操作
    prevStep:function(){
        var nowStep = zmEditor.action.nowStep;
        var actionList = zmEditor.action.list;
        if(nowStep>1){
            var nowAction = actionList[nowStep-1];
            var nowId = nowAction.id;
            var nowEle= $('#'+nowId);
            var nowPId = nowAction.pId;
            var nowFlag = nowAction.flag;
            var prevAction = actionList[nowStep-2];
            var prevId = prevAction.id;
            var prevPId = prevAction.pId;
            var prevFlag = prevAction.flag;
            switch (nowFlag){
                case "add":
                    zmEditor.component.options.stepRemoveBefore(nowId,nowAction.type);
                    nowEle.remove();
                    break;
                case "delete":
                    $('#'+prevPId).append(prevAction.html);
                    zmEditor.component.options.stepInitAfter(prevId,prevAction.type);
                    break;
                case "moveForward":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    if (thisIndex >1 ) {
                        zmEditor.component.options.autoFindBackward(thisIndex,thisIndex);
                    }
                    break;
                case "moveBackward":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    var maxIndex = parseInt($('#'+nowPId).attr('data-zm-maxIndex'));
                    if (thisIndex < maxIndex) {
                        zmEditor.component.options.autoFindForward(thisIndex,thisIndex,maxIndex);
                    }
                    break;
                case "sendToBack":
                    var oldIndex = parseInt(nowEle.attr('data-zm-oldIndex'));
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    nowEle.css('z-index',oldIndex).attr('data-zm-index',oldIndex);
                    nowEle.siblings('.zm-component-box1').each(function(){
                        var _thisBox = $(this);
                        var _thisBoxIndex = parseInt(_thisBox.css('z-index'));
                        if(_thisBoxIndex>thisIndex){
                            _thisBox.css('z-index',_thisBoxIndex-1).attr('data-zm-index',_thisBoxIndex-1);
                        }
                    });
                    break;
                case "bringToFront":
                    var maxIndex = parseInt($('#'+nowPId).attr('data-zm-maxIndex'));
                    var oldIndex = parseInt(nowEle.attr('data-zm-oldIndex'));
                    nowEle.css('z-index',oldIndex).attr('data-zm-index',oldIndex);
                    $('#'+nowPId).attr('data-zm-maxIndex',maxIndex-1);
                    break;
                default:
                    if(nowId==prevId){
                        zmEditor.component.options.stepRemoveBefore(nowId,nowAction.type);
                        nowEle.remove();
                        $('#'+prevPId).append(prevAction.html);
                        zmEditor.component.options.stepInitAfter(prevId,prevAction.type);
                    }
                    break;
            }
            if(prevFlag!='delete'){
                zmEditor.component.showOption($('#'+prevId));
            }
            zmEditor.action.nowStep--;
        }
        console.log('已执行上一步，当前是第几步:'+zmEditor.action.nowStep);
    },
    //下一步操作
    nextStep:function(){
        var nowStep = zmEditor.action.nowStep;
        var actionList = zmEditor.action.list;
        var actionListLen = actionList.length;
        if(nowStep<actionListLen){
            var nowAction = actionList[nowStep-1];
            var nowId =nowAction.id;
            var nowEle = $('#'+nowId);
            var nowPId = nowAction.pId;
            var nextAction = actionList[nowStep];
            var nextId = nextAction.id;
            var nextPId = nextAction.pId;
            var nextFlag = actionList[nowStep].flag;
            switch (nextFlag){
                case "add":
                    $('#'+nextPId).append(nextAction.html);
                    break;
                case "delete":
                    zmEditor.component.options.stepRemoveBefore(nowId,nowAction.type);
                    nextId = zmEditor.component.options.removeEle();
                    break;
                case "moveForward":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    var maxIndex = parseInt($('#'+nowPId).attr('data-zm-maxIndex'));
                    if (thisIndex < maxIndex) {
                        zmEditor.component.options.autoFindForward(thisIndex,thisIndex,maxIndex);
                    }
                    break;
                case "moveBackward":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    if (thisIndex >1 ) {
                        zmEditor.component.options.autoFindBackward(thisIndex,thisIndex);
                    }
                    break;
                case "sendToBack":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    nowEle.css('z-index',1).attr({'data-zm-index':1,'data-zm-oldIndex':thisIndex});
                    nowEle.siblings('.zm-component-box1').each(function(){
                        var _thisBox = $(this);
                        var _thisBoxIndex = parseInt(_thisBox.css('z-index'));
                        if(_thisBoxIndex<thisIndex){
                            _thisBox.attr('data-zm-index',_thisBoxIndex+1).css('z-index',_thisBoxIndex+1);
                        }
                    });
                    break;
                case "bringToFront":
                    var thisIndex = parseInt(nowEle.css('z-index'));
                    var container = nowEle.parent().closest('.zm-container');
                    var maxIndex = parseInt(container.attr('data-zm-maxIndex'));
                    if(thisIndex<maxIndex) {
                        nowEle.css('z-index', maxIndex + 1).attr({'data-zm-index':maxIndex + 1,'data-zm-oldIndex': thisIndex});
                        container.attr('data-zm-maxIndex', maxIndex + 1);
                    }
                    break;
                default:
                    if(nowId==nextId){
                        zmEditor.component.options.stepRemoveBefore(nowId,nowAction.type);
                        nowEle.remove();
                        $('#'+nextPId).append(nextAction.html);
                        zmEditor.component.options.stepInitAfter(nextId,nextAction.type);
                    }
                    break;
            }
            if(nextId){
                zmEditor.component.showOption($('#'+nextId));
            }
            zmEditor.action.nowStep++;
        }
        console.log('已执行下一步，当前是第几步:'+zmEditor.action.nowStep);
    },
    autoFindForward:function(index,thisIndex,maxIndex){
        var nowBox1 = zmEditor.component.nowBox1();
        if(index==maxIndex){
            return ;
        }
        if(nowBox1.siblings('[data-zm-index="' + (index + 1) + '"]').length==0){
            zmEditor.component.options.autoFindForward(index+1,thisIndex,maxIndex);
        }
        else{
            nowBox1.css('z-index', index + 1).attr('data-zm-index',index+1);
            nowBox1.siblings('[data-zm-index="' + (index + 1) + '"]').css('z-index', thisIndex).attr('data-zm-index',thisIndex);
        }
    },
    autoFindBackward:function(index,thisIndex){
        var nowBox1 = zmEditor.component.nowBox1();
        if (index == 1) {
            return;
        }
        if (nowBox1.siblings('[data-zm-index="' + (index - 1) + '"]').length == 0) {
            zmEditor.component.options.autoFindBackward(index - 1,thisIndex);
        }
        else {
            nowBox1.css('z-index', index - 1).attr('data-zm-index', index - 1);
            nowBox1.siblings('[data-zm-index="' + (index - 1) + '"]').css('z-index', thisIndex).attr('data-zm-index', thisIndex);
        }
    },
    //上移一层
    moveForward:function() {
        var nowBox1 = zmEditor.component.nowBox1();
        var thisIndex = parseInt(nowBox1.css('z-index'));
        var maxIndex = parseInt(nowBox1.parent().closest('.zm-container').attr('data-zm-maxIndex'));
        if (thisIndex < maxIndex) {
            zmEditor.action.getInitState();
            zmEditor.component.options.autoFindForward(thisIndex,thisIndex,maxIndex);
            zmEditor.action.save('moveForward');
        }
    },
    //下移一层
    moveBackward:function(){
        var nowBox1 = zmEditor.component.nowBox1();
        var thisIndex = parseInt(nowBox1.css('z-index'));
        if (thisIndex >1 ) {
            zmEditor.action.getInitState();
            zmEditor.component.options.autoFindBackward(thisIndex,thisIndex);
            zmEditor.action.save('moveBackward');
        }
    },
    //置于底层
    sendToBack:function(){
        var nowBox1 = zmEditor.component.nowBox1();
        var thisIndex = parseInt(nowBox1.css('z-index'));
        if(thisIndex>1){
            zmEditor.action.getInitState();
            nowBox1.css('z-index',1).attr({'data-zm-index':1,'data-zm-oldIndex':thisIndex});
            nowBox1.siblings('.zm-component-box1').each(function(){
                var _thisBox = $(this);
                var _thisBoxIndex = parseInt(_thisBox.css('z-index'));
                if(_thisBoxIndex<thisIndex){
                    _thisBox.attr('data-zm-index',_thisBoxIndex+1).css('z-index',_thisBoxIndex+1);
                }
            });
            zmEditor.action.save('sendToBack');
        }
    },
    //置于顶层
    bringToFront:function(){
        var nowBox1 = zmEditor.component.nowBox1();
        var thisIndex = parseInt(nowBox1.css('z-index'));
        var container = nowBox1.parent().closest('.zm-container');
        var maxIndex = parseInt(container.attr('data-zm-maxIndex'));
        if(thisIndex<maxIndex){
            zmEditor.action.getInitState();
            nowBox1.css('z-index',maxIndex+1).attr({'data-zm-index':maxIndex+1,'data-zm-oldIndex':thisIndex});
            container.attr('data-zm-maxIndex',maxIndex+1);
            zmEditor.action.save('bringToFront');
            // nowBox1.siblings('.zm-component-box1').each(function(){
            //     var _thisBox = $(this);
            //     var _thisBoxIndex = parseInt(_thisBox.css('z-index'));
            //     if(_thisBoxIndex>thisIndex){
            //         _thisBox.attr('data-zm-index',_thisBoxIndex-1).css('z-index',_thisBoxIndex-1);
            //     }
            // });
        }
    },
    //剪切
    cut:function(){
        zmEditor.action.getInitState();
        var nowBox1 = zmEditor.component.options.copy();
        nowBox1.remove();
        zmEditor.action.save('delete')
    },
    //复制
    copy:function(){
        var nowBox1 = zmEditor.component.nowBox1(zmEditor.component.nowEdit());
        if(nowBox1.find('.zm-component-main').attr('contenteditable')!='true'){
            zmEditor.component.copyBox1=nowBox1.clone();
            zmEditor.component.copyBox1.data({'data-zm-parentContainer':nowBox1.parent('.zm-container')});
            zmEditor.createId(zmEditor.component.copyBox1)
        }
        return nowBox1;
    },
    //粘贴
    paste:function(){
        //zmEditor.component.topTools.copy();
        if(zmEditor.component.copyBox1){
            var newComponent = zmEditor.component.copyBox1.clone();
            zmEditor.createId(newComponent);
            var left = parseInt(newComponent.css('left'))+10;
            var top = parseInt(newComponent.css('top'))+10;
            zmEditor.component.copyBox1.css({'left':left,'top':top})
            newComponent.css({'left':left,'top':top}).find('.zm-dialog-box').remove();
            newComponent.appendTo(zmEditor.component.copyBox1.data('data-zm-parentContainer'));
            zmEditor.component.showOption(newComponent,left,top)
            if(newComponent.attr('data-zm-component-type')=='carousel'){
                zmEditor.component.carousel.carouselGoing(newComponent);
            }
            zmEditor.action.save('add')
        }
    },
    textLeft:function(){
        var nowEdit = zmEditor.component.nowEdit();
        if(zmEditor.component.nowBox1(nowEdit).attr('data-zm-component-type')=='text'){
            nowEdit.css('text-align','left')
        }
    },
    textCenter:function(){
        var nowEdit = zmEditor.component.nowEdit();
        if(zmEditor.component.nowBox1(nowEdit).attr('data-zm-component-type')=='text'){
            nowEdit.css('text-align','center')
        }
    },
    textRight:function(){
        var nowEdit = zmEditor.component.nowEdit();
        if(zmEditor.component.nowBox1(nowEdit).attr('data-zm-component-type')=='text'){
            nowEdit.css('text-align','right')
        }
    },
}