package com.dot.garagefest.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(
{
 "com.dot.garagefest.bean",
 "com.dot.garagefest.controller",
 "com.dot.garagefest.service",
 "com.dot.garagefest.dao"
})
public class GaragefestApplication {


	public static void main(String[] args) {
		SpringApplication.run(GaragefestApplication.class, args);
	}
}
