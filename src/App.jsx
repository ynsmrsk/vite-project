import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import './App.css'
import image1 from './assets/1.svg'
import image2 from './assets/2.svg'
import image3 from './assets/3.svg'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
	const main = useRef()

	useGSAP(() => {
		const articles = gsap.utils.toArray('article')

		articles.forEach((article, i) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: article,
					start: 'top 40%',
					end: 'bottom 40%',
					toggleActions: 'play reverse play reverse',
					markers: true,
					ease: 'power4.out',
					duration: 0.3,
				}
			})

			tl.fromTo(article.querySelector('p'), {
				opacity: 0,
				y: 20,
				height: 0,
			}, {
				opacity: 1,
				y: 0,
				height: 'auto',
			})

			tl.fromTo(article.querySelector('h2'), {
				color: 'rgba(255,255,255,0.4)'
			}, {
				color: 'rgba(255,255,255,1)'
			}, 0)

			tl.fromTo(article, {
				backgroundColor: 'rgba(255,255,255,0)',
				borderLeft: '10px solid rgba(255,255,255,0)'
			}, {
				backgroundColor: 'rgba(255,255,255,0.1)',
				borderLeft: '10px solid rgba(255,255,255,1)'
			}, 0)

			tl.fromTo(article.querySelector('img'), {
				opacity: 0,
				x: 10,
			}, {
				opacity: 1,
				x: 0,
			}, 0)

		})
	}, { scope: main })

	return (
		<main ref={main}>
			<section>
				{features.map(feature =>
					<article key={feature.title}>
						<img src={feature.image} alt={feature.title} />
						<h2>{feature.title}</h2>
						<p>{feature.content}</p>
					</article>
				)}
			</section>
		</main >
	)
}

const features = [
	{
		title: 'title 1',
		content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
		image: image1
	},
	{
		title: 'title 2',
		content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, v',
		image: image2
	},
	{
		title: 'title 3',
		content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, v',
		image: image3
	}
]
