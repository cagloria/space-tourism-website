import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";
import { colors } from "../Theme";

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    column-gap: 35px;
    justify-content: center;

    a {
        font-family: "Barlow Condensed", sans-serif;
        font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);
        letter-spacing: 2.7px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 12px;

        &::after {
            content: "";
            width: 100%;
            height: 3px;
            background-color: transparent;
            transition: background-color 0.2s ease-in-out;
        }

        &.tabs__active-page {
            &::after {
                background-color: ${colors.pageNav.active};
            }
        }

        &:hover {
            &::after {
                background-color: ${colors.pageNav.hover};
            }
        }

        &:active {
            &::after {
                background-color: ${colors.pageNav.active};
            }
        }
    }
`;

/**
 * Creates tabs of links.
 * @param {string} pathPrefix       String to prefix to all paths
 * @param {object} links            Array of objects, each object having a name
 *                                  property
 * @param {string} currentPageName  Current page's name
 * @param {function} onLinkClick            Function to activate upon clicking a link
 * @returns                         Unordered list of links styled as a list of
 *                                  tabs
 */
export default function Tabs({
    pathPrefix,
    links,
    currentPageName,
    onLinkClick,
}) {
    function handleLinkClick() {
        onLinkClick("destination__animated--slidein");
        onLinkClick("destination__animated--fadein");
    }

    const list = links.map((item) => {
        const path = `/${pathPrefix}-${convertForURL(item.name)}`;
        const className =
            currentPageName === item.name ? "tabs__active-page" : null;

        return (
            <li key={item.name}>
                <Link to={path} className={className} onClick={handleLinkClick}>
                    {item.name}
                </Link>
            </li>
        );
    });

    return <List className="tabs">{list}</List>;
}

Tabs.defaultProps = {
    pathPrefix: "destination",
    links: [
        { name: "Moon" },
        { name: "Mars" },
        { name: "Europa" },
        { name: "Titan" },
    ],
    currentPageName: "Moon",
};
