'use client';

import { useTheme } from 'next-themes';

const ThemeMode = () => {
	const { systemTheme, theme, setTheme } = useTheme();

	return (
		<button
			onClick={() =>
				theme === 'dark' ? setTheme('light') : setTheme('dark')
			}
		>
			Change Mode
		</button>
	);
};

export default ThemeMode;
