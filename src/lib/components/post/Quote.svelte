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

	interface Props {
		quote: string;
		author?: string;
	}

	let { quote, author }: Props = $props();

	/**
	 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Element/cite
	 */
</script>

<figure class="__sbk__component-quote">
	<blockquote>
		<p class="quote-text">{quote}</p>
	</blockquote>
	{#if author}
		<figcaption>{author}</figcaption>
	{/if}
</figure>

<style>
	.quote-text::before {
		content: '“';
	}
	.quote-text::after {
		content: '”';
	}
</style>
