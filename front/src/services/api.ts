import axios from "axios";
import { parseCookies } from 'nookies';
import { setCookie } from "nookies";
import { destroyCookie } from "nookies";

import { IUserLogin } from "@/interfaces/user";
import { successToast, warningToast } from "@/components/Modal/ModalToastfy";
import { IContactPerfil, IFormPerfil, IFormRegister } from "@/components/Form/interface";
import { IContactCreate } from "@/interfaces/contact";

const getCookieToken = () => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    return token || '';
}

export const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Authorization': `Bearer ${getCookieToken()}`
    }
})

export const userAuth = async (userData: IUserLogin) => {
    try {
        const res = await api.post("/login", userData)

        setCookie(null, "kenzie.token", res.data.token, { maxAge: 60 * 30, path: "/" })
        setCookie(null, "kenzie.user", res.data.userId, { maxAge: 60 * 30, path: "/" })

        return res.data

    } catch (err) {
        warningToast("Falha na autenticação.")
    }
}

export const userCreate = async (userData: IFormRegister) => {
    try {
        const res = await api.post("/user", userData)

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao cadastrar.")
    }
}

export const userUpdate = async (userData: IFormPerfil) => {
    try {
        const res = await api.patch("/user", userData)

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao alterar os dados.")

    }
}

export const userDelete = async () => {
    try {
        const res = await api.delete("/user")

        destroyCookie(null, "kenzie.token");
        destroyCookie(null, "kenzie.user");

        successToast("Sucesso!")

        return res.data
    } catch (err) {
        warningToast("Falha ao tentar deletar conta.")

    }
}

export const createContact = async (contactData: IContactCreate) => {
    try {
        const res = await api.post("/user/contact", contactData)

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao tentar adicionar novo contato.")

    }
}

export const deleteContact = async (contactId: string) => {
    try {
        await api.delete(`/user/contact/${contactId}`);

        successToast("Sucesso!")

        return true

    } catch (err) {
        warningToast("Falha ao.")

    }
}

export const contactUpdate = async (contactId: string, contactData: IContactPerfil) => {
    try {
        const res = await api.patch(`/user/contact/${contactId}`, contactData);

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao tentar alterar.")

    }
}