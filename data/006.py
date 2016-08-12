def repeated(f, n):
  def h(x):
    if n==0:
      return x
    else:
     return f(repeated(h, n-1)(x))
  return h

def main():
  print('repeated(triple, 5)(1) should return 243')
  print(repeated(triple, 5)(1))
  #=> ExternalError: RangeError: Maximum call stack size exceeded
