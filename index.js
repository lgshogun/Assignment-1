/*
OK let's start:
I had a certain problem with carList as it was as a string and : (ie "carList": [...), so I switched to carList =, which the code easily recognized.

Soon after I had a lot of work in bringing the content to the html, I assembled and reassembled it, until I managed to split it into two (car1 and car2) from carList, then it made it much easier.

Then I took each content of each const and put it in the table (two lines of const for each block of the table), so basically it takes a JSON element and takes it to the id, then it replaces the content of the id with JSON element. Thus transforming the car table as shown in the html.
*/

{
       carList = [
          {
             "id":11,
             "make":"Ford",
             "model":"Escort",
             "color":"red",
             "price":5400.32
          },
          {
             "id":12,
             "make":"Chevrolet",
             "model":"Malibu",
             "color":"blue",
             "price":32400.10
          }
       ]
}

const car1 = carList[0];
const car2 = carList[1];

const car1make = document.querySelector('#car1make');
car1make.innerHTML = car1.make;

const car1model = document.querySelector('#car1model');
car1model.innerHTML = car1.model;

const car1color = document.querySelector('#car1color');
car1color.innerHTML = car1.color;

const car1price = document.querySelector('#car1price');
car1price.innerHTML = car1.price;


const car2make = document.querySelector('#car2make');
car2make.innerHTML = car2.make;

const car2model = document.querySelector('#car2model');
car2model.innerHTML = car2.model;

const car2color = document.querySelector('#car2color');
car2color.innerHTML = car2.color;

const car2price = document.querySelector('#car2price');
car2price.innerHTML = car2.price;