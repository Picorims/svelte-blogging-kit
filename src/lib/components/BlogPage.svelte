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
		titleUrl?: string;
		/**
		 * CSS class containing the theme definition
		 */
		theme?: string;
		urlAllPosts?: string;
		authorDescription?: string;
		noBodySpacing?: boolean;
		devEnv?: boolean;
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
		categories?: string[];
		urlComments?: string;
	}

	const defaultConfig: Config = {
		title: 'Page Title',
		theme: 'sbk-theme-default',
		noBodySpacing: true,
		devEnv: false,
	};

	let {
		config,
		postTitle,
		date,
		postContent,
		categories = [],
		urlComments
	}: Props = $props();

	let appliedConfig = $derived({
		...defaultConfig,
		...config
	});
</script>

<div class={appliedConfig.theme}>
	<PageHeader title={appliedConfig.title} titleUrl={appliedConfig.titleUrl} />
	<div class="page-content __sbk__page-content">
		<PageMain {postTitle} {date} {postContent} {categories} urlAllPosts={appliedConfig.urlAllPosts} {urlComments} devEnv={appliedConfig.devEnv} />
		<PageAside authorDescription={appliedConfig.authorDescription} />
	</div>
</div>

{#if appliedConfig.noBodySpacing}
	<style>
		body {
			margin: 0;
			padding: 0;
		}
	</style>
{/if}

<style>
	/* Find a less brittle responsive approach with main and aside? (flex-grid?) */
	.page-content {
		max-width: 1280px;
		width: 100vw;
		box-sizing: border-box;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	@media screen and (min-width: 640px) {
		.page-content {
			flex-wrap: nowrap;
		}
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
		color: #333;
		text-decoration: none;
	}

	:global(.sbk-theme-default .__sbk__page-content) {
		padding: 2rem 4rem;
		gap: 2rem;
	}
	@media screen and (max-width: 768px) {
		:global(.sbk-theme-default .__sbk__page-content) {
			padding: 1rem;
			gap: 1rem;
		}
	}

	:global(.sbk-theme-default .__sbk__all-posts-link, .sbk-theme-default .__sbk__comments-link) {
		font-size: 1.2rem;
		text-decoration: none;
		color: #333;
		font-weight: bold;
		border: 1px solid #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: 0.1s, background-color;
	}
	:global(.sbk-theme-default .__sbk__all-posts-link:hover, .sbk-theme-default .__sbk__comments-link:hover) {
		background-color: #f0f0f0;
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

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-image) {
		margin: 1rem 0;
		font-size: 1rem;
		max-width: 640px;
		margin: auto;
	}

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-video) {
		width: 100%;
		max-width: 640px;
		max-height: 460px;
		margin: 1rem auto;
	}

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-audio) {
		width: 100%;
		max-width: 640px;
	}

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-file-attachment) {
		font-size: 1.2rem;
		border: 1px solid #ccc;
		padding: 0.5rem;
		margin: 1rem 0;
		display: inline-block;
		border-radius: 4px;
		text-decoration: none;
		transition: 0.1s background-color;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-file-attachment .icon) {
		margin-right: 0.5rem;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-file-attachment .name) {
		text-decoration: underline;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-file-attachment:hover) {
		background-color: #f0f0f0;
	}

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-quote) {
		font-size: 1.5rem;
		font-style: italic;
		margin: 1rem 3rem;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-quote blockquote) {
		margin: 0;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-quote blockquote > p) {
		margin: 0.5rem 0;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-quote figcaption) {
		font-size: 1.2rem;
		text-align: right;
	}

	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-framed-text-block) {
		padding: 1rem;
		margin: 1rem 0;
		border-left: 1px solid #ccc;
		background-color: #f0f0f0;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-framed-text-block p) {
		margin: 0;
	}
	:global(.sbk-theme-default .__sbk__post-content .__sbk__component-framed-text-block[data-variant="tip"]) {
		border-left-color: #00aeff;
		background-color: #e0eaf0;
		color: #011a25;
	}

	:global(.sbk-theme-default .__sbk__page-aside) {
		background-color: #f0f0f0;
		padding: 1rem;
	}
</style>
