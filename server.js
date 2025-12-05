const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); 


const app = express();

app.use(cors());

app.get('/rest/getAllUsers', (req, res) => {
     res.json(mockData); 
    
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, 
}));

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
    console.log(`REST endpoint: http://${HOST}:${PORT}/rest/getAllUsers`);
});
