import React, { useEffect, useState } from "react";

export default function Work() {
  const data = { name: "", email: "", Password: "" };
  const [inputData, setinputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handleData(e) {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.Password)
      alert("All fields are Mandatory");
    else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2
            className="
    ui-define"
          >
            Hello {inputData.name}, You've successfully Registered
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration form</h1>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={inputData.name}
              onChange={handleData}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={inputData.email}
              onChange={handleData}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="Password"
              placeholder="Enter your Password"
              value={inputData.Password}
              onChange={handleData}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
