const Feature = ({ icon, altDesc1, picture, altDesc2, heading }) => {
    return (
        <div className="feature-div">
            <div className="feature-award">
                <img src={icon} width="50%" alt={altDesc1} />
            </div>
            <img src={picture} width="100%" alt={altDesc2} />
            <h4>{heading}</h4>
        </div>
    )
}

export default Feature;