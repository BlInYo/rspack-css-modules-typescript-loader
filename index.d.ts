export declare type Options = {
  /**
   * 生成类型文件的范围
   * module： *.module.less 为结尾的文件
   * all： 所有的less文件
   */
  scope: 'module' | 'all'
  /**
   * emit: 生成类型文件
   * verify: 只进行校验不生成类型文件
   */
  mode: 'emit' | 'verify'
  /**
   * 顶部的描述信息
   */
  banner: string
}

/**
 * @type {{
 * scope:'module'|'all',
 * mode:'emit'|'verify'
 * banner:string
 * }} -
 * - `scope`: 生成类型的范围，module *.module.less 为结尾的文件
 * - `mode`: emit 修改  verify 校验
 * @default {{
 * scope:'module',
 * mode:'emit'
 * banner:''
 * }}
 */
