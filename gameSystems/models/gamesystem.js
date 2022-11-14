GameSystems = {
    data: [
        {name: "Genesis", company: "Sega", obsolete: true},
        {name: "Playstation 5", company: "Sony", obsolete: false}
    ],
    getAll: function() { 
        return this.data
    },
    getOne: function(index){
        return this.data[index]
    }
}

module.exports = GameSystems

