### Cloudinary File Upload with Node.js

A simple Node.js application to upload files to Cloudinary.

#### Features
- **File Upload**: Upload images directly to Cloudinary.
- **Environment Variables**: Manage Cloudinary credentials securely.
- **Express & Multer**: Use Express for HTTP requests and Multer for file handling.

#### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/cloudinary-upload-nodejs.git
    cd cloudinary-upload-nodejs
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file and add your Cloudinary credentials:
    ```plaintext
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```