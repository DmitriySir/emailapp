import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal, setEmail } from '../../store/ModalSlice';
import { Button } from "@mui/material";
import emailjs from 'emailjs-com';
import "./Modal.modules.css"

const Modal = () => {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);
    const email = useSelector(state => state.modal.email);

    const getCurrentTime = () => {
        const now = new Date();
        const formattedTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        return formattedTime;
    };

   const sendEmail = () => {
    const currentTime = getCurrentTime(); 
    const templateParams = {
        to_email: email, 
        from_name: localStorage.getItem('name'),
        message: `${localStorage.getItem('savedData')} - Отправлено ${currentTime}`
    };
    dispatch(closeModal());
    
    emailjs.send('service_i3km1zp', 'template_ju9uhq2', templateParams, 'PlCvYPx-o2v7rAah7')
        .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
        }, (error) => {
            console.error('Failed to send email:', error);
        });
};


    return (
        <div>
            <button onClick={() => dispatch(openModal())}>Открыть модальное окно</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span onClick={() => dispatch(closeModal())} className="close">&times;</span>
                        <h2>Введите email</h2>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            placeholder="Email"
                            className='modal__input'
                        />
                        <Button variant="contained" onClick={sendEmail}>Send</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
