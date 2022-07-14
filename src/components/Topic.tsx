import React from "react";
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';

export interface TopicProps {
  id: string;
  name: string;
  stargazerCount: number;
  onClick: () => void;
}

export default function Topic({name, stargazerCount, onClick}: TopicProps) {
  return (
    <Badge badgeContent={stargazerCount} max={99999} color="primary">
      <Chip label={name} onClick={onClick} />
    </Badge>
  )
}