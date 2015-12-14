=begin

  author: Ionatan Sala
  algorithm: binary search

=end

my_array = []
(1..100).each do |i|
  my_array[i - 1] = i
end

puts "Enter word you want to be searched for: "
number_to_find = Integer(gets.chomp);

min, max = 1, my_array.length
number_found = false

while !number_found do
    # average of the range we are searching through
    average = (min + max) / 2

    # if number not found
    if min >= max && my_array[average] != number_to_find
      puts "Number #{number_to_find} does not exist in the array you are searching through"
      break
    end


    if my_array[average] == number_to_find
      number_found = true
      puts "Number #{number_to_find} found at position #{average} in the array"
    elsif my_array[average] > number_to_find
      max = average - 1
    else
      min = average + 1
    end

end
