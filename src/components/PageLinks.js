import data from "../data/data.json";
import { Link } from "react-router-dom";
import { convertForURL } from "../utilities/strings";

/**
 * Creates an li element and Link object with a formatted string for URL for
 * each item in the array.
 * @param {object} arr          Array of objects, where each object has a "name"
 *                              property
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

/**
 * React component displaying links of each property's array in data.json
 * @param {string} category Property to find in data.json
 * @returns                 A collection of li objects containing Links
 */
export default function PageLinks({ category }) {
    const { destinations, crew, technology } = data;

    let links = undefined;
    switch (category) {
        case "crew":
            links = createLinksListItems(crew, "crew");
            break;
        case "technology":
            links = createLinksListItems(technology, "technology");
            break;
        default:
            links = createLinksListItems(destinations, "destination");
            break;
    }
    return <>{links}</>;
}
