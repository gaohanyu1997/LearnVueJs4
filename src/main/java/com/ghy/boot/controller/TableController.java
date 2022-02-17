package com.ghy.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TableController {
    /*
    *  @RequestParam("a") 不带请求参数或者参数类型不对 400;
    * Bad Request 一般都是浏览器的参数没有传递正确
    * */
    @GetMapping("/basic_table")
    public String basic_table(@RequestParam("a") int a){
        int i = 10/0;
        return "basic_table";
    }
}
