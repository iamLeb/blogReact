const Hero = () => {
    return (
        <section className={'flex justify-between items-center p-4 pt-9 bg-gray-100 h-[29rem]'}>
            <div className={'container sm:flex sm:justify-between items-center mx-auto'}>
                <div className={'mx-auto my-auto'}>
                    <h1 className={'text-left text-4xl sm:text-5xl font-bold'}>Hello, I'm <span
                        className={'text-primary'}>Caleb</span><br/> Welcome to
                        my blog</h1>
                    <p className={'text-left sm:text-center px-2 py-6 text-md font-semibold text-xl'}>Don't miss out on
                        the latest news about Travel
                        tips, Hotels review, Food guide...</p>
                    <div className={'relative'}>
                        <input
                            className={'p-3 w-full rounded-full border-none focus:outline-none focus:ring-0'}
                            placeholder={'Enter your email'}
                            type="text"
                        />

                        <button
                            className={'absolute top-0 right-0 bottom-0 bg-primary px-7 rounded-r-full text-white font-bold'}>Subscribe
                        </button>
                    </div>
                </div>

                <div className={'hidden sm:block mx-auto'}>
                    <img src='https://stories-demo.netlify.app/assets/imgs/authors/featured.png' alt=""/>
                </div>
            </div>


        </section>
    );
};

export default Hero;