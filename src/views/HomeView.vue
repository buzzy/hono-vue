<script setup lang="ts">
import type { AppType } from '../api/server'
import { hc } from 'hono/client'

const handleClick = async () => {
  console.log('Button clicked')

  const client = hc<AppType>('/api')
}
</script>

<template>
  <main>
    <button @click="handleClick">Click Me</button>
  </main>
</template>
