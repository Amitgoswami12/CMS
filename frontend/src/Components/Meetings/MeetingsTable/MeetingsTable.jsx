import Box from "@mui/material/Box";
import { DataGrid, GridOverlay, GridToolbar } from "@mui/x-data-grid";
import * as React from "react";
import MeetingModal from "./MeetingModal";

export default function MeetingsTable({ meetingsData }) {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true)
  const columns = [
    { field: "id", headerName: "ID", width: "35" },
    { field: "date", headerName: "Date", width: "125" },
    { field: "time", headerName: "Time", width: "125" },
    { field: "name", headerName: "Name", width: "120" },
    { field: "subject", headerName: "Subject", width: "120" },
    { field: "priority", headerName: "Priority", width: "120" },
    { field: "email", headerName: "Email", width: "240" },
    { field: "phone", headerName: "Phone", width: "120" },
    // Add more columns as needed
  ];
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
  });
  // Otherwise filter will be applied on fields such as the hidden column id
  const rows = meetingsData.map((employee, index) => ({
    id: employee?._id ,
    date: employee?.date,
    time: employee?.time,
    name: employee?.contactName,
    email: employee?.email,
    phone: employee?.phone,
    subject: employee?.subject,
    priority: employee?.priority,
    // Add more fields as needed
  }));

  const handleCloseModal = () => {
    setSelectedRow(null);
  };
  return (
    <Box sx={{ height: "80vh", width: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // isRowSelectable={true}
        // onRowClick={console.log("hello")}
        // onRowDoubleClick={}
        onRowDoubleClick={(params) => {
          let temp = meetingsData.filter(el=>{
            return el?._id ==params?.row?.id
          })
          setSelectedRow(temp[0]);
        }}
        // disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay, // Custom overlay component when there are no rows
        }}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) =>
          setColumnVisibilityModel(newModel)
        }
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true }
          },
        }}
      />
      {selectedRow && (
        <MeetingModal data={selectedRow} setOpen={setSelectedRow} open={Boolean(selectedRow)} handleClose={handleCloseModal} disabled={disabled} setDisabled={setDisabled} />

      )}
    </Box>
  );
}

function CustomNoRowsOverlay() {
  return (
    <GridOverlay>
      <div>No employees found.</div>
    </GridOverlay>
  );
}
