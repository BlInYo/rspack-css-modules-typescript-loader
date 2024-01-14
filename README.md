# rspack-css-modules-typescript-loader
这是一个rspack的loader，用于自动生成*.module.less的类型声明
此loader参考(copy)了社区已有的loader [css-modules-typescript-loader](https://github.com/seek-oss/css-modules-typescript-loader)
对其中的正则进行了修改，选择在less-loader运行前执行（是否有问题还存疑），放弃对css-loader的依赖对于css交由rspack处理

#### 使用

```js
{
  test: /\.less$/,
  use: [
    {
      loader: 'less-loader',
    },
    {
      loader: 'rspack-css-modules-typescript-loader',
      options:{
        scope:'module',  // 默认值可以不传
        mode:'emit' // 默认值可以不传
      }
    },
    ],
  type: 'css/auto',
},
```

#### 配置(options)
```ts
Options = {
  /**
   * 生成类型文件的范围 默认为module
   * module： *.module.less 为结尾的文件
   * all： 所有的less文件
   */
  scope: 'module' | 'all'
  /**
   * 默认为 emit
   * emit: 生成类型文件
   * verify: 只进行校验不生成类型文件
   */
  mode: 'emit' | 'verify'
  /**
   * 顶部的描述信息
   */
  banner: string
}
```
