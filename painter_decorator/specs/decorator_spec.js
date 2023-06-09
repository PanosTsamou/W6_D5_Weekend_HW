const assert = require('assert');
const Decorator = require('../modules/decorator.js');
const Room = require('../modules/room.js');
const Paint = require('../modules/paint.js');
const { constants } = require('buffer');

describe('Decorator', function(){

    let decorator
    let room
    let paint1
    let paint2
    let paint3
    beforeEach(function(){
        room = new Room(80);
        paint1 = new Paint(10);
        paint2 = new Paint(10);
        paint3 = new Paint(30);
        decorator = new Decorator(room)
    });


    it('should be able to add a can of paint to paint stock',function(){
        decorator.addPaintInStock(paint1);
        const actual = decorator.stock;
        const expect = [paint1];
        assert.deepStrictEqual(actual,expect);
    });

    it('should be able to calculate total litres paint it has in stock',function(){
        decorator.addPaintInStock(paint1);
        decorator.addPaintInStock(paint2);
        decorator.addPaintInStock(paint3);
        const actual = decorator.calculateTotalLiters();
        const expect = 50;
        assert.strictEqual(actual,expect);
    });

    it('should be able to calculate whether is has enough paint to paint a room',function(){
        decorator.addPaintInStock(paint1);
        decorator.addPaintInStock(paint2);
        decorator.addPaintInStock(paint3);
        const actual = decorator.enoughPaintForTheRoom();
        const expect = true;
        assert.strictEqual(actual,expect);
    });

    it('should be able to paint room if has enough paint in stock',function(){
        decorator.addPaintInStock(paint1);
        decorator.addPaintInStock(paint2);
        decorator.addPaintInStock(paint3);
        decorator.paintTheRoom()
        const actual = decorator.room.painted;
        const expect = true;
        assert.strictEqual(actual,expect);
    });

    it('should be able to decrease amount of paint in stock when painting a room',function(){
        decorator.addPaintInStock(paint1);
        decorator.addPaintInStock(paint2);
        decorator.addPaintInStock(paint3);
        decorator.paintTheRoom()
        decorator.reduceThePaint()
        const actual1 = decorator.room.painted;
        const expect1 = true;
        const actual2 = decorator.calculateTotalLiters()
        const expect2 = 10
        assert.strictEqual(actual1,expect1);
        assert.strictEqual(actual2,expect2);
    });
    it('should be able to remove empty paint cans from stock',function(){
        decorator.addPaintInStock(paint1);
        decorator.addPaintInStock(paint2);
        decorator.addPaintInStock(paint3);
        decorator.paintTheRoom()
        decorator.reduceThePaint()
        decorator.removeEmptyCansOfPaint()
        const actual1 = decorator.room.painted;
        const expect1 = true;
        const actual2 = decorator.stock
        const expect2 = [paint3]
        assert.strictEqual(actual1,expect1);
        assert.deepStrictEqual(actual2,expect2);
    });

});