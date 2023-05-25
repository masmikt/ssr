import React, { useMemo } from 'react'
import { isClient } from '@/app/(common)/shared/helpers/isClient';

export enum Storages {
    LocalStorage = 'localStorage',
    SessionStorage = 'sessionStorage'
}

export function useStorage<T>(storages = Storages.LocalStorage) {
    const storage = useMemo(() => {
        if (!isClient()) {
            return null;
        }
        switch (storages) {
            case Storages.SessionStorage:
                return window.sessionStorage;
            default:
                return window.localStorage;
        }
    }, []);

    const getItem = (key: string) => {
        if (!isClient()) {
            return null;
        }
        try {
            // Get from local storage by key
            const item = (storage as Storage).getItem(key)
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : null
        } catch (error) {
            // If error also return initialValue
            console.log(error)
            return null;
        }
    }

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setItem = (key: string, value: T): void => {
        try {
            // Save to storage
            if (isClient()) {
                (storage as Storage).setItem(key, JSON.stringify(value))
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }
    return { getItem, setItem }
}