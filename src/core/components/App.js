import React, { useState, useEffect } from "react";
import { bemNamesFactory } from "bem-names";
import { getNetwork, getAllNetworks } from "../provider";
import Table from "./Table";
import Selector from "./Selector";
import Chart from "./Chart";
import "./App.scss";

const App = () => {
  const [networkList, setNetworkList] = useState([]);
  const [network, setNetwork] = useState([]);
  const bem = bemNamesFactory("core__app");

  useEffect(() => {
    getAllNetworks(["name", "href", "id"]).then(response => {
      setNetworkList(response.data.networks);
    });
  }, []);

  const onSelectChange = e => {
    getNetwork(e.target.value).then(response => {
      setNetwork(response.data.network);
    });
  };
  return (
    <div className={bem()}>
      <Selector
        networkList={networkList}
        onChange={e => {
          onSelectChange(e);
        }}
      />
      {network && (
        <React.Fragment>
          <Chart network={network} />
          <Table network={network} />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
