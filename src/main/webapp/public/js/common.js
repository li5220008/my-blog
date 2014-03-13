/**
 * 全局js
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-11
 * Time: 上午10:53
 * To change this template use File | Settings | File Templates.
 */

/**
 * 点击改变图片路径
 * @param img
 */
function changeImg(img){
    img.src=img.src+'?'+new Date().getTime()
}

/**
 * 回复评论
 */
function commentReply(){
    $(".comment-reply-link").click(function(){
        $(".comment-cancel").css("display","block");
        var comment = $("#comment-panel");
        var commentC = $(this).closest(".comment-meta");
        commentC.next(".comment-content").after(comment);
    });
}