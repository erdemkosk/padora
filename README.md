
# Padora

![Logo](https://i.imgur.com/o3YthOy.png)

This is designed to fill placeholders (template strings) in the input text with corresponding values from a given data object. It essentially performs template interpolation, replacing placeholders with actual data values, allowing for dynamic content generation in text templates


## Installation

Install my-project with npm

```bash
  npm install padora
```
    
## Example


```javascript
const template = "This is {inner.1.2.test} value , it can work with {inner.1.2.array[0]} {inner.1.2.array[1]} , and it is amazing {example}";
const data = {
    example: "example",
    inner: {
      1: {
        2: {
          test: "innerExample",
          array: ['array', 'values'],
        },
      },
    },
  };
```

Result

```bash
"This is innerExample value , it can work with array values , and it is amazing example"
```
