import { Request, Response } from "express";
import * as service from "../services";

export const createContactController = async (req: Request, res: Response) => {
    const data = await service.createContactService(req.foundUser, req.body);

    return res.status(201).json(data);
}

export const listContactController = async (req: Request, res: Response) => {
    const data = await service.listContactService(req.foundUser);

    return res.status(200).json(data)
}

export const updateContactController = async (req: Request, res: Response) => {
    const data = await service.updateContactService(req.foundContact, req.body);

    return res.status(200).json(data)
}

export const deleteContactController = async (req: Request, res: Response) => {
    const data = await service.deleteContactService(req.foundContact);

    return res.status(204).json(data)
}

