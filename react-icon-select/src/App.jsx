import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

function App() {
	const iconNames = Object.keys(FaIcons);
	const [selectedIcon, setSelectedIcon] = useState(null);
	const FIcon = FaIcons[selectedIcon];
	console.log(FIcon);
	console.log(selectedIcon);
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Select an Icon
					{selectedIcon && <FIcon />}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<div className="grids">
						{iconNames.map((iconName, index) => {
							const Icon = FaIcons[iconName];
							return (
								<Dropdown.Item
									key={index}
									onClick={() => setSelectedIcon(iconName)}
								>
									<Icon />
								</Dropdown.Item>
							);
						})}
					</div>
				</Dropdown.Menu>
			</Dropdown>
			<p>Selected Icon {selectedIcon}</p>
		</div>
	);
}

export default App;
