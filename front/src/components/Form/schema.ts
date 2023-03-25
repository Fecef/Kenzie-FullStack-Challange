import * as yup from "yup";

export const schemaFormLogin = yup.object().shape({
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
});

export const schemaFormRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    phone: yup.string().required("Contato obrigatório"),
})

export const schemaFormPerfil = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    phone: yup.string(),
})