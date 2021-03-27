import { Button } from "./Button";
import '../styles/sidebar.scss';

interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}
interface SideBarProps {
  genres: Genre[],
  selectedGenreId: number;
  onClickCategory: (id: number) => void;
}


export function SideBar({ genres, selectedGenreId, onClickCategory }: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickCategory(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}