    var ctx;
    var init = function () {
      ctx = document.getElementById('cptch').getContext("2d");
      ctx.fillStyle = "#bbeeff";
      change();
    }

 var c ='';
    var change = function () {
      var key = '';
      for ( var  i = 0; i < 6; i++) {
        var rnd = Math.random();
        if (Math.round(rnd) == 0) {
          key += String.fromCharCode(48+9* Math.random());
        }
        else{
          key += String.fromCharCode(65+25* Math.random());
        }
      }

      ctx.clearRect(0, 0, 150, 50);
      ctx.fillRect(0, 0, 150, 50);
      ctx.font = "30px calibri";
      ctx.strokeText(key, 24, 34);
      c = key;
    }

    function Valid(){
        var d = document.getElementById('validtxt').value;

        if (d == c) {
             alert("That's Right.");
           }
           else{
             alert("The Code is Wrong, Try Again");
           }

      }
