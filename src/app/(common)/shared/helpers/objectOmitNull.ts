type RecursiveOmitNull<T> = {
    [K in keyof T]:
    T[K] extends null ? never :
        T[K] extends object ? RecursiveOmitNull<T[K]> :
            T[K];
};

export function objectOmitNull<T extends object>(obj: T, returnEmptyObjectIfAllPropertiesDeleted = true): RecursiveOmitNull<T> | {} | null {
    let result: any = {};

    for (const key in obj) {
        const value = obj[key];

        if (value === null) {
            continue;
        }

        if (typeof value === 'object') {
            const nestedResult = objectOmitNull(value, returnEmptyObjectIfAllPropertiesDeleted);

            if (nestedResult !== null) {
                result[key] = nestedResult;
            }
        } else {
            result[key] = value;
        }
    }

    if (Object.keys(result).length === 0) {
        return returnEmptyObjectIfAllPropertiesDeleted ? {} : null;
    }

    return result;
}
