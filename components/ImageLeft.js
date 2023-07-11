const ImageLeft = ({ image, altDesc, heading, para1, para2, buttonText }) => {
    return (
        <div className="container-img-left">
            <div className="container-img">
                <img src={image} width="100%" alt={altDesc} />
            </div>
            <div className="container-content">
                <h2>{heading}</h2>
                <p>{para1}</p>
                <p>{para2}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    )
}

export default ImageLeft;