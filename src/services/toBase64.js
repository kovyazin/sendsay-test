const toBase64 = (file, errorMessage = 'Не удалось загрузить файл') =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(errorMessage);
  });

export default toBase64;
