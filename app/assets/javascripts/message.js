$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var talk = message.talk ? `${ message.talk }` : "";
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
  }
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
        $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $(".form__submit").attr("disabled", false);
      })
      .fail(function(){
        alert('error');
      })

  })
});
