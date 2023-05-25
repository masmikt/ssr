export function addSearchParams(link: string, params: { [key: string]: any }) {
    const url = new URL(link);
    const { searchParams } = url;

    if (!Object.keys(params).length) {
        return url.toString();
    }

    Object.keys(params).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            searchParams.set(key, params[key]);
        }
    });

    return url.toString();
}
