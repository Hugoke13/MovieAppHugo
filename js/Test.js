// function Test(x,y){
//     this.x = x;
//     this.y = y;
// }
// Test.prototype.printX = function(){
//     return `x is ${this.x}`;
// }
// Test.prototype.printY = function(){
//     return `y is ${this.y}`;
// }

// export default Test;


//------------------------

class Test{
    constructor(x,y){
        this.x = x;
        this.y = y;
        // this.el = document.querySelector('button')
        // this.setUpEvents();
    }
    printX(){
        return `x is ${this.x}`;
    }
    printY(){
        return `y is ${this.y}`;
    }
    // setUpEvents(){
    //     this.el.addEventListener('click',this.handleClick)
    // }
    // handleClick = (e)=>{
    //     this.el.parentElement;
    // }
}


export default Test;










