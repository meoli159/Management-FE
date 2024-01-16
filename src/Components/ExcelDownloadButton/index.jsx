import { FaFileExport } from 'react-icons/fa';
import { CSVLink } from 'react-csv';
import './style.css';
export const ExcelDownloadButton = ({ data, filename }) => {
  return (
    <CSVLink data={data} filename={filename} className="btn btn-success " target="_blank">
      <FaFileExport size={100} />
      Xuất Excel
    </CSVLink>
  );
};
