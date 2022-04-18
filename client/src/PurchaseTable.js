import React from "react";
import DataTable from "react-data-table-component";
import { PurchaseColumns } from "./TableColumns";

function PurchasesTable(props) {
  return (
    <section>
      <h2>All Purchases</h2>
      <DataTable columns={PurchaseColumns} data={props.purchases} />
    </section>
  );
}

export default PurchasesTable;
