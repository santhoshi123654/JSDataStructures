
function birthMonth(){
    MAX_COUNT  = 50;
    count = 0;
    let jan = 0,feb = 0,mar = 0,april = 0,may = 0,june = 0,july = 0,august = 0,sept = 0,
	october = 0,novem= 0,dec = 0;
    while(true){

        if(count == MAX_COUNT){
            break;
        }

        let randomBirthMonth = Math.floor(Math.random() * 12 + 1);
        switch (randomBirthMonth) {
            case 1:
                jan++;
                break;
            case 2:
                feb++;
                break;
            case 3:
                mar++;
                break;
            case 4:
                april++;
                break;
            case 5:
                may++;
                break;
            case 6:
                june++;
                break;
            case 7:
                july++;
                break;
            case 8:
                august++;
                break;
            case 9:
                sept++;
                break;
            case 10:
               	october++;
                break;
            case 11:
                novem++;
                break;
            case 12:
                dec++;
                break;
            default:
                break;
        }
        count++;
    }
    let mapOfBirthMonths = new Map();
    mapOfBirthMonths.set(1,jan);
    mapOfBirthMonths.set(2,feb);
    mapOfBirthMonths.set(3,mar);
    mapOfBirthMonths.set(4,april);
    mapOfBirthMonths.set(5,may);
    mapOfBirthMonths.set(6,june);
    mapOfBirthMonths.set(7,july);
    mapOfBirthMonths.set(8,august);
    mapOfBirthMonths.set(9,sept);
    mapOfBirthMonths.set(10,october);
    mapOfBirthMonths.set(11,novem);
    mapOfBirthMonths.set(12,dec);

    console.log(mapOfBirthMonths);
}
birthMonth();
