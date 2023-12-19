import { KeystoneType } from '@/lib/types'
import Image from 'next/image'

export default function KoalaInfoBox({
	title,
	image,
	description,
	color,
}: KeystoneType) {
	return (
		<section className='grid grid-cols-2 border-t border-black'>
			<div
				className={`p-12 md:py-12 md:pr-12 md:pl-96 place-content-end border-r border-black bg-[${color}]`}
			>
				<h3 className='font-barricada text-2xl '>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='p-8 md:py-12 md:pr-40 place-content-start'>
				<Image src={image} alt='koala' height={250} width={250} />
			</div>
		</section>
	)
}
