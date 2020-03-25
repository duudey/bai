// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
let heron = (a, b, c) => {
    p= (a + b + c)/2
    Pole = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${Pole}.`)
};

heron(a, b, c);