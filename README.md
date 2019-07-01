## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|talk|text|null: false 
|name|string|null: false, unique: true
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


##usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true
|email|string|null: false, unique: true 
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
- belongs_to :group


##groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false
### Association
- belongs_to :user


##membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
