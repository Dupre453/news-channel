import React, {useState} from 'react';
import {ModalBlock} from "./ModalBlock";
import NewPost from "./NewPost";



const SideMenu: React.FC = () => {
    const [visibleWinPost, setVisibleWinPost] = React.useState<boolean>(false)

    const handleClickOpenAddPost = () => {
        setVisibleWinPost(true)
    }

    const onCloseAddPost = () => {
        setVisibleWinPost(false)
    }
    return (
        <>
        <div>
            <ul className='icons-navbar'>
                <li className='logo-icon'>
                    <div className='menu-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-planet">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"/>
                            <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                        </svg>
                        <b><h5>Главная</h5></b>
                    </div>
                </li>
                <li className='home-icon'>
                    <div className='menu-bg'>
                        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <b><h5>Поиск</h5></b>
                    </div>
                </li>
                <li>
                    <div className='menu-bg'>


                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-hash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 9l14 0"/>
                            <path d="M5 15l14 0"/>
                            <path d="M11 4l-4 16"/>
                            <path d="M17 4l-4 16"/>
                        </svg>
                        <b><h5>Уведомления</h5></b>
                    </div>
                </li>
                <li>
                    <div className='menu-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                        </svg>
                        <b><h5>Сообщения</h5></b>
                    </div>
                </li>
                <li>
                    <div className='menu-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/>
                        </svg>
                        <b><h5>Закладки</h5></b>
                    </div>
                </li>
                <li>
                    <div className='menu-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-typography">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                            <path d="M9 12v-1h6v1"/>
                            <path d="M12 11v6"/>
                            <path d="M11 17h2"/>
                        </svg>
                        <b><h5>Список</h5></b>
                    </div>
                </li>
                <li>
                    <div className='menu-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>

                        </svg>
                        <b><h5>Профиль</h5></b>
                    </div>
                </li>
            </ul>

            <button onClick={handleClickOpenAddPost} className='menu-btn'>
                Запостить
            </button>
          {/*  <ModalBlock onClose={onCloseAddPost} title='' visible={true}>
             <div style={{width: 690, padding: 40}}>
                 <NewPost />
             </div>
            </ModalBlock>*/}
        </div>
        </>
    );
};

export default SideMenu