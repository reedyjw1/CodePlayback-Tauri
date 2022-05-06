import { fs } from "@tauri-apps/api";
import OpenFolderComponent from "../open-folder/OpenFolderComponent";
import SetupComponent from "../setup/SetupComponent";
import { useState } from "react";
import './home.css'

function HomeComponent(props) {

    const [filePath, setFilePath] = useState("");

    function filePathCallback(path) {
        fs.readTextFile(path).then((fileContents) => {
            setFilePath(fileContents);
        });
    }

    return (
        <div>
            {(filePath === "") ? <OpenFolderComponent parentCallback={filePathCallback} /> : <SetupComponent fileText={filePath}/>}
        </div>
    )
}

export default HomeComponent;