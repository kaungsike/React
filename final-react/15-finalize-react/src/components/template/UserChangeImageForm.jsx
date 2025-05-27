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
import js from "@eslint/js";

const UserChangeImageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  const navigate = useNavigate();

  const handleUpdateImageForm = async (data) => {
    console.log(data.profile_image[0]);

    const formData = new FormData();
    formData.append("profile_image", data.profile_image[0]);

    console.log(formData);

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    if (res.ok) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
    } else {
      toast.error(json.message);
      console.log(res);
    }
  };

  return (
    <>
      <CardHeader className="p-0 mt-5">
        <CardTitle>Update Profile</CardTitle>
        <CardDescription>
          Change your display name and profile picture
        </CardDescription>
      </CardHeader>

      <div className="flex items-center justify-center mt-5">
        <img
          src={
            user.profile_image
              ? `${user.profile_image}`
              : "https://static.thenounproject.com/png/4530368-200.png"
          }
          alt="Company Logo"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <form id="loginForm" onSubmit={handleSubmit(handleUpdateImageForm)}>
        <CardContent className="space-y-4 p-0 mt-5">
          <div>
            <Label htmlFor="name" className="mb-1">
                Profile Image
            </Label>
            <Input
              {...register("profile_image", {
                required: true,
              })}
              type="file"
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

export default UserChangeImageForm;
