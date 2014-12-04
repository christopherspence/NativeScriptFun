/*globals exports:false, android:false, com:false */

var LinearLayout = android.widget.LinearLayout,
	View = android.view.View;

exports.DemoActivity = com.tns.NativeScriptActivity.extends({
	onCreate: function () {
		var self = this,
			layout,
			btnClose;
			
		this.super.onCreate(null);
		
		layout = new LinearLayout(this);
		layout.setOrientation(LinearLayout.VERTICAL);
		this.setContentView(layout);
		
		btnClose = new android.widget.Button(this);
		btnClose.setText('Close');
		layout.addView(btnClose);
		
		btnClose.setOnClickListener(new View.OnClickListener({
			onClick: function () {
				self.finish();
			}
		}));				
	}
});