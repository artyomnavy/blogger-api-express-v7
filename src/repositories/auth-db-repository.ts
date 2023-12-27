import {RefreshTokenType} from "../types/auth/output";
import {blacklistRefreshTokenCollection} from "../db/db";

export const authRepository = {
    async addRefreshTokenToBlacklist(refreshToken: RefreshTokenType): Promise<boolean> {
        const isBlacklist = await blacklistRefreshTokenCollection
            .insertOne(refreshToken)

        return isBlacklist.acknowledged
    }
}