var ball = function (x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.angleX = 0;
    this.angleY = 0;
    this.angleZ = 0;
    this.speed = 0;

    this.getAngleX = function () {
        return this.angleX;
    };
    this.getAngleY = function () {
        return this.angleY;
    };
    this.getAngleZ = function () {
        return this.angleZ;
    };
    this.setAngleX = function (angle) {
        this.angleX = angle;
    };
    this.setAngleY = function (angle) {
        this.angleY = angle;
    };
    this.setAngleZ = function (angle) {
        this.angleZ = angle;
    };

    this.render = function (canvas) {
        var ctx = canvas.getContext("2d");
        canvasCtx.beginPath();
        canvasCtx.arc(95, 50, 40, 0, 2 * Math.PI);
        canvasCtx.stroke();
    };
};


var pane = function () {

};


var threeDPong = function () {

    this.start = function (canvas) {
        var ctx = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        var b = new ball(width / 2, height / 2, 0);
        b.render(canvas);
    };

};

