// src/entities/recipe/providers/RecipeProvider.tsx
import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { IRecipe, RecipeArrayType } from '../model';
import { RecipeApi } from '../api';

type RecipeState = {
  recipes: RecipeArrayType;
};

type Action =
  | { type: 'SET_RECIPES'; payload: RecipeArrayType }
  | { type: 'ADD_RECIPE'; payload: IRecipe }
  | { type: 'REMOVE_RECIPE'; payload: number };

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (state: RecipeState, action: Action): RecipeState => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.payload };
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] };
    case 'REMOVE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    default:
      throw new Error('Unhandled action type');
  }
};

type RecipeContextType = {
  state: RecipeState;
  dispatch: Dispatch<Action>;
};

export const RecipeContext = createContext<RecipeContextType | undefined>(
  undefined
);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
