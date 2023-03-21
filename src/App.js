import React, { useState } from "react";
import Header from "./components/Header";
import { Dropdown } from "semantic-ui-react";
import Job from "./components/Job";
import data from "./data";
import "./App.css";

const App = () => {
  const [filteredData, setFilteredData] = useState(data);
  const filterOptions = {};
  data.forEach((job) => {
    if (!filterOptions[job.role]) {
      filterOptions[job.role] = true;
    }
    if (!filterOptions[job.level]) {
      filterOptions[job.level] = true;
    }
    job.languages.forEach((language) => {
      if (!filterOptions[language]) {
        filterOptions[language] = true;
      }
    });
    job.tools.forEach((tool) => {
      if (!filterOptions[tool]) {
        filterOptions[tool] = true;
      }
    });
  });
  const options = Object.keys(filterOptions).map((option) => ({
    key: option,
    text: option,
    value: option,
  }));
  const filterBasedOnSelection = (selections) => {
    const filteredData = data.filter((job) => {
      let isMatch = true;
      selections.forEach((selection) => {
        if (
          job.role !== selection &&
          job.level !== selection &&
          !job.languages.includes(selection) &&
          !job.tools.includes(selection)
        ) {
          isMatch = false;
        }
      });
      return isMatch;
    });
    setFilteredData(filteredData);
  };
  return (
    <div className="App">
      <Header />
      <Dropdown
        clearable
        placeholder="Filter Jobs "
        fluid
        multiple
        search
        selection
        options={options}
        style={{
          width: "80%",
          padding: 10,
          margin: "-25px auto",
        }}
        onChange={(e, data) => {
          filterBasedOnSelection(data.value);
        }}
      />
      {filteredData.map((job, index) => (
        <Job
          key={index}
          logo={job.logo.default}
          company={job.company}
          new={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </div>
  );
};

export default App;
