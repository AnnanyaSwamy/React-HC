import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/AnnanyaSwamy`)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl p-10 flex justify-center align-middle flex-col">
      <h1 className="text-center p-10">Followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="Github profile picture" />
    </div>
  );
}

export default Github;

export const githubUserData = async () => {
  const response = await fetch(`https://api.github.com/users/AnnanyaSwamy`);
  return response.json();
};
