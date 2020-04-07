class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: { case_sensitive: false }

    has_many :matchs
    has_many :inverse_matches, :class_name => "Match", :foreign_key => "matcher_id"

    def matches
        matchers_array = matches.map{|match| match.matcher if match.confirmed}

        matchers_array + inverse_matches.map{|match| match.user if match.confirmed}

        matchers_array.compact
    end

    def pending_matches
        matches.map{|match| match.matcher if !match.confirmed}.compact
    end

    def match_requests
        inverse_matches.map{|match| match.user if !match.confirmed}.compact
    end

    def confirm_match(user)
        match = inverse_matches.find{|match| match.user === user}
        match.confirmed === true
        match.save
    end

    def match?(user)
        matches.include?(user)
    end
    
end
