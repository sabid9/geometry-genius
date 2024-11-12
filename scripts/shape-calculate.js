/**
 * Calculate Triangle Area
 * Step-1 Find the value of the base
 * a- set an Id for input field of the base.
 * b- get the value by using get element by id.
 * c- make the value as number using parsefloat.
 * 
 * Step-2 Following the step one find the height value from height input field.
 * Step-3 Calculate final result using formula.
 */


function calculateTriangleArea(){
    //find the base value
   const getTriangleBase = document.getElementById('triangle-base');
   const getBaseValue = getTriangleBase.value;
   const base = parseFloat(getBaseValue);
   console.log(base);
    //find the height value
    const getTriangleHeight = document.getElementById('triangle-height');
    const getHeightValue = getTriangleHeight.value;
    const height = parseFloat(getHeightValue);
    console.log(height);

    const triangleArea = 0.5 * base * height;
    console.log("Calculated area is: ",triangleArea );

    const showTriangleResult = document.getElementById('triangle-result');
    showTriangleResult.innerText = triangleArea;
}

/**
 * Caculate Rectangle Area
 * 
 */

function caculateRectangleArea(){
    // find the legnth of the rectangle
    const getRectangleLegnth = document.getElementById('rectangle-length');
    const lengthValue = getRectangleLegnth.value;
    const length = parseFloat(lengthValue);
    console.log(length);

    //find the width
    const getRetangleWidth = document.getElementById('rectangle-width');
    const widthValue = getRetangleWidth.value;
    const width = parseFloat(widthValue);
    console.log(width);
    
    //caculate the rectangle area
    const rectangleArea = length * width;
    console.log(rectangleArea);

    const showRectangleArea = document.getElementById('rectangle-result');
    showRectangleArea.innerText = rectangleArea;
}

/**
 * Calculate Parallelogram Area
 * 
 */

function caculateParallelogramArea(){
    // Find the Base
    const getParallelogramBase = document.getElementById('parallelo-base');
    const getBaseValue = getParallelogramBase.value;
    const base = parseFloat(getBaseValue);
    console.log(base);

    //Find the height
    const getParallelogramHeight = document.getElementById('parallelo-height');
    const getHeightValue = getParallelogramHeight.value;
    const height = parseFloat(getHeightValue);
    console.log(height);

    // calculate the area
    const parallelogramArea = base * height;
    console.log(parallelogramArea);

    const showParallelogramResult = document.getElementById('parallelo-result');
    showParallelogramResult.innerText = parallelogramArea;
}
