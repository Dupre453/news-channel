import React from 'react';
import './../scss/pages/Home.scss'
import PostBlock from "../components/post-block";
import SideMenu from "../components/SideMenu";
const Home = () => {

    return (
        <div className='root'>

            <section className='nav-bar'>
               <SideMenu/>

            </section>
            <section className='news-feed'>
                <h3>Главная</h3>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
            </section>
            <section className='banners'>
                <div>
                    <input className='search' type="text" placeholder='Поиск новостей...'/>
                </div>
            </section>
        </div>
    );
};

export default Home;