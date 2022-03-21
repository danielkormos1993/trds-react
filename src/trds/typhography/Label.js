import '../trds.css';
import '../utils/size.css';
import createStyle from '../libs/createStyle';

createStyle(`
    label{
        display: block;
        max-width: var(--element--max-width);
    }
`);

export default function Label({children, ...props}){

    return(
        <label {...props}>{children}</label>
    )

}