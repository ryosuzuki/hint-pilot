
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
    $('#pre').slideDown()
  })

  function saveData (data, callback) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'https://autohint-pilot.firebaseio.com/.json',
      success: function (data) {
        console.log('success')
        console.log(data)
        callback()
      }
    })
  }

  $('#pre .button').click( function (event) {
    event.preventDefault()
    $('#pre .field').addClass('disabled')
    $('#hint').slideDown()
  })

  $('#hint .button').click( function (event) {
    event.preventDefault()
    $('#pre .field').addClass('disabled')
    var text = $('#pre textarea').val()
    $('#hint').slideDown()

    var data = {
      id: window.location.pathname.split('/')[1],
      category: $('#category').text(),
      pre: $('#pre textarea').val(),
      useful: $('#useful').val(),
      reveal: $('#reveal').val(),
      reason: $('#reason').val()
    }
    saveData(data, function () {
      $('#hint .field').addClass('disabled')
      console.log('finished')
    })
  })



  $('#code').stick_in_parent();

})
