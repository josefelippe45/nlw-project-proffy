import React, { InputHTMLAttributes } from 'react';
//import do css
import './styles.css';
//props do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    label: string;
}
//React.FC<InputProps>torna o Input um functional component e dá a eles as props de InputProps
//desestrutura das props para utilizarmos somente o que queremos. os ...rest é um merge com todas as propriedades restantes
const Input:React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;