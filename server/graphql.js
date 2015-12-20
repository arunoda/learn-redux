import Schema from './schema';
import express from 'express';
import expressGraphql from 'express-graphql';
import cors from 'cors';

const port = 4000;
const app = express();
app.use(cors({origin: true, credentials: true}));
app.use('/', expressGraphql({schema: Schema, graphiql: true}));

console.log(`GraphQL Endpoint started on port: ${port}`);
app.listen(port);