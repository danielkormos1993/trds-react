import '../trds.css';
import createStyle from '../libs/createStyle';

createStyle(`

    div.card{
        background-color: var(--color--secondary-bg);
        display: flex;
        flex-direction: column;
        max-width: var(--element--max-width);
    }

    div.card-media{
        display: block;
    }

    div.card-body{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: var(--space--l);
    }

    div.card-footer{
        display: block;
        padding: var(--space--l);
        padding-top: 0;
    }

`);

export function Card({children, className, ...props}){

    return(
        <div className={`card${className ? ` ${className}` : ''}`} {...props}>
            {children}
        </div>
    )

}

export function CardMedia({children, className, ...props}){

    return(
        <div className={`card-media${className ? ` ${className}` : ''}`} {...props}>
            {children}
        </div>
    )

}

export function CardBody({children, className, ...props}){

    return(
        <div className={`card-body${className ? ` ${className}` : ''}`} {...props}>
            {children}
        </div>
    )

}

export function CardFooter({children, className, ...props}){

    return(
        <div className={`card-footer${className ? ` ${className}` : ''}`} {...props}>
            {children}
        </div>
    )

}