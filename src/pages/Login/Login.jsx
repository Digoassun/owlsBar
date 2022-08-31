import React from 'react'
import { TextField } from '@mui/material'
import {MenuItem }from '@mui/material';
import { useState } from 'react';
import { BtnLaranja, ContainerPageLogin, ContainerForm } from "../../styles/globalStyles";
import { TitleOrange } from './styles'



const Login = () => {

    const usuarios = [
        {
            value: 'gerente',
            label: 'Gerente',
        },
        {
            value: 'garcom',
            label: 'Garçom',

        },
    ];

    const [usuario, setUsuario] = useState('cliente');

    const handleChange = (e) => {
        setUsuario(e.target.value);
    };

    return (
        <ContainerPageLogin>
            <ContainerForm>
            <TitleOrange>Login</TitleOrange>
            <p>Por favor preencha o dados abaixo para começar!</p>
            <TextField
                id="outlined-select-currency"
                select
                value={usuario}
                onChange={handleChange}
                helperText="Escolha um usuário"
            >
                {usuarios.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="outlined-basic" label="Senha" type='password' variant="outlined" />
            <BtnLaranja>
            ENTRAR
            </BtnLaranja>
            </ContainerForm>
        </ContainerPageLogin>
    )
}

export default Login