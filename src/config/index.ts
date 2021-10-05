const path = require('path');

const dotenv = require('dotnet');
const ENV_FILE = path.join(__dirname, '../../.env');
dotenv.config({ path: ENV_FILE });

class Config {
    public mongoPassword:string;
    public mongoConnectionString:string;
    public port:number;

    constructor() {
        this.mongoPassword = String(process.env.MONGO_PASSWORD);
        this.mongoConnectionString = String(process.env.MONGO_CONNECTION_STRING);
        this.port = Number(process.env.PORT);
    }
}