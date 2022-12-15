import type { CustomerI } from "../../interfaces/customer";
import { DataGrid, GridColumns, List, useDataGrid } from "@pankod/refine-mui";

const columns: GridColumns<CustomerI> = [
  { field: "id", headerName: "Customer Id", flex: 1, minWidth: 200 },
  { field: "firstName", headerName: "First Name", flex: 1, minWidth: 200 },
  { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 200 },
  { field: "address", headerName: "Address", flex: 1, minWidth: 200 },
  { field: "city", headerName: "City", flex: 1, minWidth: 200 },
  { field: "state", headerName: "State", flex: 1, minWidth: 200 },
  { field: "zip", headerName: "Zip Code", flex: 1, minWidth: 200 },
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
