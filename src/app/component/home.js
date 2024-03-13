'use client'
import { useContext } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { context } from '../page'
import { v4 as uuidV4 } from 'uuid'
import { socialOnline } from '../context/constants'

export function BackToHome() {
    const { homeRef } = useContext(context)
    return (
        <div
            className='absolute top-0 right-0 text-zinc-400 cursor-pointer p-6'
            onClick={() =>
                homeRef.current.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        >
            <ArrowUpwardIcon/>
        </div>
    )
}

export default function Home() {
    const { homeRef, primeNumberCalculatorRef } = useContext(context)
    return (
        <main
            ref={homeRef}
            className='min-h-dvh relative flex flex-col justify-center items-center'
        >
            <div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 capitalize text-9xl cursor-wait text-slate-50 bg-sky-950 p-5'>
                    <p className='font-bold py-4'>coming soon</p>
                </div>
                <div className='flex flex-col w-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-default text-5xl py-5'>
                    <p className='font-semibold capitalize'>Put Phapon</p>
                    <p className='font-light'>portfolio</p>
                </div>
                <div className='flex flex-nowrap py-5'>
                    {socialOnline.map((item) => (
                        <a
                            key={uuidV4()}
                            className='bg-sky-950 text-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-2 mr-6'
                            href={item.link}
                            target='_brank'
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>

            <div className='absolute bottom-0 left-0 p-5'>
                <div className='text-zinc-400'>
                    <p className='cursor-default'>sandbox</p>
                    <ul className='list-disc cursor-pointer pl-5'>
                        <li
                            onClick={() =>
                                primeNumberCalculatorRef.current.scrollIntoView(
                                    {
                                        behavior: 'smooth',
                                    }
                                )
                            }
                        >
                            prime number calculator
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
