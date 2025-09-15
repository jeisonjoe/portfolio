import fs from 'fs';
import path from 'path';
import { imageSize } from "image-size";


export async function GET() {
    const imagesDir = path.join(process.cwd(), "/public/photographs/galleryimages");
    const files = fs
        .readdirSync(imagesDir)
        .filter(file => /\.(png|jpe?g)$/i.test(file));

    const images = files.map(file => {
        const filePath = path.join(imagesDir, file);
        const buffer = fs.readFileSync(filePath)
        const { width, height } = imageSize(buffer);
        return { url: `/photographs/galleryimages/${file}`, width, height }
    });

    return Response.json(images);
}