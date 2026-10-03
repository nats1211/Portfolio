function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-sm text-foreground">
      {children}
    </span>
  );
}

export default Badge;
