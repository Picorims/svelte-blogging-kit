import { type Snippet } from 'svelte';
declare const PageMain: import("svelte").Component<{
    postTitle: string;
    date: string;
    postContent: Snippet;
    categories?: string[];
    urlAllPosts?: string;
    urlComments?: string;
    devEnv?: boolean;
}, {}, "">;
export default PageMain;
