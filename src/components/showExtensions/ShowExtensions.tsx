import logo from "../../assets/logo.svg";
import "./ShowExtensions.sass";

type ShowExtensionsProps = {
    setDisappear: Function;
    setExtension: Function;
    setProgress2: Function;
    file: string;
    fileKey: string;
    setDownloadButton: Function;
    setFile: Function;
    setDownloadLink: Function;
    disappear: Boolean;
};

const ShowExtensions: React.FunctionComponent<ShowExtensionsProps> = (
    props
) => {
    // changes file extension on the server/storage then provides download link
    const changeExtension = async (e: string) => {
        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

        props.setDisappear(true);

        await delay(800);

        props.setExtension(e);

        props.setProgress2("1%");

        await fetch(
            `https://shapr3d-techtest-server.herokuapp.com/modifyExtension/${props.fileKey}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ext: e, filename: props.file }),
            }
        );

        props.setProgress2("99%");

        await delay(2500);

        props.setProgress2("100%");

        await delay(2500);

        props.setDownloadButton(true);

        props.setFile(props.file.replace(".shapr", e));
        const newFileName = props.file.replace(".shapr", e);

        props.setDownloadLink(
            `https://file-upload-challenge.s3.eu-central-1.amazonaws.com/${props.fileKey}-${newFileName}`
        );
    };

    return (
        <div className="show-extensions">
            <div className="show-extensions-container">
                <div className="show-extensions-inner">
                    <img
                        src={logo}
                        alt="shapr3dlogo"
                        className="show-extensions-logo"
                    />
                    <p className="show-extensions-filename">{props.file}</p>
                    <p
                        className={`${
                            props.disappear
                                ? "show-extensions-convert-disappear"
                                : "show-extensions-convert"
                        }`}
                    >
                        Convert to
                    </p>
                    <div
                        className={`${
                            props.disappear
                                ? "show-extensions-grid-disappear"
                                : "show-extensions-grid"
                        }`}
                    >
                        <button
                            className="show-extensions-button"
                            onClick={() => changeExtension(".STEP")}
                        >
                            STEP
                        </button>
                        <button
                            className="show-extensions-button"
                            onClick={() => changeExtension(".STL")}
                        >
                            STL
                        </button>
                        <button
                            className="show-extensions-button"
                            onClick={() => changeExtension(".IGES")}
                        >
                            IGES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowExtensions;
