import React from "react";

function Button({ children, variant, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
