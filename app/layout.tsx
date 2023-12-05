import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import Header from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

const barricada = localFont({
	src: [{ path: '../public/fonts/barricada-w01-regular.ttf' }],
	variable: '--font-barricada',
})

export const metadata: Metadata = {
	title: 'Kiki Koalas',
	description: 'A tangible kollectible',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					rubik.variable,
					barricada.variable
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
