import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono()

const input = z.object({
  firstname: z.string(),
  lastname: z.string()
})

export const route = app.post('/GetFeeds', zValidator('json', input), (c) => {
  return c.json({ message: `GetFeeds` })
})

export type GetFeeds = typeof input
export default route
