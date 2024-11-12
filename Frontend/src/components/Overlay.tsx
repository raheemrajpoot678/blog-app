export default function Overlay({ z = 40 }: { z?: number }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-black/30 backdrop-blur-sm z-${z}`}
    ></div>
  );
}
