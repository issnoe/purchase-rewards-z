export const PurchaseColumns = [
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
