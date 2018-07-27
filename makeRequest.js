var querystring=require('querystring');
var http=require('http');
var fs = require('fs');

function makePostRequest(){
    console.log("yo")
    var post_data = querystring.stringify({
        
            "type": "conversationUpdate",
            "membersAdded": [
              {
                "id": "djk34dmfcej",
                "name": "Bot"
              }
            ],
            "id": "105bjfakj47le",
            "channelId": "emulator",
            "timestamp": "2018-07-27T09:17:52.170Z",
            "localTimestamp": "2018-07-27T11:17:52+02:00",
            "recipient": {
              "id": "djk34dmfcej",
              "name": "Bot"
            },
            "conversation": {
              "id": "ncm4kc1e016"
            },
            "from": {
              "id": "default-user",
              "name": "User"
            },
            "serviceUrl": "http://localhost:58771"
          
    });
    
    var post_options = {
        host: 'jeanimmobilier.azurewebsites.net',
        path: '/api/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };
    // var post_options = {
    //     host: '127.0.0.1',
    //     port: '5000',
    //     path: '/api/messages',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Length': Buffer.byteLength(post_data)
    //     }
    // };
    

    var post_req=http.request(post_options,function(res){
        res.setEncoding('utf8');
        res.on('data',function(chunk){
            console.log('Response: ' + chunk);
        })
    })

    post_req.write(post_data)
    post_req.end()
}
makePostRequest()
// while (true){
//     setTimeout(makePostRequest,10);
// }
