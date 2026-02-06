import type { FC } from "react";
import type { TableHeaderProps } from "./DataTable.types";

const TableHeader: FC<TableHeaderProps> = ({ title, onSort }) => (
  <th
    className="px-4 py-3 text-xs text-primary font-normal whitespace-nowrap"
    onClick={onSort}
  >
    <div className="flex justify-center items-center gap-2">
      {title}
      <img
        src="/assets/icons/common/chevron-down.svg"
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  </th>
);

export default TableHeader;
