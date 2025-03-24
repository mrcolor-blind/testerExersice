package com.example.calculator_back.model;

public record Calculator(Long result){

}

/* 
public class Calculator {
    private Long num1;
    private Long num2;
    private Long result;

    public Long getNum1(){
        return this.num1;
    }

    public void setNum1(Long num1){
        this.num1 = num1;
    }

    public Long getNum2(){
        return this.num2;
    }

    public void setNum2(Long num2){
        this.num2 = num2;
    }

    public Long getResult(){
        return this.result;
    }

    public void setResult(Long result){
        this.result = result;
    }

    public void addNums(Long num1, Long num2){
        result = num1 + num2;
    }

    public void subNums(Long num1, Long num2){
        result = num1 - num2;
    }
    
}
 */