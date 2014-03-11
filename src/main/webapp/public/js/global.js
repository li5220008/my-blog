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


