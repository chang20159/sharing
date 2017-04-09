function long(){
  var result = 0
  for (var i = 0; i<1000; i++){
    for (var j = 0; j<1000; j++){
      for (var k = 0; k<1000; k++){
        result = result + i+j+k;
      }
    } 
  }
}

onmessage = function(e) {
  long();
  postMessage('calclation done');
}