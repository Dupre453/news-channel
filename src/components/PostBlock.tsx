import React from 'react';
import {Avatar, IconButton} from "@mui/material";
import CommentBtn from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import Like from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/IosShare";



const PostBlock:React.FC = () => {
    return (
        <div className='post-block'>
            <div className='post-block__header'>
                <div className='post-block__avatar'>
                    <Avatar alt="Аватар пользователся"
                            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className='post-block__name'>
                    <b>dsdsds</b>
                    <span> @dadawd</span>
                    <span>1ч</span>
                </div>
            </div>
            <p className='post-block__desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus esse illo in molestiae nemo praesentium quaerat qui sit voluptate voluptates.
            </p>

            <div>
                <IconButton style={{marginLeft: 43, color: "#c5c91f"}}>
                    <CommentBtn style={{fontSize: 18}}/>
                </IconButton>
                <span style={{fontSize: 14}}>1</span>
                <IconButton style={{marginLeft: 80, color: "#c5c91f"}}>
                    <RepeatIcon style={{fontSize: 18}}/>
                </IconButton>
                <IconButton style={{marginLeft: 80, color: "#c5c91f"}}>
                    <Like style={{fontSize: 18}}/>
                </IconButton>
                <IconButton style={{marginLeft: 80, color: "#c5c91f"}}>
                    <ShareIcon style={{fontSize: 18}}/>
                </IconButton>
            </div>
        </div>
    );
};

export default PostBlock;