import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Theme";
import Header from "./ui/Header";
import SkipLink from "./links/SkipLink";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import MissingPage from "./pages/MissingPage";
import { convertForURL } from "../utilities/strings";
import data from "../data/data.json";

export default function App() {
    // Ensures that all data from data.json are given Routes
    const { destinations, crew, technology } = data;

    const destinationRoutes = destinations.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`destination-${convertForURL(element.name)}`}
            element={
                <Destination
                    allDestinations={destinations}
                    destination={element}
                />
            }
        />
    ));
    const crewRoutes = crew.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`crew-${convertForURL(element.name)}`}
            element={<Crew allCrew={crew} crewMember={element} />}
        />
    ));
    const techRoutes = technology.map((element) => (
        <Route
            key={convertForURL(element.name)}
            path={`technology-${convertForURL(element.name)}`}
            element={<Technology allTech={technology} tech={element} />}
        />
    ));

    return (
        <>
            <GlobalStyle />
            <SkipLink />
            <BrowserRouter>
                <Header />
                <main id="main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {destinationRoutes}
                        {crewRoutes}
                        {techRoutes}
                        <Route path="*" element={<MissingPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}
