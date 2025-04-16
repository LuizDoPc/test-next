export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Hello World</h1>
          <p className="text-gray-600">Welcome to our sample application</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Header 1</th>
                <th className="p-4 text-left">Header 2</th>
                <th className="p-4 text-left">Header 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4">Row 1, Cell 1</td>
                <td className="p-4">Row 1, Cell 2</td>
                <td className="p-4">Row 1, Cell 3</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4">Row 2, Cell 1</td>
                <td className="p-4">Row 2, Cell 2</td>
                <td className="p-4">Row 2, Cell 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
