
/**
 * 
 */

// Rough sketch of app

// Say hello
// ask for path to csv file to add
// -- perhaps have a default folder where I can save the files, and the app will parse them automatically

// check each record to see if it matches an existing one
// sum the totals for each unique payee
// display the data

// So I'm going to want to...
// parse a filepath string
// parse the csv data in that file, into some handleable objects:
// payee = { name: '', amount: '', date: ''} ... seems all that's needed.

// I'm going to want an array of payee objects, probably just saved in plain text. 
// I'm going to want to call something like payees.add(newPayee)
// This function should check the newPayee against existing ones, and combine things
// if they are. 
// Advanced; be able to handle the payees that are unique each time, but have some chars in common.

// That's probably the hard part. Next I jsut want to be able to display this somehow. 
// Maybe even export it as csv and import it to excel for the graphability. 

const csv = require('./csv');

console.log(csv('thing'));