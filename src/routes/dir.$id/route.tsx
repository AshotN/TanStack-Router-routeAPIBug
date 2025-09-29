import { createFileRoute } from "@tanstack/react-router";
import { ParamReader } from "@/component/ParamReader.tsx";

export const Route = createFileRoute("/dir/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/dir"!
      <div>
        <ParamReader />
      </div>
    </div>
  );
}
