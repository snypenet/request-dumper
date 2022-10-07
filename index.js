const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.options('*', cors());

const createDumpHandler = (method, path) => {
    console.log(`Dumping ${method.toUpperCase()} - ${path}`);
    app[method.toLowerCase()](path, (request, response) => {
        console.log('-----------------------------------------');
        console.log(`---------------NEW ${method.toUpperCase()} REQUEST----------`);
        console.log('-----------------------------------------');
        console.log('Timestamp:', new Date().toISOString());
    
        console.log('Url:', request.path);
        console.log('Headers:', request.rawHeaders);
        console.log('Body:', request.body);
        
        response.status(200);
        response.send('Dumped!!');
    });
};

createDumpHandler('get', '/*');
createDumpHandler('post', '/*');
createDumpHandler('delete', '/*');
createDumpHandler('patch', '/*');
createDumpHandler('put', '/*');

const PORT = process.env.PORT || 8030;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});