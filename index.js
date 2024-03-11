
new TradingView.widget({
	autosize: false,
	symbol: 'BINANCE:filUSDT',
	interval: '1',
	timezzone: 'Etc/Utc',
	theme: 'light',
	style: 1,
	locale: 'en',
	toolbar_bg: '#499b01',
	enable_publishing: false,
	withdateranges: true,
	hide_side_toolbar: false,
	allow_symbol_change: true,
	watchlist: ['BINANCE:BTCUSDT', 'BINANCE:ETHUSDT'],
	details: true,
	hotlist: true,
	calender: true,
	studies: ['STD;SMA'],
	container_id: 'chart',
	show_popup_button: true,
})
.