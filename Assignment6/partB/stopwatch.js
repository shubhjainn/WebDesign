$("#start-pause").css("color", "yellowgreen");
$(document).ready(function() {
    var running = 0,
      intervalSetup = null,
      startTime = null,
      pauseTime = null,
      pauseInterval = 0;
      $("#reset").attr("disabled", true);
      $("#stop").attr("disabled", true);



  
    $("#start").on("click", start);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
  
    function start(){
        if(!running) {
          
          if (pauseTime === null) {
            
            startTime = new Date();
            intervalSetup = setInterval(count, 10);
            running = 1;
           
          } else {
            
            pauseInterval += new Date() - pauseTime;
            intervalSetup = setInterval(count, 10);
            running = 1;

          }
          $("#stop").text("PAUSE");
          $("#reset").attr("disabled", false);
          $("#stop").attr("disabled", false);
          $("#start").attr("disabled", true);
        }
      }

      function reset() {
        clearInterval(intervalSetup);
        pauseInterval = 0;
        startTime = null;
        pauseTime = null;
        running = 0;
        $("#time").text("00:00:00");
        $("#start").text("START");
        $("#reset").attr("disabled", true);
        $("#stop").attr("disabled", true);
        $("#start").attr("disabled", false);


      }

    function stop() {
      if (running) {
       
        clearInterval(intervalSetup);
        pauseTime = new Date();
        running = 0;
        $("#start").text("START");
        $("#start").attr("disabled", false);
        $("#stop").attr("disabled", true);

      } }
      
  
   
  
    function count() {
      var elapsedTime = new Date(new Date() - startTime - pauseInterval);
      var hours = elapsedTime.getUTCHours(),
        minutes = elapsedTime.getUTCMinutes(),
        seconds = elapsedTime.getUTCSeconds()  
      $("#time").text(
        watchZeros(hours, 2) + ":" + watchZeros(minutes, 2) + ":" + watchZeros(seconds, 2)
      );
    }
  
    function watchZeros(value, digit) {
      
      var dummyZeros = "";
      for (i = 0; i < digit; i++) {
        dummyZeros += "0";
        return (dummyZeros + value).slice(-digit);
      }
    }
  });
  