/*globals exports:false, com:false, android:false */

var View = android.view.View;

exports.MainActivity = com.tns.NativeScriptActivity.extends({
	onCreate: function () {
		var self = this,
			layout, button, count, btnDemoActivity;
		
		this.super.onCreate(null);
		
		layout = new android.widget.LinearLayout(this);		
		this.setContentView(layout);
		
		button = new android.widget.Button(this);
		button.setText('Tap me');
		layout.addView(button);
		
		count = 0;
		
		button.setOnClickListener(new View.OnClickListener({
			onClick: function () {
				button.setText('Count = ' + (++count));
			}
		}));
		
		btnDemoActivity = new android.widget.Button(this);
		btnDemoActivity.setText('Open Demo Activity');
		layout.addView(btnDemoActivity);
						
		btnDemoActivity.setOnClickListener(new View.OnClickListener({
			onClick: function () {
				var intent = new android.content.Intent(self, com.tns.NativeScriptActivity.class);
				intent.putExtra('DemoActivity', 0);
				self.startActivity(intent);
			}
		}));		
	}
});