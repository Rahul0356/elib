import app from './src/app';

const startServer = ()=>{

    const port =  config.port || 3000;


    app.listen(port, () => {
        console.log(`listing on port: ${port}`);

});
}
startServer();
