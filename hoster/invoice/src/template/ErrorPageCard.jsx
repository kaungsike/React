import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function ErrorPageCard() {
  return (
    <div className="w-full flex items-center justify-center">
      <Card
        color="white"
        shadow={true}
        className="p-8 w-80 sm:w-96 text-center space-y-4"
      >
        <div className="flex justify-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
        </div>

        <Typography variant="h4" color="blue-gray">
          Something Went Wrong
        </Typography>
        <Typography color="gray" className="text-sm">
          We couldn’t process your request. Please try again later or go back to
          the homepage.
        </Typography>

        <Button
          fullWidth
          onClick={() => (window.location.href = "/")} // or use navigate("/")
          className="mt-4"
        >
          Go to Homepage
        </Button>
      </Card>
    </div>
  );
}
