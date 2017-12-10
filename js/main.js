
mVal.mainIframe=window.parent.frames["tableFrame"];
window.init();
window.onresize=function(){
    changeFrameHeight();
}
function init(){
    mVal.mainIframe.location="secondAuthorityMag.html"+"?moduleID="+1;
    changeFrameHeight();
    $.ajax({
        type: "POST",
        url: baseUrl+"module/getTreeList.shtml" ,
        contentType: "application/json;charset=gbk",
        dataType: "json",
        success:function (data){
            callBackzTreeData(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error");
        }
    });
};
function changeFrameHeight(){
    //mVal.mainIframe.height=$(window).height();
    $( "#mainIframe").outerHeight($(window).height());
    //var cuntFrameWid=$(window).width()-$(".nav").outerWidth(true)-50
    //$( "#mainIframe").outerWidth(cuntFrameWid);
}
$( "#btnNav").click(function(){
    window.parent.theFrameset.cols="0%,100%";
});
function callBackzTreeData(data){
    var ztreeObject=new Array();
    //�ֶ�����,���ڱ����±������;
    var mdata=data.data;
    $.each(mdata,function(index,jsValue){
        //0��1,2,3Ϊ�ֵ䣺��Ϣ����ϵͳ�� Ȩ�ޣ� ģ�飬���¹���
        ztreeObject[index]={};
        ztreeObject[0].open = true;
        ztreeObject[index].id = mdata[index].moduleID;
        ztreeObject[index].pId = mdata[index].supModuleID;
        ztreeObject[index].name = mdata[index].moduleName;
        if(ztreeObject[index].pId==0){
            ztreeObject[index].open = true;
        }
    });
    var p=ztreeObject;
    zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, ztreeObject);
    $( "ul.ztree" ).css( "background-color" , "white" );
    $( "ul.ztree" ).css( "border" , "none" );
    $( "ul.ztree").css( "overflow-y" , "auto" );
    $( "ul.ztree").css( "width" , "180px" );
    $( "ul.ztree").css( "margin-top" , "0px" );

    }
function zTreeOnClick(event, treeId, treeNode) {
    var cutId=treeNode.id-1;
    if(cutId==1){
        mVal.mainIframe.location="secondAuthorityMag.html"+"?moduleID="+cutId ;
    }else if(cutId==2){
        mVal.mainIframe.location="secondModuleMag.html"+"?moduleID="+cutId;
    }else{
        mVal.mainIframe.location="secondNewsFlash.html"+"?moduleID="+cutId;
    }
}