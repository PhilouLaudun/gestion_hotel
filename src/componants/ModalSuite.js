import React from "react";

const ModalSuite = (props) => {
 console.log(props.suite)
  return (
    <div
      className="modale"
      style={{
        opacity: props.visible ? "1" : "0",
        zIndex: props.visible ? "10" : "-1",
      }}
    >
      <button onClick={props.cache}>X</button>
      <div>
        {" "}
        fgshsdfgh
        {props.suite.map((suite) => (
          <div>
            {suite.id}
            {suite.nom}
            {suite.infos}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalSuite;
