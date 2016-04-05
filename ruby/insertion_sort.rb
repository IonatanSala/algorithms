# Author: Ionatan Sala
# implementing insertion sort algorithm in ruby
# O(n^2)

a = [3, 4, 5, 2, 1]

def sort(a)
  for i in 1...a.length
    element = a[i]
    j = i
    while j > 0 && a[j - 1] > element
      a[j] = a[j - 1]
      j = j - 1
    end
    a[j] = element
  end
  return a
end

p sort(a)
