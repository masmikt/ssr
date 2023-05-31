"use client";
import { useEffect } from "react";

export function useLockBodyScroll(isOpen: boolean): void {
    useEffect((): () => void => {
        const originalStyle: string = window.getComputedStyle(document.body).overflow;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Get original body overflow
            document.body.style.overflow = originalStyle;
        }

        return () => (document.body.style.overflow = originalStyle);
    }, [isOpen]);
}