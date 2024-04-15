
//действие с добавлением всех твитов в массив items

import {LoadingState, PostsState} from "./contracts/state";
import {Action} from "redux";

export enum PostsActionType {
    SET_POSTS = 'posts/SET_POSTS',
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
}



export interface SetPostsActionInterface extends Action<PostsActionType>{
    type: PostsActionType.SET_POSTS;
    payload: PostsState['items']
}

export interface FetchPostsActionInterface extends Action<PostsActionType>{
    type: PostsActionType.FETCH_POSTS;
}

export interface SetPostsLoadingStateActionInterface extends Action<PostsActionType>{
    type: PostsActionType.SET_LOADING_STATE;
    payload: LoadingState
}


//--------------------------------------------------------------------------------------------------


export const setPosts = (payload: PostsState['items']): SetPostsActionInterface => ({
    type: PostsActionType.SET_POSTS,
    payload,
})

export const setPostsLoadingState = (payload: LoadingState
): SetPostsLoadingStateActionInterface => ({
    type: PostsActionType.SET_LOADING_STATE,
    payload,
})


    export const fetchPosts = (): FetchPostsActionInterface => ({
    type: PostsActionType.FETCH_POSTS,
})



export type PostsActions =
    | SetPostsActionInterface
    | FetchPostsActionInterface
    | SetPostsLoadingStateActionInterface

