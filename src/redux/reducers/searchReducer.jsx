import {
  SEARCH_AUTHOR,
  SEARCH_GENRE,
  SEARCH_ISBN,
  SEARCH_TITLE,
} from "../actions/searchActions";
import { BOOKS } from "../../Constants/Books";

const initialState = { result: BOOKS };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TITLE: {
      return {
        ...state,
        result: BOOKS.filter((item) =>
          item.title.toLowerCase().includes(action.payload.value)
        ),
      };
    }
    case SEARCH_AUTHOR: {
      return {
        ...state,
        result: BOOKS.filter((item) =>
          item.author.toLowerCase().includes(action.payload.value)
        ),
      };
    }
    case SEARCH_ISBN: {
      return {
        ...state,
        result: BOOKS.filter((item) =>
          item.ISBN.toLowerCase().includes(action.payload.value)
        ),
      };
    }
    case SEARCH_GENRE: {
      return {
        ...state,
        result: BOOKS.filter((item) =>
          item.ISBN.toLowerCase().includes(action.payload.value)
        ),
      };
    }
    default:
      return state;
  }
};
