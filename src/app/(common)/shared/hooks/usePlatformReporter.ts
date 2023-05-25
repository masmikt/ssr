import { useEffect } from 'react';
import { GeneralEvents, Platforms, localStorageKeys } from '../constants';
import { useSendEvent } from './useSendEvent';
import { useTracking } from './useTracking';
import { useStorage } from '@/app/(common)/shared/hooks/useStorage';

function resolvePlatformEvent(typeDevice: string) {
    switch (typeDevice) {
        case Platforms.Windows:
            return GeneralEvents.IsWindows;
        case Platforms.Mac:
            return GeneralEvents.IsMacOs;
        case Platforms.Android:
            return GeneralEvents.IsAndroid;
        case Platforms.iOS:
            return GeneralEvents.IsIOS;
        default:
            return null;
    }
}

export const usePlatformReporter = () => {
    const { sendEvent } = useSendEvent();
    const { getTypeDevice } = useTracking();
    const { getItem, setItem } = useStorage();
    useEffect(() => {
        if (!getItem(localStorageKeys.osIsReported)) {
            setItem(localStorageKeys.osIsReported, 'true');
            const typeDevice = getTypeDevice();
            const event = resolvePlatformEvent(typeDevice);
            if (event) {
                sendEvent(event);
            }
        }
    }, []);
};
