import React from 'react';
import "../pages/Main/Main.modules.css"

export const Input = ({ inputArr, register }) => {
    return (
        <>
            {inputArr.map((item, index) => {
                const { type, label, typeStyle, reg } = item;
                return (
                    <div key={index} className='input__item'>
                        <label className="main__label">{label}</label>
                        <input type={type} className={typeStyle} placeholder={label} {...register(reg)} />
                    </div>
                );
            })}
        </>
    )
};




