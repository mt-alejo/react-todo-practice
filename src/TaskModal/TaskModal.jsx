import { createPortal } from "react-dom";

function TaskModal({ children }) {
  return createPortal(
    <div className="TaskModal">{children}</div>,
    document.getElementById("modal")
  );
}

export default TaskModal;
