<script module lang="ts">
	/*
    MIT License
    
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Softwa
    re, and to permit persons to whom the Software is
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

	export interface Config {
		title: string;
		/**
		 * class containing the theme definition
		 */
		theme?: string;
	}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	import PageAside from './PageAside.svelte';

	import PageHeader from './PageHeader.svelte';
	import PageMain from './PageMain.svelte';

	interface Props {
		config?: Config;
        postTitle: string;
        date: string;
        postContent: Snippet;
        noBodySpacing?: boolean;
	}

    const defaultConfig: Config = {
        title: 'Page Title',
        theme: 'sbk-theme-default'
    }

	let {config, postTitle, date, postContent, noBodySpacing = true}: Props = $props();

    let appliedConfig = $derived({
        ...defaultConfig,
        ...config
    });
        
</script>

<div class={appliedConfig.theme}>
	<PageHeader title={appliedConfig.title} />
    <div class="page-content __sbk__page-content">
        <PageMain {postTitle} {date} {postContent} />
        <PageAside />
    </div>
</div>

{#if noBodySpacing}
    <style>
        body {
            margin: 0;
            padding: 0;
        }
    </style>
{/if}

<style>
    .page-content {
        max-width: 1280px;
        width: 100vw;
        box-sizing: border-box;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }
    :global(.page-content > *) {
        flex: 1 1 auto;
        min-width: 0;
    }

    :global(.sbk-theme-default) {
        font-family: Garamond, Georgia, 'Times New Roman', Times, serif;
        color: #333;
    }

    :global(.sbk-theme-default .__sbk__blog-header) {
        background-color: #f0f0f0;
        padding: 1rem;
    }

    :global(.sbk-theme-default .__sbk__blog-header-title) {
        margin: 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 2rem;
        font-weight: bold;
    }

    :global(.sbk-theme-default .__sbk__page-content) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 768px) {
        :global(.sbk-theme-default .__sbk__page-content) {
            padding: 1rem;
        }
    }

    :global(.sbk-theme-default .__sbk__post-title) {
        font-size: 3rem;
        font-weight: bold;
    }

    :global(.sbk-theme-default .__sbk__post-date) {
        font-size: 1rem;
        font-style: italic;
    }

    :global(.sbk-theme-default .__sbk__post-header-separator) {
        margin: 1rem 0;
        border: 0;
        border-top: 1px solid #ccc;
    }

    :global(.sbk-theme-default .__sbk__post-content) {
        font-size: 1.2rem;
        line-height: 1.5;
    }
    :global(.sbk-theme-default .__sbk__post-content h2) {
        font-size: 2rem;
        font-weight: bold;
    }

    :global(.sbk-theme-default .__sbk__post-content h3) {
        font-size: 1.5rem;
        font-weight: bold;
    }

    :global(.sbk-theme-default .__sbk__post-content .__sbk__image) {
        margin: 1rem 0;
        font-size: 1rem;
    }
</style>