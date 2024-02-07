export const getQueryUrl = (baseUrl: string, entityUrl: string, url: string) => {
    return baseUrl + entityUrl + url;
}

export const getBaseQuery = (baseUrl: string, entityUrl: string,) => {
    return baseUrl + entityUrl;
}