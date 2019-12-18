import React from "react";
import { bemNamesFactory } from "bem-names";
import "./TableHeader.scss";

const TableHeader = props => {
  const { headers } = props;
  const bem = bemNamesFactory("table__body");
  return (
    <thead className={bem()}>
      <tr>
        {headers.map(oneHeader => {
          return (
            <th
              key={oneHeader}
              className={bem("cell", [
                oneHeader.replace(" ", "-").toLowerCase()
              ])}
            >
              {oneHeader}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeader;
