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
def compose1(f, g):
  def h(x):
    return f(g(x))
  return h
