function Amplification(ele) {
    this.ele = document.querySelector('.' + ele);
    // console.log(this.ele);
    this.init();
}
Amplification.prototype = {
    constructor: Amplification,
    init() {
        this.SmallMove();
    },
    SmallMove() {
        this.span = this.ele.querySelector('.span');
        this.smallimg = this.ele.querySelector('.smallimg');
        this.bigimg = this.ele.querySelector('.bigimg');
        this.bigimgbox = this.ele.querySelector('.bigimgbox');
        // console.log(this.bigimg);
        // console.log(this.span);
        let _this = this;
        this.smallimg.onmousemove = function (e) {
            _this.span.style.display = 'block';
            _this.bigimgbox.style.display = 'block';
            _this.span.style.left = e.clientX - 120 + 'px';
            _this.span.style.top = e.clientY - 120 + 'px';
            this.smallleft = _this.span.offsetLeft;
            this.smalltop = _this.span.offsetTop;
            if(this.smallleft<=0){
                _this.span.style.left = 0 +'px';
            }
            if(this.smallleft>=240){
                _this.span.style.left = 240 +'px';
            }
            if(this.smalltop<=0){
                _this.span.style.top = 0 +'px';
            }
            if(this.smalltop>=240){
                _this.span.style.top = 240 +'px';
            }
            // _this.bigleft = -(this.smallleft / 200).toFixed(2)+'%';
            _this.bigleft = -(parseInt(_this.span.style.left) *2)+'px';
            _this.bigtop = -(parseInt(_this.span.style.top) *2)+'px';
            console.log(_this.bigleft);
            // _this.bigtop = -this.smalltop / 200*100%;
            // console.log(_this.bigimg);
            _this.bigimg.style.backgroundPositionX = (_this.bigleft);
            _this.bigimg.style.backgroundPositionY = (_this.bigtop);
            console.log(_this.span.style.left);
        }
        this.smallimg.onmouseout = function (){
            _this.span.style.display = 'none';
            _this.bigimgbox.style.display = 'none';
        }
    },
    BigMove() {

    }
}
