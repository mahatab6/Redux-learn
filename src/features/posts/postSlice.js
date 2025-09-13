import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [
        {
            id: 1,
            bookName: "English Book",
            writer: "Shamin"
        },
        {
            id: 2,
            bookName: "Bangla Book",
            writer: "Hamida"
        }
    ],
};

export const postSlice = createSlice ({
    name: "post",
    initialState,
    reducers:{
        deleteBook: (state, action) => {
            const id  = action.payload;
            state.post = state.post.filter((book) => book.id !== id)
        },

        addBook: (state, action) => {
            const data = action.payload;
            state.post.push(data)
        },
        updateBook: (state, action) => {
            const {id, bookName, writer} = action.payload;
            const book = state.post.find((p)=> p.id === id);
            if(book){
                book.bookName = bookName;
                book.writer = writer;
            }
        }

    }
})

export const { deleteBook, addBook, updateBook } = postSlice.actions;
export default postSlice.reducer;