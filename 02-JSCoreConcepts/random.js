getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

showArray = (a) => {
    console.log(a);
}

randomArray = [];
for (i = 0; i< 10; i++){
    randomArray.push(getRandomNumber(5,20))
}

showArray(randomArray);