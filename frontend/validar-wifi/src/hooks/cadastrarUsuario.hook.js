import { useState } from "react";
import { criarUsuarioApi } from "../constants";
import { toast } from "react-toastify";

export function useCadastrarUsuario(){

    const [error] = useState();

    async function cadastrarUsuario(cpf, cienciaTermo){

        try{
            await criarUsuarioApi(cpf, cienciaTermo);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarUsuario, error};

}