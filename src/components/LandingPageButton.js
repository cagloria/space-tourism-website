import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./Theme";

const Button = styled.div`
    @media screen and (min-width: 768px) {
        width: 242px;
        height: 242px;
    }

    @media screen and (min-width: 1200px) {
        width: 274px;
        height: 274px;
    }

    a {
        font-family: "Barlow Condensed", sans-serif;
        font-size: clamp(1.25rem, 5vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        letter-spacing: 2.7px;
        color: ${colors.black};
        background-color: ${colors.white};
        border-radius: 50%;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        transition: box-shadow 0.4s ease-in-out;

        &:hover {
            box-shadow: 0 0 0 38px ${colors.gray};
        }
    }
`;

export default function LandingPageButton({ text, path }) {
    return (
        <Button>
            <Link to={path}>{text}</Link>
        </Button>
    );
}
