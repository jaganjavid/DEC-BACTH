import { use, useEffect, useState } from "react"
import UserLayout from "../layout/UserLayout"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useUploadAvatarMutation } from "../../redux/api/userApi";
import toast from "react-hot-toast";


const UploadAvatar = () => {

  const {user} = useSelector((state) => state.auth);

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    user?.avatar?.url || "./assets/default_avatar.jpg"
  );

  const navigate = useNavigate();

  const [uploadAvatar, {isLoading, isSuccess, error}] = useUploadAvatarMutation();

  useEffect(() => {
    if(error) toast.error(error?.data?.message || "Upload failed");

    if(isSuccess){
      toast.success("Avatar uploaded successfully");
      navigate("/me/profile")
    }
  }, [isSuccess, error, navigate]);

  const onChange = (e) => {
    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      
      setAvatarPreview(reader.result);
      setAvatar(reader.result);
      
      console.log(reader);
    }

    reader.readAsDataURL(file);


  }

  const submitHandler = (e) => {
    e.preventDefault();

    if(!avatar) return toast.error("please select an avatar");

    uploadAvatar({avatar});
  }



  return (
    <UserLayout>
      <div className="rom wrapper">
        <div className="col-10 col-lg-8">
          <form className="shadow rounded" onSubmit={submitHandler}>
            <h2 className="mb-4">Upload Avatar</h2>

            <div className="mb-3">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <figure className="avatar">
                    <img src={avatarPreview} className="rounded-circle" alt="Avatar Preview" style={{
                      width:"50px",
                      height:"50px",
                      objectFit:"cover"
                    }}/>
                  </figure>
                </div>
                <div className="input-group d-flex gap-2 align-items-center">
                    <label htmlFor="customFile" className="form-label">
                      Choose Avatar
                    </label>

                    <input type="file" className="form-control" id="customFile" accept="image/*" onChange={onChange}/>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  )
}

export default UploadAvatar