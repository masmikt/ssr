import css from './checkboxButtonGroupMobile.module.scss';
import { IInputGroup, InputGroupTypes, IOption } from '@/app/(common)/components/inputs';
import CheckboxButtonMobile from './checkboxButtonMobile';
import classNames from 'classnames';
import { ReactElement } from 'react';
import CustomCheckboxButtonMobile from './customCheckboxButtonMobile';

interface ICheckboxButtonGroup extends IInputGroup {
    children?: ReactElement;
}

const CheckboxButtonGroupMobile = ({
                                 label,
                                 options,
                                 onClick,
                                 onChange,
                                 checkedIds,
                                 type = InputGroupTypes.RadioInput,
                                 fieldsetClassname,
                                 children,
                             }: ICheckboxButtonGroup) => {
    return (
        <fieldset className={classNames(css['checkbox-button-group__fieldset'], fieldsetClassname)}>
            {label && <legend className={css['checkbox-button-group__legend']}>{label}</legend>}
            <div className={css['checkbox-button-group__inputs']}>
                {
                    options.map(({ label, id, disabled }: IOption) => {
                        return (
                            <div key={id}>
                                {
                                    children ?
                                        <CustomCheckboxButtonMobile
                                            value={label} label={label} key={id} name={id} id={id}
                                            disabled={disabled} buttonType={type} checked={checkedIds?.includes(id)}
                                            onClick={onClick}>
                                            {children}
                                        </CustomCheckboxButtonMobile>
                                        :
                                        (<CheckboxButtonMobile
                                            value={label}
                                            label={label}
                                            key={id}
                                            id={id}
                                            name={id}
                                            disabled={disabled}
                                            buttonType={type}
                                            checked={checkedIds?.includes(id)}
                                            onClick={onClick}
                                        />)
                                }
                            </div>
                        )}
                    )
                }
            </div>
        </fieldset>
    );
};

CheckboxButtonGroupMobile.displayName = 'CheckboxButtonGroupMobile';
export default CheckboxButtonGroupMobile;