import CheckList, {CheckboxItemProps} from "./components/CheckList/component";



const startingItems: CheckboxItemProps[] = [
  { name: "tasks", value: "unchecked", checked: false, onChange: () => {} },
  { name: "tasks", value: "checked", checked: true, onChange: () => {} },
];

function App() {

    return (
      <>
        <CheckList defaultItems={startingItems} />
      </>
    )
}

export default App;
