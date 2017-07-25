

/**
 * @author:yerui
 * @type {{setting: zmEditor.component.nav.setting}}
 */
zmEditor.component.nav = {
    setting: function (box) {
        var iSelected = zmEditor.component.nowEdit(),
            iSelected_show_type,iSelected;   //zm_nav_general_  zm_nav_general_
        if (iSelected.hasClass("zm_nav_general_cross_one")) iSelected_show_type = "General-cross_one";
        if (iSelected.hasClass("zm_nav_general_cross_two")) iSelected_show_type = "General-cross_two";
        if (iSelected.hasClass("zm_nav_general_cross_three")) iSelected_show_type = "General-cross_three";
        if (iSelected.hasClass("zm_nav_general_cross_four")) iSelected_show_type = "General-cross_four";
        if (iSelected.hasClass("zm_nav_general_vertical_one_one")) iSelected_show_type = "General-vertical_one_one";
        if (iSelected.hasClass("zm_nav_general_vertical_two_one")) iSelected_show_type = "General-vertical_two_one";
        if (iSelected.hasClass("zm_nav_general_vertical_three_one")) iSelected_show_type = "General-vertical_three_one";
        console.log(iSelected_show_type);
        switch (iSelected_show_type) {
            case "General-cross_one":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1;
                    config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                        {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                        {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                        {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                         {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                        {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                         ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "cross_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_one", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [
                    {type:'color_on',element:iSelected,flag:'mian_border_color'},
                    {type:'borderWidth_nav',element:iSelected,flag:''},
                    {type:'radius',element:[iSelected.children().children("li")[0],iSelected.children().children("li")[iSelected.children().children("li").length-1]],flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];// "borderStyle",
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e); //zm-colorPicker
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_one", "sStyle", "initStyle"));
                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });

                var tabs4 = $('<div></div>');
                var config4 = [
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'},
                    {type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''},
                            ];// "shadow", "shadowX", "shadowY",
                var items4 = zmEditor.component.setItems.config(config4);                                                                                                     //{type:'background_opacity',element:iSelected,flag:''}
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "cross_one", "sStyle", "initStyle"));

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs5 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config5 = [ {type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];//{type:'nav_hover_or_click',element:iSelected,flag:''}
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "hHover", "initHover"));
                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}];
                break;
            case "General-cross_two":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                    ];//,{type:'fontEffect',element:iSelected,flag:{title:'文字颜色',style:'normal',param:'backgroundCot:iSelected,flag:'mian_children_childrenIndependentLi_hover_bg'}, {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'}, {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'}, {type:'fontStyle',element:iSelected,flag:''}  ];//, "family", "size", "fontSpace", "paragraphStyle", "fontEffect", "navNode1Style"
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_two", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_btc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_btc'},
                    {type:'mian_children_childrenLi_btw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_btw',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bbc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bbc'},
                    {type:'mian_children_childrenLi_bbw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bbw',element:iSelected,flag:''},];// {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},  {type:'radius_whole',element:iSelected,flag:'radius_whole_nav'}
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 5, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor: ", "borderBottomColor", "cross_two", "hHover", "initHover"));

                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });

                var tabs4 = $('<div></div>');
                var config4 = [ {type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'},{type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''},];
                var items4= zmEditor.component.setItems.config(config4);                                                                                                   // "shadow", "shadowX", "shadowY", ,{type:'background_opacity',element:iSelected,flag:''}
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "cross_two", "sStyle", "initStyle"));

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs5 = $('<div></div>');
                var config5 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "hHover", "initHover"));

                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}];
                break;
            case "General-cross_three":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                    ];//,{type:'fontEffect',element:iSelected,flag:{title:'文字颜色',style:'normal',param:'backgroundColor'}},
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_three", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_border_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_border_color'},
                    {type:'mian_children_childrenLi_bw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bw',element:iSelected,flag:''},
                    {type:'radius',element:$(iSelected.children().children("li")),flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                     ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor", "borderColor", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor ", "borderColor", "cross_three", "hHover", "initHover"));

                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });

                var tabs4 = $('<div></div>');
                var config4 = [{type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''}]; //"shadow","shadowX","shadowY",  , {type:'background_opacity',element:iSelected,flag:''}
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });

                var tabs5 = $('<div></div>');
                var config5 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));

                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}]
                break;
            case "General-vertical_one_one":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];
                //,{type:'fontEffect',element:iSelected,flag:{title:'文字颜色',style:'normal',param:'backgroundColor'}},
                //
                // var config1 = [{type:'bannerController',element:iSelected,flag:'.nav.Resize'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenIndependentLi_bg'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenIndependentLi_hover_bg'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenIndependentLi_hover_color'},
                //     {type:'fontStyle',element:iSelected.children().children("li"),flag:{title:'',style:'normal',param:''}},
                //     {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                //     {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                //, "family", "size", "fontSpace", "paragraphStyle", "fontEffect", "navNode1Style"
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_one", "hHover", "initHover"));

                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_btc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_btc'},
                    {type:'mian_children_childrenLi_btw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_btw',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bbc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bbc'},
                    {type:'mian_children_childrenLi_bbw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bbw',element:iSelected,flag:''},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    // {type:'radius_whole',element:iSelected,flag:'radius_whole_all_child'}
                    ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 5, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "vertical_one", "hHover", "initHover"));


                var tabs3 = $('<div></div>');
                var config3 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs3, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs3.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "菜单",
                    content: tabs3
                }]; //{title:"间距",content:tabs3},
                break;
            case "General-vertical_two_one":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                // var config1 = [{type:'bannerController',element:iSelected,flag:'.nav.Resize'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                //     {type:'fontStyle',element:iSelected.children().children("li"),flag:{title:'',style:'normal',param:''}},
                //     {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                //     {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                // ];//, "family", "size", "fontSpace", "paragraphStyle", "fontEffect", "navNode1Style"
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_two", "hHover", "initHover"));

                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)

                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_border_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_border_color'},
                    {type:'mian_children_childrenLi_bw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bw',element:iSelected,flag:''},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    {type:'radius',element:$(iSelected.children().children("li")),flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];


                // var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_border_color'},
                //     {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_border_color'},
                //     {type:'mian_children_childrenLi_bw',element:iSelected,flag:''},
                //     {type:'mian_children_childrenLi_hover_bw',element:iSelected,flag:''},
                //     {type:'radius',element:$(iSelected.children().children("li")),flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                // ];

                var items2 = zmEditor.component.setItems.config(config2);

                items2.forEach(function (e) {
                    tabs2.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor", "borderColor", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor ", "borderColor", "vertical_two", "hHover", "initHover"));
                var tabs3 = $('<div></div>');
                var config3 = [{type:'mian_children_childrenSpan_height',element:iSelected,flag:''}]; //"shadow","shadowX","shadowY", , {type:'background_opacity',element:iSelected,flag:''}
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                tabs3.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });

                var tabs4 = $('<div></div>');
                var config4 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},{type:'nav_hover_or_click',element:iSelected,flag:''},];
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs4.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "间距",
                    content: tabs3
                }, {title: "菜单", content: tabs4}];
                break;

            case "General-vertical_three_one":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);                                                                                                                                                                                                                                                                                                                                                                        {type:'fontStyle',element:iSelected,flag:''}
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_three", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_three", "sStyle", "initStyle")); //zm_nav_general_vertical_three_one
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_three", "hHover", "initHover"));
                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)
                var tabs2 = $('<div></div>');
                var config2 = [{type:'borderWidth_nav',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_border_color'},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    {type:'radius',element:[iSelected.children().children("li")[0],iSelected.children().children("li")[iSelected.children().children("li").length-1]],flag:{vc:"vertical",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e); //zm-colorPicker
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_three", "sStyle", "initStyle"));

                var tabs3 = $('<div></div>');
                var config3 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'}, {type:'mian_children_childrenSpan_height',element:iSelected,flag:''}];
                var items3 = zmEditor.component.setItems.config(config3);                                                                                                     //"shadow", "shadowX", "shadowY",  , {type:'background_opacity',element:iSelected,flag:''}
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs3, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "vertical_three", "sStyle", "initStyle"));
                tabs3.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs4 = $('<div></div>');
                var config4 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},  {type:'nav_hover_or_click',element:iSelected,flag:''},];   //   {type:'mian_children_childrenSpan_height',element:iSelected,flag:''}
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs4.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "间距",
                    content: tabs3
                }, {title: "菜单", content: tabs4}];
                break;
            default:
                break;

        };
        function pageset() {
            return $("<div><span class='typeClasspageSet' style='width: 100px;height: 50px;  line-height: 50px;" +
                "display: block;background-color:#4ab1a7;text-align: center; color: #fff;border-radius: 8px;margin: 7px 0 0 40px;'>" +
                "页面设置</span></div>");
        };
        function nav_child_vertical_on(tabs) {
            var iSelected_ul_li_h, iSel_ul_li_br;
            tabs.children(".zm-edit-text-bannerController").children("div:eq(0)").on("click", function () {
                var iSelected = zmEditor.component.nowEdit(),
                    ul = iSelected.children("ul"),
                    a, b, c, w, f, iSel_ul_li_mr, e_zm_bS, e_zm_Sc;
                if (iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullScreen") == "true") {
                    h = $("html").height();
                    a = iSelected.children().children("li");
                    iSelected_ul_li_h = a.css("height");
                    console.log(iSelected_ul_li_h);
                    $(a).css({"marginRight": "", "border-right-width": "", "box-sizing": "border-box"}); //全屏默认清楚选择样式
                    b = parseInt(h) / a.length;
                    $(a).each(function (index, element) {
                        console.log(b);
                        $(this).css("height", b + "px");
                    });
                    iSel_ul_li_br = iSelected.offset().top;
                    iSelected.closest(".zm-component-box1").css("top", "0px");
                } else {
                    $(iSelected.children("ul").children("li")).css({"height": iSelected_ul_li_h}); //"marginRight":iSel_ul_li_mr+"",,"border-right-width":iSel_ul_li_br+"","box-sizing":""
                    iSelected.closest(".zm-component-box1").css("top", iSel_ul_li_br + "px");
                }
            });
            tabs.children(".zm-edit-text-bannerController").children("div:eq(2)").children("input").on("change keyup", function () {
                var iSelected = zmEditor.component.nowEdit();
                zmEditor.globalMethod.nav.OneType.wd_callback(iSelected, parseInt(iSelected.css("width")));
            });
            $(tabs.children(".zm-edit-text-color").children("label:eq(0)").children(".zm-colorPicker")).children(".zm-colorPicker-more").on("click", "span", function () {
                iSelected = zmEditor.component.nowEdit();
                iSelected.children("ul").css("color", "");
            });
        }
        function nav_child_vertical_on_child_remove(tabs1) {
            tabs1.children(".zm-edit-text-bannerController").children(".zm-edit-text-bannerController-Onediv").each(function (index, ele) {
                if (index == 0) {
                    return true;
                }
                $(this).remove();
            })
            tabs1.children(".zm-edit-text-bannerController").css("height", "70px");
        }
        function nav_child_on(tabs,iSelected) {
            var iSel_ul_li_w, iSel_ul_li_br;
            tabs.children(".zm-edit-text-bannerController").children("div:eq(0)").on("click", function () {
                //  iSelected = zmEditor.component.nowEdit(),
                var   ul = iSelected.children("ul"), a, b, c, w, f, iSel_ul_li_mian, e_zm_bS, e_zm_Sc,initial_li_width;
                if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                    // w = iSelected.closest(".zm-row-full").css("width"); //
                    w = iSelected.closest(".zm-all").css("width"); //
                    // w=(parseInt(w)+2)+"px";
                    // console.log(w);
                    iSelected.css("width", w+"");
                    iSelected.find(".zm-component-main").css("width", w+"");
                    // console.log(iSelected.find(".zm-component-main").css("width"));
                    // console.log(zmEditor.globalMethod.nav.data.arrLike[ zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].li.sStyle["width"]);
                    iSel_ul_li_mian=zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].mian.sStyle["width"];//存储mian的上一次宽度
                    zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].mian.sStyle["width"]=w;//存储mian的全屏宽度
                    iSel_ul_li_w = iSelected.children("ul").children("li").css("width");////存储li的上一次宽度
                    initial_li_width=zmEditor.globalMethod.nav.OneType.Count_li_width(iSelected, w) + "px";//计算全频状态下li的width
                    zmEditor.globalMethod.nav.data.arrLike[ zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].li.sStyle["width"]  = initial_li_width; //存储li的全屏下的宽度
                    // zmEditor.globalMethod.nav.OneType.li.sStyle.width = zmEditor.globalMethod.nav.OneType.Count_li_width(iSelected, w) + "px"; //存储li的全局宽度
                    iSelected.find(".zm-component-main").children("ul").children("li").css("width",initial_li_width);
                    // zmEditor.globalMethod.nav.refreshNav(iSelected);//从新渲染
                    // console.log(zmEditor.globalMethod.nav.data.arrLike[ zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].mian.sStyle["width"]);
                    e_zm_bS = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace"); //全屏默认不让调整宽度
                    if (e_zm_bS.length > 0) {
                        console.log(123);
                        e_zm_bS.find(".zm-edit-slider-child").css("backgroundColor", "#ebebe4"); //设置间距框的js
                        e_zm_bS.children("input[type='text']").attr("disabled", "disabled"); //设置间距框的js
                        e_zm_bS.css("position", "relative"); //设置间距框的js
                        e_zm_bS.append($("<div class='zm-edit-slider-borderSpaceOnediv' style='width: 450px;height: 72px;position: absolute;left: 0;top: 0;'></div>"))
                    };
                    e_zm_Sc = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace_sc");
                    e_zm_Sc.css("position", "relative"); //设置间距框的js
                    e_zm_Sc.append($("<div class='zm-edit-slider-borderSpace_scOnediv' style='width: 450px;height: 72px;position: absolute;left: 0;top: 0;background-color:rgba(169,169,169,0.4);'></div>"));
                    $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace").find(".zm-edit-slider-child").css("left", "0px");
                    $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace").children("input[type='text']").val("0");
                    } else {
                    // $(iSelected.children("ul").children("li")).css({
                    //     // "marginRight": iSel_ul_li_mr + "",
                    //     "width": iSel_ul_li_w + "",
                    //     // "border-right-width": iSel_ul_li_br + "",
                    //     // "box-sizing": ""
                    // });
                    zmEditor.globalMethod.nav.data.arrLike[ zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].mian.sStyle["width"]=iSel_ul_li_mian; //还原mian的上一次宽度
                    zmEditor.globalMethod.nav.data.arrLike[ zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].li.sStyle["width"] = iSel_ul_li_w; ////还原li的上一次宽度
                    iSelected.find(".zm-component-main").css("width", iSel_ul_li_mian+"");
                    iSelected.find(".zm-component-main").children("ul").children("li").css("width",iSel_ul_li_w);
                    // zmEditor.globalMethod.nav.refreshNav(iSelected);
                    console.log(iSel_ul_li_w);
                    // $(iSelected.children("ul").children("li")).last().css({"border-right-width": "0px"});
                    console.log(321);
                    // w = iSelected.closest(".zm-row-full").find(".zm-component-main").css("width");
                    w = iSelected.closest(".zm-all").find(".zm-component-main").css("width");
                    e_zm_bS = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace");
                    if (e_zm_bS.length > 0) {
                        e_zm_bS.find(".zm-edit-slider-child").css("backgroundColor", "deepskyblue"); //设置间距框的js
                        e_zm_bS.children("input[type='text']").removeAttr("disabled"); //设置间距框的js
                        e_zm_bS.children(".zm-edit-slider-borderSpaceOnediv").remove(); //设置间距框的js
                        e_zm_bS.css("position", ""); //设置间距框的js
                      }
                    e_zm_Sc = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace_sc");
                    e_zm_Sc.css("position", ""); //设置间距框的js
                    e_zm_Sc.children(".zm-edit-slider-borderSpace_scOnediv").remove();
                }
            });
            $(tabs.children(".zm-edit-text-color").children("label:eq(0)").children(".zm-colorPicker")).children(".zm-colorPicker-more").on("click", "span", function () {
                // var iSelected = zmEditor.component.nowEdit();
                iSelected.children("ul").css("color", "");
            });
            tabs.children(".zm-edit-text-bannerController").children("div:eq(1)").children("input").on("change keyup", function () {
                // var iSelected = zmEditor.component.nowEdit();
                iSelected.css({"height": $(this).val() + "px", "line-height": $(this).val() + "px"});
                iSelected.children("ul").children("li").css({"height": $(this).val() + "px"});
                zmEditor.globalMethod.nav.OneType.li.sStyle.height = parseInt($(this).val());
                // console.log(zmEditor.globalMethod.nav.OneType.li.sStyle.height);
            });
            tabs.children(".zm-edit-text-bannerController").children("div:eq(2)").children("input").on("change keyup", function () {
                // var iSelected = zmEditor.component.nowEdit();
                iSelected.css("width", $(this).val() + "px");
                zmEditor.globalMethod.nav.OneType.li.sStyle.width = zmEditor.globalMethod.nav.OneType.wd_callback(iSelected, parseInt($(this).val())); //存储li的全局宽度
                // console.log(zmEditor.globalMethod.nav.OneType.li.sStyle.width);
            });
        }
        tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width": "", "height": "700px"});//400px
        box.addClass("data-nav-Independent");
        return tabs;
    },
};
zmEditor.globalMethod.nav = {
    Nav: function (isSelect, mark, content) {
        return new zmEditor.globalMethod.nav.init(isSelect, mark, content);
    },
    n: "",
    data: {//存储数据
        arrLike:{},
        dataString: {},
        pageSet:{
            ObJect:"",
            html:'<ul class="zm-page-setting-ul" style="width:430px; position: relative">'
            +'<li class="zm-page-setting-li zm-page-homePage" data-nav-display="constant">'+
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span><span class="zm-nav-yuliu_line"></span>' +
            '<i class="fa fa-th" ></i>' +
            '<a class="zm-page-setting-a" >首页</a>' +
            '<span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span>' +
            '<i class="fa fa-cog zm-page-setting-right-icon"></i><b>完成</b>' +
            '</div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div  class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th"></i><a class="zm-page-setting-a" >企业动态</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i>  <b>完成</b></div> ' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >企业新闻</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >关于我们</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >友情链接</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'</ul>',
        },
        savePageSet:function(){
            if($(".zm-dialog-box-pageSet").length==0){
                console.log($(".zm-dialog-box-pageSet"));
                return zmEditor.globalMethod.nav.data.pageSet.html;
            }else{
                return zmEditor.globalMethod.nav.data.pageSet.html=$(".zm-dialog-box-pageSet").find(".mCSB_container>ul")[0].outerHTML;
            }
        }
    },
    init: function (isSelect, mark, content) {
        var a, b, c, d,e,f,style_nav;
        a = isSelect[0].classList[4];
        b = zmEditor.globalMethod.nav.global_verOrcross_type(a);
        console.log(b);
        this.navMian = isSelect;  //进行对上次拖拽的nav保存;
        this.navMian.removeClass(this.navMian[0].classList[5]);//移除css样式
        this.id = a;
        e=new Date().getTime();
        // a=a.toLowerCase();
        this.navMian.attr("data-"+a,""+a+e);
        zmEditor.globalMethod.nav.n = this.navMian;
        f="data-"+a+e;
        zmEditor.globalMethod.nav.data.arrLike[f]={};
        // console.log(this.id)
        // console.log($("div[data-"+a+"="+a+e+"]"));
        style_nav=$("<style class='style_nav_"+f+"'></style>");
        isSelect.append(style_nav);
        d = a;//把-换成_
        // zmEditor.globalMethod.nav.remove(isSelect,this);
        // if (zmEditor.globalMethod.nav.global_verOrcross(isSelect)) {
        // } else {
        // c = a.split("");
        // c.splice(14, 1, "_");
        // d = c.join("");//把-换成_

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, d, "sStyle", "initStyle","li",f);//style 去掉后两个参数就是单版本
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, d, "hHover", "initHover","li",f);//hoverstyle
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, d, "clickhover", "initclickhover","li",f);//clickhover所在的元素

        zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",f,d); //下拉列表的颜色

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment(zmEditor.globalMethod.nav.OneType.li, "eventClass","li",f); //li下的事件类名
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment(zmEditor.globalMethod.nav, "hover_or_click_show_string", "hover_or_click_show_string",f); //初始化nav的展现方式

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment_callback(zmEditor.globalMethod.nav.OneType.li, "nav_li_Independent_position","li",f,b); //li下的nav_li_Independent_position 独立的背景色索引初始化、

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, d, "sStyle", "initStyle","span",f);//初始化span
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.mian, d, "sStyle", "initStyle","mian",f);//初始化mian

        console.log(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string);
        console.log(zmEditor.globalMethod.nav.data.arrLike[f].li.hHover);

        zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),this.navMian,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));

        // zmEditor.globalMethod.nav.initNavList.styleCallback(this.navMian,f,a,b,d,style_nav,e);//f 对象单一标识,a对象所对应的导航类名,b 判断对象属于哪一类型 把css导航类名转化为js导航类名 初始化导航元素  对应一级列表 li mian span
        //写到这里hover
        // zmEditor.globalMethod.nav.initNavList.hover_styleCallback(b,this.navMian,f,a);// 对应一级列表 li初始化   b
        // zmEditor.globalMethod.nav.initNavList.endHover(b,this.navMian,f);
    },
    remove: function (isSelect, _this) { //移除上次拖拽的nav;
        if (zmEditor.globalMethod.nav.n) {
            console.log($(zmEditor.globalMethod.nav.n).hasClass("zm-component-main"));
            if ($(zmEditor.globalMethod.nav.n).hasClass("zm-component-main")) {
                zmEditor.globalMethod.nav.n.closest(".zm-component-box1 ").remove();
            }
        }
    },
    initNavList: {
        nav_ele_style_Independent_assignment_callback:function (ele,sStyle,str,f,b) {
            if(zmEditor.globalMethod.nav.initNavList.IndependentConfirm(b)){
                zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[sStyle];
                return;
            }
        },
        IndependentConfirm:function (string,fn) { //判断是不是独立的nav
            return string =="one_four" || string == "one_two" || string == "two_one" || string == "two_two" || string == "vertical_one_one" || string == "vertical_three_one";
        },
        nav_ele_style_assignment_initclickhover:function(ele, d, sStyle, initStyle,str,f){//3月31日第二版改动
            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[initStyle][d];
        },
        nav_ele_style_Independent_assignment:function(ele,sStyle,str,f){
            if(sStyle==str){
               zmEditor.globalMethod.nav.data.arrLike[f][sStyle]=ele[sStyle];
            }else{
                zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[sStyle];
            }
        },
        dropdownBg:function(ele,sStyle,str,f,d){
            zmEditor.globalMethod.nav.data.arrLike[f][str]=ele[sStyle][d];
        },
        nav_ele_style_assignment: function (ele, d, sStyle, initStyle,str,f,filter) {
            if(!zmEditor.globalMethod.nav.data.arrLike[f][str])zmEditor.globalMethod.nav.data.arrLike[f][str]={};//如果参数不为对象，赋值为对象
            if(!zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle])zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]={};
                for (var k in ele[sStyle]) {
                    if(filter){if(k==filter[0]||k==filter[1]||k==filter[2])continue;}

                    // typeof ele[initStyle][k] === "object" ? ( ele[sStyle][k] = ele[initStyle][k][d] ? ele[initStyle][k][d] : "") : ele[sStyle][k] = ele[initStyle][k];
                    if(typeof ele[initStyle][k] === "object"){
                        if(ele[initStyle][k][d]){
                            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]=ele[initStyle][k][d];
                        }else{
                            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]="";
                        }
                    }else{
                        zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]= ele[initStyle][k];
                    }
        }
        },
        styleCallback_initialize_cg_rs: function (select, j, k,f,a,radius_arr) {//单执行所对应的样式赋值、   d,  b,  // js版本
            // console.log(j);
            if(j.substr(-6, 6)== "Radius"){
                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_radius(select,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j],a,radius_arr)
            }else if(/border.*Width/i.test(j)){
                // console.log("我是width--->"+j);
                zmEditor.globalMethod.nav.initNavList.initBorder(select,f,a,j);
            }else{
                select.children().children("li").each(function (i, e) {
                        $(this).css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                });
            }
        },
        styleCallback_initialize_cg_rsa: function (select, j, k,f,a,radius_arr) {//单执行所对应的样式赋值 样式表版本
            console.log(j);
            if(j.substr(-6, 6)== "Radius"){
                zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_radius(select,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j],a,radius_arr)
            }else if(/border.*Width/i.test(j)){
                console.log("我是width--->"+j);
                zmEditor.globalMethod.nav.initNavList.initBorder(select,f,a,j);
            }else{
                select.children().children("li").each(function (i, e) {
                    $(this).css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                });
            }
        },
        styleCallback_initialize_cr_bg: function (string, select, style, style1, selector, i,f,k) { //初始化颜色样式设置   一个版本保留,重在保留代码思想。
            var a =select.children("ul").children("li");
            if (style == "backgroundColor") { //背景
                console.log(zmEditor.globalMethod.nav.initNavList.IndependentConfirm(string));
                console.log(zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position);
                if (zmEditor.globalMethod.nav.initNavList.IndependentConfirm(string)) {//string == "one_four" || string == "one_two" || string == "two_one" || string == "two_two" || string == "vertical_one_one" || string == "vertical_three_one"
                    // a.first().css(style, style1);
                    $(a[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css(style, style1);
                } else {
                    $(a[i]).css(style, style1);
                }
            } else if (style == "color") {
                if (zmEditor.globalMethod.nav.initNavList.IndependentConfirm(string)) {//string == "one_four" || string == "one_two" || string == "two_one" || string == "two_two" || string == "vertical_one_one" || string == "vertical_three_one"
                    // if (i == 0) {
                    if (i == zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position) {
                        // $(a[i]).css(style, zmEditor.globalMethod.nav.OneType.li.initHover[style][selector]);
                        // $(a[i]).css(style, zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[style]);
                        $(a[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css(style, zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[style]);
                    } else {
                        $(a[i]).css(style, style1);
                    }
                } else {
                    $(a[i]).css(style, style1);
                }
            }
            return style;
        },
        styleCallback_initialize_radius: function (select, style, i, radius_arr) {//初始圆角样式设置
            // select, style, i, style1,page
            // var a = style.substr(-6, 6);
            // if (a == "Radius") { //圆角
            //     if (style == "borderTopLeftRadius" || style == "borderBottomLeftRadius"){//
            //         if (i == 0) {
            //             select.css(style, style1);
            //         }
            //     } else if (style == "borderTopRightRadius" || style == "borderBottomRightRadius") {
            //         if (i == select.closest("ul").children("li").length - 1) {
            //             console.log("我来了")
            //             select.css(style, style1);
            //         }
            //     } else {
            //         select.css(style, style1);
            //     }
            // }
            // return a;
            //此时的i为a 就是类名
            radius_arr.push(style);
            console.log(i);
            zmEditor.globalMethod.nav.initNavList.setallRadius_assignment(zmEditor.globalMethod.nav.initNavList.getRadiusEle(select,i),i,radius_arr)
        },
        styleCallback:function (select,f,a) {  //js版本       b,  ,d
            var mian_str=[],li_str=[],span_str=[],radius_arr=[];

            zmEditor.globalMethod.nav.initNavList.againCalculationMianWidth(select,f); //重新计算main的宽度,为兼容用户没有托拽nav就操作页面设置弹窗

            for (var k in zmEditor.globalMethod.nav.data.arrLike[f]) {
                for (var j in zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle){
                    console.log(zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                    switch (k) {
                        case "mian":
                            select.css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                            // mian_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";");
                            break;
                        case "span":
                            // select.children("").children("span").css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                            select.children("ul").children("span").css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);   //添加小点到mian层兼容改动
                            // span_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                            break;
                        case "li":
                            switch (a) {
                                case "zm_nav_general_cross_one_one":
                                case "zm_nav_general_cross_one_two":
                                case "zm_nav_general_cross_one_three":
                                case "zm_nav_general_cross_one_four":
                                case "zm_nav_general_cross_one_five":
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j, k,f,a,radius_arr);  // b,  d,
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                // case "zm_nav_general_cross_two_one":
                                //     zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f,a,radius_arr);
                                //     // li_str.push(j+":",zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                                //     // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                //     //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                //     // }
                                //     zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                //     break;
                                case "zm_nav_general_vertical_one_one":
                                case "zm_nav_general_vertical_two_one":
                                case "zm_nav_general_vertical_three_one":
                                    if(j=="height")continue;  //纵向导航一级li不设置高度，需要continue关键字跳出
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j,  k,f,a,radius_arr); // b,  d,
                                    // li_str.push(j+":",zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                                    // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                    //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                    // }
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                default:
                                        select.children().children("li").css(j,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                                   // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                   //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                   // }
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["mian"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(mian_str)
            console.log(span_str)
            // zmEditor.globalMethod.nav.styleCallback_initialize_regexp(style_nav,'div[data-'+a+'='+'"'+a+e+'"]',zmEditor.globalMethod.lowerStr(mian_str.join("")));
            // zmEditor.globalMethod.nav.styleCallback_initialize_add_regexp(style_nav,'div[data-'+a+'='+'"'+a+e+'"] span',zmEditor.globalMethod.lowerStr(span_str.join("")));
            // zmEditor.globalMethod.nav.styleCallback_initialize_add_regexp(style_nav,'div[data-'+a+'='+'"'+a+e+'"] li',zmEditor.globalMethod.lowerStr(li_str.join("")));
            return "我初始化了";
        },
        styleCallbacka:function (select,f,a) { //样式表版本    //b,
            var e=Number(/\d+/.exec(f)[0]);
            console.log(e);
            var mian_str=[],li_str=[],span_str=[],radius_arr=[];
            for (var k in zmEditor.globalMethod.nav.data.arrLike[f]) {
                for (var j in zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle){
                    switch (k) {
                        case "mian":
                            mian_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";");
                            break;
                        case "span":
                            span_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";");
                            break;
                        case "li":
                            switch (a) {
                                case "zm_nav_general_cross_one_one":
                                case "zm_nav_general_cross_one_two":
                                case "zm_nav_general_cross_one_three":
                                case "zm_nav_general_cross_one_four":
                                case "zm_nav_general_cross_one_five":
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j, k,f,a,radius_arr);  // b,  d,
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                case "zm_nav_general_vertical_one_one":
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j,  k,f,a,radius_arr);  // b, d,
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                case "zm_nav_general_vertical_three_one":
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j,  k,f,a,radius_arr);  // b, d,
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                default:
                                    select.children().children("li").css(j,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);

                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);

                                    // li_str.push(j+":",zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["mian"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(mian_str)
            console.log(span_str)
            //$(".style_nav_"+f+"")
            zmEditor.globalMethod.nav.styleCallback_initialize_regexp($(".style_nav_"+f+""),'div[data-'+a+'='+'"'+a+e+'"]',zmEditor.globalMethod.lowerStr(mian_str.join("")));
            zmEditor.globalMethod.nav.styleCallback_initialize_add_regexp($(".style_nav_"+f+""),'div[data-'+a+'='+'"'+a+e+'"] span',zmEditor.globalMethod.lowerStr(span_str.join("")));
            // zmEditor.globalMethod.nav.styleCallback_initialize_add_regexp($(".style_nav_"+f+""),'div[data-'+a+'='+'"'+a+e+'"] li',zmEditor.globalMethod.lowerStr(li_str.join("")));
            return "我初始化了";
        },
        // copy
        // styleCallback:function (select,f,a,b,d,style_nav,e) {
        //     //初始化样式
        //     // for (var k in zmEditor.globalMethod.nav.OneType) {
        //     for (var k in zmEditor.globalMethod.nav.data.arrLike[f]) {
        //         for (var j in zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle){
        //             // for (var j in zmEditor.globalMethod.nav.OneType[k].sStyle) {
        //             console.log(zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //             switch (k) {
        //                 case "mian":
        //                     // select.css(j, zmEditor.globalMethod.nav.OneType[k].sStyle[j]);
        //                     select.css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //                     // zmEditor.globalMethod.nav.markstrStyle(style_nav,"div[data-"+a+"="+a+e+"]",j+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //                     break;
        //                 case "span":
        //                     // select.children().children("span").css(j, zmEditor.globalMethod.nav.OneType[k].sStyle[j]);
        //                     select.children().children("span").css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //                     break;
        //                 case "li":
        //                     switch (a) {
        //                         case "zm_nav_general_cross_one_two":
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             break;
        //                         case "zm_nav_general_cross_one_three":
        //
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             break;
        //                         case "zm_nav_general_cross_one_four":
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             break;
        //                         case "zm_nav_general_cross_two_one":
        //                             // select.children().children("li").each(function(i,e){
        //                             //     if(styleCallback_initialize_radius($(this),j,i,zmEditor.globalMethod.nav.OneType[k].sStyle[j])=="Radius"){
        //                             //     } else if(styleCallback_initialize_cr_bg(b,select,j,zmEditor.globalMethod.nav.OneType[k].sStyle[j],d,i)=="backgroundColor"){
        //                             //     }else if(styleCallback_initialize_cr_bg(b,select,j,zmEditor.globalMethod.nav.OneType[k].sStyle[j],d,i)=="color"){
        //                             //     } else{$(this).css(j,zmEditor.globalMethod.nav.OneType[k].sStyle[j]);}
        //                             // });
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             break;
        //                         case "zm_nav_general_vertical_one_one":
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             break;
        //                         case "zm_nav_general_vertical_three_one":
        //                             zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f);
        //                             if (j == "borderTopRightRadius") {
        //                                 // select.children().children("li").first().css(j, zmEditor.globalMethod.nav.OneType[k].sStyle[j]);
        //                                 select.children().children("li").first().css(j,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //                             }
        //                             break;
        //                         default:
        //                             // select.children().children("li").css(j, zmEditor.globalMethod.nav.OneType[k].sStyle[j]);
        //                             select.children().children("li").css(j,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
        //                             break;
        //                     }
        //                     break;
        //                 default:
        //                     break;
        //             }
        //         }
        //     }
        //     return "我初始化了";
        // },
        // copy
        hover_styleCallback:  function (navMian,f,a){   //b,
            // 对应一级列表 li初始化
        // if (b == "one_four" || b == "one_two" || b == "two_one" || b == "vertical_one_one" || b == "vertical_three_one") {
        // navMian.children().children("li").each(function (index, ele) {//初始化hover
        //     // zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", zmEditor.globalMethod.nav.OneType.li.sStyle["backgroundColor"],
        //     //     zmEditor.globalMethod.nav.OneType.li.hHover["backgroundColor"], "mouseenter" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.backgroundColor, "mouseleave" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseleave.backgroundColor,index)
        //     // zmEditor.globalMethod.nav.initNavList.specialHover($(this), "color", zmEditor.globalMethod.nav.OneType.li.sStyle["color"],
        //     //     zmEditor.globalMethod.nav.OneType.li.hHover["color"], "mouseenter" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseleave.color,index);
        //     zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle["backgroundColor"],
        //         zmEditor.globalMethod.nav.data.arrLike[f].li.hHover["backgroundColor"], "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.backgroundColor, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.backgroundColor,index,f)
        //     zmEditor.globalMethod.nav.initNavList.specialHover($(this), "color", zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle["color"],
        //         zmEditor.globalMethod.nav.data.arrLike[f].li.hHover["color"], "mouseenter" +  zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color, "mouseleave" +  zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.color,index,f);
        //     });
        //   } else {
        // }
        // navMian.children().children("li").each(function (index, ele){//初始化hover
        //     // zmEditor.globalMethod.nav.initNavList.hover($(this), "backgroundColor", zmEditor.globalMethod.nav.OneType.li.sStyle["backgroundColor"],
        //     //     zmEditor.globalMethod.nav.OneType.li.hHover["backgroundColor"], "mouseenter" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.backgroundColor, "mouseleave" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseleave.backgroundColor);
        //     // zmEditor.globalMethod.nav.initNavList.hover($(this), "color", zmEditor.globalMethod.nav.OneType.li.sStyle["color"],
        //     //     zmEditor.globalMethod.nav.OneType.li.hHover["color"], "mouseenter" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseleave.color);
        //     // zmEditor.globalMethod.nav.initNavList.hover($(this), "borderTopWidth", zmEditor.globalMethod.nav.OneType.li.sStyle["borderTopWidth"],
        //     //     zmEditor.globalMethod.nav.OneType.li.hHover["borderTopWidth"], "mouseenter" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.OneType.li.eventClass.mouseleave.color);
        //     zmEditor.globalMethod.nav.initNavList.hover($(this), "backgroundColor", zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle["backgroundColor"],
        //         zmEditor.globalMethod.nav.data.arrLike[f].li.hHover["backgroundColor"], "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.backgroundColor, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.backgroundColor,f);
        //     zmEditor.globalMethod.nav.initNavList.hover($(this), "color", zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle["color"],
        //         zmEditor.globalMethod.nav.data.arrLike[f].li.hHover["color"], "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.color,f);
        //     if(b=="two_two"){
        //         zmEditor.globalMethod.nav.initNavList.hover($(this), "borderTopWidth",zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle["borderTopWidth"],
        //             zmEditor.globalMethod.nav.data.arrLike[f].li.hHover["borderTopWidth"], "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.borderTopWidth, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.borderTopWidth,f);
        //     }
        // })
            navMian.children().children("li").each(function(index,ele){
                zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.color,f);
                zmEditor.globalMethod.nav.initNavList.endClick($(this),f,navMian,index,a);
            })
    },
        hover: function (ele, css, style, hover, evenType1, evenType2,f) {
            if (css == "backgroundColor") {
                // ele.off(zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.backgroundColor);
                ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter[css]);
                ele.on(evenType1, function () {
                    console.log('我执行了');
                    ele.stop().animate({"backgroundColor":hover},1000, "linear");
                    // ele.animate({[css]: hover}, 1000, "linear");
                });
                ele.on(evenType2, function () {
                    console.log('我走了');
                    $(this).stop(true, true);
                    ele.css(css, style);
                    console.log(style);
                });
            } else {
                // ele.off(zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.color);
                ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter[css]);
                ele.on(evenType1, function () {
                    console.log('我hover了');
                    ele.css(css, hover);
                    console.log(hover)
                });
                ele.on(evenType2, function () {
                    console.log('我离开了');
                    ele.css(css, style);
                    console.log(style)
                });
            }
        },
        specialHover: function (ele, css, style, hover, evenType1, evenType2,index,f) {
            if (css == "backgroundColor") {
                // ele.off(zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.backgroundColor);
                ele.off( zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.backgroundColor);
                ele.on(evenType1, function () {
                    ele.stop().animate({"backgroundColor":hover},1000, "linear");
                    // ele.animate({[css]: hover}, 1000, "linear");
                    console.log('我进backgroundColor来了');
                });
                ele.on(evenType2, function () {
                    $(this).stop(true, true);
                    ele.css(css,"#fff");//独立背景色比较特殊
                    // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css({"backgroundColor":style});
                    $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css({"backgroundColor":style});
                });
            } else if (css == "color") {
                // ele.off(zmEditor.globalMethod.nav.OneType.li.eventClass.mouseenter.color);
                ele.off( zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color);
                ele.on(evenType1, function () {
                    console.log('我hover了');
                    ele.css(css, hover);
                });
                ele.on(evenType2, function () {
                    console.log('我color离开了');
                    ele.css(css, style);
                    // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css({"color":zmEditor.globalMethod.nav.OneType.li.hHover.color});
                    $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css({"color":zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.color});
                });
            }
            // ele.off("click"+zmEditor.globalMethod.nav.OneType.li.eventClass.click.click);
            ele.off("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click);
            console.log("我解绑了");
            // ele.on("click"+zmEditor.globalMethod.nav.OneType.li.eventClass.click.click,function(){
            ele.on("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click,function(){
               ele.closest("ul").children("li") .each(function(){
                    // $(this).css({"backgroundColor":"#fff","color":zmEditor.globalMethod.nav.OneType.li.sStyle.color});//清空所有背景色.
                    $(this).css({"backgroundColor":"#fff","color":zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle.color});//清空所有背景色.
                })
                // zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position=index;
                zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position=index;
                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.OneType.li.hHover.color)
                $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.color);

                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.OneType.li.sStyle.backgroundColor},1000, "linear")
                $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.backgroundColor},1000, "linear")
                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle.backgroundColor},1000, "linear")

            });
        },
        endHover: function (ele, style, hover, evenType1, evenType2,f) {
            // console.log(ele);
            ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color);
            ele.on(evenType1, function () {
                var a,b;
                b=$(this).closest(".zm-component-main"),a=b[0].classList[4];
                if($(this).closest("ul").children("li").index(ele)==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                for (var m in zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover]){
                    if (m) {
                        if (m == "backgroundColor") {
                            console.log(hover+"--->"+m+"-->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]);
                            ele.stop().animate({"backgroundColor": zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]}, 1000, "linear");
                        }else{
                            if( m.substr(-6, 6)== "Radius"){//所有nav没有radius
                              continue;
                            }
                            zmEditor.globalMethod.nav.initNavList.singlestyle(ele,m,f,"hHover",undefined,a,"li",true);
                            //     if(/zm_nav_general_cross_one/.test(f)){
                            //         if(/border/.test(m)){//第一种横向导航的边框不做改变
                            //         continue;
                            //     }
                            // }
                            // ele.css(m, zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]);
                        }
                    }
                }
            });
            ele.on(evenType2, function () {
                var a,b;
                b=$(this).closest(".zm-component-main"),a=b[0].classList[4];
                if($(this).closest("ul").children("li").index(ele)==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                for (var m in zmEditor.globalMethod.nav.data.arrLike[f]["li"][style]){
                    if (m) {
                        if (m == "backgroundColor") {
                            // console.log(m+"-->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            ele.stop(true, true).css({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]});
                        }else{
                            if( m.substr(-6, 6)== "Radius"){
                                continue;
                            }
                            // if(/border/.test(m)){//第一种横向导航的边框不做改变
                            //     if(/zm_nav_general_cross_one/.test(f)){
                            //         continue;

                            //     }
                            // }
                            zmEditor.globalMethod.nav.initNavList.singlestyle(ele,m,f,"sStyle",undefined,a,"li");
                            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            // ele.stop(true, true).css(m, zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            console.log(m+"---->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                        }
                    }
                }
            });
        },
        endClick:function(ele,f,navMian,i,a,fn){
            ele.off("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click);
            ele.on("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click,function(){
                var element=$(this).closest("ul").children("li"),index=element.index($(this));
                if(index==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                // debugger;
                for(var n in zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"]){
                    if( n.substr(-6, 6)== "Radius")continue;
                    if(zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"][n]){
                        zmEditor.globalMethod.nav.initNavList.singlestyle($(element),n,f,"sStyle",navMian,a,"li");
                        // zmEditor.globalMethod.nav.initNavList.singlestyle($(element[zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover]),n,f,"sStyle",navMian,a);
                    // $(element[zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover]).stop(true,true).css(n,zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"][n]);
                    // element.stop(true,true).css(n,zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"][n]);
                    }
                }
              for(var m in zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"]){
                  if( m.substr(-6, 6)== "Radius")continue;
                  if(m){
                            // $(this).css({m:zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"][m]});//先默认以hover样式为点击样式..
                      zmEditor.globalMethod.nav.initNavList.singlestyle($(this),m,f,"hHover",navMian,a,"li")
                            console.log(zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"][m]);
                  }
                    }
                zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover=index;
          console.log( zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover);
                if(fn){
                    fn();
                }
                })
            },
        setallRadius: function (ele1,ele2,ele3,ele4,val){
            // console.log(ele2);
            // console.log(val);
            // console.log(val[1]);
            $(ele1).css("border-top-left-radius",val[0]);
            $(ele2).css("border-top-right-radius",val[1]);
            $(ele3).css("border-bottom-right-radius",val[2]);
            $(ele4).css("border-bottom-left-radius",val[3]);
          },
        setallRadius_assignment:function (ele,str,val) {
            // console.log(str);
            // console.log(ele);
            // console.log(val);
            if(val.length==4){
                // console.log("radius_arr没有到4个");
            switch (ele.length){
                case 1:
                    zmEditor.globalMethod.nav.initNavList.setallRadius($(ele),$(ele),$(ele),$(ele),val)
                    break;
                case 2:
                    if(/vertical/.test(str)){
                     zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[0],ele[1],ele[1],val)
                    }else{
                        // console.log("我进来了->setallRadius_assignment");
                     zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[1],ele[1],ele[0],val)
                    }
                    break;
                case 4:
                    zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[1],ele[2],ele[3],val)
                    break;
                default:
                    ele.each(function(index,element){
                        // console.log('我进所有radius了');
                    zmEditor.globalMethod.nav.initNavList.setallRadius($(element),$(element),$(element),$(element),val)
                    })
                    break;
            }
            }
        },
        getRadiusEle:function(ele,a){
            var b=[],c=ele.children().children("li");
         if(/zm_nav_general_cross_one/.test(a)||/zm_nav_general_vertical_three/.test(a)){
             $(b.push(c[0],c[c.length-1]));
             // console.log(ele);
             // console.log(c);
             // console.log(b);
           return $(b);
         }else if(/zm_nav_general_cross_three/.test(a)||/zm_nav_general_vertical_two/.test(a)){//
             return $(c);
         }else{
             console.log(ele);
          return ele;
         }
        },
        saveRadius:function(ele,str,a,flag,val){
            console.log($(ele[0]));
            var nowEdit=$(ele[0]).closest(".zm-component-main");
            console.log(nowEdit);
            console.log(nowEdit[0]);
            strings=nowEdit[0].classList[4];
            console.log(strings);
            console.log(str.fn);
            data_a=zmEditor.globalMethod.nav.global_compotents_IndependentName(nowEdit);
            console.log(data_a);
           switch (strings){
               case "zm_nav_general_cross_one_one":
               case "zm_nav_general_cross_one_two":
               case "zm_nav_general_cross_one_three":
               case "zm_nav_general_cross_one_four":
               case "zm_nav_general_cross_one_five":
               case "zm_nav_general_cross_two_one":
               case "zm_nav_general_cross_two_two":
               case "zm_nav_general_cross_three_one":
               case "zm_nav_general_cross_three_two":
               case "zm_nav_general_cross_three_three":
               case "zm_nav_general_cross_three_four":
               case "zm_nav_general_cross_three_five":
               case "zm_nav_general_vertical_three_one":
               case "zm_nav_general_vertical_three_two":
               case "zm_nav_general_vertical_three_three":
                   if(a){
                       assignmentNavPrototype(data_a,"li","sStyle","borderTopLeftRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderTopRightRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderBottomRightRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderBottomLeftRadius",val)
                       console.log(flag);
                       console.log(val);
                       console.log(zmEditor.globalMethod.nav.data.arrLike[data_a])
                   }else {
                       console.log(flag);
                       switch (flag) {
                           case "tl":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderTopLeftRadius", val)
                               break;
                           case "tr":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderTopRightRadius", val)
                               break;
                           case "br":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderBottomRightRadius", val)
                               break;
                           case "bl":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderBottomLeftRadius", val)
                               break;

                           default:
                               break;
                       }
                       console.log(val)
                       console.log(zmEditor.globalMethod.nav.data.arrLike[data_a])
                   }

                   break;
               default:
                   break;
           }
           function assignmentNavPrototype(data_a,li,sStyle,prototype,val) {
               zmEditor.globalMethod.nav.data.arrLike[data_a][li][sStyle][prototype]=val+"px";
           }
        },
        currentPage:function (select,f,k,a){//表示当前页渲染样式
            console.log(a);
             switch (a){
                 case "zm_nav_general_cross_one_one":
                 case "zm_nav_general_cross_one_two":
                 case "zm_nav_general_cross_one_three":
                 case "zm_nav_general_cross_one_four":
                 case "zm_nav_general_cross_one_five":
                 case "zm_nav_general_vertical_three_one":
                     for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover) {
                         if (m == "backgroundColor" || m == "color") {
                             $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m, zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                             console.log(m);
                             }
                     }
                     break;
                 default:
                     for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                         if(m!="width"||m!="height"){
                             $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                         }
                     }
                     break;
             }
        },
        initBorder:function(select,data_a,a,j){
            switch (a){
                case "zm_nav_general_cross_one_one":
                case "zm_nav_general_cross_one_two":
                case "zm_nav_general_cross_one_three":
                case "zm_nav_general_cross_one_four":
                case "zm_nav_general_cross_one_five":
                    // console.log( zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"]);
                    // console.log( zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]);
                    select.children().children("li").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                                                          "borderTopColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],
                                                          "borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                                                          "borderBottomColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomColor"]});
                    select.children().children("li:eq(0)").css({"borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                    select.children().children("li").last().css({"borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"],"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                    break;
                case "zm_nav_general_cross_two_one":
                case "zm_nav_general_cross_two_two":
                    break;
                case "zm_nav_general_vertical_two_one":
                    select.children().children("li").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                        "borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],
                        "borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                        "borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"]});
                    break;
                case "zm_nav_general_vertical_three_one":
                    // console.log("我是width--->"+j);
                    // console.log(a)
                    // console.log(select.children().children("li"));
                    if(j=="borderLeftWidth"||j=="borderLeftColor"||j=="borderRightWidth"||j=="borderRightColor")
                    select.children().children("li").css({
                        "borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                        "borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],
                        "borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                        "borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomColor"]
                    });
                    if(j=="borderTopWidth"||j=="borderTopColor"||j=="borderBottomWidth"||j=="borderBottomColor"){
                        select.children().children("li:eq(0)").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],"borderTopColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]});
                        select.children().children("li").last().css({"borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"],"borderBottomColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                    }
                    break;
                default:
                    break;
            }
        },
        singlestyle:function (_this,m,f,hOrS,navMian,a,ele,boolean) {//endclick and endhover
              switch(a){
                  case "zm_nav_general_cross_one_one":
                  case "zm_nav_general_cross_one_two":
                  case "zm_nav_general_cross_one_three":
                  case "zm_nav_general_cross_one_four":
                  case "zm_nav_general_cross_one_five":
                  case "zm_nav_general_vertical_three_one":
              // debugger;
                      if(m == "backgroundColor" || m =="color") {
                          console.log("我调用了并改变样式了"+'---->'+m+"--->"+zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m]);
                          console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                          // console.log(_this);
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
                  case "zm_nav_general_cross_two_one":
                  case "zm_nav_general_cross_two_two":
                  case "zm_nav_general_vertical_one_one":
                      if(m == "backgroundColor"|| m =="color"||m=="borderTopColor"||m=="borderBottomColor"||m=="borderTopWidth"||m=="borderBottomWidth") {
                          console.log("我调用了并改变样式了"+'---->'+m+"--->"+zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m]);
                          console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                          // console.log(_this);
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
                  // case "zm_nav_general_vertical_three_one":
                  // case "zm_nav_general_vertical_three_two":
                  // case "zm_nav_general_vertical_three_three":
                  //     break;
                  default:
                      if(m !="height"||m!="wdith"){
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
              }
        },
        //重新计算main的宽度,为兼容用户没有托拽nav就操作页面设置弹窗
        againCalculationMianWidth: function (select,ObjIndependentClass){
            if(!(/vertical/.test(select[0].classList[4]))){
                var a,b,c,d,e;
                e=select.children("ul"); //添加小点到mian层兼容改动
                // e=select.children("");
                a=e.children("li").length;
                b=e.children("span").length;
                console.log(ObjIndependentClass);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"]);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["li"].sStyle.width);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["span"].sStyle.width);
                c=parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"].sStyle.width);
                d=a*parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["li"].sStyle.width)+ b*parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["span"].sStyle.width); //psrseint 用的有问题
                console.log(d);
                console.log(c);
                if(c===d)return c+"px";else  return zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"].sStyle.width= d+"px";

            }
        },
    },
    OneType: {
        mian: {
            sStyle: {
                // borderColor: "",
                // borderWidth: "",
                // borderStyle: "",
                // border: "",
                borderRadius: "",
                lineHeight: "",
                height:"",
                width: "",
                boxSizing: "",
                fontSize:"",
                textAlign: "",
            },
            initStyle: {
                borderRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px 0 10px 0",
                    "zm_nav_general_cross_one_four": "10px 10px 10px 10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "0 10px 0 0",
                },
                // borderTopRightRadius: "10px",
                // border: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "1px solid #00f6ff",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "1px solid #ed1566",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "1px solid #79c959",
                // },
                // borderColor: {
                //     "zm_nav_general_cross_one_one": "deepskyblue",
                //     "zm_nav_general_cross_one_two": "deepskyblue",
                //     "zm_nav_general_cross_one_three": "deepskyblue",
                //     "zm_nav_general_cross_one_four": "#ed1566",
                //     "zm_nav_general_cross_two_one": "#000",
                //     "zm_nav_general_cross_two_two": "#000",
                //     "zm_nav_general_cross_three_one": "#000",
                //     "zm_nav_general_cross_three_two": "#000",
                //     "zm_nav_general_cross_three_three": "#000",
                //     "zm_nav_general_cross_three_four": "#000",
                //     "zm_nav_general_cross_three_five": "#000",
                //     "zm_nav_general_vertical_one_one": "#000",
                //     "zm_nav_general_vertical_two_one": "#000",
                //     "zm_nav_general_vertical_three_one": "#79c959",
                // },
                // borderWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "1px",
                // },
                // borderStyle: {
                //     "zm_nav_general_cross_one_one": "solid",
                //     "zm_nav_general_cross_one_two": "solid",
                //     "zm_nav_general_cross_one_three": "solid",
                //     "zm_nav_general_cross_one_four": "solid",
                //     "zm_nav_general_cross_two_one": "solid",
                //     "zm_nav_general_cross_two_two": "solid",
                //     "zm_nav_general_cross_three_one": "solid",
                //     "zm_nav_general_cross_three_two": "solid",
                //     "zm_nav_general_cross_three_three": "solid",
                //     "zm_nav_general_cross_three_four": "solid",
                //     "zm_nav_general_cross_three_five": "solid",
                //     "zm_nav_general_vertical_one_one": "solid",
                //     "zm_nav_general_vertical_two_one": "solid",
                //     "zm_nav_general_vertical_three_one": "solid",
                // },
                height: {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_three": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                width: { // 样式表版本
                    "zm_nav_general_cross_one_one": "804px",//804px
                    "zm_nav_general_cross_one_two": "804px",//804px
                    "zm_nav_general_cross_one_three": "804px",//804px
                    "zm_nav_general_cross_one_four": "800px",//800px
                    "zm_nav_general_cross_two_one": "804px",//804px
                    "zm_nav_general_cross_two_two": "804px",//804px
                    "zm_nav_general_cross_three_one": "820px",//820px
                    "zm_nav_general_cross_three_two": "820px",//820px
                    "zm_nav_general_cross_three_three": "820px",//820px
                    "zm_nav_general_cross_three_four": "820px",//820px
                    "zm_nav_general_cross_three_five": "812px",//812px
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                // width: { // js 版本
                //     "zm_nav_general_cross_one_one": "804px",
                //     "zm_nav_general_cross_one_two": "804px",
                //     "zm_nav_general_cross_one_three": "804px",
                //     "zm_nav_general_cross_one_four": "800px",
                //     "zm_nav_general_cross_two_one": "804px",
                //     "zm_nav_general_cross_two_two": "804px",
                //     "zm_nav_general_cross_three_one": "820px",
                //     "zm_nav_general_cross_three_two": "820px",
                //     "zm_nav_general_cross_three_three": "824px",
                //     "zm_nav_general_cross_three_four": "824px",
                //     "zm_nav_general_cross_three_five": "812px",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                // },
                fontSize:{
                    "zm_nav_general_cross_one_one": "20px",
                    "zm_nav_general_cross_one_two": "20px",
                    "zm_nav_general_cross_one_three": "20px",
                    "zm_nav_general_cross_one_four": "20px",
                    "zm_nav_general_cross_one_five": "20px",
                    "zm_nav_general_cross_two_one": "20px",
                    "zm_nav_general_cross_two_two": "20px",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "20px",
                    "zm_nav_general_cross_three_three": "20px",
                    "zm_nav_general_cross_three_four": "20px",
                    "zm_nav_general_vertical_one_one": "20px",
                    "zm_nav_general_vertical_two_one": "20px",
                    "zm_nav_general_vertical_three_one": "20px",
                },
                lineHeight: "50px",
                boxSizing: "content-box",  //border-box //添加小点到mian层兼容改动
                textAlign: "center",
            },
        },
        span: {
            length: "4",
            sStyle: {
                backgroundColor: "",
                width: "",
                height: "100%",
                display:"block",
                borderTopColor:"",
                borderTopWidth:"",
                borderBottomColor:"",
                borderBottomWidth:"",
                borderStyle:"",
            },
            initStyle: {
                backgroundColor: {
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#fff",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#fff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                width: {
                    "zm_nav_general_cross_one_one": "1px",
                    "zm_nav_general_cross_one_two": "1px",
                    "zm_nav_general_cross_one_three": "1px",
                    "zm_nav_general_cross_one_four": "0px",
                    "zm_nav_general_cross_one_five": "0px",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "5px",
                    "zm_nav_general_cross_three_two": "5px",
                    "zm_nav_general_cross_three_three": "5px",
                    "zm_nav_general_cross_three_four": "5px",
                    "zm_nav_general_cross_three_five": "2px",
                    "zm_nav_general_vertical_one_one": "210px",
                    "zm_nav_general_vertical_two_one": "210px",
                    "zm_nav_general_vertical_three_one": "210px",
                },
                height: {
                    "zm_nav_general_cross_one_one": "100%",
                    "zm_nav_general_cross_one_two": "100%",
                    "zm_nav_general_cross_one_three": "100%",
                    "zm_nav_general_cross_one_four": "100%",
                    "zm_nav_general_cross_one_five": "100%",
                    "zm_nav_general_cross_two_one": "100%",
                    "zm_nav_general_cross_two_two": "100%",
                    "zm_nav_general_cross_three_one": "100%",
                    "zm_nav_general_cross_three_two": "100%",
                    "zm_nav_general_cross_three_three": "100%",
                    "zm_nav_general_cross_three_four": "100%",
                    "zm_nav_general_vertical_one_one": "1px",
                    "zm_nav_general_vertical_two_one": "2px",
                    "zm_nav_general_vertical_three_one": "1px",
                },
                display: {
                    "zm_nav_general_cross_one_one": "block",
                    "zm_nav_general_cross_one_two": "block",
                    "zm_nav_general_cross_one_three": "block",
                    "zm_nav_general_cross_one_four": "block",
                    "zm_nav_general_cross_two_one": "block",
                    "zm_nav_general_cross_two_two": "block",
                    "zm_nav_general_cross_three_one": "block",
                    "zm_nav_general_cross_three_two": "block",
                    "zm_nav_general_cross_three_three": "block",
                    "zm_nav_general_cross_three_four": "block",
                    "zm_nav_general_cross_three_five": "block",
                    "zm_nav_general_vertical_one_one": "block",
                    "zm_nav_general_vertical_two_one": "block",
                    "zm_nav_general_vertical_three_one": "block",
                },
                borderTopColor: {
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "deepskyblue",
                    "zm_nav_general_cross_two_two": "deepskyblue",
                    "zm_nav_general_cross_three_one": "deepskyblue",
                    "zm_nav_general_cross_three_two": "deepskyblue",
                    "zm_nav_general_cross_three_three": "deepskyblue",
                    "zm_nav_general_cross_three_four": "deepskyblue",
                    "zm_nav_general_vertical_one_one": "deepskyblue",
                    "zm_nav_general_vertical_two_one": "deepskyblue",
                    "zm_nav_general_vertical_three_one": "deepskyblue",
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderBottomColor: {
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "deepskyblue",
                    "zm_nav_general_cross_two_two": "deepskyblue",
                    "zm_nav_general_cross_three_one": "deepskyblue",
                    "zm_nav_general_cross_three_two": "deepskyblue",
                    "zm_nav_general_cross_three_three": "deepskyblue",
                    "zm_nav_general_cross_three_four": "deepskyblue",
                    "zm_nav_general_vertical_one_one": "deepskyblue",
                    "zm_nav_general_vertical_two_one": "deepskyblue",
                    "zm_nav_general_vertical_three_one": "deepskyblue",
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderStyle: {
                    "zm_nav_general_cross_one_one": "solid",
                    "zm_nav_general_cross_one_two": "solid",
                    "zm_nav_general_cross_one_three": "solid",
                    "zm_nav_general_cross_one_four": "solid",
                    "zm_nav_general_cross_two_one": "solid",
                    "zm_nav_general_cross_two_two": "solid",
                    "zm_nav_general_cross_three_one": "solid",
                    "zm_nav_general_cross_three_two": "solid",
                    "zm_nav_general_cross_three_three": "solid",
                    "zm_nav_general_cross_three_four": "solid",
                    "zm_nav_general_cross_three_five": "solid",
                    "zm_nav_general_vertical_one_one": "solid",
                    "zm_nav_general_vertical_two_one": "solid",
                    "zm_nav_general_vertical_three_one": "solid",
                },
            },
            hHover: {},
            initHover: {},
        },
        li: {
            length: "5",
            clickhover:0,
            initclickhover:{
                "zm_nav_general_cross_one_one": 0,
                "zm_nav_general_cross_one_two": 0,
                "zm_nav_general_cross_one_three": 0,
                "zm_nav_general_cross_one_four": 0,
                "zm_nav_general_cross_one_five": 0,
                "zm_nav_general_cross_two_one": 0,
                "zm_nav_general_cross_two_two": 0,
                "zm_nav_general_cross_three_one": 0,
                "zm_nav_general_cross_three_two": 0,
                "zm_nav_general_cross_three_three": 0,
                "zm_nav_general_cross_three_four": 0,
                "zm_nav_general_vertical_one_one": 0,
                "zm_nav_general_vertical_two_one": 0,
                "zm_nav_general_vertical_three_one": 0,
            },
            sStyle: {
                backgroundColor: "",//backgroundColor
                borderColor: "",//border_all_bg
                // borderWidth: "",//border_all_width
                borderStyle: "",//border_all_style
                borderTopColor: "",//border_top_color
                borderTopWidth: "",//border_top_width
                borderBottomColor: "",//border_bottom_color
                borderBottomWidth: "",//border_bottom_width
                borderLeftColor: "",//border_bottom_width
                borderLeftWidth: "",//border_bottom_width
                borderRightColor: "",//border_bottom_width
                borderRightWidth: "",//border_bottom_width
                color: '', //color_bg
                width: "",
                height: "",
                lineHeight: "",
                borderTopLeftRadius: "",
                borderTopRightRadius: "",
                borderBottomRightRadius: "",
                borderBottomLeftRadius: "",
                padding:"",
            },
            initStyle: {
                backgroundColor: {//backgroundColor_bg
                    "zm_nav_general_cross_one_one": "#2b6ca3",
                    "zm_nav_general_cross_one_two": "#1fbab8",
                    "zm_nav_general_cross_one_three": "#edf1f5",
                    "zm_nav_general_cross_one_four": "#9e0433",
                    "zm_nav_general_cross_one_five": "#ffffff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#f5f5f5",
                    "zm_nav_general_cross_three_two": "#ea3e7e",
                    "zm_nav_general_cross_three_three": "#187035",
                    "zm_nav_general_cross_three_four": "#d41c62",
                    "zm_nav_general_cross_three_five": "#002f5d",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "#009591",
                    "zm_nav_general_vertical_three_one": "#fff",
                },
                borderTopColor: {//border_top_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderBottomColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderLeftColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderLeftWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderRightColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderRightWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderColor: {//border_all_bg_bg
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                },
                // borderWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                // },//
                borderStyle: "solid",//
                color: { //color_bg_bg
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#000",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#1fbab8",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "#dd959b",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                width: {
                    "zm_nav_general_cross_one_one": "160px",
                    "zm_nav_general_cross_one_two": "160px",
                    "zm_nav_general_cross_one_three": "160px",
                    "zm_nav_general_cross_one_four": "160px",
                    "zm_nav_general_cross_one_five": "160px",
                    "zm_nav_general_cross_two_one": "160px",
                    "zm_nav_general_cross_two_two": "160px",
                    "zm_nav_general_cross_three_one": "160px",
                    "zm_nav_general_cross_three_two": "160px",
                    "zm_nav_general_cross_three_three": "160px",
                    "zm_nav_general_cross_three_four": "160px",
                    "zm_nav_general_cross_three_five": "160px",
                    "zm_nav_general_vertical_one_one": "210px",
                    "zm_nav_general_vertical_two_one": "210px",
                    "zm_nav_general_vertical_three_one": "210px",
                },
                height: {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_three": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_cross_three_five": "50px",
                    "zm_nav_general_vertical_one_one": "50px",
                    "zm_nav_general_vertical_two_one": "50px",//
                    "zm_nav_general_vertical_three_one": "50px",
                },
                lineHeight:  {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_cross_three_five": "50px",
                    "zm_nav_general_vertical_one_one": "50px",
                    "zm_nav_general_vertical_two_one": "50px",
                    "zm_nav_general_vertical_three_one": "50px",
                },
                borderTopLeftRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "10px",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderTopRightRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "10px",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "10px",
                },
                borderBottomLeftRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderBottomRightRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                padding:{
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "", //0 20px 0 20px
                    "zm_nav_general_vertical_two_one": "",//0 20px 0 20px
                    "zm_nav_general_vertical_three_one": "",//0 20px 0 20px
                },
            },
            hHover: {
                backgroundColor: "",//
                borderColor: "",//
                borderTopColor: "",//
                borderTopWidth: "",//
                borderBottomColor: "",//
                borderBottomWidth: "",//
                borderLeftColor: "",//
                borderLeftWidth: "",//
                borderRightColor: "",//
                borderRightWidth: "",//
                // borderWidth: "",//
                borderStyle: "",//
                color: '', //
                // width: "",
                // height: "",
                lineHeight:"",
            },
            initHover: {
                backgroundColor: {//hover_backgroundColor_bg
                    "zm_nav_general_cross_one_one": "#045184",
                    "zm_nav_general_cross_one_two": "#009c9a",
                    "zm_nav_general_cross_one_three": "#a57d6d",
                    "zm_nav_general_cross_one_four": "#7f042d",
                    "zm_nav_general_cross_one_five": "#1fbab8",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#ffffff",
                    "zm_nav_general_cross_three_one": "#c0214b",
                    "zm_nav_general_cross_three_two": "#e27293",
                    "zm_nav_general_cross_three_three": "#114c22",
                    "zm_nav_general_cross_three_four": "#be004f",
                    "zm_nav_general_cross_three_five": "#001a33",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#006c6d",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                borderTopColor: {//border_top_stall_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "2px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },//border_top_width_hover
                borderBottomColor: {//border_bottom_stall_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",

                },//border_bottom_width
                borderLeftColor: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderLeftWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderRightColor: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderRightWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderColor: {//border_all_stall_bg_bg
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                },
                // borderLeftWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderLeftColor: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderRightWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },//border_bottom_width
                // borderRightColor: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderWidth: "1px",//border_all_width
                borderStyle: "solid",//border_all_style
                color: {//color_Stall_bg_bg
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#000",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#fff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#000",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",



                    
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#fff",
                },
                lineHeight:"50px",
            },
            nav_li_Independent_position: "0",
            // borderWidth_all: "1px",
            eventClass: {
                mouseenter: {
                    backgroundColor: ".nav_o_l_b_hoverInitialization",
                    color: ".nav_o_l_c_hoverInitialization",
                    borderTopColor:".nav_o_l_btc_hoverInitialization",
                    borderTopWidth:".nav_o_l_btw_hoverInitialization",
                    borderBottomColor:".nav_o_l_bbc_hoverInitialization",
                    borderBottomWidth:".nav_o_l_bbw_hoverInitialization",
                    borderColor:".nav_o_l_bc_hoverInitialization",
                    borderWidth:".nav_o_l_bw_hoverInitialization",
                    display:"nav_display_hoverInitialization",
                },
                mouseleave: {
                    backgroundColor: ".nav_o_l_b_hoverInitialization",
                    color: ".nav_o_l_c_hoverInitialization",
                    borderTopColor:".nav_o_l_btc_hoverInitialization",
                    borderTopWidth:".nav_o_l_btw_hoverInitialization",
                    borderBottomColor:".nav_o_l_bbc_hoverInitialization",
                    borderBottomWidth:".nav_o_l_bbw_hoverInitialization",
                    borderColor:".nav_o_l_bc_hoverInitialization",
                    borderWidth:".nav_o_l_bw_hoverInitialization",
                    display:"nav_display_hoverInitialization",
                },
                click:{
                    click:".nav_o_l_btw_hoverInitializationClick"
                }
            },
        },
        ul: { //ul是span和li的父级
            backgroundColor: "",
            border_color: "#fff",
            border_width: "0px",
            border_style: "solid",
            top: "1px",
            left: "-1px",
        },
        Count_li_width: function (iSelected, w) {
            var a, b, c, f;
            if (w) {
            } else {
                // w = iSelected.closest(".zm-row-full").css("width");
                w = iSelected.closest(".zm-all").css("width");
            }
            a = iSelected.children("ul").children("li");
            c = iSelected.children("ul").children("span");
            w=parseInt(w)-2;//2像素外边托拉拽线的边框问题
            if (c.length > 0) {
                f = parseInt(c.css("width"));
                b = (w - f * c.length) / a.length
            } else {
                b = w/ a.length;
            }

            // $(a).css({"marginRight": "0px", "border-right-width": "", "box-sizing": "border-box"}); //全屏默认清楚选择样式
            $(a).each(function (index, element) {

                $(this).css("width", b + "px");
            });
            console.log(a.length)
            console.log(c.length)
            console.log(b);
            return b;
        },
        wd_callback: function (ele, ele_width) {
            var a, c, f, w, b;
            a = ele.children("ul").children("li");
            c = ele.children("ul").children("span");
            // w = iSelected.closest(".zm-row-full").css("width");
            // c = ele_width / i.length - 1;
            if (c.length > 0) {
                f = parseInt(c.css("width"));
                b = (parseInt(ele_width) - f * c.length) / a.length
            } else {
                b = parseInt(ele_width) / a.length;
            }
            $(ele.children("ul").children("li")).each(function () {
                $(this).css({"width": b + "px", "box-sizing": "border-box"})
                $(this).css("marginRight", "");
                $(this).css("border-right-width", "")
            });
            console.log("nav_OneType_li_width_callback" + b);
            return b;
        },
        Count_add_span_width: function (iSelected, w) {
            var a, b, c;
            c = parseInt(iSelected.children("ul").children("span").css("width"));
            console.log(iSelected.css("width"));

           console.log(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].span.sStyle.width)
            // zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].span.sStyle.width
            if (parseInt(zmEditor.globalMethod.nav.OneType.span.width) < c) {
                zmEditor.globalMethod.nav.OneType.span.width = c + "px";
            }
            return c;
        },
        initialize_nva_li_style_callbacka: function (iSelected, li, string1, string2, stringtype, s_h, init_s_h) {
            var hoverBg = iSelected[0].classList[4];
            switch (hoverBg) {
                case "zm_nav_general_" + stringtype + "_one":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_one"];
                    break;
                case "zm_nav_general_" + stringtype + "_two":
                    // console.log(string1);
                    // console.log(string2);
                    // console.log(stringtype);
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_two"];
                    break;
                case "zm_nav_general_" + stringtype + "_three":

                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_three"];

                    break;
                case "zm_nav_general_" + stringtype + "_four":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_four"];
                    break;
                case "zm_nav_general_" + stringtype + "_five":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_five"];
                    break;
                default:
                    break;
            }
            return li[s_h][string1];
        },
        initialize_nva_li_style: function (isSelect, num, string) {
            $(isSelect.children("div:eq(" + num + ")")).children("div").children(".zm-colorPicker").children(".zm-colorPicker-switch").css("background-color", string);
        },
    },
    TwoType: {
        ul: {
            sStyle:{
            wd: "none",
            height: "200px",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#2b6ca3",
                "zm_nav_general_cross_one_two": "#1fbab8",
                "zm_nav_general_cross_one_three": "#edf1f5",
                "zm_nav_general_cross_one_four": "#9e0433",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#f5f5f5",
                "zm_nav_general_cross_three_two": "#ea3e7e",
                "zm_nav_general_cross_three_three": "#187035",
                "zm_nav_general_cross_three_four": "#d41c62",
                "zm_nav_general_vertical_one_one": "#fff",
                "zm_nav_general_vertical_two_one": "#009591",
                "zm_nav_general_vertical_three_one": "#fff",
            },
            },
            top: function () {
                return zmEditor.globalMethod.nav.OneType.li.sStyle.height;
            },
            left:function(){

            },
        },
        li: {
            wd: "none",
            bg: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
        },

    },
    ThreeType: {
        ul: {
            width: "none",
            height: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
            top: function () {

            },
            left: function (nav_name) {
                return parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) + 0.5 + "px";
            },
        },
        li: {
            wd: "none",
            bg: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
        },
    },
    nav_li_Independent_color_callback: function (iSelected, color) {
        iSelected.children().children("li").each(function (index, ele) {
            var _this = this;
            $(_this).hover(function () {
                $(_this).animate({"backgroundColor": color}, 500);
            }, function () {
                if (index == zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position) {
                }
                $(_this).css({"color": color});
                $(_this).animate({"backgroundColor": "#fff"}, 800);
            });
        });
    },
    styleCallback_initialize_pageSet_radius:function(select, style, i, style1,page){
            var a = style.substr(-6, 6);
        if (a == "Radius") { //圆角
            if (style == "borderTopLeftRadius" || style == "borderBottomLeftRadius") {//
                if (i == 0) {
                    select.css(style, style1);
                }
            } else if (style == "borderTopRightRadius" || style == "borderBottomRightRadius") {
                if (i == page.closest("ul").children("li").length - 1) {
                    console.log("我来了")
                    select.css(style, style1);
                }
            } else {
                select.css(style, style1);
            }
        }
        return a;
    },
    initialize_html_callback: function (_this, iSelected, callback) {
        //添加到导航栏设置点击事件
        console.log(iSelected);
        var ul = iSelected.children("ul");
        // var ulNav = $(_this).closest(".zm-dialog").find(".zm-page-setting-ul");
        var ulNav =$(zmEditor.globalMethod.nav.data.savePageSet());//保存页面设置的字符串并获取渲染字符串;
        console.log(ulNav);
        var t, y, u, i, o, p, z, x, c, v, l, k,nav_name,typeStr;
        var a,e,b,d,c_split,arrPreservation={};
        a = iSelected[0].classList[4];
        b = zmEditor.globalMethod.nav.global_verOrcross_type(a);
        d = a;//把-换成_;
        console.log(a);
        console.log(d);
        console.log("是否相等"+"--->"+(a==d));
        v = ulNav.children("li");
        x = (Number.parseInt(ul.css("width")) / v.length);
        nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);
        typeStr=zmEditor.globalMethod.nav.global_verOrcross_type(nav_name);
        if (zmEditor.globalMethod.nav.global_verOrcross(iSelected)) {
            function nav_One_li(ObjectStyle, iSelected, index) {
                return $("<li class='"+nav_name+"zm-page-setting-liOne' style='position: relative;'><p>" + ObjectStyle.text + "</p></li>");
            }
            ul.html("");
            $(v).each(function (index, ele){
                //一级栏目循环//待预留添加栏目的各种属性类名等等。
                u = nav_One_li({
                    text: $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text()
                },iSelected, index);
                if(u.length>0)arrPreservation["u"]=u;
                if($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")) {
                    k = $("<span ></span>");
                    callback(u, "." + nav_name + "zm-page-setting-ulTwo" + index + ""); //添加二级ul类名hover点击显示隐藏事件
                    ul.append(u);//一级ul添加一级li;
                    if (index != v.length - 1) { // 如果后面为最后一个li则不添加span
                        ul.append(k);//一级ul添加一级span;
                    }
                    t = $(this).children(".zm-dialog-content-pageSet-childulTwo");
                    if (t.length > 0) {
                        arrPreservation["t"] = t;
                    }
                    if (t.length > 0) {
                        i = $("<ul class='" + nav_name + "zm-page-setting-ulTwo" + index + " " + nav_name + "zm-page-setting-ulTwo' style=''></ul>");
                        if (i.length > 0) arrPreservation["i"] = i;
                        u.append(i);//二级ul和一级li放在里面
                        // ul.append(i); //二级ul和一级li放在同一父元素.
                        if (t.children("li").length > 0) {
                            $(t.children("li")).each(function (index, ele) {//二级栏目循环//position: relative;
                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                    o = $("<li class='" + nav_name + "zm-page-setting-liTwo' style=''> <p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");
                                    if (o.length > 0) arrPreservation["o"] = o;
                                    callback(o)// //添加三级ul类名hover点击显示隐藏事件
                                    i.append(o);//二级ul添加二级li
                                    y = $(this).children(".zm-dialog-content-pageSet-childulThree");
                                    if (y.length > 0) {
                                        l = zmEditor.globalMethod.nav.typeClass_two_ul_height(arrPreservation.i, y.children("li").length, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                        console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                        var ulThreeHeight=y.children("li").length>4?" ":parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.lineHeight)*4+"px";
                                        console.log(ulThreeHeight);
                                        p = $("<ul class='" + nav_name + "zm-page-setting-ulThree' style='height:"+ulThreeHeight+"'></ul>");//二级li级添加三级ul;//  三级ul的高度设置  //"+"height:"+l+"
                                        if (y.length > 0) arrPreservation["y"] = y;
                                        console.log(arrPreservation["y"]);
                                        if (p.length > 0) arrPreservation["p"] = p;
                                        o.append(p);
                                        if (y.children("li").length > 0) {//三级栏目循环
                                            $(y.children("li")).each(function (index, ele) {  //";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)"+
                                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                                    z = $("<li class='" + nav_name + "zm-page-setting-liThree' style=''> <p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");
                                                    console.log(o.children("p"));
                                                    if(!(o.children("p").children("b").length>0)){
                                                        o.children("p").append("<b style='float: right;margin-right: 10px;'>&#155<b/>") //如果有是三级li，就添加大于号箭头
                                                    }
                                                    if (z.length > 0) arrPreservation["z"] = z;
                                                    p.append(z);
                                                }
                                            })
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            });
            u=arrPreservation.u;
            t=arrPreservation.t;
            i=arrPreservation.i;
            o=arrPreservation.o;
            p=arrPreservation.p;
            z=arrPreservation.z;
            y=arrPreservation.y;
            // console.log(t);// console.log(i);// console.log(u);// console.log(y);// console.log(iSelected);// console.log(nav_name);// console.log(zmEditor.globalMethod.nav.data.arrLike);// console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]);
            $(".style_nav_"+nav_name+"").html("");//样式表清空
            // 一级li样式和hover事件
            zmEditor.globalMethod.nav.initNavList.styleCallback(iSelected,nav_name,a); //一级li和span样式; ,a   ,b,d
            // iSelected.css("width","");//清空iSelected宽度
            zmEditor.globalMethod.nav.initNavList.hover_styleCallback(iSelected,nav_name,a);// 对应一级列表 li hover初始化   b,
            // 一级li样式和hover事件
            //2 级ul 和li 的样式以及hover
            if(i&&t&&u){
                // l = zmEditor.globalMethod.nav.typeClass_two_ul_height(i, t.children("li").length,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);//二级ul的高度 传入二级ul,以及二级ul下所对应的li设置ul的高度;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                    ";background-color:#fff;padding-left:10px;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;");// left:;top:; position: absolute;
                // c=zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i);  top:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+0.5+"px")+";
                // zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlTopClass(iSelected,nav_name));
                // zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlLeftClass(iSelected,nav_name));
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";width:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width)-10+"px")+";padding:0 10px;color:"
                    +zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";position: relative;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";", //box-sizing:content-box;   margin:10px 0;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                );
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo:last-of-type","border-bottom:0px solid #fff"); //渲染最后一个li的边框清零
            }
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color);
            if(y){
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +   padding:10px 0;     zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name)
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" +(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) -10+ 0.5 + "px") + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                    "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";padding:0 10px;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+  margin:10px 0;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
            }
        } else {
            function nav_One_li(ObjectStyle, iSelected, index) {
                    // zmEditor.globalMethod.nav.global_verOrcross(iSelected)
                    return $("<li class='"+nav_name+"zm-page-setting-liOne' style='position: relative;'><p>" + ObjectStyle.text + "</p></li>");
            }
            // console.log(zmEditor.globalMethod.nav.OneType.Count_add_span_width(iSelected));
            ul.html("");
            console.log("我清空了");
            // debugger;
            $(v).each(function (index, ele){
                //一级栏目循环//待预留添加栏目的各种属性类名等等。
                u = nav_One_li({
                    text: $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text()
                },iSelected, index);
                if(u.length>0)arrPreservation["u"]=u;
                if($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")) {
                    k = $("<span ></span>");
                    callback(u, "." + nav_name + "zm-page-setting-ulTwo" + index + ""); //添加二级ul类名hover点击显示隐藏事件
                    // callback(u); //添加二级ul类名hover点击显示隐藏事件
                    ul.append(u);//一级ul添加一级li;
                    console.log("我调用了");
                    if (index != v.length - 1) {
                        ul.append(k);//一级ul添加一级span;
                    }
                    t = $(this).children(".zm-dialog-content-pageSet-childulTwo");
                    if (t.length > 0) {
                        arrPreservation["t"] = t;
                    }
                    console.log($(this));
                    console.log(t);
                    console.log(t.length);
                    if (t.length > 0) {
                        i = $("<ul class='" + nav_name + "zm-page-setting-ulTwo" + index + " " + nav_name + "zm-page-setting-ulTwo' style=''></ul>");//一li级添加二级ul;/;width:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + ";height:"+zmEditor.globalMethod.nav.TwoType.ul["sStyle"].height+";background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor +";
                        // if(index==0){                                                                                                         //left:"+zmEditor.globalMethod.nav.setTwoUlLeft(index,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width, zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.width,iSelected)+";
                        // if(zmEditor.globalMethod.nav.option==1){
                        //     l = zmEditor.globalMethod.nav.typeClass_two_ul_height(i, t.children("li").length,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);//二级ul的高度 传入二级ul,以及二级ul下所对应的li设置ul的高度;
                        // markUlStyle($(".style_nav_"+nav_name+""),".zm-page-setting-ulTwo","width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +";height:"+l+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor+";padding:20px 0;box-sizing:content-box");
                        // console.log(zmEditor.globalMethod.nav.option);zmEditor.globalMethod.nav.option++;
                        // }
                        // else{
                        //     console.log("我的宽度编程180px了")
                        //     markUlStyle($(".style_nav_"+nav_name+""),".zm-page-setting-ulTwo","width:180px;height:"+zmEditor.globalMethod.nav.TwoType.ul["sStyle"].height+";backgroundColor:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor+";")
                        // }//初始化ul样式
                        // }//初始化二级ul样式
                        if (i.length > 0) arrPreservation["i"] = i;
                        // u.append(i);
                        ul.append(i); //二级ul和一级li放在同一父元素.
                        if (t.children("li").length > 0) {
                            $(t.children("li")).each(function (index, ele) {//二级栏目循环//position: relative;
                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                    o = $("<li class='" + nav_name + "zm-page-setting-liTwo' style=''><p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");//width: " + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + "; background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor + ";margin-top: " + zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i) + "
                                //'width: " + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + ";background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor + "" +
                                // callback(o, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor)//添加二级li类名hover事件
                                // if(index==0)markLiStyle("zm-page-setting-liTwo",u,t,l,i);
                                // if(index==0){
                                //     // 二级li样式和hover事件
                                //     c=zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i);
                                //     markUlStyle($(".style_nav_"+nav_name+""),".zm-page-setting-liTwo","width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor+";margin-top:"+c+";",
                                //         "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";"
                                //     ) // 二级li 颜色和hover色
                                // };
                                if (o.length > 0) arrPreservation["o"] = o;
                                callback(o)// //添加三级ul类名hover点击显示隐藏事件
                                i.append(o);//二级ul添加二级li
                                y = $(this).children(".zm-dialog-content-pageSet-childulThree");
                                if (y.length > 0) {                                                       //arrPreservation.t.children("li").length
                                    l = zmEditor.globalMethod.nav.typeClass_two_ul_height(arrPreservation.i, y.children("li").length, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                    p = $("<ul class='" + nav_name + "zm-page-setting-ulThree' style=''></ul>");//二级li级添加三级ul;//  三级ul的高度设置  //"+"height:"+l+"
                                    // zmEditor.globalMethod.nav.typeClass_ul_three_Top(l,t.children("li").length,index);
                                    // if(index==0){
                                    // markUlStyle($(".style_nav_"+nav_name+""),".zm-page-setting-ulThree","width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +";height:"+l+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor+";padding:20px 0;box-sizing:content-box");
                                    // };
                                    if (y.length > 0) arrPreservation["y"] = y;
                                    console.log(arrPreservation["y"]);
                                    if (p.length > 0) arrPreservation["p"] = p;
                                    o.append(p);
                                    if (y.children("li").length > 0) {//三级栏目循环

                                        $(y.children("li")).each(function (index, ele) {  //";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)"+
                                            if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                                z = $("<li class='" + nav_name + "zm-page-setting-liThree' style=''><p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");//三级ul添加三级li  width: " + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + ";background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor + ";
                                            //margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l,i)+"
                                            // if(index==0){
                                            // markUlStyle($(".style_nav_"+nav_name+""),".zm-page-setting-liThree","width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor+";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i)+";",//
                                            //     "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";")
                                            // };
                                            // callback(z, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor)//
                                            // callback(z,"mouseenter."+zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"],"mouseleave."+zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"])//添加三级li类名hover事件

                                            if (z.length > 0) arrPreservation["z"] = z;
                                            p.append(z);
                                        }
                                        })
                                    }
                                }
                            }
                            })
                        }
                    }
                }
            });
            u=arrPreservation.u;
            t=arrPreservation.t;
            i=arrPreservation.i;
            o=arrPreservation.o;
            p=arrPreservation.p;
            z=arrPreservation.z;
            y=arrPreservation.y;
            console.log(t);
            console.log(i);
            console.log(u);
            console.log(y);
            function markLiStyleYe(typeClass,a,b,d,c){ //zm-page-setting-liTwo
                /** yerui
                 * typeClass 即是要改变的style表
                 * a 即传入的类名
                 * b 即传入普通样式
                 * d 即传入transition样式
                 * c 即hover样式
                 */
                var q,w,e,r,t,y,u,i;
                typeClass.text(function(index,text){
                    console.log(text);
                    text=text.replace(/\s/g,"");
                    console.log(text);
                    if(text){
                        if(text.indexOf(a)==-1){//&&text.indexOf(a+":hover")>-1    //2 a是一个新的类名.
                            return text+a+"{"+b+d+"}"+a+":hover{"+c+"}";
                        }else{
                           q=text.indexOf(a)// 判断a在
                        if(q>-1){  //3
                        }
                        text.replace(/a/,function(){})
                        }
                    }else{
                        return ""+a+"{"+b+d+"}"+a+":hover{"+c+"}";   //1
                    }
                });
            }
            console.log(iSelected);
            console.log(nav_name);
            console.log(zmEditor.globalMethod.nav.data.arrLike);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]);
           $(".style_nav_"+nav_name+"").html("");//样式表清空
            // 一级li样式和hover事件
            zmEditor.globalMethod.nav.initNavList.styleCallback(iSelected,nav_name,a); //一级li和span样式; ,a   ,b,d
            // iSelected.css("width","");//清空iSelected宽度
            zmEditor.globalMethod.nav.initNavList.hover_styleCallback(iSelected,nav_name,a);// 对应一级列表 li hover初始化   b,
            // 一级li样式和hover事件
            //2 级ul 和li 的样式以及hover
            if(i&&t&&u){
                // l = zmEditor.globalMethod.nav.typeClass_two_ul_height(i, t.children("li").length,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);//二级ul的高度 传入二级ul,以及二级ul下所对应的li设置ul的高度;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                 ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;position: absolute;");// left:;top:;
                // c=zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i);  top:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+0.5+"px")+";

                zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlTopClass(iSelected,nav_name));
                zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlLeftClass(iSelected,nav_name));

                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";height:50px;", //box-sizing:content-box;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                )
            }
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color);
            if(y){
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" + zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name) + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                    "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;height:50px;",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
            }
            // 3 级ul 和li 的样式以及hover
        }
    },
    styleCallback_initialize_regexp:function(typeClass,a,b,c,d){
        /** yerui   mian层str匹配
         * typeClass 即是要改变的style表
         * a 即传入的类名
         * b 即传入普通样式
         * d 即传入transition样式
         * c 即hover样式
         */
        var e,f,g,h,r,j,k;
        console.log(typeClass);
        typeClass.html(function(index,text){
         // if(!text){
             if(c){ return a+"{"+b+d+"}"+a+":hover{"+c+"}\n"} //c与d同在
             return a+"{"+b+"}\n";
         // }
        });
    },
    styleCallback_initialize_add_regexp:function(typeClass,a,b,c,d){
        /** yerui   其他层str匹配
         * typeClass 即是要改变的style表
         * a 即传入的类名
         * b 即传入普通样式
         * d 即传入transition样式
         * c 即hover样式
         */
        typeClass.html(function(index,text){
            if(c){ return text+a+"{"+b+d+"}"+a+":hover{"+c+"}\n"}//c与d同在
            return text+a+"{"+b+"}\n";
        });
    },
    styleCallback_add_moreUlClass_regexp:function(typeClass,a){
        typeClass.html(function(index,text){
            return text+"\n"+a+"\n";
        });
    },
    markUlStyle:function (typeClass,a,b,d,c){ //zm-page-setting-liTwo
    /** yerui
     * typeClass 即是要改变的style表
     * a 即传入的类名
     * b 即传入普通样式
     * d 即传入transition样式
     * c 即hover样式
     */
    var q,w,e,r,t,y,u,i,match_str,match_text;
    typeClass.html(function(index,text){
        u={};
        q=text.indexOf(a);//
        if(q>-1){
            if(text){
                e=new RegExp(""+a+"{(.*)}","i");
                match_text=text.replace(e,function(match,p1,offset,string){
                    match_str=match;
                    console.log(b);
                    if(b){
                        console.log(b);
                        b=b.split(";");
                        console.log(b);
                        b=b.filter(function(element){
                            return element!=""
                        })
                        console.log(b);
                        for( var ttt=0;ttt<b.length;ttt++){
                            y=/(.*):(.*)/.exec(b[ttt])
                            u[y[1]]=y[2];
                        }
                        for( var k in u){
                            var aaa=new RegExp("("+k+"):(.*?)(?=;);","i"); //  width:(.*?)(?=;)
                            match_str=match_str.replace(aaa,function(match,p1,p2,offset,string){
                                // console.log("match-->"+match);
                                // console.log("p1-->"+p1);
                                // console.log("p2-->"+p2);
                                // // console.log("offset-->"+offset);
                                // // console.log("string-->"+string);
                                // console.log(k+"--->"+u[k]);
                                return   ""+p1+":"+u[k]+";"
                            })
                        }
                        return match_str;
                    }
                });
                return match_text;
            }
        }else{//如果没有这个类名
            if(d){
                if(c){return text+a+"{"+b+d+"}\n"+a+":hover{"+c+"}\n";}
                return text+"\n"+a+"{"+b+d+"}\n";
            }
            if(text){
                return text+a+"{"+b+"}\n"; //1
            }else{
                return a+"{"+b+"}\n"; //1
            }
        }
    });
  },
    markstrStyle:function (typeClass,a,b,c,d){ //zm-page-setting-liTwo
    /** yerui
     * typeClass 即是要改变的style表
     * a 即传入的类名
     * b 即传入普通样式
     * d 即传入transition样式
     * c 即hover样式
     */
    var q,w,e,r,t,y,u,i,match_str,match_text;
    typeClass.html(function(index,text){
        u={};
        q=text.indexOf(a);//如果样式表中有ul类名
        if(q>-1){
            if(text){
                e=new RegExp(""+a+"{(.*)}","i");
                match_text=text.replace(e,function(match,p1,offset,string){
                    match_str=match;
                    if(b){
                        b=b.split(";");
                        b=b.filter(function(element){
                            return element!=""
                        })
                        for( var ttt=0;ttt<b.length;ttt++){
                            y=/(.*):(.*)/.exec(b[ttt])
                            u[y[1]]=y[2];
                        }
                        for( var k in u){
                            var aaa=new RegExp("("+k+"):(.*?)(?=;);","i"); //  width:(.*?)(?=;)
                            match_str=match_str.replace(aaa,function(match,p1,p2,offset,string){
                                return   ""+p1+":"+u[k]+";"
                            })
                            // console.log(match_str);
                        }
                        return match_str;
                    }
                });
                return match_text;
            }
        }else{//如果没有这个类名
            if(d){
                if(c){return text+a+"{"+b+d+"}\n"+a+":hover{"+c+"}\n";}
                return text+"\n"+a+"{"+b+d+"}\n";
            }
            if(text){
                return text+a+"{"+b+"}\n"; //1
            }else{
                return a+"{"+b+"}\n"; //1
            }

        }
    });
    },
    typeClass_two_ul_height: function (ul, li_length, height) {
        var a;
        a = li_length*parseInt(height)+20;
        return a+"px";
    },
    typeClass_ul_li_two_marginTop: function (li_height, li_length, ul_height, ul) {
        console.log(li_height)
        console.log(li_length)
        console.log(ul_height)
        console.log(ul)
        for (var b = 0; b < arguments.length; b++) {
            if (typeof arguments[b] == "string") {
                arguments[b] = parseInt(arguments[b])
            } else if (b == arguments.length - 1) { //code
                ul.css("border").replace(/(^\d+)/, function (match) {
                    if (match <= 0) {
                        // ul.css({"border": "1px solid #fff"});
                    }
                })
            }
        }
        var a;
        switch (li_length) {
            case 1:
                // a = (ul_height - li_height) / 2 + "px";
                a = "10px";
                break;
            case 2:
                // a = (ul_height - li_height * 2) / 2 / 2 + "px";
                a = "10px";
                break;
            case 3:
                // a = (ul_height - li_height * 3) / 3 / 2 + "px";
                a = "10px";
                break;
            default:
                a = "10px";
                break;
        }
        return a;
    },
    typeClass_ul_three_Top: function (ulHeight,liLength,liIndex,liMarginTop) {var a;if(liLength>=4){}else{};return;},
    refreshNav:function (iSelecte,fn) {
        var a;
        a=$(".zm-page-setting-add");
        if(a.length>0){
         a=a;
         console.log(a)
        }else{
            $(".zm-page-set ")[0].onclick();
            a=$(".zm-page-setting-add");
            a.closest(".zm-dialog-box").hide();
        }
        zmEditor.globalMethod.nav.initialize_html_callback(a,iSelecte,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.hover_or_click_show_string));
        iSelecte.closest(".zm-component-box1").find(".zm-component-edit").children("button:eq(1)").triggerHandler("click")
        if(fn){
            fn();
        }
    },
    setTwoUlLeft:function(index,li_width,span_width,islect){
        if(/vertical/i.test(islect[0].classList[4])){return parseInt(li_width)+0.5+"px";}
        if(index==0){
        return 0+"px";
        }else{
            // console.log(index*(parseInt(li_width)+parseInt(span_width)))
        return index*(parseInt(li_width)+parseInt(span_width))+"px";
        }
    },
    setTwoUlLeftClass:function (iSelected,nav_name) {
        var iSelectedLength,strings="";
        iSelectedLength=iSelected.children().children("li").length;
        for(var i=0;i<iSelectedLength;i++){
            strings+="."+nav_name+"zm-page-setting-ulTwo"+i+"{left:"+zmEditor.globalMethod.nav.setTwoUlLeft(i,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.width,iSelected)+";}\n"
        }
        return strings;
    },
    setTwoUlTopClass:function (iSelected,nav_name) {
        var iSelectedLength,strings="";
        iSelectedLength=iSelected.children().children("li").length;
        for(var i=0;i<iSelectedLength;i++){
            strings+="."+nav_name+"zm-page-setting-ulTwo"+i+"{top:"+zmEditor.globalMethod.nav.setTwoUlTop(i,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.height,iSelected)+";}\n"
        }
        return strings;
    },
    setTwoUlTop:function(index,li_height,span_height,islect){
        if(/cross/i.test(islect[0].classList[4])){return parseInt(li_height)+0.5+"px";}
        if(index==0){
            return 0+"px";
        }else{
            return index*(parseInt(li_height)+parseInt(span_height))+"px";
        }
    },
    change_width_twoClass_ul: function (iSelected, i) {
        var a, b, c;
        iSelected.children().children().children().each(function () {
            $(this).css({"width": i + ""});
            a = $(this).children();
            if (a.length > 0) {
                a.css("width", i + "");
                b = a.children();
                if (b.length > 0) {
                    b.css("width", i + "");
                }
                c = b.children();
                if (c.length > 0) {
                    $(c).each(function () {
                        $(this).css("width", i + "");
                    })
                }
            }
        });
    },
    change_width_twoClass_ul_top: function (iSelected, i) {
        iSelected.children().children().children().each(function () {
            $(this).css({"top": i});
            zmEditor.globalMethod.nav.TwoType.ul.top = i;
        });
    },
    change_width_ThreeClass_ul_left: function (iSelected) {
        iSelected.children().children().children().children().children().each(function () {
            $(this).css({"left": zmEditor.globalMethod.nav.ThreeType.ul.left()});
        });
    },
    mouseenterOrleaveHover: function (u,classnanme) {
        u.off();//".hover_or_click_showclick"
        u.on("mouseenter",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");
                $(classnanme).off("mouseenter mouseleave");
                $(classnanme).on("mouseenter",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave",function(){
                    $(classnanme).css("display", "none");
                });

            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
    },
    refreshStyleTable:function (nowEdit,nav_name){
        /**重绘演示表*/
        $(".style_nav_"+nav_name+"").html("");//样式表清空
        if (zmEditor.globalMethod.nav.global_verOrcross(nowEdit)) {
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                ";background-color:#fff;;padding-left:10px;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;");// left:;top:; position: absolute;
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                "width:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width)-10+"px")+";padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";position: relative;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";", //box-sizing:content-box;   margin:10px 0;
                "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
            )
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo:last-of-type","border-bottom:0px solid #fff"); //渲染最后一个li的边框清零

            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +   padding:10px 0;     zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name)
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" +(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) -10+ 0.5 + "px") + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
               console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";padding:0 10px;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+  margin:10px 0;
                "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"

        }else{
            // left=zmEditor.globalMethod.nav.setTwoUlLeft(a,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.width,nowEdit)
            // console.log(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+2+"px");

            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",//"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +  box-sizing:content-box;
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;");
            // left:;top:;  top:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+0.5+"px")+";
            zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlTopClass(nowEdit,nav_name));
            zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlLeftClass(nowEdit,nav_name));
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",//";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";height:50px;", //"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+"
                "transition:all 1s ease-out;","color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";"//"background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+
            )
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree",//"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" + zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name) + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;height:50px;",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+
                "transition:all 1s ease-out;","color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";")//"background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+
        }
    },
    // hover: function (u,eventType1,eventType2,offevent) {
    hover: function (u,classnanme) {
        // u.off(".hover_or_click_show_string_cilck");//".hover_or_click_showclick"
        // eventType1=".hover_or_click_show_string_hover";
        // u.on("mouseenter"+eventType1,function(){
        //     // console.log("hover->111111");
        //     $(this).children("ul").css("display", "block");
        // });
        // u.on("mouseleave"+eventType1,function(){
        //     $(this).children("ul").css("display", "none");
        // });
       // return eventType1.substring(-5,5);

        u.off(".hover_or_click_show_string_cilck");//".hover_or_click_showclick"
        u.on("mouseenter.hover_or_click_show_string_hover",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");
                // $(classnanme).off("mouseenter mouseleave");
                $(classnanme).off(".hover_or_click_show_string_hover");
                $(classnanme).on("mouseenter.hover_or_click_show_string_hover",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave.hover_or_click_show_string_hover",function(){
                    $(classnanme).css("display", "none");
                });
            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave.hover_or_click_show_string_hover",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
    },
    // click: function (u, eventType1, eventType2) {
    click: function (u, classnanme) {
        // debugger;
        u.off(".hover_or_click_show_string_hover");
        u.on("click.hover_or_click_show_string_cilck",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");  //此处有问题
                // $(classnanme).off("mouseenter.hover_or_click_show_string_cilck  mouseleave.hover_or_click_show_string_cilck");
                $(classnanme).off(".hover_or_click_show_string_cilck");
                // $(classnanme).off("mouseenter mouseleave");
                $(classnanme).on("mouseenter.hover_or_click_show_string_cilck",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave.hover_or_click_show_string_cilck",function(){
                    $(classnanme).css("display", "none");
                });
            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave.hover_or_click_show_string_cilck",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
        // u.off(".hover_or_click_show_string_hover");//".hover_or_click_showhover"
        // eventType1=".hover_or_click_show_string_cilck";
        // u.on("click"+eventType1,function(){
        //     $(this).children("ul").css("display", "block");
        // });
        // u.on("mouseleave"+eventType1,function(){
        //     $(this).children("ul").css("display", "none");
        // });
    },
    hover_or_click_show: function (h_or_c) {
        if (h_or_c == ".hover_or_click_show_string_hover") {
            return zmEditor.globalMethod.nav.hover;
        }
        if (h_or_c == ".hover_or_click_show_string_cilck") {
            return zmEditor.globalMethod.nav.click;
        }
    },
    hover_or_click_show_string: ".hover_or_click_show_string_hover",
    global_Threehover_or_click: function (iSelected, callback) {// 作用 菜单弹出方式渲染函数 主要用在  抛弃使用。 由initialize_html_callback代替使用
        var t, y, u, i, o, p, z, x, c, v, l;
        console.log(iSelected);
        debugger;
        var  y=iSelected.closest(".zm-component-main"),a = y[0].classList[4],f="data-"+y.attr("data-"+a);
        $(iSelected).children("li").each(function (index, ele) {//一级栏目循环
            //待预留添加栏目的各种属性类名等等。
            // callback($(this),zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"])//添加一级li类名hover事件s
            callback($(this), "." + f + "zm-page-setting-ulTwo" + index + ""); //添加二级ul类名hover点击显示隐藏事件
            console.log(this);
            t = $(this).children(".zm-page-setting-ulTwo");
            console.log(t);
            if (t.length > 0) {
                if (t.children("li").length > 0) {
                    $(t.children("li")).each(function (index, ele) {//二级栏目循环
                        console.log($(this));
                        // callback($(this),zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"])//添加二级li类名hover事件s
                        callback($(this))//添加二级li类名hover事件s //,zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"]
                    })
                }
            }
        });
    },
    color_hover: function (_this, changeportoyrpe, sting1, string2) { //主要用在color_on组件上.
        $(_this).hover(function () {
            $(_this).css(changeportoyrpe, sting1);
        }, function () {
            $(_this).css(changeportoyrpe, string2);
        })
    },
    global_prototype: function (ele, prototype, prototype_child) {
        console.log(zmEditor.globalMethod.nav.OneType["li"]["backgroundColor_bg"]["zm_nav_general_cross_one_four"]);
        return zmEditor.globalMethod.nav.OneType[ele][prototype] = prototype_child;
    },
    global_verOrcross: function (select) { //if it is vertical nav,return true.
        return /vertical/.test(select[0].classList[4]);
    },
    global_compotents_IndependentName:function(select){ //获取独立的class
        if(!select) return undefined;
        return "data-"+select.attr("data-"+select[0].classList[4]);
    },
    global_verOrcross_type: function (string) {
        if (/vertical/.test(string)) {
            // return string.substring(string.indexOf("_") - 8);
            return string.substring(15);
        }
        return string.substring(21);
        // return string.substring(string.indexOf("_") + 1);
    },
    each:function(isSelect,fn,type3){
        isSelect.children("ul").children("li").each(fn);
    },
    componentslider:function(color,styleType,isSelect){
        var a,b;b=isSelect[0].classList[4]; a="data-"+isSelect.attr("data-"+b);
        /** 3月13日 为nav下的组件设置滚动颜色样式
         */
        switch (styleType){
            //改动过后
            case "mian_border_color"://ye添加
                // arrLikestyle(a,"mian","sStyle","borderColor",color);
                // isSelect.css("borderColor",color);
                arrLikestyle(a,"li","sStyle","borderColor",color);arrLikestyle(a,"span","sStyle","borderColor","color");

                isSelect.children().children("li").css("borderColor",color);
                isSelect.children().children("span").css("borderColor",color);
                break;
            case "mian_children_childrenLi_bg"://ye添加  对应mian下的ul下的所有li的背景色 3.14
                console.log("我背景色改变了");
                arrLikestyle(a,"li","sStyle","backgroundColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(i,ele){
                    $(this).css("backgroundColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color,a);
                    zmEditor.globalMethod.nav.initNavList.endClick($(this), a, undefined, i, b);
                })
                zmEditor.globalMethod.nav.initNavList.currentPage(isSelect, a, "li", b);
                // zmEditor.globalMethod.nav.refreshNav(isSelect);
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加所有li背景色的hover   3.14
                arrLikestyle(a,"li","hHover","backgroundColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                // zmEditor.globalMethod.nav.refreshNav(isSelect);
                break;
            case "mian_children_childrenLi_color"://ye添加 对应main下的所有字体色
                arrLikestyle(a,"li","sStyle","color",color);
                    zmEditor.globalMethod.nav.each(isSelect,function(){
                        $(this).css("color",color);
                        zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                            "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(isSelect, a, "li", b);
                // zmEditor.globalMethod.nav.refreshNav(isSelect);
                break;
            case "mian_children_childrenLi__hover_color"://ye添加   对应main下的所有字体hover色
                arrLikestyle(a,"li","hHover","color",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                // zmEditor.globalMethod.nav.refreshNav(isSelect);
                break;
           //span样式设置
            case "mian_children_childrenSpan_bg"://ye添加mian元素的子元素的子元素的每个上边框色颜色
                arrLikestyle(a,"span","sStyle","backgroundColor",color);
                isSelect.children().children("span").css("backgroundColor",color);
                console.log(zmEditor.globalMethod.nav.data.arrLike);
                break;
            //li单边框样式设置
            case "mian_children_childrenLi_btc"://ye添加单个上边框背景色
                arrLikestyle(a,"li","sStyle","borderTopColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    $(this).css("borderTopColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加单个li上边框hover色 3.16
                arrLikestyle(a,"li","hHover","borderTopColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_bbc"://ye添加单个li下边框背景色    one_li_border_bottom_color 3.16
                arrLikestyle(a,"li","sStyle","borderBottomColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    $(this).css("borderBottomColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加单个li下边框hover色  3.16
                arrLikestyle(a,"li","hHover","borderBottomColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框色颜色         3.16 对应横向three组件
                arrLikestyle(a,"li","sStyle","borderColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    $(this).css({"borderColor":color,
                        "borderStyle":zmEditor.globalMethod.nav.data.arrLike[a].li.sStyle["borderStyle"],
                        "borderWidth":zmEditor.globalMethod.nav.data.arrLike[a].li.sStyle["borderWidth"]})
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                arrLikestyle(a,"li","hHover","borderColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "dropdown_bg"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                zmEditor.globalMethod.nav.data.arrLike[a]["dropdownBg"]=color;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-ulThree", "background-color:"+color+";");
                // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-liTwo", "background-color:"+color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-ulTwo","background-color:"+color+";");
                // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-liThree","background-color:"+color+";")
                // zmEditor.globalMethod.nav.refreshNav(isSelect);
                console.log("我进dropdown_bg来了");
                break;
            //改动过后
            default:
                break;
        };
        function arrLikestyle(b,str,str1,str2,str3){
            zmEditor.globalMethod.nav.data.arrLike[b][str][str1][str2]=str3;
        }
    },
    componentsliderRbga:function (str,str1) {
        var a;
        if(str.charAt(3)=="a"){
            str1=Number(str1).toFixed(2);
             a =/\w+\((\d+),\s?(\d+),\s?(\d+),\s?(\d?.?\d*)\)/gi.exec(str);
            return "rgba("+a[1]+","+a[2]+","+a[3]+","+str1+")"
        }else{
             a =/\w+\((\d+),\s?(\d+),\s?(\d+)\)/gi.exec(str);
            console.log( /\w+\((\d+),\s?(\d+),\s?(\d+)\)/gi.exec(str));
            return "rgba("+a[1]+","+a[2]+","+a[3]+","+str1+")"
        }
    },
    returnOpacity:function(color){
        var a;
        a=  /\w+\((\d+),\s?(\d+),\s?(\d+),\s?(\d?.?\d*)\)/gi.exec(color)
        console.log(a);
        // debugger;
        if(!color){
            return 100;
        }else if(!a){
            return 100;
        }else{
            return a[4]*100;
        }
    },
    menuadministration:function(ele,str){//nav菜单管理方法.
     e=$('<div style="background-color: #f1f9f8;width: 80px;height: 20px;border-radius: 5px;    margin-left: 35px;    text-align: center;margin-top: 20px;box-shadow: #ccc 1px 1px 5px 1px, #ccc -1px -1px 5px 1px;"> 菜单管理</div>');
     e.on("click",function(){
         if($(".zm-components-detail").css("display")=="block"){
             $(".zm-components-detail").hide();
         }else{
             zmEditor.component.showDetail($('li[data-zm-component-type="nav"]'));
         }
     });
     return e;
    },
    calculationLineheight:function(height,tbw,bbw){
        var li_height;
        tbw=tbw?tbw:0;
        bbw=bbw?bbw:0;
        li_height=height- tbw-bbw;
        return li_height;
    },
    main_style: function (nav_type, reserved_parameter_one, reserved_parameter_two, reserved_parameter_three) {
        var isSelect = nav_type.find(".zm-component-main");
        new zmEditor.globalMethod.nav.Nav(isSelect);
    },
    main_child_child_style: function () {
        var a, b, c, d, e, f, g, h, i, j, k, l,li_height,li_hover_height,select,cross_width;
        // if(!arguments[0]){ return false};
        select=arguments[2][0].classList[4];
        console.log(select);
        var data_a="data-"+arguments[2].attr("data-"+select); //表示当前正在编辑的nav
        try {
            if (/vertical/.test(select)){
                // debugger;
                if (arguments[0]){
                    // arguments[2].children().children().css("width", arguments[0] + "px");
                    arguments[2].children("ul").children().css("width", arguments[0] + "px"); //添加小点到mian层兼容改动
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]= arguments[0] + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["width"]= arguments[0] + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"]= arguments[0] + "px";
                    zmEditor.globalMethod.nav.refreshStyleTable(arguments[2],data_a);  //zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2)
                    // zmEditor.globalMethod.nav.refreshNav(arguments[2]);
                }
                if (arguments[1]) {
                    a = arguments[2].children().children("li");
                    b = a.length;
                    // c = arguments[2].children().children("span");
                    c = arguments[2].children("ul").children("span");
                    f = c.length;
                    d = parseInt(c.css("height"));
                    e = parseInt(a.css("height"));
                    d = isNaN(d) ? 0 : d;
                    if (d > 0) {
                        g = (arguments[1] - d * f) / b;
                    } else {
                        g = arguments[1] / b;
                    }
                    // debugger;
                    var li_height= zmEditor.globalMethod.nav.calculationLineheight(g,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]));
                    var hover_height= zmEditor.globalMethod.nav.calculationLineheight(g,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]));
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]= li_height + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]= hover_height + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]= g + "px";
                    switch (select){
                        case 1:
                            break;
                        default:
                            // arguments[2].children().children("li").css({"line-height":li_height+ "px","height":""});
                            arguments[2].children().children("li").css({"line-height":li_height+ "px","height":g});  //由于以box-sizing为盒子模型设置方式,设置此设置方式
                            break;
                    }
                    //"height":g + "px", 为了兼容纵向导航2级ul在一级li下  arguments[2].children().children("li").css({"line-height":li_height+ "px"});
                    // 行内遍历版本
                    arguments[2].children().children("li").each(function(index,ele){
                        $(this).children("ul").children("li").each(function(index,ele){
                            if($(this).children("ul").length>4) $(this).children("ul").css({"height":""});else $(this).children("ul").css({"height":g*4+"px"});
                        })
                    })
                    // 转化为改变样式表的版本

                    // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + data_a + ""), "." + data_a + "zm-page-setting-liThree", "background-color:" + color + ";");
                    // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo:last-of-type","border-bottom:0px solid #fff"); //渲染最后一个li的边框清零

                    zmEditor.globalMethod.nav.refreshStyleTable(arguments[2],data_a); //zmEditor.globalMethod.nav.global_compotents_IndependentName(arguments[2])

                    arguments[2].children().children("li").each(function(){
                        // $(this).css({"height":g + "px","line-height":li_height+ "px"});
                        zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                            "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                    })
                    zmEditor.globalMethod.nav.initNavList.currentPage(arguments[0], data_a, "li",arguments[2][0].classList[4]);
                    // console.log(li_height)
                    // arguments[2].css("lineHeight", g + "px");
                    console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]);
                    // zmEditor.globalMethod.nav.OneType.li.sStyle.height = g + "px";
                    // zmEditor.globalMethod.nav.OneType.mian.sStyle.lineHeight = g + "px";
                    // zmEditor.globalMethod.nav.refreshNav(arguments[2]);
                }
            } else {
                hasspan(arguments[0], arguments[1], arguments[2]);
                function hasspan(argument0, argument1, argument2) {
                    // debugger;
                    // argument2.css("width",""); //为兼容移动小圆点外面层边框导致换行问题
                    argument2.closest(".zm-component-box1").css("box-sizing","content-box");
                    if (argument0) {
                        h = argument2.children("ul").children("span");
                        j = h.length;
                        // k =  zmEditor.globalMethod.parseInt(h.css("width"));
                        k =  parseFloat(h.css("width"));
                        k = isNaN(k) ? parseFloat(zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"]): k;
                        //l = zmEditor.globalMethod.nav.OneType.mian.borderWidth; 由于使用box-sizing;边框包括在宽度之内
                        if (j > 0) {
                            i = (argument0 - k * j) / argument2.children().children("li").length;
                        } else {
                            i = argument0 / argument2.children().children("li").length;

                        }
                        // if(j>0) {
                        //     if (i * argument2.children().children("li").length + k * j >=argument0) cross_width = i * argument2.children().children("li").length+ k * j;
                        // }else{
                        //     cross_width = argument0;
                        // }
                        // if(i * argument2.children().children("li").length + k * j===argument0){ console.log("相等")}else{console.log("不相等")};
                        console.log(j,k,i,argument0)
                        // argument2.css("width",argument0+"px"); //赋值mian宽度使其能够移出content层;

                        argument2.children().children("li").css("width", i + "px");

                        // zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]= argument0 + "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["width"]= i + "px";
                        // zmEditor.globalMethod.nav.change_width_twoClass_ul(argument2, i);
                        // zmEditor.globalMethod.nav.change_width_ThreeClass_ul_left(argument2);
                        zmEditor.globalMethod.nav.refreshStyleTable(argument2,zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2));
                        // zmEditor.globalMethod.nav.refreshNav(argument2);
                    }
                    if (argument1) {
                        var l=parseInt(argument2.css("font-size"));
                        // console.log(l);
                        if(argument1<=l){
                            argument2.css("height",l+"px")
                            return "宽度不能再减小了";
                        };
                        //设置行高的高度
                        li_height = zmEditor.globalMethod.nav.calculationLineheight(argument1,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]));
                        li_hover_height=zmEditor.globalMethod.nav.calculationLineheight(argument1,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]));
                        //设置行高的高度
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["height"]= argument1 + "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]= argument1 + "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]= li_height+ "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]= li_hover_height+ "px";
                      // console.log(top_b_width);
                      // console.log(bottom_b_width);
                      // console.log(li_height);
                        argument2.children().children("li").each(function () {
                            $(this).css("height", argument1 + "px");
                            $(this).css("line-height", li_height + "px");
                        });
                        // zmEditor.globalMethod.nav.change_width_twoClass_ul_top(argument2, argument1 + "px");
                        // zmEditor.globalMethod.nav.refreshNav(argument2);
                        zmEditor.globalMethod.nav.refreshStyleTable(argument2,zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2));
                    }
                }
            };
        } catch (e) {
            // console.log(e);
        }
    },
};

if ('ab'.substr(-1) != 'b') { // 兼容ie不支持负问题
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function (substr) {
        return function (start, length) {
            // did we get a negative start, calculate how much it is
            // from the beginning of the string
            if (start < 0) start = this.length + start;
            // call the original function
            return substr.call(this, start, length);
        }
    }(String.prototype.substr);
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisArg */)
    {
        "use strict";
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                var val = t[i];
                if (fun.call(thisArg, val, i, t))
                    res.push(val);
            }
        }
        return res;
    };
}
function ClassList(e){
    if(e.classList){ return e.classList} else  { //如果e.classList存在，就returnw
       return new CssClassList(e); //否则就伪造一个
    }
}
function  CssClassList(e){ // CssClassList是一个模拟的DOMTokemLis的Javascript类
    this.e=e;
}
CssClassList.prototype.contains=function(c){ //如过e.classNAME包含类c就返回true.否则就返回false.
//检查c是否是合法的类
    if(c.length===0 || c.indexOf(" ")!=-1)  throw  new Error("不合法的 class name"+c+";");
    //首先是常规检查
    var classes=this.e.className;
    if(!classes) return false; //e不含有类名
    if(classes===c) return true; // e含有一个完全匹配的类名;
    //否则,把c自身看做一个单词，利用正则表达式搜所c
    return classes.search("\\b"+c+"\\b") !=-1;
};
//如果c不存在，将c添加到e.clasName中
CssClassList.prototype.add=function(c){
  if(this.contains(s)) return ;// 如果含有c，什么都不做
   var classes=this.e.className;
   if( classes && className[classes.length-1]!=" ") c= " "+c; //若果需要加入一个空格
   this.e.className +=c;  //将c添加到className中
}
//将出现在e.classNmae中所有c都删除
CssClassList.prototype.remove=function(c){
//检测是否是合法的类名
  if(c.length===0 || c.indexOf(' ')!=-1) throw new Error("不合法的 class name"+c+";");
    //将所有作为单词的c和多余的尾随空格全部删除
    var pattren= new RegExp("\\b"+c+"\\b\\s*","g");
    this.e.className =this.e.className.replace(pattren,"");
}
    //如果c不存在，将c添加到e.classNme中，并返回true；否则，将在e.className中出现所有的c都删除，并返回false
CssClassList.prototype.toggle=function(c){
    if(this.contains(c)){ //如果包含c ，删除并返回false
        this.remove(c)

        return false;
    }else{
        this.add(c) //否则添加它
        return true;
    }
}
// 返回e.className 本身
CssClassList.prototype.toString=function(){
    return this.e.className ;
}
//返回e.className中的类名
CssClassList.prototype.toArray=function(){
    return this.e.className.match(/\b\w+\b/g)|| [];
}





































