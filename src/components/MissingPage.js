import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MissingPage() {
    useEffect(() => {
        document.title = "404 | Space Tourism";
    }, []);

    function goBack() {
        window.history.back();
    }

    return (
        <section>
            <h1>There's nothing here!</h1>
            <p>
                That page doesn't exist. Try going back to the{" "}
                <button onClick={goBack}>previous page</button>, or returning to
                the <Link to="/">homepage</Link>.
            </p>
        </section>
    );
}
