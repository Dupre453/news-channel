import React from 'react';
import {Avatar, Box, CircularProgress, dividerClasses, IconButton, TextField} from "@mui/material";
import CommentBtn from "@mui/icons-material/ChatBubbleOutline";
import PersonAdd from "@mui/icons-material/PersonAddAlt";
import {TextareaAutosize} from "@mui/material";
import {CircularProgressProps} from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import AddPhoto from '@mui/icons-material/CropOriginal';
import Smile from '@mui/icons-material/SentimentSatisfiedAlt';

const NewPost = () => {
    return (
        <>
        <div className='new-post'>
            <div className='new-post__body'>
                <Avatar alt="Аватар пользователся"
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <TextareaAutosize
                    style={{width: "100%"}}
                className='text-area'
                placeholder='Что нового?'
                />
            </div>
            <div className='new-post__inline'>
            <div className='new-post__bottom'>

                    <IconButton style={{marginLeft: 43, color: "#c5c91f"}}>
                        <AddPhoto style={{fontSize: 22}}/>
                    </IconButton>
                    <IconButton style={{marginLeft: 20, color: "#c5c91f"}}>
                        <Smile style={{fontSize: 22}}/>
                    </IconButton>

            </div>
            <div className='new-post__bottom-right'>
                <span>280</span>
                <div>
                    <CircularProgress
                        style={{color: '#c5c91f', position: "absolute"}}
                        variant="static"
                        size={17}
                        thickness={4}
                        value={10}
                    />
                    <CircularProgress
                    style={{color: 'rgba(0,0,0,0.5)', position: "relative"}}
                    variant="static"
                    size={17}
                    thickness={4}
                    value={100}
                    />
                </div>
                <button className='new-post-btn'>
                    Запостить
                </button>
            </div>
            </div>
        </div>
            <div className='post-underline'></div>
        </>
    );
};

export default NewPost;