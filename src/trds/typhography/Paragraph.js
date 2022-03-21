import '../trds.css';
import '../utils/size.css';
import createStyle from '../libs/createStyle';

createStyle(`
    p{
        margin: 0;
        max-width: var(--element--max-width);
    }
`);

export default function Paragraph({children, ...props}){

    return(
        <p {...props}>{children}</p>
    )

}