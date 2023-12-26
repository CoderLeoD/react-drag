import { useState } from 'react';
import TodoList from '../todo-list';

import './index.css';

import { STATUS_CODE, tasks } from '../todos';

export default function TodoPanel() {
  const [taskList, setTaskList] = useState(tasks);
  const [activeIndex, setActiveIndex] = useState(null);

  // 开始拖拽时, 获取拖拽的元素下标, 目的是拖拽时用于判断, 当前 list 是否允许 放入当前 item
  function handleDragStart(dragId) {
    setActiveIndex(taskList.findIndex(t => dragId === t.id));
  }

  // 拖拽结束
  function cancelSelect() {
    setActiveIndex(null);
  }

  // 拖拽至哪种状态
  function dragTo(status) {
    const task = taskList[activeIndex];
    if (task.status !== status) {
      task.status = status;
      setTaskList(taskList);
    }
    cancelSelect();
  }

  return <div className="todo_wrap">
    <h1>Todo Panel</h1>
    <div className="todo_list_wrap">
      {
        Object.keys(STATUS_CODE).map(status => <TodoList
          status={status}
          key={status}
          taskList={taskList}
          canDragIn={-1 !== activeIndex && taskList[activeIndex]?.status !== status}
          onDragStart={handleDragStart}
          onDragEnd={cancelSelect}
          dragTo={dragTo}
        ></TodoList>)
      }
    </div>
  </div>
}