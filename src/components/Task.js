import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          name="checked"
          disabled
        />
        <span
          className="checkbox-custom"
          onClick={onArchiveTask.bind(this, id)}
        />
      </label>
      <div className="title">
        <input type="text" value={title} placeholder="Input title" readOnly />
      </div>
      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a href="#" onClick={onPinTask.bind(this, id)}>
            <span className="icon-star" />
          </a>
        )}
      </div>
    </div>
  );
}
