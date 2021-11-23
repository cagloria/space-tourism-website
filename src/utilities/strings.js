export function convertForURL(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "-");
    return str;
}
