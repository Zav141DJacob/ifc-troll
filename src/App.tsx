import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "./App.css";
import ConnDisplay from "./interfaces/ConnDisplay";
import { connections } from "./interfaces";

function App() {
  const conns = connections

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <Button>Action</Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <Card className="h-full"></Card>
          </div>
          <div className="col-span-2">
            <Card className="h-full">
              {
                connections.map((val, i) => {
                  // const { from, to, fromMaterial, toMaterial, amount } = props
                  return <ConnDisplay key={i} {...val} />
                })
              }

            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;