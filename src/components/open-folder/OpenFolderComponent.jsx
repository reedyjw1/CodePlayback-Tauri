import { Button } from "@mui/material";
import { open } from "@tauri-apps/api/dialog";
import './file-open.css'

function OpenFolderComponent(props) {

    function openFilePicker(e) {
        open().then((path) => { 
            console.log(path);
        });
    }

    return (
        <div className="button-container">
            <Button variant="contained" onClick={openFilePicker}>Open File</Button>
        </div>
    )
}

export default OpenFolderComponent;