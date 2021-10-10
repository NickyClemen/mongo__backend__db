import MongooseConnect from './db/Mongoose.class';

import UserProfileService from './services/User.service';
import BookService from './services/Book.service';

export default async () => {
    const mongooseConnect:MongooseConnect = new MongooseConnect();
    const userProfile:UserProfileService = new UserProfileService();
    const bookService:BookService = new BookService();

    await mongooseConnect.connect()
        .then(() => console.log(`--- [connection_message] Conexión exitosa a la base de datos ---`))
        .catch((error:unknown) => {
            console.error(`---[connection_error]---\n${ (error as Error) }`);
            process.exit();
        });

    return {
        userProfile,
        bookService
    };
}