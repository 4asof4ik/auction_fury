FactoryGirl.define do
  factory :profile do
    user nil
    prefered_currency "USD"
    country "USA"
    state "Florida"
    city "Miami"
    street "9323"
    zip_code "34332"
    office "A2"
    phone "+3332123432"
  end
end
