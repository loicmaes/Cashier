<script lang="ts" setup>
import { IconoirProvider } from "@iconoir/vue";

const iconProps = {
  "width": "1.1rem",
  "height": "1.1rem",
  "stroke-width": "2",
};
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <IconoirProvider :icon-props="iconProps">
      <NuxtWelcome />
    </IconoirProvider>
  </div>
</template>
