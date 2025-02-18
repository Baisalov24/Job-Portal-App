import React from "react";

export default function Input({ type, placeholder, onChange }: { type: string; placeholder: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className="border p-2 w-full" />
  );
}
