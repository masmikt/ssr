import css from './legalPages.module.scss';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { useCallback } from 'react';
import { LegalPagesList, LegalPagesNames } from '@/app/(common)/components/legalPages/config';
import { Events } from '@/app/(common)/shared/constants';
import clsx from 'clsx';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { Link } from '@/app/(common)/components/link';

interface ILegalPages {
    className?: string;
}

const LegalPages = ({ className }: ILegalPages) => {
    const { sendEvent } = useSendEvent();
    const handleLegalPageClick = useCallback((name: LegalPagesNames) => {
        sendEvent(Events.LegalPagesClick, {
            name: name
        })
    }, []);

    return (
        <ul className={clsx(css['legal-pages'], className)}>
            {LegalPagesList.map((legalPage) => (
                <Link
                    className={css["legal-pages__page"]}
                    src={legalPage.link} key={legalPage.name}
                    onClick={() => handleLegalPageClick(legalPage.name)}>
                    <Typography variant={TypographyVariants.p2} className={css["legal-pages__page-name"]}>
                        {legalPage.text}
                    </Typography>
                </Link>
            ))}
        </ul>
    );
}

LegalPages.displayName = 'LegalPages';
export default LegalPages;