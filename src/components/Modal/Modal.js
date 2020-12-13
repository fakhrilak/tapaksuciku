import React from 'react'
import "./Modal.css"
const Modal = (props) => {
  return (
    <div>
        <div className='modal-wrapper'
        style={{
            transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
            <div className='modal-body'>{props.children}</div>   
        </div>
    </div>
    
  )
}

export default Modal