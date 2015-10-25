// --------- To test query in .js -----------

/************** INCOMPLETE *************

1. https://www.clusterpoint.com/docs/?page=Reference&language=REST -> Check Methods

**/


var rest = require('restler');
//var config = require('./config');

// var products = [
//                 {'name' : 'Apple',  'price' : 2.3, descr : 'Very tasty from Latvia'},
//                 {'name' : 'Orange', 'price' : 5, descr : 'Special for juice'},
//                 {'name' : 'Mango',  'price' : 9, descr : 'Ice cream with mango... Mhmm...'},
//                 {'name' : 'Banana', 'price' : 3, descr : 'Good after workout'}
//                 ];

// var records = [];
// var max_records = 1000;

// for (i = 0; i < max_records; i++)
// {
//     var prod = products[rnd(products.length)];
//     prod.count = rnd(30)+1;
//     records.push(prod);
// }

var query = "SELECT * FROM userDB";

rest.post('https://api-us.clusterpoint.com/v4/' + config.account_id + '/' + config.database + '/_query', {
  username: config.username,
  password: config.password,
  data: JSON.stringify(records)
}).on('complete', function(data) {
  console.log(data);
});





// function rnd(max)
// {
//     return Math.floor(Math.random() * max);
// }