FactoryGirl.define do
  factory :user do
    sequence :email do |n|
      "user#{n}@ex#{n}.com"
    end
    sequence :firstname do |n|
      "John#{n}"
    end
    sequence :lastname do |n|
      "Smith#{n}"
    end
    password "qwer1234_="
    password_confirmation "qwer1234_="
  end
end

