var obj = {

};

obj.list = [];

var sorted_arry = [];

obj.fill_n_integers = function(n){

    for(var i = 1 ; i <= n ; i++){

        this.list.push(Math.ceil(Math.random() *100 ))

        
   
   }

}

obj.sort = function(list_arr){
    list_arr.sort();
    var sorted_arr = [];

        for (var i = 0; i < list_arr.length; i++) {
            var no = "" + list_arr[i];

            if (no.length == 1) {
                sorted_arr.push(parseInt(no));
            }

        }
        for (var i = 0; i < list_arr.length; i++) {
            var no = "" + list_arr[i];

            if (no.length == 2) {
                sorted_arr.push(parseInt(no));
            }

        }

       obj.list = sorted_arr;

}
obj.print = function(list_elements){

    const printNumbersForEvery2Sec = (n) => {
        for (let i = 0; i < n.length ; i++) {
          setTimeout(() => {
            console.log(n[i])
          }, i * 2000)
        }
      }
      printNumbersForEvery2Sec(list_elements);
    

}

module.exports = obj;