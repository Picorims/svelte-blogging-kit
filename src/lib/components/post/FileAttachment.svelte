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
		src: string;
	}

	let { src }: Props = $props();
	let name = $derived(src.split('/').pop() ?? '');
	let extension = $derived(name.split('.').pop() ?? '');
</script>

<a class="__sbk__component-file-attachment" href={src}>
	<span class="icon">
		{#if ['wav', 'mp3', 'ogg', 'mid'].includes(extension)}
			&#127925; <!--music note-->
		{:else if ['png', 'jpg', 'jpeg', 'webp', 'ico'].includes(extension)}
			&#x1F5BC;&#xFE0F; <!--image-->
		{:else}
			&#128196; <!--file, page facing up-->
		{/if}
	</span>
	<span class="name">
		{name}
	</span>
</a>
