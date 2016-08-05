def product(n, term):
  total, k = 0, 1
  while k<=n:
    total, k = total*term(k), k+1
  return total

def main():
  """
  product(3, identity)
  => 6
  """
  print(product(3, identity)
  #=> 0