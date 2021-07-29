import express from 'express'
import { hello } from '../../api/v1'

const router = express.Router()

router.get('/hello/:name', hello.hello)

export default router