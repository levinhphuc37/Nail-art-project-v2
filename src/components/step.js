const Step = ({stepNumber, title, description, imgSrc}) =>
{
    return (
        <div className="row">
            <div className="col d-flex flex-column justify-content-center">
                <h2>{stepNumber}</h2>
                <p>{description}</p>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <img src={imgSrc} alt={`Step ${stepNumber} Image`} className="img-fluid" />
            </div>
        </div>
    )
}

export default Step;