export const validaEmpty = (input) =>{
    if(Object.values(input).includes("") ){
        return true 
    } else {
        return false
    }
}

export const validaLogin = (login) =>{
    if(login.length >= 6){ 
        return true
    } else {
        return false
    }
}

    const numeros = /([0-9])/;
	const alfabetoa = /([a-z])/;
	const alfabetoA = /([A-Z])/;
	const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
export const validaSenha = (senha) =>{
    if(senha.length >= 6 && senha.match(numeros) && senha.match(alfabetoa) && senha.match(alfabetoA) && senha.match(chEspeciais) ){
        return true
    } else {
        return false
    }
}
