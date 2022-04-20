import { convertForURL } from "../utilities/strings.js";

describe("convertForURL", () => {
    it("changes a string to lowercase and replaces spaces with dashes", () => {
        let str = "Test page";
        str = convertForURL(str);
        expect(str).toEqual("test-page");
    });
});
