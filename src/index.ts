import MongooseConnect from './db/Mongoose.class';

export default async ():Promise<void> => {
    const mongooseConnect:MongooseConnect = new MongooseConnect();

    await mongooseConnect.connect()
        .then(() => console.log(`--- [connection_message] Conexión exitosa a la base de datos ---`))
        .catch((error:unknown) => {
            console.error(`---[connection_error]---\n${ (error as Error) }`);
            process.exit();
        });
}