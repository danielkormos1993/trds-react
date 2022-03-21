import '../trds.css';
import '../utils/size.css';
import createStyle from '../libs/createStyle';

createStyle(`

    h1, h2, h3, h4, h5, h6{
        max-width: var(--element--max-width);
        margin: 0;
        font-weight: bold;
    }

    h1{
        font-size: var(--size--xxl);
        line-height: var(--size--xxl--line-height);
    }

    h2{
        font-size: var(--size--xl);
        line-height: var(--size--xl--line-height);
    }

    h3{
        font-size: var(--size--l);
        line-height: var(--size--l--line-height);
    }

    h4{
        font-size: var(--size--m);
        line-height: var(--size--m--line-height);
    }

    h5{
        font-size: var(--size--s);
        line-height: var(--size--s--line-height);
    }

    h6{
        font-size: var(--size--xs);
        line-height: var(--size--xs--line-height);
    }

    h1.variant--1,
    h2.variant--1,
    h3.variant--1,
    h4.variant--1,
    h5.variant--1,
    h6.variant--1{
        font-size: var(--size--m);
        line-height: var(--size--m--line-height);
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: var(--color--secondary-text);
    }

`);

export default function Title({children, level, ...props}){

    const TitleTag = `h${level}`;

    return(
        <TitleTag {...props}>{children}</TitleTag>
    )

}