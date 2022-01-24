import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    column-gap: 24px;
    justify-content: center;

    a {
        color: transparent;
        background-color: #464950;
        border-radius: 50%;
        display: block;
        width: 10px;
        height: 10px;
        overflow: hidden;
        transition: background-color 0.2s ease-in-out;

        &.slider__active-page {
            background-color: #ffffff;
        }

        &:hover {
            background-color: #85868b;
        }

        &:active {
            background-color: #ffffff;
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
                    {item.name}
                </Link>
            </li>
        );
    });

    return <List>{list}</List>;
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
