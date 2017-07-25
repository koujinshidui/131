/**
 * Created by guixuefeng on 2017/3/17.
 */
$.fn.radio=function () {
    $(".zm-radioCopyToAlbumBoot1").mCustomScrollbar({theme:"minimal"});
    $(".zm-goodsLeftop").mCustomScrollbar({theme:"minimal"});
    $(".zm-newsLeftop").mCustomScrollbar({theme:"minimal"});
    $(".zm-radioMiddleLeft").mCustomScrollbar({theme:"minimal"});
    $(".zm-radioRm").mCustomScrollbar({theme:"minimal"});

    $(".zm-radioAlbumMid").mCustomScrollbar({theme:"minimal"});

    $(".plus-minus").click(function() {
        $(".zm-radiofen").slideToggle("slow");
        $(this).toggleClass("active");
        $(this).addClass("fa-plus")
        return false;
    });


    var ab=true;
    $(".plus-minus").on("click",function () {

        if(ab){
            $(this).addClass("fa-plus");
            $(this).removeClass("fa-minus");
        }else{
            $(this).addClass("fa-minus");
            $(this).removeClass("fa-plus");
        }
        ab=!ab;
    });

    $(".pen-min").click(function() {
        $(".zm-radioCopyToAlbumBox2").slideToggle("slow");
        $(this).toggleClass("active");
        $(this).addClass("fa-plus")
        return false;
    });

    var ba=true;
    $(".pen-min").on("click",function () {

        if(ba){
            $(this).addClass("fa-plus");
            $(this).removeClass("fa-minus");
        }else{
            $(this).addClass("fa-minus");
            $(this).removeClass("fa-plus");
        }
        ba=!ba;
    })

    $(".zm-radioList3 .fa").hover(function () {
        $(this).parent().siblings(".fb").eq($(this).index()).css("display","block");
    },function () {
        $(this).parent().siblings(".fb").eq($(this).index()).css("display","none")
    })
    $(document).on("click",".zm-radioList .pencil",function () {
        var _this=$(this).parent().siblings(".zm-radioList1").children(".zm-radioList1-1");
        var _that=$(this).parent().siblings(".zm-radioList1").children(".zm-radioList1-3").children(".zm-radioList1-2");
        var that=$(this).parent().siblings(".zm-radioList2");
        _this.css("opacity","1");
        //$(".zm-radioList1-1").css("opacity","1");
        if (_this.attr("value")==""){
            _this.attr("value",_that.text())
            that.css("opacity","0")
        }

    })

    $(".pencil").on("click",function () {
        var _this=$(this).parent().siblings(".zm-radioList1").children(".zm-radioList1-1");
        var _that=$(this).parent().siblings(".zm-radioList1").children(".zm-radioList1-3").children(".zm-radioList1-2");
        var that=$(this).parent().siblings(".zm-radioList2");
        _this.css("opacity","1");
        //$(".zm-radioList1-1").css("opacity","1");
        if (_this.attr("value")==""){
            _this.attr("value",_that.text())
            that.css("opacity","0")
        }

    })
    $(".zm-radioSpli").on("mouseover mouseout",".zm-radioList",function (event) {
        if(event.type=="mouseover"){
            $(this).children(".listOpcity").css("opacity","1");
            $(this).children(".zm-radioList2").css("opacity","1");
        }else{
            $(this).children(".listOpcity").css("opacity","0");
            if ($(this).children(".zm-radioList2").is(':checked')){
               // console.log($(this).is(':checked'))
                $(this).children(".zm-radioList2").css("opacity","1");
            }else {
                $(this).children(".zm-radioList2").css("opacity","0");
            }
        }

    })

    $(".zm-radioTopList li").on("click",function () {
        $(this).css("background-color","#ffffff").siblings().css("background-color","#daf1ec")
        $(".radioWrap0").eq($(this).index()).css("display","block").siblings().css("display","none")
    })
    $(".zm-radioRtbtn3").on("click",function () {
        $(".zm-radioLoad").css("display","block")
    })
    $(".zm-radioLoad-top2").on("click",function () {
        $(".zm-radioLoad").css("display","none")
    })

    $(".albumTopR").on("click",function () {
        $(".zm-radioCopyToAlbum").css("display","none");
    })
    $(".addblumfile").hover(function(){
        $(".addblumRimgbtn1").css("background-color","#00c3b0");
    },function(){
        $(".addblumRimgbtn1").css("background-color","#4ab1a7");
    })
    $(".zm-radioRtbtn2").on("click",function () {
        $(".radioAddAlbum").css("display","block");
    })
    $(".radioAddAlbumtop2").on("click",function () {
        $(".radioAddAlbum").css("display","none");
    })

    $(".zm-radioLoadR9").on("click",function () {
        $(".addRadioLoad").css("display","block");
    })
    $(".addRadioLoadf2").on("click",function () {
        $(".addRadioLoad").css("display","none");
    })
    $(".addRadioLoadbtn3").on("click",function () {
        $(".addRadioLoad").css("display","none");
    })

    $(".trash").on("click",function () {
        var _this=$(this);
        $(".zm-radioRemove").css("display","block");
        $(".radioRemovebtn2").on("click",function () {
            _this.parent().parent(".zm-radioList").remove();
            $(this).parent().parent().parent().css("display","none");
        })
    })
    // //上传图片
    // $(".addblumfile").uploadPreview({ Img: "addblumRimgPic", Width: 130, Height: 130 });
    // $(".addblumRimgbtn2").on("click",function () {
    //     $("#addblumRimgPic").attr("src","imgs/456.png")
    // })
    //***********新闻/博客

//    展开收缩二级类目
    $(".zm-addele").on("click",function () {;
         $(this).parents().siblings(".level2-box").slideToggle(200);
        //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
        $(this).toggleClass("active");
        return false;
    });
//    展开提示删除重命名框
    $(document).off("click",".level1-tipSet")
    $(document).on("click",".level1-tipSet",function () {
        $(this).parents(".left-level-main").find(".level-con").removeClass("active");
        $(this).find(".tipSet-con").slideToggle(100);
        $(this).parents(".level-con").addClass("active");
        $(this).parents(".level1-box").find(".level2-box").slideDown(200);
    });
    $(document).on("click",".level-con",function () {
        $(".level-con").removeClass("active");
        $(this).addClass("active");
    });
    $(document).on("click",function(e){
        e = window.event || e;
        obj = $(e.srcElement || e.target);
        var tipSet=obj.closest(".level1-tipSet");
        if(tipSet){
            $(".tipSet-con").hide();
            tipSet.find(".tipSet-con").show();
        }
    });
 //增加子类目
   $(document).off("click",".tipSet-con-list-add")
    $(document).on("click",".tipSet-con-list-add",function () {
var b=$(this).closest(".zm-chicePicimg").attr("data-fid")
        var b=$('<div class="level2 zm-chicePicimg" data-fparentid="'+b+'">'
            +'<div class="level-border-l1 fl"></div>'
            +'<div class="level-line"></div>'
            +'<div class="level-con level-con1">'
            +'<a>'
            +' <input class="zm-chiceInput-blur" type="text" value="小类目1" readonly>'
            +'</a>'
            +'<div class="level1-tipSet">'
            +' <div class="tipSet-con">'
            +'<i class="tipSet-con-dot"></i>'
            +'<div class="tipSet-con-list tipSet-con-list-rename">'
            +'<i class="rename"></i>'
            +'重命名'
            +'</div>'
            +'<div class="tipSet-con-list tipSet-con-list-delete2 delete-Leimu">'
            +'<i class="delete"></i>'
            +'删除'
            +'</div>'
            +'</div>'
            +'</div>'
            +'</div>'
            +'</div>')
        $(this).parents().parents().parents().parents().siblings(".level2-box").append(b);
return false;
    });

//    图片类目列表 重命名
    $(document).off("click",".tipSet-con-list-rename");
    $(document).on("click",".tipSet-con-list-rename",function () {
        var obj=$(this).parents(".level-con").find("input[type=text]");
        obj.attr("readonly",false);
        obj.focus();
        $(this).parent(".tipSet-con").hide();
//$(document).find(".tipSet-con").hide()
        return false;
    });
    $(document).on("blur",".level-con input[type=text]",function () {
        $(this).attr("readonly",true);
    });
    $(document).find(".zm-chiceInput-blur").each(function () {
        if($(this).val()==""){
            $(this).attr("readonly",false)
            console.log(11)
        }
    })
//    删除类目
    $(".tipSet-con-list-delete1").on("click",function () {

        if($(this).parents(".level1").siblings(".goodsl2-box").length!=0){
            zmEditor.dialog.open(
                {
                    title: '提示',
                    content: '<div class="pointContent"><div class="fa fa-trash"></div><div class="pointText">该类目有子类目，请先删除子类目。</div></div>',
                    footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK remove-goodsbtn5">我知道了</span></div>'),
                    width:500,
                    height: 250,
                    movable:true,
                    target: $('.zm-radioWrap')
                },
                function(){
                    $(".remove-goodsbtn5").on("click",function () {
                        $(this).closest(".zm-dialog-box").hide();
                    })
                })//回调函数
        }else{
            $(this).parents(".level1-box").remove();
        }
    });
    //788888
    $(document).off("click",".tipSet-con-list-delete4")
    $(document).on("click",".tipSet-con-list-delete4",function () {
        var _this=$(this);
        if(_this.parents(".level1").siblings(".level2-box").find(".level2").length!=0){
            zmEditor.dialog.open(
                {
                    title: '提示',
                    content: '<div class="pointContent"><div class="fa fa-trash"></div><div class="pointText">该类目下有商品，请先移除商品。</div></div>',
                    footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK remove-btngoods6">确定删除</span></div>'),
                    width:500,
                    height: 250,
                    movable:true,
                    target: $('.zm-radioWrap')
                },
                function(){
                    $(".remove-btngoods6").on("click",function () {
                        _this.parents(".level1-box").remove();
                        $(this).closest(".zm-dialog-box").remove();
                    })
                })//回调函数
        }else{
            _this.parents(".level1-box").remove();
        }
        return false;
    });
    //news全选
    var newscheck=false;
    $(".zm-newsCheak1").on("click",function () {

        if(!newscheck){
            $(this).addClass("fa-check");
            $(".zm-newsCheak2").addClass("fa-check")
            newscheck=!newscheck;
        }else {
            $(this).removeClass("fa-check");
            $(".zm-newsCheak2").removeClass("fa-check")
            newscheck=!newscheck;
        }
    })
    $(".zm-newsCheak2").on("click",function () {
        if($(this).hasClass("fa-check")){
            $(this).removeClass("fa-check");
        }else{
            $(this).addClass("fa-check");
        }
    })
    //blogger全选
    var bloggercheck=false;
    $(".zm-bloggerCheak1").on("click",function () {

        if(!bloggercheck){
            $(this).addClass("fa-check");
            $(".zm-bloggerCheak2").addClass("fa-check")
            bloggercheck=!bloggercheck;
        }else {
            $(this).removeClass("fa-check");
            $(".zm-bloggerCheak2").removeClass("fa-check")
            bloggercheck=!bloggercheck;
        }
    })
    $(".zm-bloggerCheak2").on("click",function () {
        if($(this).hasClass("fa-check")){
            $(this).removeClass("fa-check");
        }else{
            $(this).addClass("fa-check");
        }
    })

    $(".zm-addele").on("click",function () {
        if($(this).html()=="+"){
            $(this).html("-");
        }else{
            $(this).html("+");
        }
    })

//选择视频*******
    $(".zm-videoList").hover(function () {
        $(this).children(".listOpcity").css("opacity","1");
        $(this).children(".zm-videoList2").css("opacity","1");
        $(this).children(".zm-videoTime").css("opacity","0");
    },function () {
        $(this).children(".listOpcity").css("opacity","0");
        $(this).children(".zm-videoTime").css("opacity","1");
        if ($(this).children(".zm-videoList2").is(':checked')){
            $(this).children(".zm-videoList2").css("opacity","1");
        }else {
            $(this).children(".zm-videoList2").css("opacity","0");
        }
    })

    $(".zm-videoList3 .fa").hover(function () {
        $(this).parent().siblings(".fb").eq($(this).index()).css("display","block");
    },function () {
        $(this).parent().siblings(".fb").eq($(this).index()).css("display","none")
    })

    $(".pencil").on("click",function () {
        var _this=$(this).parent().siblings(".zm-videoList1").children(".zm-radioList1-1");
        var _that=$(this).parent().siblings(".zm-videoList1").children(".zm-radioList1-3").children(".zm-radioList1-2");
        var that=$(this).parent().siblings(".zm-videoList2");
        _this.css("opacity","1");
        //$(".zm-radioList1-1").css("opacity","1");
        if (_this.attr("value")==""){
            _this.attr("value",_that.text())
            that.css("opacity","0")
        }
    })

    //选择商品**************
    //    展开收缩二级类目
    $(".zm-addele").on("click",function () {
        $(this).parents().siblings(".goodsl2-box").slideToggle(400);
        //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
        $(this).toggleClass("active");
        return false;
    });

//    展开收缩三级类目
    $(".zm-radioWrap").on("click",".zm-middele",function () {
        $(this).parents().parents().siblings(".zm-goodsbox13").slideToggle(200);
        //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
        $(this).toggleClass("active");
        return false;
    });
    $(" .zm-radioWrap").on("click",".zm-middele",function () {
        if($(this).html()=="+"){
            $(this).html("-");
        }else{
            $(this).html("+");
        }
    })
    //增加子类目
    $(".zm-radioWrap").off("click",".tipSet-con-list-add1");
    $(".zm-radioWrap").on("click",".tipSet-con-list-add1",function () {
        var b=$('<div class="goodsl2-box"><div class="goodsl2"><div class="goods-border-l1 fl"></div>'
            +'<div class="goods-line"></div><div class="goods-con goods-con1"><span class="zm-middele">-</span>'
            +'<span class="level1-mipGoods"></span><a><input type="text" value="商品中类" readonly></a>'
            +'<div class="level1-tipSet"><div class="tipSet-con"><i class="tipSet-con-dot"></i><div class="tipSet-con-list tipSet-con-list-add2">'
            +'<i class="add"></i>添加子类目</div><div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
            +'<div class="tipSet-con-list tipSet-con-list-delete2"><i class="delete"></i>删除</div></div></div></div></div>'
            +'<div class="zm-goodsbox13"><div class="goods-border-l2 fl"></div><div class="goods-line2"></div><div class="goods-con3 level-con1">'
            +'<a><input type="text" value="商品小类" readonly></a><div class="level1-tipSet"><div class="tipSet-con"><i class="tipSet-con-dot"></i>'
            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div><div class="tipSet-con-list tipSet-con-list-delete3">'
            +'<i class="delete"></i>删除</div></div></div></div></div></div>');
        $(this).parents().parents().parents().parents(".level1-box").append(b);
    });
    $(".zm-radioWrap").off("click",".tipSet-con-list-add2");
    $(".zm-radioWrap").on("click",".tipSet-con-list-add2",function () {
        var b=$(' <div class="zm-goodsbox13"><div class="goods-border-l2 fl"></div><div class="goods-line2"></div>'
            +'<div class="goods-con3 level-con1"><a><input type="text" value="商品小类" readonly></a><div class="level1-tipSet">'
            +'<div class="tipSet-con"><i class="tipSet-con-dot"></i><div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
            +'<div class="tipSet-con-list tipSet-con-list-delete3">'
            +'<i class="delete"></i>删除 </div></div></div></div></div>');
        $(this).parents().parents().parents().parents(".goodsl2-box").append(b);

    });


    //    重命名
   // $(document).off("click",".tipSet-con-list-rename");
   //  $(document).on("click",".tipSet-con-list-rename",function () {
   //      var obj = $(this).parents(".level-con1").find("input[type=text]");
   //      var obr=$(this).parents(".goods-con1").find("input[type=text]");
   //      obj.attr("readonly",false);
   //      obj.focus();
   //      obr.attr("readonly",false);
   //      obr.focus();
   //  });
   //  $(document).off("blur",".level-con input[type=text]");
   //  $(document).on("blur",".level-con input[type=text]",function () {
   //      $(this).attr("readonly",true);
   //  });
   //  $(document).find(".zm-chiceInput-blur").each(function () {
   //      if($(this).val()==""){
   //          $(this).attr("readonly",false)
   //          console.log(11)
   //      }
   //  })


    //添加图片类目
    $(document).off("click",".btn-addPic-Liemu");
    $(document).on("click",".btn-addPic-Liemu",function () {
         var h=$('<div class="level1-box level1-sort">'
             +'<div class="level1 zm-chicePicimg">'
             +'<span class="level1-tipImg zm-addele">-</span>'
             +'<div class="level-con">'
             +'<span class="level1-tipPic"></span>'
             +'<a>'
             +'<input class="zm-chiceInput-blur" type="text" value="" readonly>'
             +'</a>'
             +'<div class="level1-tipSet">'
             +' <div class="tipSet-con">'
             +'<i class="tipSet-con-dot"></i>'
             +'<div class="tipSet-con-list tipSet-con-list-add newAdd-Or-delete">'
             +'<i class="add"></i>添加子类目</div>'
             +'<div class="tipSet-con-list tipSet-con-list-rename">'
             +'<i class="rename"></i>重命名</div>'
             +'<div class="tipSet-con-list tipSet-con-list-delete4 delete-Leimu">'
             +'<i class="delete"></i>删除</div>'
             +'</div>'
             +'</div>'
             +'</div>'
             +'</div>'
             +'<div class="level2-box">'
             +'</div>'
             +'</div>')
        $(".zm-pictrash").before(h);

        $(".level1-box").css("margin-top","5px")
    })

//    删除类目
    $(document).off("click",".tipSet-con-list-delete3");
    $(document).on("click",".tipSet-con-list-delete3",function () {
        $(this).parents(".zm-goodsbox13").remove();

    });
    $(document).off("click",".tipSet-con-list-delete2");
    $(document).on("click",".tipSet-con-list-delete2",function () {
        var _this=$(this);
        // if($(this).parents(".goodsl2").siblings(".zm-goodsbox13").length!=0){
        //     zmEditor.dialog.open(
        //         {
        //             title: '提示',
        //             content: '<div class="pointContent"><div class="fa fa-trash"></div><div class="pointText">该类目下有商品，请先移除商品。</div></div>',
        //             footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK remove-btngoods">确定删除</span></div>'),
        //             width:500,
        //             height: 250,
        //             movable:true,
        //             target: $('.zm-radioWrap')
        //         },
        //         function(){
        //             $(".remove-btngoods").on("click",function () {
        //                 _this.parents(".goodsl2-box").remove();
        //                 $(this).closest(".zm-dialog-box").hide();
        //             })
        //         })//回调函数
        // }else{
        //     _this.parents(".goodsl2-box").remove();
        //     $(this).parents(".zm-chicePicimg").remove();
        // }
        _this.closest(".zm-chicePicimg").remove();
    });
//goods全选
    var goodscheck=false;
    $(".zm-goodsCheak1").on("click",function () {

        if(!goodscheck){
            $(this).addClass("fa-check");
            $(".zm-goodsCheak2").addClass("fa-check")
            goodscheck=!goodscheck;
        }else {
            $(this).removeClass("fa-check");
            $(".zm-goodsCheak2").removeClass("fa-check")
            goodscheck=!goodscheck;
        }
    })
    $(".zm-goodsCheak2").on("click",function () {
        if($(this).hasClass("fa-check")){
            $(this).removeClass("fa-check");
        }else{
            $(this).addClass("fa-check");
        }
    })
    $(document).off("click",".tipSet-con div");
    $(document).on("click",".tipSet-con div",function () {
       $(this).parents(".tipSet-con").hide();
    })

    //*************选择商品


    //上传图片并传给后台（选择图片）
    $(document).off("change",".zm-picRtbtn .upLoad-picBtn input[type=file]");
    $(document).on("change",".zm-picRtbtn .upLoad-picBtn input[type=file]",function(){
        var fid=$(".zm-newsLeftop").find(".zm-choicePicBackgroundColor").parent(".zm-chicePicimg").attr("data-fid");
        var upfile=$('#file')[0].files[0];
        var form=new FormData();
        form.append("upfile",upfile);
        form.append("fFileId",fid);
        $.ajax({
            type:"post",
            url:"http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/uploadImage",
            processData:false,//对象数组转换为字符串
            contentType:false,//编码
            cache:false,//缓存
            data:form,
            async:true,
            success:function(data){
                //console.log(data)
                zmChoiceFile.getajaxListPic(fid);
            }
        })
    });
}
var zmChoiceFile={
    //删除图片及提示信息
    deleteTitle:function(e){
        var _this=$(e);
        var fFileId=_this.closest(".zm-radioMiddle").find(".zm-choicePicBackgroundColor").closest(".zm-chicePicimg").attr("data-fid");
        var flag =_this.attr("data-title");
        var b="";
        switch (flag){
            case "choicepic":
                if(fFileId=="0"){
                    b="从全部图片库中删除图片作品，该图片文件将被永久性删除，且无法恢复！你确认要删除吗？";
                }else{
                    b='从自定义类目中移除图片，该图片依然存储在“我的全部图片库”或“未分配类目图片”类目下';
                }

                break;
            case "album1":
                b='删除专辑，将会导致该类专辑项下的所有音频都将被自动分配到"单曲"!';
                break;
            case "news1":
                b='从自定义类目中移除新闻，该新闻依然存储在“我的全部新闻库”或“未分配类目新闻”类目下';
                break;
            case "blogger1":
                b="删除博客将导致该博客永久性删除，且无法恢复！你确认要删除吗？";
                break;
            case "picture1":
                b='从“全部图片库”或“未分配类目图片”类中删除图片将导致文件被转移到回收站，请定期清理回收站，你也可以在回收站中还原该图片';
                break;
            case "video1":
                b="删除视频将导致该视频永久性删除，且无法恢复！你确认要删除吗？";
                break;
            case "goods1":
                b='从自定义类目中移除商品，商品依然存储在“我的全部商品库”或“未分配类目商品”类目下';
                break;
            case "service1":
                b='从自定义类目中移除服务，服务依然存储在“我的全部服务库”或“未分配类目服务”类目下';
                break;
        }
        zmEditor.dialog.open(
            {
                title: '提示:',
                content: ' <div class="pointContent"><div class="fa fa-trash"></div><div class="pointText">'+b+'</div></div>',
                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK radioRemovebtn2">确 定</span></div>'),
                width: 500,
                height: 250,
                movable:true,
                // animate:'slide',
                target: $('.zm-radioWrap')
            },
            function(){
                $(".radioRemovebtn2").on("click",function () {
                    if(_this.attr("data-title")=="choicepic"){
                        var imageIds=_this.closest(".zm-radioList").attr("data-imgid")
                        zmChoiceFile.batchImageDelete(imageIds,fFileId)
                    }
                    _this.parents(".zm-radioList").remove();
                    _this.parents(".zm-videoList").remove();
                    _this.parents(".zm-newsList").remove();
                    _this.parents(".zm-bloggerList").remove();
                    $(this).parent().parent().parent().css("display","none");
                })
            })//回调函数
    },
    //选择添加到分类
    choiceAndd:function (e) {
        var _this=$(e)
        var flag = _this.attr("choiceAdd");
        //console.log(flag)
        var c='',b='';
        switch (flag){
            case "radio":
                b='<div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="copy-addele">-</span><span class="radio-tipImg"></span>'
                    +'<span class="news-co">专辑大类</span></div><div class="zm-newsCopyToAlbumBox2"><div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div><div class="news-level"></div>'
                    +'<div class="news-content"><span class="zm-newsCheak5 fa"></span><span>专辑小类</span></div></div><div class="zm-newsCopyToAlbumBox21">'
                    +'<div class="news-ver"></div><div class="news-level"></div><div class="news-content"><span class="zm-newsCheak5 fa"></span><span>专辑小类</span>'
                    +'</div></div><div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div><div class="news-level"></div><div class="news-content">'
                    +'<span class="zm-newsCheak5 fa"></span><span>专辑小类</span></div></div><div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div>'
                    +'<div class="news-level"></div><div class="news-content"><span class="zm-newsCheak5 fa"></span><span>专辑小类</span></div></div>'
                    +'<div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div><div class="news-level"></div><div class="news-content">'
                    +'<span class="zm-newsCheak5 fa"></span><span>专辑小类</span></div></div></div></div>';
                c='复制到专辑';
                break;
            case "news":
                b='<div class="zm-newsCopyToAlbumBox"> <div class="zm-newsCopyToAlbumBox1"><span class="zm-newsCheak5 fa"></span><span class="copy-tipImg"></span>'
                    +'<span class="news-co">新闻大类</span></div></div><div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1">'
                    +'<span class="zm-newsCheak5 fa"></span><span class="copy-tipImg"></span><span class="news-co">新闻大类</span></div></div>'
                    +'<div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="copy-addele">-</span><span class="copy-tipImg"></span>'
                    +'<span class="news-co">新闻大类</span></div><div class="zm-newsCopyToAlbumBox2"><div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div>'
                    +'<div class="news-level"></div><div class="news-content"><span class="zm-newsCheak5 fa"></span><span style="margin-left: 5px">新闻小类</span></div></div>'
                    +'<div class="zm-newsCopyToAlbumBox21"><div class="news-ver"></div><div class="news-level"></div><div class="news-content">'
                    +'<span class="zm-newsCheak5 fa"></span><span style="margin-left: 5px">新闻小类</span></div></div></div></div>',
                    c='复制到新闻';
                break;
            case "picture":
                $.ajax({
                    type:"post",
                    url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/allCategory',
                    dataType: "json",
                    success:function (e) {

                        var h=e.data;
                        //console.log(h)
                        $.each(h,function (k, value) {
                            var y;
                            var d='<div class="zm-newsCopyToAlbumBox1 pic-box1" data-fid="'+h[k].fId+'">'
                                + '<span class="copy-addele">-</span>'
                                +'<span class="zm-newsCheak5 fa"></span>'
                                + '<span class="copy-pic"></span>'
                                +'<span class="news-co">'+h[k].fName+'</span>'
                                + '</div>'
                            //console.log(h[k].childrenList.length)
                            if(h[k].childrenList.length>0){
                                var g='';
                                $.each(value.childrenList,function(i,o){
                                     g+='<div class="zm-newsCopyToAlbumBox21 pic-box1" data-fid="'+value.childrenList[i].fId+'">'
                                        +'<div class="news-ver"></div>'
                                        + '<div class="news-level"></div>'
                                        + '<div class="news-content">'
                                        +'<span class="zm-newsCheak5 fa"></span>'
                                        + '<span style="margin-left: 5px">'+value.childrenList[i].fName+'</span>'
                                        + '</div>'
                                        + '</div>'
                                })
                                var f='<div class="zm-newsCopyToAlbumBox2">'+g+'</div>';
                                y='<div class="zm-newsCopyToAlbumBox">'+d+f+'</div>'
                            }else{
                                y='<div class="level1-box level1-sort">'+d+'<div class="level2-box"></div></div>'
                            }
                            b+=y;

                        })
                        $(".zm-radioCopyToAlbumBoot12").append(b);
                        $(".pic-box1").each(function () {
                            if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                                $(this).find(".copy-addele").remove();
                            }
                        })
                        $(" .copy-addele").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".zm-newsCopyToAlbumBox2").slideToggle(400);
                            //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
                            $(this).toggleClass("active");
                            return false;
                        })
                        // $(" .copy-addele1").on("click",function () {
                        //     if($(this).html()=="+"){
                        //         $(this).html("-");
                        //     }else{
                        //         $(this).html("+");
                        //     }
                        // })

                        $(".zm-newsCheak5").on("click",function () {
                            //console.log("111")
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{

                                $(this).addClass("fa-check")
                            }
                        })
                        // $(".copy-addele").on("click",function () {
                        //     $(this).parents().siblings(".zm-newsCopyToAlbumBox2").slideToggle(400);
                        //     //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
                        //     $(this).toggleClass("active");
                        //     return false;
                        // });
                        var imgLIscheak=[];
                       // console.log($(".zm-radioMiddleRight").find(".zm-radioList2").attr("checked",true))
                        $(".zm-radioMiddleRight").find(".zm-radioList2").each(function () {
                            //console.log(value.checked())
                            var _this=$(this);
                            if(_this.is(':checked')){
                                imgLIscheak.push(_this.closest(".zm-radioList").attr("data-imgid"))
                            }

                        })


                        var cheakedboxList=[];
                        var imageIds=imgLIscheak.join(",")

                       // console.log(imageIds)

                        $(".albumbtn2").on("click",function () {
                            $(".zm-radioCopyToAlbumBoot1").find(".pic-box1").each(function () {
                                var _this=$(this);
                                if(_this.find(".zm-newsCheak5").hasClass("fa-check")){
                                    cheakedboxList.push(_this.attr("data-fid"))
                                }
                            })
                            //console.log(cheakedboxList)
                            var categoryIds=cheakedboxList.join(",")
                            //console.log(categoryIds)
                            zmChoiceFile.toMOvePic(imageIds,categoryIds)
                        })



                        //console.log("上传成功")
                    }
                })
                    c='复制到图片';
                break;
            case "goods":
                b='<div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="zm-newsCheak5 fa"></span><span class="goods-tipImg"></span>'
                    +'<span class="news-co">商品大类</span></div></div><div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="zm-newsCheak5 fa"></span>'
                    +'<span class="goods-tipImg"></span><span class="news-co">商品大类</span></div></div><div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="copy-addele">-</span>'
                    +'<span class="goods-tipImg"></span><span class="news-co">商品大类</span></div><div class="zm-newsCopyToAlbumBox2"><div class="zm-newsCopyToAlbumBox21">'
                    +'<div class="news-ver"></div><div class="news-level"></div><div class="news-content"><span class="copy-addele1">-</span><span class="goods-tipImg"></span><span>商品中类</span>'
                    +'</div></div><div class="zm-newsCopyToAlbumBox3"><div class="zm-newsCopyToAlbumBox31"><div class="news-ver"></div><div class="news-level"></div>'
                    +'<div class="news-content"><span class="zm-newsCheak5 fa"></span><span>商品小类</span></div></div></div></div></div>',
                    c='复制到商品';
                break;
            case "service":
                b='<div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="zm-newsCheak5 fa"></span><span class="service-tipImg"></span>'
                    +'<span class="news-co">服务大类</span></div></div><div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="zm-newsCheak5 fa"></span>'
                    +'<span class="service-tipImg"></span><span class="news-co">服务大类</span></div></div><div class="zm-newsCopyToAlbumBox"><div class="zm-newsCopyToAlbumBox1"><span class="copy-addele">-</span>'
                    +'<span class="service-tipImg"></span><span class="news-co">服务大类</span></div><div class="zm-newsCopyToAlbumBox2"><div class="zm-newsCopyToAlbumBox21">'
                    +'<div class="news-ver"></div><div class="news-level"></div><div class="news-content"><span class="copy-addele1">-</span><span class="service-tipImg"></span><span>服务中类</span>'
                    +'</div></div><div class="zm-newsCopyToAlbumBox3"><div class="zm-newsCopyToAlbumBox31"><div class="news-ver"></div><div class="news-level"></div>'
                    +'<div class="news-content"><span class="zm-newsCheak5 fa"></span><span>服务小类</span></div></div></div></div></div>',
                    c='复制到服务';
                break;
        }
        zmEditor.dialog.open(
            {
                title: c,
                content: '<div class="zm-radioCopyToAlbumBoot"><div class="zm-radioCopyToAlbumBoot1"><div class="zm-radioCopyToAlbumBoot12">'+b+'</div></div><div class="zm-radioAlbumbtn">'
                +'<div class="albumbtn1 zm-dialog-btnCancel">取消</div><div class="albumbtn2">保存</div></div></div>',
                width: 540,
                height: 450,
                movable:true,
                // animate:'slide',
                target: $('.zm-radioWrap')
            },
            function(){
                $.fn.radio()

                $(".pen-min").click(function() {
                    $(".zm-radioCopyToAlbumBox2").slideToggle("100");
                    $(this).toggleClass("active");
                    $(this).addClass("fa-plus")
                    return false;
                });

                var ba=true;
                $(".pen-min").on("click",function () {

                    if(ba){
                        $(this).addClass("fa-plus");
                        $(this).removeClass("fa-minus");
                    }else{
                        $(this).addClass("fa-minus");
                        $(this).removeClass("fa-plus");
                    }
                    ba=!ba;
                })

                //    展开收缩二级类目
                $(".copy-addele").on("click",function () {
                    $(this).parents().siblings(".zm-newsCopyToAlbumBox2").slideToggle(400);
                    //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
                    $(this).toggleClass("active");
                    return false;
                });

                //    展开收缩三级类目
                $(".copy-addele1").on("click",function () {
                    console.log("111")
                    $(this).parents().siblings(".zm-newsCopyToAlbumBox3").slideToggle(200);
                    //$(this).parents(".level1-box").find(".level2-box").slideToggle(200);
                    $(this).toggleClass("active");
                    return false;
                });
                $(" .copy-addele").on("click",function () {
                    if($(this).html()=="+"){
                        $(this).html("-");
                    }else{
                        $(this).html("+");
                    }
                })
                $(" .copy-addele1").on("click",function () {
                    if($(this).html()=="+"){
                        $(this).html("-");
                    }else{
                        $(this).html("+");
                    }
                })

                $(".zm-newsCheak5").on("click",function () {
                    console.log("111")
                    if($(this).hasClass("fa-check")){
                        $(this).removeClass("fa-check")
                    }else{

                        $(this).addClass("fa-check")
                    }
                })


            })//回调函数
    },
    //添加新专辑
    addalbum:function () {
        zmEditor.dialog.open(
            {
                title: '添加新专辑',
                content: ' <div class="radioAddAlbumBox"><div class="radioAddAlbumBox1"><div class="radioAddAlbumBoxL"><div class="radioAddAlbumL1">音频编号:</div><div class="radioAddAlbumL2"><span>*</span>专辑名称:</div>'
                +'<div class="radioAddAlbumL3"><span>*</span>专辑下载金额:</div><div class="radioAddAlbumL4"><span>*</span>专辑图像:</div></div><div class="radioAddAlbumBoxR"><div class="radioAddblumR1">'
                +'<input type="text"></div><div class="radioAddblumR2"><input type="text"></div><div class="radioAddblumR3"><input type="text"><span style="margin-left: 10px">人民币</span></div><div class="radioAddblumR4">'
                +'<div class="addblumRimg"><img id="addblumRimgPic" src="imgs/456.png" alt=""></div><input class="addblumfile" type="file"><div class="addblumRimgbtn1">添加图片</div><div class="addblumRimgbtn2">删除图片</div></div>'
                +'</div></div><div class="radioAddAlbumBox2"><div class="addblumRimgbtn3 zm-dialog-btnCancel">取消</div><div class="addblumRimgbtn4">保存</div></div></div>',
                // footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK radioRemovebtn2">确 定</span></div>'),
                width: 740,
                height: 450,
                movable:true,
                // animate:'slide',
                target: $('.zm-radioWrap')
            },
            function(){
                //上传图片
                $(".addblumfile").uploadPreview({ Img: "addblumRimgPic", Width: 130, Height: 130 });
                $(".addblumRimgbtn2").on("click",function () {
                    $("#addblumRimgPic").attr("src","imgs/456.png")
                })

            })//回调函数
    },
    //批量删除
    deleteallradio:function (e) {
        var _this=$(e);
        var flag =_this.attr("delete-all");
        var b="";
        if(_this.parents(".zm-radioMiddleRight").find("input:checkbox[name=text]:checked").length==0&&_this.parents(".zm-radioMiddle1").find("input:checkbox[name=text]:checked").length==0
            &&_this.parents(".zm-radioMiddleRight").find(".fa-check").length==0&&_this.parents(".zm-radioMiddle1").find(".fa-check").length==0&&_this.parents(".zm-goodsMiddleRight").find(".fa-check").length==0){
            b="请选择你要删除的文件！！"
        }else{
            switch (flag){
                case "radio1":
                    b="从全部音频库中删除音频作品，该音频文件将被永久性删除，且无法恢复！你确认要删除吗？";
                    break;
                case "album1":
                    b='删除专辑，将会导致该类专辑项下的所有音频都将被自动分配到"单曲"!';
                    break;
                case "news1":
                    b='从自定义类目中移除新闻，该新闻依然存储在“我的全部新闻库”或“未分配类目新闻”类目下';
                    break;
                case "blogger1":
                    b="删除博客将导致该博客永久性删除，且无法恢复！你确认要删除吗？";
                    break;
                case "picture1":
                    b='从“全部图片库”或“未分配类目图片”类中删除图片将导致文件被转移到回收站，请定期清理回收站，你也可以在回收站中还原该图片';
                    break;
                case "video1":
                    b="删除视频将导致该视频永久性删除，且无法恢复！你确认要删除吗？";
                    break;
                case "goods1":
                    b='从自定义类目中移除商品，商品依然存储在“我的全部商品库”或“未分配类目商品”类目下';
                    break;
                case "service1":
                    b='从自定义类目中移除服务，服务依然存储在“我的全部服务库”或“未分配类目服务”类目下';
                    break;
            }
        }


        zmEditor.dialog.open(
            {
                title: '提示:',
                content: ' <div class="pointContent"><div class="fa fa-trash"></div><div class="pointText">'+b+'</div></div>',
                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span><span class="zm-dialog-btnOK radio-removebtn">确 定</span></div>'),
                width: 500,
                height: 250,
                movable:true,
                target: $('.zm-radioWrap')
            },
            function(){
                $(".radio-removebtn").on("click",function () {
                    if(b=="请选择你要删除的文件！！"){
                        $(this).closest(".zm-dialog-box").hide();
                    }else{
                        if(_this.attr("delete-all")=="picture1"){
                            var imgLIscheak=[];
                            // console.log($(".zm-radioMiddleRight").find(".zm-radioList2").attr("checked",true))
                            $(".zm-radioMiddleRight").find(".zm-radioList2").each(function () {
                                //console.log(value.checked())
                                var _that=$(this);
                                if(_that.is(':checked')){
                                    imgLIscheak.push(_that.closest(".zm-radioList").attr("data-imgid"))
                                }
                            })
                            var imageIds=imgLIscheak.join(",")
                            var fFileId=_this.closest(".zm-radioMiddle").find(".zm-choicePicBackgroundColor").closest(".zm-chicePicimg").attr("data-fid");
                            zmChoiceFile.batchImageDelete(imageIds,fFileId)

                        }
                        $(this).closest(".zm-dialog-box").hide();
                        _this.parents(".zm-radioMiddleRight").find("input:checkbox[name=text]:checked").parents(".zm-radioList").remove();
                    }
                })


            })//回调函数
    },
    //选择图片放大轮播
    toChangerBig:function (e) {
        var e=$(e);
        var _allList=e.closest(".zm-radioSpli").find(".zm-radioList");
        var b='';
        _allList.each(function(index) {
            var _this= _allList.eq(index).find("img").prop("src")
            b+='<li> <img src='+_this+'></li>'

        })
        zmEditor.dialog.open(
            {
                title: '图片放大轮播',
                content: ' <div class="zm-allpicTo"><div class="zm-wrapimg"><ul  class="zm-imgBigbackground">'+b+'</ul>'
                +'<div class="zm-imgleftBtn"><</div><div class="zm-imgrightBtn">></div></div>'
                +'</div>',
                footer: $('<div class="zm-wrapimgBottom"><span>文件名:</span><span>Dsc_0129.png</span><br /><span>图片尺寸:</span>'
                    +'<span>1216 x 1060</span></div>'),
                width: 530,
                height:450,
                movable:true,
                target: $('.zm-radioWrap')
            },
            function(){

                $(".zm-allpicTo").hover(function () {
                    $(".zm-wrapimg div").show();
                },function () {
                    $(".zm-wrapimg div").hide();
                })
                var a=e.closest(".zm-radioList").index();
                $(".zm-imgBigbackground").css("left",-510*a+"px");
                $(".zm-imgleftBtn").on("click",function () {

                    if(a==0){
                        a=_allList.length;
                    }
                    a--;
                    $(".zm-imgBigbackground").animate({"left":-510*a+"px"},"200")
                    //$(".zm-imgBigbackground").css("left",-510*a+"px");
                })
                //$(".zm-imgBigbackground").css("left",-510*a+"px");
                $(".zm-imgrightBtn").on("click",function () {
                    a++;
                    if(a==_allList.length){
                        a=0;
                    }
                    $(".zm-imgBigbackground").animate({"left":-510*a+"px"},"200");
                })


            })//回调函数
    },
    //选择并添加按钮的函数
    choiceAndaddPic:function (e) {
        var _this=$(e);
        var a=[];
        var c=_this.parents(".zm-radioMiddleRight").find("input[name='text']:checked").siblings(".zm-radioListimg");
        if(c.length==1){
            a.push(c.attr("src"))
        }else{
            for(var i=0;i<c.length;i++){
               a.push($(c[i]).attr("src"));
            }
        }
        return a;

    },
    //获取所有图片列表的路由
    getajaxListPic:function (obj) {
        $.ajax({
            type: "post",
            url:'http://192.168.0.132:8980/zm_business_basic_webapp/imageSource/queryImageByCategory',
            dataType: "json",
            data: {'fId' : obj},
            success: function(e){
                var a=e.data;
                var listHtml='';
               $.each(a,function (i,value) {
                    listHtml +=' <li class="zm-radioList" data-imgid="'+a[i]._id+'"  data-FileId="'+a[i].fFileId+'"><img class="zm-radioListimg" src="'+a[i].fPath+'" alt=""><div class="zm-radioList1 listOpcity">'
                        +'<input class="zm-radioList1-1" value="" type="text" onchange="zmFun.inputOnchange(this)" onblur="zmFun.inputOnblur(this)"><div class="zm-radioList1-3">'
                        +'<span class="zm-radioList1-2">'+a[i].fName+'</span></div></div><input class="zm-radioList2" type="checkbox" name="text"><div class="fb zm-picblow">'
                        +'<div class="zm-radiodele1">放大图片</div><div class="zm-radiodele2"></div></div><div class="fb zm-picalter"><div class="zm-radioalter1">修改图片名称</div>'
                        +'<div class="zm-radioalter2"></div></div><div class="fb zm-picdele"><div class="zm-radiodele1">删除图片</div><div class="zm-radiodele2"></div></div>'
                        +'<div class="fb zm-picdown"><div class="zm-radiodown1">下载到本地</div><div class="zm-radiodown2"></div></div><div class="fb zm-recoverdown"><div class="zm-radiodown1">恢复该图片</div>'
                        +'<div class="zm-radiodown2"></div></div><div class="zm-radioList3 listOpcity"><span class="fa fa-search" onclick="zmChoiceFile.toChangerBig(this)"></span>'
                        +'<span class="fa fa-pencil pencil"></span><span class="fa fa-trash trash" onclick="zmChoiceFile.deleteTitle(this)" data-title="choicepic"></span><span class="fa fa-download download"></span>'
                        +'<span style="margin-left: 33px" class="fa fa-repeat zm-repeat"></span></div></li>'
               })
                $(".zm-radioSpli").html($(listHtml))

            }
        })
    },
    //删除类目路由
    deleteLimu:function (fId) {
        console.log(fId)
        $.ajax({
            type:"post",
            url:'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/deleteCategory',
            dataType: "json",
            data : {'fId':fId,'confirm':'ok'},
            success:function (e) {
                console.log("删除")
            }
        })
    },
    //添加新的类目路由
    newAddRevise:function (fId,fName,fParentId,cb) {
        $.ajax({
            type: "post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/saveCategory',
            dataType: "json",
            data : {'fId':fId,'fName':fName,'fParentId':fParentId},
            success: function (e) {
                //console.log("新增或修改成功")
                var data=e.data;
                if(cb){cb(data);}
            }
        })
    },
    //上传图片的路由
    upLoadPicture:function (fid,formData) {
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/uploadImage',
            dataType: "json",
            cache: false,
            data: {'fFileId':fid,'upfile':formData},
            processData: false,
            contentType: false,
            success:function (e) {
                //console.log("上传成功")
            }
        })
    },
    //移动到分类路由
    toMOvePic:function (imageIds,categoryIds) {
       // console.log(imageIds,categoryIds)
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/batchMoveImage',
            dataType: "json",
            data: {'_ids':imageIds,'fFileId':categoryIds},
            success:function (e) {
            }
        })
    },
    //修改图片名称路由
    imgTochangeName:function (_id,fName) {
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/imageRename',
            dataType: "json",
            data: {'_id':_id,'fName':fName},
            success:function (e) {
                console.log("he")
            }
        })
    },
    //批量删除图片的路由
    batchImageDelete:function (imgLIscheak,fFileId) {
        //console.log(imgLIscheak,fFileId)
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/batchImageDelete',
            dataType: "json",
            data: {'_ids':imgLIscheak,'fFileId':fFileId},
            success:function (e) {
                //console.log("he")
            }
        })
    },
    //清空回收站路由
    emptyTrash:function () {
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/emptyTrash',
            dataType: "json",
            success:function (e) {
                //console.log("he")
            }
        })
    },
    //批量还原的路由
    batchRestore:function (_ids) {
        $.ajax({
            type:"post",
            url: 'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/batchRestore',
            dataType: "json",
            data: {'_ids':_ids},
            success:function (e) {
                zmChoiceFile.getajaxListPic(-1)
            }
        })
    },
    getAllCategory:function () {
        $.ajax({
            type: "post",
            url:'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/allCategory',
            dataType: "json",
            success: function(e){
                var b=e.data;
                var c='';
                $.each(b, function(k,value) {
                    var h;
                    var d='<div class="level1 zm-chicePicimg" data-fid="'+b[k].fId+'" data-fName="'+b[k].fName+'">'
                        +'<span class="level1-tipImg zm-addele">-</span>'
                        +'<div class="level-con">'
                        +'<span class="level1-tipPic"></span>'
                        +'<a>'
                        +'<input class="zm-chiceInput-blur" type="text" value="'+b[k].fName+'" readonly>'
                        +'</a>'
                        +'<div class="level1-tipSet">'
                        +'<div class="tipSet-con">'
                        +'<i class="tipSet-con-dot"></i>'
                        +'<div class="tipSet-con-list tipSet-con-list-add newAdd-Or-delete">'
                        +'<i class="add"></i>'
                        +' 添加子类目'
                        +'</div>'
                        +'<div class="tipSet-con-list tipSet-con-list-rename">'
                        +'<i class="rename"></i>'
                        +'重命名'
                        +'</div>'
                        +'<div class="tipSet-con-list tipSet-con-list-delete4 delete-Leimu">'
                        +'<i class="delete"></i>'
                        +'删除'
                        +'</div>'
                        +'</div>'
                        +'</div>'
                        +'</div>'
                        +'</div>'  ;
                    if(b[k].childrenList.length>0){
                        var e='';
                        $.each(value.childrenList,function(i,o){
                            e+='<div class="level2 zm-chicePicimg" data-fid="'+value.childrenList[i].fId+'" data-fParentId="'+value.childrenList[i].fParentId+'" data-fName="'+value.childrenList[i].fName+'">'
                                +'<div class="level-border-l1 fl"></div>'
                                +'<div class="level-line"></div>'
                                +'<div class="level-con level-con1">'
                                +'<a>'
                                +' <input class="zm-chiceInput-blur" type="text" value="'+value.childrenList[i].fName+'" readonly>'
                                +'</a>'
                                +'<div class="level1-tipSet">'
                                +' <div class="tipSet-con">'
                                +'<i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename">'
                                +'<i class="rename"></i>'
                                +'重命名'
                                +'</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-delete2 delete-Leimu">'
                                +'<i class="delete"></i>'
                                +'删除'
                                +'</div>'
                                +'</div>'
                                +'</div>'
                                +'</div>'
                                +'</div>';
                        })
                        var f='<div class="level2-box">'+e+'</div>';
                        h='<div class="level1-box level1-sort">'+d+f+'</div>'
                    }else{
                        h='<div class="level1-box level1-sort">'+d+'<div class="level2-box"></div></div>'
                    }
                    c+=h;

                });
                var ch='<div class="zm-newsLeftop"><div class="imgCategory-level-tit"><span class="left-level-tit-pic margin-l20">图片类目</span></div>'+c+' <div class="zm-pictrash zm-chicePicimg" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                    +'<span style="font-weight: bolder">回收站</span></div><div style="width: 200px;height: 120px"></div>'
                // $(".zm-pictrash").before(c);
                $(".zm-newsLeftop").html(ch)
                //点击类目添加背景样式
                $(".level1").each(function () {
                    if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                        $(this).find(".zm-addele").remove();
                        $(this).find(".level1-tipSet").remove();
                        if($(this).attr("data-fid")=="0"){
                            $(this).find(".zm-chiceInput-blur").addClass("zm-choicePicBackgroundColor");
                            $(this).find(".level-con").addClass("zm-choicePicBackgroundColor")
                        }

                    }
                })
            }
        })
    },
    getuploadImage:function (form,fid) {
        $.ajax({
            type:"post",
            url:"http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/uploadImage",
            processData:false,//对象数组转换为字符串
            contentType:false,//编码
            cache:false,//缓存
            data:form,
            async:true,
            success:function(data){
                //console.log(data)
                zmChoiceRadio.getAjaxPictureList(fid);
            }
        })
    },
    //获取字符串长度（汉字算两个字符，字母数字算一个）
    getByteLen:function (val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    },
    getRightVideoLi:function (g) {
        var b='';
        // var g=ele.find(".zm-videoBox").attr("data-type");
        switch (g){
            case "1":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap"><div class="zm-videop-time zm-videop-timeRb">02:28</div>'
                    +'<a class="zm-videoTextWrap" data-type="2"></a><a class="zm-videoBlackcover" title="" ><span class="zm-videobtn-setplace1 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'  <img class="zm-videoQuic" src="//r1.ykimg.com/0515000058F4F053ADB91206D400962B"></div></div>'
                    +' <ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                    +' <li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></li>';
                break;
            case "2":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap"><div class="zm-videop-time zm-videop-timeRt">02:28</div>'
                    +'<a class="zm-videoTextWrap" data-type="2"></a><a class="zm-videoBlackcover" title="" ><span class="zm-videobtn-setplace1 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'  <img class="zm-videoQuic" src="//r1.ykimg.com/05150000590DF466AD9E0705060C5CC4"></div></div>'
                    +' <ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                    +' <li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></li>';
                break;
            case "3":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeLt1">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<ul class="zm-videoInfo-list1"><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></a>'
                    +'<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 fa fa-play zm-video-btn video-playBtn-style1"></span>'
                    +'</a><img class="zm-videoQuic" src="//r1.ykimg.com/0515000057A07A7567BC3D05050A8239"></div></div></li>'
                break;
            case "4":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><ul class="zm-videoInfo-list2"><li class="zm-video-title zm-videoInfo-text">这是新闻的标题<li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li></ul>'
                    +'<div class="zm-videoInfo-comment1 zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></a>'
                    + '<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4"></div></div></li>'
                break;
            case "5":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb" ><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoTextWrap" data-type="2"></a><a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 fa zm-video-btn zm-videobtn-text">开始播放</span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058EF4551ADBA1F209F014291"></div></div>'
                    +'<ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></li>'
                break;
            case "6":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoTextWrap" data-type="2"></a>'
                    +'<a class="zm-videoBlackcover" title="" ><span class="zm-videobtn-setplace2 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058DA3764ADBAC3814E03DC40"></div></div><ul class="zm-videoInfo-list">'
                    +'<li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></li>'
                break;
            case "7":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRt">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-videoInfo-list3"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                    +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                    +'<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/05150000574BF54667BC3C24CF04FD2B"></div></div></li>'
                break;
            case "8":
                b='<li class="zm-videoPack"><div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-videoInfo-list4"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                    +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                    +'<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace2 fa fa-play zm-video-btn video-playBtn-style1"></span></a>'
                    +'<img class="zm-videoQuic" src="https://r1.ykimg.com/0541040858ECE81C6F0E650386F84287"></div></div></li>'
                break;
        }
        return b;
    }

}



























