import {useNavigate} from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: 'Blog Post 1',
        description: 'This is a short description of blog post 1.',
        image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },
    {
        id: 2,
        title: 'Blog Post 2',
        description: 'This is a short description of blog post 2.',
        image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },
    {
        id: 3,
        title: 'Blog Post 3',
        description: 'This is a short description of blog post 3.',
        image: 'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },
    {
        id: 4,
        title: 'Blog Post 4',
        description: 'This is a short description of blog post 4.escription of blog post 4.',
        image: 'https://images.pexels.com/photos/4240498/pexels-photo-4240498.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },

    {
        id: 4,
        title: 'Blog Post 4',
        description: 'This is a short description of blog post 4.',
        image: 'https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },

    {
        id: 4,
        title: 'Blog Post 4',
        description: 'This is a short description of blog post 4.',
        image: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },

    {
        id: 4,
        title: 'Blog Post 4',
        description: 'This is a short description of blog post 4.',
        image: 'https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },
    {
        id: 4,
        title: 'Blog Post 4',
        description: 'This is a short description of blog post 4.',
        image: 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/single'
    },

    // Add more blog posts as needed
];

const Featured = () => {
    const navigate = useNavigate();
    return (
        <div className={'container  mx-auto p-4 my-9'}>
            <h1 className={'text-3xl sm:text-4xl font-bold text-center py-6'}><span className={'border-b-4'}>Featured Posts</span>
            </h1>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}>
                {blogPosts.map(blog => (
                    <div key={blog.id} className={'bg-white shadow-lg rounded-md overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'}>
                        <img src={blog.image} alt="Blog Image" className={'object-cover w-full h-48'}/>
                        <div className={'p-4'}>
                            <h1 className={'text-lg font-bold'}>Post Titles</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className={'flex justify-end'}>
                                <a href={'/single'} className={'sm:mt-4 bg-gray-500 text-white px-4 py-1 rounded-md font-bold'}>Read
                                    More
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;