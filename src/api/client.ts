import type { AppType } from './server'
import { hc } from 'hono/client'

const client = hc<AppType>('/api')

// This path type works
const res = await client.hello.$get({
  query: {
    name: 'World'
  }
})

const data = await res.json()

// This response type works
console.log(data.message)
