package com.af.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/test")
public class TestController {

	@RequestMapping(path = "/sayHello")
	public String sayHello() {
		return "Hello World";
	}
}
