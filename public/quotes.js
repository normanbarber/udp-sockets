$(document).ready(function()
{
  	var quote_system = io.connect();
  	quote_system.on('connect', function(data){
  		$('.connected').html(data);
	});
  	quote_system.on('message', function(data){
  		$('.messages').append(data + '<br/><br/>');
	});
});
