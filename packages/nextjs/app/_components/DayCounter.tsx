"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Star, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card"

interface DayCounterProps {
    startDate?: Date
    title?: string
    subtitle?: string
    variant?: "investment" | "streak" | "countdown" | "milestone"
}

export default function DayCounter({
    startDate = new Date("2024-01-01"),
    title = "Investment Journey",
    subtitle = "Days building wealth",
    variant = "investment",
}: DayCounterProps) {
    const [days, setDays] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const calculateDays = () => {
            const now = new Date()
            const diffTime = Math.abs(now.getTime() - startDate.getTime())
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
            setDays(diffDays)
        }

        calculateDays()
        const interval = setInterval(calculateDays, 1000 * 60 * 60)

        return () => clearInterval(interval)
    }, [startDate])

    if (!mounted) {
        return (
            <Card className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white h-full">
                <CardContent className="p-6">
                    <div className="animate-pulse">
                        <div className="h-8 bg-white/20 rounded mb-4"></div>
                        <div className="h-16 bg-white/20 rounded mb-2"></div>
                        <div className="h-4 bg-white/20 rounded"></div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    const getVariantConfig = () => {
        switch (variant) {
            case "streak":
                return {
                    icon: Star,
                    gradient: "from-yellow-500 to-orange-500",
                    iconBg: "bg-yellow-400/20",
                    iconColor: "text-yellow-200",
                    pulse: "animate-pulse",
                }
            case "countdown":
                return {
                    icon: Target,
                    gradient: "from-red-500 to-pink-500",
                    iconBg: "bg-red-400/20",
                    iconColor: "text-red-200",
                    pulse: "",
                }
            case "milestone":
                return {
                    icon: Calendar,
                    gradient: "from-green-500 to-emerald-500",
                    iconBg: "bg-green-400/20",
                    iconColor: "text-green-200",
                    pulse: "",
                }
            default:
                return {
                    icon: Clock,
                    gradient: "from-indigo-500 to-purple-600",
                    iconBg: "bg-indigo-400/20",
                    iconColor: "text-indigo-200",
                    pulse: "",
                }
        }
    }

    const config = getVariantConfig()
    const IconComponent = config.icon

    const formatDays = (totalDays: number) => {
        if (totalDays < 30) {
            return { main: totalDays.toString(), unit: "Days" }
        } else if (totalDays < 365) {
            const months = Math.floor(totalDays / 30)
            const remainingDays = totalDays % 30
            return {
                main: months.toString(),
                unit: "Months",
                sub: remainingDays > 0 ? `${remainingDays}d` : "",
            }
        } else {
            const years = Math.floor(totalDays / 365)
            const remainingDays = totalDays % 365
            const months = Math.floor(remainingDays / 30)
            return {
                main: years.toString(),
                unit: "Years",
                sub: months > 0 ? `${months}m` : "",
            }
        }
    }

    const formattedTime = formatDays(days)

    return (
        <Card className={`w-80 bg-gradient-to-br ${config.gradient} text-white relative overflow-hidden h-full`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
                <div className="absolute inset-0 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>

            <CardHeader className="text-center space-y-3 relative z-10">
                <div
                    className={`mx-auto w-16 h-16 ${config.iconBg} rounded-full flex items-center justify-center backdrop-blur-sm ${config.pulse}`}
                >
                    <IconComponent className={`w-8 h-8 ${config.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-center space-y-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-5xl font-bold tracking-tight">{formattedTime.main}</span>
                        {formattedTime.sub && <span className="text-2xl font-medium opacity-80">{formattedTime.sub}</span>}
                    </div>
                    <p className="text-lg font-medium opacity-90">{formattedTime.unit}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm opacity-80">{subtitle}</p>
                    <div className="flex items-center justify-center gap-2 text-xs opacity-70">
                        <Calendar className="w-3 h-3" />
                        <span>Since {startDate.toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Progress indicator for milestones */}
                {variant === "investment" && (
                    <div className="mt-4">
                        <div className="flex justify-between text-xs opacity-70 mb-1">
                            <span>Progress to 1 year</span>
                            <span>{Math.min(100, Math.round((days / 365) * 100))}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                                className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${Math.min(100, (days / 365) * 100)}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
