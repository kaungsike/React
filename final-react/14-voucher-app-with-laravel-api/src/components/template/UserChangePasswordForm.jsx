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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const UserChangePasswordForm = () => {
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

  const handleChangeNameForm = async (data) => {
    console.log(data);
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-password",
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

    console.log(json);


    if (res.ok) {
      toast.success("Name changed successfully.");
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
        navigate("/");
    } else {
      toast.error("Failed to change name.");
      console.log(res);
    }

  };

  return (
    <>
      <CardHeader className="p-0 mt-5">
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Enter your current and new password to update your credentials
        </CardDescription>
      </CardHeader>

      <form id="changePassowedForm" onSubmit={handleSubmit(handleChangeNameForm)}>
        <CardContent className="space-y-4 p-0 mt-5">
          <div>
            <Label htmlFor="name" className="mb-1">
              Old Password
            </Label>
            <Input
              {...register("old_password", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
              type="password"
              className={`${
                errors.old_password
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
              required
            />
          </div>
          <div>
            <Label htmlFor="name" className="mb-1">
              New Password
            </Label>
            <Input
              {...register("new_password", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
              type="password"
              placeholder="......"
              className={`${
                errors.new_password
                  ? "border-red-500 ring-red-500 focus:ring-red-600"
                  : ""
              }`}
              required
            />
          </div>
          <div>
            <Label htmlFor="name" className="mb-1">
              Confirm new Password
            </Label>
            <Input
              {...register("new_password_confirmation", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
              type="password"
              placeholder="........"
              className={`${
                errors.new_password_confirmation
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
          <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="" className="w-full">Change Password</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Password Change</AlertDialogTitle>
      <AlertDialogDescription>
        Changing your password will log you out of all sessions. You will need to log in again with your new password.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction type="submit" form="changePassowedForm">Confirm</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </CardFooter>
      </form>
    </>
  );
};

export default UserChangePasswordForm;
