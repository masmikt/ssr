export function addSearchParams(url, params = {}) {
    return new URL(
        `${url.origin}${url.pathname}?${new URLSearchParams([
            ...Array.from(url.searchParams.entries()),
            ...Object.entries(params),
        ])}`
    );
}
