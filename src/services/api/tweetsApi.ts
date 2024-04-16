import axios from "axios";
import {PostsState} from "../../store/ducks/posts/contracts/state";


export const PostsApi = {
    fetchPosts(): Promise<PostsState['items']> {
        return axios.get('http://localhost:9001/posts').then(({data}) => data)
    }

}