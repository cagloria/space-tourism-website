import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../elements/PagesHeading";
import Tabs from "../links/Tabs";
import { colors } from "../Theme";
import { getImageByFormat } from "../../utilities/assets";
import bgMobile from "../../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import data from "../../data/data.json";

const GlobalDestinationStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: 376px) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            background-image: url(${bgDesktop});
        }
    }

    .destination__animated {
        animation-duration: 0.75s;
        animation-timing-function: ease-in-out;

        @media (prefers-reduced-motion) {
            animation-name: unset;
        }

        &--slidein {
            animation-name: slidein;

            @keyframes slidein {
                from {
                    transform: translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            
        }

        &--fadein {
            animation-name: expand;
            animation-duration: 1.25s;
            
            @keyframes expand {
                0% {
                    opacity: 0;
                }
                75% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }
`;

const Image = styled.picture`
    margin-bottom: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        width: clamp(170px, 39vw, 445px);
    }
`;

const NameHeading = styled.h2`
    font-size: clamp(3.5rem, 8.3vw + 1rem, 6.25rem);
    margin: 20px auto 1px;
    text-align: center;
    text-transform: uppercase;
`;

const Description = styled.p`
    text-align: center;
    max-width: 64ch;
    margin: 0 auto;
`;

const HorizontalLine = styled.hr`
    margin: 32px 0;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 32px;
`;

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    text-align: center;
    text-transform: uppercase;

    h3 {
        font-size: 14px;
        margin: 0;
    }

    p {
        color: ${colors.primary.white};
        font-family: var(--font-body);
        font-size: 28px;
        margin: 0;
        line-height: 120%;
    }
`;

const Container = styled.section`
    padding-bottom: 58px;
    display: flex;
    flex-direction: column;

    h1 {
        margin: 0 0 35px;
        text-align: center;
        grid-area: heading;
        order: 1;
    }

    ${Image} {
        order: 2;
    }

    .tabs {
        grid-area: tabs;
        order: 3;
    }

    ${NameHeading} {
        order: 4;
    }

    ${Description} {
        order: 5;
    }

    ${HorizontalLine} {
        order: 6;
    }

    ${StatsContainer} {
        order: 7;
    }

    @media screen and (min-width: 768px) {
        h1 {
            text-align: left;
            margin-bottom: 60px;
        }

        ${Image} {
            margin-bottom: 53px;
        }

        ${NameHeading} {
            margin-top: 32px;
            margin-bottom: 8px;
        }

        ${HorizontalLine} {
            margin-top: 49px;
            margin-bottom: 28px;
        }

        ${StatsContainer} {
            flex-direction: row;
            column-gap: 14.5vw;
            justify-content: center;
        }
    }

    @media screen and (min-width: 1200px) {
        padding-bottom: 62px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(3, auto) 1fr repeat(2, auto);
        grid-template-areas:
            "heading heading"
            "img     tabs"
            "img     name"
            "img     body"
            "img     line"
            "img     stats";
        column-gap: clamp(135px, 11vw, 157px);

        .tabs {
            justify-content: flex-start;
        }

        h1 {
            margin-bottom: 64px;
        }

        ${Image} {
            grid-area: img;
            margin-left: 42px;
            margin-bottom: 0;
        }

        ${NameHeading} {
            grid-area: name;
            margin: 37px 0 14px;
            text-align: left;
        }

        ${Description} {
            grid-area: body;
            margin: 0;
            text-align: left;
        }

        ${HorizontalLine} {
            grid-area: line;
            margin-top: 54px;
            margin-bottom: 28px;
        }

        ${StatsContainer} {
            grid-area: stats;
            margin: 0;
            flex-direction: row;
            justify-content: flex-start;
            column-gap: 5.5vw;
        }

        ${Stats} {
            text-align: left;
        }
    }

    @media screen and (min-width: 1024px) and (max-height: 800px) {
        padding-top: 0;
        padding-bottom: 0;

        ${Image} {
            > * {
                width: 350px;
            }
        }
    }
`;

/**
 * Takes a destination object and returns markup describing that destination.
 * @param {object} destination  Destination object
 * @returns                     Destination page
 */
export default function Destination({ destination }) {
    const { destinations } = data;

    useEffect(() => {
        document.title = `Destination: ${destination.name} | Space Tourism`;
    }, [destination.name]);

    return (
        <Container>
            <GlobalDestinationStyle />
            <PagesHeading number="01" text="Pick your destination" />

            <Tabs
                pathPrefix="destination"
                links={destinations}
                currentPageName={destination.name}
            />

            <NameHeading className="destination__heading color-primary-white">
                {destination.name}
            </NameHeading>

            <Image id="planet-image">
                <source
                    srcSet={getImageByFormat(
                        destinations,
                        destination.name,
                        "webp"
                    )}
                    type="image/webp"
                />
                <img
                    srcSet={getImageByFormat(
                        destinations,
                        destination.name,
                        "png"
                    )}
                    alt={destination.imgAlt}
                />
            </Image>

            <Description>{destination.description}</Description>

            <HorizontalLine aria-hidden="true" />

            <StatsContainer>
                <Stats>
                    <h3 className="nav-heading-small">Avg. distance</h3>
                    <p>{destination.distance}</p>
                </Stats>

                <Stats>
                    <h3 className="nav-heading-small">Est. travel time</h3>
                    <p>{destination.travel}</p>
                </Stats>
            </StatsContainer>
        </Container>
    );
}

Destination.defaultProps = {
    destination: {
        name: "Moon",
        images: {
            png: "./assets/destination/image-moon.png",
            webp: "./assets/destination/image-moon.webp",
        },
        imgAlt: "Earth's moon",
        description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
};
