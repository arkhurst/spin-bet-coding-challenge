import { useDisclosure } from "@/hooks/useDisclosure";
import { CloseIcon, FilterIcon } from "../../Icons";
import styled from "styled-components";
import React from "react";
import { filterCounts } from "@/lib/game-filters";
import { CloseButton, Header, ModalContainer } from "@/components/atoms";

export const Button = styled.button`
  background: black;
  color: white;
  font-size: 1.2rem;
  margin-top: 2vh;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0px;
  margin-right: 10px;
  cursor: pointer;
`;

interface Props {
  filter: GameFilter;
  setFilter: React.Dispatch<React.SetStateAction<GameFilter>>;
}

export const FilterGames = ({ setFilter, filter }: Props) => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <>
      <Button onClick={toggle}>
        <FilterIcon />
        <span>Filter</span>
      </Button>
      {isOpen ? (
        <Modal
          onClose={toggle}
          activeFilter={filter}
          onChange={(filter) => setFilter(filter)}
        />
      ) : null}
    </>
  );
};

const ModalInnerContainer = styled.div`
  background: white;
  border-radius: 5px;
  position: relative;
  width: 25vw;
  height: 42vh;
  color: #000;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45vw;
    height: 32vh;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    height: 45vh;
  }
`;

const FilterItem = styled.div<{ active: boolean }>`
  padding: 15px 30px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#f2f2f2" : "unset")};

  &:hover {
    background: #f2f2f2;
  }
`;

const FilterName = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const FilterCount = styled.div`
    background: #000};
    padding: 10px 30px;
    color: #fff;
`;

interface ModalProps {
  onClose: VoidFunction;
  onChange: (val: GameFilter) => void;
  activeFilter: GameFilter;
}

const counts = filterCounts();

const filters = [
  { label: "All", value: "all", count: counts.all },
  { label: "Result", value: "result", count: counts.result },
  { label: "Live", value: "live", count: counts.live },
  { label: "Upcoming", value: "upcoming", count: counts.upcoming },
];

const Modal = ({ onClose, activeFilter, onChange }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalInnerContainer>
        <Header>
          <h1>Filters</h1>
          <CloseButton aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>
        {filters.map((filter, filterIdx) => (
          <FilterItem
            key={filterIdx}
            active={filter.value === activeFilter.value}
            onClick={() => {
              onChange({
                label: filter.label,
                value: filter.value,
              });
              onClose();
            }}
          >
            <FilterName>{filter.label}</FilterName>
            <FilterCount>{filter.count}</FilterCount>
          </FilterItem>
        ))}
      </ModalInnerContainer>
    </ModalContainer>
  );
};
