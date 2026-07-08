export default function FloatingBeans() {
  const beans = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beans.map((_, i) => (
        <span key={i} className="bean absolute h-2 w-3 rounded-[60%] bg-beige/40"
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDuration: `${14 + (i % 7) * 2}s`,
            animationDelay: `${-i * 1.2}s`,
            transform: `rotate(${i * 20}deg)`,
          }} />
      ))}
    </div>
  );
}
