
import {v2 as cloudnary} from "cloudinary";
import dotenv from "dotenv";


dotenv.config({
    path:"backend/config/config.env"
});

cloudnary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

// Upload file to cloudnary

export const upload_file = (file, folder) => {

    return new Promise((resolve, reject) => {

        cloudnary.uploader.upload(
            file,
            {
                resource_type:"auto",
                folder
            },
            (error, result) => {
                if(error) return reject(error)

                resolve({
                    public_id:result.public_id,
                    url:result.url
                })
            }
        );
    })
}

// Delete filr form cloudinary

export const delete_file = async(file) => {

    const res = await cloudnary.uploader.destroy(file);
    return res.result === "ok";

}