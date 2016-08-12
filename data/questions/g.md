### Question: G function

A mathematical function `G` on positive integers is defined by two cases:

```python
G(n) = n,                                       if n <= 3
G(n) = G(n - 1) + 2 * G(n - 2) + 3 * G(n - 3),  if n > 3
```

Write a recursive function `g` that computes `G(n)`

```python
def g(n):
  """Return the value of G(n), computed recursively.

  >>> g(1)
  1
  >>> g(2)
  2
  >>> g(3)
  3
  >>> g(4)
  10
  >>> g(5)
  22
  >>> from construct_check import check
  >>> check(HW_SOURCE_FILE, 'g', ['While', 'For'])
  True
  """
  "*** YOUR CODE HERE ***"
```
