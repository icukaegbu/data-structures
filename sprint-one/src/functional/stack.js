var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  //basic properties
  //keep track of size; 
  //var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
     //Add element to storage, using length as key
    storage[size] = value;
        
    //increment length
    size++;
  };

  someInstance.pop = function(){
       //test length is not 0
    //debugger;
    
    if(size <= 0){
      return undefined;
    }

    size--;
    var item = storage[size];
    delete storage[size];

    //Get the item at the top 
    

    

    return item;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};