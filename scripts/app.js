const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const slide = document.querySelector('.img-container');

const imgList = ['img-1', 'img-2', 'img-3'];
let counter = 0;

slide.classList.add(imgList[counter]);

btnRight.onclick = () => {
    slide.classList.remove(imgList[counter]);
    counter += 1
    if (counter >= imgList.length){
        counter = 0
    }
    slide.classList.add(imgList[counter]);
};

btnLeft.onclick = () => {
    slide.classList.remove(imgList[counter]);
    counter += -1
    if (counter < 0){
        counter = imgList.length -1
    }
    slide.classList.add(imgList[counter])

};
