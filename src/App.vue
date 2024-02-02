<template>
	<main class="flex p-4 min-h-screen items-center justify-center bg-trt-black text-trt-black-100">
		<div class="w-full max-w-sm sm:max-w-3xl flex flex-col gap-8">
			<img src="/logo-traction-branco.svg" alt="" class="w-64 mx-auto" />

			<div class="bg-white p-6 flex flex-col items-center gap-4 rounded-md">
				<ColorsDisplay />
				<LogosDisplay />
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ColorsDisplay from "./components/ColorsDisplay.vue";
import LogosDisplay from "./components/LogosDisplay.vue";
</script>
