export const slugify = (url: string): string => {
    let cleanUrl: string = url;
    if (typeof cleanUrl !== "string") {
        throw new TypeError("slugify: input must be a string");
    }
    cleanUrl = cleanUrl
        .toLowerCase()
        .trim()
        .replace(/[\s-_,.]+/g, '-')
        .replace(/[\#@!]+/g, '')
    cleanUrl = trimDashes(cleanUrl);
    return cleanUrl;
}
const trimDashes = (url: string): string => {
    url = (url.startsWith('-')) ? url.slice(1) : url;
    url = (url.endsWith('-')) ? url.slice(0, -1) : url;
    return url;
}
