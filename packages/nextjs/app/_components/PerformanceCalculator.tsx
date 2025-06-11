"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card"
import { Input } from "~~/components/shad/ui/input"
import { Label } from "~~/components/shad/ui/label"

export function PerformanceCalculator() {
  const [amount, setAmount] = useState(100)
  const [days, setDays] = useState(30)
  const [estimatedReturn, setEstimatedReturn] = useState(0)

  // Calculate returns based on amount and days
  useEffect(() => {
    // Simple calculation: 1% monthly return (0.033% daily)
    const dailyRate = 0.00033
    const calculatedReturn = amount * dailyRate * days
    setEstimatedReturn(Number.parseFloat(calculatedReturn.toFixed(2)))
  }, [amount, days])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(Number(e.target.value))
  }

  return (
    <section className="flex justify-center items-center flex-1 mt-4 px-3 max-w-md">
      <Card className="w-full bg-secondary">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center backdrop-blur-sm">
            <Wallet className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Performance Calculator</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-primary rounded-2xl p-4 border border-primary space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Amount:
                </Label>
                <span className="font-bold">${amount} USDC</span>
              </div>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={1}
                max={10000}
                className="bg-secondary"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="days" className="text-sm font-medium">
                  Time Period:
                </Label>
                <span className="font-bold">{days} days</span>
              </div>
              <div className="px-1">
                <input
                  type="range"
                  id="days"
                  min="1"
                  max="365"
                  step="1"
                  value={days}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${(days / 365) * 100}%, #1e293b ${
                      (days / 365) * 100
                    }%, #1e293b 100%)`,
                  }}
                />
                <style jsx global>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    background: white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    background: white;
                    border-radius: 50%;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
                  }
                  input[type="range"]:focus {
                    outline: none;
                  }
                  input[type="range"]:focus::-webkit-slider-thumb {
                    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5);
                  }
                  input[type="range"]:focus::-moz-range-thumb {
                    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5);
                  }
                `}</style>
              </div>
              <div className="flex justify-between text-xs text-gray-400 px-1">
                <span>1d</span>
                <span>30d</span>
                <span>90d</span>
                <span>180d</span>
                <span>365d</span>
              </div>
            </div>

            <div className="border-t border-secondary pt-3 mt-2">
              <p className="text-lg font-bold">Estimated Return: ${estimatedReturn}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
