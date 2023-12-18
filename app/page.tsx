import {
	About,
	Hero,
	Dedication,
	Marquee,
	Collectible,
	Connect,
	ConnectSocials,
	Ecosystem,
	Supporting,
} from '@/components/section'

export default function Home() {
	return (
		<main className='min-h-screen bg-[#F8D467]'>
			<Hero />
			<About />
			<Dedication />
			<Marquee marqueeText='Kiki, do you love me? Are you HUNGRY? Say you’ll never ever EAT ME.' />
			<Collectible />
			<Connect />
			<Marquee marqueeText='We hungry. We sleepy. Lofty gum tree tops are where your will find use. Either sleeping or eating.' />
			<Ecosystem />
			<Supporting />
			<ConnectSocials />
		</main>
	)
}
