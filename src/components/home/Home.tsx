import "./Home.sass";
import logo from "../../assets/logo.svg";
import React from "react";

type HomeProps = {
    setProgress: Function;
    setFile: Function;
    setFileKey: Function;
    setShowExtensions: Function;
    mouseEnter: Boolean;
    setMouseEnter: Function;
};

const Home: React.FunctionComponent<HomeProps> = (props) => {
    // runs when user selects a file, only .txt extension accepted
    const fileOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        props.setProgress("1%");

        var file: File = e.target.files![0];

        const lastDot = file.name.lastIndexOf(".");
        const extension = file.name.substring(lastDot + 1);

        // stops here if file extension is not .txt
        if (extension !== "txt") {
            return alert("Wrong file extension, only .txt is accepted!");
        }

        const formData: FormData = new FormData();
        formData.append("file", file);

        props.setFile(file.name);

        await fetch("https://file-conversion-mock.herokuapp.com/uploadFile", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => props.setFileKey(res.key));

        props.setProgress("99%");

        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

        await delay(2500);

        props.setProgress("100%");

        await delay(2500);

        props.setShowExtensions(true);
    };

    // runs when user drops a file, only .txt extension accepted
    const handleOnDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();

        props.setProgress("1%");

        const file = e.dataTransfer.files[0];

        const name = e.dataTransfer.files[0].name;
        const lastDot = name.lastIndexOf(".");
        const extension = name.substring(lastDot + 1);

        // stops here if file extension is not .txt
        if (extension !== "txt") {
            return alert("Wrong file extension, only .txt is accepted!");
        }

        const formData = new FormData();
        formData.append("file", file);

        props.setFile(file.name);

        await fetch("https://file-conversion-mock.herokuapp.com/uploadFile", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => props.setFileKey(res.key));

        props.setProgress("99%");

        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

        await delay(2500);

        props.setProgress("100%");

        await delay(2500);

        props.setShowExtensions(true);
    };

    const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    return (
        <div className="home">
            <div
                className={`${
                    props.mouseEnter ? "home-container-hover" : "home-container"
                }`}
                onMouseEnter={() => props.setMouseEnter(true)}
                onMouseLeave={() => props.setMouseEnter(false)}
            >
                <label
                    htmlFor="file"
                    className="home-label"
                    onDrop={(e) => handleOnDrop(e)}
                    onDragOver={(e) => handleDrag(e)}
                    onDragEnter={(e) => handleDrag(e)}
                    onDragLeave={(e) => handleDrag(e)}
                >
                    <input
                        style={{ display: "none" }}
                        name="file"
                        id="file"
                        type="file"
                        accept=".txt"
                        value={""}
                        onChange={fileOnChange}
                    />
                    <div className="home-inner">
                        <div>
                            <img src={logo} alt="logo" className="home-logo" />
                            <p className="home-primary-instruction">
                                Drop your .txt file here, or{" "}
                                <span className="home-browse">browse</span>
                            </p>
                            <p className="home-secondary-instruction">
                                Supports: .STEP, .STL and .IGES
                            </p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Home;
