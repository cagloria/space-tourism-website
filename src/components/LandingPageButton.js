import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./Theme";

const Button = styled.div`
    a {
        width: 150px;
        height: 150px;
        background-color: ${colors.white};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        color: ${colors.black};
        letter-spacing: 1.25px;
        font-family: "Bellefair", sans-serif;
        font-size: clamp(1.25rem, 5vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        transition: box-shadow 0.4s ease-in-out;

        &:hover {
            box-shadow: 0 0 0 38px ${colors.gray};
        }

        @media screen and (min-width: 768px) {
            width: 242px;
            height: 242px;
        }

        @media screen and (min-width: 1200px) {
            width: 274px;
            height: 274px;
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
