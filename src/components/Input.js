import "../pages/Main/Main.modules.css"

export const Input = ({inputArr}) => {
    return (
        <>
            {inputArr.map((item, index) => {
                const { type, label, typeStyle } = item;
                return (
                    <div key={index} className='input__item'>
                        <label className="main__label">{label}</label>
                        {<input type={type} className={typeStyle} placeholder={label}/>}
                    </div>
                );
            })}
        </>
    )
}



