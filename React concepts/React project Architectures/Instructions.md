## Development

```js
- npm i
- npm link
// run below step where you testing dxp-common-component-ui
// add our custom package in dependencies "dxp-common-component-ui": "0.1.0"
- npm link dxp-common-component-ui 
// ❌ dont do this npm i when you are testing this package in your repo 
```

# Readings
- [React redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/rtk-query/overview)
- [pleague of linters](https://redd.one/blog/the-plague-of-linters)
- [semantic commit messages](https://mauss.dev/posts/semantic-commit-message)

# Components Structure

- just make sure every style consistant

```js
// ✅ for react Component use Function Declarations
function Component() {
  // ✅ arrows for methods
  const handleClick = () => {}

  return <></>
}
```

```js
// ❌ dont use function expression (arrow🏹 functions) for components
const Component = () => {
  // ❌ dont do this
  function handleClick() {}

  return <></>
}
```

## File-Structure

> file-names & folder-names both are supposed to be in small letter,
> use `-` if you want to separate words.

## Additions

- eslint & prettier setup for consistant styling and rules
- jsconfig - baseUrl and components wise paths
- .vscode/ -> workspace settings


## 📸 assets/

- for images and svgs

## 🧰 components/

- can be divided in to 2 parts,
- reusable
- single use

## ✨ styles/

- all css files goes here.


## 👜 utils/

- utility functions which can be used across application

## 🥧 constants/

- constant data.

## 🎣 hooks/

- place for your react hooks

<br><br>

# 🚋 Import & Export

## Src is your baseurl for imports

- `@assets/images/image-name`
- `@components/directory/filename`
- no more `../../../filename`

## Ignore Default Exports as much as you can

- if you want to lazy load you need to default export

<br><br>

## 🌐 Fetching 

- for data fetching and caching mechanism here we use RTK query
- under the hood it use createSlice and createAsyncThunk
