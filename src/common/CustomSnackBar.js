import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomSnackBar = ({ open, state, handleClose }) => {
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose();
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={state === "error" ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state !== "danger"
            ? "OOPS! Something went wrong, please try again later..."
            : "Success Message"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackBar;
