import type { LeetCodeStats } from "../types/leetcode"

const API_BASE_URL = "https://leetcode-stats.tashif.codes"

export const LEETCODE_USERNAME = "gagan_tirupathi"

interface ApiResponse<T> {
  status: string
  platform: string
  username: string
  cached: boolean
  data: T
}

interface StatsResponse {
  totalSolved: number
  acceptanceRate: number
  byDifficulty: {
    easy: number
    medium: number
    hard: number
  }
}

interface ContestResponse {
  globalRanking?: number
  rating?: number
  maxRating?: number
  rank?: string
}

const fetchJson = async <T>(
  url: string,
): Promise<T> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `LeetCode API request failed: ${response.status}`,
    )
  }

  return response.json()
}

export const fetchLeetCodeStats =
  async (): Promise<LeetCodeStats> => {
    const [
      statsResponse,
      contestResponse,
    ] = await Promise.all([
      fetchJson<ApiResponse<StatsResponse>>(
        `${API_BASE_URL}/${LEETCODE_USERNAME}/stats`,
      ),

      fetchJson<ApiResponse<ContestResponse>>(
        `${API_BASE_URL}/${LEETCODE_USERNAME}/contests`,
      ),
    ])

    return {
      totalSolved:
        statsResponse.data.totalSolved,

      acceptanceRate:
        statsResponse.data.acceptanceRate,

      easySolved:
        statsResponse.data.byDifficulty.easy,

      mediumSolved:
        statsResponse.data.byDifficulty.medium,

      hardSolved:
        statsResponse.data.byDifficulty.hard,

      ranking:
        contestResponse.data.globalRanking ??
        null,
    }
  }