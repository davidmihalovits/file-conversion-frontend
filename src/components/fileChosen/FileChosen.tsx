import "./FileChosen.sass";
import logo from "../../assets/logo.svg";

type FileChosenProps = {
    file: string;
    progress: string;
};

const FileChosen: React.FunctionComponent<FileChosenProps> = (props) => {
    return (
        <div className="file-uploading">
            <div className="file-uploading-container">
                <div className="file-uploading-inner">
                    <img
                        src={logo}
                        alt="shapr3dlogo"
                        className="file-uploading-logo"
                    />
                    <p className="file-uploading-filename">{props.file}</p>
                    <div
                        className={`${
                            props.progress === "100%"
                                ? "file-uploading-box-success"
                                : "file-uploading-box"
                        }`}
                    >
                        <p
                            className={`${
                                props.progress !== "100%"
                                    ? "file-uploading-text"
                                    : "file-uploading-text-disappear"
                            }`}
                        >
                            Uploading...
                        </p>
                        {props.progress === "100%" && (
                            <p className="file-uploading-text-success">
                                Upload successful
                            </p>
                        )}
                        <div
                            className={`${
                                props.progress === "100%"
                                    ? "file-uploading-bar-success"
                                    : "file-uploading-bar"
                            }`}
                            style={{ width: props.progress }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileChosen;
