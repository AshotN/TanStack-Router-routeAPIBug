import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <div>
        <Link to="/dir/$id" params={{ id: "123" }}>
          /dir/123
        </Link>
      </div>
      <div>
        <Link to="/dir/$id/file" params={{ id: "123" }}>
          /dir_/file
        </Link>
      </div>
    </div>
  );
}
