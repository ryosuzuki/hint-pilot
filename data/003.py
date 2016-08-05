def repeated(f, n):
  func = lambda x: f(x)
  if n==0:
    return lambda x: x
  elif n==1:
    return lambda x: f(x)
  else:
    return f(repeated(f, n-1))

def main():
  """
  repeated(triple, 5)(1)
  => 243
  """
  print(repeated(triple, 5)(1))
  #=> TypeError: unsupported operand type(s)
  #   for Mult: 'int' and 'function'
