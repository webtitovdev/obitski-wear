import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
    let data = {};
    propsKeys.map((item) => {
      data[item] = "";
    });
    setInputValue(data);
  }, []);

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const handleSubmit = async (id, event) => {
    let data = { ...inputValue, id: `${getDataParams}/${id}` };
    event.preventDefault();
    await updateById(data).unwrap();
  };

  const render = propsKeys.map((item, i) => (
    <input
      key={i}
      className="inputadminform"
      placeholder={item}
      type="text"
      name={item}
      value={inputValue.item}
      onChange={(e) => handleChangeInput(e, i)}
    />
  ));
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
