import { useState } from 'react'
import { getHighlighter, setCDN } from "shiki";
import './setup.css'

const SetupComponent = (props) => {

    setCDN("https://unpkg.com/shiki/");
    const [code, setCode] = useState("<div></div>");
    const [bgColor, setBgColor] = useState(document.getElementsByTagName("html")[0].style.backgroundColor)

    getHighlighter({theme: 'nord'}).then(highlighter => {
          var htmlString = highlighter.codeToHtml(props.fileText, { lang: 'py' });
          props.backgroundCallback(highlighter.getBackgroundColor())
          setBgColor(highlighter.getBackgroundColor())
          setCode(htmlString);
    });

    return (
        <div className="setup" backgroundColor={bgColor} dangerouslySetInnerHTML={{__html: code}}/>
    )
}

export default SetupComponent;