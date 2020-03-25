title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

function withoutFormat(){
    console.log(title +" "+ name + " " + surname);
    console.log("ul. " + street);
    console.log(zip + " " + city);
    console.log(country.toUpperCase());
    console.log("");
}

function withFormat(){
console.log(`${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`)
}

withoutFormat();
withFormat();


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
