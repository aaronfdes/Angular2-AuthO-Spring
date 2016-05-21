package com.af.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ComponentScan("com.auth0")
@ImportResource("classpath:auth0-security-context.xml")
@PropertySource("classpath:auth0.properties")
public class Auth0Config {

}
