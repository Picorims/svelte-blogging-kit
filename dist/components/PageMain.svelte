<script lang="ts">
	import { onDestroy, onMount, type Snippet } from 'svelte';
	import { on } from 'svelte/events';

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

	interface Props {
		postTitle: string;
		date: string;
		postContent: Snippet;
		categories?: string[];
		urlAllPosts?: string;
		urlComments?: string;
		devEnv?: boolean;
	}

	let {
		postTitle,
		date,
		postContent,
		categories = [],
		urlAllPosts,
		urlComments,
		devEnv = false
	}: Props = $props();

	let wordCount = $state(0);

	function getWordCount() {
		if (typeof document === "undefined") return 0;
		const content = document.getElementById('post-content');
		if (!content) return 0;
		const text = content.innerText.trim();
		const words = text.split(/\s+/);
		return words.length;
	}

	function updateWordCount() {
		wordCount = getWordCount();
	}
</script>

<main class="__sbk__page-main">
	{#if urlAllPosts}
		<a class="__sbk__all-posts-link" href={urlAllPosts}>Back to all posts</a>
	{/if}

	<h1 class="__sbk__post-title">{postTitle}</h1>

	<div class="metadata __sbk__post-metadata">
		<span class="__sbk__post-date">{date}</span>
		{#if categories.length > 0}
			<span class="__sbk__post-categories">
				<span>Categories:</span>
				{#each categories as category, i}
					<span>
						{category + (i < categories.length - 1 ? ', ' : '')}
					</span>
				{/each}
			</span>
		{/if}
	</div>

	<p class="__sbk__dev-env-warning">Dev env info:</p>
	{#if devEnv}
		<div class="metadata __sbk__post-metadata">
			<span>Word count (approximated): {getWordCount()}</span>
		</div>
	{/if}

	<hr class="__sbk__post-header-separator" />

	<article id="post-content" class="__sbk__post-content" onload={updateWordCount}>
		{@render postContent()}
	</article>

	{#if urlComments}
		<a class="__sbk__comments-link" href={urlComments}>Comments</a>
	{/if}
</main>

<style>
	main {
		max-width: 70%;
	}

	@media screen and (max-width: 640px) {
		main {
			width: 100%;
			max-width: 100%;
		}
	}

	.metadata {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	article {
		margin: 1rem 0;
	}
</style>
