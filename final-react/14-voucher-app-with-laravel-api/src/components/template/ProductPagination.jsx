import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({
  links: { prev, next },
  meta: { current_page, total, from, to, last_page },
  setUrl,
}) => {
  return (
    <div className="mt-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {prev && <PaginationPrevious onClick={() => setUrl(prev)} />}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-gray-300 dark:bg-gray-700" href="#">
              {current_page}
            </PaginationLink>
          </PaginationItem>
          {last_page >=
            current_page+1 &&
            (
                <PaginationItem>
                  <PaginationLink  onClick={() => setUrl(next)} >{current_page + 1}</PaginationLink>
                </PaginationItem>
              )}
          <PaginationItem>
            {next && <PaginationNext onClick={() => setUrl(next)} />}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
