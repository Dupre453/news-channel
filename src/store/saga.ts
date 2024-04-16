import {all} from 'redux-saga/effects'
import {postsSaga} from "./ducks/posts/sagas";
import {tagsSaga} from "./actualTags/sagas";

export default function* rootSaga() {
    yield all([postsSaga(), tagsSaga()])   //следить за всеми cагами
}