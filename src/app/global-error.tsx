'use client';
import { ErrorFallback } from '@/app/(common)/error';

export default function GlobalError({ error, reset, }: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
        <body>
        <ErrorFallback />
        </body>
        </html>
    );
}