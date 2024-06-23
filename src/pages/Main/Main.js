/* eslint-disable no-useless-escape */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/ModalSlice';
import { Button } from "@mui/material";
import { Input } from "../../components/Input";
import styles from "./Main.module.css";
import { Footer } from "../Footer/Footer";
import Divider from '@mui/material/Divider';
import Modal from "../Modal/Modal";
import { useForm } from 'react-hook-form';

export const Main = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);
    const { register, handleSubmit } = useForm({
        defaultValues: {}
    });

    const inputArr = [
        { label: "Enter your first name *", type: "text", style: "textInput", reg: 'name' },
        { label: "Enter your email *", type: "email", style: "textInput", reg: 'email' },
        { label: "Bio", type: "text", style: "textArea", reg: 'bio', req: false },
        { label: "Country *", type: "text", style: "textInput", reg: 'country' },
        { label: "City *", type: "text", style: "textInput", reg: 'city' },
        { label: "Enter your address *", type: "text", style: "textInput", reg: 'address' }
    ];

    const emailRegex = /^(([^<>()$$$\]\\.,;:\s@"]+(\.[^<>()\[$$$\\.,;:\s@"]+)*)|(".+"))@(([^<>()$$$\]\\.,;:\s@"]+\.)+[^<>()\[$$$\\.,;:\s@"]{2,})$/iu;

    const submit = data => {
        console.log(data);
        const requiredFields = inputArr.filter(field => field.req !== false);
        const isAnyRequiredFieldEmpty = requiredFields.some(field => data[field.reg] === '');
        if (isAnyRequiredFieldEmpty) {
            alert('Заполните все поля помеченные звёздочкой.');
        } else if (data.email && !emailRegex.test(data.email)) {
            alert('Введите корректный email-адрес.');
        } else {
            dispatch(openModal());
            localStorage.setItem('savedData', JSON.stringify(data));
            console.log(localStorage.getItem('savedData'));
        }
    };


    return (
        <div className={styles.wrapper}>
            <form className={styles.wrapper} id='data'>
                <Input inputArr={inputArr} register={register} />
            </form>
            <Divider />
            <Footer />
            <Button variant="contained" className={styles.mainButton} form='data' onClick={handleSubmit(submit)} >Save</Button>
            {showModal && <Modal />}
        </div>
    );
};

export default Main;
