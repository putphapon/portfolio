'use client'
import { useContext, useRef, useState } from 'react'
import { context } from '../page'
import { BackToHome } from './home'

export default function PrimeNumberComponent() {
    const { primeNumberCalculatorRef } = useContext(context)

    const inputRef = useRef(null)
    const [number, setNumber] = useState('')
    const [result, setResult] = useState(false)
    const [display, setDisplay] = useState(false)
    function handelNumberChange(event) {
        if (event.key === 'Enter') {
            inputRef.current.blur()
            return
        }

        if (parseInt(event.target.value) > 0) {
            setNumber(event.target.value)
        }
    }
    function handelNumberClick() {
        setDisplay(false)
        setNumber('')
    }
    function calculator() {
        if (parseInt(number) === 1) {
            setResult(false)
            setDisplay(true)
            return
        }

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                setResult(false)
                setDisplay(true)
                return
            }
        }
        setResult(true)
        setDisplay(true)
    }

    return (
        <main
            ref={primeNumberCalculatorRef}
            className='min-h-dvh relative flex flex-col justify-center items-center'
        >
            <div>
                <p className='py-2'>prime number calculator</p>
            </div>
            <div>
                <input
                    ref={inputRef}
                    type='number'
                    min={1}
                    value={number}
                    placeholder='input number'
                    onKeyDown={handelNumberChange}
                    onChange={handelNumberChange}
                    onClick={handelNumberClick}
                    onBlur={calculator}
                    className='p-5'
                />
            </div>
            <div
                className={`${
                    display && number.length > 0 ? 'visible' : 'invisible'
                } text-9xl uppercase py-2`}
            >
                {result ? (
                    <p className='text-green-500'>yes</p>
                ) : (
                    <p className='text-red-500'>no</p>
                )}
            </div>
            <BackToHome />
        </main>
    )
}
