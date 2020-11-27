
$('document').ready(function(e){

    //回覆視窗開啟與關閉
    $('.openReply').click(function(){
        $('.replyWindows').slideToggle();
    })
    $('.cancelBtn').click(function(){
        $('.replyWindows').fadeOut();
    })

    //新增資料
    $('.add-prsonal').click(function(){
        $('#modal-new').show();
    })

    //查看資料
    $('.prsonal').click(function(){
        $('#modal-prsonal').show();
    });
    //個人資料向下展開
    $('.expand-down').click(function(){
        $(this).toggleClass('add-transform');
        $('.delete-block').slideToggle();
    })
    $('.editBtn').click(function(){
        $('.modal').fadeOut();
    })

    //編輯資料
    $('.edit').click(function(){
        $('#modal-edit').show();
    })

    //關閉鍵
    $('.close').click(function(){
        $('.modal').fadeOut();
    })
})