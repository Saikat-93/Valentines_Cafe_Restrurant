export default function Field({ label, name, type = "text", className = "", ...rest }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-rustic transition" />
    </div>
  );
}
