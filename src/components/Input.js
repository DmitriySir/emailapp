/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../pages/Main/Main.module.css';

export const Input = ({ inputArr, register }) => {
  return (
    <>
      {inputArr.map((item, index) => {
        const { type, label, typeStyle, reg } = item;
        return (
          <div key={index} className={styles.input__item}>
            <label className={styles.main__label}>{label}</label>
            <input
              type={type}
              className={typeStyle}
              placeholder={label}
              {...register(reg)}
            />
          </div>
        );
      })}
    </>
  );
};
