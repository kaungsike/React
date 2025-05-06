import * as React from "react";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

function SkeletonCell({ width = "w-24" }) {
  return <div className={`h-4 bg-muted rounded animate-pulse ${width}`} />;
}

export function TableSkeleton({ rows = 5, columns = 4 }) {
  const widths = ["w-32", "w-24", "w-40", "w-20"]; // You can customize this per column
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <SkeletonCell width={widths[colIndex % widths.length]} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
