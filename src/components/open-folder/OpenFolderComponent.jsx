import { Button } from "@mui/material";
import { open } from "@tauri-apps/api/dialog";
import './file-open.css'

function OpenFolderComponent(props) {

    function openFilePicker(e) {
        // Get selected file and pass path to parent
        open().then((path) => {
            props.parentCallback(path)
        });
    }

    return (
        <div className="button-container">
            <Button variant="contained" onClick={openFilePicker}>Open File</Button>
        </div>
    )
}

export default OpenFolderComponent;