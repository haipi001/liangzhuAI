import { Sankey } from 'recharts';

const data = {
  nodes: [
    { name: 'Our Team' },
    { name: 'Investor A' },
    { name: 'Investor B' },
    { name: 'Partner X' },
    { name: 'Partner Y' }
  ],
  links: [
    { source: 0, target: 1, value: 1 },
    { source: 0, target: 2, value: 1 },
    { source: 0, target: 3, value: 2 },
    { source: 0, target: 4, value: 3 },
    { source: 3, target: 4, value: 1 }
  ]
};

export default function PartnerWall() {
  return (
    <div className="h-64">
      <Sankey
        width={400}
        height={200}
        data={data}
        node={{ stroke: '#FFD6E0', strokeWidth: 2 }}
        link={{ stroke: '#93C5FD', strokeWidth: 1 }}
        nodePadding={20}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      />
    </div>
  );
}