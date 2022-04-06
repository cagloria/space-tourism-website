import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../Theme";

const Button = styled.div`
    width: fit-content;
    height: fit-content;
    a {
        width: 150px;
        height: 150px;
        background-color: ${colors.primary.white};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.primary.dark};
        letter-spacing: 1.25px;
        font-family: "Bellefair", sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        transition: box-shadow 0.4s ease-in-out;

        &:hover {
            box-shadow: 0 0 0 44px #24262f80;
        }

        /* Tablet */
        @media screen and (min-width: 768px) {
            font-size: 2rem;
            width: 242px;
            height: 242px;
        }

        /* Desktop */
        @media screen and (min-width: 1200px) {
            width: 274px;
            height: 274px;
        }
    }
`;

/**
 * Creates a circular link similar to a button. To be placed on the landing
 * page.
 * @param {string} text Link text
 * @param {string} path Path
 * @returns             Link
 */
export default function LandingPageButton({ text, path }) {
    return (
        <Button className="landing-page-button">
            <Link to={path}>{text}</Link>
        </Button>
    );
}
