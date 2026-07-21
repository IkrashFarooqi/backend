import { asyncHandler } from "../utils/asyncHandler.js"


const regestierUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Ok!! Working correctly"
    })
})

export { regestierUser }