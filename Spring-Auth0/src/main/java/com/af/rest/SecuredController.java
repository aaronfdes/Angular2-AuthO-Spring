package com.af.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/secured")
public class SecuredController {

	@RequestMapping(path="/securedHello")
	public String securedHello(){
		return "Hello Secretly";
	}
}
