## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|talk|text|
|name|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


##usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false 
|email|string|null: false, 
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


##groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false

