import React, { SelectHTMLAttributes } from 'react';
//import do css
import './styles.css';
//props do Select
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    /*quando passado um Array deve também ser passado como é o formato dos itens dentro dele
    neste caso as opções são objetos */
    options: Array<{
        value:string;
        label:string;
    }>;
}
//React.FC<SelectProps>torna o Select um functional component e dá a eles as props de SelectProps
//desestrutura das props para utilizarmos somente o que queremos. os ...rest é um merge com todas as propriedades restantes
const Select:React.FC<SelectProps> = ({name, label,options, ...rest}) => {
    return (
        //o map é como uma estrutura de repetição que percorre os itens do array e retorna algo
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select  value="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione</option>
                {options.map(option =>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;