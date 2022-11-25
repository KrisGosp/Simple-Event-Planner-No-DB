import './Modal.css'
import ReactDOM from 'react-dom';

export default function Modal({ children, isSalesModal }) {  // we can also destructure children from props
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" 
            style={{
                border: "4px dotted", 
                textAlign: "center",
                borderColor: isSalesModal ? "#555" : "#ff4500" 
            }}>
            {children}
        </div>
    </div>
  ), document.body)
}
