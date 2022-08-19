// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
  
  let first2 =[]
 first2=  first2.concat(drivers)
  first2.pop()
  first2.pop()
console.log(first2)
// console.log(drivers)
  return first2;

}
returnFirstTwoDrivers(drivers)
const returnLastTwoDrivers = function (drivers){
  let last2 = []
  last2 = last2.concat(drivers) 
  last2.shift();
  last2.shift();
  console.log(last2);

  return last2;
  }
  returnLastTwoDrivers(drivers)

  const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

  function createFareMultiplier(){
    return  function (num) {
      let multiplied = num * 5
      console.log(multiplied)
      return multiplied;

    };
  }createFareMultiplier()(5);

  const fareDoubler = function (fare){
   let doubledFare =fare * 2;
   console.log(doubledFare)
  return  doubledFare;
  }
  fareDoubler(10)

  const fareTripler = function (fare){
    let tripleFare = fare * 3
    console.log(tripleFare)
    return tripleFare;
  }
  fareTripler(12);

function selectDifferentDrivers(drivers,fun){
let slctDfDr = fun(drivers)
return slctDfDr;
  }
selectDifferentDrivers(drivers,returnFirstTwoDrivers)
selectDifferentDrivers(drivers,returnLastTwoDrivers)
