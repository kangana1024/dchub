import express from 'express'
import { dcuser, hello } from '../../api/v1'

const router = express.Router()

router.get('/hello/:name', hello.hello)

// auth
router.post('/auth/registerdc', dcuser.createUser)

export default router