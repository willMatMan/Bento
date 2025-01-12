// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Will',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'popcorn',
			id: '1',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Spotify',
					link: 'https://open.spotify.com/intl-pt',
				},
				{
					name: 'YTMusic',
					link: 'https://music.youtube.com/',
				},
				{
					name: 'HBO',
					link: 'https://play.max.com/profile-picker',
				},
			],
		},
		{
			icon: 'notebook-text',
			id: '2',
			links: [
				{
					name: 'ChatGPT',
					link: 'https://chatgpt.com/',
				},
				{
					name: 'Classroom',
					link: 'https://classroom.google.com/u/1/',
				},
				{
					name: 'Plurall',
					link: 'https://home.plurall.net/',
				},
				{
					name: 'Docs',
					link: 'https://docs.google.com/document/u/1/?hl=pt-BR&pli=1&tgif=d',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'users-round',
			id: '1',
			links: [
				{
					name: 'WhatsApp',
					link: 'https://web.whatsapp.com/',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/',
				},
				{
					name: 'X',
					link: 'https://x.com/home?mx=2',
				},
				{
					name: 'Discord',
					link: 'https://discord.com/channels/@me',
				},
			],
		},
		{
			icon: 'flask-conical',
			id: '2',
			links: [
				{
					name: 'Pinterest',
					link: 'https://br.pinterest.com/',
				},
				{
					name: 'Udemy',
					link: 'https://www.udemy.com/',
				},
				{
					name: 'GitHub',
					link: 'https://github.com/',
				},
				{
					name: 'Home',
					link: 'https://home.arnunes.net/lovelace/home',
				},
			],
		},
	],
};
