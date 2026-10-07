const MAX_SIZE = 1024 * 1024; // 1MB

function ImageUpload({ image, onChange, onError }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return onError("Please choose an image file.");
    if (file.size > MAX_SIZE) return onError("Image is too large. Maximum size is 1MB.");
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
    onError("");
  };

  return (
    <label className="flex h-48 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-600">
      {image ? (
        <img src={image} alt="Preview" className="h-full w-full object-cover" />
      ) : (
        <span className="text-sm">Click to choose or drop an image file</span>
      )}
      <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </label>
  );
}

export default ImageUpload;
