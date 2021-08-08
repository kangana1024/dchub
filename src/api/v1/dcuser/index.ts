import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import express from 'express'

interface CreateUserRequest {
	mail: string
	password: string
	firstName: string
	lastName: string
	lineID: string
	mobile: string
}
export const createUser = async (req: express.Request, res: express.Response) => {
	const prisma = new PrismaClient()

	const reqBody: CreateUserRequest = req.body


	const salt = bcryptjs.genSaltSync(12)
	const hashedPassword = bcryptjs.hashSync(reqBody.password, salt)

	try {
		const userDC = await prisma.userDC.create({
			data: {
				firstName: reqBody.firstName,
				lastName: reqBody.lastName,
				lineID: reqBody.lineID,
				mail: reqBody.mail,
				mobile: reqBody.mobile,
				password: hashedPassword,
				status: 'APPROVE'
			}
		})
		return res.status(200).json({
			user: userDC
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: "Server Error."
		})
	} finally {
		prisma.$disconnect()
	}
}