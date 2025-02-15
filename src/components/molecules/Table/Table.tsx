import { Props } from './types';

const Table = <Data extends Record<string, any>, ExtraData>(props: Props<Data, ExtraData>) => {
  const { headers, rows, extraData } = props;

  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {headers?.map(({ label, key }) => (
            <th key={key} className="p-4 font-bold uppercase text-left">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {rows?.map((row, rowIndex) => (
        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
          {headers.map(({ key, accessorFn }) => (
            <td className="p-4" key={key}>{ accessorFn?.(row, extraData) ?? row[key]}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};;
Table.displayName = 'Table';

export default Table;
