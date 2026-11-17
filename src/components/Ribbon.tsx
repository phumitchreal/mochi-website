import { Icon } from './ui';

const words = ['MIDNIGHT MOCHI', 'CODE AT MIDNIGHT', 'BUILD BEYOND LIMITS', '17.11', 'FULL-STACK CATGIRL', 'SLEEP IS OPTIONAL'];

export default function Ribbon() {
  const row = [...words, ...words];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {row.map((w, i) => (
          <span key={i} className="ribbon__item">{w}<Icon name="paw" size={14} /></span>
        ))}
      </div>
    </div>
  );
}
