import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal, setEmail } from '../../store/ModalSlice';
import { Button } from "@mui/material";
import "./Modal.modules.css"

const Modal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);
    const email = useSelector(state => state.modal.email);

    const handleSend = () => {
        console.log('Email sent:', email);
        dispatch(closeModal());
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
                        <Button variant="contained" onClick={handleSend}>Send</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
