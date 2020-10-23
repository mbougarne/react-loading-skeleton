import React, { useContext, useState } from 'react';

import RootContext from './context/context'

import Articles from './components/Article'
import User from './components/User'
import ToggleTheme from './components/ThemeToggle'

function App() {

	let theme = useContext(RootContext)
	let [mode, setMode] = useState(theme)

	let classnames = `App bg-${mode}`

	return (
		<RootContext.Provider value={[mode, setMode]}>
			<div className={classnames}>
				<header>
					<h1>
						React Skeleton
						<ToggleTheme />
					</h1>
				</header>
				<div className="content">
					<Articles />
					<User />
				</div>
			</div>
		</RootContext.Provider>
	);
}

export default App;
