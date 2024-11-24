package com.samsung.hskim.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

	@GetMapping(value = {"/fwMessage"})
    public String fwMessage() {
        // 프론트엔드 개발 서버의 index.html로 전달
        return "Hellooooooo World?";
    }
	
}
