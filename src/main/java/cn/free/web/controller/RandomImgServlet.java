package cn.free.web.controller;
import cn.free.utils.ImgUtils;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;

/**
 * Desc: 获取图片servlet
 * User: weiguili(li5220008@gmail.com)
 * Date: 14-3-11
 * Time: 上午10:39
 */
public class RandomImgServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //指定输入内容
        resp.setContentType("image/jpeg");
        //控制浏览器不要缓存
        resp.setDateHeader("expries",-1);
        resp.setHeader("Cache-Control","no-cache");
        resp.setHeader("Pragma","no-cache");
        ImgUtils.randomImg(resp.getOutputStream());
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
