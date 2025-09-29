import { createFileRoute } from "@tanstack/react-router";
import { ParamReader } from "@/component/ParamReader.tsx";

export const Route = createFileRoute("/dir/$id_/file")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/dir_/file"!
      <div>
        <ParamReader />
      </div>
    </div>
  );
}
