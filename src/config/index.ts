const path = require('path');

const dotenv = require('dotenv');
const ENV_FILE = path.join(__dirname, '../../.env');
dotenv.config({ path: ENV_FILE });
export default class Config {
    public mongoUser:string;
    public mongoPassword:string;
    public mongoNameDatabase:string;
    public port:number;

    constructor() {
        this.mongoUser = String(process.env.MONGO_USER);
        this.mongoPassword = String(process.env.MONGO_PASSWORD);
        this.mongoNameDatabase = String(process.env.MONGO_NAME_DATABASE);
        this.port = Number(process.env.PORT);
    }
}