var log = android.util.Log;


var MainActivity = com.tns.NativeScriptActivity.extends({
	onCreate: function () {
		this.super.onCreate(null);
		
		var layout = new android.widget.LinearLayout(this);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		
		this.setContentView(layout);
		
		var button = new android.widget.Button(this);
		button.setText('Tap me');
		
		layout.addView(button);
		
		var count = 0;
		
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function () {
				++count;
				
				log.i('JS', 'count ' + count);
				
				button.setText('Count = ' + (count));
			}
		}));
	}
});

app.init({
	getActivity: function (intent) {
		if (intent.getAction() === android.content.Intent.ACTION_MAIN) {
			return MainActivity;
		}
		else {
			fail('Cannot create activity. Unknown action');
		}
	}
});