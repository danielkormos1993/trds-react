import '../trds.css';
import createStyle from '../libs/createStyle';

createStyle(`

    div.container{
        display: block;
        width: 100%;
        max-width: var(--container--max-width);
        padding: 0 var(--container--padding-x);
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
    }
    
`);

export default function Container({children}){

    return(
        <div className="container">{children}</div>
    )

}