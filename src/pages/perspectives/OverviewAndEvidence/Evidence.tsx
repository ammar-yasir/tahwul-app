import { Badge } from "../../../components/Badge/Badge";
import Card from "../../../components/Card/Card";
import DataTable from "../../../components/DataTable";
import type { Column } from "../../../components/DataTable/DataTable.types";
import RecentActivites from "../../dashboard/RecentActivites";
import Comments from "./Comments";
import { STATUS_MAP, type IDocument, type StatusType } from "./types";

const columns: Column<IDocument>[] = [
    { key: 'id', label: 'Document Number', sortable: true },
    { 
      key: 'name', 
      label: 'Document Name', 
      sortable: true,
      render: (val: string) => (
        <span className="text-[#4a5e8a] font-medium border-b border-[#4a5e8a]/30 pb-0.5 cursor-pointer hover:border-[#4a5e8a]">
          {val}
        </span>
      )
    },
    { key: 'lead', label: 'Document Lead' },
    { key: 'preparer', label: 'Document Preparer' },
    { key: 'date', label: 'Date' },
    { key: 'dueDate', label: 'Due Date' },
    { 
      key: 'status', 
      label: 'Status', 
      render: (val: StatusType) => <Badge label={val} variant={STATUS_MAP[val]} /> 
    },
  ];

  const data: IDocument[] = [
    { 
      id: '5.4.1.1', 
      name: 'Digital_Transformation_Plan.Pdf', 
      lead: 'Ahmed Khaled', 
      preparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved' 
    },
    { 
      id: '5.4.1.2', 
      name: 'KPI_Framework.Xlsx', 
      lead: 'Mona Hamed', 
      preparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review' 
    },
  ];

const EvidenceTab = () => (
  <>
    <Card widthClass="w-full" heightClass="h-full" padding="p-4">
      <div className="flex justify-center items-center">
        <DataTable<IDocument> columns={columns} data={data} />
      </div>
    </Card>
    <div className="flex flex-col xl:flex-row gap-4">
      <Comments />
      <RecentActivites />
    </div>
  </>
);

export default EvidenceTab;