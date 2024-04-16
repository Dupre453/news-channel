export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tags {
    id: string;
    name: string;
    count: number;
}

export interface TagsState {
    items: Tags[];
    loadingState: LoadingState;
}