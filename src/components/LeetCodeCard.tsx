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
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#1C1823] transition-all duration-500 hover:-translate-y-1 hover:border-[#A08AC2]/30 hover:bg-[#211C29] hover:shadow-[0_20px_50px_rgba(160,138,194,0.07)]">
      
      {/* LeetCode Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={leetcodeBanner}
          alt="LeetCode"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1823] via-[#1C1823]/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="relative px-7 pb-7 sm:px-8 sm:pb-8">

        {/* Icon + Status */}
        <div className="-mt-7 relative flex items-center justify-between">
          
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#1C1823] bg-[#A08AC2]/10 text-[#A08AC2]">
            <Code2 size={22} />
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <RefreshCw
                size={14}
                className="animate-spin text-[#A08AC2]"
              />
            )}

            <span className="rounded-full border border-[#A08AC2]/15 bg-[#A08AC2]/[0.04] px-3 py-1 text-xs text-[#C4B5D9]">
              Coding
            </span>
          </div>
        </div>

        {/* Heading */}
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-[#A08AC2]/70">
          LeetCode
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          Gagan Tirupathi
        </h3>

        <p className="mt-2 text-sm text-[#77717D]">
          @{LEETCODE_USERNAME}
        </p>

        {/* Error */}
        {error && !stats ? (
          <div className="mt-7 rounded-2xl border border-white/[0.07] bg-[#100E14]/50 p-5">
            <p className="text-sm text-white/60">
              Unable to load LeetCode statistics right now.
            </p>

            <button
              onClick={loadStats}
              className="mt-3 text-sm text-[#A08AC2] transition-colors hover:text-[#C4B5D9]"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            {/* Total Solved */}
            <div className="mt-7">
              <p className="text-4xl font-bold text-white">
                {stats?.totalSolved ?? "—"}
              </p>

              <p className="mt-1 text-sm text-[#77717D]">
                Problems Solved
              </p>
            </div>

            {/* Difficulty Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              
              {/* Easy */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#100E14]/50 p-4">
                <p className="text-lg font-semibold text-white">
                  {stats?.easySolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#77717D]">
                  Easy
                </p>
              </div>

              {/* Medium */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#100E14]/50 p-4">
                <p className="text-lg font-semibold text-white">
                  {stats?.mediumSolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#77717D]">
                  Medium
                </p>
              </div>

              {/* Hard */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#100E14]/50 p-4">
                <p className="text-lg font-semibold text-white">
                  {stats?.hardSolved ?? "—"}
                </p>

                <p className="mt-1 text-xs text-[#77717D]">
                  Hard
                </p>
              </div>
            </div>

            {/* Acceptance Rate */}
            <div className="mt-4">
              <div className="rounded-2xl border border-white/[0.07] bg-[#100E14]/50 p-4">
                <p className="text-lg font-semibold text-white">
                  {stats
                    ? `${stats.acceptanceRate.toFixed(1)}%`
                    : "—"}
                </p>

                <p className="mt-1 text-xs text-[#77717D]">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A08AC2] transition-colors hover:text-[#C4B5D9]"
          >
            View LeetCode Profile
            <ArrowUpRight size={16} />
          </a>

          {lastUpdated && (
            <span className="text-xs text-[#77717D]">
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