import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
    title: 'Put Phapon',
    description: 'The Sandbox of Put Phapon',
    icons: {
        icon: './letter_p.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
