
 import {call, put,takeLatest} from 'redux-saga/effects'
 import {TagsActionType, setTags, setTagsLoadingState} from "./actionCreators";
 import {LoadingState} from "./contracts/state";
 import {TagsApi} from "../../services/api/tagsApi";

export function* fetchTagsRequest() {
    try {
        // @ts-ignore
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

//главная сага(к постам) следит за каждым экшеном
export function* tagsSaga() {
    yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest)
}


