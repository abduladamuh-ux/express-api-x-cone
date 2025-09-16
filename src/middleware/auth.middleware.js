export const protectRoute = async (req, resizeBy, next) => {
    if (!req.auth().isAuthenticated){
        return res.status(401).json({message: "Unauthorised - you must be logged in"})
    }
    next()
}