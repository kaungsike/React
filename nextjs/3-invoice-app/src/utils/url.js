export const convertSearchUrlToObject = (searchParams) => {
    return Object.fromEntries(searchParams.entries())
}

export const extractSearchParamsToObject = (url) => {
    const params = new URL(url).searchParams;
    const searchParamsObject = convertSearchUrlToObject(params);
    return searchParamsObject;
}