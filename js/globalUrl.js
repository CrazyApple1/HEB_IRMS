/**
 * Created by zxp on 2016/8/16.
 */

var baseUrl="";//树的基本url: http://10.11.1.8:8080/HEB_IRMS/
//var baseUrl="http://10.11.1.18:8080/HEB_IRMS/";//树的基本url
var authorityUrl={
    getList:baseUrl+"webUser/getList.shtml"
}
/*
 * 封装ajax
 * @param mType  请求类型
 * @param mUrl   简单的url地址
 * @param  mJsonCallback json的回调函数
 * */
function mAjax(mType,mUrl,mJsonCallback){
    $.ajax({
        type: mType,
        url: mUrl,
        contentType: "application/json;charset=gbk",
        processData: false,
        async: false,
        dataType: "json",
        success:mJsonCallback,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //alert("error: url "+mUrl+"  "+textStatus+"  "+errorThrown);

        }
    });
}
/*
 * 封装ajax
 * @param mType  请求类型
 * @param mUrl   地址
 * @param mParam  object对象，传入请求的参数对象
 * @param mJsonCallback json的回调函数
 * */
function mAjaxParam(mType,mUrl,mParam,mJsonCallback){
    $.ajax({
        type: mType,
        url: mUrl,
        data: mParam,
        contentType: "application/json;charset=gbk",
        processData: false,
        async: false,
        dataType: "json",
        success:mJsonCallback,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error: url "+mUrl+"  "+textStatus+"  "+errorThrown);
        }
    });
}
/*
 * 封装ajax
 * @param mType  请求类型
 * @param mUrl   简单的url地址
 * @param  mJsonCallback json的回调函数
 * */
function mAjaxAndCallError(mType,mUrl,mJsonCallback,mJsonError){
    $.ajax({
        type: mType,
        url: mUrl,
        contentType: "application/json;charset=gbk",
        processData: false,
        async: false,
        dataType: "json",
        success:mJsonCallback,
        error: mJsonError
    });
}
/*
 * 封装跨域ajax
 * @param mType  请求类型
 * @param mUrl   地址
 * @param  mJsonpCallback jsonp的回调函数
 * */
function mAjaxJsonp(mType,mUrl,mJsonpCallback,mErrorCallback){
    $.ajax({
        type: mType,
        url: mUrl,
        contentType: "application/json;charset=gbk",
        processData: false,
        async: true ,
        dataType: "jsonp",
        success:mJsonpCallback,
        error:mErrorCallback
    });
}

/**
 *  查找url的参数
 * @param queryName
 * @returns {*查询出来的参数}
 */
function queryUrlStrByName(queryName) {
    var str = location.href; //取得整个地址栏
    //alert(str);
    if (str.indexOf("?") > -1) {
        var queryParam = str.substring(str.indexOf("?") + 1);
        //如果有多个参数
        //if (queryParam.indexOf("&") > -1)
        var param = queryParam.split("&");
        for (var a = 0; a < param.length; a++) {
            var query = param[a].split("=");
            if (query[0] == queryName) {
                return query[1];
            }
        }
    }
    return "";
};