import React from 'react'

export const WeatherItemPage = (props) => {
    return (
        <>
            <h1 style={{display: "block", width: "413px", margin: "5vh auto",color:props.mode=="light"?"black":"white"}}>Weather for {props.textVal}</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" style={{ width: "70vw", margin: "5vh auto", justifyContent: "center" }} id="container">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm" id="item1">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Temperatures</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{props.val.temp}<small className="text-muted fw-light">℃</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Temperature is: {props.val.temp}</li>
                                <li>Min temp is: {props.val.min_temp}</li>
                                <li>Max temp is: {props.val.max_temp}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm" id="item2">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Humidity Info</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{props.val.humidity}<small className="text-muted fw-light">%</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Wind Degree: {props.val.wind_degrees}</li>
                                <li>Feels like: {props.val.feels_like}</li>
                                <li>Humdidity: {props.val.humidity}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary" id="item3">
                        <div className="card-header py-3 text-bg-primary border-primary">
                            <h4 className="my-0 fw-normal">Wind Info</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{props.val.wind_speed}<small className="text-muted fw-light"> km/hr</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Wind speed: {props.val.wind_speed}</li>
                                <li>Sunrise time: {props.val.sunrise}</li>
                                <li>Sunset time: {props.val.sunset}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
