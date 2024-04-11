import React from 'react';
import {Avatar, IconButton} from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAddAlt";

const BannerBlock: React.FC = () => {
    return (
        <div>
            <div>
                <input className='search' type="text" placeholder='Поиск новостей...'/>
            </div>
            <div className='current-block'>
                <div className='current-block__title'>Актуальные темы</div>
                <ul>
                    <li>
                        <span className='title-post'>Белка-летяга</span>
                        <div className='current-block__post'>постов:<span>13278</span></div>
                    </li>
                    <li>
                        <span className='title-post'>#Билли</span>
                        <div className='current-block__post'>постов:<span>12208</span></div>
                    </li>
                    <li>
                        <span className='title-post'>Россия</span>
                        <div className='current-block__post'>постов:<span>10976</span></div>
                    </li>
                </ul>
            </div>

            <div className='read-block'>
                <div className='read-block__title'>Кого читать</div>
                <ul>
                    <li>
                        <div className='post-block__header'>
                            <div className='post-block__avatar'>
                                <Avatar alt="Аватар пользователся"
                                        src="https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                            </div>
                            <div className='post-block__name'>
                                <b>luv u </b>
                                <span> @apdasd</span>
                            </div>
                            <div>
                                <IconButton style={{color: "#c5c91f"}}>
                                    <PersonAdd/>
                                </IconButton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default BannerBlock;