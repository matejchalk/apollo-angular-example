import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { RecipeFragment } from './generated';

const uri = 'http://localhost:4000/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          // this is actually the default: https://www.apollographql.com/docs/react/caching/cache-configuration/#generating-unique-identifiers
          // keyFields: ['id'],
          fields: {
            recipe: (
              recipe: RecipeFragment | undefined,
              { args, toReference }
            ) => recipe ?? toReference({ __typename: 'Recipe', id: args?.id }),
            recipes: {
              merge: false,
            },
          },
        },
      },
    }),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
