/**
 * Created by zxp on 2016/8/30.
 */
/*
 * art ���ص��Ի���
 * 
 */
function artDialog(mCotent,mConfirmCallBack){
    var d1 = dialog({
        id: "model",
        title: '��ʾ',
        content: mCotent,
        okValue: 'ȷ��',
        ok:mConfirmCallBack,
        cancelValue: 'ȡ��',
        cancel: true,
        quickClose:true,
    });
    d1.show();
}
/*
 * art ����ص��Ի���
 *
 */
function artDialogError(mCotent){
    var d2 = dialog({
        id: "modelError",
        title: '��ʾ',
        time:2,
        content: mCotent,
        okValue: 'ȷ��',
        cancelValue: 'ȡ��',
        cancel: true,
        ok:true,
        quickClose:true,
    });
    d2.show();
}
/*
 * bootstrap�Ի��������ѷ���ʹ��
 *
 */
 function dialogConfirm(mMsg,mConfirmCallBack){
       var dialog = BootstrapDialog.confirm({
            title: "��ʾ��",
            message: mMsg ,
            type: BootstrapDialog.TYPE_WARNING, 
            size: BootstrapDialog.SIZE_SMALL,
            closable: true, 
            draggable: true,
            btnCancelLabel: 'ȡ��',
            btnOKLabel: 'ȷ��', 
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
// 	  		title: "��ʾ��",
//            message: mMsg ,
//            size: BootstrapDialog.SIZE_SMALL,
//            buttons: [
//            	{
//	                label: '�ر�',
//	                action: function(dialogRef) {
//	                    dialogRef.close();
//	                }
//                },
//                {
//	                label: 'ȷ��',
//	                action:mConfirmCallBack() 
//                }
//                ]
//        });
 }