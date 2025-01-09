import './styles.css'

interface MenuItemProps {
  item: {
    icon: React.ReactNode;
    name: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
      <div className="d-flex my-3">
          <div style={{ width: 30, height: 30 }}>{item.icon}</div>
          <p className="mx-3" style={{ fontSize: 20, color: "black" }}>
              {item.name}
          </p>
      </div>
  );
}

