import IUser from '../interfaces/User.interface';

import UserProfile from '../models/User.model';
export default class UserProfileService {
    async createNewUser({
        username,
        password,
        email,
        name,
        lastname,
        age,
        isAdmin
    }:IUser) {
        return await new UserProfile({
            username,
            password,
            email,
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

    async findUserByEmail(email:string) {
        return await UserProfile.findOne({
            email,
        });
    }
}