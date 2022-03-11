import React from "react";
import { useGetDataQuery } from "../../api/api";
import Spinner from "./../spinner/Spinner";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { login } from "../../slice/loginSlice";
import { useDispatch } from "react-redux";

const ModalCusom = ({ open, handleClose }) => {
  const { data, isLoading } = useGetDataQuery("loginData");
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const dataLogin = dataForm.get("email");
    const dataPassword = dataForm.get("password");
    if (data.login !== dataLogin) {
      console.log("Не верный логин или пароль");
    }
    if (data.password !== dataPassword) {
      console.log("Не верный логин или пароль");
    }
    if (data.login === dataLogin && data.password === dataPassword) {
      dispatch(login());
      console.log("Верно ");
      handleClose();
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h3" variant="h5">
                Войти
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Login"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Войти
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCusom;
