import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";
import { colors } from "../Theme";

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    column-gap: 35px;
    justify-content: center;

    a {
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
 * @returns                         Unordered list of links styled as a list of
 *                                  tabs
 */
export default function Tabs({ pathPrefix, links, currentPageName }) {
    const list = links.map((item) => {
        const path = `/${pathPrefix}-${convertForURL(item.name)}`;
        const className =
            currentPageName === item.name ? "tabs__active-page" : null;

        return (
            <li key={item.name} className="nav-heading-small">
                <Link to={path} className={className}>
                    {item.name}
                </Link>
            </li>
        );
    });

    return <List>{list}</List>;
}

Tabs.defaultProps = {
    pathPrefix: "destination",
    links: [
        { name: "Moon" },
        { name: "Mars" },
        { name: "Europa" },
        { name: "Titan" },
    ],
};
