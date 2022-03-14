import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddNewItemMutation } from "../../api/api";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddNewItemForm = ({ props, open, handleClose, getDataParams }) => {
  const [inputValue, setInputValue] = useState({});
  const [addNewItem] = useAddNewItemMutation();

  useEffect(() => {
    let data = {};
    for (let i = 0; i < propsKeys.length; i++) {
      data[propsKeys[i]] = "";
    }
    setInputValue(data);
  }, []);

  const propsKeys = Object.keys(props);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      ...inputValue,
      id: `${uuidv4()}`,
      getDataParams: getDataParams,
    };
    addNewItem(data);
  };

  const render = propsKeys.map(function (item, i) {
    if (item === "id") {
      return null;
    }
    return (
      <TextField
        id="outlined-basic"
        sx={{ width: "90%", m: 2 }}
        label={item}
        variant="outlined"
        key={i}
        className="inputadminform"
        placeholder={item}
        type="text"
        name={item}
        value={inputValue.item}
        onChange={(e) => handleChangeInput(e, i)}
      />
    );
  });

  return (
    <>
      <div className="row">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <>
                {render}
                <Button
                  fullWidth
                  variant="contained"
                  onClick={(event) => handleSubmit(event)}
                  type="submit"
                >
                  Отправить
                </Button>
              </>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddNewItemForm;
