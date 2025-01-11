import ListGroup from "./components/ListGroup";
function App() {
  return <div><ListGroup items={[]} heading={""} onSelectItem={function (item: string): void {
    throw new Error("Function not implemented.");
  } } /></div>;
}

export default App;