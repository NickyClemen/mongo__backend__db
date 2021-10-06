import MongooseConnect from './db/Mongoose.class';

import UserProfileService from './services/User.service';

export default async ():Promise<UserProfileService> => {
    const mongooseConnect:MongooseConnect = new MongooseConnect();
    const userProfile:UserProfileService = new UserProfileService();

    await mongooseConnect.connect()
        .then(() => console.log(`--- [connection_message] Conexión exitosa a la base de datos ---`))
        .catch((error:unknown) => {
            console.error(`---[connection_error]---\n${ (error as Error) }`);
            process.exit();
        });

    return userProfile;
}