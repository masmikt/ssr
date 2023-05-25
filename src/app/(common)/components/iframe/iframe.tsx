import clsx from 'clsx';
import css from './iframe.module.scss';
import { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import { useLockBodyScroll } from '@/app/(common)/shared/hooks';

interface IIframe extends DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement> {
    src: string | undefined;
    className?: string;
}

const Iframe = ({ src, className = '', ...rest }: IIframe) => {
    useLockBodyScroll(!!src);
    if (!src) {
        return null;
    }

    return (
        <iframe src={src} className={clsx(css['iframe'])} {...rest} />
    );
};

Iframe.displayName = 'Iframe';
export default Iframe;
