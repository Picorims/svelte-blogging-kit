declare const Image: import("svelte").Component<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
}, {}, "">;
export default Image;
