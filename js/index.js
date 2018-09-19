//DATA

var data = [];
var alld = [{"id":0,"dateC":"2018 jenn-09-06T21:35:21.443Z"},{"id":1,"dateC":"2011-09-07T21:35:21.443Z"},{"id":2,"dateC":"2010-09-08T21:35:21.443Z"},{"id":3,"dateC":"2018-09-09T21:35:21.443Z"},{"id":4,"dateC":"2011-09-10T21:35:21.443Z"},{"id":5,"dateC":"1018-09-11T21:35:21.443Z"},{"id":6,"dateC":"1918-09-12T21:35:21.443Z"},{"id":7,"dateC":"1818-09-13T21:35:21.443Z"},{"id":8,"dateC":"2015-09-14T21:35:21.443Z"},{"id":9,"dateC":"2013-09-15T21:35:21.443Z"}]
//console.log(alld)

for(var i=0;i<10;i++){
		    var newdate = new Date();


    newdate.setDate(newdate.getDate() + i);
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
	data[i]={id:i,dateC: newdate};

}
// console.log(data)
// console.log(JSON.stringify(data))


data.sort(function(a, b) {
    var dateA = new Date(a.dateC), dateB = new Date(b.dateC);
    return dateA - dateB;
});

//Add one day to Date
function addDay(){
	    var newdate = new Date();


    newdate.setDate(newdate.getDate() + 3);
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
    return newdate;
}

var jgo =  3;
var ein =  4;
//console.log(`${jgo}+${ein}=${jgo+ein}`)

const developer = {name:'JGO', age:30, gender:'F'}

const valuesJ = Object.values(developer)
// console.log(valuesJ)
// console.log(valuesJ.length)

//ES2017

alld.sort(function(a, b) {
    var dateA = new Date(a.dateC), dateB = new Date(b.dateC);
    return dateA - dateB;
});

//console.log(alld)

//Object.entries()
for(i in alld){
    for(let [key,value] of Object.entries(alld[i])){
        //console.log(`key: ${key} value:${value}`)
    }
}
//new Map
for(i in alld){
    const map = new Map(Object.entries(alld[i]))
   // console.log(map)
}

//padStart 
const numbersStart = [0,1,12,123,1234,12345,123456].map(num =>num.toString().padStart(10,'0'));
//padEnd
const numbersEnd = [0,1,12,123,1234,12345,123456].map(num =>num.toString().padEnd(10,'/'));

// console.log(numbersStart)
// console.log(numbersEnd)

//ASYNC/AWAIT
async function getTotalHoursWorked(developerId){
    var dev =  await getDev(developerId);
    console.log(dev)
    var devSalary =  await getNetSalary(dev);
    console.log(devSalary)
}

//getTotalHoursWorked('1')

function getDev(developerId){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('JGO');
        },1000);
    });
}

function getNetSalary(dev){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(dev == 'JGO'){
                resolve('$10,000');
            }else{
                reject('unknown Dev');
            }
        },1000)
    })
}

async function doubleSalary(a,b){
    a =await doubleSalaryInOneWeek(a);
    b =await doubleSalaryInOneWeek(b);
    return a + b;
}
async function doubleSalaryPromiseall(a,b){
    [a,b] =  await Promise.all([doubleSalaryInOneWeek(a),doubleSalaryInOneWeek(b)]) 
    return a + b;
}

//doubleSalary(7000,20000).then(console.log)
//doubleSalaryPromiseall(7000,20000).then(console.log)

function doubleSalaryInOneWeek(param){
    return new Promise(resolve => {
        setTimeout(resolve(param*3),3000);
    });
}

const promises =  [
    new Promise(resolve=> resolve(1)),
    new Promise(resolve=> resolve(2)),
    new Promise(resolve=> resolve(3))
];

async function test1(){
    for(const obj of promises){
        console.log(obj)
    }
}
async function test2(){
    for await (const obj of promises){
        console.log(obj)
    }
}

// test1()
// test2()
var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });

//console.time("Promise.All");
var promisesArr = []
promisesArr.push(promiseTRSANSG(1));
promisesArr.push(promiseTRSANSG(4));
promisesArr.push(promiseTRSANSG(2));
var handleAllPromises = Promise.all(promisesArr);
handleAllPromises.then(function(values) {
    console.timeEnd("Promise.All");
   // console.log("All the promises are resolved", values);
  });


  handleAllPromises.catch(function(reason) {
    console.log("One of the promises failed with the following reason", reason);
  });

  const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );
  
//   wait(200)
//     // onFulfilled() can return a new promise, `x`
//     .then(() => new Promise(res => res('JENNIFER')))
//     // the next promise will assume the state of `x`
//     .then(a => a)
//     // Above we returned the unwrapped value of `x`
//     // so `.then()` above returns a fulfilled promise
//     // with that value:
//     .then(b => console.log(b)) // 'foo'
//     // Note that `null` is a valid promise value:
//     .then(() => null)
//     .then(c => console.log(c)) // null
//     // The following error is not reported yet:
//     .then(() => {throw new Error('JENNIFER');})
//     // Instead, the returned promise is rejected
//     // with the error as the reason:
//     .then(
//       // Nothing is logged here due to the error above:
//       d => console.log(`d: ${ d }`),
//       // Now we handle the error (rejection reason)
//       e => console.log(e)) // [Error: foo]
//     // With the previous exception handled, we can continue:
//     .then(f => console.log(`f: ${ f }`)) // f: undefined
//     // The following doesn't log. e was already handled,
//     // so this handler doesn't get called:
//     .catch(e => console.log(e))
//     .then(() => { throw new Error('bar'); })
//     // When a promise is rejected, success handlers get skipped.
//     // Nothing logs here because of the 'bar' exception:
//     .then(g => console.log(`g: ${ g }`))
//     .catch(h => console.log(h)) // [Error: bar]
//   ;


  const arr = [
    {label: 'All', value: 'All'},
    {label: 'All', value: 'All'},
    {label: 'Alex', value: 'Ninja'},
    {label: 'Bill', value: 'Op'},
    {label: 'Cill', value: 'iopop'},
    {label: 'Bill', value: 'Op'},
    {label: 'Cill', value: 'iopop'},
    {label: 'Cill', value: 'iopop'},
    {label: 'Bill', value: 'Op'},
    {label: 'Cill', value: 'iopop'},
    {label: 'Cill', value: 'iopop'},
    {label: 'All', value: 'All'},
    {label: 'Cill', value: 'iopop'},
]
//console.log(arr)
var result = arr.reduce((unique, o) => {
    if(!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
},[]);
//console.log(result);



var remoted = {
    "_id": "mge3_i1-4",
    "_rev": "3-ad33284658bcdf970927868c34ace86a",
    "canvas": {},
    "notes": {
      "0": {
        "x": 410.76522425435434,
        "y": 541.7257930190958,
        "value": "oi",
        "creationD": "2018-09-18T20:04:21.391Z"
      },
      "1": {
        "x": 410.76522425435434,
        "y": 541.7257930190958,
        "value": "çç",
        "creationD": "2018-09-18T20:04:41.603Z"
      },
      "2": {
        "x": 410.76522425435434,
        "y": 541.7257930190958,
        "value": "oi",
        "creationD": "2018-09-18T20:04:21.391Z"
      },
      "3": {
        "x": 410.76522425435434,
        "y": 541.7257930190958,
        "value": "çç",
        "creationD": "2018-09-18T20:04:41.603Z"
      }
    }
  }
  //console.log(remoted)
 // var result  =  remoted.notes

//   for(var a in remoted.notes){
//       console.log(remoted.notes)
//   }

  



// var docArrrr = { notes: [] }
// console.log(result);


// for (var yea in result) {


//     docArrrr.notes.push(result[yea])

// }
// console.log(docArrrr);
//   var reducedValues = docArrrr.notes.reduce((unique, o) => {
//     if(!unique.some(obj => obj.x === o.x && obj.y === o.y && obj.value === o.value)) {
//       unique.push(o);
//     }
//     return unique;
// },[]);

// console.log(reducedValues);

var dataPouch = {
    "_id": "mge3_i1-1",
    "_rev": "5-4a320e0dca3c56ae9d5922b90d57969b",
    "canvas": {
    },
    "notes": {
      "0": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "1": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "2": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "3": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "4": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "5": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "6": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "7": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "8": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "9": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "10": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "11": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "12": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "13": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "14": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "15": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "16": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "17": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "18": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "19": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "20": {
        "x": "80.76522425435434",
        "y": "92.72579301909582",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "21": {
        "x": "630.6606939543103",
        "y": "121.46152113943833",
        "value": "nota p1 opera",
        "creationD": "2018-09-19T12:55:18.801Z"
      },
      "22": {
        "x": "97.76522425435434",
        "y": "915.7257930190958",
        "value": "nota pa 1 firiirreee",
        "creationD": "2018-09-19T12:55:24.912Z"
      },
      "23": {
        "x": "672.6606939543103",
        "y": "958.4615211394383",
        "value": "notap pag 1 @@@@@@@ firefox",
        "creationD": "2018-09-19T12:55:24.912Z"
      }
    }
  }

function notesToArray(object){
  //  console.log(object)
    var rArr = [];
    for (var yea in object) {


        rArr.push(object[yea])
    
    }
    return rArr;
}
var rw = notesToArray(dataPouch.notes);
//console.log(rw)

  var reducedValues = rw.reduce((unique, o) => {
    if(!unique.some(obj => obj.x === o.x && obj.y === o.y && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
},[]);

//console.log(reducedValues);

function notesToObject(values){

    dataPouch.notes = {}

    for(var nts in values){
        console.log(values[nts])
        dataPouch.notes[nts]=values[nts]
    }
    return dataPouch;
}

var procesedData = notesToObject(reducedValues)
console.log(procesedData)


