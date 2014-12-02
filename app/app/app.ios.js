console.log('starting app.ios.js');

UIResponder.extend({
	applicationDidFinishLaunchingWithOptions: function (application, launchOptions) {
		console.log('appDidFinishLaunching called');
		this._window = new UIWindow(UIScreen.mainScreen().bounds);
		this._window.backgroundColor = UIColor.redColor();
		this._window.makeKeyAndVisible();

		return true;
	}
}, {
	name: 'AppDelegate',
	protocols: [UIApplicationDelegate],
});

UIApplicationMain(0, null, null, "AppDelegate");