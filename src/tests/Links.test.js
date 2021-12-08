import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageLinks from "../components/PageLinks";

const data = [{ name: "Link 1" }, { name: "Link 2" }];

describe("Links", () => {
    render(
        <BrowserRouter>
            <PageLinks categoryArr={data} urlPrefix="links" />
        </BrowserRouter>
    );
    const linkNode1 = screen.getByText("Link 1");
    const linkNode2 = screen.getByText("Link 2");
    screen.debug();

    test("renders a list of links for all objects in the array", () => {
        expect(linkNode1).toBeInTheDocument();
        expect(linkNode2).toBeInTheDocument();
    });

    test("renders the URL correctly", () => {
        expect(linkNode1.getAttribute("href")).toEqual("/links-link-1");
        expect(linkNode2.getAttribute("href")).toEqual("/links-link-2");
    });
});
