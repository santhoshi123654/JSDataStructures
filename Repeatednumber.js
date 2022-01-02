function repeatedNumbers(){
    let repeatedNumbersArray = [];
    for(i = 1; i <= 100; i++){
        if(i % 11 == 0){
            repeatedNumbersArray.push(i);
        }
    }
    console.log(`Repeated numbers from 1 to 100 are : ${repeatedNumbersArray}`);
}
repeatedNumbers();