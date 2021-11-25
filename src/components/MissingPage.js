import React from "react";
import { Link } from "react-router-dom";

export default function MissingPage() {
    function goBack() {
        window.history.back();
    }

    return (
        <section>
            <h1>There's nothing here!</h1>
            <p>
                That page doesn't exist. Try going back to the{" "}
                <span onClick={goBack}>previous page</span>, or returning to the{" "}
                <Link to="/">homepage</Link>.
            </p>
        </section>
    );
}
