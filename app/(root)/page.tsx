//import Hello from "../components/hello";
function Hello() {
  console.log("I am a client-side component");
     return (
     <div>
         <h1>Hello</h1>
         </div>
 
     );
 }

export default function Home() {
  console.log("Hello, world!");
  
  return (
    <>
    <h1 className="text-3xl">Welcome to next</h1>
    <Hello />
     </>
  );
}
