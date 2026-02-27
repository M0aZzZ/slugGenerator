export const slugify = (url: string): string => {
    url = url.trim();
    url = url.toLowerCase();
    url = url.replace(/[\s-_,.]+/g, '-');//remove the whitespaces and sperators within url
    url = url.replace(/[\#@!]+/g, '');//remove the special characters from url
    //To ensure there are no Unwanted characters at the beginning and end of the url
    url = (url.startsWith('-')) ? url.slice(1) : url;
    url = (url.endsWith('-')) ? url.slice(0, -1) : url;
    return url;
}
