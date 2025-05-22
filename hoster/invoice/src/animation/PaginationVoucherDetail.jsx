import React from 'react'

const PaginationVoucherDetail = () => {
  return (
    <div className="w-full md:w-[50%] bg-white border rounded-2xl p-6 space-y-6 animate-pulse">
      {/* Header */}
      <div className="h-5 w-40 bg-gray-200 rounded" />

      {/* Metadata */}
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
            <div className="h-4 w-32 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-2">Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="flex items-center gap-2 py-2">
                <div className="w-8 h-8 bg-gray-300 rounded" />
                <div className="w-32 h-4 bg-gray-300 rounded" />
              </td>
              <td>
                <div className="w-6 h-4 bg-gray-300 rounded" />
              </td>
              <td>
                <div className="w-20 h-4 bg-gray-300 rounded" />
              </td>
              <td>
                <div className="w-20 h-4 bg-gray-300 rounded" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="text-sm text-right space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-end gap-8">
            <div className="w-24 h-4 bg-gray-200 rounded" />
            <div className="w-20 h-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      {/* Attachment */}
      <div>
        <div className="h-4 w-28 bg-gray-200 mb-2 rounded" />
        <div className="flex items-center justify-between p-3 border rounded-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded" />
            <div>
              <div className="w-32 h-4 bg-gray-300 rounded mb-1" />
              <div className="w-16 h-3 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="w-20 h-4 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  )
}

export default PaginationVoucherDetail