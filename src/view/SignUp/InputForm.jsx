import React from 'react';
import { Box, FormField, TextInput } from "grommet";
import { UserNew, Mail, FormLock  } from 'grommet-icons';

const InputForm = ({ type, error, getValue }) => {
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
                help={value && value.length > 0 && /\s/.test(value) && helps[type] }
                label={<i>{icons[type]}{labels[type]}</i>}
                name={type}
            >
                <TextInput
                    placeholder={placeholders[type]}
                    value={value}
                    onChange={onChange}
                    type={type === 'passwordConfirm' ? 'password' : type}
                    style={{ background: 'white', color: 'black' }} />
            </FormField>
        </Box>
    )
}

export default InputForm;

const errors = {
    user: 'El Usuario que ingresaste no es valido',
    email: "El email que ingresaste no es valido",
    password: "La Contraseña que ingresaste no es valida",
    passwordConfirm: "La Contraseña que ingresaste no es valida"
};

const icons = {
    user: <UserNew color="brand" />,
    email: <Mail color="brand" />,
    password: <FormLock size="large" color="brand" />,
    passwordConfirm: <FormLock size="large" color="brand" />
}

const helps = {
    user: 'Verifica que no hay espacios extra antes o después',
    email: 'Verifica que no hay espacios extra antes o después',
    password: "Verifica que no hay espacios extra antes o después",
    passwordConfirm: 'Escribe lo mismo que antes. Verifica que no hay espacios extra antes o después'
};

const placeholders = {
    user: 'Ingresa un nombre de usuario',
    email: 'Ingresa tu correo',
    password: 'Ingresa tu Contraseña',
    passwordConfirm: 'Ingresa la  misma Contraseña'
};

const labels = {
    user: 'Nombre de usuario',
    email: 'Email',
    password: 'Contraseña',
    passwordConfirm: 'Verifica tu Contraseña'
}