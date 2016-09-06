desc "convert YML file with i18n to JSON"
  task I18n: :environment do
    path = 'config/locales/'
    %w(en ua).each do |language|
      begin
        i18n_yml = File.open(path + "#{language}.yml", 'r') { |f| f.read } 
        yml_loader = YAML::load(i18n_yml).values.first
        i18n_json = JSON.dump(yml_loader)
        File.open(path + "#{language}.json", 'w') { |f| f.write(i18n_json) }
      rescue => error
        puts "#{error.message}"
      end
    end
  end
