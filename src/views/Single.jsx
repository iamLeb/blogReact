
const comments = [
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi natus qui sapiente sequi suscipit? A ad animi blanditiis distinctio doloremque eum fugiat fugit impedit magni quo repellendus tenetur, unde, veritatis?'
    }
];

const Single = () => {
    return (
        <div className={'pt-9 bg-gray-100 p-4'}>
            <div className={'container mx-auto max-w-screen-md'}>
                <div className={'pt-6'}>
                    <h1 className={'font-extrabold text-3xl md:text-center md:py-4'}>The effect of livestock on the
                        phusiological condition of
                        roe
                        deer is modulated by habitat
                        quality</h1>
                </div>

                <div className={'flex items-center space-x-4 my-4'}>
                    <div className={'w-9 h-9 overflow-hidden rounded-full'}>
                        <img className={'object-cover w-full h-48 shadow-lg'}
                             src="https://images.pexels.com/photos/20582544/pexels-photo-20582544/free-photo-of-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                             alt="photo"/>
                    </div>

                    <div className={'text-xs'}>
                        <p>By <span className={'font-bold uppercase'}>iamLeb Solution</span></p>
                        <p>15 April 2024 &#x2022; 8 mins read</p>
                    </div>
                </div>

                <div className={'container mx-auto rounded-md overflow-hidden'}>
                    <div
                        className={'rounded-md overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer'}>
                        <img
                            src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Blog Image" className={'object-cover w-full h-48 shadow-lg'}/>
                    </div>

                    <div className={'py-9'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dignissimos
                            doloribus
                            earum iste molestiae necessitatibus perspiciatis quis ratione vitae. Beatae est explicabo
                            itaque
                            magni officia porro quos sunt! Architecto.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dignissimos
                            doloribus
                            earum iste molestiae necessitatibus perspiciatis quis ratione vitae. Beatae est explicabo
                            itaque
                            magni officia porro quos sunt! Architecto.</p>
                    </div>
                </div>

                <div className={'bg-white px-6 py-6 rounded-md shadow-lg md:flex justify-between items-center'}>
                    <div>
                        <h1 className={'font-bold text-2xl'}>Become a member</h1>

                        <div className={'py-8'}>
                            <p>Get the latest news right in your inbox.</p>
                            <p>We never span!</p>
                        </div>
                    </div>
                    <div>
                        <input type="text" className={'p-3 border rounded-full w-full focus:outline-none focus:ring-0'}
                               placeholder={'Enter your e-mail address'}/>
                        <button className={'bg-primary w-full p-2 text-white font-bold rounded-full mt-2'}>Subscribe
                        </button>
                    </div>
                </div>

                <div className={'py-9'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dignissimos
                        doloribus
                        earum iste molestiae necessitatibus perspiciatis quis ratione vitae. Beatae est explicabo
                        itaque
                        magni officia porro quos sunt! Architecto.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dignissimos
                        doloribus
                        earum iste molestiae necessitatibus perspiciatis quis ratione vitae. Beatae est explicabo
                        itaque
                        magni officia porro quos sunt! Architecto.</p>
                </div>

                {/*Comment Section*/}
                <div>
                    <div className={'font-bold border-b'}>
                        <h2 className={'border-b-4 border-gray-500 w-14'}>Comments</h2>
                    </div>
                    <div className={'py-2'}>
                        {comments.map(comment => (
                            <div key={comment.message} className={'flex justify-between items-start space-x-4 my-4'}>
                                <div className={'overflow-hidden rounded-full'}>
                                    <img src="https://ui-avatars.com/api/?name=Elon+Musk"
                                         alt="photo"/>
                                </div>
                                <div className={'text-xs'}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi natus qui
                                        sapiente
                                        sequi suscipit? A ad animi blanditiis distinctio doloremque eum fugiat fugit
                                        impedit
                                        magni quo repellendus tenetur, unde, veritatis?</p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'flex justify-between items-center space-x-4'}>
                                            <h3 className={'py-2 font-extrabold md:text-xl'}>Rosie</h3>
                                            <p>6 minutes ago</p>
                                        </div>

                                        <div className={'border-b-2'}>Reply</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className={'flex justify-between items-start space-x-4 my-4'}>
                            <div className={'overflow-hidden rounded-full'}>
                                <img src="https://ui-avatars.com/api/?name=Elon+Musk"
                                     alt="photo"/>
                            </div>
                            <div className={'text-xs'}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi natus qui sapiente
                                    sequi suscipit? A ad animi blanditiis distinctio doloremque eum fugiat fugit impedit
                                    magni quo repellendus tenetur, unde, veritatis?</p>
                                <div className={'flex justify-between items-center'}>
                                    <div className={'flex justify-between items-center space-x-4'}>
                                        <h3 className={'py-2 font-extrabold md:text-xl'}>Rosie</h3>
                                        <p>6 minutes ago</p>
                                    </div>

                                    <div className={'border-b-2'}>Reply</div>
                                </div>

                            </div>
                        </div>

                        {/*Leave a comment*/}
                        <div className={'p-4'}>
                            <div className={'font-bold border-b py-4'}>
                                <h2 className={'border-b-4 border-gray-500 w-9'}>Reply</h2>
                            </div>
                            {/*Form*/}
                            <div className={'py-4'}>
                                <form action="" method='post'>
                                    <input className={'w-full p-4 rounded-full m-1'} type="text" placeholder={'Name'}/>
                                    <textarea className={'w-full rounded-xl focus:outline-none p-4 m-1 resize-none'}
                                              placeholder={'Write your comment'} name="" id="" cols="30"
                                              rows="6"></textarea>
                                    <button className={'bg-primary text-white px-4 py-2 rounded-full m-1 w-2/4'}>Post
                                        Comment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Single;