
//content = Messages
//changed to test git

var Messages = {
	getAllMessages: function(){
		self.clearMessages();
		$.ajax({ //connect to server
			url: "http://localhost:8888/Unit2/messages.php",
			dataType:"json"
		}).done(function(data){
			for (var m in data){ 
     			self.displayMessage(data[m].Messages);
			}
			
		});

	},
	displayMessage: function(messageText){
			if ($(".message").hasClass("current") == false){
				$(".message").html(messageText)
							 .addClass("current")
							 .show; 
			}
			else { //move text to new block
				var current = $(".current").clone()
										   .html(messageText);
				$(".current").after(current)
							 .removeClass("current");
			}
	},
	addMessage: function(messageText){

		$.ajax({ //connect to server
			url: "http://localhost:8888/Unit2/add.php",
			type:"POST",
			data:{
				Messages:messageText
			},
		}).done(function(data){
			console.log(data);
			self.getAllMessages();
		}).fail(function(jqXHR,status){
			console.log("Fail: " + status)
		});

	},

	clearMessages: function (){
		$(".message").remove();
		$(".Messages > .row").html('<div class="twelve columns message"></div>');
	}


}
var self = Messages;


$(document).ready(function() { //pull each message and display in new boxes
	
	self.getAllMessages();

	$("#message-button").click(function(){
		var messageText = $("#message-text").val();		
		
		if (messageText != ""){ //check if input is empty
			Messages.addMessage(messageText);
		}
	});
});









