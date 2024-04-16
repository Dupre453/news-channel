import React from 'react';
import './../scss/pages/Home.scss'
import PostBlock from "../components/PostBlock";
import SideMenu from "../components/SideMenu";
import NewPost from "../components/NewPost";
import BannerBlock from "../components/BannerBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../store/ducks/posts/actionCreators";
import {selectIsPostsLoading, selectPostsItems} from "../store/ducks/posts/selectors";
import {Post} from "../store/ducks/posts/contracts/state";
import CircularProgress from '@mui/material/CircularProgress';
import {fetchTags} from "../store/actualTags/actionCreators";


const Home = (): React.ReactElement<Post> => {

const dispatch = useDispatch()
const posts = useSelector(selectPostsItems)
const isLoading = useSelector(selectIsPostsLoading)



    React.useEffect(() => {
       dispatch(fetchPosts())
        dispatch(fetchTags())
    }, [dispatch])
    return (
        <div className='root'>
            <section className='nav-bar'>
               <SideMenu/>
            </section>
            <section className='news-feed'>
                <h3>Главная</h3>
                <NewPost/>

                {isLoading ? <CircularProgress style={{color: "#c5c91f", width: 20, height: 20}}/> :
                    posts.map((post) =>
                        <PostBlock
                            key={post.id}
                            text={post.text}
                           user={post.user}
                        />)
                }
            </section>
            <section className='banners'>
                <BannerBlock/>
            </section>
        </div>
    );
};

export default Home;