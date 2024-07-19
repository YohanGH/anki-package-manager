import { useState } from "react";

const useDeckCreation = (URL) => {
  const [filter, setFilter] = useState("");
  const [selectFile, setSelectFile] = useState(null);
  const [fileName, setFileName] = useState("");

  // Filter change management function
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // File change management function
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectFile(file);
    setFileName(file ? file.name : "");
  };

  // Function for managing form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create Object FormData for send in form
    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("filter", filter);
    formData.append("file", selectFile);

    // Send formData in backend with requet fetch
    try {
      // Send formData in backend with request fetch
      const response = await fetch(`${URL}/deck`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.status === 201) {
        // Manage response in backend
      } else {
        throw new Error(
          data.error || "An error occurred while creating the deck."
        );
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return {
    filter,
    selectFile,
    fileName,
    handleFilterChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useDeckCreation;
