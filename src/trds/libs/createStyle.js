export default function createStyle(style){

    const StyleTag = document.createElement('style');
    StyleTag.textContent = style;
    document.head.appendChild(StyleTag);

}