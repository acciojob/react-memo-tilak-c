import React from "react";

const ReactMemo = React.memo(({ message }) => {
  console.log("Rendering ReactMemoExample...");
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>React.memo Example:</h4>
      <p>{message}</p>
    </div>
  );
});

export default ReactMemo;