function findingTheSmallestInteger(){
    var n = 0;
    var totalResult = 0;
    while(totalResult<10000){
        n++;
        totalResult += n;
        console.log("so nguyen duong nho nhat : ", totalResult);
    }
}
findingTheSmallestInteger();

function calcTotalSn(){
    var xNumber = document.getElementById("xNumberOne").value*1;
    var nNumber = document.getElementById("nNumberTwo").value*1;
    var sumbothNumber =0;
    var multifyvalue = 1;
    // var totalBothNumber = xNumber + Math.pow(xNumber,2) + Math.pow(xNumber,3) + Math.pow(xNumber,nNumber)
    for(var i = 0; i <=xNumber; i++){
        multifyvalue *= xNumber;
         sumbothNumber += multifyvalue;
        // console.log(multifyvalue);
        // neu ko co ham sumbothNumber thi no chi nhan len nhieu lan ma ko co cong
    }
    document.getElementById("resultTotal").innerHTML = sumbothNumber;
    document.getElementById("resultTotal").className = "bg-success mt-3 text-center"
}

function factorialize() {
  var numberInput = document.getElementById("nNumberOne").value * 1;
  var numberTotal = 1;
   for(var i = 1; i <= numberInput ; i++ ){
       numberTotal *=  i;
   }
   document.getElementById("result-factorial").innerHTML = numberTotal;
}

  function logOutOddEvenDiv() {
    var addDivTag = "";
    var oddDiv = "<div class='bg-danger'>số chẵn</div>";
    var evenDiv = "<div class='bg-info'>số lẻ</div>";
    for(let i = 1; i<= 10; i++){
        if (i % 2 == 0) {
            addDivTag += oddDiv;

        } else {
            addDivTag += evenDiv;
        }
        document.getElementById("changingResult").innerHTML = addDivTag;   
    }
 
  }

  // function demo() {
  //   var contentHTMl = "";
  //   var theChan = "<div class='bg-danger'>số chẵn</div>";
  //   var theLe = "<div class='bg-info'>số lẻ</div>";

  //   for (let i = 0; i <= 10; i++) {
  //     if (i % 2 != 0) {
  //       console.log(i);
  //       contentHTMl += theLe;
  //     } else {
  //       console.log(i);
  //       contentHTMl += theChan;
  //     }
  //   }
  //   document.getElementById("result").innerHTML = contentHTMl;
  // }
  // demo();





