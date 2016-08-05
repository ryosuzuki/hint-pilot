
$(function () {

  var current = new Date()
  var finish = new Date(current.getTime() + 0.03*60000)
  $('#timer')
  .countdown(finish)
  .on('update.countdown', function(event) {
    $(this).text(event.strftime('%M:%S'))
  })
  .on('finish.countdown', function (event) {
    $('#next').removeClass('disabled')
  })

  $('#run').click( function () {
    $('#console').slideToggle( function () {
      console.log($(this).is(':visible'))
      if ($(this).is(':visible')) {
        $('#run').removeClass('green').text('Close Console')
      } else {
        $('#run').addClass('green').text('Run Console')
      }
    })
  })

  $('#next').click( function () {
    $('#hint').slideDown()
  })

  $('#code').stick_in_parent();

})
