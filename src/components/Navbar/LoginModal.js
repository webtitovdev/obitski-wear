import { useState } from "react";
import { useGetDataQuery } from "../../api/api";
import { login } from "../../slice/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Spinner from "../Spinner";
const LoginModal = ({ open, handleClose }) => {
  const { data, isLoading } = useGetDataQuery("loginData");
  const [loginValue, setLoginValue] = useState({ login: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      loginValue.login === data[0].name &&
      loginValue.password === data[0].text
    ) {
      console.log("Успешный вход");
      dispatch(login());
      setLoginValue({ ...loginValue, login: "", password: "" });
      handleClose();
      navigate("controlpanel");
    } else {
      console.log("Ошибка логина или пароля");
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
                  sx={{ m: 2 }}
                  label="Login"
                  name="email"
                  autoFocus
                  value={loginValue.login}
                  onChange={(e) =>
                    setLoginValue({ ...loginValue, login: e.target.value })
                  }
                />
                <TextField
                  sx={{ m: 2 }}
                  label="Password"
                  type="password"
                  value={loginValue.password}
                  onChange={(e) =>
                    setLoginValue({ ...loginValue, password: e.target.value })
                  }
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

export default LoginModal;
