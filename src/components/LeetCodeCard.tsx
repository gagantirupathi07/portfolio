import { useCallback, useEffect, useState } from "react"
import {
  ArrowUpRight,
  Code2,
  RefreshCw,
} from "lucide-react"

import leetcodeBanner from "../assets/leetcode-banner.jpg"

import {
  fetchLeetCodeStats,
  LEETCODE_USERNAME,
} from "../services/leetcode"

import type { LeetCodeStats } from "../types/leetcode"

const LEETCODE_PROFILE_URL =
  `https://leetcode.com/u/${LEETCODE_USERNAME}/`

const REFRESH_INTERVAL = 2 * 60 * 1000

const LeetCodeCard = () => {
  const [stats, setStats] =
    useState<LeetCodeStats | null>(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState(false)

  const [lastUpdated, setLastUpdated] =
    useState<Date | null>(null)

  const loadStats = useCallback(async () => {
    try {
      setError(false)

      const data = await fetchLeetCodeStats()

      setStats(data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error(
        "Failed to load LeetCode statistics:",
        err,
      )

      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadStats()

    const interval = window.setInterval(
      loadStats,
      REFRESH_INTERVAL,
    )

    return () => {
      window.clearInterval(interval)
    }
  }, [loadStats])

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#A5B5A7]/70 bg-[#E8EDE7] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-xl">

      {/* LeetCode Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={leetcodeBanner}
          alt="LeetCode"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Sage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8EDE7] via-[#E8EDE7]/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="relative px-7 pb-7 sm:px-8 sm:pb-8">

        {/* Icon + Status */}
        <div className="-mt-7 relative flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#E8EDE7] bg-[#527A5B] text-white shadow-md">
            <Code2 size={22} />
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <RefreshCw
                size={14}
                className="animate-spin text-[#527A5B]"
              />
            )}

            <span className="rounded-full border border-[#A5B5A7] bg-[#84A98C]/15 px-3 py-1 text-xs font-medium text-[#527A5B]">
              Coding
            </span>
          </div>
        </div>

        {/* Heading */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#527A5B]">
          LeetCode
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-[#26352B]">
          Gagan Tirupathi
        </h3>

        <p className="mt-2 text-sm text-[#6B786D]">
          @{LEETCODE_USERNAME}
        </p>

        {/* Error */}
        {error && !stats ? (
          <div className="mt-7 rounded-2xl border border-[#A5B5A7]/70 bg-[#F5F7F3] p-5">
            <p className="text-sm text-[#4D5B50]">
              Unable to load LeetCode statistics right now.
            </p>

            <button
              onClick={loadStats}
              className="mt-3 text-sm font-medium text-[#527A5B] transition-colors hover:text-[#6B9474]"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            {/* Total Solved */}
            <div className="mt-7">
              <p className="text-4xl font-bold text-[#26352B]">
                {stats?.totalSolved ?? "—"}
              </p>

              <p className="mt-1 text-sm text-[#6B786D]">
                Problems Solved
              </p>
            </div>

            {/* Difficulty Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">

              {/* Easy */}
              <div className="rounded-2xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-colors duration-300 hover:border-[#84A98C]">
                <p className="text-lg font-semibold text-[#527A5B]">
                  {stats?.easySolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#4D5B50]">
                  Easy
                </p>
              </div>

              {/* Medium */}
              <div className="rounded-2xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-colors duration-300 hover:border-[#84A98C]">
                <p className="text-lg font-semibold text-[#527A5B]">
                  {stats?.mediumSolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#4D5B50]">
                  Medium
                </p>
              </div>

              {/* Hard */}
              <div className="rounded-2xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-colors duration-300 hover:border-[#84A98C]">
                <p className="text-lg font-semibold text-[#527A5B]">
                  {stats?.hardSolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#4D5B50]">
                  Hard
                </p>
              </div>
            </div>

            {/* Acceptance Rate */}
            <div className="mt-4">
              <div className="rounded-2xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-colors duration-300 hover:border-[#84A98C]">
                <p className="text-lg font-semibold text-[#527A5B]">
                  {stats
                    ? `${stats.acceptanceRate.toFixed(1)}%`
                    : "—"}
                </p>

                <p className="mt-1 text-xs text-[#4D5B50]">
                  Acceptance Rate
                </p>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={LEETCODE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#527A5B] transition-colors hover:text-[#6B9474]"
          >
            View LeetCode Profile
            <ArrowUpRight size={16} />
          </a>

          {lastUpdated && (
            <span className="text-xs text-[#6B786D]">
              Updated{" "}
              {lastUpdated.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default LeetCodeCard
