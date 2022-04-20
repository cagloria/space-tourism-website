/**
 * Searches through all objects to find the object that matches the desired
 * name, and then returns the relative image paths.
 * @param {object} dataGroup    Array of objects from data.json
 * @param {string} name         Name of object to find
 * @param {string} format       Format of image, either webp or png
 * @returns                     An object with file paths to the png and
 *                              webp files
 */
export function getImageByFormat(dataGroup, name, format) {
    const resultObj = dataGroup.find((item) => item.name === name);

    if (format === "webp") {
        return resultObj.images.webp; // Path is relative to the public folder
    }
    return resultObj.images.png;
}

/**
 * Searches through all objects in the data group to find the object that
 * matches the desired name, and returns an image of either portrait or
 * landscape orientation.
 * @param {object} dataGroup    Array of objects from data.json
 * @param {string} name         Name of object to find
 * @param {string} orientation  Image orientation, either portrait or landscape
 * @returns                     An image
 */
export function getImageByOrientation(dataGroup, name, orientation) {
    const resultObj = dataGroup.find((item) => item.name === name);

    if (orientation === "portrait") {
        return resultObj.images.portrait; // Path is relative to the public folder
    }
    return resultObj.images.landscape;
}
