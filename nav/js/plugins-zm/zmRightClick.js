/**
 * Created by Administrator on 2017/4/11.
 */
/*鼠标右击方法*/
$.fn.rightClick = function(e){
    var _this=$(this);
    var thisBox=_this.parent();
    var len=e.length;
    var str ="";
    for(var i =0;i<len;i++){
        var childs=e[i].childNodes;
        var cStr = "";
        if(childs!=undefined&&childs!=null){
            var clen=childs.length;
            for(var j=0;j<clen;j++){
                cStr+='<li onclick="'+childs[j].fn+'">'+childs[j].text+'</li>'
            }
            cStr='<ul class="zmMouseRightClickUl2">'+cStr+'</ul>'
        }
        str+='<li onclick="'+e[i].fn+'">'+e[i].text+cStr+'</li>'
    }
    str='<ul class="zmMouseRightClickUl1">'+str+'</ul>';
    _this.append(str);
    thisBox.on("contextmenu",function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".zmMouseRightClickUl1").parent().css({"display":"none"})
        var e= e||window.event;
        var downX = e.pageX;
        var downY = e.pageY;
        var documentW = $(document).width();
        var documentH = $(document).height();
        var boxW = _this.width();
        var boxH = _this.height();
        var left = downX;
        var top = downY;
        var childUl = $(".zmMouseRightClickUl2");
        var childUlW=childUl.width();
        childUl.css("left","100%")
        var style=childUl.attr("style");
        //鼠标右击点在x轴位置设置菜单位置
        if(downX>=documentW-boxW-childUlW){
            if(downX>=documentW-boxW){
                left=documentW-boxW-10;
            }
            style=style.replace("left","right")
        }
        else{
            style=style.replace("right","left")
        }
        childUl.attr("style",style);
        //鼠标右击点在y轴位置设置菜单位置
        if(downY>=documentH-boxH){
            top =documentH-boxH-10;
        }
        _this.css({"display":"block","left":left,"top": top})
        //return false;//屏蔽默认事件
    })
    document.onclick=function(e){
        var e =e||window.event;
        $(".zmMouseRightClickUl1").parent().css({"display":"none"})
    };
};
/*定义菜单list，调用右击方法*/
var rightList=[
    {text:'叠放顺序<span class="fa fa-caret-right "></span>',
        childNodes:[
            {text:"置于底层",fn:'zmEditor.component.options.sendToBack()'},
            {text:"置于顶层",fn:'zmEditor.component.options.bringToFront()'},
            {text:"上移一层",fn:'zmEditor.component.options.moveForward()'},
            {text:"下移一层",fn:'zmEditor.component.options.moveBackward()'},
            {text:"居右",fn:'zmEditor.component.options.textRight()'},
            {text:"居左",fn:'zmEditor.component.options.textCenter()'},
            {text:"居右",fn:'zmEditor.component.options.textLeft()'}
            ],
        fn:''
    },
    {text:"编辑",fn:'zmEditor.component.setting(this)'},
    {text:"展现方式",fn:''},
    {text:"上一步<span>Ctrl+Z</span>",fn:'zmEditor.component.options.prevStep()'},
    {text:"下一步<span>Ctrl+Y</span>",fn:'zmEditor.component.options.nextStep()'},
    {text:"剪切<span>Ctrl+X</span>",fn:'zmEditor.component.options.cut()'},
    {text:"复制<span>Ctrl+C</span>",fn:'zmEditor.component.options.copy()'},
    {text:"粘贴<span>Ctrl+V</span>",fn:'zmEditor.component.options.paste()'},
    {text:"删除<span>Del</span>",fn:'zmEditor.component.options.delete()'},
    {text:"显示所有页面",fn:''}
];

$("#zmRightClickAll").rightClick(rightList);