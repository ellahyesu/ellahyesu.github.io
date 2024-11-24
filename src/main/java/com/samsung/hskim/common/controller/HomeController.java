package com.samsung.hskim.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

//    @GetMapping("/")
//    public String index() {
//        return "index.html";
//    }
    
    @GetMapping(value = {"/", "/{path:^(?!api).*$}", "/{path:^(?!api).*$}/**"})
    public String forward() {
        // 프론트엔드 개발 서버의 index.html로 전달
        return "forward:http://localhost:8081/";
    }
}
