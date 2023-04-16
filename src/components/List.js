import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button className="btn-edit" onClick={()=>editItem(id)}>
          <FiEdit />
        </button>
        <button className="btn-delete" onClick={() => removeItem(id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default List;
