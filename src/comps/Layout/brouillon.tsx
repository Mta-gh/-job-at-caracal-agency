<motion.section id="section__vision" className="pb-14 md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimRight}>
				<Container>
					<Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						<Image src="/Pano2-1.jpg" alt="image" width={800} height={600} />
					</Col>
					{/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colStart={[2, null, 14, null, 14]} colEnd={[26, null, 16, null, 16]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
					{/* Text col */}
					<Col className="pt-12 md:pt-4" colStart={[2, null, 14, null, 16]} colEnd={[26, null, 25, null, 25]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">Our vision</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
								Our corporate vision for the future is based on the secure foundation of
								experience and tradition.
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
								</p>
							</div>
						</div>
					</Col>
				</Container>
			</motion.section>



<motion.section id="section__commitement" className="md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimLeft}>
				<Container>
					{/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colEnd={[26, null, null, null, 4]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
					{/* Text col */}
					<Col className="pt-12 md:pt-4" colStart={[2, null, 2, null, 4]} colEnd={[26, null, 14, null, 14]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">Commitment</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
									In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
									The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and
									even within urban traffic.
								</p>
							</div>
						</div>
					</Col>
					<Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 16, null, 16]} colEnd={[27, null, 26, null, 26]}>
						<Image src="/blue-truck.jpg" alt="image" width={800} height={600} />
					</Col>
				</Container>
			</motion.section>