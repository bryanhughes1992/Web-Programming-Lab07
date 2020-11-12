/* LAB 7-1 - FINAL COUNTDOWN!! */

//create page load listener
window.addEventListener("load", pageReady);

/******************************
	create page load function
*******************************/
function pageReady() {

	/************************************************
		create variables for required HTML elements
	*************************************************/

	//Variable for HTML span element named 'todayData'
	var dateSpan = document.getElementById('todayData');
	//Variable for HTML span element named 'finalData'
	var spanFinalData = document.getElementById('finalData');
	//Variable for HTML span element named 'dueData'
	var spanDueData = document.getElementById('dueData');

	/***********************************************
		create variables for now date and due date
	************************************************/

	//Instantiating a new Date() and storing it inside 'dateOne'
	var dateOne = new Date();
	//Setting a todaysDate variable to now in a string form
	todaysDate = dateOne.toDateString();
	//Setting the innerHTML to the 'todaysDate' variable
	dateSpan.innerHTML = todaysDate;

	//Instantiating a new Date() and initializing it to 11:59:59:59PM EST
	var dateTwo = new Date(2020, 12, 15, 23, 59, 59, 59);
	//Setting the innerHTML of the 'finalData' span to 'dateTwo' data
	spanFinalData.innerHTML = dateTwo;

	/*******************************************************
		CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	********************************************************/

	var daysUntilDue =
}




	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE