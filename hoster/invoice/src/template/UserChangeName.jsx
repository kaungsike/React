import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import useUserStore from "../store/useUserStore";

const UserChangeNameForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const [user, setUser] = useCookie("user");
  const { userStore, setUserStore } = useUserStore();

  const handleChangeNameForm = async (data) => {
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
console.log(res);
    console.log(json);

    if (res.ok) {
      toast.success("Name changed successfully.");
      setUser(JSON.stringify(json.user));
      setUserStore(json.user);
      reset();
    } else {
      toast.error("Failed to change name.");
      console.log(res);
    }
  };

  return (
    <div className="max-w-lg w-full mt-6 p-6">
      <div floated={false} className="mb-4 p-0">
        <p variant="h5" color="blue-gray">
          Change Name
        </p>
        <Typography color="gray" className="text-sm">
          Enter your full name and confirm to save.
        </Typography>
      </div>

      <form onSubmit={handleSubmit(handleChangeNameForm)} className="space-y-6">
        <CardBody className="p-0 space-y-6">
          <div>
            <Input
              label="Full Name"
              color={errors.name ? "red" : "blue"}
              error={Boolean(errors.name)}
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              defaultValue={userStore?.name}
              placeholder="Eg - John Doe"
            />
            {errors.name && (
              <Typography variant="small" color="red">
                Name is required (3–30 characters).
              </Typography>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Checkbox required />
            <Typography variant="small">
              I agree to the terms and conditions
            </Typography>
          </div>

          <Button type="submit" fullWidth >
            Save
          </Button>
        </CardBody>
      </form>
    </div>
  );
};

export default UserChangeNameForm;
