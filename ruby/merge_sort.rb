# author: Ionatan Sala
# implementation of mergesort, divide and conquer algorithm

def merge_sort(array)
  return array if array.length <= 1

  # divide the array into single elements
  mid = array.length / 2
  left =  merge_sort array.slice(0, mid)
  right =  merge_sort array.slice(mid, array.length)

  return merge(left, right)
end

# merge the left with the right, conquer
def merge(left, right)
  results = []
  while left.length > 0 && right.length > 0
    if left[0] < right[0]
      results << left.shift
    else
      results << right.shift
    end
  end

  while left.length > 0
    results << left.shift
  end

  while right.length > 0
    results << right.shift
  end

  return results
end

array = [5, 6, 2, 1]
p merge_sort array
