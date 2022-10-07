// import React from "react"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Data from "./data"

export default function App() {
    const locationData = Data.map(locationInfo => {
        return <MainContent 
                    key={locationInfo.id}
                    locationInfo={locationInfo}
                />
    })
    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="main">
                {locationData}
            </main>
        </div>
    )
}
