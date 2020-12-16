const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI
const cors = require('cors');

const port = 3030;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Mongodb connected..'))
.catch((err) => console.log(err));

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));    

app.listen(port, () => {
    console.log('listening on port ' + port);
})