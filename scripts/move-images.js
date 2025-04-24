import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moveImages = () => {
  const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'images');
  const targetDir = path.join(__dirname, '..', 'public', 'assets', 'images');

  // Crear el directorio de destino si no existe
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Función para copiar directorios recursivamente
  const copyDir = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  // Copiar las imágenes
  copyDir(sourceDir, targetDir);
  console.log('Images moved successfully!');
};

moveImages(); 