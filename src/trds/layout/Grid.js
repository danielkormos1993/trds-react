import '../trds.css';
import createStyle from '../libs/createStyle';

createStyle(`

    div.grid{
        display: flex;
        flex-wrap: wrap;
        gap: var(--space--xxl);
    }

    div.grid.boxes-layout{
        gap: var(--space--m);
    }

    div.grid.auto-width-layout{
        gap: var(--space--s);
        align-items: center;
    }

    div.grid > *{
        flex:1 1 var(--element--base-width);
    }

    div.grid.auto-width-layout > *{
        flex: 0 1 auto;
    }
    
`);

export default function Grid({children, className, ...props}){

    return(
        <div className={`grid${className ? ` ${className}` : ''}`} {...props}>{children}</div>
    )

}