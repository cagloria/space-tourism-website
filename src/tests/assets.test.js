import { getImageByFormat, getImageByOrientation } from "../utilities/assets";

const testData = {
    formatted: [
        {
            name: "Item",
            images: {
                png: "./assets/formatted/item.png",
                webp: "./assets/formatted/item.webp",
            },
        },
    ],
    orientation: [
        {
            name: "Item",
            images: {
                portrait: "./assets/orientation/item-portrait.png",
                landscape: "./assets/orientation/item-landscape.png",
            },
        },
    ],
};

describe("getImageByFormat", () => {
    const { formatted } = testData;

    test("retrieves the correct png image", () => {
        const expectedResult = "./assets/formatted/item.png";
        const result = getImageByFormat(formatted, "Item", "png");
        expect(result).toEqual(expectedResult);
    });

    test("retrieves the correct", () => {
        const expectedResult = "./assets/formatted/item.webp";
        const result = getImageByFormat(formatted, "Item", "webp");
        expect(result).toEqual(expectedResult);
    });
});

describe("getImageByOrientation", () => {
    const { orientation } = testData;

    test("retrieves the correct portrait image", () => {
        const expectedResult = "./assets/orientation/item-portrait.png";
        const result = getImageByOrientation(orientation, "Item", "portrait");
        expect(result).toEqual(expectedResult);
    });

    test("retrieves the correct landscape image", () => {
        const expectedResult = "./assets/orientation/item-landscape.png";
        const result = getImageByOrientation(orientation, "Item", "landscape");
        expect(result).toEqual(expectedResult);
    });
});
