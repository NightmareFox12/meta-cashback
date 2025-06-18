"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card"
import {
    Trophy,
    Lightbulb,
    Rocket,
    Target,
    DollarSign,
    Clock,
    RefreshCw,
    Building2,
    CreditCard,
    ArrowRight,
    Star,
    Crown,
    Flame,
    Shield,
    TrendingUp,
    Wallet,
    Repeat,
    PiggyBank,
    Sparkles,
    Zap,
} from "lucide-react"

export default function Component() {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-8 relative overflow-hidden">
            {/* Sparkle Decorations */}
            <div className="fixed inset-0 pointer-events-none z-10">
                {[...Array(20)].map((_, i) => (
                    <Sparkles
                        key={i}
                        className="absolute text-yellow-400/60 animate-twinkle"
                        size={12}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Floating Bubbles inside card */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-white/10 to-cyan-200/20 animate-float"
                            style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                width: `${Math.random() * 40 + 15}px`,
                                height: `${Math.random() * 40 + 15}px`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${Math.random() * 8 + 6}s`,
                            }}
                        />
                    ))}
                </div>

                <CardHeader className="text-center relative z-10">
                    <div className="mx-auto w-20 h-20 bg-secondary/40 rounded-full flex items-center justify-center mb-4 shadow-xl drop-shadow-lg relative group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-10 h-10 text-yellow-400 animate-pulse" />
                        <div className="absolute -top-2 -right-2 animate-bounce">
                            <Zap className="w-6 h-6 text-yellow-300" />
                        </div>
                    </div>

                    <CardTitle className="text-4xl font-bold animate-fade-in-up">
                        MetaCashback: The Future of Cashback Rewards
                    </CardTitle>
                    <p className="text-lg max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-in-up animation-delay-200">
                        A revolutionary system that allows users to earn cashback in USDC for their purchases with the MetaMask
                        Card, with the possibility of increasing the cashback percentage by participating in staking or locking
                        funds in DeFi protocols.
                    </p>
                </CardHeader>

                <div className="flex justify-center items-center gap-2 bg-secondary/40 px-3 py-2 rounded-full backdrop-blur-sm text-sm w-fit mx-auto shadow-md mb-6 hover:bg-secondary/50 transition-colors duration-300">
                    <Lightbulb className="w-4 h-4 text-yellow-400 animate-bounce" />
                    <span className="font-semibold text-xs text-white/80">
                        The more a user interacts with DeFi, the greater the rewards they receive.
                    </span>
                </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 animate-spin-slow">
                    <Star className="w-6 h-6 text-yellow-400/60" />
                </div>

                {/* Floating Bubbles inside card */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-white/10 to-cyan-200/20 animate-float"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${30 + Math.random() * 40}%`,
                                width: `${Math.random() * 30 + 12}px`,
                                height: `${Math.random() * 30 + 12}px`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${Math.random() * 6 + 8}s`,
                            }}
                        />
                    ))}
                </div>

                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <Rocket className="w-6 h-6 text-red-500" />
                        </div>
                        <CardTitle className="text-2xl text-white">User Flow</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
                        {[
                            {
                                icon: CreditCard,
                                title: "Purchase with MetaMask Card",
                                desc: "Pay with the card at any merchant",
                                iconColor: "text-indigo-400",
                            },
                            {
                                icon: DollarSign,
                                title: "Base Cashback",
                                desc: "Receive initial refund in USDC (1%)",
                                iconColor: "text-green-500",
                            },
                            {
                                icon: TrendingUp,
                                title: "Cashback Increase",
                                desc: "Lock USDC in DeFi pools for higher rates",
                                iconColor: "text-purple-500",
                            },
                            {
                                icon: RefreshCw,
                                title: "Automatic Conversion",
                                desc: "LI.FI SDK moves rewards across chains",
                                iconColor: "text-blue-500",
                            },
                            {
                                icon: Wallet,
                                title: "Automated Payment",
                                desc: "Rewards credited to MetaMask wallet",
                                iconColor: "text-yellow-500",
                            },
                        ].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-secondary/40 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:rotate-12 transition-transform duration-300">
                                        <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                                    </div>
                                    <h3 className="font-semibold text-center mb-2 text-sm">{step.title}</h3>
                                    <p className="text-xs text-center">{step.desc}</p>
                                </div>
                                {index < 4 && (
                                    <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 animate-pulse" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 shadow-2xl text-white relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-2 left-4 animate-float">
                    <div className="w-3 h-3 bg-yellow-400/40 rounded-full"></div>
                </div>
                <div className="absolute top-8 right-8 animate-float animation-delay-1000">
                    <div className="w-2 h-2 bg-cyan-400/40 rounded-full"></div>
                </div>

                {/* More Floating Bubbles inside card */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-white/8 to-cyan-200/15 animate-float"
                            style={{
                                left: `${15 + Math.random() * 70}%`,
                                top: `${25 + Math.random() * 50}%`,
                                width: `${Math.random() * 35 + 10}px`,
                                height: `${Math.random() * 35 + 10}px`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${Math.random() * 7 + 7}s`,
                            }}
                        />
                    ))}
                </div>

                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <Target className="w-6 h-6 text-indigo-300" />
                        </div>
                        <CardTitle className="text-2xl">Cashback Levels</CardTitle>
                    </div>
                    <p>Cashback increases according to your participation in DeFi</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                icon: Shield,
                                level: "Explorer",
                                range: "$0 - $100",
                                cashback: "1%",
                                color: "bg-gradient-to-r from-blue-400 to-blue-600",
                                iconColor: "text-blue-900",
                            },
                            {
                                icon: Rocket,
                                level: "Pioneer",
                                range: "$100 - $500",
                                cashback: "2%",
                                extra: "access to perks",
                                color: "bg-gradient-to-r from-green-400 to-green-600",
                                iconColor: "text-green-900",
                            },
                            {
                                icon: Flame,
                                level: "Legendary",
                                range: "$500 - $1000",
                                cashback: "3%",
                                extra: "exclusive bonuses",
                                color: "bg-gradient-to-r from-orange-400 to-yellow-600",
                                iconColor: "text-orange-900",
                            },
                            {
                                icon: Crown,
                                level: "Elite",
                                range: "$1000+",
                                cashback: "4%",
                                extra: "premium benefits",
                                color: "from-purple-500 to-purple-600",
                                iconColor: "text-purple-900",
                            },
                        ].map((tier, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${tier.color} backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden`}
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <div className="text-center relative z-10">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                                        <tier.icon className={`w-6 h-6 ${tier.iconColor}`} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{tier.level} Level</h3>
                                    <p className="text-sm mb-2">{tier.range} locked</p>
                                    <p className="bg-primary/20 border-primary/30 mb-2 px-2 py-1 rounded-full text-sm font-bold">
                                        {tier.cashback} cashback
                                    </p>
                                    {tier.extra && <p className="text-xs">+ {tier.extra}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Clock className="w-5 h-5 text-red-600" />
                            </div>
                            <CardTitle className="text-lg">Lock Bonuses</CardTitle>
                        </div>
                    </CardHeader>

                    {/* Floating Bubbles inside card */}
                    <div className="absolute inset-0 pointer-events-none z-5">
                        {[...Array(2)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-gradient-to-r from-white/8 to-red-200/15 animate-float"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${30 + Math.random() * 40}%`,
                                    width: `${Math.random() * 25 + 8}px`,
                                    height: `${Math.random() * 25 + 8}px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${Math.random() * 6 + 6}s`,
                                }}
                            />
                        ))}
                    </div>

                    <CardContent className="space-y-4">
                        {[
                            { period: "1-month", bonus: "+0.5%" },
                            { period: "3-month", bonus: "+1.0%" },
                            { period: "6-month", bonus: "+1.5%", extra: "exclusive perks" },
                        ].map((lock, index) => (
                            <div
                                key={index}
                                className="bg-secondary/10 rounded-lg p-3 border border-primary/10 hover:bg-secondary/20 transition-colors duration-300 hover:scale-102"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">{lock.period} lock</span>
                                    <span className="bg-primary/20 border-primary/30 px-2 py-1 rounded-full text-sm font-bold">
                                        {lock.bonus}
                                    </span>
                                </div>
                                {lock.extra && <p className="text-xs mt-1">+ {lock.extra}</p>}
                            </div>
                        ))}
                        <div className="bg-secondary/5 rounded-lg p-3 border border-primary/10 mt-4 hover:bg-secondary/10 transition-colors duration-300">
                            <p className="text-sm text-center italic">💡 The longer the commitment, the greater the benefits</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <RefreshCw className="w-5 h-5 text-blue-800 group-hover:rotate-180 transition-transform duration-500" />
                            </div>
                            <CardTitle className="text-lg">Withdrawal Options</CardTitle>
                        </div>
                    </CardHeader>

                    {/* Floating Bubbles inside card */}
                    <div className="absolute inset-0 pointer-events-none z-5">
                        {[...Array(2)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-gradient-to-r from-white/8 to-blue-200/15 animate-float"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${30 + Math.random() * 40}%`,
                                    width: `${Math.random() * 25 + 8}px`,
                                    height: `${Math.random() * 25 + 8}px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${Math.random() * 6 + 6}s`,
                                }}
                            />
                        ))}
                    </div>

                    <CardContent className="space-y-4">
                        {[
                            {
                                icon: DollarSign,
                                title: "Direct USDC",
                                desc: "Instant withdrawal to MetaMask",
                                iconColor: "text-green-500",
                            },
                            {
                                icon: Repeat,
                                title: "Token Conversion",
                                desc: "Auto swaps using LI.FI SDK",
                                iconColor: "text-yellow-500",
                            },
                            {
                                icon: TrendingUp,
                                title: "DeFi Reinvestment",
                                desc: "Reinvest into yield pools",
                                iconColor: "text-purple-500",
                            },
                        ].map((option, index) => (
                            <div
                                key={index}
                                className="bg-secondary/10 rounded-lg p-3 border border-primary/10 hover:bg-primary/5 transition-all duration-300 hover:scale-102 group/item"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                                        <option.icon className={`w-4 h-4 ${option.iconColor}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm">{option.title}</h4>
                                        <p className="text-xs">{option.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <PiggyBank className="w-5 h-5 text-pink-500 group-hover:animate-bounce" />
                            </div>
                            <CardTitle className="text-lg">Savings Mode</CardTitle>
                        </div>
                        <p className="text-sm">Passive yield for effortless rewards</p>
                    </CardHeader>

                    {/* Floating Bubbles inside card */}
                    <div className="absolute inset-0 pointer-events-none z-5">
                        {[...Array(2)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-gradient-to-r from-white/8 to-pink-200/15 animate-float"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${30 + Math.random() * 40}%`,
                                    width: `${Math.random() * 25 + 8}px`,
                                    height: `${Math.random() * 25 + 8}px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${Math.random() * 6 + 6}s`,
                                }}
                            />
                        ))}
                    </div>

                    <CardContent className="space-y-4">
                        <div className="bg-secondary/10 rounded-lg p-4 border border-primary/10 hover:bg-secondary/20 transition-all duration-300 hover:scale-102 group/item">
                            <div className="flex items-center gap-2 mb-2">
                                <Building2 className="w-4 h-4 text-green-500 group-hover/item:rotate-12 transition-transform duration-300" />
                                <span className="font-medium text-sm">Auto-Invested DeFi Vaults</span>
                            </div>
                            <p className="text-xs">Allocates cashback to vaults that generate interest on USDC</p>
                        </div>

                        <div className="bg-secondary/10 rounded-lg p-4 border border-primary/10 hover:bg-secondary/20 transition-all duration-300 hover:scale-102 group/item">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-yellow-400 group-hover/item:rotate-12 transition-transform duration-300" />
                                <span className="font-medium text-sm">Passive Yield Generation</span>
                            </div>
                            <p className="text-xs">Low-risk DeFi strategies for extra returns without active management</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) rotate(5deg); }
                    66% { transform: translateY(-10px) rotate(-5deg); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                
                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
                
                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </div>
    )
}
