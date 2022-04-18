import "./App.css";
import React from "react";
import { callToServer } from "./globalService";
import PurchasesTable from "./PurchaseTable";
import SummaryConsole from "./SummaryConsole";

function App() {
  const [purchases, setPurchases] = React.useState([]);
  const [summary, setSummary] = React.useState("");
  React.useEffect(() => {
    callToServer("purchases", (data) => setPurchases(data));
    callToServer("summary", (data) =>
      setSummary(JSON.stringify(data, null, 2))
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        margin: "5rem",
      }}
    >
      <PurchasesTable purchases={purchases} />
      <SummaryConsole summary={summary} />
    </div>
  );
}

export default App;
