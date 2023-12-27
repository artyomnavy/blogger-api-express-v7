import {blacklistRefreshTokenCollection} from "../db/db";
import {WithId} from "mongodb";
import {RefreshTokenType} from "../types/auth/output";

export const authQueryRepository = {
    async checkRefreshToken(refreshToken: RefreshTokenType): Promise<boolean> {
        const isBlacklist: WithId<RefreshTokenType> | null = await blacklistRefreshTokenCollection
            .findOne(refreshToken)

        if (isBlacklist) {
            return true
        } else {
            return false
        }
    }
}