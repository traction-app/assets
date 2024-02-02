<template>
	<div class="grid sm:grid-cols-2 gap-4">
		<a
			v-for="each in assets"
			:href="each"
			download
			class="group relative px-6 py-4 flex justify-center rounded-md"
			:class="isDarkBackground(each) ? 'bg-trt-black-100' : 'bg-trt-white-100'"
		>
			<img :src="each" class="h-8" />
			<div class="p-1 rounded-md bg-white border absolute right-2 bottom-2 hidden group-hover:block">
				<IconDownload class="size-4" />
			</div>
		</a>
	</div>
</template>

<script setup lang="ts">
import IconDownload from "./icons/IconDownload.vue";

const assets = [
	"/logo-traction-branco.svg",
	"/icone-traction-branco.svg",
	"/logo-traction-preto.svg",
	"/icone-traction-preto.svg",
	"/logo-traction-vermelho.svg",
	"/icone-traction-vermelho.svg",
];

function isDarkBackground(assetName: string) {
	return assetName.includes("branco");
}
</script>
