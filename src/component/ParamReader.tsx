import {getRouteApi} from "@tanstack/react-router";

const routeApi = getRouteApi("/dir/$id")

export const ParamReader = () => {
    const params = routeApi.useParams()
  return <div>ParamReader: {params.id}</div>
}