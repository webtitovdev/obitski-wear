import React, { useEffect, useState } from "react";
import { useUpdateByIdMutation } from "../../api/api";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ChangeItemForm = ({ props, open, handleClose, id, getDataParams }) => {
  const [updateById] = useUpdateByIdMutation();
  const [inputValue, setInputValue] = useState({});

  const propsKeys = Object.keys(props);
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
  useEffect(() => {
    intValue();
  }, []);
  const intValue = () => {
    let data = {};
    for (let i = 0; i < propsKeys.length; i++) {
      data[propsKeys[i]] = "";
    }
    setInputValue(data);
  };
  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "src") {
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = function () {
        setInputValue({ ...inputValue, src: reader.result });
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  };
  const handleSubmit = async (id, event) => {
    event.preventDefault();
    let data = { ...inputValue, id: `${getDataParams}/${id}` };
    await updateById(data).unwrap();
  };

  const render = propsKeys.map(function (item, i) {
    if (item === "src" || item === "original") {
      return (
        <input
          key={i}
          className="inputadminform"
          placeholder={item}
          type="file"
          name={item}
          value={inputValue.item}
          onChange={(e) => handleChangeInput(e, i)}
        ></input>
      );
    } else if (item === "id") {
      return null;
    }
    return (
      <input
        key={i}
        className="inputadminform"
        placeholder={item}
        type="text"
        name={item}
        value={inputValue.item}
        onChange={(e) => handleChangeInput(e, i)}
      ></input>
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
                <button
                  onClick={(event) => handleSubmit(id, event)}
                  type="submit"
                >
                  Отправить
                </button>
              </>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ChangeItemForm;
