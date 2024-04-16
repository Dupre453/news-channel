import axios from "axios";
import {TagsState} from "../../store/actualTags/contracts/state";



export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get('http://localhost:9001/tags').then(({data}) => data)
    }

}