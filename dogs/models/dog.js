const Dog = {
    data: [
        {breed: "Pitbull", size: "Medium", isFrequentBarker: false},
        {breed: "Dachshund", size: "Small", isFrequentBarker: true}
    ],
    getAll: function() {
        return this.data
    },
    getOne: function(index) {
        return this.data[index]
    }
}

module.exports = Dog;