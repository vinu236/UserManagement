import { useState } from "react";
import instance from "./services/axios";

const IMG = () => {
    const [images, setImages] = useState([]);
    const [titles, setTitles] = useState([]);

    const handleImageChange = (e) => {
        const files = e.target.files;
        const selectedFilesArray = Array.from(files);
        setImages(selectedFilesArray);
    }

    const handleTitleChange = (e, index) => {
        const newTitles = [...titles];
        newTitles[index] = e.target.value;
        setTitles(newTitles);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();

        images.forEach((file, index) => {
            fd.append(`images[${index}][url]`, URL.createObjectURL(file)); // Set URL here
            fd.append(`images[${index}][title]`, titles[index] || ''); // Set title
        });

        try {
            const response = await instance.post('/img', fd);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form encType="multipart/form-data" onSubmit={onSubmit}>
            <h1>Hello</h1>
          
                <div key={"d"}>
                    <input type="file" onChange={handleImageChange} name={`img-${index}`} />
                    <input 
                        type="text" 
                        value={"ds"} 
                        onChange={(e) => handleTitleChange(e, index)} 
                        placeholder="Title" 
                    />
                </div>
           
            <img src="" alt="" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default IMG;
