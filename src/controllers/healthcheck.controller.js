import { ApiResponse } from '../utils/ApiResponse.js'

async function healthcheck(req, res) {
    try {
        return res.status(200).json(
            new ApiResponse(200, { message: "Server is running" })
        )
    } catch (error) { }
}

export { healthcheck }