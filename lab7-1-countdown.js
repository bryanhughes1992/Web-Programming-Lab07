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
	//Setting the innerHTML to the 'todaysDate' variable
	dateSpan.innerHTML = dateOne;

	//Instantiating a new Date() and initializing it to 11:59:59:59PM EST
	var dueDate = new Date(2020, 11, 15, 23, 59, 59, 59);
	//Setting the innerHTML of the 'finalData' span to 'dateTwo' data
	spanFinalData.innerHTML = dueDate;

	/**********************************************************************
		convert today and due date to milliseconds, subtract today from
		the due date. convert the difference to days. Set the appropriate
		html element to the value of this amount of days.
	***********************************************************************/

	// A value that represents today's date in
	var todaysDateMilliseconds = dateOne.getTime();

	// A value that represents the due date in milliseconds
	var dueDateMilliseconds = dueDate.getTime();

	// The difference between the due date and today, represented in milliseconds
	var amountOfTimeMilliseconds = dueDateMilliseconds - todaysDateMilliseconds;

	// Converting the above variable to days
	var amountOfTimeDays = amountOfTimeMilliseconds/86400000;
	//Setting the dueData span to the 'amountOfTimeDays' value;
	spanDueData.innerHTML = amountOfTimeDays;













}


	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE