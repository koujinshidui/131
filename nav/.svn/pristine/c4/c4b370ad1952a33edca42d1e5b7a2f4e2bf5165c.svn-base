/**
 * Created by yerui on 2017/3/10.
 */
zmEditor.component.banner = {
    setting:function(box){
        var iSelected = zmEditor.component.nowEdit(),
        tabs=$('<div class=""></div>');
        var config =[
            {type:'bannerController',element:iSelected,flag:''},
            {type: "slider",element: iSelected,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ""}},
            {type: "slider",element: iSelected,flag: {title: "边框颜色",style: "noTab_color",isColor: true,param: "borderColor",goal: ""}},
            {type: "slider",element: iSelected,flag: {title: "边框宽度",style: "noTab_noColor",isColor: false,param: "borderWidth",size: [0,5],goal: ""}},
            {type:'borderStyle',element:iSelected,flag:''},
            {type:'radiu_ordinary',element:iSelected,flag:''},
        ];
        var items = zmEditor.component.setItems.config(config);
        items.forEach(function(e){
            tabs.append(e);
        });
        return tabs;
    }
}