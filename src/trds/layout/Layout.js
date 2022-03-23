import '../trds.css';
import createStyle from '../libs/createStyle';
import Section from './Section.js';

createStyle(`

    body{
        margin: 0;
        padding: 0;
    }

    div#app{
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
    }

    main{
        display: flex;
        flex-direction: column;
    }
    
`);

export { Section }