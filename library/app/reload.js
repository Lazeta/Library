let prevWidth = window.innerWidth; //запомнили старую ширину экрана
let prevHeight = window.innerHeight; //запомнили старую высоту экрана
// let prevViewportWidth = window.visualViewport.width; //запомнили старую ширину экрана
// let prevViewportHeight = window.visualViewport.height; //запомнили старую высоту экрана
const tabletWidth = 768;
const laptopWidth = 1024;
const desktopWidth = 1440;

window.addEventListener('resize', function() {
    let currentWidth = window.innerWidth; // получаем текущую ширину экрана
    let currentHeight = window.innerHeight; // получаем текущую высоту экрана
    // let currentViewportWidth = window.visualViewport.width; // получаем текущую ширину экрана
    // let currentViewportHeight = window.visualViewport.height; // получаем текущую высоту экрана
    let widthChange = Math.abs(currentWidth - prevWidth); // вычисляем ширину изменений
    let heightChange = Math.abs(currentHeight - prevHeight); // вычисляем высоту изменений
    // let viewportWidthChange = Math.abs(currentWidth - prevViewportWidth) // вычисляем ширину изменений
    // let viewportHeightChange = Math.abs(currentViewportHeight - prevViewportHeight) // вычисляем высоту изменений

    if(currentWidth >= desktopWidth - 20 && currentWidth <= desktopWidth){
        this.location.reload(); 
    }
    else if(currentWidth >= laptopWidth - 20 && currentWidth <= laptopWidth){
        this.location.reload(); 
    }
    else if(currentWidth >= tabletWidth - 20 && currentWidth <= tabletWidth){
        this.location.reload(); 
    }
})