import { connect, Mongoose } from 'mongoose';

import Config from '../config';

const {
    mongoUser,
    mongoPassword,
    mongoNameDatabase,
} = new Config();

export default class MongooseConnect {
    private mongoUser:string;
    private mongoPassword:string;
    private mongoNameDatabase:string;

    constructor() {
        this.mongoUser = mongoUser;
        this.mongoPassword = mongoPassword;
        this.mongoNameDatabase = mongoNameDatabase;
    }

    async connect():Promise<Mongoose> {
        const STRING_CONNECT:string = `mongodb+srv://${ this.mongoUser }:${ this.mongoPassword }@cluster0.nyrmj.mongodb.net/${ this.mongoNameDatabase }?retryWrites=true&w=majority`;
        return await connect(STRING_CONNECT);
    }
}