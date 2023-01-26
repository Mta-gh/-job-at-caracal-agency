import { useState } from 'react';

export default function Component() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={isOpen ? ' bg-red-100' : ' bg-blue-900 font-jetbrains'}>
				<button onClick={() => setIsOpen((prev) => !prev)} className="burger__menu w-full h-10 md:hidden" >
					<span className="burger__line"></span>
					<span className="burger__line"></span>
					<span className="burger__line"></span>
				</button>
				{isOpen ? 'Ouvert' : 'Fermé'}
			</div>
		</>
	);
}
