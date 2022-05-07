import { fs } from "@tauri-apps/api";
import OpenFolderComponent from "../open-folder/OpenFolderComponent";
import SetupComponent from "../setup/SetupComponent";
import { useEffect, useState } from "react";
import { open } from "@tauri-apps/api/dialog";
import { listen } from '@tauri-apps/api/event'
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
            {(filePath === "") ? <OpenFolderComponent parentCallback={filePathCallback} /> : <SetupComponent fileText={filePath} backgroundCallback={props.bgCallback}/>}
        </div>
    )
}

export default HomeComponent;