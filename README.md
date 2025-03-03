# rspack-css-modules-typescript-loader

这是一个 rspack 的 loader，用于自动生成\*.module.less 的类型声明
此 loader 参考(copy)了社区已有的 loader [css-modules-typescript-loader](https://github.com/seek-oss/css-modules-typescript-loader)
对其中的正则进行了修改，选择在 less-loader 运行前执行（是否有问题还存疑），放弃对 css-loader 的依赖对于 css 交由 rspack 处理

#### 使用

Install:

```bash
pnpm add rspack-css-modules-typescript-loader --save-dev
```

Add plugin your rspack.config.ts

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

#### Credits

The loader was forked from seek-oss/css-modules-typescript-loader.

#### License

MIT.
