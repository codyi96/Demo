package com.example.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class AnAspect {
    @Pointcut("execution(* com.example.aop.MainActivity.on*(..))")
    public void pointcut() {
        // 空方法。如此一来，pointcut()即可等价于execution(* com.example.aop.MainActivity.on*(..))
    }

    @Before("pointcut()")
    public void before(JoinPoint point) {
        System.out.println("Before Hook");
    }

    @Around("pointcut()")
    public void around(ProceedingJoinPoint joinPoint) throws Throwable {
        // Around 如果放置在 After 之后，将会偶现所有Hook失效
        System.out.println("Around Hook");
        joinPoint.proceed();
    }

    @After("pointcut()")
    public void after(JoinPoint point) {
        System.out.println("After Hook");
    }

}
