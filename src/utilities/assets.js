/**
 * Searches through all objects to find the object that matches the desired
 * name, and then returns the relative image paths.
 * @param {object} dataGroup    Array of objects
 * @param {string} name         Name of object to find
 * @returns                     An object with file paths to the png and
 *                              webp files
 */
export function getPngWebpFromObject(dataGroup, name) {
    let png = undefined;
    let webp = undefined;

    const resultObj = dataGroup.find((item) => item.name === name);

    // Path is relative to the public folder
    png = resultObj.images.png;
    webp = resultObj.images.webp;

    return { png, webp };
}
