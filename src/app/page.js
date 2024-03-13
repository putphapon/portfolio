'use client'
import { createContext, useRef } from 'react'
import Home from './component/home'
import PrimeNumberComponent from './component/prime-number-calculator-component'

export const context = createContext()
export default function Page() {
    const homeRef = useRef(null)
    const primeNumberCalculatorRef = useRef(null)

    return (
        <context.Provider value={{ homeRef, primeNumberCalculatorRef }}>
            <Home />
            <PrimeNumberComponent />
        </context.Provider>
    )
}
