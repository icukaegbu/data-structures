// var makeStack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

//   //define object
//   var obj = Object.create(stackMethods);
//   obj.length = 0;
//   return obj;
// };

// var stackMethods = {
//   push: function(value){
//     //add to the top of stack using length
//     this[this.length] = value;

//     //increment length
//     this.length++;
//   },

//   pop: function(){
//     //Check if empty
//     if(this.length <= 0){
//       return undefined;
//     }
//     //retrieve the topmost element
//     var item = this[this.length-1];

//     //decrement length
//     this.length--;

//     delete this[this.length];

//     return item;
//   },

//   size: function(){
//     return this.length;
//   }
// };


// var makeStack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

//   //define object
//   var obj = Object.create(makeStack.stackMethods);
//   obj.length = 0;
//   return obj;
// };

// var stackMethods = {};
// makeStack.stackMethods = stackMethods;

// makeStack.stackMethods.push = function(value){
//     //add to the top of stack using length
//     this[this.length] = value;

//     //increment length
//     this.length++;
//   };
// makeStack.stackMethods.pop = function(){
//     //Check if empty
//     if(this.length <= 0){
//       return undefined;
//     }
//     //retrieve the topmost element
//     var item = this[this.length-1];

//     //decrement length
//     this.length--;

//     delete this[this.length];

//     return item;
//   };

// makeStack.stackMethods.size= function(){
//     return this.length;
//   };

var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //define object
  var obj = Object.create(stackMethods);
  obj.length = 0;
  return obj;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
    //add to the top of stack using length
    this[this.length] = value;

    //increment length
    this.length++;
  };
makeStack.stackMethods.pop = function(){
    //Check if empty
    if(this.length <= 0){
      return undefined;
    }
    //retrieve the topmost element
    var item = this[this.length-1];

    //decrement length
    this.length--;

    delete this[this.length];

    return item;
  };

makeStack.stackMethods.size= function(){
    return this.length;
  };



