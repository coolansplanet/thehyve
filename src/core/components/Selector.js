import React from "react";
import { bemNamesFactory } from "bem-names";
import "./Selector.scss";

const Selector = props => {
  const bem = bemNamesFactory("core__selector");
  const { networkList, onChange } = props;
  return (
    <div className={bem()}>
      <label className={bem("label")}>Select network:</label>
      <select
        onChange={onChange}
        className={bem("selector")}
        id={bem("selector")}
      >
        {networkList &&
          networkList.map(oneNetwork => {
            const { id, name, href } = oneNetwork;
            return (
              <option key={id} value={href}>
                {name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Selector;
