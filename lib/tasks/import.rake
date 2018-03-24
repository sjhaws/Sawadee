# to run: rake import:menus

namespace :import do
  desc "TODO"
  task thai_barbeque: :environment do
    start_line = ""
    menu_strings = Array.new

    file='./db/thai_barbeque.dat'
    category = 'thai_barbeque'

    File.open( file ).each do |line|
      # puts line
      
      if line.chomp.empty?
        start_line = start_line.rstrip
        menu_strings << start_line
        start_line = ""
      else
        start_line << line
        start_line.gsub!("\n", " ")
      end
    end
    start_line = start_line.rstrip
    menu_strings << start_line

    menu_strings.delete("")
    
    menu_strings.each do |item|
      extra_description = ""
      
      description = item[item.indexes("$").last..item.length]
      title = item[0..item.indexes("$").last-1]

      if ( title.include?("(") )
        start_index = title.indexes("(").first
        end_index = title.indexes(")").last
        extra_description = title[start_index..end_index]
        title = title[0..start_index-1]
      end

      amount = item.split("$").last.split(" ").first
      description = item.split("$").last.gsub!(amount, "")
      description = description.lstrip
      description = extra_description + " " + description

      Menu.create(name: title.strip, description: description.strip, price: amount, category: category)

      # puts title
      # puts amount
      # puts description
      # puts
    end
  end

  task appetizers: :environment do

    start_line = ""
    menu_strings = Array.new

    file='./db/appetizers.dat'
    category = 'appetizers'

    File.open( file ).each do |line|
      
      if line.chomp.empty?
        start_line = start_line.rstrip
        menu_strings << start_line
        start_line = ""
      else
        start_line << line
        start_line.gsub!("\n", " ")
      end
    end
    start_line = start_line.rstrip
    menu_strings << start_line

    menu_strings.delete("")

    menu_strings.each do |item|
      extra_description = ""
      
      description = item[item.indexes("$").last..item.length]
      title = item[0..item.indexes("$").last-1]

      if ( title.include?("(") )
        start_index = title.indexes("(").first
        end_index = title.indexes(")").last
        extra_description = title[start_index..end_index]
        title = title[0..start_index-1]
      end

      amount = item.split("$").last.split(" ").first
      description = item.split("$").last.gsub!(amount, "")
      description = description.lstrip
      description = extra_description + " " + description

      Menu.create(name: title.strip, description: description.strip, price: amount, category: category)

      # puts title
      # puts amount
      # puts description
      # puts
    end
    
  end
end


class String
  def indexes(needle)
    found = []
    current_index = -1
    while current_index = index(needle, current_index+1)
      found << current_index
    end
    found
  end
end

