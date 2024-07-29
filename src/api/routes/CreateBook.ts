import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono()

// const input = zValidator(
//   'json',
//   z.object({
//     korv: z.string(),
//     strumpa: z.string()
//   })
// )

// export type CreateBookInput = typeof input

const route = app.post(
  '/CreateBook',
  zValidator(
    'query',
    z.object({
      name: z.string()
    })
  ),
  (c) => {
    return c.json({ message: `CreateBook` })
  }
)

export default route
