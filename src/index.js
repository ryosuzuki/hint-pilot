
$(function () {

  var current = new Date()
  var finish = new Date(current.getTime() + 0.1*60000)
  $('#timer')
  .countdown(finish)
  .on('update.countdown', function(event) {
    $(this).text(event.strftime('%M:%S'))
  })
  .on('finish.countdown', function (event) {
    $('#next').removeClass('disabled')
  })

  $('#next').click( function () {
    $('#hint').slideDown()

  })


})
