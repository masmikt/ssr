import css from './protectDevices.module.scss';
import { Section, SectionColor } from '../section';
import { ScreenNames } from '../../constants';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { SupportedPlatforms } from '@/app/(mobile)/components/supportedPlatforms';


const ProtectDevices = () => {
    return (
        <Section
            color={SectionColor.Grey}
            className={css['protect-devices']}
            name={ScreenNames.Protect}>
            <div className={css['protect-devices__content']}>
                <Typography className={css['protect-devices__title']} variant={TypographyVariants.h3}>
                    Protect all your devices.
                </Typography>
                <Typography
                    className={css['protect-devices__text']}
                    variant={TypographyVariants.p2}>
                    Are you working from a Windows laptop and browsing from your home Mac?
                    Use Clario to enjoy total privacy on every platform and device.
                </Typography>
                <SupportedPlatforms className={'mt-s'} />
            </div>
        </Section>
    )
}

ProtectDevices.displayName = 'ProtectDevices';
export default ProtectDevices;