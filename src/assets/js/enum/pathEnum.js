class Path {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

Path.index = new Path('表格查詢', 'index');
Path.chart = new Path('動態圖表', 'chart');

const pathList = [Path.index, Path.chart];

/**
 * 查找menu是否存在
 */
const findPath = (e) => pathList.find((path) => path.value === e) || ''

export default Path;

export { pathList, findPath };