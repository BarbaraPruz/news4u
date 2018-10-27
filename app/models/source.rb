class Source < ApplicationRecord

    validates :source_id, presence: true, uniqueness: true
 
end
