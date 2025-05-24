import React from "react";
import useCookie from "react-use-cookie";
import { Link } from "react-router-dom";
import useUserStore from "../../store/useUserStore";

const UserProfileCard = () => {
  const [userCookie] = useCookie("user");

  const userObj = JSON.parse(userCookie);

  const { user } = useUserStore();

  return (
    <div className="mt-5  bg-white dark:bg-gray-900 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex items-start gap-4 w-full md:w-1/2">
        <img
          src={
            user.profile_image
              ? `${user.profile_image}`
              : "https://static.thenounproject.com/png/4530368-200.png"
          }
          alt="Company Logo"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <div className="mt-2 flex gap-4 flex-wrap text-xs text-muted-foreground">
            <Link
              to={"user-change-image"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Change Image
            </Link>
            <Link
              to={"user-change-name"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Change Name
            </Link>
            <Link
              to={"user-change-password"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Change Password
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Metrics */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Hiredrop Rate */}

        {/* Job Post Performance */}
        <div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            Job Post Performance
          </div>
          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <div className="flex justify-between">
              <span className="text-purple-600">Received</span>
              <span>178</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-500">Interview</span>
              <span>99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-500">Hired</span>
              <span>27</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-500">Declined</span>
              <span>142</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
