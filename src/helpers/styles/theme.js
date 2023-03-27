import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import palette from './palette';

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
	palette,
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MUIDataTableSelectCell: {
			styleOverrides: {
				root: {
					borderBottom: 'none',
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: '8px',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
				},
				sizeLarge: {
					padding: '12px 24px',
					fontWeight: 500,
				},
				sizeInput: {
					padding: '10px 24px',
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
				select: {
					padding: '12px 28px 12px 12px',
					height: 'auto',
					fontSize: 14,
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				adornedEnd: {
					padding: '0 !important',
				},
				adornedStart: {
					padding: '0 !important',
				},
			},
		},
		MuiInputAdornment: {
			styleOverrides: {
				root: {
					margin: 0,
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					height: 'auto',
					fontSize: 14,
					transform: 'translate(12px, 14px) scale(1)',
				},
				shrink: {
					height: 'auto',
					fontSize: 14,
					transform: 'translate(14px, -9px) scale(0.9)',
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: 0,
				},
				list: {
					padding: 0,
				},
				paper: {
					boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12) !important',
				},
			},
		},
		MuiBreadcrumbs: {
			styleOverrides: {
				separator: {
					marginLeft: 4,
					marginRight: 4,
				},
			},
		},
		MuiAutocomplete: {
			styleOverrides: {
				popper: {
					boxShadow: '0px 5px 8px 1px rgba(0, 0, 0, 0.07) !important',
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {},
		},
	},
});

export default theme;
