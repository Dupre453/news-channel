import axios from "axios";
import {PostsState} from "../../store/ducks/posts/contracts/state";
import {fetchPosts} from "../../store/ducks/posts/actionCreators";


export const PostsApi = {
    fetchPosts(): Promise<PostsState['items']> {
        return axios.get('https://trycode.pw/c/81KAS.json').then(({data}) => data)
    }

}