const assert = require('assert');
const Paint = require('../modules/paint.js');


describe('Paint', function(){

    let paint1
    beforeEach(function(){
        paint1 = new Paint(5);
    });

    it('should be able to check if it is empty', function(){
        const actual = paint1.empty;
        assert.strictEqual(actual,false);
    });
    
    it('should be able to empty itself', function(){
        paint1.emptyPaint()
        const actual = paint1.empty;
        assert.strictEqual(actual,true);
    });
});