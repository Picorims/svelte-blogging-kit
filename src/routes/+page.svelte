<script lang="ts">
	/*
    MIT License
    
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */

	import { Audio, BlogPage, type Config, FileAttachment, Image } from '$lib/index.js';
    import imageExample from "./pexels-pixabay-262508.jpg";
    import audioExample from "./basic_drum_pattern.wav";
    import txtFileExample from "./hello_world.txt";
	import { base } from '$app/paths';

    // consider placing this in a separate file to share it accross multiple posts
	let config: Config = {
		title: 'Svelte Blogging Kit',
        urlAllPosts: "./",
	};

    console.log(imageExample, audioExample, txtFileExample);
</script>

<BlogPage
    {config}
    postTitle="Presentation - static pages for blogging"
    date="26 October 2024"
    categories={["Demo","Readme"]}
    {postContent}
    authorDescription="Showcase yourself in this area."
    urlComments="./"
/>

{#snippet postContent()}
    <h2>Changelogs</h2>
    <p>
        <a href="https://github.com/Picorims/svelte-blogging-kit/blob/main/CHANGELOG.md">Check CHANGELOG.md on GitHub</a>
    </p>

    <h2>Posts are plain HTML with a bit of Svelte</h2>
    <p>
        While the BlogPage component renders the page layout and handle the config and metadata, the content is just an HTML snippet.
        This means that headers are written using <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. tags,
        and paragraphs are written using <code>&lt;p&gt;</code> tags, for example.
    </p>

    <h2>The theme is customizable</h2>
    <p>
        A default barebones theme is provided, but you can create your own theme. To do so, define a new class somewhere in your project,
        named after the theme you want to create, and pass it to the config. Then, style the elements of the page as you see fit.
        They are all prefixed with <code>__sbk__</code> to avoid conflicts with other styles. Take advantage of the devtools
        to see the classes applied to each element.
    </p>

    <h2>Getting started</h2>
    <p>
        View the source code of this page in <code>src/routes/+page.svelte</code> to see how this post was created!
        You can also check the <code>BlogPage</code> component in <code>src/lib/components/BlogPage.svelte</code> to see how the default theme is defined.
    </p>
    <p>
        <a href="https://github.com/picorims/svelte-blogging-kit">See the GitHub repository here.</a>
    </p>

    <h2>What you can put in your post</h2>
    
    <h3>Classic HTML</h3>
    <p>
        Create headers with <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. tags (<code>&lt;h1&gt;</code> is for the post title!),
        and paragraphs with <code>&lt;p&gt;</code> You can also use your own components if you want, although it is prefered to keep it simple.
        Theming of the post is based on the html tags or classes that you use.
    </p>

    <h3>Additional shipped components</h3>
    <p>
        Some additional quality of life components are provided to make blog writing easier.
    </p>

    <h4>Image</h4>
    <p>
        The <code>Image</code> component allows you to easily add images to your post. It takes a <code>src</code> prop for the image source,
        and an <code>alt</code> prop for the alt text. You can also pass a <code>caption</code> prop to add a caption below the image.
    </p>

    <Image
        src={base + imageExample}
        width={2968}
        height={1971}
        alt={'The word "blog" written with Scrabble letters on a wooden surface'}
        caption={"Picture from Pixabay downloaded on Pexels: https://www.pexels.com/fr-fr/photo/blog-lettres-sur-bois-brun-262508/"}
    />

    <h4>FileAttachement</h4>
    <p>
        The <code>FileAttachement</code> component allows you to attach files to your post that the reader can download.
    </p>

    <FileAttachment src={audioExample} />
    <FileAttachment src={imageExample} />
    <FileAttachment src={txtFileExample} />

    <h4>Audio</h4>
    <p>
        The <code>Audio</code> component allows you to embed audio files in your post. It uses the native audio player
        with controls enabled by default.
    </p>

    <Audio src={base + audioExample} />
{/snippet}
