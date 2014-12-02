exports.MainActivity = com.tns.NativeScriptActivity.extends({
	onCreate: function () {
		this.super.onCreate(null);
		
		var layout = new android.widget.LinearLayout(this);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		this.setContentView(layout);