def repeated(f, n):
  if n==0:
    return identity(n)
  else:
    return compose1(f, repeated(f, n-1))

def main():
  print('repeated(triple, 5)(1) should return 243')
  print(repeated(triple, 5)(1))
  #=> TypeError: 'int' object is not callable
