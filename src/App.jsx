import Button from "./components/Button";

export default function App() {
    return (
        <>
        <h1>Hello</h1>
        <Button handleClick={() => console.log("Testing")} label={"Click Me"}/>
        </>
    );
}