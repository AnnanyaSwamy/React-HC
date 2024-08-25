import { useState } from "react";
import Button from "./components/Button";
function App() {
  return (
    <>
      <div id="holder">
        <Button code="#FFD1DC" color="Pink" />
        <Button code="#AEC6CF" color="Blue" />
        <Button code="#77DD77" color="Green" />
        <Button code="#FDFD96" color="Yellow" />
        <Button code="#CFCFC4" color="Purple" />
        <Button code="#FFDAB9" color="Peach" />
        <Button code="#B2F2BB" color="Mint" />
        <Button code="#D4A5A5" color="Lilac" />
        <Button code="#F8B195" color="Coral" />
        <Button code="#E6E6FA" color="Lavender" />
      </div>
    </>
  );
}

export default App;
