import React from 'react';
import { Box, FormField, TextInput } from "grommet";
import { License,MailOption } from 'grommet-icons';

const InputForm = ({ type, error, getValue, checked=false }) => {
    const [value, setValue] = React.useState('');

    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        getValue(value)
        setValue(value)
    }
    return (
        <Box
            align="center"
            justify="start"
            pad="small"
            direction="row"
            background={{ "dark": true, "color": "dark-1" }}
            round="xsmall"
        >
            <FormField
                light
                error={error && errors[type]}
                help={value && value.length > 0 && /\s/.test(value) && helps[type]}
                label={<i>{icons[type]}{labels[type]}</i>}
                name={type}
            >
                <TextInput
                    placeholder={placeholders[type]}
                    value={value}
                    onChange={onChange}
                    type={type}
                    autocomplete={checked?'on':'off'}
                    style={{ background: 'white', color: 'black' }} />
            </FormField>
        </Box>
    )
}

export default InputForm;

const errors = {
    email: "El email que ingresaste no es valido",
    password: "La Contraseña que ingresaste no es valida"
};

const icons = {
    email: <MailOption  color="brand" />,
    password: <License color="brand" />,
}

const helps = {
    email: 'Verifica que no hay espacios extra antes o después',
    password: "Verifica que no hay espacios extra antes o después"
};

const placeholders = {
    email: 'Ingresa tu correo',
    password: 'Ingresa tu Contraseña'
};

const labels = {
    email: 'Email',
    password: 'Contraseña'
}