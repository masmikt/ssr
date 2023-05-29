import { ChangeEvent, InputHTMLAttributes, SyntheticEvent } from 'react';

export type IOptions = IOption[];
export interface IOption {
    label: string;
    id: string;
    disabled?: boolean;
}

export enum InputGroupTypes {
    CenteredButton = 'CenteredButton',
    RadioInput = 'RadioInput'
}

export interface IInputGroup {
    label?: string;
    options: IOptions;
    checkedIds: string[] | null;
    hasFullWidth?: boolean;
    type?: InputGroupTypes;
    fieldsetClassname?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export interface InputElementProps
    extends InputHTMLAttributes<HTMLInputElement> {
    buttonType: InputGroupTypes;
    label: string;
    id: string;
    error?: boolean;
    disabled?: boolean;
}
