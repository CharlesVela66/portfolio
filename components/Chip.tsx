interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return <div className="py-2 px-3 rounded-2xl bg-accent-main/20 border-border text-accent-main text-sm font-semibold">{label}</div>
}

export default Chip