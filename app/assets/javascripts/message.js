$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var talk = message.talk ? `${message.talk}` : "";
    var img = message.image.url ? `<img class= "lower-message__image" src= ${ message.image.url } >` : "";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__talk">
                      ${message.talk}
                    </p>
                      ${img}
                  </div>
                </div>`
    return html;
  };
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $(".form__submit").attr("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  });


    var reloadMessages = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
        var last_message_id = $('.message').last().data('id') || 0
        $.ajax({
          url: 'api/messages',
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          messages.forEach(function(message) {
            var insertHTML = buildHTML(message);
            $('.messages').append(insertHTML);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
          });
        })
        .fail(function() {
            alert('自動更新失敗');
        });
      }
    },2000);
});