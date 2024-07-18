import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        position: "sticky",
        bottom: 0,
        background: "white",
        zIndex: 1000,
        padding: "10px 0",
      }}
    >
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Stack>
  );
};

export default Paginator;
