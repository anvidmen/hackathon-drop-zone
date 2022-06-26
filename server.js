import jsonServer from 'json-server'
import auth from 'json-server-auth'
const server = jsonServer.create()
const router = jsonServer.router('./src/api/db.json')
const middlewares = jsonServer.defaults({
    static: './build'
})

const port = process.env.PORT || 5000
server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})