import React, { useState, useMemo } from "react";
import ListItem from "@/shared/components/modules/ListSearch/ListItem";
import { FiSearch } from "react-icons/fi";

type Props = {
  searchItems: string[];
  onSelectItem: (item: string) => void;
};

const ListSearch: React.FC<Props> = ({ searchItems, onSelectItem }) => {
  const [search, setSearch] = useState("");

  const filteredItem = useMemo(() => {
    return searchItems.filter((item) => item.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }, [search, searchItems]);

  return (
    <div className="bg-ink-200 border border-ink-450 rounded-3xl p-5 pb-0 h-[540px] overflow-hidden flex flex-col">
      <div className="relative mb-4">
        <input
          className="bg-white px-2 py-1.5 border border-ink-450 rounded-md w-full h-10 focus:outline-none focus:border-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2" />
      </div>

      {search && (
        <p className="text-sm mb-4">
          Showing {filteredItem.length} results for <b>{search}</b>
        </p>
      )}

      <div className="flex flex-col gap-2.5 flex-1 overflow-auto">
        {filteredItem.map((item, index) => (
          <ListItem
            key={index}
            content={item}
            searchWord={search}
            onSelect={onSelectItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ListSearch;
