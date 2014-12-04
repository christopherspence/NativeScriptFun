/*globals android:false, require: false, app:false, fail:false */
//var log = android.util.Log;

var demo = require('android/demoActivity'),
	main = require('android/mainActivity');

app.init({
	getActivity: function (intent) {
		if (intent.hasExtra('DemoActivity')) {
			return demo.DemoActivity;
		}
		else if (intent.getAction() === android.content.Intent.ACTION_MAIN) {
			return main.MainActivity;
		}
		else {
			fail('Can\'t create activity. Unknown action.');
		}
	}
});
