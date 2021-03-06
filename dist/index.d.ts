import React from 'react';
import PropTypes from 'prop-types';
import validationRules from './validationRules';
import Wrapper, { propTypes } from './Wrapper';
import { IModel, InputComponent, IResetModel, IUpdateInputsWithValue, IUpdateInputsWithError, ValidationFunction, FormsyContextInterface } from './interfaces';
declare type FormHTMLAttributesCleaned = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'>;
export interface FormsyProps extends FormHTMLAttributesCleaned {
    disabled: boolean;
    getErrorMessage: any;
    getErrorMessages: any;
    getValue: any;
    hasValue: any;
    isFormDisabled: any;
    isFormSubmitted: any;
    isPristine: any;
    isRequired: any;
    isValid: any;
    isValidValue: any;
    mapping: null | ((model: IModel) => IModel);
    onChange: (model: IModel, isChanged: boolean) => void;
    onError: any;
    onInvalid: () => void;
    onInvalidSubmit: any;
    onReset?: () => void;
    onSubmit?: (model: IModel, resetModel: IResetModel, updateInputsWithError: IUpdateInputsWithError) => void;
    onValid: () => void;
    onValidSubmit?: (model: IModel, resetModel: IResetModel, updateInputsWithError: IUpdateInputsWithError) => void;
    preventExternalInvalidation?: boolean;
    preventDefaultSubmit?: boolean;
    resetValue: any;
    setValidations: any;
    setValue: any;
    showError: any;
    showRequired: any;
    validationErrors?: null | object;
}
export interface FormsyState {
    canChange: boolean;
    contextValue: FormsyContextInterface;
    formSubmitted?: boolean;
    isPristine?: boolean;
    isSubmitting: boolean;
    isValid: boolean;
}
declare class Formsy extends React.Component<FormsyProps, FormsyState> {
    inputs: any[];
    emptyArray: any[];
    prevInputNames: any[] | null;
    static displayName: string;
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        getErrorMessage: PropTypes.Requireable<(...args: any[]) => any>;
        getErrorMessages: PropTypes.Requireable<(...args: any[]) => any>;
        getValue: PropTypes.Requireable<(...args: any[]) => any>;
        hasValue: PropTypes.Requireable<(...args: any[]) => any>;
        isFormDisabled: PropTypes.Requireable<(...args: any[]) => any>;
        isFormSubmitted: PropTypes.Requireable<(...args: any[]) => any>;
        isPristine: PropTypes.Requireable<(...args: any[]) => any>;
        isRequired: PropTypes.Requireable<(...args: any[]) => any>;
        isValid: PropTypes.Requireable<(...args: any[]) => any>;
        isValidValue: PropTypes.Requireable<(...args: any[]) => any>;
        mapping: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onInvalid: PropTypes.Requireable<(...args: any[]) => any>;
        onInvalidSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        onValid: PropTypes.Requireable<(...args: any[]) => any>;
        onValidSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        preventExternalInvalidation: PropTypes.Requireable<boolean>;
        preventDefaultSubmit: PropTypes.Requireable<boolean>;
        resetValue: PropTypes.Requireable<(...args: any[]) => any>;
        setValidations: PropTypes.Requireable<(...args: any[]) => any>;
        setValue: PropTypes.Requireable<(...args: any[]) => any>;
        showError: PropTypes.Requireable<(...args: any[]) => any>;
        showRequired: PropTypes.Requireable<(...args: any[]) => any>;
        validationErrors: PropTypes.Requireable<object>;
    };
    static defaultProps: Partial<FormsyProps>;
    constructor(props: FormsyProps);
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: FormsyProps) => void;
    getCurrentValues: () => any;
    getModel: () => any;
    getPristineValues: () => any;
    setFormPristine: (isPristine: boolean) => void;
    setInputValidationErrors: (errors: any) => void;
    setFormValidState: (allIsValid: boolean) => void;
    isValidValue: (component: any, value: any) => boolean;
    isFormDisabled: () => boolean;
    mapModel: (model: any) => any;
    reset: (data?: any) => void;
    private resetInternal;
    resetModel: IResetModel;
    runValidation: <V>(component: InputComponent<V>, value?: V) => {
        isRequired: boolean;
        isValid: boolean;
        error: any;
    };
    attachToForm: (component: any) => void;
    detachFromForm: <V>(component: InputComponent<V>) => void;
    isChanged: () => boolean;
    submit: (event?: any) => void;
    updateInputsWithError: IUpdateInputsWithError;
    updateInputsWithValue: IUpdateInputsWithValue<any>;
    validate: <V>(component: InputComponent<V>) => void;
    validateForm: () => void;
    render: () => React.FunctionComponentElement<React.ProviderProps<FormsyContextInterface>>;
}
declare const addValidationRule: <V>(name: string, func: ValidationFunction<V>) => void;
export { addValidationRule, propTypes, validationRules, Wrapper as withFormsy };
export default Formsy;
