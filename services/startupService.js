 const apiReferenceModule = "startup";

 const Promise = require('bluebird');


 const envProperties = require('./../properties/envProperties');
 const httpLib = require('./httpService');


 exports.initializeServer = () => {

     return new Promise(async(resolve, reject) => {

         Promise.coroutine(function*() {

             server = yield httpLib.startHttpServer(envProperties.port);

         })().then((data) => {
             resolve(data);
         }, (error) => {
             console.log(error);
         });
     });
 };