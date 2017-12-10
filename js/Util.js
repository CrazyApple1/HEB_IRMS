/**
 * Created by zxp on 2016/8/30.
 */
/*
 * art 带回调对话框
 * 
 */
function artDialog(mCotent,mConfirmCallBack){
    var d1 = dialog({
        id: "model",
        title: '提示',
        content: mCotent,
        okValue: '确定',
        ok:mConfirmCallBack,
        cancelValue: '取消',
        cancel: true,
        quickClose:true,
    });
    d1.show();
}
/*
 * art 错误回调对话框
 *
 */
function artDialogError(mCotent){
    var d2 = dialog({
        id: "modelError",
        title: '提示',
        time:2,
        content: mCotent,
        okValue: '确定',
        cancelValue: '取消',
        cancel: true,
        ok:true,
        quickClose:true,
    });
    d2.show();
}
/*
 * bootstrap对话框插件，已废弃使用
 *
 */
 function dialogConfirm(mMsg,mConfirmCallBack){
       var dialog = BootstrapDialog.confirm({
            title: "提示框",
            message: mMsg ,
            type: BootstrapDialog.TYPE_WARNING, 
            size: BootstrapDialog.SIZE_SMALL,
            closable: true, 
            draggable: true,
            btnCancelLabel: '取消',
            btnOKLabel: '确定', 
            btnOKClass: 'btn-warning', 
            callback: function(result) {
                if(result) {
                   mConfirmCallBack();
                }else {
                }
            }
        });
         //dialog.getModalDialog().onshow(function (){
         //    alert("p");
         //});
 	  //BootstrapDialog.show({
// 	  		title: "提示框",
//            message: mMsg ,
//            size: BootstrapDialog.SIZE_SMALL,
//            buttons: [
//            	{
//	                label: '关闭',
//	                action: function(dialogRef) {
//	                    dialogRef.close();
//	                }
//                },
//                {
//	                label: '确定',
//	                action:mConfirmCallBack() 
//                }
//                ]
//        });
 }