import { useState } from 'react';
import TodoItem from '../todo-item';

import { STATUS_CODE } from '../todos';
import './index.css';

export default function TodoList(props) {
  const { status, taskList, canDragIn, onDragStart, onDragEnd, dragTo } = props;
  const [inList, setInList] = useState(false);

  // 开始拖拽, 获取 id
  function dragStart(dragId) {
    onDragStart(dragId);
  }

  // 拖拽结束
  function dragEnd() {
    // 告知父组件, 拖拽结束
    onDragEnd();
  }

  // 拖拽到当前 list
  function handleDragEnter(e) {
    e.preventDefault();
    if (canDragIn) {
      setInList(true);
    }
  }

  // 拖拽离开当前 list
  function handleDragLeave(e) {
    e.preventDefault();
    if (canDragIn) {
      setInList(false);
    }
  }

  // 拖拽
  function handleDrop(e) {
    e.preventDefault();
    dragTo(status);
    setInList(false);
  }

  /**
   * 需要注意是 ondragover 的默认事件 Reset the current drag operation to "none". 所以想让一个元素可放置，需要重写 ondragover
   */
  return <div
    className="todo_list"
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
    onDragOver={handleDragEnter}
    onDrop={handleDrop}
  >
    <header>{ STATUS_CODE[status] }</header>
    <main
      className={inList ? ' active' : ''}
    >
      {
        taskList.filter(t => status === t.status)?.map(task => <TodoItem
          key={task.id}
          todo={task}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        ></TodoItem>)
      }
    </main>
  </div>
}