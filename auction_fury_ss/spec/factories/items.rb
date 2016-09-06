FactoryGirl.define do
  factory :item do
    sequence :name do |n|
      "item_name#{n}"
    end
    sequence :description do |n|
      "description#{n*n - 1}"
    end
    sequence :price do |n|
      n+n*0.1
    end
    sequence :public do |n|
      n.odd? ? true : false
    end
    category
  end
end
