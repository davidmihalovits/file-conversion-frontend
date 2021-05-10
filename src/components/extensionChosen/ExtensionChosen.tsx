import logo from "../../assets/logo.svg";
import "./ExtensionChosen.sass";

type ExtensionChosenProps = {
    progress2: string;
    file: string;
    extension: string;
};

const ExtensionChosen: React.FunctionComponent<ExtensionChosenProps> = (
    props
) => {
    return (
        <div className="extensionchosen-convert">
            <div className="extensionchosen-convert-container">
                <div className="extensionchosen-convert-inner">
                    <img
                        src={logo}
                        alt="logo"
                        className="extensionchosen-convert-logo"
                    />
                    <p
                        className={`${
                            props.progress2 === "100%"
                                ? "extensionchosen-convert-filename-disappear"
                                : "extensionchosen-convert-filename"
                        }`}
                    >
                        {props.file}
                    </p>
                    <div
                        className={`${
                            props.progress2 === "100%"
                                ? "extensionchosen-convert-box-success"
                                : "extensionchosen-convert-box"
                        }`}
                    >
                        <p
                            className={`${
                                props.progress2 !== "100%"
                                    ? "extensionchosen-convert-text"
                                    : "extensionchosen-convert-text-disappear"
                            }`}
                        >
                            Converting to {props.extension}
                        </p>
                        {props.progress2 === "100%" && (
                            <p className="extensionchosen-convert-text-success">
                                Successful
                            </p>
                        )}
                        <div
                            className={`${
                                props.progress2 === "100%"
                                    ? "extensionchosen-convert-bar-success"
                                    : "extensionchosen-convert-bar"
                            }`}
                            style={{ width: props.progress2 }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtensionChosen;
