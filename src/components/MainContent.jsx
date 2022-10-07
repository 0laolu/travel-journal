// import React from "react"
import locationIcon from "../assets/location-icon.png"

export default function MainContent(props) {
    return (
        /* CARD CONTAINER */
        <section className="journal-card">
            <figure className="image-container">
                <img src={props.locationInfo.imageUrl} />
            </figure>
            
            <div className="journal-card__content">
                {/* LOCATION DETAILS */}
                <div className="location-details">
                    <div className="country-location">
                        <span>
                            <img src={locationIcon} />
                            <h4>{props.locationInfo.location}</h4>
                        </span>
                        <a href={props.locationInfo.googleMapsUrl} className="country-map-details">
                            View on Google Maps
                        </a>
                    </div>
                </div>
                
                {/* DESCRIPTION */}
                <section className="journal-card__description-container">
                    <h2 className="location-heading">{props.locationInfo.title}</h2>
                    <div className="journal-card__about-location">
                        <div className="duration-date">
                            <p>{props.locationInfo.startDate} - {props.locationInfo.endDate}</p>
                        </div>
                        <div className="journal-card__description">
                            <p>{props.locationInfo.description}</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}