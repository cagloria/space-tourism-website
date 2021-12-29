import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";
import { colors } from "../Theme";

const UnorderedListElement = styled.ul`
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

        &:hover {
            &::after {
                background-color: ${colors.gray};
            }
        }

        &:active {
            &::after {
                background-color: ${colors.white};
            }
        }
    }
`;

/**
 * Creates tabs of links.
 * @param {object} links    Array of objects, each object having a name property
 * @returns                 Unordered list of links
 */
export default function Tabs({ pathPrefix, links }) {
    const list = links.map((item) => (
        <li key={item.name} className="nav-heading-small">
            <Link to={`/${pathPrefix}-${convertForURL(item.name)}`}>
                {item.name}
            </Link>
        </li>
    ));

    return <UnorderedListElement>{list}</UnorderedListElement>;
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
