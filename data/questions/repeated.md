### Question: Repeated

Implement `repeated(f, n)`:
* `f` is a one-argument function that takes a number and returns another number.
* `n` is a non-negative integer

`repeated` returns another function that, when given an argument `x`, will compute `f(f(....(f(x))....))` (apply `f` a total `n` times).
For example, `repeated(square, 3)(42)` evaluates to `square(square(square(42)))`.
Yes, it makes sense to apply the function zero times! See if you can figure out a reasonable function to return for that case.

```python
def repeated(f, n):
  """Return the function that computes the nth application of f.

  >>> add_three = repeated(increment, 3)
  >>> add_three(5)
  8
  >>> repeated(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
  243
  >>> repeated(square, 2)(5) # square(square(5))
  625
  >>> repeated(square, 4)(5) # square(square(square(square(5))))
  152587890625
  >>> repeated(square, 0)(5)
  5
  """
  "*** YOUR CODE HERE ***"
```

### Hint:
You may find it convenient to use `compose1` from the textbook:

```python
def compose1(f, g):
  """Return a function h, such that h(x) = f(g(x))."""
  def h(x):
    return f(g(x))
  return h
```

### Helper Function:
Test cases refer to these one-argument functions:

```python
def square(x):
  return x * x

def triple(x):
  return 3 * x

def identity(x):
  return x

def increment(x):
  return x + 1
```

