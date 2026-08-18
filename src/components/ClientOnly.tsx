import React, { useEffect, useState } from "react";

/**
 * Renders children only after hydration. Used for chrome that has no SEO value
 * (toasts, cookie banner) so the prerendered HTML and the first client render
 * match exactly.
 */
const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
};

export default ClientOnly;
