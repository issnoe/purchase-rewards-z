import logo from "./logo.svg";
import "./App.css";
import React from "react";
import DataTable from "react-data-table-component";

function App() {
  const [purchases, setPurchases] = React.useState([]);
  const [summary, setSummary] = React.useState("");
  React.useEffect(() => {
    const getPurchases = () => {
      fetch("/purchases")
        .then((result) => result.json())
        .then((body) => {
          setPurchases(body);
        });
    };
    const getSummary = () => {
      fetch("/summary")
        .then((result) => result.json())
        .then((body) => {
          const s = JSON.stringify(body, null, 2);
          console.log(s);
          setSummary(s);
        });
    };
    getPurchases();
    getSummary();
  }, []);

  const purchasesColumns = [
    {
      name: "ID transaction",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Mont",
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "UserID",
      selector: (row) => row.userId,
      sortable: true,
    },
  ];
  const summaryColumns = [
    {
      name: "Title",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.month,
      sortable: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        margin: "5rem",
      }}
    >
      <section>
        <h2>All Purchases</h2>
        <DataTable columns={purchasesColumns} data={purchases} />
      </section>
      <section
        style={{
          marginLeft: "5rem",
        }}
      >
        <h2>Summary</h2>
        <textarea
          readOnly={true}
          disabled={true}
          rows={100}
          minLength={2000}
          value={summary}
          style={{ minHeight: "10vh", minWidth: "100%" }}
        ></textarea>
      </section>
    </div>
  );
}

export default App;
