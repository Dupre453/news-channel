import React from 'react';
import {Avatar, IconButton} from "@mui/material";
import CommentBtn from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import Like from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/IosShare";

interface PostProps {
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

const PostBlock:React.FC = ({text, user}) => {
    return (
        <div className='post-block'>
            <div className='post-block__header'>
                <div className='post-block__avatar'>
                    <Avatar alt="Аватар пользователся"
                            src={user.avatarUrl}/>
                </div>
                <div className='post-block__name'>
                    <b>{user.fullname}</b>
                    <span> @{user.username}</span>
                    <span>1ч</span>
                </div>
            </div>
            <p className='post-block__desc'>
                {text}
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