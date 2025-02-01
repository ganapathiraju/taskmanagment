import React, { useState } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const MyTasks = () => {
  const [taskType, setTaskType] = useState('ongoing');

  const data = React.useMemo(
    () => [
      {
        clientName: 'Client A',
        title: 'Project X',
        typeOfWork: 'Translation',
        language: 'Spanish',
        style: 'Formal',
        deliveryFormat: 'PDF',
        trt: '2:30:00',
        clientPODate: '2023-05-01',
        clientDeadline: '2023-05-15',
        supplierDeadline: '2023-05-10',
        projectManager: 'John Doe',
        supplier: 'Supplier Inc.',
        qc: 'Jane Smith',
        status: 'In Progress',
        supplierRate: '$0.10/word',
        totalSupplied: '$1000',
      },
      // Add more sample data here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Client Name', accessor: 'clientName' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Type of Work', accessor: 'typeOfWork' },
      { Header: 'Language', accessor: 'language' },
      { Header: 'Style', accessor: 'style' },
      { Header: 'Delivery Format', accessor: 'deliveryFormat' },
      { Header: 'TRT', accessor: 'trt' },
      { Header: 'Client PO Date', accessor: 'clientPODate' },
      { Header: 'Client Deadline', accessor: 'clientDeadline' },
      { Header: 'Supplier Deadline', accessor: 'supplierDeadline' },
      { Header: 'Project Manager', accessor: 'projectManager' },
      { Header: 'Supplier', accessor: 'supplier' },
      { Header: 'QC', accessor: 'qc' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Supplier Rate', accessor: 'supplierRate' },
      { Header: 'Total Supplied', accessor: 'totalSupplied' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Tasks</h1>
      <div className="mb-4">
        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="ongoing">Ongoing</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
          <option value="onhold">On Hold</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageIndex * pageSize + 1}</span> to <span className="font-medium">{Math.min((pageIndex + 1) * pageSize, data.length)}</span> of{' '}
              <span className="font-medium">{data.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                First
              </button>
              <button onClick={() => previousPage()} disabled={!canPreviousPage} className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button onClick={() => nextPage()} disabled={!canNextPage} className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Last
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
