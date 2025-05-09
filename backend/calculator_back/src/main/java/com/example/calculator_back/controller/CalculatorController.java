package com.example.calculator_back.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.calculator_back.model.Calculator;


@RestController
public class CalculatorController {

    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping("/add")
    public Calculator addNums(@RequestParam(value = "num1", defaultValue = "0") Long num1,@RequestParam(value = "num2", defaultValue = "0") Long num2){
        return new Calculator(num1 + num2);
    }

    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping("/sub")
    public Calculator subNums(@RequestParam(value = "num1", defaultValue = "0") Long num1,@RequestParam(value = "num2", defaultValue = "0") Long num2){
        return new Calculator(num1 - num2);
    }

}
