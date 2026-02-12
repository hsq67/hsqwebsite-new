export const truncateText = (text: string, maxLength = 90): string => {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
};
