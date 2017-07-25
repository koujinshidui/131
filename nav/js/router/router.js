/**
 * Created by Administrator on 2017/4/11.
 */
//zmEditor.url.getAlbumOptionList//http://192.168.0.127:8090/blogInterface/queryInterfaceListByPage
var  choiceFileUrlPort="http://192.168.0.127:8090/";
var choiceAlbumUrlPort="http://192.168.0.158:8081";//http://192.168.0.132:8980/zm_business_basic_webapp
var choiceAlbumUrlPort1="http://192.168.0.158:8079"
var choicePictureUrlPort="http://192.168.0.159:8085/";//http://192.168.0.132:8880/zm_business_basic_webapp/
var choicePictureUrlClassify="http://192.168.0.132:8880/zm_business_basic_webapp/";
///http://192.168.0.130:8081/musicResource/queryAlbum&fStageName
zmEditor.url={
    /*
     * gui
     * */
    //选择音频页面接口
    getRadioCategory:"http://192.168.0.158:8081/musicResource/queryAlbum",//ajax获取音频类目列表
    getRadioList:"http://192.168.0.158:8081/musicResource/queryMusic",//获取音频列表接口
    getChoiceDownLoadFile:"http://192.168.0.132:8980/zm_business_basic_webapp/resource/downLoadFile",//下载文件的接口
    getRadioDeleteList:"http://192.168.0.132:8980/zm_business_basic_webapp/musicResource/deleteMusic",//删除音频列表
    getRadioRestoreList:"http://192.168.0.132:8980/zm_business_basic_webapp/musicResource/batchRestore",//还原音频列表接口
    getRadioReviserList:"http://192.168.0.132:8980/zm_business_basic_webapp/musicResource/updateMusic",//修改音频列表标题接口
    //getRadioMoveToClassify:"http://192.168.0.132:8980/zm_business_basic_webapp/musicResource/updateMusic",//添加音频到专辑分类接口
    //选择专辑页面接口
    getAlbumList:choiceAlbumUrlPort+"/musicResource/queryAlbum",//获取专辑列表接口
    getAddAlbumLanguageType:choiceAlbumUrlPort1+"/sysDictionary/queryByType?fType=ALBUM_LANGUAGE",//获取语言类型列表
    getAddAlbumType:choiceAlbumUrlPort1+"/sysDictionary/queryByType?fType=ALBUM_TYPE",//获取专辑类型列表
    getAddAlbumUpPicture:choiceAlbumUrlPort1+"/upLoadFile/uploadFile",//添加专辑的上传图片接口
    getAddAlbumUpdateAlbum:choiceAlbumUrlPort+"/musicResource/saveEditAlbum",//添加专辑的上传专辑接口
    getAlbumReviserList:choiceAlbumUrlPort+"/zm_business_basic_webapp/musicResource/updateAlbum",//修改专辑列表标题接口
    getAlbumOptionList:choiceAlbumUrlPort+"/musicResource/queryStageNameByStageNameForInterface?",//条件筛选接口
    getAlbumDeleteList:choiceAlbumUrlPort+"/musicResource/deleteAlbum",//删除专辑列表接口
    //选择图片页面接口
    getPictureCategory:choicePictureUrlClassify+"imageSource/allCategory",//ajax获取图片类目列表
    getPictureUpPicture:choicePictureUrlClassify+"imageSource/uploadImage",//选择图片的上传图片接口
    getPictureList:choicePictureUrlClassify+"imageSource/queryImageByCategory",//获取图片列表接口
    getPictureDeleteList:choicePictureUrlClassify+"imageSource/batchImageDelete",//删除图片列表接口
    getPictureRestoreList:choicePictureUrlClassify+"imageSource/batchRestore",//还原图片列表接口
    getPictureDeleteCategory:choicePictureUrlClassify+"imageSource/deleteCategory",//删除图片类目接口
    getPictureAddOrReviserCategory:choicePictureUrlClassify+"imageSource/saveCategory",//增加图片类目或修改类目名称接口
    getPictureReviserList:choicePictureUrlClassify+"imageSource/imageRename",//修改图片列表标题接口
    getPictureMoveToClassify:choicePictureUrlClassify+"imageSource/batchMoveImage",//添加图片到分类接口
    getPictureUploadImg:choicePictureUrlClassify+"imageSource/uploadImage",//添加音频到专辑分类接口
    getPictureDragMoveClassify:choicePictureUrlClassify+"updateImageCategorySort",//添加音频到专辑分类接口
    //选择视频页面接口
    getVideoCategory:"http://192.168.0.132:8980/zm_business_basic_webapp/videoResource/queryCategory",//ajax获取视频类目列表
    getVideoList:"http://192.168.0.132:8980/zm_business_basic_webapp/videoResource/queryVideo",//获取视频列表接口
    getVideoDeleteList:"http://192.168.0.132:8980/zm_business_basic_webapp/videoResource/deleteCategory",//删除视频列表
    getVideoAddOrReviserCategory:"http://192.168.0.132:8980/zm_business_basic_webapp/videoResource/saveCategory",//增加视频类目或修改类目名称接口
    getVideoReviserList:"http://192.168.0.132:8980/zm_business_basic_webapp/videoResource/updateVideo",//修改视频列表标题接口
    getVideoMoveToClassify:"http://192.168.0.132:8880/zm_business_basic_webapp/videoResource/updateVideo",//添加视频到分类接口
    //选择新闻页面接口
    getNewsCategory:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/getNewsCategoryList",//ajax获取新闻类目列表
    getNewsList:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/getNewsListByCategory",//获取新闻列表接口
    getNewsDeleteList:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/batchDelete",//删除新闻列表
    getNewsDeleteCategory:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/delete",//删除新闻类目接口
    getNewsAddOrReviserCategory:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/saveCategory",//增加新闻类目或修改类目名称接口
    getNewsReviserList:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/updateNews",//修改新闻列表标题接口
    getNewsMoveToClassify:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/toMoveCategory",//添加新闻到分类接口
    //选择博客页面接口
    getBloggerCategory:choiceFileUrlPort+"blogInterface/queryInterfaceListByPage",//ajax获取博客类目列表
    getBloggerDeleteList:choiceFileUrlPort+"blogInterface/deleteBlogByIds",//删除博客列表
    getBloggerReviserList:choiceFileUrlPort+"blogInterface/updateBlogTitle",//修改博客列表标题接口
    //选择商品页面接口
    getGoodsCategory:"http://192.168.0.140:8086/shopProductCategory/getProductCategoryList",//ajax获取商品类目列表
    getGoodsList:"http://192.168.0.140:8086/product/getProductList",//获取商品列表接口
    getGoodsDeleteList:"http://192.168.0.140:8086/product/removeProductById",//删除商品列表
    getGoodsDeleteCategory:"http://192.168.0.140:8086/shopProductCategory/removeProductCategroy",//删除商品类目接口
    getGoodsAddCategory:"http://192.168.0.30:9001/zm_business_basic_webapp/newsResource/saveCategory",//增加商品类目接口
    getGoodsMoveToClassify:"http://192.168.0.140:8086/product/updateProductTagId",//添加商品到分类接口
    //选择服务页面接口
    getServiceCategory:"http://192.168.0.164:9090/shopserviceCategory/getServiceCategoryList",//ajax获取服务类目列表
    getServiceAddCategory:"http://192.168.0.164:9090/shopserviceCategory/addServiceCategory",//增加服务类目接口
    getServiceReviserCategory:"http://192.168.0.164:9090/shopserviceCategory/updateServiceCategoryNameById",//修改商家服务站内分类名称接口
    getServiceDeleteCategory:"http://192.168.0.164:9090/shopserviceCategory/removeServiceCategory",//删除商家服务站内分类接口
    getServiceCategorySort:"http://192.168.0.164:9090/shopserviceCategory/updateCategorySort",//修改商家服务站内分类排序接口
    getServiceList:"http://192.168.0.164:9090/serviceNote/getServiceList",//根据标签和服务名称查询服务集合接口
    getServiceDeleteList:"http://192.168.0.164:9090/serviceNote/delteServiceId",//批量删除产品接口
    getServiceMoveToClassify:"http://192.168.0.164:9090/serviceNote/updateServiceShopCAT",//添加服务到分类接口
    /*
     * aiyun
     * */
    getNewsData:"http://192.168.0.132:8880/zm_business_basic_webapp/newsResource/queryResource",//获取新闻组件数据 by laozhang

    /*公共接口*/
    getComponentsList:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/queryForEditor",//获取组件列表(ok)
    getComponentType1:"http://192.168.0.132:8880/zm_business_basic_webapp/sysDictionary/queryMemoByType",//获取组件大类(ok)
    getComponentType2ByType1:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponentType/queryByTypeForDic",//获取组件小类(ok)
    getTemplatesList:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/queryAllTempletList",//获取模板列表(ok)
    getTemplateType1:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/queryTempletType",//获取模板大类(ok)
    getTemplateType2ByType1:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/queryTempletType",//获取模板小类(ok)
    getTemplateById:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTempletPage/getTempletInfoById",//根据模板id获取模板信息
    /*管理人员接口*/
    saveComponentsSort: "http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/saveByEditor",//保存组件排序（ok）
    getMyComponentsList:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/queryByUser",//根据用户获取我的组件列表（ok）
    getMyTemplatesList:"",//根据用户获取我的模板列表（未开发）
    deleteComponentById:"",//根据组件id删除组件（未开发）
    deleteTemplateById:"",//根据模板id删除模板（未开发）
    publishComponent:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/saveAdd",//保存/另存组件（存在待解决问题）
    publishTemplate:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/saveTempletWithPage",//保存/另存模板（存在待解决问题）
    getComponentById:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/queryById",//根据id获取组件信息从后台进入编辑器编辑时用到（ok）


    publish:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/publishWebSite",//网站发布
    getNavigationPageById:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/getNavigationPageById",
    saveAndCommit:"http://192.168.0.132:8880/zm_business_basic_webapp/sysComponent/saveAndCommit",//（未知接口）
    getSysWidgetType:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/getSysWidgetType",//（未知接口）
    getNavigationPageList:"http://192.168.0.132:8880/zm_business_basic_webapp/sysTemplet/getNavigationPageList",

    /* 热门接口 预留 拖组件进页面时加载数据 liuhuan  */
    hotAlbum: "",
    hotProduct: ""
};