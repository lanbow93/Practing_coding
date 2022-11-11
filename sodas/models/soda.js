const Soda = {
    data: [
        {name: "Orange Soda", color: "orange", readyToSell: true},
        {name: "Rootbeer", color: "brown", readyToSell: false}
    ],
    getAll: function(){
        return this.data; //Return this objects data
    },
    getOne: function(index){
        return this.data[index]
    }
}

module.exports = Soda
