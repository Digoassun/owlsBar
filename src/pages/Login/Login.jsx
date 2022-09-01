import React from 'react'
import { TextField } from '@mui/material'
import {MenuItem }from '@mui/material';
import { useState } from 'react';
import { BtnLaranja, ContainerPageLogin, ContainerForm } from "../../styles/globalStyles";
import {ThemeProvider }from '@mui/material';
import { theme } from '../../styles/variaveis';
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

    const [usuario, setUsuario] = useState('');

    const handleChange = (e) => {
        setUsuario(e.target.value);
    };

    return (
        <ContainerPageLogin>
            <ContainerForm>
            <TitleOrange>Login</TitleOrange>
            <p>Por favor preencha o dados abaixo para começar!</p>
            <ThemeProvider theme={theme}>
            <TextField
                id="outlined-select-currency"
                select
                label='Selecione um usuário'
                value={usuario}
                onChange={handleChange}
            >
                {usuarios.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="outlined-basic" label="Senha" type='password' variant="outlined" />
            </ThemeProvider>
            <BtnLaranja>
            ENTRAR
            </BtnLaranja>
            </ContainerForm>
        </ContainerPageLogin>
    )
}

export default Login