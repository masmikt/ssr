import classNames from 'classnames';
import { InputElementProps, InputGroupTypes } from '../types';
import css from './checkboxButton.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const CheckboxButton = ({ label, id, disabled, checked, onClick, buttonType, ...rest }: InputElementProps) => {
    return (
        <label htmlFor={id} className={classNames(css['checkbox-button'], {
            [css['checkbox-button--disabled']]: disabled,
            [css['checkbox-button--checked']]: checked,
            [css['centered-button']]: buttonType === InputGroupTypes.CenteredButton
        })}>
            <input
                id={id || ''}
                type="checkbox"
                className={classNames(css['checkbox-button__input'], {
                    [css['centered-button']]: buttonType === InputGroupTypes.CenteredButton
                })}
                disabled={disabled || false}
                defaultChecked={checked || false}
                value={id || ''}
                onClick={onClick}
                {...rest}
            />
            <Typography variant={TypographyVariants.p1} className={classNames(css['checkbox-button__text'])}>
                {label}
            </Typography>
        </label>
    );
};

CheckboxButton.displayName = 'CheckboxButton';
export default CheckboxButton;
