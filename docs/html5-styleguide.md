# HTML5 Styleguide and Best Practices

## What is it?
A series of helpful guidelines to ensure consistency across all of the code produced by Moreira Development and it's developers. The styleguide will cover things such as naming conventions ( which will cross over with SCSS ), spacing, white-space and more. Please follow these guidelines while producing code to ensure that all the code we produce is uniform.

## General Guidelines

1. Spacing and Indentation
.. Always utilize 2 Spaces for indentation. Do not use Tabs or a mix of Spaces
and Tabs because it complicates Git Diff.

```html
<!-- Correct Spacing -->
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>

<!-- Incorrect Spacing -->
<ul>
    <li>Fantastic</li>
    <li>Great</li>
</ul>
```

2. Capitalization
.. Always use lower case characters when writing html or creating css classes.

```html
<!-- Not recommended -->
<A HREF="/" Class="Some-CLASS">Home</A>

<!-- Recommended -->
<A ref="/" class="mdev-some-class">Home</A>
```

3. Trailing White Space
.. Make sure to clear any trailing white space from your documents to prevent
DIFF errors in Github.
