/**
 * Created by zxp on 2016/8/16.
 */

var baseUrl="";//���Ļ���url: http://10.11.1.8:8080/HEB_IRMS/
//var baseUrl="http://10.11.1.18:8080/HEB_IRMS/";//���Ļ���url
var authorityUrl={
    getList:baseUrl+"webUser/getList.shtml"
}
/*
 * ��װajax
 * @param mType  ��������
 * @param mUrl   �򵥵�url��ַ
 * @param  mJsonCallback json�Ļص�����
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
 * ��װajax
 * @param mType  ��������
 * @param mUrl   ��ַ
 * @param mParam  object���󣬴�������Ĳ�������
 * @param mJsonCallback json�Ļص�����
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
 * ��װajax
 * @param mType  ��������
 * @param mUrl   �򵥵�url��ַ
 * @param  mJsonCallback json�Ļص�����
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
 * ��װ����ajax
 * @param mType  ��������
 * @param mUrl   ��ַ
 * @param  mJsonpCallback jsonp�Ļص�����
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
 *  ����url�Ĳ���
 * @param queryName
 * @returns {*��ѯ�����Ĳ���}
 */
function queryUrlStrByName(queryName) {
    var str = location.href; //ȡ��������ַ��
    //alert(str);
    if (str.indexOf("?") > -1) {
        var queryParam = str.substring(str.indexOf("?") + 1);
        //����ж������
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