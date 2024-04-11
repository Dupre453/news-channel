import React from 'react';
import {Avatar, CircularProgress, IconButton,} from "@mui/material";
import {TextareaAutosize} from "@mui/material";
import AddPhoto from '@mui/icons-material/CropOriginal';
import Smile from '@mui/icons-material/SentimentSatisfiedAlt';

const max_length = 280

const NewPost:React.FC = () => {

    const [text, setText] = React.useState<string>('')
    const textLimit = Math.round((text.length / 280) * 100)
    const textCount = max_length - text.length



    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddPost = (): void => (
        setText('')
    )
    return (
        <>
        <div className='new-post'>
            <div className='new-post__body'>
                <Avatar alt="Аватар пользователся"
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <TextareaAutosize
                    onChange={handleChangeTextArea}
                    style={{width: "100%"}}
                    className='text-area'
                    placeholder='Что нового?'
                    value={text}
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
                <span>{textCount}</span>
                <div className='circle-progress'>
                    <CircularProgress
                        className='circle-color'
                        variant="determinate"
                        size={20}
                        thickness={4}
                        value={text.length >= max_length ? 100 : textLimit}
                        style={text.length >= max_length ? {color: 'red', position: "absolute"} : undefined}
                    />
                    <CircularProgress
                        style={{color: "rgba(0,0,0,0.2)", position: 'absolute'}}
                        variant="static"
                        size={20}
                        thickness={4}
                        value={100}
                    />
                </div>
                <button
                    onClick={handleClickAddPost}
                    disabled={text.length >= max_length}  /*починить*/
                    className='new-post-btn'>
                    Запостить
                </button>
            </div>
            </div>
        </div>
        </>
    );
};

export default NewPost;