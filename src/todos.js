export const STATUS_TODO = 'STATUS_TODO';
export const STATUS_DOING = 'STATUS_DOING';
export const STATUS_DONE = 'STATUS_DONE';

export const STATUS_CODE = {
  STATUS_TODO: '待处理',
  STATUS_DOING: '进行中',
  STATUS_DONE: '已完成'
}
export const tasks = [
  {
    id: 1,
    status: STATUS_TODO,
    title: '学习 React',
    username: '张三',
    point: 3,
  }, {
    id: 2,
    status: STATUS_TODO,
    title: '学习英语, 背单词',
    username: '李四',
    point: 2
  }, {
    id: 3,
    status: STATUS_TODO,
    title: '跟张三一起学习 React',
    username: '赵大',
    point: 3
  }, {
    id: 4,
    status: STATUS_TODO,
    title: '跟李四一起背单词',
    username: '王五',
    point: 2
  }, {
    id: 5,
    status: STATUS_TODO,
    title: '我也要学习 React',
    username: '赵六',
    point: 3
  }, {
    id: 6,
    status: STATUS_TODO,
    title: '你们先忙, 我先去锻炼身体去...',
    username: '钱二',
    point: 2
  },
];