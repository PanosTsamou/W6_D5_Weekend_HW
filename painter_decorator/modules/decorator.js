const Decorator = function(room){
    this.room = room
    this.stock = []
};

Decorator.prototype.addPaintInStock = function(paint){
    this.stock.push(paint)
};

Decorator.prototype.calculateTotalLiters = function(){
    let totalLiters = 0;
    for(paint of this.stock){
        totalLiters += paint.liters
    }
    return totalLiters
};

Decorator.prototype.enoughPaintForTheRoom = function(){
    const paintPerSquare = 0.5;
    const totalPaintForRoom = 0.5 * this.room.area;
    return totalPaintForRoom <= this.calculateTotalLiters()
};

Decorator.prototype.paintTheRoom = function(){
    if(this.enoughPaintForTheRoom()){
        this.room.painted = true
    }
};

module.exports = Decorator