package com.example.inthefit2.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Maincontroller {

    @GetMapping("/")
    public String MainPage(){
        return "login";
    }

    @GetMapping("/matching")
    public String matchingPage(){
        return "matching";
    }

    @GetMapping("/profile")
    public String profilePage(){
        return "profile";
    }
}
