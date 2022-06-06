export const SEARCH_TITLE = "SEARCH_TITLE";
export const SEARCH_AUTHOR = "SEARCH_AUTHOR";
export const SEARCH_ISBN = "SEARCH_ISBN";
export const SEARCH_GENRE = "SEARCH_GENRE";

export const searchTitle = (payload) => ({ type: SEARCH_TITLE, payload });
export const searchAuthor = (payload) => ({ type: SEARCH_AUTHOR, payload });
export const searchISBN = (payload) => ({ type: SEARCH_ISBN, payload });
export const searchGenre = (payload) => ({ type: SEARCH_GENRE, payload });
