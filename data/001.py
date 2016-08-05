def repeated(f, n):
  if n==1:
    return f(args)
  else:
    i = 1
    g = f
    while i<n:
      g = compose1(f, g)
      i += 1
    return g

def main():
  """
  repeated(square, 0)(5)
  => 5
  """
  print(repeated(square, 0)(5))
  #=> 25