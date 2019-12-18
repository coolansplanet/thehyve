import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  return (
    <table>
      <TableHeader
        headers={["Name", "Empty Slots", "Free Bikes", "Date Time"]}
      />
      <TableBody {...props} />
    </table>
  );
};
export default Table;
