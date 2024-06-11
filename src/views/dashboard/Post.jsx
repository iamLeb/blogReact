import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { TbTrashX } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import {useMycontext} from "../../contexts/MyProvider.jsx";

const Post = () => {
    // Global Function
    const { format, openModal, closeModal, modalVisible, showModal} = useMycontext();

    const [values, setValues] = useState({
        title: '',
        category: '',
        image: null,
        content: ''
    });

    // posts state
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            setValues({
                ...values,
                [name]: files[0]
            });
        } else {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(values);
        } catch (e) {
            console.log(e);
        }
    };


    // Fetch Posts
    const fetchPosts = async () => {
        try {
            const res = await axios.get('api/posts');
            if (res.status === 200) {
                setPosts(res.data.posts);
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchCategories = async () => {
        try {
            const res = await axios.get('api/categories');
            if (res.status === 200) {
                setCategories(res.data);
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPosts();
        fetchCategories()
    }, []);

    return (
        <section className="h-screen m-5">
            <div className="bg-white border border-gray-100 shadow-2xl">
                <div className="p-4 border-b">
                    <h3 className="font-bold">Add, Edit & Remove</h3>
                </div>
                <div className="p-3">
                    <div className="sm:flex justify-between items-center">
                        <div className="flex space-x-2">
                            <button className="flex items-center space-x-1 px-3 py-1 rounded bg-green-500 text-white"
                                    onClick={openModal}>
                                <GoPlus/>
                                <span>Create New Post</span>
                            </button>

                            <button className="flex items-center space-x-2 px-4 py-1 rounded bg-red-100 text-white">
                                <TbTrashX className="text-red-400"/>
                            </button>
                        </div>

                        <div className="relative mt-2 sm:mt-0">
                            <input
                                placeholder="Search..."
                                className="py-2 px-10 w-56 outline-none border rounded text-sm"
                                type="text"
                            />
                            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="text-center text-sm bg-gray-100">
                            <th className="px-4 py-2">PostID</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Published</th>
                            <th className="px-4 py-2">Created</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((post) => (
                            <tr key={post._id} className="text-center text-xs border-b">
                                <td className="px-4 py-2">{post._id.substring(18, [post._id.length - 2])}</td>
                                <td className="px-4 py-2 truncate">{post.title}</td>
                                <td className="px-4 py-2">{post.image}</td>
                                <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 text-xs font-bold rounded ${post.published ? 'bg-green-100 text-green-400' : 'bg-red-100 text-red-400'}`}>
                                            {post.published ? 'Active' : 'Pending'}
                                        </span>
                                </td>
                                <td className="px-4 py-2">{format(post.createdAt)}</td>
                                <td className="px-4 py-2">
                                    <div className={'flex sm:block'}>
                                        <button className="px-2 py-1 rounded bg-green-500 text-white">Edit</button>
                                        <button className="ml-2 px-2 py-1 rounded bg-red-500 text-white">Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end p-4 space-x-2">
                    <button className="border px-2 py-1 text-sm rounded">Previous</button>
                    <button className="border px-2 py-1 text-white bg-purple-900 text-sm rounded">1</button>
                    <button className="border px-2 py-1 text-sm rounded">Next</button>
                </div>
            </div>

            {modalVisible && (
                <div
                    className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className="bg-white m-2 sm:m-0 w-full sm:w-[35%] rounded-md shadow-lg transition-transform duration-300 transform ${showModal ? 'scale-100' : 'scale-75'}">
                        <div className={'bg-gray-100 p-3 flex items-center'}>
                            <h2 className="font-extrabold">Create New Post</h2>
                        </div>
                        <div className="p-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Title</label>
                                    <input
                                        placeholder={'enter title'}
                                        type="text"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Category</label>
                                    <select onChange={handleChange} name="category" id="category" className="w-full p-2 border rounded">
                                        <option selected disabled>--Select Category--</option>
                                        {categories.map((category) => (
                                            <option key={category._id} value={category._id}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Content</label>
                                    <textarea
                                        name="content"
                                        value={values.content}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end space-x-2 text-xs">
                                    <button type="button" onClick={closeModal}
                                            className="px-3 py-0 rounded bg-gray-100">Close
                                    </button>
                                    <button type="submit" className="px-4 py-2 rounded bg-green-500 text-white">Create
                                        Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Post;
