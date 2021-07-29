import express from 'express'
interface IHelloResponse {
	message: string
}
export const hello = (req: express.Request, res: express.Response) => {
	const resp: IHelloResponse = {
		message: `Hello : ${(req.params.name || "Test")}.`,
	}
	return res.json({
		...resp
	})
}