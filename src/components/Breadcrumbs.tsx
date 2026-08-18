import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { name: string; path?: string };

const Breadcrumbs: React.FC<{ trail: Crumb[] }> = ({ trail }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-1 text-sm text-reelmatch-gray">
      {trail.map((crumb, index) => (
        <li key={crumb.name} className="flex items-center gap-1">
          {crumb.path ? (
            <Link
              to={crumb.path}
              className="hover:text-reelmatch-dark transition-colors underline-offset-2 hover:underline"
            >
              {crumb.name}
            </Link>
          ) : (
            <span aria-current="page" className="text-reelmatch-dark">
              {crumb.name}
            </span>
          )}
          {index < trail.length - 1 && (
            <ChevronRight size={14} aria-hidden="true" className="opacity-60" />
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
