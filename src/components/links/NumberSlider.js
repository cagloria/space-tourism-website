import { Link } from "react-router-dom";
import { convertForURL } from "../../utilities/strings";
import styled from "styled-components";
import { colors } from "../Theme";

const List = styled.ol`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: center;
    column-gap: 16px;
    counter-reset: nav-counter; /* Sets starting number to be 0 */

    li {
        counter-increment: nav-counter;
    }

    a {
        position: relative;
        background-color: transparent;
        border: 1px solid #4c4d56;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        overflow: hidden;
        text-decoration: none;
        font-size: 1rem;
        transition: background-color 0.2s ease-in-out,
            border-color 0.2s ease-in-out, color 0.2s ease-in-out;

        &::after {
            content: counter(nav-counter);
            font-family: "Bellefair", sans-serif;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        span {
            width: 0;
            height: 0;
            display: block;
            color: transparent;
        }

        &:hover {
            border-color: ${colors.pageNav.active};
        }

        &.number-slider__active-page,
        &:active {
            background-color: ${colors.pageNav.active};
            color: ${colors.black};
        }
    }
`;

/**
 * Creates a slider of numbered links.
 * @param {string} pathPrefix       String to prefix to all paths
 * @param {object} links            Array of objects, each object having a name
 *                                  property
 * @param {string} currentPageName  Current page's name
 * @returns                         Unordered list of links styled as a numbered
 *                                  slider
 */
export default function NumberSlider({ pathPrefix, links, currentPageName }) {
    const list = links.map((item) => {
        const path = `/${pathPrefix}-${convertForURL(item.name)}`;
        const className =
            currentPageName === item.name ? "number-slider__active-page" : null;

        return (
            <li key={item.name}>
                <Link to={path} className={className}>
                    <span>{item.name}</span>
                </Link>
            </li>
        );
    });

    return <List>{list}</List>;
}