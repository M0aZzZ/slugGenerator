export const slugify = (url: string): string => {
    let clean_url: string = url;
    clean_url = Convert_to_lowercase(clean_url);
    clean_url = Remove_spaces(clean_url);
    clean_url = Remove_separators(clean_url);
    clean_url = Remove_special_characters(clean_url);
    clean_url = Remove_unwanted_characters(clean_url);
    return clean_url;
}
function Convert_to_lowercase(url: string): string {
    return url.toLowerCase();
}
function Remove_spaces(url: string): string {
    return url.trim();
}
function Remove_separators(url: string): string {
    return url.replace(/[\s-_,.]+/g, '-');
}
function Remove_special_characters(url: string): string {
    return url.replace(/[\#@!]+/g, '');
}
function Remove_unwanted_characters(url: string): string {
    url = (url.startsWith('-')) ? url.slice(1) : url;
    url = (url.endsWith('-')) ? url.slice(0, -1) : url;
    return url;
}
