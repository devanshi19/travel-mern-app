import React, { useState } from 'react';
import "./Modal.css";
import Register from '../../pages/Register/Register';
import Login from "../../pages/Login/Login"

const Modal = ({ closeModal }) => {
    const [activeTab, setActiveTab] = useState('login');
    return (
        <div id="modal" className="modal">
            <div class="modal-content">
                <div className="modal-header">
                    <ul>
                        <li onClick={() => setActiveTab("login")} className={activeTab === "login" ? "active" : ""}>Login</li>
                        <li onClick={() => setActiveTab("signin")} className={activeTab === "signin" ? "active" : ""}>Signup</li>
                    </ul>
                </div>
                <div className="modal-body">
                    {activeTab === "login" && (
                        <Login setActiveTab={setActiveTab} />
                    )}
                    {activeTab === "signin" && (
                        <Register />
                    )}
                </div>
                <div className='modal-footer'>
                    <button onClick={closeModal} className="btn-link">Close Modal</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;