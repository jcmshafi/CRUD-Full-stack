import loader from "../assets/images/loader.svg"
const FullScreenLoader = () => {
    return (
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img className="loader-size" src={loader}/>
                </div>
            </div>
    );
};

export default FullScreenLoader;