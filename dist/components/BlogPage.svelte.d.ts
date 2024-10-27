export interface Config {
    title: string;
    titleUrl?: string;
    /**
     * CSS class containing the theme definition
     */
    theme?: string;
    urlAllPosts?: string;
    authorDescription?: string;
    noBodySpacing?: boolean;
}
import type { Snippet } from 'svelte';
declare const BlogPage: import("svelte").Component<{
    config?: Config;
    postTitle: string;
    date: string;
    postContent: Snippet;
    categories?: string[];
    urlComments?: string;
}, {}, "">;
export default BlogPage;
