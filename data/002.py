def repeated(f, n):
  if n==1:
    return (lambda x: x)
  else:
    return (lambda x: f(repeated(f, n-1)(x)))

def main():
  """
  repeated(square, 0)(5)
  => 243
  """
  print(repeated(triple, 5)(1))
  #=> 81
