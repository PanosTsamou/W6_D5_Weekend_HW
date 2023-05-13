const Paint = function(liters){
    this.liters = liters;
    this.empty = false;
};

Paint.prototype.emptyPaint = function(){
    this.empty = true;
}

module.exports = Paint