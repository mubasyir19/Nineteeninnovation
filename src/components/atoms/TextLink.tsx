import React from "react";
import Link from "next/link";

interface TextLinkProps {
  direct: string;
  children: React.ReactNode;
}

export default function TextLink({ direct, children }: TextLinkProps) {
  return <Link href={direct}>{children}</Link>;
}
