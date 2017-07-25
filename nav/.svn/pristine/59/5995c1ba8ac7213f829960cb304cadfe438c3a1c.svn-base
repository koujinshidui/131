/**
 * Created by liuhuan on 2017/5/19.
 */
(function(){
    var audio = $("audio");
    var audio_dom = audio[0];
    var playList = [];//播放列表
    var musicArr = [];//歌曲信息
    var listIndex = 0;
    //播放控制
    var prev = $(".prev");
    var play = $(".play");
    var next = $(".next");
    var mode = $(".mode");
    //进度控制
    var playTime = $(".player-position");
    var playDuration = $(".player-duration");
    var playPanel = $(".panel");
    var playerDot = $(".player-dot");
    var playerCur = $(".player-plan");
    //音量控制
    var volumeDot = $(".volume-dot");
    var volumeCur = $(".volume-cur");
    var volumeSpeaker = $(".volumeSpeaker");
    //歌曲列表
    var musicPlayerList = $(".playList-body");
    var trackName = $(".trackName");
    var trackSinger = $(".trackSinger");
    //定时器
    var audioTypeStart,audioTypeEnd,audioCurrentTime;

    /***** 打开页面初始化 *****/
    initialize();
    function initialize(){
        //歌曲信息对象数组
        musicArr = getLocalMusic();
        console.log(musicArr);
        //播放顺序
        playList = playerSrcList();
        console.log(playList);
        //渲染播放列表
        assignment(musicArr);
        //给audio添加src
        getIndex();
        setSrc(listIndex);
        //开启监测定时器
        startInterVal();
    }
    /***** 初始化结束 *****/
    /***** 定时器函数 *****/
    //开启定时器
    function startInterVal(){
        //开启监测定时器 监测音频是否准备就绪,准备就绪自动清除
        audioTypeStart = setInterval(start,500);
        //开启监测定时器 监测音频是否播放完毕,播放完毕自动清除,播放完毕清除audioCurrentTime
        audioTypeEnd = setInterval(end,1000);
        //开启监测定时器 监测音频播放时间
        audioCurrentTime = setInterval(cur,1000);
        console.log("定时器已起动")
    }
    function start(){
        if(audio_dom.readyState == 4){
            var _duration = parseInt(audio_dom.duration);
            playDuration.text(secToMinute(_duration));
            audio_dom.play();
            console.log("初始化完成,开始播放");
            clearInterval(audioTypeStart);
        }
    }
    function end(){
        if(audio_dom.ended){
            console.log("播放结束");
            listIndex++;
            clearInterval(audioCurrentTime);
            setSrc(listIndex);
            console.log("下一首");
            clearInterval(audioTypeEnd);
            startInterVal();
        }
    }
    function cur(){
        var currentTime = parseInt(audio_dom.currentTime);
        playTime.text(secToMinute(currentTime));
        var width = parseInt(playPanel.css("width")) - parseInt(playerDot.css("width"));
        var duration = parseInt(audio_dom.duration);
        var l = Math.round((width/duration)*currentTime);
        playerDot.css("left",l);
        playerCur.css("width",l);
    }
    /***** 功能性函数 *****/
    //获取初始化时的播放位置
    function getIndex(){
        var param = window.location.search.slice(1);
        for(var i=0;i<playList.length;i++){
            if(playList[i] == param){
                listIndex = i;
            }
        }
    }
    //设置audio src
    function setSrc(e) {
        var length = playList.length;
        if(e >= length){
            e = 0;
        }
        if(e < 0){
            e = 0;
        }
        audio_dom.src = musicArr[e].fMusicSrc;
        trackName.text(musicArr[e].fName);
        trackSinger.text(musicArr[e].creator);
    }
    //获取fId列表
    function playerSrcList(){
        var arr = [];
        for(var i in musicArr){
            var k = musicArr[i].fId;
            arr.push(k);
        }
        return arr;
    }
    //时间转换函数
    function secToMinute(num){
        var txt;
        var sec = parseInt(num % 60);
        var min = parseInt(num / 60);
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        txt = min + ":" + sec;
        return txt;
    }
    //获取local歌曲目录
    function getLocalMusic(){
        var str = localStorage.getItem("musicList");
        var arr = str.split("@");
        var Arr = [];
        for(var i in arr){
            Arr.push(JSON.parse(arr[i]));
        }
        var newArr = objArrRemRep(Arr,['fId']);
        return newArr;
    }
    //解析对象数组,布局到页面中 待根据需求重写
    function assignment(e){
        var ul = $(".playList-body > ul");
        for(var i in e){
            var li = $("<li>");
            var div01 = $("<div>");
            var div02 = $("<div>");
            var div03 = $("<div>");
            var span01 = $("<span>");
            var span02 = $("<span>");
            var span03 = $("<span>");
            var span04 = $("<span class='fa fa-download'>");
            var span05 = $("<span class='fa fa-share-alt'>");
            div03.append(span05).append(span04);
            span03.text(parseInt(i)+1);
            div01.append(span03);
            span01.text(e[i].fName);
            span02.text(e[i].creator);
            div02.append(span01).append(span02);
            li.append(div01).append(div02).append(div03);
            ul.append(li);
        }
    }
    //对象数组去重
    function objArrRemRep(arr,fid){
        var mark = {};
        var castArr = [];
        var length = arr.length;
        for(var i = length - 1;i >= 0;i--){
            var item = arr[i];
            if(!mark[item[fid]]){
                castArr.push(item);
                mark[item[fid]] = item[fid];
            }
        }
        return castArr;
    }
    //随机排序
    function randomSort(arr){
        var i,j,temp;


    }
    /***** 事件 *****/
    //播放
    play.on("click",function(){
        var _this = $(this);
        if(audio_dom.paused){
            audio_dom.play();
            audioCurrentTime = setInterval(cur,1000);
            _this.removeClass("fa-play").addClass("fa-pause");
        }else{
            audio_dom.pause();
            clearInterval(audioCurrentTime);
            _this.removeClass("fa-pause").addClass("fa-play");
        }
    });
    next.on("click",function(){
        listIndex++;
        setSrc(listIndex);
        startInterVal();
    });
    prev.on("click",function(){
        listIndex--;
        setSrc(listIndex);
        startInterVal();
    });
    mode.on("click",function(){
        var _this = $(this);
        var _index = _this.attr("data-sort-index");
        switch(_index){
            case "turn":


                _this.attr("data-sort-index","only").removeClass("fa-refresh").addClass("fa-registered");
                break;
            case "only":




                _this.attr("data-sort-index","rand").removeClass("fa-registered").addClass("fa-random");
                break;
            case "rand":


                _this.attr("data-sort-index","turn").removeClass("fa-random").addClass("fa-refresh");
                break;
        }
    });
    //音量状态按钮事件
    volumeSpeaker.on("click",function(){
        var _this = $(this);
        if(audio[0].muted){
            audio[0].muted = false;
            _this.removeClass("fa-volume-off").addClass("fa-volume-up");
        }else{
            audio[0].muted = true;
            _this.removeClass("fa-volume-up").addClass("fa-volume-down");
        }
    });
    //音量调节点事件
    volumeDot.on("mousedown",function(e){
        var _this = $(this);
        var l = parseInt(_this.css("left"));
        var x = e.clientX;
        $(document).on("mousemove",function(e){
            var left = e.clientX - x + l;
            if(left > 0 && left <= 100){
                _this.css("left",left);
                volumeCur.css("width",left);
                audio[0].volume = left/100;
                volumeSpeaker.removeClass("fa-volume-down").addClass("fa-volume-up");
            }
            if(left == 0){
                volumeSpeaker.removeClass("fa-volume-up").addClass("fa-volume-down");
            }
        })
    });
    $(document).on("mouseup",function(){
        $(document).off("mousemove");
    });
    //播放进度控制
    playPanel.on("click",function(e){
        var _this = $(this);
        var l = e.offsetX;
        playerDot.css({"left":l + "px"});
        playerCur.css({"width":l + "px"});
        var length = parseInt(_this.css("width"));
        var musicTime = parseInt(audio_dom.duration);
        var nowTime = parseInt((musicTime/length)*l);
        audio_dom.currentTime = nowTime;
    });
})();


