import type { ReactNode } from "react";

// Define component props
interface StatusMessageProps {
  children: ReactNode;
  type: "loading" | "error" | "success";
}

// Reusable status component
export default function StatusMessage({
  children,
  type,
}: StatusMessageProps) {
  return (
    <p
      className={`search-status ${
        type === "error" ? "error-status" : ""
      } ${type === "success" ? "success-status" : ""}`}
      role={type === "error" ? "alert" : "status"}
    >
      {children}
    </p>
  );
}
