import {
    toast
} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const validaEmpty = (input) => {
    if (Object.values(input).includes("")) {
        toast.error('Algum campo esta vazio', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return true
    } else {

        return false
    }
}

export const validaLogin = (login) => {
    if (login.length >= 6) {
        return true
    } else {
        toast.error('Seu login deve ter pelo menos 6 dígitos', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false
    }
}

const numeros = /([0-9])/;
const alfabetoa = /([a-z])/;
const alfabetoA = /([A-Z])/;
const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
export const validaSenha = (senha) => {
    if (senha.length >= 6 && senha.match(numeros) && senha.match(alfabetoa) && senha.match(alfabetoA) && senha.match(chEspeciais)) {
        return true
    } else {
        toast.error('Sua senha deve conter: caracteres especiais, letras maiúsculas e minusculas e numeros', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false
    }
}