### Question: Product

The `summation(term, n)` function from lecture adds up `term(1) + ... + term(n)`.
Write a similar `product(n, term)` function that returns `term(1) * ... * term(n)`.

```python
def product(n, term):
  """Return the product of the first n terms in a sequence.
  n    -- a positive integer
  term -- a function that takes one argument

  >>> product(3, identity) # 1 * 2 * 3
  6
  >>> product(5, identity) # 1 * 2 * 3 * 4 * 5
  120
  >>> product(3, square)   # 1^2 * 2^2 * 3^2
  36
  >>> product(5, square)   # 1^2 * 2^2 * 3^2 * 4^2 * 5^2
  14400
  """
  "*** YOUR CODE HERE ***"
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
