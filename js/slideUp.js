
$(".ShowText").click(function() {
  if ( $( "#Shw:first" ).is( ":hidden" ) ) {
    $( "Shw" ).show( "slow" );
  } else {
    $( "Shw" ).slideUp();
  }
});
