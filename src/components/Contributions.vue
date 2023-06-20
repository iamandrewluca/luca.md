<template>
	<div class="overflow-x-auto rounded-2xl bg-white shadow-2xl">
		<div ref="contributionsGraphRef" class="min-w-max p-10" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { cloneElement, createElement } from "react";
import Calendar, { Props } from "react-activity-calendar";
import data from "../data.json";
import { createRoot } from "react-dom/client";

let contributionsGraphRef = ref();

let props: Props = {
	data: data as Props["data"],
	theme: {
		light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
	},
	labels: {
		totalCount: `{{count}} contributions in the last year`,
	},
	colorScheme: "light",
	renderBlock: (element, activity) => {
		return cloneElement(element, {
			children: createElement("title", {
				children: `${activity.count} contributions on ${activity.date}`,
			}),
		});
	},
};

let element = createElement(Calendar, props);

onMounted(() => {
	let root = createRoot(contributionsGraphRef.value);
	root.render(element);
});
</script>
