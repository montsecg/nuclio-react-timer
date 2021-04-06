import React from "react";

function Timer({ value, onClick }) {
  return <div onClick={onClick}>{value}</div>;
}

export default Timer;
