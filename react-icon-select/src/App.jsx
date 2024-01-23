import * as FaIcons from 'react-icons/fa';
import './App.css';

function App() {
	// Get an array of icon names
	const iconNames = Object.keys(FaIcons);

	return (
		<div>
			<div className="dropdown" tabIndex="1">
				<a className="dropbtn">Dropdown 1</a>
				<div className="dropdown-content">
					<div className="grids">
						{iconNames.map((iconName, index) => {
							const Icon = FaIcons[iconName];
							return (
								<p key={index}>
									<Icon />
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
