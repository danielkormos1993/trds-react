import createStyle from '../libs/createStyle';

createStyle(`

    a{
        transition: filter 0.25s ease-in-out;
        color: inherit;
        cursor: pointer;
    }

    a:hover,
    a:active,
    a:focus{
        filter: brightness(125%);
    }

    a.text{
        text-decoration: underline;
    }

    a.block{
        display: block;
        max-width: max-content;
        text-decoration: none;
    }
    
`);

export default function Link({children, ...props}){

    if(props.href && props.href.startsWith('http') && !props.href.includes(window.location.hostname))
        props.rel = 'noopener noreferrer';

    return(
        <a {...props}>{children}</a>
    )

}