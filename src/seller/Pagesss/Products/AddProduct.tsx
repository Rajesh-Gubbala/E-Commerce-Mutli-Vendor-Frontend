// import {
//   Button,
//   CircularProgress,
//   FormControl,
//   FormHelperText,
//   Grid2,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import "tailwindcss/tailwind.css";
// import { useFormik } from "formik";
// import React, { useState } from "react";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import CloseIcon from "@mui/icons-material/Close";
// import { UploadToCouldinary } from "../../../Utill/UploadToCouldinary";
// import { mainCategory } from "../../../Data/mainCategory";
// import { colors } from "../../../Data/Filter/color";
// import { menLevelThree } from "../../../Data/category/level Three/menLevelThree";
// import { womenLevelThree } from "../../../Data/category/level Three/womenLevelThree";
// import { furnitureLevelThree } from "../../../Data/category/level Three/furnitureLevelThree";
// import { electronicsLevelThree } from "../../../Data/category/level Three/electronicsLevelThree";
// import { menLevelTwo } from "../../../Data/category/level Two/menLevelTwo";
// import { womenLevelTwo } from "../../../Data/category/level Two/womenLevelTwo";
// import { furnitureLevelTwo } from "../../../Data/category/level Two/furnitureLevelTwo";
// import { electronicsLevelTwo } from "../../../Data/category/level Two/electronicsLevelTwo";
// import { string } from "yup";
// import { useAppDispatch } from "../../../State/Store";
// import { createProduct } from "../../../State/Seller/SellerProductSlice";

// const categoryTwo: { [key: string]: any[] } = {
//   men: menLevelTwo,
//   women: womenLevelTwo,
//   kids: [],
//   home_furniture: furnitureLevelTwo,
//   beauty: [],
//   electronics: electronicsLevelTwo,
// };

// const categoryThree: { [key: string]: any[] } = {
//   men: menLevelThree,
//   women: womenLevelThree,
//   kids: [],
//   home_furniture: furnitureLevelThree,
//   beauty: [],
//   electronics: electronicsLevelThree,
// };

// const AddProduct = () => {
//   const [uploadImage, setUploadingImage] = useState(false);

//   const [snackbarOpen, setOpenSnackbar] = useState(false);

//   const dispatch=useAppDispatch()

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       mrpPrice: "",
//       sellingPrice: "",
//       quantity: "",
//       color: "",
//       images: [],
//       category: "",
//       category2: "",
//       category3: "",
//       sizes: "",
//     },
//     // validationSchema: validationSchema,
//     onSubmit: (values: any) => {
//       console.log(values);
//       dispatch(createProduct({request:values,jwt:localStorage.getItem("jwt")}))
//     },
//   });

//   const handleImageChange = async (event: any) => {
//     const file = event.target.files[0];
//     setUploadingImage(true);

//     const image = await UploadToCouldinary(file);

//     formik.setFieldValue("images", [...formik.values.images, image]);

//     setUploadingImage(false);
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = [...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue("images", updatedImages);
//   };

//   const childCategory = (category: any, parentCategoryId: any) => {
//     return category.filter((child: any) => {
//       // console.log("Category", parentCategoryId, child);
//       return child.parentCategoryId == parentCategoryId;
//     });
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
//         <Grid2 container spacing={2}>
//           {/* Image Upload */}
//           <Grid2 className="flex flex-wrap gap-5" size={{ xs: 12 }}>
//             <input
//               type="file"
//               accept="image/*"
//               id="fileInput"
//               style={{ display: "none" }}
//               onChange={handleImageChange}
//             />

//             <label className="relative" htmlFor="fileInput">
//               <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
//                 <AddPhotoAlternateIcon className="text-gray-700" />
//               </span>

//               {uploadImage && (
//                 <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
//                   <CircularProgress />
//                 </div>
//               )}
//             </label>

//             <div className="flex flex-wrap gap-2">
//               {formik.values.images.map((image: any, index: any) => (
//                 <div className="relative">
//                   <img
//                     key={index}
//                     className="w-24 h-24 object-cover"
//                     src={image}
//                     alt={`ProductImage ${index + 1}`}
//                   />
//                   <IconButton
//                     onClick={() => handleRemoveImage(index)}
//                     size="small"
//                     color="error"
//                     sx={{
//                       position: "absolute",
//                       top: 0,
//                       right: 0,
//                       outline: "none",
//                     }}
//                   >
//                     <CloseIcon sx={{ fontSize: "1rem" }} />
//                   </IconButton>
//                 </div>
//               ))}
//             </div>
//           </Grid2>

//           {/* Product Fields */}
//           <Grid2 size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               id="title"
//               name="title"
//               label="Title"
//               value={formik.values.title}
//               onChange={formik.handleChange}
//               error={formik.touched.title && Boolean(formik.errors.title)}
//               helperText={formik.touched.title && formik.errors.title  ? String(formik.errors.title)
//                 : ""}
//               required
//             />
//           </Grid2>

//           <Grid2 size={{ xs: 12 }}>
//             <TextField
//               multiline
//               rows={4}
//               fullWidth
//               id="description"
//               name="description"
//               label="Description"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               error={
//                 formik.touched.description && Boolean(formik.errors.description)
//               }
//               helperText={
//                 formik.touched.description && formik.errors.description
//                   ? String(formik.errors.description)
//                   : ""
//               }
//               required
//             />
//           </Grid2>

//           <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
//             <TextField
//               fullWidth
//               id="mrp_price"
//               name="mrpPrice"
//               label="MRP Price"
//               type="number"
//               value={formik.values.mrpPrice}
//               onChange={formik.handleChange}
//               error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
//               helperText={formik.touched.mrpPrice && formik.errors.mrpPrice   ? String(formik.errors.mrpPrice)
//                 : ""}
//               required
//             />
//           </Grid2>

//           <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
//             <TextField
//               fullWidth
//               id="sellingPrice"
//               name="sellingPrice"
//               label="Selling Price"
//               type="number"
//               value={formik.values.sellingPrice}
//               onChange={formik.handleChange}
//               error={
//                 formik.touched.sellingPrice &&
//                 Boolean(formik.errors.sellingPrice)
//               }
//               helperText={
//                 formik.touched.sellingPrice && formik.errors.sellingPrice    ? String(formik.errors.sellingPrice)
//                 : ""
//               }
//               required
//             />
//           </Grid2>

//           {/* Color Selection */}
//           <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
//             <FormControl
//               fullWidth
//               error={formik.touched.color && Boolean(formik.errors.color)}
//               required
//             >
//               <InputLabel id="color-label">Color</InputLabel>
//               <Select
//                 labelId="color-label"
//                 id="color"
//                 name="color"
//                 value={formik.values.color}
//                 onChange={formik.handleChange}
//                 label="Color"
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 {colors.map((color, index) => (
//                   <MenuItem value={color.name} key={index}>
//                     <div className="flex gap-3">
//                       <span
//                         style={{ backgroundColor: color.hex }}
//                         className={`h-5 w-5 rounded-full ${
//                           color.name === "White" ? "border" : ""
//                         }`}
//                       ></span>
//                       <p>{color.name}</p>
//                     </div>
//                   </MenuItem>
//                 ))}
//               </Select>
//               {formik.touched.color && formik.errors.color && (
//                 <FormHelperText>{String(formik.errors.color)}</FormHelperText>
//               )}
//             </FormControl>
//           </Grid2>

//           {/* Sizes Selection */}
//           <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
//             <FormControl
//               fullWidth
//               error={formik.touched.sizes && Boolean(formik.errors.sizes)}
//               required
//             >
//               <InputLabel id="sizes-label">Sizes</InputLabel>
//               <Select
//                 labelId="sizes-label"
//                 id="sizes"
//                 name="sizes"
//                 value={formik.values.sizes}
//                 onChange={formik.handleChange}
//                 label="Sizes"
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 {["FREE", "S", "M", "L", "XL"].map((size) => (
//                   <MenuItem key={size} value={size}>
//                     {size}
//                   </MenuItem>
//                 ))}
//               </Select>
//               {formik.touched.sizes && formik.errors.sizes && (
//                 <FormHelperText>{String(formik.errors.sizes)}</FormHelperText>
//               )}
//             </FormControl>
//           </Grid2>

//           {/* Category Selection */}
//           <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
//             <FormControl
//               fullWidth
//               error={formik.touched.category && Boolean(formik.errors.category)}
//               required
//             >
//               <InputLabel id="category-label">Category</InputLabel>
//               <Select
//                 labelId="category-label"
//                 id="category"
//                 name="category"
//                 value={formik.values.category}
//                 onChange={formik.handleChange}
//                 label="Category"
//               >
//                 {mainCategory.map((item) => (
//                   <MenuItem key={item.categoryId} value={item.categoryId}>
//                     {item.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//               {formik.touched.category && formik.errors.category && (
//                 <FormHelperText>
//                   {String(formik.errors.category)}
//                 </FormHelperText>
//               )}
//             </FormControl>
//           </Grid2>

//           <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
//             <FormControl
//               fullWidth
//               error={formik.touched.category && Boolean(formik.errors.category)}
//               required
//             >
//               <InputLabel id="category2-label">Second Category</InputLabel>
//               <Select
//                 labelId="category2-label"
//                 id="category2"
//                 name="category2"
//                 value={formik.values.category2}
//                 onChange={formik.handleChange}
//                 label="Second Category"
//               >
//                 {formik.values.category &&
//                   categoryTwo[formik.values.category]?.map((item) => (
//                     <MenuItem key={item.categoryId} value={item.categoryId}>
//                       {item.name}
//                     </MenuItem>
//                   ))}
//               </Select>
//               {formik.touched.category && formik.errors.category && (
//                 <FormHelperText>
//                   {String(formik.errors.category)}
//                 </FormHelperText>
//               )}
//             </FormControl>
//           </Grid2>

//           <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
//             <FormControl
//               fullWidth
//               error={formik.touched.category && Boolean(formik.errors.category)}
//               required
//             >
//               <InputLabel id="category-label">Third Category</InputLabel>
//               <Select
//                 labelId="category-label"
//                 id="category"
//                 name="category3"
//                 value={formik.values.category3}
//                 onChange={formik.handleChange}
//                 label="Third Category"
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 {formik.values.category2 &&
//                   childCategory(
//                     categoryThree[formik.values.category],
//                     formik.values.category2
//                   )?.map((item: any) => (
//                     <MenuItem key={item.categoryId} value={item.categoryId}>
//                       {item.name}
//                     </MenuItem>
//                   ))}
//               </Select>
//               {formik.touched.category && formik.errors.category && (
//                 <FormHelperText>
//                   {String(formik.errors.category)}
//                 </FormHelperText>
//               )}
//             </FormControl>
//           </Grid2>

//           {/* Submit Button */}
//           <Grid2 size={{ xs: 6 }}>
//             <Button
//               sx={{ p: "14px" }}
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//             >
//               Add Product
//             </Button>
//           </Grid2>
//         </Grid2>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import "tailwindcss/tailwind.css";
import { useFormik } from "formik";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { UploadToCouldinary } from "../../../Utill/UploadToCouldinary";
import { mainCategory } from "../../../Data/mainCategory";
import { colors } from "../../../Data/Filter/color";
import { menLevelThree } from "../../../Data/category/level Three/menLevelThree";
import { womenLevelThree } from "../../../Data/category/level Three/womenLevelThree";
import { furnitureLevelThree } from "../../../Data/category/level Three/furnitureLevelThree";
import { electronicsLevelThree } from "../../../Data/category/level Three/electronicsLevelThree";
import { menLevelTwo } from "../../../Data/category/level Two/menLevelTwo";
import { womenLevelTwo } from "../../../Data/category/level Two/womenLevelTwo";
import { furnitureLevelTwo } from "../../../Data/category/level Two/furnitureLevelTwo";
import { electronicsLevelTwo } from "../../../Data/category/level Two/electronicsLevelTwo";
import { useAppDispatch } from "../../../State/Store";
import { createProduct } from "../../../State/Seller/SellerProductSlice";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
      dispatch(createProduct({ request: values, jwt: localStorage.getItem("jwt") }));
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await UploadToCouldinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        {/* Updated to Grid */}
        <Grid container spacing={2}>
          {/* Image Upload */}
          <Grid className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternateIcon className="text-gray-700" />
              </span>

              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image: any, index: any) => (
                <div className="relative" key={index}>
                  <img
                    className="w-24 h-24 object-cover"
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          {/* Product Fields */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title ? String(formik.errors.title) : ""}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description ? String(formik.errors.description) : ""}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrpPrice"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice ? String(formik.errors.mrpPrice) : ""}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
              helperText={formik.touched.sellingPrice && formik.errors.sellingPrice ? String(formik.errors.sellingPrice) : ""}
              required
            />
          </Grid>

          {/* Color Selection */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl fullWidth error={formik.touched.color && Boolean(formik.errors.color)} required>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {colors.map((color, index) => (
                  <MenuItem value={color.name} key={index}>
                    <div className="flex gap-3">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{String(formik.errors.color)}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Sizes Selection */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl fullWidth error={formik.touched.sizes && Boolean(formik.errors.sizes)} required>
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Sizes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["FREE", "S", "M", "L", "XL"].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{String(formik.errors.sizes)}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Category Selection */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)} required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >
                {mainCategory.map((item) => (
                  <MenuItem key={item.categoryId} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{String(formik.errors.category)}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl fullWidth error={formik.touched.category2 && Boolean(formik.errors.category2)} required>
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Second Category"
              >
                {formik.values.category &&
                  categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl fullWidth error={formik.touched.category3 && Boolean(formik.errors.category3)} required>
              <InputLabel id="category3-label">Third Category</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  childCategory(categoryThree[formik.values.category], formik.values.category2)?.map((item: any) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Submit Button */}
          <Grid size={{ xs: 12 }}>
            <Button sx={{ p: "14px" }} color="primary" variant="contained" fullWidth type="submit">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;