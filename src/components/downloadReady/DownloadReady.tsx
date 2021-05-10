import logo from "../../assets/logo.svg";
import "./DownloadReady.sass";

type DownloadReadyProps = {
    file: string;
    downloadLink: string;
};

const DownloadReady: React.FunctionComponent<DownloadReadyProps> = (props) => {
    return (
        <div className="ready-download">
            <div className="ready-download-container">
                <div className="ready-download-inner">
                    <img
                        src={logo}
                        alt="logo"
                        className="ready-download-logo"
                    />
                    <p className="ready-download-filename">{props.file}</p>
                    <a
                        href={props.downloadLink}
                        className="ready-download-link"
                    >
                        <button className="ready-download-button">
                            Download
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DownloadReady;
