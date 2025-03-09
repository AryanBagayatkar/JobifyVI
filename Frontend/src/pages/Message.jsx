import React from "react";
import { Star } from "lucide-react";

export default function Message({ msg, isStarred, toggleStar, markAsRead }) {
  return (
    <div
      className={`message ${msg.sender === "me" ? "text-end" : "text-start"} mb-2`}
      onClick={markAsRead}
    >
      <div
        className={`p-2 rounded ${msg.sender === "me" ? "bg-primary text-white" : "bg-light"}`}
        style={{ display: "inline-block", maxWidth: "75%" }}
      >
        {msg.text}
      </div>
      <button
        className="btn btn-sm ms-2"
        onClick={(e) => {
          e.stopPropagation();
          toggleStar();
        }}
      >
        <Star size={16} fill={isStarred ? "yellow" : "none"} />
      </button>
    </div>
  );
}
