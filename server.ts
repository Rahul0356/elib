import app from './src/app';
import connectDB from './src/config/db';

const config = { port: 3000 }; // Add this line or import your config as needed

const startServer =async ()=>{
    await connectDB();

    const port =  config.port || 3000;


    app.listen(port, () => {
        console.log(`listing on port: ${port}`);

});
}
startServer();
