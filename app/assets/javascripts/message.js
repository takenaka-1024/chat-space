$(function(){
  function buildHTML(message){
    var html = `<p>
                   <strong>
                      <a href= /users/${message.user_id}>${message.user_name}</a>
                      :
                      </strong>
                      ${message.text}
                </p>`
    return html;
  }
  ('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
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
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
})
