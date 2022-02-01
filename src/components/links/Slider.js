import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";

const Span = styled.span`
    background-color: #464950;
    border-radius: 50%;
    display: block;
    width: 10px;
    height: 10px;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out;

    @media screen and (min-width: 1025px) {
        width: 15px;
        height: 15px;
    }

    @media screen and (min-width: 1441px) {
        width: 20px;
        height: 20px;
    }
`;

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: center;
    margin: 0;

    a {
        color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;

        &.slider__active-page {
            ${Span} {
                background-color: #ffffff;
            }
        }

        &:hover {
            ${Span} {
                background-color: #85868b;
            }
        }

        &:active {
            ${Span} {
                background-color: #ffffff;
            }
        }
    }

    @media screen and (min-width: 1025px) {
        column-gap: 8px;
        a {
            &:first-child {
                margin-left: -25%;
            }
        }
    }
`;

/**
 * Creates a slider of links.
 * @param {string} pathPrefix       String to prefix to all paths
 * @param {object} links            Array of objects, each object having a name
 *                                  property
 * @param {string} currentPageName  Current page's name
 * @returns                         Unordered list of links styled as a slider
 */
export default function Slider({ pathPrefix, links, currentPageName }) {
    const list = links.map((item) => {
        const path = `/${pathPrefix}-${convertForURL(item.name)}`;
        const className =
            currentPageName === item.name ? "slider__active-page" : null;

        return (
            <li key={item.name}>
                <Link to={path} className={className}>
                    <Span>{item.name}</Span>
                </Link>
            </li>
        );
    });

    return <List className="slider">{list}</List>;
}

Slider.defaultProps = {
    pathPrefix: "crew",
    links: [
        { name: "Douglas Hurley" },
        { name: "Mark Shuttleworth" },
        { name: "Victor Glover" },
        { name: "Anousheh Ansari" },
    ],
    currentPageName: "Douglas Hurley",
};
