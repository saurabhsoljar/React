import React, { useRef, useState } from "react"
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {

    const [image_url,setImage_url] = useState("/");
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        
        let data = await response.json();
        let data_array = data.data;
        
        if (data_array && data_array.length > 0) {
            setImage_url(data_array[0].url);
        } else {
            // Handle the case where data_array is empty or undefined
            console.error("No image URL found in the response.");
        }
    }
    

  return (
    <div className="ai-image-generator">
        <div className="header">
            Ai image <span>generator</span>
        </div>

        <div className="img-loading">
            <div className="image"><img src={image_url==="/"?default_image:image_url} alt="" /></div>
        </div>

        <div className="search-box">
            <input type="text" ref={inputRef} className="search-input" placeholder="Describe What You Want To See"/>
            <div className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator