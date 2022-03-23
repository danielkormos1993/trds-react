import createStyle from '../libs/createStyle';
import { useRef, useEffect } from 'react';

createStyle(`

    i{
        display: block;
        width: 1em;
        height: 1em;
        background: currentColor;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center center;
        mask-position: center center;
        -webkit-mask-image: var(--icon-src);
        mask-image: var(--icon-src);
    }

    i.lazy{
        -webkit-mask-image: none;
        mask-image: none;
    }
    
`);

const TrdsIconIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.classList.remove('lazy');
            TrdsIconIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default function Icon({children, ...props}){

    const ref = useRef();

    useEffect(() => {
        if(ref.current.classList.contains('lazy'))
            TrdsIconIntersectionHandler.observe(ref.current);
    }, [])
    
    return(
        <i {...props} ref={ref}></i>
    )

}