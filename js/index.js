//DATA

var data = [];
var alld = [{"id":0,"dateC":"2012-09-06T21:35:21.443Z"},{"id":1,"dateC":"2011-09-07T21:35:21.443Z"},{"id":2,"dateC":"2010-09-08T21:35:21.443Z"},{"id":3,"dateC":"2018-09-09T21:35:21.443Z"},{"id":4,"dateC":"2011-09-10T21:35:21.443Z"},{"id":5,"dateC":"1018-09-11T21:35:21.443Z"},{"id":6,"dateC":"1918-09-12T21:35:21.443Z"},{"id":7,"dateC":"1818-09-13T21:35:21.443Z"},{"id":8,"dateC":"2015-09-14T21:35:21.443Z"},{"id":9,"dateC":"2013-09-15T21:35:21.443Z"}]

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
//console.log(newdate)

    newdate.setDate(newdate.getDate() + 3);
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
    return newdate;
}

alld.sort(function(a, b) {
    var dateA = new Date(a.dateC), dateB = new Date(b.dateC);
    return dateA - dateB;
});

console.log(alld)