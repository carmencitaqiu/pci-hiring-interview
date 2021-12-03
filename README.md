## PCI Interview
This is the coding interview for the PCI platform. It covers a wide range of technologies all used currently in the system, so will be quite important to show a certain level of fluency with them. I promise it will be fun, or at least less painful than most interviews :)... So, without further ado, let's get into it! 

*Estimated time to complete: <2 hours.*
## Table of contents

## Deliverable
You'll have to fork this repo and work on it, then provide me with access to the resulting repository, anything regarding the solution for a challenge should be inside their corresponding folders, if you want to deliver some explanations for example you can do it in comments or in a txt. It doesn't matter how you organize each folder inside.

Feel free to provide comments on your thought process at any given point. Including alternative solutions, or something you are not sure about.

> You can deliver less challenges than the proposed in this document, for example, only challenge 2. Though, it has to be a freaking good implementation :D

### Video
In addition to this, a recording of your screen (no audio) while reading the prompts and actually doing the challenge is expected. Don't worry if you have to google things while doing the challenge, it's actually expected to happen! Your approach to it is what matters.

> *Disclaimer: I, of course, can respect your privacy regarding this, so you have the option of not submitting a video recording. Is up to you.*

Now that you had this short introduction, is time to start your screen recorder and get going with the challenge.
## Some info

 - Some challenges will provide you with files. They can be located in this repository in the corresponding folder.
 - Even though explanations are as clear as I could get them. If you happen to have questions at any point, trust your instincts, go with what you feel is right, even if it feels like I must provide you that information or it will be impossible to continue. I will value this positively. It doesn't matter if the result is not what I might expect. Make this challenge yours.

## Challenge 1
This one will get you warmed up and hopefully you'll run through it!

*Estimated time to complete: 30min.*
### Statement
You are given two csv files, one with restaurants and the other with ratings. Restaurants and reviews can be linked with the key `placeID` .

### Goal
Your goal is to print the names of the top 5 restaurants together with their total ratings.

### Notes
 - Use the property `rating` from the ratings.csv file when calculating the total rating.  
 - Remaining properties from both files can be ignored.
 - You can use npm libraries, typescript, node, browser... Is up to you.

### Evaluation criteria

 1. Be able to provide the required list of restaurants.
 2. Engineer a solution that will **not take long to complete** if run with bigger files >1GB
 3. Follow best practices, use appropriate **data structures**.
 4. Bonus points if solution does not exhaust RAM  if run with bigger files >1GB... *stream \*wink\**

## Challenge 2
Hopefully the first challenge was easy and somewhat fun! Now you'll get your hands dirty with this following challenge. Not too long to code, but requires lots of thinking... Good luck.

*Estimated time to complete: 1hr.*
### Statement
We are given a MongoDB database with 2 collections, that have the following document structure *(they are also provided as typescript files in this repo)*:

*professor.ts*

```typescript
interface Professor {
	id: string;
	name: string;
	faculty: string;
	phone: string;
	email: string;
	subjects: {
		[name: string]: {
			professors: Professor[];
			students: Student[];
			lectures: [
				{
					date: Date;
					duration: number;
					classroom: string;
				}
			];
		};
	};
}
```
    
*student.ts*

```typescript
interface Student {
	id: string;
	name: string;
	degree: string;
	email: string;
	subjects: {
		[name: string]: {
			professors: Professor[];
			students: Student[];
			lectures: [
				{
					date: Date;
					duration: number;
					classroom: string;
				}
			];
		};
	};
}
```

A very common query is to display to the professors and students their schedule, basically display a calendar like google calendar with the slot taken by each lecture for each subject of any given month. 

Another common query is for the administrative staff to get all students enrolled in a certain subject, and also all the professors teaching it.

### Goal

 - Find any problems with current model and propose an alternative solution having the main queries in mind. You can propose additional collections. You can provide typescript interfaces or mongoose models, is unimportant.
 - Give statements for executing both queries, use mongoose. You can use aggregations. You can create a JS file for each query, name is unimportant. 

Example:

*query1.js*
```typescript
await SomeModel.findOne({ _id: someid })
```
OR

*query1.js*
```typescript
await SomeModel
.aggregate([  
    { $lookup:  
        {  
            from: "some_collection",  
			localField: "somefield",  
			foreignField: "somefield2",  
			as: "somekey",  
		}  
    },  
    {  
	    $match: {  
	        somefield: { $eq: 'somevalue' }  
	    }  
	}
])
```
### Notes
 - You **don't** have to actually execute the query, really don't. No need to setup a database for this, just provide the files required to the best of your ability. It doesn't have to even compile, I won't care about that. I probably won't be able to prevent you from doing it but is up to you, it won't be valued at all.
 - Feel totally free to search MongoDB documentation for help on query operators and such.

### Evaluation criteria

 1. Problems (or not) found in the initial approach. And how they are solved.
 2. The quality of the queries in terms of the approach, I won't care if it runs or not, only the thought put into it. Feel free to provide comments on your thought process.

## Challenge 3
I hope last challenge was not too challenging *(no pun intended :D)* and hope you are ready for this easy one, that only aims to test some of your angular knowledge.

*Estimated time to complete: 30min.*
### Statement
This is an Angular knowledge test, you should provide solutions to the tasks. They are stated in comments throughout the project. You'll know how to find them. They are a total of 10. Do them in order.

### Goal
Solve all tasks, and the project should compile without errors at the end.

### Notes
- Run fast through this, really, don't go crazy adding things not asked for, they won't be valued. Only important thing is the approach to those simple tasks. 
- Some tasks are very easy *(don't want to keep burning you :D)* and there's only one approach to them, don't overthink them.

### Evaluation criteria

 1. Project compiles and solves the tasks.
 2. Quality of the solutions, but don't go crazy! Just show that you understand Angular, that will be enough.
 3. *Bonus:* Use of advanced Angular techniques *(here you can flex those decorators, RxJS operators, route guards...)* if you want.

## Outro
Now that you've got all those silly challenges, is time to submit your masterpiece! Send me a link (or access if private) to your fork of this repository, I will get back to you with the results..! 

Don't forget to upload the video to the corresponding folder!

A personal thank you for participating in this interview, hope it was any interesting, it is a pleasure to have you here this far.

Please have a nice day/night, 

> Eduardo Fernandes

