json.array! @messages do |message|
  json.talk       message.talk
  json.image      message.image
  json.date       message.created_at.strftime("%Y/%m/%d %H:%M")
  json.name       message.user.name
  json.id         message.id
end