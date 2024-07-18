import { useState } from "react";

const useDeckCreation = () => {
    const [filter, setFilter] = useState("");
    const [selectFile, setSelectFile] = useState(null);
    const [fileName, setFileName] = useState("");

    // Fonction pour gérer le changement de filtre
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    // Fonction pour gérer le changement de fichier
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectFile(file);
        setFileName(file ? file.name : "");
      }

      // Fonction pour gérer la soumission du formulaire
      const handleSubmit = async (event) => {
        event.preventDefault();
  
        // Create Object FormData for send in form
        const formData = new FormData();
        formData.append("title", event.target.title.value);
        formData.append("description", event.target.description.value);
        formData.append("filter", JSON.stringify(filter)); // Convert array to JSON string
        formData.append("file", selectFile);
  
        // Send formData in backend with requet fetch
        try {
          // Send formData in backend with request fetch
          const response = await fetch(`${URL}/deck`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
}

export default useDeckCreation;