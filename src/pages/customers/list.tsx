import type { CustomerI } from "../../interfaces/customer";
import {
  DataGrid,
  DeleteButton,
  EditButton,
  GridColumns,
  List,
  Stack,
  TagField,
  useDataGrid,
} from "@pankod/refine-mui";

const list = () => {
  const { dataGridProps } = useDataGrid<CustomerI>();

  const columns: GridColumns<CustomerI> = [
    {
      field: "id",
      headerName: "Customer Id",
      type: "string",
      flex: 1,
      minWidth: 200,
    },
    { field: "firstName", headerName: "First Name", flex: 1, minWidth: 200 },
    { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 200 },
    { field: "address", headerName: "Address", flex: 1, minWidth: 200 },
    { field: "city", headerName: "City", flex: 1, minWidth: 200 },
    { field: "state", headerName: "State", flex: 1, minWidth: 200 },
    {
      field: "zip",
      headerName: "Zip Code",
      minWidth: 50,
      renderCell: (params) => {
        return <TagField value={params.value} />;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1}>
            <EditButton hideText recordItemId={params.row.id} />
            <DeleteButton hideText recordItemId={params.row.id} />
          </Stack>
        );
      },
    },
  ];

  return (
    <List>
      <DataGrid
        columns={columns}
        {...dataGridProps}
        sortingMode="client"
        filterMode="client"
        autoHeight
      />
    </List>
  );
};

export default list;
