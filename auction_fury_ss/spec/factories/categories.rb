FactoryGirl.define do
  factory :category do
    sequence(:name){ |i| "Category#{i}"}
    description 'description'
    factory :category_with_items do
      transient do
        category_id
      end
      after(:create) do |category|
        create(:item, category_id: category.id)
      end
    end
  end
end
