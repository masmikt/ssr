import css from './footer.module.scss';
import { Section } from '@/app/(mobile)/(landings)/setup-flow/components/section';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { Logo } from '@/app/(common)/components/logo';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { LegalPages } from '@/app/(common)/components/legalPages';


const Footer = () => {
    return (
        <Section className={css['footer']} name={ScreenNames.Footer}>
            <Logo className={css['footer__logo']} />
            <LegalPages className={css['footer__legal-pages']} />
            <Typography className={css['footer__text']} variant={TypographyVariants.p3}>
                © {new Date().getFullYear()} Clario Tech DMCC <br /> All rights reserved.
            </Typography>
        </Section>
    );
};

Footer.displayName = 'Footer';
export default Footer;