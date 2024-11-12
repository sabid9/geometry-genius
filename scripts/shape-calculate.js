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

/**
 * calculate Rhombus Area
 * 
 */
function calculateRhombusArea(){
    //find d1 of the rhombus
    const getRhombusD1 = document.getElementById('rhombus-d1')
    const getRhombusD1Value = getRhombusD1.value;
    const d1 = parseFloat(getRhombusD1Value);
    console.log(d1);

    // find d2 of the rhombus
    const getRhombusD2 = document.getElementById('rhombus-d2')
    const getRhombusD2Value = getRhombusD2.value;
    const d2 = parseFloat(getRhombusD2Value);
    console.log(d2);

    //calculate the Rhombus Area
    const rhombusArea = 0.5 * d1 * d2;
    console.log(rhombusArea);

    const showRhombusArea = document.getElementById('rhombus-result');
    showRhombusArea.innerText = rhombusArea;
    
    
}

/**
 * Calculate Pentagon Area
 * 
 */
function caculatePentagonArea(){
    //find p of the pentagon
    const getPentagonP = document.getElementById('pentagon-p');
    const getPentagonPValue = getPentagonP.value;
    const p = parseFloat(getPentagonPValue);
    console.log(p);
    

    //find b of the pentagon
    const getPentagonB = document.getElementById('pentagon-b');
    const getPentagonBValue = getPentagonB.value;
    const b = parseFloat(getPentagonBValue);
    console.log(b);

    //calculate pentagon area
    const pentagonArea = 0.5 * p * b;
    console.log(pentagonArea);

    const showPentagonArea = document.getElementById('pentagon-result');
    showPentagonArea.innerText = pentagonArea;
    
    
}

/**
 * Calculate Ellipse Area
 * 
 */
function caculateEllipseArea(){
    //find p of the Ellipse
    const getEllipseA = document.getElementById('ellipse-a');
    const getEllipseAValue = getEllipseA.value;
    const a = parseFloat(getEllipseAValue);
    console.log(a);
    

    //find b of the pentagon
    const getEllipseB = document.getElementById('ellipse-b');
    const getEllipseBValue = getEllipseB.value;
    const b = parseFloat(getEllipseBValue);
    console.log(b);

    //calculate pentagon area
    const ellipseArea = 3.1416 * a * b;
    console.log(ellipseArea);

    const showEllipseArea = document.getElementById('ellipse-result');
    showEllipseArea.innerText = ellipseArea;
    
    
}