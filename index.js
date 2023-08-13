let Names = ["علي", "سماح", "خالد", "فهد", "محمد"] // This is The Main Array 
console.log(Names);
console.log("-----------------------------Task One: Print Only The Third Name----------------------------");
console.log(Names.slice(2,3)); // Slice is Used to print a "unique" Tag
console.log("--------------------Task Two: Add A New Name From The Start Of The Array--------------------");
console.log(Names.unshift("احمد")); // unshift is Used to Add a "unique" name/Tag to the start of the array
console.log(Names);
console.log("--------------------Task Three: Add A New Name From The End Of The Array--------------------");
console.log(Names.push("سعد")); // Push is Used to Add a "unique" Name/Tag To The End Of The Array
console.log(Names);
console.log("--------------------Task Four: Remove A Name From The Start Of The Array--------------------");
console.log(Names.shift()); // Shift Is Used To Remove A Name/Tag From The Start Of The Array
console.log(Names);
console.log("--------------------Task Five: Remove A Name From The End Of The Array--------------------");
console.log(Names.pop()); // Pop Is Used To Remove A Name/Tag From The End Of The Array
console.log(Names);
console.log("-----------------------------------------The End------------------------------------------");
