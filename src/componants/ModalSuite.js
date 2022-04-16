import React from 'react'

const ModalSuite = (props) => {
  console.log(props)
  return (
    <div
      className="modale"
      style={{
        opacity: props.visible ? "1" : "0",
        zIndex: props.visible ? "10" : "-1",
      }}
    >
      <button onClick={props.cache}>X</button>
      Modal_suite
    </div>
  );
}

export default ModalSuite
