import { mongo } from 'mongoose';

import IUser from '../interfaces/User.interface';
import UserProfile from '../models/User.model';

import Book from '../models/Book.model';

import { TUser } from '../types';
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
            isAdmin,
        });
    }

    async addReadedBooktoUser(
        { username, id }:{ username:string, id:string }
    ) {
        return await UserProfile
            .findOneAndUpdate(
                { username },
                { $push: { readed: id } },
                { 'new': true }
            ).populate({ path: 'readed', select: 'title', model: 'Book' })
            .catch((err:unknown) => (err as Error).message);
    }

    async addReadingBooktoUser(
        { username, id }:{ username:string, id:string }
    ) {
        return await UserProfile
            .findOneAndUpdate(
                { username },
                { $push: { reading: id } },
                { 'new': true }
            ).populate({ path: 'readed', select: 'title', model: 'Book' })
            .catch((err:unknown) => (err as Error).message);
    }

    async addToReadBooktoUser(
        { username, id }:{ username:string, id:string }
    ) {
        return await UserProfile
            .findOneAndUpdate(
                { username },
                { $push: { toRead: id } },
                { 'new': true }
            ).populate({ path: 'readed', select: 'title', model: 'Book' })
            .catch((err:unknown) => (err as Error).message);
    }

    async addAbandonedBooktoUser(
        { username, id }:{ username:string, id:string }
    ) {
        return await UserProfile
            .findOneAndUpdate(
                { username },
                { $push: { abandoned: id } },
                { 'new': true }
            ).populate({ path: 'readed', select: 'title', model: 'Book' })
            .catch((err:unknown) => (err as Error).message);
    }

    async inserNewUser(user:TUser) {
        return await UserProfile.create(user)
            .catch((err:unknown) => (err as Error).message);
    }

    async findUserByUsername(username:string) {
        return await UserProfile.findOne({ username })
            .catch((err:unknown) => (err as Error).message);
    }

    async findUserByEmail(email:string) {
        return await UserProfile.findOne({ email })
            .catch((err:unknown) => (err as Error).message);
    }
}