import { Link } from "react-router-dom";
import { convertForURL } from "../utilities/strings";

/**
 * React component displaying links of each property's array in data.json
 * @param {object} categoryArr  An array with objects, each of which have a name
 *                              property
 * @param {string} urlPrefix    String to prefix path with
 * @returns                     A collection of li objects containing Links
 */
export default function PageLinks({ categoryArr, urlPrefix }) {
    const links = categoryArr.map((element) => (
        <li key={convertForURL(element.name)}>
            <Link to={`/${urlPrefix}-${convertForURL(element.name)}`}>
                {element.name}
            </Link>
        </li>
    ));
    return <>{links}</>;
}
