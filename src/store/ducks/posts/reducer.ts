import {LoadingState, PostsState} from "./contracts/state";
import {Draft, produce} from "immer";
import {PostsActions, PostsActionType} from "./actionCreators";

const initialPostsState: PostsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const postsReducer = produce((draft: Draft<PostsState>, action: PostsActions) => {
    switch (action.type) {
        case PostsActionType.SET_POSTS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case PostsActionType.FETCH_POSTS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break;


        case PostsActionType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;


        default:
            break
    }



}, initialPostsState)