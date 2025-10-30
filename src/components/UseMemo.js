import React, { useMemo } from "react";

const UseMemo = ({ count }) => {
    
  const squaredValue = useMemo(() => {
    console.log("Calculating squared value...");
    return count * count;
  }, [count]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>useMemo Example:</h4>
      <p>Square of counter: {squaredValue}</p>
    </div>
  );
};

export default UseMemo;