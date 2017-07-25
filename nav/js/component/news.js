/**
 * Created by laozhang on 2017/4/22.
 */
zmEditor.component.news = {
    newsData: {},
    setting: function (box) {
        var nowEdit = zmEditor.component.nowEdit();
        var newsMain = nowEdit.find('.zm-component-news-content');
        var tabs1 = $('<div></div>');
        var config1 = [
            {
                type: "slider", element: nowEdit, flag: {
                title: "新闻条数", style: "noTab_noColor", isColor: false, param: "newsNum", size: [1, 50]
            }
            },
            {type: "news_newsSetting", element: newsMain, flag: {title: '新闻'}},
            {type: "news_newsDataSort", element: newsMain, flag: {title: '新闻'}}
        ];
        var items1 = zmEditor.component.setItems.config(config1);
        items1.forEach(function (e) {
            tabs1.append(e);
        });

        var tabs2_c1 = $('<div></div>');
        var config2_c1 = [
            {type: "news_newsPicShow", element: newsMain, flag: ""},
            {type: "news_newsPicPosition", element: newsMain, flag: ".zm-component-news-newsPic"},
            {type: "news_newsPicScale", element: newsMain, flag: ".zm-component-news-newsPic"},
            {type: "news_newsPicHover", element: newsMain, flag: ""},
            {type: "news_newsPicBord", element: newsMain, flag: ".zm-component-news-newsPic"},
            {
                type: 'slider', element: newsMain, flag: {
                title: '边框颜色', style: 'tab_color', isColor: true, param: 'borderColor',
                goal: '.zm-component-news-newsPic img'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '边框宽度<br/>(像素)',
                style: 'tab_noColor', isColor: false, param: 'borderWidth',
                size: [0, 5], goal: '.zm-component-news-newsPic img'
            }
            }
        ];
        var items2_c1 = zmEditor.component.setItems.config(config2_c1);
        items2_c1.forEach(function (e) {
            tabs2_c1.append(e);
        });

        var tabs2_c2 = $('<div></div>');
        var config2_c2 = [{
            type: 'boxShadow',
            element: newsMain,
            flag: {style:'tab',goal:'.zm-component-news-newsPic img'}
        }];
        var items2_c2 = zmEditor.component.setItems.config(config2_c2);
        items2_c2.forEach(function (e) {
            tabs2_c2.append(e);
        });
        var tabs2List = [
            {title: "<span class='fa fa-th-large fa-lg'></span><br>常规", content: tabs2_c1},
            {title: "<span class='fa fa-clipboard'></span><br>阴影", content: tabs2_c2}
        ];
        var tabs2 = zmEditor.component.setItems.tabs_child(tabs2List);

        var tabs3 = $('<div></div>');
        var config3 = [
            {type: "news_newTitlePoint", element: newsMain, flag: ".zm-component-news-titlePoint"},
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题符号<br/>颜色', style: 'noTab_color', isColor: true, param: 'backgroundColor',
                goal: '.zm-component-news-titlePoint'
            }
            },
            {
                type: 'news_newsTitleFont', element: newsMain,
                flag: {style: 'mini', goal: '.zm-component-news-titleCont', param: "color"}
            },
            {type: 'news_wordsAlign', element: newsMain, flag: {title: '', goal: '.zm-component-news-titleCont'}},
            {
                type: 'slider', element: newsMain, flag: {
                title: '文字颜色<br/>(光标悬停)', style: 'noTab_color', isColor: true, param: 'hoverColor',
                goal: '.zm-component-news-titleCont'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题字间距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'fontSpace',
                size: [0, 20], goal: '.zm-component-news-titleCont'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题行距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'wordsLineHeight',
                size: [0, 20], goal: '.zm-component-news-title'
            }
            }
        ];
        var items3 = zmEditor.component.setItems.config(config3);
        items3.forEach(function (e) {
            tabs3.append(e);
        });

        var tabs4 = $('<div></div>');
        var config4 = [
            {type: 'news_isShowWords', element: newsMain, flag: {title: '新闻', goal: '.zm-component-news-words'}},
            {
                type: 'news_newsWordsFont', element: newsMain,
                flag: {title: '新闻', style: 'mini', goal: '.zm-component-news-words', param: "color"}
            },
            {type: 'news_wordsAlign', element: newsMain, flag: {title: '', goal: '.zm-component-news-words'}},
            {
                type: 'slider', element: newsMain, flag: {
                title: '显示行数', style: 'noTab_noColor', isColor: false, param: 'wordsLineNum',
                size: [0, 10], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '内容字间距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'fontSpace',
                size: [0, 20], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '内容行距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'wordsLineHeight',
                size: [0, 20], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '文字颜色<br/>(光标悬停)', style: 'noTab_color', isColor: true, param: 'hoverColor',
                goal: '.zm-component-news-words'
            }
            }
        ];
        var items4 = zmEditor.component.setItems.config(config4);
        items4.forEach(function (e) {
            tabs4.append(e);
        });

        var tabs5 = $('<div></div>');
        var config5 = [
            {type: 'news_newsShowAnother', element: newsMain, flag: ''}
        ];
        var items5 = zmEditor.component.setItems.config(config5);
        items5.forEach(function (e) {
            tabs5.append(e);
        });
        var tabsList = [{title: "列表", content: tabs1}, {title: "图片", content: tabs2},
                        {title: "标题", content: tabs3}, {title: "内容", content: tabs4},
                        {title: "其他", content: tabs5}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width": "350px", "height": "685px"});
        return tabs;
    },
    //get ready area
    getNewsData: function (ele, num) {
        var newsCont = ele.find('.zm-component-news-content');
        var oldNewsNum = num ? num : 0;
        var newsNum = newsCont.attr('data-newsNum') ? newsCont.attr('data-newsNum') : 2;
        var newsData = zmEditor.component.news.newsData;
        if (newsNum > oldNewsNum) {
            $.each(newsData.data, function (index, val) {
                if (index < newsNum && index > oldNewsNum - 1) {
                    newsCont.find('.zm-component-news-box:eq(0)').clone()
                        .attr('data-newsId',val.fId)
                        .find('img').attr('src', $(val.fContent).find('img').eq(0).attr("src")).end()
                        .find('.zm-component-news-title a').text(val.fTitle).end()
                        .find('.zm-component-news-getDate').text(val.fCreateTime).end()
                        .find('.zm-component-news-words').text($(val.fContent).text()).end()
                    // .find('.zm-component-news-praise').text(val.fLikeCount).end()
                    // .find('.zm-component-news-transmit').text(val.fForwardCount).end()
                    // .find('.zm-component-news-collect').text(val.fCollectCount).end()
                    // .find('.zm-component-news-comment').text(val.replyCount).end()
                        .appendTo(newsCont);
                }
            })
        } else {
            for (var x = 0; x < oldNewsNum - newsNum; x++) {
                newsCont.find('.zm-component-news-box').eq(-1).remove()
            }
        }
        var newsBox = newsCont.find('.zm-component-news-box'),
            newsPic = newsCont.find('.zm-component-news-newsPic');
        var editTitleList = ele.find('.zm-component-news-title'), editTitleStr = "";
        if (newsCont.attr('data-newsDir') == 'flex') {
            newsBox.addClass('flexColumn');
            newsPic.height('130px');
        } else {
            newsBox.removeClass('flexColumn');
            newsPic.height(zmEditor.component.news.newsPicHeight(ele));
        }
        if (newsCont.attr('picOriScale')) {
            zmEditor.component.news.newsPicOriScale(newsCont,newsPic)
        } else {
            ele.removeClass('newsPicVertC newsPicHorzC')
        }
        var picHoverEffect = newsCont.attr('data-picEffect') ? newsCont.attr('data-picEffect') : 'bigger';
        newsPic.addClass(picHoverEffect);
        for (var i = 0; i < editTitleList.length; i++) {
            editTitleStr += '<li><span>新闻：</span>' + editTitleList.eq(i).text() + '</li>'
        }
        $('.zm-edit-news-settingBox .zm-edit-news-titleList ul').html(editTitleStr);
        $('.zm-edit-news-settingBox .zm-edit-news-titleList').mCustomScrollbar({theme: "minimal"});

    },//获取新闻数据并拼入html
    newsAllData: function () {
        var url = zmEditor.url.getNewsData;
        $.ajax({
            async: false,
            type: 'get',
            url: url,
            dataType: 'json',
            success: function (e) {
                zmEditor.component.news.newsData = e;
            },
            error: function (e) {
                console.log(e.status)
            }
        });
    },//与后台交互获取新闻数据
    setNewsStyle: function (ele) {
        ele.width('310px');
        var newsCont = ele.find('.zm-component-news-content'), newsType = newsCont.attr('data-newsType');
        var newsNum = newsCont.attr('data-newsNum') ? newsCont.attr('data-newsNum') : 0, str = "";
        var newsData = zmEditor.component.news.newsData;
        $.each(newsData.data, function (index, val) {
            var likeCount = val.fLikeCount ? val.fLikeCount : 0;
            var forwardCount = val.fForwardCount ? val.fForwardCount : 0;
            var collectCount = val.fCollectCount ? val.fCollectCount : 0;
            var replyCount = val.replyCount ? val.replyCount : 0;
            if (index < newsNum) {
                str += '<div class="zm-component-news-box" data-newsId = "'+ val.fId +'">'
                    + '<div class="zm-component-news-newsPic">'
                    + '<img src="' + $(val.fContent).find('img').eq(0).attr("src") + '"></div>'
                    + '<div class="zm-component-news-wrap">'
                    + '<div class="zm-component-news-title">'
                    + '<span class="list_style"><em class="zm-component-news-titlePoint"></em></span>'
                    + '<a href="#" class="zm-component-news-titleCont">' + val.fTitle + '</a></div>'
                    + '<div class="zm-component-news-source">'
                    + '<span class="zm-component-news-getDate">' + val.fCreateTime + '</span></div>'
                    + '<div class="zm-component-news-words">' + $(val.fContent).text() + '</div>'
                    + '<div class="zm-component-news-interact">'
                    + '<span class="zm-component-news-praise">点赞(<i>' + likeCount + '</i>)</span>'
                    + '<span class="zm-component-news-transmit">转发(<i>' + forwardCount + '</i>)</span>'
                    + '<span class="zm-component-news-collect">收藏</span>'
                    + '<span class="zm-component-news-comment">评论(<i>' + replyCount + '</i>)</span>'
                    + '</div></div></div>'
                //replyCount 评论 ；fCollectCount 收藏；fForwardCount 转发；fLikeCount 点赞；
            }
        });
        newsCont.html(str);
        var newsBox = newsCont.find('.zm-component-news-box'),
            newsWrap = newsCont.find('.zm-component-news-wrap'),
            newsPic = newsCont.find('.zm-component-news-newsPic'),
            newsTitle = newsCont.find('.zm-component-news-title');
        if (newsCont.attr('data-newsDir')) {
            newsBox.addClass('flexColumn')
        } else {
            newsBox.removeClass('flexColumn')
        }
        switch (newsType) {
            case "wordList":
                newsCont.addClass('noPic noSource noWords  noPraise noTransmit noCollect noComment');
                newsTitle.find('a').css('color', '#193f8a');
                break;
            case "titleNews":
                newsCont.addClass('noPic noTitI noPraise noTransmit noCollect noComment');
                newsTitle.find('a').css('border-bottom','1px solid');
                break;
            case "picLNews":
                newsCont.addClass('noTitI');
                break;
            case "picTNews":
                newsCont.addClass('noTitI  noPraise noTransmit noCollect noComment')
                    .attr('data-newsDir', 'flex');
                newsBox.addClass('flexColumn');
                break;
            default:
                break;
        }
        newsCont.attr({'data-picEffect': 'bigger'});
        newsPic.addClass('bigger');
        if (!newsBox.hasClass('flexColumn')) {
            newsPic.height(newsWrap.height());
        } else {
            newsPic.height('130px');
        }
    },//设置新闻模块初始样式
    newsPicHeight: function (ele) {
        var titH = ele.find('.zm-component-news-title').height();
        var souH = ele.find('.zm-component-news-source').height();
        var worH = ele.find('.zm-component-news-words').height();
        var intH = ele.find('.zm-component-news-interact').height();
        return parseInt(titH) + parseInt(souH) + parseInt(worH) + parseInt(intH);
    },//获取新闻内容区域高度
    newsPicOriScale: function (ele, flag) {
        var newsBox = ele.find('.zm-component-news-box'),
            picBox = ele.find(flag) ? ele.find(flag) : newsBox.find('.zm-component-news-newsPic');
        var tempImg = new Image();
        for (var i = 0; i < picBox.length; i++) {
            var img = picBox.eq(i).find('img');
            tempImg.src = img.attr('src');
            var imgScale = parseInt(tempImg.width) / parseInt(tempImg.height);//原始图片比例
            var boxH = picBox.eq(i).height(), boxW = picBox.eq(i).width();
            var boxScale = parseInt(boxW) / parseInt(boxH);//盒子比例

            if (imgScale > boxScale) {
                img.css({'width': '100%', 'height': (100 / imgScale * boxScale).toFixed(2) + '%'})
            } else {
                img.css({'width': (100 * imgScale / boxScale).toFixed(2) + '%', 'height': '100%'})
            }
        }
    },//新闻图片自适应宽高
    //setting  config
    newsHrefSetting: function (ele, flag) {
        var main = ele.closest('.zm-component-main');
        var chooseMethod = main.attr('class').indexOf('blog')>-1?
            'zmChoiceRadio.choiceBlogger(this)':'zmChoiceRadio.choiceNews(this)';
        var e = $('<div class="zm-edit-news-settingBox">'
            + '<div class="zm-edit-news-choiseNews"><span>'
            + '<label class="choice"></label><span>选择' + flag.title + '</span></span>'
            + '<span><label></label><span>选择' + flag.title + '类目</span></span></div>'
            + '<div class="zm-edit-news-setHref"><span>选择</span>'
            + '<button onclick = '+chooseMethod+'>设置</button>'
            + '<div class="zm-edit-news-isHref"><img src="imgs/zm123.png"><span>当前未设置任何连接！</span></div>'
            + '<div class="zm-edit-news-titleList"><ul></ul></div></div></div>');
        var liCont = ele.find('.zm-component-news-title'), liStr = "";
        for (var i = 0,liLen = liCont.length; i < liLen; i++) {
            liStr += '<li><span>' + flag.title + '：</span>' + liCont.eq(i).text() + '</li>'
        }
        e.find('.zm-edit-news-titleList ul').html(liStr);
        e.find('.zm-edit-news-choiseNews').zmActionOn('click', 'label', function () {
            var _this = $(this);
            e.find('label').removeClass('choice');
            _this.addClass('choice')
        });
        return e
    },//设置新闻链接 -- 需与选择新闻弹窗对接
    newsDataSort: function (ele, flag) {
        var e = $('<div class="zm-edit-news-newsSort"><span>排序方式</span>'
            + '<span><label></label><span>随机排序</span></span>'
            + '<span><label></label><span>按上传时间先后</span></span>'
            + '</div>');
        if (ele.attr('data-sort') == 'random') {
            e.find('label').eq(0).addClass('choice')
        } else {
            e.find('label').eq(1).addClass('choice')
        }
        e.find('label').zmActionOn('click', function () {
            var _this = $(this);
            e.find('label').removeClass('choice');
            _this.addClass('choice');
            if (_this.parent().index() == 1) {
                ele.attr('data-sort', 'random');
                zmEditor.component.news.newsRandomSort(ele);
                var liCont = ele.find('.zm-component-news-title'), liStr = "";
                for (var i = 0; i < liCont.length; i++) {
                    liStr += '<li><span>' + flag.title + '：</span>' + liCont.eq(i).text() + '</li>'
                }
                $('.zm-edit-news-settingBox .zm-edit-news-titleList ul').html(liStr);
            } else {
                ele.attr('data-sort', 'timeSort');
                zmEditor.component.news.newsIdSort(ele,'data-newsId')
            }
        });
        return e
    },//新闻排序
    newsPicShow: function (ele) {
        var e = $('<div class="zm-edit-news-showPic" style="padding-top: 20px;">'
            + '<span class="zm-edit-text-title">展示图片</span>'
            + '<label class="zm-switch-box">'
            + '<span class="zm-switch"><span class="fa fa-minus"></span></span>'
            + '</label><div class="zm-edit-news-coverShadow" style="display: none"></div></div>');
        var label = e.find('label');
        if (ele.hasClass('noPic')) {
            label.removeClass('zm-switch-box-on');
            label.find('.fa').removeClass('fa-check').addClass('fa-minus');
            ele.attr('showPic', 'true');
            e.find(".zm-edit-news-coverShadow").show()
        } else {
            label.addClass('zm-switch-box-on');
            label.find('.fa').removeClass('fa-minus').addClass('fa-check');
            e.find(".zm-edit-news-coverShadow").hide()
        }
        label.zmActionOn('click',function () {
            var isShow = ele.attr('showPic');
            if (isShow == 'true') {
                ele.removeClass('noPic').attr('showPic', 'false');
                if (!ele.hasClass('flexColumn')) {
                    ele.find('.zm-component-news-newsPic')
                        .height(zmEditor.component.news.newsPicHeight(ele))
                }
                e.find(".zm-edit-news-coverShadow").hide()
            } else {
                ele.addClass('noPic').attr('showPic', 'true');
                e.find(".zm-edit-news-coverShadow").show()
            }
        });
        return e
    },//是否显示新闻图片
    newsPicPosition: function (ele, flag) {
        var e = $('<div class="zm-edit-news-picPosition"><span>图片位置</span>'
            + '<span><label></label><span>左侧</span></span>'
            + '<span><label></label><span>上方</span></span></div>');
        var picBox = ele.find('.zm-component-news-box');
        var wrap = ele.find('.zm-component-news-wrap');
        var label = e.find('label');
        if (picBox.hasClass('flexColumn')) {
            label.eq(1).addClass('choice')
        } else {
            label.eq(0).addClass('choice')
        }
        label.zmActionOn('click',function () {
            var _this = $(this);
            label.removeClass('choice');
            _this.addClass('choice');
            e.next().next().next().find('.zm-edit-news-showBs span').text('默认');
            ele.removeAttr('data-picBdScale');
            ele.find('.zm-component-news-newsPic').removeClass('selfAdaption');
            if (_this.parent().index() > 1) {
                ele.find('.zm-component-news-box').addClass('flexColumn');
                ele.attr('data-newsDir', 'flex');
                ele.find('.zm-component-news-newsPic').height('130px').width('100%').addClass('selfAdaption')
            } else {
                ele.find('.zm-component-news-box').removeClass('flexColumn');
                ele.removeAttr('data-newsDir');
                ele.find('.zm-component-news-newsPic').width('110px')
                    .height(zmEditor.component.news.newsPicHeight(ele)).addClass('selfAdaption')
            }
            zmEditor.component.news.newsPicOriScale(ele, flag)
        });
        return e
    },//设置新闻图片位置
    newsPicScale: function (ele, flag) {
        var e = $('<div class="zm-edit-news-picScale"><span>图片比例</span>'
            + '<span><label></label><span>原始比例</span></span>'
            + '<span><label class="choice"></label><span>自适应</span></span></div>');
        var label = e.find('label');
        if (ele.attr('picOriScale')) {
            label.removeClass('choice');
            label.eq(0).addClass('choice')
        }
        label.zmActionOn('click',function () {
            var _this = $(this);
            label.removeClass('choice');
            _this.addClass('choice');
            if (_this.parent().index() < 2) {
                ele.attr('picOriScale', 'true');
                ele.find(flag).addClass('selfAdaption');
                zmEditor.component.news.newsPicOriScale(ele, flag)
            } else {
                ele.find(flag).find('img').css({'width': '100%', 'height': '100%'});
                ele.find(flag).removeClass('selfAdaption');
                ele.removeAttr('picOriScale')
            }
        });
        return e
    },//设置新闻图片比例
    newsPicHover: function (ele) {
        var e = $('<div class="zm-edit-news-picHover" style="padding-top: 5px;">'
            + '<span>光标悬浮图像效果</span>'
            + '<ul class="zm-edit-news-picEffectList">'
            + '<li><label data-picEffect="bigger"></label><span>放大</span></li>'
            + '<li><label data-picEffect="shiftLeft"></label><span>左移</span></li>'
            + '<li><label data-picEffect="shiftTop"></label><span>上移</span></li>'
            + '<li><label data-picEffect="vignette"></label><span>虚化</span></li>'
            + '</ul></div>');
        var picEffLi = e.find('li label');
        for (var i = 0; i < picEffLi.length; i++) {
            if (picEffLi.eq(i).attr('data-picEffect') == ele.attr('data-picEffect')) {
                picEffLi.eq(i).addClass('choice')
            }
        }
        picEffLi.zmActionOn('click', function () {
            var _this = $(this), thisEffect = _this.attr('data-picEffect');
            picEffLi.removeClass('choice');
            _this.addClass('choice');
            ele.attr('data-picEffect', thisEffect);
            ele.find('.zm-component-news-newsPic')
                .removeClass('bigger shiftLeft shiftTop vignette').addClass(thisEffect)
        });
        return e
    },//设置新闻图片悬浮效果
    newsPicBord: function (ele, flag) {
        var e = $('<div class="zm-edit-news-picBorder" style="padding-top: 5px;">'
            + '<span style="display: inline-block;margin: 15px 0">图片框比例</span>'
            + '<div tabindex="1" class="zm-edit-news-picBdBox">'
            + '<div class="zm-edit-news-showBs"><span>默认</span></div>'
            + '<span class="zm-edit-news-icon fa fa-sort-desc"></span>'
            + '<ul class="zm-edit-news-picBdList" style="display: none">'
            + '<li><span>16:9</span></li>'
            + '<li><span>3:2</span></li>'
            + '<li><span>4:3</span></li>'
            + '<li><span>1:1</span></li>'
            + '<li><span>3:4</span></li>'
            + '<li><span>2:3</span></li>'
            + '<li><span>9:16</span></li>'
            + '</ul></div></div>');
        var picBdList = e.find('.zm-edit-news-picBdList'), picLi = picBdList.find('li');
        var newsBox = ele.find('.zm-component-news-box');
        var picBox = newsBox.find('.zm-component-news-newsPic');
        for (var i = 0; i < picLi.length; i++) {
            var num = (picLi.eq(i).text().split(':')[0] / picLi.eq(i).text().split(':')[1]).toFixed(2);
            if (num == ele.attr('data-picBdScale')) {
                e.find('.zm-edit-news-showBs').html(picLi.eq(i).html());
            }
        }
        e.find('.zm-edit-news-picBdBox').on('focus', function () {
            picBdList.slideDown(250)
        }).on('blur', function () {
            picBdList.slideUp(250)
        });
        picBdList.find('li').zmActionOn('click', function () {
            var _this = $(this);
            e.find('.zm-edit-news-showBs').html(_this.html());
            var scaleNum = (_this.text().split(':')[0] / _this.text().split(':')[1]).toFixed(2);
            ele.attr('data-picBdScale', scaleNum);
            if (newsBox.hasClass('flexColumn')) {
                picBox.height(parseInt(picBox.width()) / scaleNum);
                ele.find(flag).height(parseInt(picBox.width()) / scaleNum);
            } else {
                picBox.width(parseInt(picBox.height()) * scaleNum);
                ele.find(flag).width(parseInt(picBox.height()) * scaleNum);
            }
            // zmEditor.component.news.newsPicOriScale(ele,flag);
            picBdList.slideUp(250);
            e.find('.zm-edit-news-picBdBox').blur()
        });
        return e
    },//设置新闻图片框比例
    newsTitlePoint: function (ele, flag) {
        var e = $('<div class="zm-edit-news-titlePointSet" style="border-bottom: 0;padding-top: 10px">'
            + '<span>标题符号样式</span>'
            + '<div class="zm-edit-news-pointStyleList clearFloat">'
            + '<span class="pointStyle one"><i style="top: 43%;">无</i></span>'
            + '<span class="pointStyle two"><i></i></span>'
            + '<span class="pointStyle three"><i></i></span>'
            + '</div></div>');
        if (!ele.hasClass('noTitI')) {
            if (ele.find(flag).css('border-radius') == '0px') {
                e.find('.zm-edit-news-pointStyleList span').eq(1).addClass('checked')
            } else {
                e.find('.zm-edit-news-pointStyleList span').eq(2).addClass('checked')
            }
        } else {
            e.find('.zm-edit-news-pointStyleList span').eq(0).addClass('checked')
        }
        e.find('.zm-edit-news-pointStyleList span').zmActionOn('click', function () {
            var _this = $(this);
            _this.addClass('checked').siblings().removeClass('checked');
            ele.removeClass('noTitI');
            switch (_this.index()) {
                case 0:
                    ele.addClass('noTitI');
                    break;
                case 1:
                    ele.find(flag).css('border-radius', '0');
                    break;
                case 2:
                    ele.find(flag).css('border-radius', '50%');
                    break;
            }
        });
        return e
    },//设置新闻标题符号样式
    newsTitleFont: function (ele, flag) {
        var e = $('<div class="zm-edit-news-titleFontSet" style="padding: 10px 7px">'
            + '<span>标题文字设置</span>'
            + '<div class="zm-edit-news-titleFontSetCont" style="margin-top: 10px"></div></div>');
        e.find('.zm-edit-news-titleFontSetCont').append(zmEditor.component.setItems.strings.fontStyle(ele, flag));
        return e
    },//标题文字样式设置
    newsIsShowWords: function (ele, flag) {
        var newPic = ele.find('.zm-component-news-newsPic'),newsWord = ele.find(flag.goal);
        var e = $('<div class="zm-edit-news-showWords" style="position:relative;padding-top: 20px;">'
            + '<span class="zm-edit-text-title">' + flag.title + '内容</span>'
            + '<label class="zm-switch-box">'
            + '<span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            + '<div class="zm-edit-news-coverShadow" style="display: none"></div></div>');
        var label = e.find('label');
        if (ele.hasClass('noWords')) {
            label.removeClass('zm-switch-box-on');
            label.find('.fa').removeClass('fa-check').addClass('fa-minus');
            ele.attr('showWords', 'true');
            e.find(".zm-edit-news-coverShadow").show()
        } else {
            label.addClass('zm-switch-box-on');
            label.find('.fa').removeClass('fa-minus').addClass('fa-check');
            e.find(".zm-edit-news-coverShadow").hide()
        }

        label.zmActionOn('click',function () {
            var isShow = ele.attr('showWords');
            var box = e.next().next().next();
            var numSetEle = box.find('.zm-edit-slider-val');
            var theNum = parseInt(numSetEle.val());
            if (isShow == 'true') {
                ele.removeClass('noWords').attr('showWords', 'false');
                e.find(".zm-edit-news-coverShadow").hide()
            } else {
                ele.addClass('noWords').attr('showWords', 'true');
                e.find(".zm-edit-news-coverShadow").show()
            }
            ele.find(flag.goal).height(theNum*parseInt(newsWord.css('lineHeight')));
            if(!ele.attr('data-newsDir')){
                if(!ele.attr('data-newsDir')){
                    newPic.height(zmEditor.component.news.newsPicHeight(ele))
                }
            }
        });
        return e
    },//是否显示新闻内容
    newsWordsAlign: function (ele, flag) {
        var e = $('<div class="zm-edit-news-wordsAlign" style="padding: 10px 7px">'
            + '<div class="fa fa-2x fa-align-left zm-tooltip" data-zm-title="居左"></div>'
            + '<div class="fa fa-2x fa-align-center zm-tooltip" data-zm-title="居中"></div>'
            + '<div class="fa fa-2x fa-align-right zm-tooltip" data-zm-title="居右"></div>'
            + '</div>');
        var goal = flag.goal ? ele.find(flag.goal) : ele;
        var alignStyle = goal.css('textAlign');
        e.find('.fa').removeClass('checked');
        switch (alignStyle) {
            case 'center':
                e.find('.fa').eq(1).addClass('checked');
                break;
            case 'right':
                e.find('.fa').eq(2).addClass('checked');
                break;
            case 'left':
            default:
                e.find('.fa').eq(0).addClass('checked');
                break
        }
        e.zmActionOn("click", '.fa', function () {
            e.find('.fa').removeClass('checked');
            var _this = $(this);
            _this.addClass('checked');
            switch (_this.index()) {
                case 0:
                    goal.css('textAlign', 'left');
                    break;
                case 1:
                    goal.css('textAlign', 'center');
                    break;
                case 2:
                    goal.css('textAlign', 'right');
                    break;
            }
        });
        return e
    },//文字对齐方式
    newsWordsFont: function (ele, flag) {
        var e = $('<div class="zm-edit-news-titleFontSet" style="padding: 10px 7px">'
            + '<span>' + flag.title + '内容文字设置</span>'
            + '<div class="zm-edit-news-titleFontSetCont" style="margin-top: 10px"></div></div>');
        e.find('.zm-edit-news-titleFontSetCont').append(zmEditor.component.setItems.strings.fontStyle(ele, flag));
        return e
    },//内容文字样式设置
    newsShowAnother: function (ele) {
        var newPic = ele.find('.zm-component-news-newsPic');
        var e = $('<div class="zm-edit-news-showAnother"><ul>'
            + '<li><span data-contClass="noPraise" class="fa"></span><i>点赞数</i></li>'
            + '<li><span data-contClass="noTransmit" class="fa"></span><i>转发数</i></li>'
            + '<li><span data-contClass="noCollect" class="fa"></span><i>收藏数</i></li>'
            + '<li><span data-contClass="noComment" class="fa"></span><i>评论数</i></li>'
            + '<li><span data-contClass="noSource" class="fa"></span><i>发布时间</i></li>'
            + '</ul></div>');
        var classLi = e.find('li');
        for (var i = 0; i < classLi.length; i++) {
            if (!ele.hasClass(classLi.eq(i).find('span').attr('data-contClass'))) {
                classLi.eq(i).find('span').addClass('fa-check')
            }
        }
        e.find('.fa').zmActionOn('click', function () {
            var _this = $(this), contClass = _this.attr('data-contClass');
            _this.toggleClass('fa-check');
            if (_this.hasClass('fa-check')) {
                ele.removeClass(contClass)
            } else {
                ele.addClass(contClass)
            }
            if(!ele.attr('data-newsDir')){
                newPic.height(zmEditor.component.news.newsPicHeight(ele))
            }
        });
        return e
    },//是否显示新闻其他内容
    //public func area
    newsRandomSort: function (ele) {
        var arr = ele.children().toArray();
        var len = arr.length;
        var rand = parseInt(Math.random() * (len));
        ele.children().each(function (i) {
            ele.append(ele.children().eq(rand));
            rand = parseInt(Math.random() * (len));
        });
    },//随机排序ele子元素，可公用
    newsIdSort:function (ele,param) {
        var children = ele.children();
        children.sort(function (a, b) {
            var sort1 = a.getAttribute(param) * 1;
            var sort2 = b.getAttribute(param) * 1;
            var sortNum = -1;//负值为大到小排序。正为小到大
//            if (sortMark)
//                sortNum = -1;
            if (sort1 > sort2)
                return sortNum;
            if (sort1 < sort2)
                return -1 * sortNum;
            return 0;
        });
        children.detach().appendTo(ele)
    },
    setNewsBlogStyle:function (ele,obj) {
        var iSelected = ele;
        var dataType = obj.find('.zm-component-news-content').attr('data-newsType');
        var newsCont = iSelected.find('.zm-component-news-content');
        var newsBox　= newsCont.find('.zm-component-news-box');
        var newsTitle = newsCont.find('.zm-component-news-title');
        var newPic = ele.find('.zm-component-news-newsPic');
        newsCont.removeClass('noPic noSource noWords  noPraise noTransmit noCollect noComment');
        newsBox.removeClass('flexColumn');newPic.attr('style','');
        switch (dataType){
            case "wordList":
                newsCont.addClass('noPic noSource noWords  noPraise noTransmit noCollect noComment')
                    .removeClass('noTitI');
                newsTitle.find('a').css('color', '#193f8a');
                break;
            case "titleNews":
                newsCont.addClass('noTitI noPic noPraise noTransmit noCollect noComment');
                newsTitle.find('a').css('border-bottom','1px solid');
                break;
            case "picLNews":
                newsCont.addClass('noTitI');
                break;
            case "picTNews":
                newsCont.addClass('noTitI  noPraise noTransmit noCollect noComment')
                    .attr('data-newsDir', 'flex');
                newsBox.addClass('flexColumn');
                break;
            default:
                break;
        }
        if(!newsBox.hasClass('flexColumn')){
            newPic.height(zmEditor.component.news.newsPicHeight(ele))
        }else {
            newPic.css({height: '130px', width: '100%'})
        }
    },
    newsHoverPubic:function (ele) {
        ele.on('mouseenter mouseleave', '.zm-component-news-titleCont', function (e) {
            var _this = $(e.target);
            var colorVal = _this.attr('data-type-hoverColor');
            if(e.type == 'mouseenter'){
                if(colorVal){
                    _this.attr('data-oldColor', _this.css('color')).css('color', colorVal)
                }
            }
            if(e.type == 'mouseleave'){
                if(_this.attr('data-oldColor')){
                    _this.css('color', _this.attr('data-oldColor'))
                }
            }
        });
        ele.on('mouseenter mouseleave', '.zm-component-news-words', function (e) {
            var _this = $(e.target);
            var colorVal  =  _this.attr('data-type-hoverColor');
            if(e.type == 'mouseenter'){
                if(colorVal){
                    _this.attr('data-oldColor', _this.css('color')).css('color', _this.attr('data-type-hoverColor'))
                }
            }
            if(e.type == 'mouseleave'){
                if(_this.attr('data-oldColor')){
                    _this.css('color', _this.attr('data-oldColor'))
                }
            }
        });
    }
};