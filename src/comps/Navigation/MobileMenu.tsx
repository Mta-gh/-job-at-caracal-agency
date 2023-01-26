// import { useState } from 'react';
import { useState, useEffect } from 'react';

export default function Component() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
    setIsOpen(false);
  }, []);

	return (
		<>
			<div className={isOpen ? ' bg-red-100 is__open' : ' bg-blue-900'}>
				<button onClick={() => setIsOpen((prev) => !prev)} className="burger__menu w-full h-10 md:hidden" >
					<span className="burger__line"></span>
					<span className="burger__line"></span>
					<span className="burger__line"></span>
				</button>
				<div className="test__menu transition-all"></div>
				{isOpen ? 'Ouvert' : 'Fermé'}
			</div>
		</>
	);
}
