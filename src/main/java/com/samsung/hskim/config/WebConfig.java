package com.samsung.hskim.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // 모든 엔드포인트에 대해
                        .allowedOrigins("http://localhost:8081") // Vue.js 개발 서버 도메인
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드
                        .allowedHeaders("*") // 모든 요청 헤더 허용
                        .allowCredentials(true); // 인증 정보를 포함한 요청 허용
            }
        };
    }

}
