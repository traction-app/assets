<template>
	<div class="flex flex-col gap-4">
		<div v-for="each in colors" class="flex gap-2">
			<button
				v-for="color in each"
				@click.prevent="copyText(color)"
				class="group rounded-md p-2 sm:p-4"
				:style="`background-color: ${color}`"
			>
				<IconCopy class="size-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
			</button>
		</div>

		<div
			class="flex select-none items-center gap-2 text-sm font-medium text-green-500 transition-opacity duration-200"
			:class="toggleToast ? 'opacity-100' : 'opacity-0'"
		>
			<IconCopy class="w-4" />
			<span>HEX Copiado!</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconCopy from "./icons/IconCopy.vue";

const colors = ref({
	black: ["#0E0E0E", "#2E2E2E", "#3E3E3E", "#4E4E4E", "#5E5E5E"],
	white: ["#F2F2F2", "#E2E2E2", "#D2D2D2", "#C2C2C2", "#B2B2B2"],
	red: ["#FF4F4F", "#CC4040", "#B23838", "#993030", "#4C1818"],
});

const toggleToast = ref(false);
const toastTimer = ref<number>();

function copyText(content: string) {
	navigator.clipboard.writeText(content);

	toggleToast.value = true;

	if (toastTimer.value) clearTimeout(toastTimer.value);
	toastTimer.value = setTimeout(() => (toggleToast.value = false), 1400);
}
</script>
