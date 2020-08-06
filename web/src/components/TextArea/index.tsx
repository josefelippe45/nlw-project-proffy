import React, { TextareaHTMLAttributes } from 'react';
//import do css
import './styles.css';
//props do Input
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string
    label: string;
}
//React.FC<TextareaProps>torna o Textarea um functional component e dá a eles as props de TextareaProps
//desestrutura das props para utilizarmos somente o que queremos. os ...rest é um merge com todas as propriedades restantes
const Textarea:React.FC<TextareaProps> = ({name, label, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea  id={name} {...rest} />
        </div>
    );
}

export default Textarea;