import React from "react";

export interface TopicProps {
  name: string;
  stargazerCount: number;
}

export default function Topic({name, stargazerCount}: TopicProps) {
  return (
    <div className="topic">
      <span className="topic__name">{name}</span>
      <span className="topic__stargazerCount">{stargazerCount}</span>
    </div>
  )
}