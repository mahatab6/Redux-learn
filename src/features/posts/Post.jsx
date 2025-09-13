import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, updateBook } from "./postSlice";
import { useForm } from "react-hook-form";

function Post() {
  const posts = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  const [selectedPost, setSelectedPost] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    reset(post); 
    document.getElementById("my_modal_2").showModal();
  };

  const onSubmit = (data) => {
    dispatch(updateBook({ id: selectedPost.id, ...data }));
    document.getElementById("my_modal_2").close();
  };

  return (
    <div>
      <h2>Redux CRUD Example</h2>

      <div>
        <h3>New Data Added</h3>
      </div>

      <div>
        {posts.length > 0 ? (
          <>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h2>Book Name: {post.bookName}</h2>
                  <p>By {post.writer}</p>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="border px-2 py-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(post)}
                    className="border px-2 py-1"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>

            {/* Modal */}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="bookName"
                    {...register("bookName")}
                  />
                  <input
                    type="text"
                    placeholder="writer"
                    {...register("writer")}
                  />
                  <input type="submit" value="Update" />
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        ) : (
          <h3>No post here</h3>
        )}
      </div>
    </div>
  );
}

export default Post;
