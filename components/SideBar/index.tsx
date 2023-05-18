import { SidebarItem } from "./item";
import { useGetActiveGameId } from "@/hooks/index";
import styled from "styled-components";
import { FilterGames } from "./FilterModal";
import { useEffect, useRef, useState } from "react";
import { gameFilters } from "@/lib/game-filters";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray.sidebar};
  height: 100vh;
  padding-left: 20px;
`;
const HeaderTitle = styled.h1`
  margin-top: 5vh;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderDescription = styled.div`
  margin-top: 1vh;
  font-size: 1rem;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.gray.primary};
  font-weight: 400;
`;

export const ContentContainer = styled.div`
  margin-top: 1vh;
  height: 75vh;
  overflow-y: scroll;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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
