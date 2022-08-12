import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>

      <div className="card-grid">
        {isLoading && <h2>Cargando...</h2>}

        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
