//Задание 1:
const getIndex = (array, index) => {
    return array[index];
};
const myArray = [1,2,3];
const index = 1;
console.log(getIndex(myArray,index));

//Задание 2:

/*function getWeatherDesscription(weatherCode, decodeFunction){
    return decodeFunction(weatherCode);
};*/
/*function decodeWeatherCode (code){
    if (code === SQ){
        return "шквал";
    }
    else if (code === PO){
        return "пыльный вихрь";
    }
    else if (code === FC){
        return "торнадо";
    }
    else if (code === BR){
        return "дымка (видимость от 1 до 9 км)"
    }
    else if (code === HZ){
        return "мгла (видимость менее 10 км)"
    }
    else if (code === FU){
        return "дым (видимость менее 10 км)"
    }
    else if (code === DS){
        return "пыльная буря (видимость менее 10 км)"
    }
    else if (code === SS){
        return "песчаная буря (видимость менее 10 км)";
    }
    else {
        return "неизвестно"
    }
}

switch (expression){
    case value1:

}
const weatherCode = SQ;
const getweatherDesscription = getWeatherDesscription(weatherCode, decodeWeatherCode);
console.log(getweatherDesscription);*/

function decodeWeatherCode (code){
    switch (code) {
        case 1:
            return "SQ - шквал";
            
        case 2:
            return "PO - пыльный вихрь";

        case 3:
            return "FC - торнадо";

        case 4:
            return "BR - дымка (видимость от 1 до 9 км)";

        case 5:
            return "HZ - мгла (видимость менее 10 км)";

        case 6:
            return "FU - дым (видимость менее 10 км)";

        case 7:
            return "DS - пыльная буря (видимость менее 10 км)";

        case 8:
            return "SS - песчаная буря (видимость менее 10 км)";

            default:
                return "неизвестно"
    }
}
function getWeatherDesscription(weatherCode, decodeFunction){
    return decodeFunction(weatherCode);
}

const weatherCode = 5;
const weatherDesscription = getWeatherDesscription(weatherCode, decodeWeatherCode);
console.log(weatherDesscription);
