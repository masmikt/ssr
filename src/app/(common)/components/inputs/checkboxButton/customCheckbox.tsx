import { cloneElement, isValidElement, ReactElement } from 'react';
import { InputElementProps } from '../types';

interface ICustomCheckboxButton extends InputElementProps {
    children: ReactElement;
}

const CustomCheckboxButton = ({ children, id, ...rest }: ICustomCheckboxButton) => {
    const props = {
        ...rest,
        id,
        key: id,
    }
    return (
        <>{
            isValidElement(children)
                ? cloneElement(children, props)
                : null}
        </>
    )
}


CustomCheckboxButton.displayName = 'CustomCheckboxButton';
export default CustomCheckboxButton;