/**
 * Created by Administrator on 2017/2/23.
 */
zmEditor.component.btn={
    setting:function(box){
        var nowEdit=zmEditor.component.nowEdit().children();
        var tabs1=$('<div></div>');
        var config1 =[
            {type:'textContent',element:nowEdit,flag:{title:'文字内容',style:'normal',param:'textContent'}},
            {type:'Family',element:nowEdit,flag:{title:'字体',style:'normal',param:'color'}},
            // {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:''}},
            {type: "slider",element: nowEdit,flag: {title: "文字大小<br><span>（像素）</span>", style: "noTab_noColor", param: "fontSize", size: [12,180]}},
            {type: "slider",element: nowEdit,flag: {title: "文字颜色", style: "noTab_color",isColor:true,  param: "color", size: [0,100]}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:''}},
            // {type: "slider",element: nowEdit,flag: {title: "背景颜色", style: "noTab_color",isColor:true,  param: "backgroundColor", size: [0,100]}},
            {type: "slider",element: nowEdit,flag: {title: "字间距<br><span>（像素）</span>", style: "noTab_noColor",isColor:false,  param: "fontSpace", size: [-5,100]}},
            {type: "slider",element: nowEdit,flag: {title: "文字颜色<br>(光标悬停)", style: "noTab_color",isColor: true,param: "hoverColor"}}
            // {type: "slider",element: nowEdit,flag: {title: "行间距", style: "noTab_noColor",isColor:false,  param: "lineSpace", size: [-20,100]}},
            // {type: "slider",element: nowEdit,flag: {title: "上下边距", style: "noTab_noColor",isColor:false,  param: "tbPadding", size: [-20,100]}},
            // {type: "slider",element: nowEdit,flag: {title: "左右边距", style: "noTab_noColor",isColor:false,  param: "lrPadding", size: [-20,100]}}
        ];
        var items1 = zmEditor.component.setItems.config(config1);
        items1.forEach(function(e){
            tabs1.append(e);
        });
        var tabs2=$('<div></div>');
        var config2 =[
            {type: "slider",element: nowEdit,flag: {title: "背景颜色", style: "noTab_color",isColor:true,  param: "backgroundColor", size: [0,100]}},
            {type: "slider",element: nowEdit,flag: {title: "边线颜色", style: "noTab_color",isColor:true,  param: "borderColor", size: [0,100]}},
            {type:'borderStyle',element:nowEdit,flag:{title:'线条类型',style:'normal',param:'borderColor'}},
            {type: "slider",element: nowEdit,flag: {title: "边线粗细<br><span>（像素）</span>", style: "noTab_noColor",isColor:false,  param: "borderWidth", size: [0,10]}},
            {type:'radius',element:nowEdit,flag:{title:'',style:'normal',param:''}}
        ];
        var items2 = zmEditor.component.setItems.config(config2);
        items2.forEach(function(e){
            tabs2.append(e);
        });
        var tabs3=$('<div></div>');
        var config3 =[
            {type:'href',element:nowEdit,flag:{title:'字间距',style:'normal',param:''}}
        ];
        var items3 = zmEditor.component.setItems.config(config3);
        items3.forEach(function(e){
            tabs3.append(e);
        });

        var tabs4=$('<div></div>');
        var config4 =[
            {type:'boxShadow',element:nowEdit,flag:{title:'字间距',style:'normal',param:''}}
        ];
        var items4 = zmEditor.component.setItems.config(config4);
        items4.forEach(function(e){
            tabs4.append(e);
        });

        var tabsList = [{title:"文字",content:tabs1},{title:"形状",content:tabs2},{title:"链接",content:tabs3},{title:"阴影",content:tabs4}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        return tabs
    },
    preview:function(box){
        box.click(function(){
            console.log('点了按钮')
        })
    }
};
$(document).on("mouseover",'.zm-edit-components-button',function(){
    var _this = $(this);
    var oldColor = _this.css('color');
    _this.attr('data-zm-oldColor',oldColor);
    _this.css('color',_this.attr("data-type-hoverColor"));
});
$(document).on("mouseleave",".zm-edit-components-button",function(){
    var _this = $(this);
    _this.css('color',_this.attr("data-zm-oldColor"));
})
