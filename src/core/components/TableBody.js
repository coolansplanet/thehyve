import React from "react";
import moment from "moment";
import { bemNamesFactory } from "bem-names";
import "./TableBody.scss";

const TableBody = props => {
  const { network } = props;
  const bem = bemNamesFactory("table__body");
  return (
    <tbody className={bem()}>
      {network.stations &&
        network.stations.map(oneStation => {
          const {
            id,
            name,
            empty_slots: emptySlots,
            free_bikes: freeBikes,
            timestamp
          } = oneStation;
          return (
            <tr key={id} className={bem("row")}>
              <td className={bem("cell", ["name"])}>{name}</td>
              <td className={bem("cell", ["empty-slots"])}>{emptySlots}</td>
              <td className={bem("cell", ["free-bikes"])}>{freeBikes}</td>
              <td className={bem("cell", ["date-time"])}>
                {moment(timestamp).format("MMMM Do YYYY, h:mm:ss a")}
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};
export default TableBody;
