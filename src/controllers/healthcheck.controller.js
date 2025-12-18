import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/AsyncHandler.js'

/* async function healthcheck(req, res) {
    try {
        return res.status(200).json(
            new ApiResponse(200, { message: "Server is running" })
        )
    } catch (error) { }
} */

const healthcheck = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, { message: "Server is running" })
    )
})

export { healthcheck }