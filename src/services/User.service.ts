import IUser from '../interfaces/User.interface';

import UserProfile from '../models/User.model';

type User = {
    username:string,
    password:string,
    email:string,
    name:string,
    lastname:string,
    age:number,
    isAdmin:boolean
}
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

    async inserNewUser(user:User) {
        return await UserProfile.create(user)
            .catch((err:unknown) => (err as Error).message);
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