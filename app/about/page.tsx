import { AboutHero, Keystones, Marquee } from '@/components/section'

export default function About() {
	return (
		<main>
			<AboutHero />
			<Marquee marqueeText='Unveiling the Kreation of the Kiki Koalas and our kreative kompass.' />
			<Keystones />
		</main>
	)
}
