import React from "react";
import { useDisclosure } from "@/hooks/useDisclosure";
import { CloseIcon, FilterIcon } from "../../Icons";
import { filterCounts } from "@/lib/game-filters";
import { Header, CloseButton, ModalContainer } from "@/components/molecules";
import {
  FilterButton,
  FilterCount,
  FilterItem,
  FilterName,
  ModalInnerContainer,
} from "./index.styles";

interface Props {
  filter: GameFilter;
  setFilter: React.Dispatch<React.SetStateAction<GameFilter>>;
}

export const FilterGames = ({ setFilter, filter }: Props) => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <>
      <FilterButton onClick={toggle}>
        <FilterIcon />
        <span>Filter</span>
      </FilterButton>
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
