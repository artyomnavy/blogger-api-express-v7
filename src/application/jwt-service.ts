import jwt from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET || '123'
export const jwtService = {
    async createAccessJWT(userId: string) {
        const accessToken = jwt.sign({userId}, jwtSecret, {expiresIn: 10})
        return accessToken
    },
    async createRefreshJWT(userId: string) {
        const refreshToken = jwt.sign({userId}, jwtSecret, {expiresIn: 20})
        return refreshToken
    },
    async getUserIdByToken(token: string) {
        try {
            const decoded: any = jwt.verify(token, jwtSecret)
            return decoded.userId
        } catch (error) {
            return null
        }
    }
}