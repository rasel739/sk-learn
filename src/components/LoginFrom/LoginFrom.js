import React,{useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Register from '../Register/Register';
import './LoginFrom.css';


const LoginFrom = () => {

     const values = [
       true,
       
      
     ];
     const [fullscreen, setFullscreen] = useState(true);
     const [show, setShow] = useState(false);

     function handleShow(breakpoint) {
       setFullscreen(breakpoint);
       setShow(true);
     }
   return (
     <>
       {values.map((v, idx) => (
         <Button
           key={idx}
           className="me-2 btn-bg text-dark"
           onClick={() => handleShow(v)}
         >
           Register
           {typeof v === "string" && `below ${v.split("-")[0]}`}
         </Button>
       ))}
       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
         <Modal.Header closeButton className="header-bg">
           <div className="row  from-div">
             <div className="reg-div col-6 ">
               <h3 className="registion">Registion From</h3>
             </div>
             <div className="login-div col-6">
               <h3 className="login ms-5">Login From</h3>
             </div>
           </div>
         </Modal.Header>
         <Modal.Body className="header-bg">
           <Register></Register>
         </Modal.Body>
       </Modal>
     </>
   );
};

export default LoginFrom;