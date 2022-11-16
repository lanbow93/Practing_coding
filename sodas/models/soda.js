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
    },
    create: function(newSoda) {
        this.data.push(newSoda)
    },
    update: function(index, updates) {
        this.data[index] = updates
    }
}

module.exports = Soda
