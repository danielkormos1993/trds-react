import '../trds.css';
import '../utils/size.css';
import createStyle from '../libs/createStyle';

createStyle(`
    span{
        max-width: var(--element--max-width);
    }
`);

export default function Text({children, ...props}){

    return(
        <span {...props}>{children}</span>
    )

}