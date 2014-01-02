// 定义Rectangle类
function Rectangle( w, h ) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.area = function () {
    return this.width * this.height;
}

// 定义PositionedRectangle类，继承自Rectangle类
function PositionedRectangle( x, y, w, h ) {
    Rectangle.call( this, w, h );
    this.x = x;
    this.y = y;
}
PositionedRectangle.prototype = new Rectangle();
PositionedRectangle.prototype.constructor = PositionedRectangle;
PositionedRectangle.prototype.contains = function ( x, y ) {
    return ( x > this.x && x < this.x + this.width )
        && ( y > this.y && y < this.y + this.height );
}