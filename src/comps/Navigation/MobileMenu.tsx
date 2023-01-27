// import { useState } from 'react';
import { useState, useEffect } from 'react';
// import BehermanLogo from '';


export default function Component() {
	const [isOpen, setIsOpen] = useState(false);

	// reset on page reload
	useEffect(() => {
    setIsOpen(false);
  }, []);

	return (
		<>
			<div className={isOpen ? ' is__open' : ' is__closed'}>
				<button onClick={() => setIsOpen((prev) => !prev)} className="burger__menu w-full h-10 md:hidden" >
					<span className="burger__line"></span>
					<span className="burger__line"></span>
					<span className="burger__line"></span>
				</button>
				<div className="test__menu transition-all flex flex-col items-center justify-center text-5xl">
				{/* <BehermanLogo /> */}

				<a href="#" className='underlined__links mb-6'>Home</a>
							<a href="#" className="underlined__links  mb-6">
								About
							</a>
							<a href="#" className="underlined__links  mb-6">
								History
							</a>
							<a href="#" className="underlined__links  mb-6">
								Philanthropy
							</a>
				</div>
				{/* {isOpen ? 'Ouvert' : 'Fermé'} */}
			</div>
		</>
	);
}
