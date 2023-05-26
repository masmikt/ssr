import { useEffect } from 'react';
import { useSendEvent } from './useSendEvent';
import { Events } from '../constants';
import { usePathname } from 'next/navigation';

export const usePathnameChange = () => {
    const pathname = usePathname();
    const { sendEvent } = useSendEvent();

    const getPageName = () => {
        return pathname.slice(1);
    }

    useEffect(() => {
        sendEvent(Events.PageView, { pageName: getPageName() });
    }, [pathname]);
}