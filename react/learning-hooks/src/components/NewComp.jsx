import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const NewComp = () => {
  const quotesData = useFetch("https://dummyjson.com/quotes");

  return (
    <div>
      <p>These are very awesome quotes</p>
      {quotesData &&
        quotesData.quotes.map((quote) => {
          return (
            <div key={quote.id}>
              <p>{quote.quote}</p>
              <p>- {quote.author}</p>
            </div>
          );
        })}
    </div>
  );
};

export default NewComp;
