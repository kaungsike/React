import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({
  links: { prev, next },
  meta: { current_page, last_page },
  setUrl,
}) => {


  return (
    <div className="flex items-center gap-4">
      {prev && (
        <Button onClick={() => setUrl(prev)} variant="text" className="flex items-center gap-2">
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
      )}
      <div className="flex items-center gap-2">
        <IconButton>{current_page}</IconButton>
        {last_page >= current_page + 1 && (
          <IconButton onClick={() => setUrl(next)} color="gray" variant="text">
            {current_page + 1}
          </IconButton>
        )}
      </div>
      {next && (
        <Button onClick={() => setUrl(next)} variant="text" className="flex items-center gap-2">
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
