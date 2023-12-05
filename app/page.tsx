import { About } from '@/components/section/about'
import { Collectible } from '@/components/section/collectible'
import { Connect } from '@/components/section/connect'
import { ConnectSocials } from '@/components/section/connect-socials'
import { Dedication } from '@/components/section/dedication'
import { Ecosystem } from '@/components/section/ecosystem'
import { Hero } from '@/components/section/hero'
import { Marquee } from '@/components/section/marquee'
import { Supporting } from '@/components/section/supporting'

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
