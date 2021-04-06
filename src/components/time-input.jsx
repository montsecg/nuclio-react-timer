import React from "react";

function TimeInput({ value, onChange, onBlur }) {
  return (
    <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  );
}

export default TimeInput;
