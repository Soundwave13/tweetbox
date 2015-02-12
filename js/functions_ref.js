var messages = {
	getAllMessages: function() {
		self.clearMessages();
		$.ajax({
		   url: "http://localhost:8888/Unit2/messages.php",
		   dataType: "json"
		}).done(function(data) {
			for (var m in data) {
				self.displayMessage(data[m].Messages);
			}
		});

	},
	displayMessage: function(messageText) {
		if ($(".message").hasClass("current") == false) {
			$(".message").html(messageText)
				         .addClass("current")
					     .show();
		} 
		else {
			var current = $(".current").clone()
				                       .html(messageText);
			$(".current").after(current)
						 .removeClass("current");
		}
	},
	addMessage: function(messageText) {
		$.ajax({
		   url: "http://localhost:8888/Unit2/add.php",
		   type: "POST",
		   data: {
		       Messages:messageText
		   }
		}).done(function(data) {
			console.log(data);
			self.getAllMessages();
		}).fail(function(jqXHR,status) {
			console.log("Fail: " + status);
		});

	},
	clearMessages: function(messageText) {
		$(".Message").remove();
		$(".Messages > .row").html('<div class="twelve columns message"></div>');
	}
}
var self = messages;


$(document).ready(function() {

	self.getAllMessages();
	
	$("#message-btn").click(function() {
		var messageText = $("#message-txt").val();
		if (messageText != "") {
			messages.addMessage(messageText);
		}
	});

});