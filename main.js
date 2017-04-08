function TestExample1(){
  var result = document.querySelector("#example-1-results");
  try{
    var StepTest = window.StepTest.Suite();
    MyLib = eval(code.getValue())
    StepTest.reset()
    StepTest.step("My Lib Setup", function(){
      this.myLib = new MyLib();
    })

    eval(testValue)
    var log = ""

    StepTest.log = function(logInfo){  
      log += "<div class='test'>"
      log += logInfo.replace(/\n/g, "<br />").replace(/Passed\:/g, "<span class='passed'>Passed:</span>");
      log = log.replace(/Failed\:/g, "<span class='failed'>Failed:</span>")
      log += "</div>"
    }

    StepTest.on("finished", function(){
      result.innerHTML = log;
    })

    StepTest.play();
  }catch(errors){
    var result = document.querySelector("#example-1-results");
    result.innerHTML = errors;
  }
}

function TestExample2(){
  var result = document.querySelector("#example-2-results");
  try{
    var StepTest = window.StepTest.Suite();
    MyLib = eval(codeValue);
    StepTest.reset()
    StepTest.step("My Lib Setup", function(){
      this.myLib = new MyLib();
    })

    eval(test.getValue())

    var log = "";
    StepTest.log = function(logInfo){  
      log += "<div class='test'>"
      log += logInfo.replace(/\n/g, "<br />").replace(/Passed\:/g, "<span class='passed'>Passed:</span>");
      log = log.replace(/Failed\:/g, "<span class='failed'>Failed:</span>")
      log += "</div>"
    }

    StepTest.on("finished", function(){
      result.innerHTML = log;
    })

    StepTest.play();
  }catch(errors){
    var result = document.querySelector("#example-2-results");
    result.innerHTML = errors;
  }
}
