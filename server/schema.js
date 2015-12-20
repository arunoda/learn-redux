import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLSchema
} from 'graphql';

let Count = 0;

const throwRandomErrors = (pct) => {
  const val = Math.random() * 100;
  if(val <= pct) {
    throw new Error('Internal Error');
  }
};

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
        throwRandomErrors(40);
        return ++Count;
      }
    },
    remove: {
      type: GraphQLInt,
      resolve() {
        throwRandomErrors(40);
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