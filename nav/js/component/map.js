/**
 * Created by zhanghuaizhong on 2017/4/6.
 */

zmEditor.component.map = {
    setting:function(box){
        var nowEdit = zmEditor.component.nowEdit();
        var tabs1 = $('<div></div>');
        var config1 = [
            {type:'href',element:nowEdit,flag:''},
            {type:'productRatio',element:nowEdit,flag:''}
        ];
        var items1 = zmEditor.component.setItems.config(config1);
        items1.forEach(function (e) {
            tabs1.append(e);
        });


        var tabs2 = $('<div></div>');
        var config2 = [
            // {type:'Color',element:nowEdit,flag:{title:'边框颜色',style:'',param:'borderColor'}},
            {type:'borderSetting',element:nowEdit,flag:''},
            {type: 'boxShadow', element: nowEdit, flag: ''},
            //{type: 'boxShadow', element: nowEdit, flag: ''},
            {type: 'radius', element: nowEdit, flag: ''}
        ];
        var items2 = zmEditor.component.setItems.config(config2);
        items2.forEach(function (e) {
            tabs2.append(e);
        });
        tabs2.find("#zm-edit-text-opacity").css('margin','0 25px');
        tabs2.find('.zm-edit-components-shadow .zm-edit-components-shadow-W').css({'height':'306px','bottom':'-1px'});


        var tabsList = [{title: "图片", content: tabs1},{title: "特效", content: tabs2}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);

        return tabs
    },
// 百度地图API功能
    loadBMapJS:function(){
        var createScript = document.createElement("script");
        createScript.type = "text/javascript";
        createScript.src = "http://api.map.baidu.com/api?v=2.0&ak=0y3HelYHcqBsUGhXZaHdmGjgxokPyRDn";
        document.head.appendChild(createScript);
    },
    bMapInit:function(boxId) {
        console.log(boxId);
        var realId = boxId.split('b')[0]+'-m';
        console.log(realId);
        var mapBox = document.getElementById(realId).getElementsByClassName('zm-component-map-content')[0];
        $('#'+realId+'').find('.zm-component-map-content').css({'min-width':'600px','min-height':'400px','font-size':'14px'});
        var map = new BMap.Map(mapBox,{enableMapClick:false}); // 创建Map实例
        var thePoint = new BMap.Point(121.357242, 30.891832);//上海新帑实业有限公司坐标
        map.centerAndZoom(thePoint,10); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件

        var label = new BMap.Label('上海族蚂信息科技有限公司',{offset:new BMap.Size(20,0)});
        var opts = {width:200,height:50,title:'上海新帑实业有限公司',enableMessage:true,
            message:'上海族蚂信息科技有限公司全体员工欢迎您的加入~'};
        var infoWindow = new BMap.InfoWindow('地址：上海市金山区亭林镇林盛路136号',opts);
        var marker = new BMap.Marker(thePoint);
        //var geolocation = new BMap.Geolocation();
        //geolocation.getCurrentPosition(function (r) {
        //    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        map.addOverlay(marker);
        map.panTo(thePoint);
        marker.setLabel(label);
        marker.addEventListener('click',function(){
            map.openInfoWindow(infoWindow,thePoint)
        });
        //    } else {
        //        alert('failed' + this.getStatus());
        //    }
        //}, {
        //    enableHighAccuracy: true
        //});
        //关于状态码
        //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
        //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
        //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
        //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
        //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
        //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
        //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
        //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
        //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
        map.addControl(new BMap.CityListControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            offset: new BMap.Size(10,20),
            onChangeBefore: function () {
                console.log('onChangeBefore doing something');
            },
            onChangeAfter: function () {
                console.log('onChangeBefore doing another something');
            }
        }));

        map.addEventListener("click", function(e){
            var thisPoint = new BMap.Point(e.point.lng, e.point.lat);
            map.panTo(thisPoint);
        });
    }
};