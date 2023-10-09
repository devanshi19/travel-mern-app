import React, { useState } from 'react';
import "./Modal.css"

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
                        <form className="form-login">
                            <label>Username</label>
                            <input for="username" name="username" />
                            <label>Password</label>
                            <input for="password" name="password" />
                            <button>Login</button>
                            <span>New to travel?</span><a href="#">Signup</a>
                        </form>
                    )}
                    {activeTab === "signin" && (
                        <form className="form-signin">
                            <label>Username</label>
                            <input for="username" name="username" />
                            <label>Email</label>
                            <input for="email" name="email" />
                            <label>Password</label>
                            <input for="password" name="password" />
                            <label>Confirm Password</label>
                            <input for="confirm-pwd" name="confirm-pwd" />
                            <button>Signup</button>
                        </form>
                    )}
                </div>
                <div className='modal-footer'>
                    <button onClick={closeModal}>Close Modal</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;