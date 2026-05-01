import { Button } from "@repo/ui/button";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3 className="bg-red-500">Welcome Home!!!</h3>
      <Button className=" bg-amber-300" variant="default">
        Click Me
      </Button>
    </div>
  );
}
