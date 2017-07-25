/**
 * Created by guixuefeng on 2017/4/24.
 */
$.fn.zmTree=function(e){
    var _this = $(this);
    var first = e;
    var len1 = first.length;
    var firstHtml="";
    var toggleHtml=""
    var toggleHtml1='<span class="zm-tree-children-toggle" onclick="zmTree.childrenToggle(this)">+</span>';
    var toggleHtml2=""
    for(var i=0;i<len1;i++){
        var second = first[i].childNodes;
        var name1=first[i].name;
        var id1=first[i].id;
        var len2= second.length;
        var secondHtml="";
        for(var j=0;j<len2;j++){
            var third=second[j].childNodes;
            var name2=second[j].name;
            var id2=second[j].id;
            var len3=third.length;
            var thirdHtml="";
            for(var k=0;k<len3;k++){
                var name3=third[k].name;
                var id3=third[k].id;
                thirdHtml+='<li data-zm-type="third" data-zm-id="'+id3+'">'
                    +'<p class="zm-tree-node">'
                    +'<input value="'+name3+'" onfocus="zmTree.inputOnfocus(this)" onblur="zmTree.inputOnblur(this)"/>'
                    +'<span class="zm-tree-node-option">'
                    +'<a onclick="zmTree.addBrotherNode(this)">+同级</a>'
                    +'<a onclick="zmTree.deleteNode(this)">删除</a>'
                    +'</span>'
                    +'<span class="zm-tree-node-move">移</span>'
                    +'</p>'
                    +'</li>'
            }
            if(len3==0){
                toggleHtml=toggleHtml2;
            }
            else{
                toggleHtml=toggleHtml1;
            }
            secondHtml+='<li data-zm-type="second" data-zm-id="'+id2+'">'
                +'<p class="zm-tree-node">'
                +''+toggleHtml+''
                +'<input value="'+name2+'" onfocus="zmTree.inputOnfocus(this)" onblur="zmTree.inputOnblur(this)"/>'
                +'<span class="zm-tree-node-option">'
                +'<a onclick="zmTree.addChildrenNode(this)">+子级</a>'
                +'<a onclick="zmTree.addBrotherNode(this)">+同级</a>'
                +'<a onclick="zmTree.deleteNode(this)">删除</a>'
                +'</span>'
                +'<span class="zm-tree-node-move">移</span>'
                +'</p>'
                +'<ul>'+thirdHtml+'</ul>'
                +'</li>'
        }
        if(len2==0){
            toggleHtml=toggleHtml2;
        }
        else{
            toggleHtml=toggleHtml1;
        }
        firstHtml+='<li data-zm-type="first" data-zm-id="'+id1+'">'
            +'<p class="zm-tree-node">'
            +''+toggleHtml+''
            +'<input value="'+name1+'" onfocus="zmTree.inputOnfocus(this)" onblur="zmTree.inputOnblur(this)"/>'
            +'<span class="zm-tree-node-option">'
            +'<a onclick="zmTree.addChildrenNode(this)">+子级</a>'
            +'<a onclick="zmTree.addBrotherNode(this)">+同级</a>'
            +'<a onclick="zmTree.deleteNode(this)">删除</a>'
            +'</span>'
            +'<span class="zm-tree-node-move">移</span>'
            +'</p>'
            +'<ul>'+secondHtml+'</ul>'
            +'</li>'
    }
    var html='<div class="zm-treeBox">'
        +'<div class="zm-tree">'
        +'<div class="zm-tree-prompt"><span class="zm-tree-prompt-title">小提示：</span>子分类只能在当前父分类中拖动改变排序！'
        +'<span class="zm-tree-prompt-remove" onclick="zmTree.removePrompt()">×</span>'
        +'</div>'
        +'<button class="zm-tree-save" onclick="zmTree.saveTree(this)">保 存</button>'
        +'<button class="zm-tree-cancel" onclick="zmTree.resetTree(this)">取 消</button>'
        +'<ul>'+firstHtml+'</ul>'
        +'</div></div>';
    _this.html(html);
};
var zmTree={
    removePrompt:function(){
        $(".zm-tree-prompt").fadeOut()
    },
    inputOnfocus:function(e){
        var _this = $(e);
        _this.css("background","#fff")
    },
    inputOnblur:function(e){
        var _this = $(e);
        _this.css("background","#f5f5f5")
    },
    deleteNode:function(e){
        var thisNode = $(e).closest("li");
        thisNode.remove()
    },
    childrenToggle:function(e){
        var _this = $(e)
        var thisNode = _this.closest("li");
        var html = _this.html();
        if(html=="+"){
            _this.html("-")
        }
        else{
            _this.html("+")
        }
        thisNode.children("ul").slideToggle()

    },
    addChildrenNode:function(e){
        var thisNode = $(e).closest("li");
        var type = thisNode.attr("data-zm-type");
        var newNodeType="";
        var addChildrenFn="";
        var toggleChildrenFn="";
        var toggleChildrenLen = thisNode.children("p").find(".zm-tree-children-toggle").length;
        if(toggleChildrenLen==0){
            thisNode.children("p").children("input").before('<span class="zm-tree-children-toggle" onclick="zmTree.childrenToggle(this)">+</span>')
        }
        switch(type){
            case "first":
                newNodeType="second";
                addChildrenFn='<a onclick="zmTree.addChildrenNode(this)">+子级</a>'
                toggleChildrenFn=''
                break;
            case "second":
                newNodeType="third";
                addChildrenFn='';
                toggleChildrenFn=''
                break;
            case "third":
                toggleChildrenFn=''
                break;
            default:
                break;
        }
        var newNode='<li data-zm-type="'+newNodeType+'">'
            +'<p class="zm-tree-node">'
            +''+toggleChildrenFn+''
            +'<input value="请输入分类名称" onfocus="zmTree.inputOnfocus(this)" onblur="zmTree.inputOnblur(this)"/>'
            +'<span class="zm-tree-node-option">'
            +''+addChildrenFn+''
            +'<a onclick="zmTree.addBrotherNode(this)">+同级</a>'
            +'<a onclick="zmTree.deleteNode(this)">删除</a>'
            +'</span>'
            +'<span class="zm-tree-node-move">移</span>'
            +'</p>'
            +'<ul></ul>'
            +'</li>'
        thisNode.children("ul").append(newNode);
        thisNode.children("ul").slideDown()
    },
    addBrotherNode:function(e){
        var thisNode = $(e).closest("li");
        var type = thisNode.attr("data-zm-type");
        var newNodeType="";
        var addChildrenFn="";
        switch(type){
            case "first":
                newNodeType="first";
                addChildrenFn='<a onclick="zmTree.addChildrenNode(this)">+子级</a>'
                break;
            case "second":
                newNodeType="second";
                addChildrenFn='<a onclick="zmTree.addChildrenNode(this)">+子级</a>'
                break;
            case "third":
                newNodeType="third";
                break;
            default:
                break;
        }
        var newNode='<li data-zm-type="'+newNodeType+'">'
            +'<p class="zm-tree-node">'
            +'<input value="请输入分类名称" onfocus="zmTree.inputOnfocus(this)" onblur="zmTree.inputOnblur(this)"/>'
            +'<span class="zm-tree-node-option">'
            +''+addChildrenFn+''
            +'<a onclick="zmTree.addBrotherNode(this)">+同级</a>'
            +'<a onclick="zmTree.deleteNode(this)">删除</a>'
            +'</span>'
            +'<span class="zm-tree-node-move">移</span>'
            +'</p>'
            +'<ul></ul>'
            +'</li>'
        thisNode.after(newNode)
    },
    upNode:function(e){
        var thisNode = $(e).closest("li");
        var type = thisNode.attr("data-zm-type");
        var newNodeType = "";
        switch(type){
            case "second":
                newNodeType="first";
                break;
            case "third":
                newNodeType="second";
                break;
            default:
                break;
        };
        thisNode.attr("data-zm-type",newNodeType);
        thisNode.children("ul").children("li").attr("data-zm-type",type);
    },
    downNode:function(e){
    },
    saveTree:function(e){
        var tree=$(e).closest(".zm-tree");
        var firstArr=[]
        tree.find("li[data-zm-type='first']").each(function(){
            var first = $(this);
            var id=first.attr("data-zm-id")
            var name = first.children("p").children("input").val();
            var secondArr=[];
            first.find("li[data-zm-type='second']").each(function(){
                var second = $(this);
                var id=second.attr("data-zm-id")
                var name = second.children("p").children("input").val();
                var thirdArr=[]
                second.find("li[data-zm-type='third']").each(function(){
                    var third = $(this);
                    var id=third.attr("data-zm-id")
                    var name = third.children("p").children("input").val();
                    thirdArr.push({id:id,name:name})
                })
                secondArr.push({id:id,name:name,childNodes:thirdArr})
            })
            firstArr.push({id:id,name:name,childNodes:secondArr})
        })
        console.log(firstArr)
    },
    resetTree:function(e){
        var _thisTree = $(e).closest(".zm-treeBox").parent();
        _thisTree.zmTree(treeNodes)
    }
}
$(document).on("mousedown",".zm-tree-node-move",function(e){
    var downX = e.pageX;
    var downY = e.pageY;
    var _this = $(this);
    var scrollTop = $(document).scrollTop()
    var thisNode = _this.closest("li");
    var type = thisNode.attr("data-zm-type");
    console.log(type)
    var width = thisNode.width();
    var left = thisNode.offset().left;
    var top = thisNode.offset().top-scrollTop;
    console.log(left,top)
    var holderHtml='<li class="zm-tree-holderLi"><p>here</p><li>';
    thisNode.after(holderHtml);
    var holder = $(".zm-tree-holderLi")
    thisNode.css({"position":"fixed","left":left,"top":top,"width":width,"zIndex":"99"})
    $(document).off("mousemove").mousemove(function (e) {
        e.preventDefault(e);
        var moveX = e.pageX;
        var moveY = e.pageY;
        var nodeTop = top+moveY-downY
        thisNode.css({"position":"fixed","left":left+moveX-downX,"top":top+moveY-downY})
        /*只允许当前父级中移动*/
        thisNode.siblings("li").not(holder).each(function(){
            var _this = $(this);
            var offset = _this.offset();
            var oTop = offset.top-scrollTop;
            var oBottom = offset.top+_this.height()-scrollTop;
            if(nodeTop>oTop&&nodeTop<oBottom){
                if(nodeTop>(oBottom-oTop)/2+oTop){
                    holder.insertAfter(this)
                }else{
                    holder.insertBefore(this)
                }
            }
        })
        /*同级均可移动*/
        //thisNode.closest(".zm-tree").find("[data-zm-type='"+type+"']").not(holder).each(function(){
        //    var _this = $(this);
        //    var offset = _this.offset();
        //    var oTop = offset.top-scrollTop;
        //    var oBottom = offset.top+_this.height()-scrollTop;
        //    if(nodeTop>oTop&&nodeTop<oBottom){
        //        if(nodeTop>(oBottom-oTop)/2+oTop){
        //            holder.insertAfter(this)
        //        }else{
        //            holder.insertBefore(this)
        //        }
        //    }
        //})
    })
    $(document).mouseup(function(){
        $(document).off('mouseup').off('mousemove');
        var offset = holder.offset();
        thisNode.animate({"left":offset.left, "top":offset.top-scrollTop}, 300, function() {
            thisNode.removeAttr("style");
            holder.replaceWith(thisNode);
        });

    })
})