import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "~~/components/shad/ui/card"
import { Button } from "~~/components/shad/ui/button"
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
} from "lucide-react"

export default function Component() {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
            <Card className="bg-gradient-to-br from-blue-800 to-blue-300 text-white shadow-xl">
                <CardHeader className="text-center">
                    <div className="mx-auto w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Trophy className="w-10 h-10 text-yellow-400" />
                    </div>

                    <CardTitle className="text-4xl font-bold">
                        MetaCashback: The Future of Cashback Rewards
                    </CardTitle>
                    <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                        A revolutionary system that allows users to earn cashback in USDC for their purchases with the MetaMask Card, with the possibility of increasing the cashback percentage by participating in staking or locking funds in DeFi protocols.
                    </p>
                </CardHeader>
                <CardFooter className="flex justify-center gap-4">
                    <Button className="bg-secondary/70 text-white px-4 py-2 rounded-lg hover:bg-secondary/80">
                        Terms
                    </Button>
                    <Button className="bg-secondary/70 text-white px-4 py-2 rounded-lg hover:bg-secondary/80">
                        Privacy
                    </Button>
                    <Button className="bg-secondary/70 text-white px-4 py-2 rounded-lg hover:bg-secondary/80">
                        FAQ
                    </Button>
                    
                </CardFooter>

                {/* Nota informativa al final */}
                <div className="flex justify-center items-center gap-2 bg-secondary/30 px-3 py-2 rounded-full backdrop-blur-sm text-sm w-fit mx-auto">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-xs">
                        The more a user interacts with DeFi, the greater the rewards they receive.
                    </span>
                </div>
            </Card>

            {/* User Flow */}
            <Card className="bg-gradient-to-br from-blue-800 to-blue-300 shadow-xl">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                            <Rocket className="w-6 h-6 text-red-500" />
                        </div>
                        <CardTitle className="text-2xl text-white">User Flow</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
                        {[
                            { icon: CreditCard, title: "Purchase with MetaMask Card", desc: "Pay with the card at any merchant", iconColor: "text-indigo-400" },
                            { icon: DollarSign, title: "Base Cashback", desc: "Receive initial refund in USDC (1%)", iconColor: "text-green-500" },
                            { icon: TrendingUp, title: "Cashback Increase", desc: "Lock USDC in DeFi pools for higher rates", iconColor: "text-purple-500" },
                            { icon: RefreshCw, title: "Automatic Conversion", desc: "LI.FI SDK moves rewards across chains", iconColor: "text-blue-500" },
                            { icon: Wallet, title: "Automated Payment", desc: "Rewards credited to MetaMask wallet", iconColor: "text-yellow-500" },
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-secondary/40 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:bg-primary/5 transition-all duration-300">
                                    <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                                        <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                                    </div>
                                    <h3 className="font-semibold text-center mb-2 text-sm">{step.title}</h3>
                                    <p className="text-xs text-center">{step.desc}</p>
                                </div>
                                {index < 4 && (
                                    <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Cashback Levels */}
            <Card className="bg-gradient-to-br from-blue-800 to-blue-300 shadow-xl text-white">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
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
                                className={`bg-gradient-to-br ${tier.color} backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:scale-105 transition-all duration-300`}
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <tier.icon className={`w-6 h-6 ${tier.iconColor}`} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{tier.level} Level</h3>
                                    <p className="text-sm mb-2">{tier.range} locked</p>
                                    <p className="bg-primary/20 border-primary/30 mb-2">{tier.cashback} cashback</p>
                                    {tier.extra && <p className="text-xs">+ {tier.extra}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Bottom Section - Three Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Lock Bonuses */}
                <Card className="bg-gradient-to-br from-blue-800 to-blue-300 border-primary/10 shadow-xl text-white">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Clock className="w-5 h-5 text-red-600" />
                            </div>

                            <CardTitle className="text-lg">Lock Bonuses</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { period: "1-month", bonus: "+0.5%" },
                            { period: "3-month", bonus: "+1.0%" },
                            { period: "6-month", bonus: "+1.5%", extra: "exclusive perks" },
                        ].map((lock, index) => (
                            <div key={index} className="bg-secondary/10 rounded-lg p-3 border border-primary/10">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">{lock.period} lock</span>
                                    <p className="bg-primary/20 border-primary/30">{lock.bonus}</p>
                                </div>
                                {lock.extra && <p className="text-xs mt-1">+ {lock.extra}</p>}
                            </div>
                        ))}
                        <div className="bg-secondary/5 rounded-lg p-3 border border-primary/10 mt-4">
                            <p className="text-sm text-center italic">
                                💡 The longer the commitment, the greater the benefits
                            </p>
                        </div>
                    </CardContent>
                </Card>
                {/* Withdrawal Options */}
                <Card className="bg-gradient-to-br from-blue-800 to-blue-300 text-white border-primary/20 shadow-xl">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <RefreshCw className="w-5 h-5 text-blue-800" />
                            </div>
                            <CardTitle className="text-lg">Withdrawal Options</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { icon: DollarSign, title: "Direct USDC", desc: "Instant withdrawal to MetaMask", iconColor: "text-green-500" },
                            { icon: Repeat, title: "Token Conversion", desc: "Auto swaps using LI.FI SDK", iconColor: "text-yellow-500" },
                            { icon: TrendingUp, title: "DeFi Reinvestment", desc: "Reinvest into yield pools", iconColor: "text-purple-500" },
                        ].map((option, index) => (
                            <div
                                key={index}
                                className="bg-secondary/10 rounded-lg p-3 border border-primary/10 hover:bg-primary/5 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
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

                {/* Savings Mode */}
                <Card className="bg-gradient-to-br from-blue-800 to-blue-300 text-white border-primary/20 shadow-xl">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <PiggyBank className="w-5 h-5 text-pink-500" />
                            </div>
                            <CardTitle className="text-lg">Savings Mode</CardTitle>
                        </div>
                        <p className="text-sm">Passive yield for effortless rewards</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-secondary/10 rounded-lg p-4 border border-primary/10">
                            <div className="flex items-center gap-2 mb-2">
                                <Building2 className="w-4 h-4 text-green-500" />
                                <span className="font-medium text-sm">Auto-Invested DeFi Vaults</span>
                            </div>
                            <p className="text-xs">Allocates cashback to vaults that generate interest on USDC</p>
                        </div>

                        <div className="bg-secondary/10 rounded-lg p-4 border border-primary/10">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="font-medium text-sm">Passive Yield Generation</span>
                            </div>
                            <p className="text-xs">
                                Low-risk DeFi strategies for extra returns without active management
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
