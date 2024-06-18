import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/ModalSlice';
import { Button } from "@mui/material";
import { Input } from "../../components/Input";
import "./Main.modules.css";
import { Footer } from "../Footer/Footer";
import Divider from '@mui/material/Divider';
import Modal from "../Modal/Modal";

export const Main = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);

    const inputArr = [
        { label: "Enter your first name *", type: "text", style: "textInput" },
        { label: "Enter your email *", type: "email", style: "textInput" },
        { label: "Bio", type: "text", style: "textArea" },
        { label: "Country *", type: "text", style: "textInput" },
        { label: "City *", type: "text", style: "textInput" },
        { label: "Enter your address *", type: "text", style: "textInput" }
    ];

    const handleSave = () => {
        dispatch(openModal());
    };

    return (
        <div className="wrapper">
            <form className="wrapper">
                <Input inputArr={inputArr} />
            </form>
            <Divider />
            <Footer />
            <Button variant="contained" className="mainButton" onClick={handleSave}>Save</Button>
            {showModal && <Modal />}
        </div>
    );
};

export default Main;
