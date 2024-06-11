import React from 'react';
import banner from '../../assets/dashboard/profile-bg.jpg'

const Profile = () => {
    return (
        <div className={'relative'}>
            <div className={'relative'}>
                <div className={'h-64 overflow-hidden'}>
                    <img className={'w-full'} src={banner} alt="banner"/>
                    <div className={'absolute inset-0 bg-gradient-to-r from-[#4b38b3] to-[#6559cc] opacity-80'}></div>
                </div>
            </div>

            <div>
                <img src="" alt=""/>
            </div>

            {/*<div className={'absolute top-2/3  flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 m-4'}>*/}
            {/*    <div className={'p-4 rounded-md bg-white shadow-md'}>Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*        elit. Adipisci aliquid dolores fuga vel. Aspernatur aut delectus eius illum in iusto nobis odio, quo*/}
            {/*        reiciendis sapiente?*/}
            {/*    </div>*/}
            {/*    <div className={'p-4 rounded-md bg-white shadow-md'}>Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*        elit. Adipisci aliquid dolores fuga vel. Aspernatur aut delectus eius illum in iusto nobis odio, quo*/}
            {/*        reiciendis sapiente?*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Profile;