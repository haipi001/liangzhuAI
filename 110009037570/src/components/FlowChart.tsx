import { Sankey } from 'recharts';

const data = {
  nodes: [
    { name: 'Market Data' },
    { name: 'User Behavior' },
    { name: 'Token Flow' },
    { name: 'Conclusion' }
  ],
  links: [
    { source: 0, target: 2, value: 10 },
    { source: 1, target: 2, value: 8 },
    { source: 2, target: 3, value: 18 }
  ]
};

export default function FlowChart({ data }: { data: any }) {
  return (
    <div className="h-64">
      <Sankey
        width={400}
        height={200}
        data={data}
        nodePadding={20}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        node={{ stroke: '#FFD6E0', strokeWidth: 2 }}
        link={{ stroke: '#93C5FD', strokeWidth: 1 }}
      >
      </Sankey>
    </div>
  );
}