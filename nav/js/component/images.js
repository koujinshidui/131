/**
 * Created by liuhuan on 2017/3/13.
 */
zmEditor.component.images = {
    setting:function(box){
        var tabs01 = $('<div></div>');
        var config01 = ["imgColor"];
        var items01 = zmEditor.component.setItems.config(config01);
        items01.forEach(function(e){
            tabs01.append(e);
        });
        var tabs02 = $('<div></div>');
        var config02 = ["boxShadow"];
        var items02 = zmEditor.component.setItems.config(config02);
        items02.forEach(function(e){
            tabs02.append(e);
        });
        var tabs03 = $('<div></div>');
        var config03 = [];
        var items03 = zmEditor.component.setItems.config(config03);
        items03.forEach(function(e){
            tabs03.append(e);
        });
        var tabsList = [{title:"常规",content:tabs01},{title:"效果",content:tabs02},{title:"效果设置",content:tabs03}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width":"350px","height":"685px"});
        return tabs;
    },
    method:{
        imgColor:function(){
            var e = zmEditor.component.setItems.strings.strSize();
            return e;
        },
    },
};
