import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
    const navigate = useNavigate();
    
      const handleLogin= async (data) => {
    
        const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
      
    
        const json = await res.json();
    
        if (res.ok) {
            toast.success("Register Successful.");
            console.log(json);
            console.log(res);
            navigate("/dashboard")
          } else {
            toast.error("Failed to register.");
            console.log(res);
          }
    
          reset();
          
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>
        <form id="loginForm" onSubmit={handleSubmit(handleLogin)}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-1">
                Email
              </Label>
              <Input
                {...register("email", {
                  required: true,
                  minLength: 10,
                  maxLength: 40,
                })}
                required
                type="email"
                id="email"
                placeholder="Eg - testing39!@gmail.com"
                className={`${
                  errors.customerEmail
                    ? "border-red-500 ring-red-500 focus:ring-red-600"
                    : ""
                }`}
              />
            </div>{" "}
            <div>
              <Label htmlFor="password" className="mb-1">
                Password
              </Label>
              <Input             {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 40,
                })}
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex mt-5 flex-col space-y-2 items-start">
            <div className="flex items-center space-x-2">
              <Checkbox id="accept" required />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <Button form="loginForm" type="submit" className="w-full">
              Login
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Register
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
