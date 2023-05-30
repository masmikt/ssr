'use client';
import { ErrorFallback } from '@/app/(common)/error';

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    return (<ErrorFallback />);
}