
    function planarCordinates(arr){
      var objLen = {
        lenOne: [''],
        lenTwo: [''],
        lenThree: ['']
      },
       i,
       j = 0,
       k = 0,
       a,
       b,
       c;
      // get three line in new array on object
      for(i = 0; i <= arr.length; i++){
        if (i <= 3) {
          objLen.lenOne[i] += arr[i];
          objLen.lenOne[i+1] = '';
        }
        if (i >= 4 && i <= 7) {
          objLen.lenTwo[j] += arr[i];
          objLen.lenTwo[j + 1] = '';
          j += 1;
        }
        if (i >=8 && i <= 11) {
          objLen.lenThree[k] += arr[i];
          objLen.lenThree[k + 1] = '';
          k += 1;
        }
      }
      //Creat function thet calcolate long on line in cordination
      function rLongLine(arrR){
        var x1,x2,y1,y2,r;
        for (var i = 0; i < 1; i++) {
          x1 = Number(arrR[i]);
          x2 = Number(arrR[i+2]);
          y1 = Number(arrR[i+1]);
          y2 = Number(arrR[i + 3]);
          r = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
        }
        return r.toPrecision(3);
      }


      a = rLongLine(objLen.lenOne);
      b = rLongLine(objLen.lenTwo);
      c = rLongLine(objLen.lenThree);
      console.log(a);
      console.log(b);
      console.log(c);
      if (a < b + c && b < a + c && c < a + b) {
        console.log('Triangle can be built');
      }else {
        console.log('Triangle can not be built');
      }
    }

    //test function planerCordinate
    planarCordinates([
      '7', '7', '2', '2',
      '5', '6', '2', '2',
      '95', '-14.5', '0', '-0.123'
    ]);

