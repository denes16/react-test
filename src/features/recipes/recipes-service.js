import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = process.env.REACT_APP_RECIPES_API_KEY;
// * We must add the apiKey to the query string.
export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spoonacular.com/recipes',
    }),
    endpoints: (builder) => ({
        getRandomRecipes: builder.query({
            query: (limit = 10) => `/random?apiKey=${apiKey}&number=${limit}`,
            transformResponse: (response) => response.recipes,
        }),
        getRecipeDetails: builder.query({
            query: (id) => `/${id}/information?apiKey=${apiKey}`,
        }),
    }),
});

export const { useGetRandomRecipesQuery, useGetRecipeDetailsQuery } =
    recipesApi;
