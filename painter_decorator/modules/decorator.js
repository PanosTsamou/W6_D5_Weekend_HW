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

Decorator.prototype.reduceThePaint = function(){
    let neededPaint = 0.5 *this.room.area;
    if (this.room.painted){
        this.stock.forEach((paint) => {
            if(paint.liters <= neededPaint){
                neededPaint -= paint.liters;
                paint.liters = 0
                paint.empty = true
            }else{
                paint.liters -= neededPaint;
                neededPaint = 0
            };
        });
    };

    Decorator.prototype.removeEmptyCansOfPaint = function(){
        const newStock = this.stock.filter((paint) => !(paint.empty))
        this.stock = newStock
    }
}

module.exports = Decorator