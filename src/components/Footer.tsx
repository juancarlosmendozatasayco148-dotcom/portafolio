export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Juan Carlos. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
