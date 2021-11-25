import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import MissingPage from "./MissingPage";
import { convertForURL } from "../utilities/strings";
import data from "../data/data.json";
// import { GlobalStyle } from "./Theme";

export default function App() {
    // Ensures that all data from data.json are given Routes
    const { destinations, crew, technology } = data;
    const destinationRoutes = destinations.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`destination-${convertForURL(element.name)}`}
            element={
                <Destination
                    destination={element}
                    allDestinations={data.destinations}
                />
            }
        />
    ));
    const crewRoutes = crew.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`crew-${convertForURL(element.name)}`}
            element={<Crew crewMember={element} allCrewMembers={data.crew} />}
        />
    ));
    const techRoutes = technology.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`technology-${convertForURL(element.name)}`}
            element={<Technology tech={element} allTech={data.technology} />}
        />
    ));

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {destinationRoutes}
                    {crewRoutes}
                    {techRoutes}
                    <Route path="*" element={<MissingPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
