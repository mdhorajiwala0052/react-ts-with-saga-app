import React, { FC } from 'react'
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap'

import { IformControlProps } from '../types'

const FormControl: FC<IformControlProps> = (props) => {
    const { label, type, error, handleChange, value } = props
    const name = label.toLowerCase()
  return (
    <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                id={name}
                invalid={!!error}
                onChange={handleChange}
                value={value}
            />
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
  )
}

export default FormControl