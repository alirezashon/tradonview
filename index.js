/** @format */

new TradingView.widget({
	autosize: true,
	symbol: 'BINANCE:LUNAUSDT',
	interval: '1',
	timezzone: 'Etc/Utc',
	theme: 'light',
	style: '1',
	locale: 'en',
	toolbar_bg: '#499b01',
	enable_publishing: false,
	withdateranges: true,
	hide_side_toolbar: false,
	allow_symbol_change: true,
	watchlist: ['BINANCE:BTCUSDT', 'BINANCE:ETHUSDT', 'BINGX:USTCUSDT.P'],
	details: true,
	hotlist: true,
	calender: true,
	studies: [
		'STD;SMA',
		'STD;Linear_Regression',
		'STD;Ichimoku%1Cloud',
		'STD;Connors_RSI',
		'STD;MA%Ribbon',
		'STD;Gaps',
		'STD;Net%1Volume',
		'STD;Awesome_Oscillator',
	],
	container_id: 'chart',
	show_popup_button: true,
})
