import React, { ComponentProps } from 'react';
import { Input } from 'reactstrap';

type MyHandleChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface IformControlProps {
    label: string,
    type: ComponentProps<typeof Input>['type'];
    error: string, 
    handleChange: MyHandleChangeFunctionType, 
    value: string 
}

export interface TextFieldProps {
    label: string,
    name: string,
    type: ComponentProps<typeof Input>['type'],
}