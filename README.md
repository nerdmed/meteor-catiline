#Cataline 


Catiline.js is a JavaScript library all about workers. Workers should make your life easier, not harder, and with Catiline.js launching a new worker is as simple as calling a function. It works the same across all (modern) browsers.

How easy is it?

## Create a Worker

	var worker = cw(myFunc(data))

## Send Data to your Worker

	var response = worker.data(YOUR DATA);

The response is a promise. It's that easy. 

## Quick Example

	var worker = cw(function(text){
	  return 'Hello ' + text;
	});

	worker.data('World').then(function(result){
	  console.log(result);
	})

	-> Hello World


For more in-depth usage, checkout the [API Docs](http://catilinejs.com/#API)