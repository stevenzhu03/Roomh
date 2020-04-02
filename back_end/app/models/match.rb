class Match < ApplicationRecord
    belongs_to :user
    belongs_to :matcher, :class_name => "User"

    
end
