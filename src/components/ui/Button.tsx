import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon" | "searchAction" | "filterBtn" | "badge" | "pill";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button className={combinedClasses} style={style} {...props}>
      {children}
    </button>
  );
}
