import React from "react";

const Button = props => {
  return (
    <button
      type="button"
      className="button button-new"
      onClick={() => props.addEmptyItem(props.item)}
    >
      <span className="sr-only">Add to "Went Well"</span>+
    </button>
  );
};

export default Button;
