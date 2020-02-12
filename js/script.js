/** on() will add listeners for all potential future elements
/**when run the code for the first time we have only 3 static li's. so if add click listener to li this will **only add to thoes 3. So listeners are added to the entire ul parent. So any time clicked on the ul this **listener will fired except added the 2nd argument. this indicates when li is clicked inside of an ul then run **this code
**/
$("ul").on("click", "li", function(){
	// toggling state 
	$(this).toggleClass("done");
});

//click on X to delete To-do item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(580,function(){
		$(this).remove();
	});
	// The stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent handlers from being notified of the event
	event.stopPropagation();
});

// add items on keypress

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var item = $(this).val();
//		console.log(item);
		$(this).val("");
		$("ul").append("<li><span>X</span> " + item + "</li>");
		

	}
});