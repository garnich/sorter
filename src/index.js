class Sorter {
  constructor(arr) {
		this.arr=[];
		// your implementation


	  }
	  add(element) {
	  this.element=this.arr.push(element);
		// your implementation


	  }
	  at(index) {
		// your implementation
	return this.arr[index];

	  }
	  get length() {
		return this.arr.length;
		// your implementation
		

	  }
	  toArray() {
		// your implementation
		return this.arr;

	  }
	  sort(indices) {
    // your implementation
    var val;
		  var result = [];
		  for(val of indices) {
			result.push(this.arr[val]);
		  }
		  result.sort();
		  for(val of indices){
			this.arr[val]=result[val];
		  }
		  return  this.arr;

  }

  setComparator(compareFunction) {
    // your implementation
  }
}
let sorter = new Sorter();
module.exports = Sorter;
