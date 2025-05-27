import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";

export function TableEmpty({ colSpan = 5, message = "There is no data" }) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="text-center py-8 text-muted-foreground">
        {message}
      </TableCell>
    </TableRow>
  );
}
