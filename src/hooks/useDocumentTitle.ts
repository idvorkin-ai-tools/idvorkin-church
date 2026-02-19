import { useEffect } from "react";

const BASE_TITLE = "Saint Demetrios Greek Orthodox Church";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
  }, [title]);
}
