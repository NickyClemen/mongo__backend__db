import IUser from '../interfaces/User.interface';

import UserProfile from '../models/UserProfileService.model';

export default class UserProfileService {
    async createNewUser({
        username,
        password,
        name,
        lastname,
        age,
        isAdmin
    }:IUser) {
        return await new UserProfile({
            username,
            password,
            name,
            lastname,
            age,
            isAdmin
        });
    }

    async findUserByUsername(username:string) {
        return await UserProfile.findOne({
            username,
        });
    }
}