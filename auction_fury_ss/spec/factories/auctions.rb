FactoryGirl.define do
  factory :auction do
    name 'MyString'
    start Time.current + 1.minute
    finish 3.days.from_now
    description 'a' * 49
  end
end
