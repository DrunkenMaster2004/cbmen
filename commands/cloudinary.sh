npm i cloudinary && read -p "Cloudinary cloud name: " ccn && read -p "Cloudinary api key: " cak && read -p "Cloudinary api secret: " cas && echo "
CLOUDINARY_CLOUD_NAME=$ccn
CLOUDINARY_API_KEY=$cak
CLOUDINARY_API_SECRET=$cas" >> .env && cd src/utils && touch cloudinary.js && echo 'import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY  , 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFileUri) => {
    try {
        if(!localFileUri) return null
        const response = await cloudinary.uploader.upload(localFileUri, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFileUri)
        return (response)
    } catch {
        fs.unlinkSync(localFileUri)
        return null
    }
}

export { uploadOnCloudinary }' > cloudinary.js && cd ../..