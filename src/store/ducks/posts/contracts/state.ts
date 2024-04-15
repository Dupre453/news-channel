export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Post {
    id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export interface PostsState {
    items: Post[];
    loadingState: LoadingState;
}