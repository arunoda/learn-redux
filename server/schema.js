import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLSchema
} from 'graphql';

let Count = 0;

const RootQuery = new GraphQLObjectType({
  name: 'CounterQuery',
  fields: () => ({
    count: {
      type: GraphQLInt,
      resolve() {
        return Count;
      }
    }
  })
});

const Mutations = new GraphQLObjectType({
  name: 'CounterMutations',
  fields: () => ({
    add: {
      type: GraphQLInt,
      resolve() {
        return ++Count;
      }
    },
    remove: {
      type: GraphQLInt,
      resolve() {
        return --Count;
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default Schema;