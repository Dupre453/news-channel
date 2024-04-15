import {call, put,takeLatest} from 'redux-saga/effects'
import {PostsActionType, setPosts, setPostsLoadingState} from "./actionCreators";
import {PostsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";

export function* fetchPostsRequest() {
    try {
        // @ts-ignore
        const items = yield call(PostsApi.fetchPosts)
        yield put(setPosts(items))
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR))
    }
}

//главная сага(к постам) следит за каждым экшеном
export function* postsSaga() {
    yield takeLatest(PostsActionType.FETCH_POSTS, fetchPostsRequest)
}


