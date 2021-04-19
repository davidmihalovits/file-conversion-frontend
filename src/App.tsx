import { useState } from "react";
import "./App.sass";

import Home from "./components/home/Home";
import FileChosen from "./components/fileChosen/FileChosen";
import ShowExtensions from "./components/showExtensions/ShowExtensions";
import ExtensionChosen from "./components/extensionChosen/ExtensionChosen";
import DownloadReady from "./components/downloadReady/DownloadReady";

const App = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const [file, setFile] = useState("");
    const [progress, setProgress] = useState("0");
    const [showExtensions, setShowExtensions] = useState(false);
    const [fileKey, setFileKey] = useState("");
    const [disappear, setDisappear] = useState(false);
    const [extension, setExtension] = useState("");
    const [progress2, setProgress2] = useState("");
    const [downloadButton, setDownloadButton] = useState(false);
    const [downloadLink, setDownloadLink] = useState("");

    // download button is visible and link is ready
    if (downloadButton) {
        return <DownloadReady file={file} downloadLink={downloadLink} />;
    }

    // extension is chosen, converting in progress
    if (extension) {
        return (
            <ExtensionChosen
                file={file}
                progress2={progress2}
                extension={extension}
            />
        );
    }

    // show extension choices to user after file is uploaded
    if (showExtensions) {
        return (
            <ShowExtensions
                disappear={disappear}
                file={file}
                setFile={setFile}
                setDisappear={setDisappear}
                setExtension={setExtension}
                setProgress2={setProgress2}
                fileKey={fileKey}
                setDownloadButton={setDownloadButton}
                setDownloadLink={setDownloadLink}
            />
        );
    }

    // file is selected or dropped
    if (file) {
        return <FileChosen progress={progress} file={file} />;
    }

    // home screen, user uploads the file here
    return (
        <Home
            setProgress={setProgress}
            setFile={setFile}
            setFileKey={setFileKey}
            setShowExtensions={setShowExtensions}
            mouseEnter={mouseEnter}
            setMouseEnter={setMouseEnter}
        />
    );
};

export default App;
