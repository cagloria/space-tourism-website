import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";

const Text = styled.span`
    background-color: #464950;
    border-radius: 50%;
    display: block;
    width: 10px;
    height: 10px;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out;
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
        width: 28px;
        height: 28px;

        &.slider__active-page {
            ${Text} {
                background-color: #ffffff;
            }
        }

        &:hover {
            ${Text} {
                background-color: #85868b;
            }
        }

        &:active {
            ${Text} {
                background-color: #ffffff;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        column-gap: 8px;

        ${Text} {
            width: 15px;
            height: 15px;
        }

        a {
            &:first-child {
                margin-left: -25%;
            }
        }
    }

    @media screen and (min-width: 1440) {
        ${Text} {
            width: 20px;
            height: 20px;
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
        const isCurrentPage = currentPageName === item.name;
        const path = `/${pathPrefix}-${convertForURL(item.name)}`;
        const className = isCurrentPage ? "slider__active-page" : null;

        return (
            <li key={item.name}>
                <Link to={path} className={className}>
                    <Text>
                        {isCurrentPage
                            ? item.name + " (current page)"
                            : item.name}
                    </Text>
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
