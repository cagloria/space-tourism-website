import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NumberSlider from "../components/links/NumberSlider";

describe("NumberSlider", () => {
    const data = [{ name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" }];

    render(
        <BrowserRouter>
            <NumberSlider
                pathPrefix="test"
                links={data}
                currentPageName="Link 1"
            />
        </BrowserRouter>
    );

    const linkNode1 = screen.getByText("Link 1");

    test("renders a list of links for all items in the array", () => {
        expect(linkNode1).toBeInTheDocument();
    });

    test("renders the URL path correctly", () => {
        expect(linkNode1.parentElement.getAttribute("href")).toEqual(
            "/test-link-1"
        );
    });

    test("assigns the active class correctly", () => {
        expect(
            linkNode1.parentElement.classList.contains(
                "number-slider__active-page"
            )
        ).toEqual(true);
    });
});
