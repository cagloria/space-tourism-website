import { Link } from "react-router-dom";
import { convertForURL } from "./strings";

/**
 * Creates an li element and Link object with a formatted string for URL.
 * @param {object} arr          Array of objects
 * @param {string} urlPrefix    String to prefix the URL page with
 * @returns                     li element with a Link object
 */
export function createLinksListItems(arr, urlPrefix) {
    const links = arr.map((element) => (
        <li key={convertForURL(element.name)}>
            <Link to={`/${urlPrefix}-${convertForURL(element.name)}`}>
                {element.name}
            </Link>
        </li>
    ));

    return links;
}
