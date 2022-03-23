import createStyle from '../libs/createStyle';
import Icon from './Icon';

createStyle(`

    div.loader{
        width: 100%;
        height: 100%;
        max-height: 100vh;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
    }

    div.loader i{
        animation: TrdsSpin 1.5s linear infinite;
        font-size: 1.5em;
    }

    @keyframes TrdsSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
`);

export default function Loader(){

    return(
        <div className="loader">
            <Icon style={{'--icon-src':'url("/assets/icons/solid/spinner.svg")'}} />
        </div>
    )

}