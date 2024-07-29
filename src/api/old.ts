import { Hono } from 'hono'
import { cors } from 'hono/cors'
// import GetFeeds from './routes/GetFeeds'
import CreateBook from './routes/CreateBook'

const app = new Hono()

app.use('*', cors())

// const routes = app.route('/', GetFeeds).route('/', CreateBook)
const routes = app.route('/', CreateBook)

export type API = typeof routes

export default {
  port: 3030,
  fetch: app.fetch
}
