"use client";

import { useEffect, useState } from "react";

export default function HydrationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("hydrated");
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}