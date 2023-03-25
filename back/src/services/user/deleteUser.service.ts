import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

export const deleteUserService = async (user: any): Promise<void> => {
    const userRepos = AppDataSource.getRepository(User);

    user.isActive = false;

    await userRepos.save(user);
}