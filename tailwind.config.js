module.exports = {
	prefix: '',
	important: false,
	separator: ':',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.js', './src/**/*.ts'],
	},
	theme: {
		screens: {

			sm: '640px',
			md: '768px',
			lg: '991px',

			exlg: '1199px',
			xl: '1450px',
		},
		colors: {
			transparent: 'transparent',

			black: '#000',
			white: '#fff',
			gray:{
				'50':'#F8F8F8',
				'100': '#eaeaea',
				'200': '#dedede',
				'300': '#cecece',
				'400': '#b2b2b2',
        		'500': '#888888',
        		'600': '#171717',
			},
			blue: {

				'100':'#f2faff',
        		'200': '#cbe5ff',
				'300': '#4BA4FD',
				'400': '#5688FD',
				'500': '#1B83C5',
			},
      green:{
        '100':'#BDFFF4',
        '200':'#3BE0D9',
        '300':'#36D2B9',
        '400':'#2A9886',
      },
			yellow: {
				'200': '#ffcb06',
				'300': '#FDC800',
				'400': '#ff8e06',
			},
			'logo-red': '#CA0225',
		gray: {
        '50':'#F8F8F8',
				'100': '#eaeaea',
				'200': '#dedede',
				'300': '#cecece',
				'400': '#b2b2b2',
        '500': '#888888',
        '600': '#171717',

			},
			red: {
				'100': '#F7D2D6',
				'200': '#EFA6AD',
				'300': '#DF4D5B',
				'400': '#d04250',
				'500': '#D72132',
				'600': '#AC1A28',
				'700': '#81131E',
				'800': '#560D14',
				'900': '#2B060A',
			},
			orange:{
				'300':'#FF7A03',
				'400':'#d66704',
			},
		},
		spacing: {
			'0': '0',
			'1': '1px',
			'2': '2px',
			'4': '0.25rem',
			'6': '0.375rem',
			'8': '0.5rem',
			'10': '0.6rem',

			'12': '0.75rem', // FOR CONTAINER PADDING ONLY ABOVE TABLET
			'14': '0.875rem', //14px
			'16': '1rem', // 16px
			'20': '1.25rem', // 20px
			'24': '1.5rem', // 24px
			'28': '1.75rem', // 24px
			'32': '2rem', // 32px
			'40': '2.5rem', //40px
			'48': '3rem', //48px
			'56': '3.5rem', // 56px
			'60': '3.75rem', // 56px
			'64': '4rem', // 64px
			'76': '4.75rem', // 76px
			'80': '5rem', // 80px
			'96': '6rem', // 96px
			'112': '7rem', // 112px
			'144': '9rem', // 144px
			'160': '10rem', //160px
			'192':'12rem', //192px
			'256':'16rem', //256px
			'1/10': '10%',
			'2/10': '20%',
			'5/10': '50%',
			'10/10': '100%',
			'-5/10': '-50%',
			'-10/10':'-100%',
			'-1':'-1px',
			'-2':'-2px',
			'-4': '-0.25rem',
			'-6':'-0.375rem',
			'-8':'-0.5rem',
			'-16':'1rem',
			'-24': '-1.5rem', // 24px
			'-96':'-6rem',
			'-112':'-7rem',
			'-144': '-9rem', // 144px
			'-160': '-10rem', //160px
			'-192':'-12rem', //192px

		},
		backgroundColor: theme => theme('colors'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		borderColor: theme => ({
			white: '#fff',
			default: theme('colors.gray.300'),
			light: '#E4E4E4',
			blue: theme('colors.blue'),
			gray: {
				'100': theme('colors.gray.100'),
				'200': theme('colors.gray.200'),
				'300': theme('colors.gray.300'),
				'600': theme('colors.gray.600'),
			},
			red: {
				'500': theme('colors.red.500'),
				'600': theme('colors.red.600'),
			},
			orange:{
				'300': theme('colors.orange.300'),
			},
      green: theme('colors.green'),
      transparent:' transparent',
		}),
		borderRadius: {
			none: '0',
			'sm':'4px',
			'md':'8px',
       'xxl':'18px',
			full: '9999px',
		},
		borderWidth: {
			'1': '1px',
			'0': '0',
			'2': '2px',
      		'4': '4px',
			'5': '5px',
      		'6': '6px',
		},
		boxShadow: {
			default: '0 0 10px 5px rgba(0,0,0,0.03)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none',
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		},
		container: {},
		cursor: {
			default: 'default',
			pointer: 'pointer',
			move: 'move',
			'not-allowed': 'not-allowed',
		},
		fill: theme => ({
			current: 'currentColor',
			'gray': theme('colors.gray'),
      'green': theme('colors.green'),
			'red-300': theme('colors.red.300'),
			white: theme('colors.white'),
			blue: theme('colors.blue'),
		}),
		flex: {
			'1': '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexGrow: {
			'0': '0',
			default: '1',
		},
		flexShrink: {
			'0': '0',
			default: '1',
		},
		fontFamily: {
			fjalla: [
				'fjalla_oneregular',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			century: [
				'Century Gothic',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
		fontSize: {
            xxs: '0.625rem', //10px,
			xs: '0.75rem', // 12px
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '2rem', // 32px
			'4xl': '2.5rem', //40px
			'5xl': '3rem', // 48px
			'6xl': '3.5rem', // 56px
			'7xl': '6rem', // 96px
		},
		fontWeight: {
        	light: '300',
			normal: '400',
      		medium: '500',
			bold: '600',
		},
		height: {
      		'0':'0',
			auto: 'auto',
			full: '100%',
			screen: '100vh',
		},
		inset: (theme,{ negative }) => theme('spacing'),
		letterSpacing: {
			tight:'-0.025em',
			normal:'0em',
			wide: '0.025em',
			widest:'0.1em'
		},
		lineHeight: {
			none: '1',
			tight: '1.2',
			snug: '1.375',
			base: '1.4',
			normal: '1.5', // 24px
			relaxed: '1.7', // 28px
			// loose: '2',
		},
		listStyleType: {
			none: 'none',
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/12': '8.333333%',
			'1/6': '16.666667%',
			'-4': '-0.25rem',
			'-6': '-0.375rem',
			'-8': '-0.5rem',
			'-12': '-0.75rem',
			'-16': '-1rem',
            '-20': '-20px',
			'-24': '-24px',
			'-28': '-1.75rem', // 28px
			'-32': '-2rem', // 32px
			'-40': '-2.5rem', //40px
			'-48': '-3rem', //48px
			'-56': '-3.5rem', // 56px
			'-60': '-3.75rem', // 56px
			'-64': '-4rem', // 64px
			'-76': '-4.75rem', // 76px
			'-80': '-5rem', // 80px
			'-96': '-6rem', // 96px
			'-112': '-7rem', // 112px
			'-144': '-9rem', // 144px
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh',
		},
		maxWidth: theme => ({
			...theme('width'),
		}),
		minHeight: {
			'0': '0',
      		'140':'140px',
			full: '100%',

			screen: '100vh',
		},
		minWidth: {
			'0': '0',
			full: '100%',
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			'0': '0',
			'25': '0.25',
			'35': '0.35',
			'50': '0.5',
			'75': '0.75',
			'95': '0.95',
			'100': '1',
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			'1': '1',
			'2': '2',
		},
		padding: theme => theme('spacing'),
		placeholderColor: theme => ({
			default: theme('colors.gray.600'),
		}),
		stroke: theme => ({
      		gray:theme('colors.gray'),
		}),
		textColor: theme => theme('colors'),
	
		width: theme => ({
			auto: 'auto',
      		'0':'0',
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/10': '10%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
		}),
		zIndex: {
			auto: 'auto',
			'0': '0',
			'10': '10',
			'20': '20',
			'30': '30',
			'40': '40',
			'50': '50',
			'60': '60',
      		'90': '90',
		},
		extend: {
			container: theme => ({
				center: true,
			}),
		},
	},
	variants: {
		accessibility: ['responsive', 'focus'],
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		appearance: [],
		backgroundAttachment: [],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: [],
		backgroundSize: [],
		borderCollapse: ['responsive'],
		borderColor: ['hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: [],
		borderWidth: ['responsive'],
		boxShadow: ['active','hover', 'focus'],
		cursor: [],
		display: ['group-hover','hover','responsive'],
		divideColor: ['group-hover'],
		fill: ['group-hover','responsive'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		float: ['responsive'],
		fontFamily: [],
		fontSize: ['responsive'],
		fontSmoothing: [],
		fontStyle: [],
		fontWeight: [],
		height: ['responsive'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		letterSpacing: [],
		lineHeight: ['responsive'],
		listStylePosition: [],
		listStyleType: [],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['responsive', 'hover', 'focus'],
		order: ['responsive'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		placeholderColor: ['focus'],
		pointerEvents: ['responsive'],
		position: ['active','responsive'],
		resize: ['responsive'],
		stroke: ['responsive'],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['group-hover','responsive', 'hover', 'focus'],
		textDecoration: [],
		textTransform: [],
    	transitionProperty: ['hover', 'focus'],
		userSelect: [],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: ['responsive'],
	},
	corePlugins: {
		borderCollapse: false,
		float: false,
		objectPosition: true,
		stroke: false,
		tableLayout: false,
		wordBreak: true,
		container: true,
	},
	plugins: [
    // require( 'tailwindcss' ),
		// require( 'precss' ),
		// require( 'autoprefixer' )
  ],
}

