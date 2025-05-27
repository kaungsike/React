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
import useCookie from "react-use-cookie";
import useUserStore from "../../store/useUserStore";

const UserChangeNameForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");
  const {user,setUser} = useUserStore();

  const navigate = useNavigate();

  const handleChangeNameForm = async (data) => {
    console.log(data);

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-name",
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    if (res.ok) {
      toast.success("Name changed successfully.");
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user)
      reset();
    } else {
      toast.error("Failed to change name.");
      console.log(res);
    }
  };

  return (
    <>
      <CardHeader className="p-0 mt-5">
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <form id="loginForm" onSubmit={handleSubmit(handleChangeNameForm)}>
        <CardContent className="space-y-4 p-0 mt-5">
          <div>
            <Label htmlFor="name" className="mb-1">
              Name
            </Label>
            <Input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              type="text"
              defaultValue={user.name}
              id="name"
              placeholder="Eg - John Doe"
              className={`${
                errors.name
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex mt-5 flex-col space-y-2 p-0 items-start">
          <div className="flex items-center space-x-2">
            <Checkbox id="accept" required />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </CardFooter>
      </form>
    </>
  );
};

export default UserChangeNameForm;
