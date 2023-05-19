import { SidebarItem } from "./item";
import { useGetActiveGameId } from "@/hooks/index";
import {
  Container,
  ContentContainer,
  FilterContainer,
  HeaderDescription,
  HeaderTitle,
} from "./index.styles";
import { FilterGames } from "./FilterModal";
import { useEffect, useRef, useState } from "react";
import { gameFilters } from "@/lib/game-filters";

const games = gameFilters();
export function Sidebar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeGameId = useGetActiveGameId();
  const [filter, setFilter] = useState<GameFilter>({
    label: "All",
    value: "all",
  });

  useEffect(() => {
    if (activeGameId && scrollRef.current?.children[activeGameId]) {
      scrollRef.current.children[activeGameId].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeGameId]);

  return (
    <Container>
      <HeaderTitle>All Games</HeaderTitle>
      <HeaderDescription>
        List of all games pending, ongoing, canceled or ended.
      </HeaderDescription>

      <FilterContainer>
        <FilterGames setFilter={setFilter} filter={filter} />
      </FilterContainer>
      <ContentContainer ref={scrollRef} className="scrollContainer">
        {games[filter.value].map((game) => (
          <SidebarItem
            game={game}
            isActive={activeGameId === game.id}
            key={game.id}
          />
        ))}
      </ContentContainer>
    </Container>
  );
}
