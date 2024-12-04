const progressColor=document.querySelector('.progress-container__color')
const progressContainer = document.querySelector('.progress-container');
const controlsValue = document.querySelector('#value');
const controlsAnimated = document.querySelector('#animated');
const progressHide = document.querySelector('#hide');
let currentValue = 0;

function visibility(isHidden){
    progressContainer.style.display=isHidden ? 'none' : 'block'
}

function toogleAnimation(isAnimation){
    progressContainer.classList.toggle('animated', isAnimation);
}

function animatedProgress(targetValue){
    if(currentValue< targetValue){
        currentValue += 1;
        const angle = (currentValue / 100) * 360;
        progressColor.style.background = `conic-gradient(
            #ccc6c8 0deg, 
            #ccc6c8 ${angle}deg, 
            transparent ${angle}deg,
            transparent 360deg
        )`;

        requestAnimationFrame(() => animatedProgress(targetValue));
    }
    else if (currentValue > targetValue) {
        currentValue -= 1; 
        const angle = (currentValue / 100) * 360;

        progressColor.style.background = `conic-gradient(
            #ccc6c8 0deg, 
            #ccc6c8 ${angle}deg, 
            transparent ${angle}deg,
            transparent 360deg
        )`;

        requestAnimationFrame(() => animatedProgress(targetValue));
    }
}

function updateProgress(){
    let value=controlsValue.value
    value=Math.max(0, Math.min(100, value))
    animatedProgress(value);
}

progressHide.addEventListener('change', (e) =>{
    visibility(e.target.checked)
})

controlsAnimated.addEventListener('change', (e) => {
    toogleAnimation(e.target.checked);
});

controlsValue.addEventListener('input', updateProgress);

updateProgress()