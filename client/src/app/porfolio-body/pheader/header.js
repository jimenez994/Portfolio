export class header{
    constructor(){
        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var canvas = document.querySelector('canvas');

        var ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var mouse = {
            x: undefined,
            y: undefined
        };

        window.addEventListener('resize', function () {
            init();
        });

        window.addEventListener('mouseout', function () {
            mouse = {
                x: undefined,
                y: undefined
            };
        });

        window.addEventListener('mousemove', function (e) {
            mouse = {
                x: e.x,
                y: e.y
            };
        });

        var Particle = function () {
            function Particle(x, y, r, dx, dy) {
                _classCallCheck(this, Particle);

                this.x = x;
                this.y = y;
                this.r = r;
                this.dx = dx;
                this.dy = dy;
                this.color = 'white';
            }

            _createClass(Particle, [{
                key: 'draw',
                value: function draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }, {
                key: 'update',
                value: function update() {
                    var t = getDistance(mouse, this);

                    if (this.x < 0 || this.x > canvas.width) {
                        this.dx = -this.dx;
                    }
                    if (this.y < 0 || this.y > canvas.height) {
                        this.dy = -this.dy;
                    }

                    if (mouse.x && mouse.y && t < 100) {
                        // t2 = a2 + b2
                        this.x += -(mouse.x - this.x) / (3 * t);
                        this.y += -(mouse.y - this.y) / (3 * t);
                    } else {
                        this.x += this.dx;
                        this.y += this.dy;
                    }

                    this.draw();
                }
            }]);

            return Particle;
        }();

        var particles = [];

        function init() {
            particles = [];
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            for (var i = 0; i < 100; i++) {
                var x = Math.random() * canvas.width;
                var y = Math.random() * canvas.height;
                var dx = Math.random() - 0.5;
                var dy = Math.random() - 0.5;
                var p = new Particle(x, y, 4, dx, dy);
                particles.push(p);
                p.draw();
            }
        }

        function drawMatrix() {
            particles.map(function (p1) {
                particles.map(function (p2) {
                    if (getDistance(p1, p2) < 50) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    }
                });
            });
        }

        function getDistance(p1, p2) {
            return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.map(function (p) {
                p.update();
            });
            drawMatrix();
        }

        init();
        animate();
    }
}