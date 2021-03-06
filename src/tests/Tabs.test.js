import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tabs from "../components/links/Tabs.js";

describe("Tabs", () => {
    const data = [{ name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" }];

    render(
        <BrowserRouter>
            <Tabs pathPrefix="test" links={data} currentPageName="Link 2" />
        </BrowserRouter>
    );

    const linkNode1 = screen.getByText("Link 1", { exact: false });
    const linkNode2 = screen.getByText("Link 2", { exact: false });
    const linkNode3 = screen.getByText("Link 3", { exact: false });

    test("renders a list of links for all items in the array", () => {
        expect(linkNode1).toBeInTheDocument();
        expect(linkNode2).toBeInTheDocument();
        expect(linkNode3).toBeInTheDocument();
    });

    test("renders the URL path correctly", () => {
        expect(linkNode1.getAttribute("href")).toEqual("/test-link-1");
        expect(linkNode2.getAttribute("href")).toEqual("/test-link-2");
        expect(linkNode3.getAttribute("href")).toEqual("/test-link-3");
    });

    test("assigns the active class correctly", () => {
        expect(linkNode1.classList.contains("tabs__active-page")).toEqual(
            false
        );
        expect(linkNode2.classList.contains("tabs__active-page")).toEqual(true);
        expect(linkNode3.classList.contains("tabs__active-page")).toEqual(
            false
        );
    });
});
