import { YEAR } from '@/app/(common)/shared/constants';

export function getCookiesValue(name: string, value: unknown, cookiesOptions: Record<string, any> = {}): string {
    let expiresDate = cookiesOptions.expires ? new Date(Date.now() + cookiesOptions.expires) : new Date(Date.now() + (YEAR / 2));
    delete cookiesOptions.expires;

    const options: Record<string, any> = {
        path: '/',
        domain: cookiesOptions.domain ? `.${cookiesOptions.domain}` : '.clario.co',
        sameSite: 'Lax',
        secure: 'secure',
        expires: expiresDate,
        ...cookiesOptions
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    const processedValue = (typeof value === 'string' || typeof value === "boolean") ? value : JSON.stringify(value);
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(processedValue);

    for (const optionKey in options) {
        updatedCookie += '; ' + optionKey;
        const optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    return updatedCookie;
}