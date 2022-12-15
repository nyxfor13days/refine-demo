import type { CustomerI } from "../../interfaces/customer";
import { DataGrid, GridColumns, List, useDataGrid } from "@pankod/refine-mui";

const columns: GridColumns<CustomerI> = [
  { field: "customerId", headerName: "Customer Id", flex: 1, minWidth: 200 },
];

const CustomersList = () => {
  const { dataGridProps } = useDataGrid<CustomerI>();

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};

export default CustomersList;
