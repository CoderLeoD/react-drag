import './index.css';

export default function TodoItem(props) {
  const { todo, onDragStart, onDragEnd } = props;

  // 开始拖拽
  function dragStart() {
    // 传递别拖拽的 item id
    onDragStart(todo.id);
  }

  // 结束拖拽, 也就是松手时
  function dragEnd() {
    // 传递结束状态, 可能需要重新调整列表
    onDragEnd();
  }

  return <div
    className="todo_item"
    onDragStart={dragStart}
    onDragEnd={dragEnd}
    draggable="true"
  >
    <div className="item_head">
      <div>{ todo.username }</div>
      <div className="head_point">{ todo.point }</div>
    </div>
    <div className="item_con">{ todo.title }</div>
  </div>
}