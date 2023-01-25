<template>
	<main class="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#151518] p-4 text-center">
		<img src="/traction-logo-white.svg" alt="" class="h-10" />
		<section class="relative flex w-full max-w-3xl flex-col gap-14 rounded bg-white p-8 shadow-xl">
			<div class="flex flex-wrap items-center justify-center gap-4">
				<button
					v-for="color in colors"
					@click="copyText(color.code)"
					class="group rounded p-2.5"
					:style="`background-color: ${color.code}`"
				>
					<IconCopy
						class="w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
				</button>
			</div>
			<div class="grid gap-2 sm:grid-cols-2">
				<a
					v-for="svg in svgs"
					:href="svg.url"
					download
					class="group relative rounded bg-black/10 p-4 even:bg-[#151518]"
				>
					<img :src="svg.url" :alt="svg.name" class="mx-auto h-10" />
					<IconDownload
						class="absolute right-2 bottom-2 hidden w-4 text-white group-odd:text-[#151818] group-hover:block"
					/>
				</a>
			</div>
			<Transition
				enter-from-class="opacity-0"
				enter-active-class="duration-500"
				leave-active-class="duration-500"
				leave-to-class="opacity-0"
			>
				<div
					v-show="toggleToast"
					class="pointer-events-none absolute right-6 top-6 flex select-none items-center justify-center gap-2 text-sm font-medium text-green-500"
				>
					<IconCopy class="w-4" />
					<span>HEX Copiado!</span>
				</div>
			</Transition>
		</section>
	</main>
</template>

<script setup>
import IconCopy from './components/IconCopy.vue'
import IconDownload from './components/IconDownload.vue'
import { ref } from 'vue'

const toggleToast = ref(false)
const toastTimer = ref(null)

const colors = ref([
	{ name: 'red', code: '#ff4e4f' },
	{ name: 'purple', code: '#494858' },
	{ name: 'gray', code: '#4d4d4d' },
	{ name: 'black', code: '#151518' },
])

const svgs = ref([
	{ name: 'logo-black', url: '/traction-logo-black.svg' },
	{ name: 'logo-white', url: '/traction-logo-white.svg' },
	{ name: 'icon-red', url: '/traction-icon-red.svg' },
	{ name: 'icon-white', url: '/traction-icon-white.svg' },
])

function copyText(text) {
	navigator.clipboard.writeText(text)

	toggleToast.value = true

	if (toastTimer.value) clearTimeout(toastTimer.value)
	toastTimer.value = setTimeout(() => (toggleToast.value = false), 1800)
}
</script>
