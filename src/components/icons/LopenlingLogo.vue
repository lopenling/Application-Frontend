<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 120 120"
    fill="#689F19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M56 32H3.49691e-07L3.47139e-05 120L88 120L88 96H36L24 102L24 56H32L32 88L88 88V69.7242L96 66L96 120H120L120 66L108 60L120 54L120 3.05176e-05L96 3.15667e-05V46L88 50V3.19163e-05L2.94685e-05 3.57629e-05L0 24L64 24V62L56 66V32Z"
    ></path>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '40',
  },
})
</script>
