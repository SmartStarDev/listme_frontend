import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

type Props = {
  value?: string;
  onChangeValue?: (value: string) => void;
};

const RichTextEditor: React.FC<Props> = ({
  value = "",
  onChangeValue = () => {},
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div className="bg-ink-200 border border-ink-450 rounded-3xl p-5 h-[540px]">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChangeValue}
        modules={{
          toolbar: ["bold", "italic", "underline", { list: "bullet" }],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
