import { TeamHero, Marquee, Meet } from '@/components/section'

export default function Team() {
	return (
		<main>
			<TeamHero />
			<Marquee marqueeText='Kreativity. Kollaboration. Konnection. Kollectability. Kommunity. Konstruct. Kollective.' />
			<Meet />
		</main>
	)
}
