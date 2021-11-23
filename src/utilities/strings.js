/**
 * Changes a string to lowercase and replaces spaces with dashes
 * @param {string} str  String to convert
 * @returns             A converted string
 */
export function convertForURL(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, "-");
    return str;
}
