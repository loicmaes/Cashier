<script setup lang="ts">
import { cn } from "~/lib/utils";

interface LayoutProps {
  name: string;
  class?: HTMLAttributes["class"];
}
const props = defineProps<LayoutProps>();
</script>

<template>
  <div
    :data-layout="name"
    :class="cn('', props.class)"
  >
    <slot />
  </div>
</template>
