/**
 * Created by liuhuan on 2017/6/5.
 */

/************************* 列表的一些方法 产品&&专辑  start***************************/
//存储localStorage数据 遍历数组对象 转成字符串
function setLocal(ele,obj){
    var arr = obj.value;
    var key = obj.key;
    var str = "";
    arr.forEach(function(e){
        str += JSON.stringify(e) + "#";
    });
    str = str.slice(0,str.length-1);
    localStorage.setItem(key,str);
    ele.attr("data-type-list",key);
}
//获取localStrong数据 key = hotAudio || hotProduct 字符串转对象数组
function getLocal(key){
    var Arr = [];
    var str = localStorage.getItem(key);
    str.split("#").forEach(function(e){
        Arr.push(JSON.parse(e));
    });
    return Arr;
}
//设置链接样式
function setLink(data){
    for(var i in data){
        var li = $('<li><i></i><span></span></li>');

    }
}

//动态生成列表
function listComponent(obj){
    var col = obj.col ? obj.col : 5;
    var row = obj.row ? obj.row : 2;
    var key = obj.key;
    var type = obj.type;
    var list = getLocal(key);
    var ul = $('<ul class="zm-edit-components-list-wrap clearFloat"></ul>');
    var btn = $('<div class="zm-edit-components-list-loadMore clearFloat"><span>load More</span></div>');
    var unit;
    switch(type){
        case "album":
            unit = zmEditor.component.setItems.strings.unityAlbum();
            break;
        case "product":
            unit = zmEditor.component.setItems.strings.unityProduct();
            break;
        default:
            console.log("未配置的属性");
            break;
    }
    for(var i=0;i<row;i++){
        var li = $('<li class="clearFloat"></li>');
        for(var j=0;j<col;j++){
            li.append(unit.clone());
        }
        ul.append(li);
    }
    loopAssignment({type: type,arr: ul.children().children(),key: key});
    return [ul,btn];
}
//列表循环赋值 obj = {type: album || product,arr: "要赋值的列表", key: "localStrage存的数据名字"}
function loopAssignment(obj){
    var type = obj.type;
    var arr = obj.arr;
    var key = obj.key;
    var list = getLocal(key);
    switch(type){
        case "album":
            arr.each(function(index){
                var _this = $(this);
                _this.attr("data-id",list[index].fId);
                _this.find("img").attr("src",list[index].fSrc);
                _this.find(".zm-edit-components-list-unit-message-01").find("a").text(list[index].fCreator);
                _this.find(".zm-edit-components-list-unit-message-02").find("a").text(list[index].fName);
                _this.find(".zm-edit-components-list-unit-message-03").find("a").text(list[index].fMoney);
                _this.find(".zm-edit-components-list-unit-message-04").find("a").text(list[index].fTime);
            });
            break;
        case "product":
            arr.each(function(index){
                var _this = $(this);
                _this.attr("data-id",list[index].fId);
                _this.find("img").attr("src",list[index].fMainUrl);
                _this.find(".zm-edit-components-list-unit-message-01").find("span").text(list[index].fName);
                _this.find(".zm-edit-components-list-unit-message-02").find("span").text("¥"+list[index].fRetail);
                _this.find(".zm-edit-components-list-unit-message-02").find("del").text("¥"+list[index].fGuide);
            });
            break;
        default:
            console.log("未配置的属性");
            break;
    }
}
//加载更多按钮
$(document).on("click",".zm-edit-components-list-loadMore> span",function(){
    var _this = $(this);
    var iSelected = zmEditor.component.nowEdit();
    var li = iSelected.find("li:first-child");
    var h = parseInt(li.css("height"));
    var num = iSelected.find("li").length;
    var type;
    if(_this.closest(".list_product").length != 0){
        type = "product";
        console.log("我是产品列表");
    }
    if(_this.closest(".list_album").length != 0){
        type = "album";
        console.log("我是专辑列表");
    }
    num++;
    iSelected.find(".zm-edit-components-list-wrap").append(li.clone());//添加行数
    iSelected.css("height",num*h+57+"px");//重置高度
    loopAssignment({type: type,arr: iSelected.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")})//重置数据
});
/****************************** END ********************************/
//选择弹窗返回函数 音频
function pop_return_audio(data){
    var l = data.length;
    var Str = "";
    switch(l){
        case 0:
            break;//空
        case 1:
            Str = JSON.stringify(data[0]);
            break;//一首
        default:
            var str = "";
            for(var i in data){
                str += JSON.stringify(data[i])+"@";
            }
            Str = str.slice(0,str.length-1);
            break;//多首
    }
    var oldStr = localStorage.getItem("musicList") ? localStorage.getItem("musicList") + "@" : "";
    var newStr = oldStr + Str;
    localStorage.setItem("musicList",newStr);
}
//选择弹窗返回函数 单一产品
function pop_return_product(data){
    console.log("123=木头人");

}
//选择弹窗返回函数 图片
function pop_return_images(data){
    console.log(data);
}
/********************************************************************************************************/
//模拟数据 待删除
function imitate(){
    /* 模拟数据开始 */
    var mus = "http://192.168.0.122/";
    var sos = [
        {
            "fId": 1,
            "creator": "李行亮",
            "fName": "回忆里的那个人",
            "fMusicSrc": mus+"song/01.mp3"
        },
        {
            "fId": 20,
            "creator": "杨坤",
            "fName": "空城",
            "fMusicSrc": mus+"song/02.mp3"
        },
        {
            "fId": 13,
            "creator": "银临",
            "fName": "牵丝戏",
            "fMusicSrc": mus+"song/03.mp3"
        },
        {
            "fId": 24,
            "creator": "孙子涵",
            "fName": "傻傻等",
            "fMusicSrc": mus+"song/04.mp3"
        },
        {
            "fId": 85,
            "creator": "陈粒",
            "fName": "小半",
            "fMusicSrc": mus+"song/05.mp3"
        },
        {
            "fId": 46,
            "creator": "Jam",
            "fName": "七月上",
            "fMusicSrc": mus+"song/06.mp3"
        },
        {
            "fId": 37,
            "creator": "未知歌手",
            "fName": "九九八十一",
            "fMusicSrc": mus+"song/07.mp3"
        },
        {
            "fId": 18,
            "creator": "赵雷",
            "fName": "成都",
            "fMusicSrc": mus+"song/08.mp3"
        },
        {
            "fId": 29,
            "creator": "薛之谦",
            "fName": "丑八怪",
            "fMusicSrc": mus+"song/09.mp3"
        },
        {
            "fId": 10,
            "creator": "周杰伦",
            "fName": "告白气球",
            "fMusicSrc": mus+"song/10.mp3"
        }
    ];
    pop_return(sos);
    /* 模拟数据结束 */
}
function albumList(){
    var url = 'http://192.168.0.122/';
    var albumList = [
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/020.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/020.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'image/020.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'image/001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'image/002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'image/003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'image/004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'image/005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'image/006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'image/007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'image/008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'image/009.jpg'},
    ];
    return albumList;
}
function goodsList(){
    var url = 'http://192.168.0.122/';
    var goodsList = [
        {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
    ];
    return goodsList;
}
/********************************************************************************************************/
//选项卡切换效果
$(document).on("mouseenter",".zm-edit-components-tabs-tit-lab > li",function(){
    var _cont = $(".zm-edit-components-tabs-cont > div");
    var _list = $(".zm-edit-components-tabs-tit-lab > li");
    var _index = _list.index(this);
    _cont.eq(_index).show().siblings().hide();
});
//选项卡 hove 效果
$(document).on("mouseenter",".zm-edit-components-tabs-tit-lab > li",function(){
    var _this = $(this);
    var val01,val02,val03,val04,val05,val06;
    if(_this.attr("data-type-hoverBorderTopColor")){
        if(_this.attr("data-type-oldVal01") == undefined){
            val01 = _this.css("borderTopColor");
            _this.attr("data-type-oldVal01",val01);
        }else{
            val01 = _this.attr("data-type-oldVal01");
        }
        _this.css("borderTopColor",_this.attr("data-type-hoverBorderTopColor")).siblings().css("borderTopColor",val01);
    }
    if(_this.attr("data-type-hoverBorderBottomColor")){
        if(_this.attr("data-type-oldVal02") == undefined){
            val02 = _this.css("borderBottomColor");
            _this.attr("data-type-oldVal02",val02);
        }else{
            val02 = _this.attr("data-type-oldVal02");
        }
        _this.css("borderBottomColor",_this.attr("data-type-hoverBorderBottomColor")).siblings().css("borderBottomColor",val02);
    }
    if(_this.attr("data-type-hoverBorderTopWidth")){
        if(_this.attr("data-type-oldVal03") == undefined){
            val03 = _this.css("borderTopWidth");
            _this.attr("data-type-oldVal03",val03);
        }else{
            val03 = _this.attr("data-type-oldVal03");
        }
        _this.css("borderTopWidth",_this.attr("data-type-hoverBorderTopWidth")+"px").siblings().css("borderTopWidth",val03);
    }
    if(_this.attr("data-type-hoverBorderBottomWidth")){
        if(_this.attr("data-type-oldVal04") == undefined){
            val04 = _this.css("borderBottomWidth")
            _this.attr("data-type-oldVal04",val04);
        }else{
            val04 = _this.attr("data-type-oldVal04");
        }
        _this.css("borderBottomWidth",_this.attr("data-type-hoverBorderBottomWidth")+"px").siblings().css("borderBottomWidth",val04);
    }
    if(_this.attr("data-type-hoverColor")){
        if(_this.attr("data-type-oldVal05") == undefined){
            val05 = _this.css("color");
            _this.attr("data-type-oldVal05",val05);
        }else{
            val05 = _this.attr("data-type-oldVal05");
        }
        _this.css("color",_this.attr("data-type-hoverColor")).siblings().css("color",val05);
    }
    if(_this.attr("data-type-hoverBackgroundColor")){
        if(_this.attr("data-type-oldVal06") == undefined){
            val06 = _this.css("backgroundColor");
            _this.attr("data-type-oldVal06",val06);
        }else{
            val06 = _this.attr("data-type-oldVal06");
        }
        _this.css("backgroundColor",_this.attr("data-type-hoverBackgroundColor")).siblings().css("backgroundColor",val06);
    }

});
//频道 hove 效果
$(document).on("mouseenter mouseleave",".zm-edit-components-tabs-tit-channel",function(e){
    var _this = $(this);
    if(e.type == "mouseenter"){
        if(_this.attr("data-type-hoverColor")){
            _this.attr("data-type-old01",_this.css("color")).css("color",_this.attr("data-type-hoverColor"));
        }
    }
    if(e.type == "mouseleave"){
        _this.css("color",_this.attr("data-type-old01"));
    }
});
//音频各hover效果
$(document).on("click",".zm-edit-components-audio-wrap",function(){
    var _this = $(this);
    var _identify = _this.attr("data-audio-id")?_this.attr("data-audio-id"):"default";
    imitate();
    var url = "musicPlayer.html?" + _identify;
    window.open(url,"族蚂音乐");
});
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-wrap",function(e){
    var _this = $(this);
    var _val_01 = _this.attr("data-type-hoverbordercolor");
    var _val_02 = _this.attr("data-type-hoverbackgroundcolor");
    if(_val_01){
        if(e.type == "mouseenter"){
            _this.attr("data-old-borderColor",_this.css("borderColor")).css("borderColor",_val_01);
        }
        if(e.type == "mouseleave"){
            _this.css("borderColor",_this.attr("data-old-borderColor"));
        }
    }
    if(_val_02){
        if(e.type == "mouseenter"){
            _this.attr("data-old-backgroundColor",_this.css("backgroundColor")).css("backgroundColor",_val_02);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-old-backgroundColor"));
        }
    }
});
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-wrap svg",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverFill");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-fill",_this.css("fill")).css("fill",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("fill",_this.attr("data-old-fill"));
        }
    }
});
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-title",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-color",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-old-color"));
        }
    }
});
$(document).on("mouseenter mouseleave",".zm-components-audio-intact-player > div",function(e){
    var _this = $(this);
    var _val_01 = _this.attr("data-type-hoverbordercolor");
    var _val_02 = _this.attr("data-type-hoverbackgroundcolor");
    if(_val_01){
        if(e.type == "mouseenter"){
            _this.attr("data-old-borderColor",_this.css("borderColor")).css("borderColor",_val_01);
        }
        if(e.type == "mouseleave"){
            _this.css("borderColor",_this.attr("data-old-borderColor"));
        }
    }
    if(_val_02){
        if(e.type == "mouseenter"){
            _this.attr("data-old-backgroundColor",_this.css("backgroundColor")).css("backgroundColor",_val_02);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-old-backgroundColor"));
        }
    }
});
$(document).on("mouseenter mouseleave",".zm-components-audio-intact-player svg",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverFill");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-fill",_this.css("fill")).css("fill",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("fill",_this.attr("data-old-fill"));
        }
    }
});
/* 加载更多按钮 划过改变颜色事件 */
$(document).on("mouseenter mouseleave",".zm-edit-components-list-loadMore > span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
//音频列表下载按钮hover
$(document).on("mouseenter mouseleave",".player-otherInfo-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
//音频列表文字hover
$(document).on("mouseenter mouseleave",".player-otherInfo-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-name",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-albumName",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-singer",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-load",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
//音频列表图标hover
$(document).on("mouseenter mouseleave",".list-icon",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
//mini列表滑过
$(document).on("mouseenter mouseleave",".player-album-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-old"));
        }
    }
});
/****** 音频列表各种点击功能 ******/
//选择框
$(document).on("click",".zm-edit-components-audio-player-album .list-choice",function(){
    var _this = $(this);
    _this.children().toggleClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .list-choice",function(){
    var _this = $(this);
    _this.children().toggleClass("fa-check");
});
//全选
$(document).on("click",".zm-edit-components-audio-player-album .otherInfo-selectAll",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album").find(".list-choice").children().addClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .checkAll",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album-mini").find(".list-choice").children().addClass("fa-check");
});
//反选
$(document).on("click",".zm-edit-components-audio-player-album .otherInfo-invert",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album").find(".list-choice").children().toggleClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .unCheck",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album-mini").find(".list-choice").children().toggleClass("fa-check");
});
//下载专辑

//下载选中





