import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

import { useReducer } from 'react';

// switch case function that checks action values and updates arrays
export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        // if the action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new state object
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        // if it's none of these actions, do not update state at all and keep things the same
        default:
            return state;
    }
}