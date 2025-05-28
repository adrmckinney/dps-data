import { FocusEventTypes } from '@/types/FocusEventTypes';
import { useEffect, useReducer, useState } from 'react';

type ValidationActionType = 'VALIDATE_FIELD' | 'RESET';

interface Validation {
    valid: boolean;
    message: string;
}

export type ValidationRules = {
    [rule: string]: Validation;
};

export type ValidationSchema = {
    [field: string]: ValidationRules;
};

interface ApiError {
    [field: string]: Validation[];
}

type TouchedFields = {
    [field: string]: boolean;
};

interface ValidationAction {
    type: ValidationActionType;
    field?: string;
    rule?: string;
    payload?: boolean;
}

interface ReturnType {
    validations: ValidationSchema;
    isDisabled: boolean;
    apiErrors: ApiError;
    handleApiErrors: (errorMessage: string, fieldName?: string) => void;
    setInitialValidationValues: () => void;
    silentlyValidateFields: () => boolean;
    handleBlur: (event: FocusEventTypes) => void;
    resetTouchedFields: (initialValues: { [key: string]: unknown }) => void;
}

type Props = {
    formInput: { [key: string]: unknown }; // Form input values
    validationSchema: ValidationSchema; // Validation rules for the form
};

const useValidation = ({ formInput, validationSchema }: Props): ReturnType => {
    const apiErrorInitialValues: ApiError = {};
    const [apiErrors, setApiErrors] = useState<ApiError>(apiErrorInitialValues);
    const [touched, setTouched] = useState<TouchedFields>({});

    // Extract field names as an array of strings from the validation schema
    const fields = Object.keys(validationSchema);

    // Initial validation state based on the provided validationSchema
    const initialState: ValidationSchema = validationSchema;

    // Reducer to manage validation state updates
    const reducer = (validations: ValidationSchema, action: ValidationAction): ValidationSchema => {
        switch (action.type) {
            case 'VALIDATE_FIELD': {
                const { field, rule, payload } = action;
                if (field && rule !== undefined && payload !== undefined) {
                    return {
                        ...validations,
                        [field]: {
                            ...validations[field],
                            [rule]: {
                                ...validations[field][rule],
                                valid: payload,
                            },
                        },
                    };
                }
                return validations;
            }
            case 'RESET':
                return initialState;
            default:
                return validations;
        }
    };

    const [validations, dispatch] = useReducer(reducer, initialState);

    // Validation logic for individual fields and rules
    const validateField = (rule: string, value: string): boolean => {
        switch (rule) {
            case 'required':
                return value?.length > 0;
            case 'minLength':
                return value?.length >= 3;
            case 'isNumber':
                return !isNaN(value as unknown as number);
            default:
                return true;
        }
    };

    // Validates a specific field based on its validation rules
    const mapValidationObject = (fieldName: string, value: unknown) => {
        Object.keys(validations[fieldName]).forEach(rule => {
            const isValid = validateField(rule, value);
            dispatch({ type: 'VALIDATE_FIELD', field: fieldName, rule, payload: isValid });
        });
    };

    // Trigger validation when touched fields or input values change
    useEffect(() => {
        fields.forEach(field => {
            if (touched[field]) {
                mapValidationObject(field, formInput[field]); // Use the field's value from formInput
            }
        });

        // The touched dependency is required for the validation to work at all
        // The ...Object.values(formInput) are required for the validation error to be removed during onChange instead just during onBlur
    }, [touched, ...Object.values(formInput)]);

    // Counts the number of errors in the validation schema
    const countErrors = (validationObject: ValidationSchema) => {
        return Object.values(validationObject)
            .flatMap(rules => Object.values(rules))
            .filter(validation => !validation.valid).length;
    };

    // Determines if the form should be disabled based on the error count
    const totalErrorCount = countErrors(validations);
    const isDisabled = totalErrorCount > 0;

    // Handles API errors for a specific field or globally
    const handleApiErrors = (errorMessage: string, fieldName: string = 'default') => {
        setApiErrors({ [fieldName]: [{ message: errorMessage, valid: false }] });
    };

    // Resets validation to the initial state
    const setInitialValidationValues = () => {
        dispatch({ type: 'RESET' });
    };

    // Use this function if you want to disable a button but not show error messages
    // on the form fields. This is useful if you need to disable the button on render.
    const silentlyValidateFields = (): boolean => {
        // Loop through each field in the validation schema
        for (const fieldName of fields) {
            const fieldRules = validations[fieldName];

            // Loop through each rule for the field
            for (const rule in fieldRules) {
                const value = formInput[fieldName]; // Get the field value from form input
                const isValid = validateField(rule, value); // Validate the field based on the rule

                if (!isValid) {
                    return false; // Return false immediately if any rule fails
                }
            }
        }
        return true; // Return true if all validations pass
    };

    const handleBlur = (event: FocusEventTypes): void => {
        const { name } = event.target;
        setTouched(touched => ({
            ...touched,
            [name]: true,
        }));
    };

    const resetTouchedFields = (initialValues: { [key: string]: any }) => {
        Object.keys(initialValues).forEach((key: string) => {
            setTouched(touched => ({
                ...touched,
                [key]: false,
            }));
        });
    };

    return {
        validations,
        isDisabled,
        apiErrors,
        handleApiErrors,
        setInitialValidationValues,
        silentlyValidateFields,
        handleBlur,
        resetTouchedFields,
    };
};

export default useValidation;
