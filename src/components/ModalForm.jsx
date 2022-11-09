import React, { useState } from "react";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalForm = (props) => {
  const [changeModal, setChangeModal] = useState(false);

  const btnChangeModal = (e) => {
    e.preventDefault();
    setChangeModal(!changeModal);
  };

  return (
    <div className="w-[100%] md:w-[50%] p-8 bg-white relative">
      {!changeModal ? (
        <LoginModal openModal={btnChangeModal} />
      ) : (
        <RegisterModal openModal={btnChangeModal} />
      )}
      <div
        className="absolute top-4 right-4 text-xl md:text-4xl cursor-pointer hover:text-[red]"
        onClick={props.closeModal}
      >
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
};

export default ModalForm;
