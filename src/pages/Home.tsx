import React from 'react';
import './../scss/pages/Home.scss'
import PostBlock from "../components/PostBlock";
import SideMenu from "../components/SideMenu";
import {Avatar, IconButton} from "@mui/material";
import PersonAdd from '@mui/icons-material/PersonAddAlt';
import NewPost from "../components/NewPost";
import BannerBlock from "../components/BannerBlock";
const Home = () => {

    return (
        <div className='root'>
            <section className='nav-bar'>
               <SideMenu/>
            </section>
            <section className='news-feed'>
                <h3>Главная</h3>
                <NewPost/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
                <PostBlock/>
            </section>
            <section className='banners'>
                <BannerBlock/>
            </section>
        </div>
    );
};

export default Home;