import { useState } from 'react'
import { getHighlighter, setCDN } from "shiki";

const SetupComponent = (props) => {

    setCDN("https://unpkg.com/shiki/");
    const [code, setCode] = useState("<div></div>");

    getHighlighter({theme: 'nord'}).then(highlighter => {
          var htmlString = highlighter.codeToHtml(props.fileText, { lang: 'py' });
          setCode(htmlString);
    });

    return (
        <div dangerouslySetInnerHTML={{__html: code}}/>
    )
}

export default SetupComponent;