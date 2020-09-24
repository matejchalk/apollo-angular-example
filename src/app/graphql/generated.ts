import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  recipes: Array<Recipe>;
  recipe?: Maybe<Recipe>;
};


export type QueryRecipeArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: Recipe;
  updateRecipe: Recipe;
  deleteRecipe?: Maybe<Scalars['ID']>;
};


export type MutationCreateRecipeArgs = {
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  estimatedTime?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  steps?: Maybe<Array<Scalars['String']>>;
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  estimatedTime?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  steps?: Maybe<Array<Scalars['String']>>;
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  estimatedTime?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  steps?: Maybe<Array<Scalars['String']>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type RecipeFragment = (
  { __typename?: 'Recipe' }
  & Pick<Recipe, 'id' | 'title' | 'imageUrl' | 'estimatedTime' | 'serves' | 'steps' | 'ingredients'>
);

export type CreateRecipeMutationVariables = Exact<{
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  estimatedTime?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  steps?: Maybe<Array<Scalars['String']>>;
}>;


export type CreateRecipeMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: (
    { __typename?: 'Recipe' }
    & RecipeFragment
  ) }
);

export type UpdateRecipeMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  estimatedTime?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  steps?: Maybe<Array<Scalars['String']>>;
}>;


export type UpdateRecipeMutation = (
  { __typename?: 'Mutation' }
  & { updateRecipe: (
    { __typename?: 'Recipe' }
    & RecipeFragment
  ) }
);

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRecipeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRecipe'>
);

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = (
  { __typename?: 'Query' }
  & { recipes: Array<(
    { __typename?: 'Recipe' }
    & RecipeFragment
  )> }
);

export type RecipeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RecipeQuery = (
  { __typename?: 'Query' }
  & { recipe?: Maybe<(
    { __typename?: 'Recipe' }
    & RecipeFragment
  )> }
);

export const RecipeFragmentDoc = gql`
    fragment Recipe on Recipe {
  id
  title
  imageUrl
  estimatedTime
  serves
  steps
  ingredients
}
    `;
export const CreateRecipeDocument = gql`
    mutation CreateRecipe($title: String!, $imageUrl: String, $estimatedTime: Int, $serves: Int, $ingredients: [String!], $steps: [String!]) {
  createRecipe(title: $title, imageUrl: $imageUrl, estimatedTime: $estimatedTime, serves: $serves, ingredients: $ingredients, steps: $steps) {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRecipeGQL extends Apollo.Mutation<CreateRecipeMutation, CreateRecipeMutationVariables> {
    document = CreateRecipeDocument;
    
  }
export const UpdateRecipeDocument = gql`
    mutation UpdateRecipe($id: ID!, $title: String!, $imageUrl: String, $estimatedTime: Int, $serves: Int, $ingredients: [String!], $steps: [String!]) {
  updateRecipe(id: $id, title: $title, imageUrl: $imageUrl, estimatedTime: $estimatedTime, serves: $serves, ingredients: $ingredients, steps: $steps) {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRecipeGQL extends Apollo.Mutation<UpdateRecipeMutation, UpdateRecipeMutationVariables> {
    document = UpdateRecipeDocument;
    
  }
export const DeleteRecipeDocument = gql`
    mutation DeleteRecipe($id: ID!) {
  deleteRecipe(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRecipeGQL extends Apollo.Mutation<DeleteRecipeMutation, DeleteRecipeMutationVariables> {
    document = DeleteRecipeDocument;
    
  }
export const RecipesDocument = gql`
    query Recipes {
  recipes {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RecipesGQL extends Apollo.Query<RecipesQuery, RecipesQueryVariables> {
    document = RecipesDocument;
    
  }
export const RecipeDocument = gql`
    query Recipe($id: ID!) {
  recipe(id: $id) {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RecipeGQL extends Apollo.Query<RecipeQuery, RecipeQueryVariables> {
    document = RecipeDocument;
    
  }