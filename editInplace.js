(function($,window,undefined){
	var default_options={
		type:"text",
		width:"175px",
		error_msg:"input error,try again!",
		validate:null,
		editable:true
	};

	function EditInPlace(options){
		generateDOM(options);
		this.options=$.extend(default_options,options);//todo
		this.dom={
			label:$("#"+options["id"]).find("label"),
			input:$("#"+options["id"]).find("input")
		}
	};

	function generateDOM(options){
		var parent=$("#"+options["id"]);
		if (options.editable) {
			parent.append('<div class="editinplace"><label></label><input type="text"></div>');
			parent.find("input").hide();
			bindEvent();
		}else{
			parent.append('<div><label></label></div>');
		}		
	}

	function bindEvent(){
		$("label").click(function(){
			$(this).hide();
			var input=$(this).parent().find("input");
			input.val($(this).text());
			input.show().focus();
		});
		$("input:text").blur(function(){
			$(this).hide();
			var label=$(this).parent().find("label");
			label.text($(this).val());
			label.show();
		});
	}
	
	EditInPlace.prototype={
		data:function(){
			if (arguments.length==0) {
				return this.dom.label.text();	
			}else{
				var value=arguments[0];
				this.dom.label.text(value);
				this.dom.input.val(value);
			}
		}
	};
	window.EditInPlace=EditInPlace;
}(jQuery,window,undefined))
