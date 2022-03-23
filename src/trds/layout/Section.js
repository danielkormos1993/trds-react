import '../trds.css';
import createStyle from '../libs/createStyle';
import Container from './Container';
import { useRef, useEffect } from 'react';

createStyle(`

    section{
        display: block;
        padding: var(--space--xxl) 0;
    }

    section:last-child{
        flex: 1;
    }

    section.bg-image{
        --bg-image-overlay: var(--color--primary-bg);
        background: var(--bg-image-src) var(--bg-image-overlay);
        background-position: center center;
        background-size: cover;
        background-blend-mode: overlay;
    }

    section.lazy{
        background: var(--bg-image-overlay);
    }
    
`);

const TrdsSectionIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.classList.remove('lazy');
            TrdsSectionIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default function Section({children, ...props}){

    const ref = useRef();

    useEffect(() => {
        if(ref.current.classList.contains('lazy'))
            TrdsSectionIntersectionHandler.observe(ref.current);
    }, [])
    
    return(
        <section {...props} ref={ref}>
            <Container>{children}</Container>
        </section>
    )

}