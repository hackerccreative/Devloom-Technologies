import logoImage from '../../imports/deloom_logo.png';

interface DevloomLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function DevloomLogo({ size = 'md' }: DevloomLogoProps) {
  const sizes = {
    sm: { container: 200, mark: 42, wordSize: 22, subSize: 9 },
    md: { container: 300, mark: 60, wordSize: 34, subSize: 14 },
    lg: { container: 380, mark: 80, wordSize: 44, subSize: 18 }
  };

  const { container, mark, wordSize, subSize } = sizes[size];

  return (
    <div className="flex items-center gap-3" style={{ width: container }}>
      {/* Logo Image */}
      <div className="relative" style={{ width: mark, height: mark }}>
        <img
          src={logoImage}
          alt="Devloom Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div style={{ fontSize: wordSize, fontFamily: 'Syne, sans-serif', lineHeight: 1 }}>
          <span className="font-semibold text-white">Dev</span>
          <span className="font-light text-[#E8EDF5]">loom</span>
        </div>
        <div
          style={{
            fontSize: subSize,
            letterSpacing: '0.28em',
            marginTop: subSize * 0.3
          }}
          className="text-[#3E4E6A] font-light"
        >
          TECHNOLOGIES
        </div>
      </div>
    </div>
  );
}
