import { useState } from 'react';

export default function Component() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={isOpen ? ' bg-red-100' : ' bg-green-100 font-jetbrains'}>
				<button onClick={() => setIsOpen((prev) => !prev)} className="burger__menu">
					<span className="burger-line"></span>
					<span className="burger-line"></span>
					<span className="burger-line"></span>
				</button>
				{isOpen ? 'Ouvert' : 'Fermé'}
			</div>
		</>
	);
}
