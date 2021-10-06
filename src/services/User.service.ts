import IUser from '../interfaces/User.interface';

import User from '../models/User.model';

export default class UserService {
    private userInstance:any;

    constructor({
        username,
        password,
        name,
        lastname,
        age,
        isAdmin
    }:IUser) {
        this.userInstance = new User({
            username,
            password,
            name,
            lastname,
            age,
            isAdmin
        });
    }

    async findUserByUsername(username:string) {
        return await this.userInstance.findOne({
            username,
        });
    }
}