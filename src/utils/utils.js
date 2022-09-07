import {
    toast
} from "react-toastify";

const numeros = /([0-9])/;
const alfabetoa = /([a-z])/;
const alfabetoA = /([A-Z])/;
const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
const toastDefault = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export const validaEmpty = (input) => {
    if (Object.values(input).includes("")) {
        toast.error('Algum campo está vazio', toastDefault);
        return true
    } else {
        return false
    }
}

export const validaNome = (nome) => {
    if (nome.match(alfabetoA) || nome.match(alfabetoa)) {
        return true
    } else {
        toast.error('Seu nome só pode conter letras', toastDefault);
        return false
    }
}
export const validaLogin = (login) => {
    if (login.length >= 6) {
        return true
    } else {
        toast.error('Seu login deve ter pelo menos 6 dígitos', toastDefault);
        return false
    }
}

export const validaSenha = (senha) => {
    if (senha.match(numeros) && senha.match(alfabetoa) && senha.match(alfabetoA) && senha.match(chEspeciais)) {
        return true
    } else {
        toast.error('Sua senha deve conter: caracteres especiais, letras maiúsculas, minusculas e numeros', toastDefault);
        return false
    }
}

export const validaDescricao = (descricao) => {
    if (descricao.length <= 55) {
        return true
    } else {
        toast.error('Limite de caracteres atingido', toastDefault);
        return false
    }
}