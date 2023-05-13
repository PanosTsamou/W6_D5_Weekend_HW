const assert = require('assert');
const Room = require('../modules/room.js');


describe('Room', function(){

    let room1;

    beforeEach(function(){
        room1 = new Room(50);
    });

    it('should start not painted', function(){
        const actual = room1.painted;
        assert.strictEqual(actual,false);
    });

    it('should be able to be painted', function(){
        room1.paintTheRoom()
        const actual = room1.painted;
        assert.strictEqual(actual,true);
    });

})