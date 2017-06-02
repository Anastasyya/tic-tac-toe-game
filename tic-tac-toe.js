$(document).ready(function(){
var userChoice;
var myChoice;

  $( "#x" ).one( "click", function() {
    $( ".modal" ).css("display", "none");
    userChoice="x";
    myChoice="o";
  });
  $( "#o" ).one( "click", function() {
    $( ".modal" ).css("display", "none");
    userChoice="o";
    myChoice="x";
  });

  function delayedCleanUp() {
  timeoutID = window.setTimeout(CleanUp, 1000);
  }
  function CleanUp(){
  $("td").removeClass();
  $("#1, #2, #3, #4, #5, #6, #7, #8, #9").html("&nbsp;&nbsp;");
  }
//click five
$( "#5" ).one( "click", function() {
  $( "#5" ).text(userChoice).addClass("user");
  $('#7').text(myChoice).addClass('me');
});

//click one

$( "#1" ).click( function() {
    $( "#1" ).text(userChoice).addClass("user");
    var userCell = $('.user').length;
    var myCell = $('.me').length;
    var countFree = 9 - myCell - userCell;
    if (countFree == 8){
        $('#5').text(myChoice).addClass('me');
      }
  else if(countFree == 0){
        delayedCleanUp();
         }
    else {
        var userIds = [];
        var myIds = [];
       $('.user').each(function() {
    userIds.push(Number( this.id ));
   });
     $('.me').each(function() {
   myIds.push(parseInt( this.id ));
   });

  var resultOne = [1,4,7].filter(function(x) { return userIds.indexOf(x) == -1 });
  var resultTwo = [1,2,3].filter(function(x) { return userIds.indexOf(x) == -1 });
  var resultThree = [1,5,9].filter(function(x) { return userIds.indexOf(x) == -1 });
  var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
  var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

   if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
        $('#' + resultOne).addClass('me').text(myChoice);
  }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
        $('#' + resultTwo).addClass('me').text(myChoice);
   }else if ( !$('#' + resultThree).hasClass('me') && resultThree.length == 1){
        $('#' + resultThree).addClass('me').text(myChoice);
    }
    else {
      $('#' + freeCells[0]).addClass('me').text(myChoice);
    }
      }
  });

//click two

  $( "#2" ).click( function() {
      $( "#2" ).text(userChoice).addClass("user");
      var userCell = $('.user').length;
      var myCell = $('.me').length;
      var countFree = 9 - myCell - userCell;
      if (countFree == 8){
          $('#5').text(myChoice).addClass('me');
        }
    else if(countFree == 0){
          delayedCleanUp();
           }
      else {
          var userIds = [];
          var myIds = [];
         $('.user').each(function() {
      userIds.push(Number( this.id ));
     });
       $('.me').each(function() {
     myIds.push(Number( this.id ));
     });

    var resultOne = [1,2,3].filter(function(x) { return userIds.indexOf(x) == -1 });
    var resultTwo = [2,5,8].filter(function(x) { return userIds.indexOf(x) == -1 });
    var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
    var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

     if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
          $('#' + resultOne).addClass('me').text(myChoice);
    }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
          $('#' + resultTwo).addClass('me').text(myChoice);
     }
      else {
        $('#' + freeCells[0]).addClass('me').text(myChoice);
      }
        }
    });

//click three

    $( "#3" ).click( function() {
        $( "#3" ).text(userChoice).addClass("user");
        var userCell = $('.user').length;
        var myCell = $('.me').length;
        var countFree = 9 - myCell - userCell;
        if (countFree == 8){
            $('#5').text(myChoice).addClass('me');
          }
      else if(countFree == 0){
            delayedCleanUp();
             }
        else {
            var userIds = [];
            var myIds = [];
           $('.user').each(function() {
        userIds.push(Number( this.id ));
       });
         $('.me').each(function() {
       myIds.push(parseInt( this.id ));
       });

      var resultOne = [1,5,7].filter(function(x) { return userIds.indexOf(x) == -1 });
      var resultTwo = [1,2,3].filter(function(x) { return userIds.indexOf(x) == -1 });
      var resultThree = [3,6,9].filter(function(x) { return userIds.indexOf(x) == -1 });
      var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
      var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

       if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
            $('#' + resultOne).addClass('me').text(myChoice);
      }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
            $('#' + resultTwo).addClass('me').text(myChoice);
       }else if ( !$('#' + resultThree).hasClass('me') && resultThree.length == 1){
            $('#' + resultThree).addClass('me').text(myChoice);
        }
        else {
          $('#' + freeCells[0]).addClass('me').text(myChoice);
        }
          }
      });

//click four

      $( "#4" ).click( function() {
          $( "#4" ).text(userChoice).addClass("user");
          var userCell = $('.user').length;
          var myCell = $('.me').length;
          var countFree = 9 - myCell - userCell;
          if (countFree == 8){
              $('#5').text(myChoice).addClass('me');
            }
        else if(countFree == 0){
              delayedCleanUp();
               }
          else {
              var userIds = [];
              var myIds = [];
             $('.user').each(function() {
          userIds.push(Number( this.id ));
         });
           $('.me').each(function() {
         myIds.push(Number( this.id ));
         });

        var resultOne = [1,4,7].filter(function(x) { return userIds.indexOf(x) == -1 });
        var resultTwo = [4,5,6].filter(function(x) { return userIds.indexOf(x) == -1 });
        var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
        var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

         if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
              $('#' + resultOne).addClass('me').text(myChoice);
        }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
              $('#' + resultTwo).addClass('me').text(myChoice);
         }
          else {
            $('#' + freeCells[0]).addClass('me').text(myChoice);
          }
            }
        });

//click six

        $( "#6" ).click( function() {
            $( "#6" ).text(userChoice).addClass("user");
            var userCell = $('.user').length;
            var myCell = $('.me').length;
            var countFree = 9 - myCell - userCell;
            if (countFree == 8){
                $('#5').text(myChoice).addClass('me');
              }
          else if(countFree == 0){
                delayedCleanUp();
                 }
            else {
                var userIds = [];
                var myIds = [];
               $('.user').each(function() {
            userIds.push(Number( this.id ));
           });
             $('.me').each(function() {
           myIds.push(Number( this.id ));
           });

          var resultOne = [3,6,9].filter(function(x) { return userIds.indexOf(x) == -1 });
          var resultTwo = [4,5,6].filter(function(x) { return userIds.indexOf(x) == -1 });
          var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
          var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

           if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
                $('#' + resultOne).addClass('me').text(myChoice);
          }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
                $('#' + resultTwo).addClass('me').text(myChoice);
           }
            else {
              $('#' + freeCells[0]).addClass('me').text(myChoice);
            }
              }
          });

//click seven

        $( "#7" ).click( function() {
            $( "#7" ).text(userChoice).addClass("user");
            var userCell = $('.user').length;
            var myCell = $('.me').length;
            var countFree = 9 - myCell - userCell;
            if (countFree == 8){
                $('#5').text(myChoice).addClass('me');
              }
          else if(countFree == 0){
                delayedCleanUp();
                 }
            else {
                var userIds = [];
                var myIds = [];
               $('.user').each(function() {
            userIds.push(Number( this.id ));
           });
             $('.me').each(function() {
           myIds.push(parseInt( this.id ));
           });

          var resultOne = [1,4,7].filter(function(x) { return userIds.indexOf(x) == -1 });
          var resultTwo = [7,5,3].filter(function(x) { return userIds.indexOf(x) == -1 });
          var resultThree = [7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
          var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
          var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

           if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
                $('#' + resultOne).addClass('me').text(myChoice);
          }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
                $('#' + resultTwo).addClass('me').text(myChoice);
           }else if ( !$('#' + resultThree).hasClass('me') && resultThree.length == 1){
                $('#' + resultThree).addClass('me').text(myChoice);
            }
            else {
              $('#' + freeCells[0]).addClass('me').text(myChoice);
            }
              }
          });

//click eight

          $( "#8" ).click( function() {
              $( "#8" ).text(userChoice).addClass("user");
              var userCell = $('.user').length;
              var myCell = $('.me').length;
              var countFree = 9 - myCell - userCell;
              if (countFree == 8){
                  $('#5').text(myChoice).addClass('me');
                }
            else if(countFree == 0){
                  delayedCleanUp();
                   }
              else {
                  var userIds = [];
                  var myIds = [];
                 $('.user').each(function() {
              userIds.push(Number( this.id ));
             });
               $('.me').each(function() {
             myIds.push(Number( this.id ));
             });

            var resultOne = [9,8,7].filter(function(x) { return userIds.indexOf(x) == -1 });
            var resultTwo = [2,5,8].filter(function(x) { return userIds.indexOf(x) == -1 });
            var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
            var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

             if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
                  $('#' + resultOne).addClass('me').text(myChoice);
            }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
                  $('#' + resultTwo).addClass('me').text(myChoice);
             }
              else {
                $('#' + freeCells[0]).addClass('me').text(myChoice);
              }
                }
            });

//click nine

            $( "#9" ).click( function() {
                $( "#9" ).text(userChoice).addClass("user");
                var userCell = $('.user').length;
                var myCell = $('.me').length;
                var countFree = 9 - myCell - userCell;
                if (countFree == 8){
                    $('#5').text(myChoice).addClass('me');
                  }
              else if(countFree == 0){
                    delayedCleanUp();
                     }
                else {
                    var userIds = [];
                    var myIds = [];
                   $('.user').each(function() {
                userIds.push(Number( this.id ));
               });
                 $('.me').each(function() {
               myIds.push(parseInt( this.id ));
               });

              var resultOne = [1,5,9].filter(function(x) { return userIds.indexOf(x) == -1 });
              var resultTwo = [3,6,9].filter(function(x) { return userIds.indexOf(x) == -1 });
              var resultThree = [7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
              var userFreeCells = [1,2,3,4,5,6,7,8,9].filter(function(x) { return userIds.indexOf(x) == -1 });
              var freeCells = userFreeCells.filter(function(x) { return myIds.indexOf(x) == -1 });

               if( !$('#' + resultOne).hasClass('me') && resultOne.length == 1){
                    $('#' + resultOne).addClass('me').text(myChoice);
              }else if ( !$('#' + resultOne).hasClass('me') && resultTwo.length == 1){
                    $('#' + resultTwo).addClass('me').text(myChoice);
               }else if ( !$('#' + resultThree).hasClass('me') && resultThree.length == 1){
                    $('#' + resultThree).addClass('me').text(myChoice);
                }
                else {
                  $('#' + freeCells[0]).addClass('me').text(myChoice);
                }
                  }
              });

});
