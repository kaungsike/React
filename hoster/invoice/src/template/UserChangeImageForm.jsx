import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import useUserStore from "../store/useUserStore";

const UserChangeImageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const [user, setUser] = useCookie("user");
  const { userStore, setUserStore } = useUserStore();

  const handleUpdateImageForm = async (data) => {
    const formData = new FormData();
    formData.append("profile_image", data.profile_image[0]);

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
      setUser(JSON.stringify(json.user));
      setUserStore(json.user);
      reset();
    } else {
      toast.error(json.message);
      console.log(res);
    }
  };

  return (
    <div className="max-w-lg w-full mt-6 ">
      <div floated={false} className="mb-4 p-0">
        <Typography variant="h5" color="blue-gray">
          Update Profile Image
        </Typography>
        <Typography color="gray" className="text-sm">
          Change your profile picture below
        </Typography>
      </div>

      <div className="flex justify-center mb-5">
        <img
          src={
            userStore?.profile_image
              ? userStore.profile_image
              : "https://static.thenounproject.com/png/4530368-200.png"
          }
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      <form
        onSubmit={handleSubmit(handleUpdateImageForm)}
        className="space-y-6"
      >
        <CardBody className="p-0 space-y-6">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="profile_image"
              className="text-sm font-medium text-gray-700"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profile_image"
              {...register("profile_image", { required: true })}
              className={`block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
      ${errors.profile_image ? "border-red-500 ring-red-500" : ""}`}
            />
            {errors.profile_image && (
              <span className="text-sm text-red-500">
                Profile image is required.
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Checkbox required />
            <Typography variant="small">
              I agree to the terms and conditions
            </Typography>
          </div>

          <Button type="submit" fullWidth color="blue">
            Save
          </Button>
        </CardBody>
      </form>
    </div>
  );
};

export default UserChangeImageForm;
