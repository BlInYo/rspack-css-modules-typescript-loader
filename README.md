# rspack-css-modules-typescript-loader
这是一个rspack的loader，用于自动生成*.module.less的类型声明
此loader参考(copy)了社区已有的loader [css-modules-typescript-loader](https://github.com/seek-oss/css-modules-typescript-loader)
对其中的正则进行了修改
```js
{
  test: /\.less$/,
  use: [
    {
      loader: 'less-loader',
    },
    {
      loader: 'rspack-css-modules-typescript-loader',
    },
       ],
  type: 'css/auto',
},
```