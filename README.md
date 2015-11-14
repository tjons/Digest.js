#Digest.js
######My first experiment writing a JS library. Light-weight, dependency-free, no-fat-no-frills Publish/Subscribe

####What is Digest.js?
Look up. Those words describe the essence of Digest.js, but in case you haven't had your fill of buzzwords yet, Digest.js is an **open-source, light-weight, dependency-free, no-fat-no-frills Publish/Subscribe library for Javascript environments**. Digest.js should work in *any* Javascript environment, including **Node.js** (untested) and the **browser** (tested in recent Chrome). 

####How can I use it?
Simply add `Digest.js` to your HTML page, or import it with a script loader like require.js. It instantiates itself, and then attaches itself to the global variable `Digest`. Look at the [example](http://github.com/tjons/Digest.js/example) for more.

####Usage example
```
//Subscribe to the "arrived" topic
//When the topic comes in, the function
//will be called
Digest.sub("arrived", function (data) {
	console.log("the journey to" + data + " is over");
});

//Publish the "arrived" topic
Digest.pub("arrived", "Washington, DC"); 
//console.logs "the journey to Washington, DC is over"

```

####Why did you write *yet another* Publish/Subscribe library for Javascript?

I thought there weren't enough already. Just kidding! Seriously, I wrote Digest.js for two reasons:

- Practice. I'm looking to build a portfolio and expand my knowledge of **object-oriented Javascript**.
- Issues while another Javascript Publish/Subscribe library (that turned out to not be related to the library. *#faceplant*)

####Looks like you've put some effort in, but this could use some more work before it's ready for prime-time.

Yep. The future for Digest.js looks interesting: it needs (loads of) testing, (some) refactoring, and (complete) documentation. I see two roads for Digest.js: either I will chip away at these issues, or it will languish in the dark, unexplored corners of my Github. If you find it helpful, let me know - that would motivate me to do more development!




