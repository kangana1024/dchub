import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { json, urlencoded } from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import * as routes from './routes'

const app = express();

// Middleware
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// API V1
app.use('/api/v1', routes.v1)

// Health Check
app.get('/', (_, res) => {
	res.send('OK')
})

const PORT = process.env.PORT || 3000
app.listen(3000, () => {
	console.log(`server is running on PORT: ${PORT}`)
})