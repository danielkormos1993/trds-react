import '../trds.css';
import createStyle from '../libs/createStyle';

createStyle(`

    div.stack{
        display: grid;
        gap: var(--space--m);
        align-content: start;
    }
    
`);

export default function Stack({children, className, ...props}){

    return(
        <div className={`stack${className ? ` ${className}` : ''}`} {...props}>{children}</div>
    )

}