import React from "react";
import { FiPlus } from "react-icons/fi";
import Highlighter from "react-highlight-words";

type Props = {
  content: string;
  searchWord?: string;
  onSelect?: (content: string) => void;
};

const ListItem: React.FC<Props> = ({ content, searchWord, onSelect }) => {
  return (
    <div className="rounded-md border border-ink-450 py-4 px-5 flex flex-col sm:flex-row items-center gap-5 bg-white">
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center bg-primary flex-shrink-0 cursor-pointer hover:opacity-70"
        onClick={() => onSelect?.(content)}
      >
        <FiPlus className="stroke-white" />
      </span>
      <Highlighter
        className="text-sm leading-6 pr-0 sm:pr-10"
        highlightClassName="bg-primary-300"
        searchWords={[searchWord ?? '']}
        autoEscape={true}
        textToHighlight={content}
      />
    </div>
  );
};

export default ListItem;
