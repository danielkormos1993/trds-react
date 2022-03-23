import '../trds.css';
import createStyle from '../libs/createStyle';

createStyle(`

    div.tag{
        background-color: var(--color--accent);
        border-radius: 50px;
        box-sizing: border-box;
        padding: var(--space--xs) var(--space--s);
        font-size: var(--size--xs);
        min-width: max-content;
        max-width: max-content;
        display: inline-flex;
        gap: var(--space--xs);
        align-items: center;
        font-weight: bold;
    }

    div.tag.outline{
        box-shadow: inset 0 0 0 2px currentColor;
        background-color: transparent;
    }
    
`);

export default function Tag({children, className, ...props}){

    return(
        <div className={`tag${className ? ` ${className}` : ''}`} {...props}>{children}</div>
    )

}