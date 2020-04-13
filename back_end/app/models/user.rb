class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: { case_sensitive: false }

    has_many :matchs
    has_many :inverse_matches, :class_name => "Match", :foreign_key => "matcher_id"
    has_many_attached :images

    def matches
        matchers_array = matchs.map{|match| match.matcher if match.confirmed}

        combined_array = matchers_array + inverse_matches.map{|match| match.user if match.confirmed}

        combined_array.compact
    end

    def pending_matches
        matchs.map{|match| match.matcher if !match.confirmed}.compact
    end

    def match_requests
        inverse_matches.map{|match| match.user if !match.confirmed}.compact
    end

    def confirm_match(user)
        match = inverse_matches.find{|match| match.user === user}
        match.confirmed = true
        match.save
    end

    def match?(user)
        matchs.include?(user)
    end
    
end
